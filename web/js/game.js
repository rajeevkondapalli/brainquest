// ============================================================
// BrainQuest - Main Game
// ------------------------------------------------------------
// Depends on: js/questions.js and js/lifelines.js (loaded first)
// ============================================================

(function () {
    "use strict";

    var BrainQuest = window.BrainQuest;
    var QUESTION_BANK = BrainQuest.QUESTION_BANK;
    var SUBJECTS = BrainQuest.SUBJECTS;
    var Lifelines = BrainQuest.Lifelines;
    var SFX = BrainQuest.Audio;
    var shuffle = BrainQuest.utils.shuffle;
    var randInt = BrainQuest.utils.randInt;

    var QUESTION_TIME = 15000; // 15 seconds per question
    var LIFELINES_PER_RUN = 2;
    var STORAGE_KEY = "brainquest.stats.v1";
    var LIFELINE_KEYS = ["fifty", "friend", "audience", "change"];

    // ---------------------------------------------------------
    // Small helpers
    // ---------------------------------------------------------

    function $(id) {
        return document.getElementById(id);
    }

    function showScreen(id) {
        var screens = document.querySelectorAll(".screen");
        for (var i = 0; i < screens.length; i++) {
            screens[i].classList.toggle("active", screens[i].id === id);
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // ---------------------------------------------------------
    // Persistent statistics (safe against refresh / bad data)
    // ---------------------------------------------------------

    function loadStats() {
        try {
            var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
            if (saved && typeof saved === "object") {
                return {
                    bestStreak: Math.max(0, parseInt(saved.bestStreak, 10) || 0)
                };
            }
        } catch (error) {
            console.warn("[BrainQuest] Could not read saved stats:", error);
        }
        return { bestStreak: 0 };
    }

    function saveStats() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.stats));
        } catch (error) {
            console.warn("[BrainQuest] Could not save stats:", error);
        }
    }

    // ---------------------------------------------------------
    // Game state
    // ---------------------------------------------------------

    // Questions already shown in earlier rounds (this browser session, kept in
    // localStorage so a page refresh does not reset the player back to square one).
    var SEEN_KEY = "brainquest.seen.v1";
    var SEEN_MAX = 600;

    function loadSeen() {
        try {
            var raw = JSON.parse(localStorage.getItem(SEEN_KEY));
            if (Array.isArray(raw)) {
                return new Set(raw.filter(function (id) {
                    return typeof id === "number";
                }));
            }
        } catch (error) {
            // Corrupt or unavailable storage - start fresh, play on.
        }
        return new Set();
    }

    function saveSeen() {
        try {
            // Keep the list bounded so it can never grow without limit.
            if (seenAcrossRounds.size > SEEN_MAX) {
                seenAcrossRounds = new Set(Array.from(seenAcrossRounds).slice(-SEEN_MAX));
            }
            localStorage.setItem(SEEN_KEY, JSON.stringify(Array.from(seenAcrossRounds)));
        } catch (error) {
            // Storage full / private mode - the run simply starts with no memory.
        }
    }

    var seenAcrossRounds = loadSeen();

    var state = {
        stats: loadStats(),
        mode: null,            // "mixed" | "subject"
        subject: null,
        pool: [],
        usedIds: new Set(),
        prepared: null,        // current question (shuffled options)
        questionNumber: 0,
        streak: 0,
        answered: false,
        removed: [],           // option indices removed by 50:50
        lifelines: {},
        bestAtRunStart: 0,
        deadline: 0,
        rafId: null,
        lastTickSecond: null
    };

    // ---------------------------------------------------------
    // DOM references
    // ---------------------------------------------------------

    var ui = {
        homeBest: $("home-best"),
        subjectGrid: $("subject-grid"),

        hudMode: $("hud-mode"),
        hudQno: $("hud-qno"),
        hudStreak: $("hud-streak"),
        hudRecord: $("hud-record"),

        timerNumber: $("timer-number"),
        timerRingFg: $("timer-ring-fg"),
        timerWrap: $("timer-wrap"),

        questionText: $("question-text"),
        answers: $("answers"),

        helper: $("helper"),
        helperTitle: $("helper-title"),
        helperBody: $("helper-body"),

        feedback: $("feedback"),

        overBadge: $("over-badge"),
        overScreen: $("screen-over"),
        overReason: $("over-reason"),
        overStreak: $("over-streak"),
        overScoreLabel: $("over-score-label"),
        overBest: $("over-best"),
        overRecord: $("over-record")
    };

    var lifelineButtons = {};
    document.querySelectorAll("[data-lifeline]").forEach(function (btn) {
        lifelineButtons[btn.getAttribute("data-lifeline")] = btn;
    });

    var RING_CIRCUMFERENCE = 2 * Math.PI * 52;
    if (ui.timerRingFg) {
        ui.timerRingFg.style.strokeDasharray = RING_CIRCUMFERENCE;
    }

    // ---------------------------------------------------------
    // Home screen statistics
    // ---------------------------------------------------------

    function updateHomeStats() {
        ui.homeBest.textContent = state.stats.bestStreak;
    }

    // ---------------------------------------------------------
    // Build subject buttons from the question bank
    // ---------------------------------------------------------

    SUBJECTS.forEach(function (subject) {

        var count = QUESTION_BANK.filter(function (q) {
            return q.subject === subject;
        }).length;

        var btn = document.createElement("button");
        btn.className = "subject-card";
        btn.type = "button";
        btn.innerHTML =
            "<span class=\"subject-name\"></span>" +
            "<span class=\"subject-count\"></span>";

        btn.querySelector(".subject-name").textContent = subject;
        btn.querySelector(".subject-count").textContent = count + " questions";

        btn.addEventListener("click", function () {
            startRun("subject", subject);
        });

        ui.subjectGrid.appendChild(btn);
    });

    // ---------------------------------------------------------
    // Run lifecycle
    // ---------------------------------------------------------

    function startRun(mode, subject) {

        state.mode = mode;
        state.subject = mode === "subject" ? subject : null;

        state.pool = mode === "mixed"
            ? QUESTION_BANK.slice()
            : QUESTION_BANK.filter(function (q) { return q.subject === subject; });

        state.usedIds = new Set();
        state.questionNumber = 0;
        state.streak = 0;
        state.answered = false;
        state.removed = [];
        state.bestAtRunStart = state.stats.bestStreak;

        resetLifelines();

        ui.hudMode.textContent = mode === "mixed" ? "Mixed Mode" : subject;

        updateHud();
        showScreen("screen-game");
        SFX.start();
        loadQuestion(true);
    }

    function resetLifelines() {
        LIFELINE_KEYS.forEach(function (key) {
            state.lifelines[key] = LIFELINES_PER_RUN;
        });
    }

    function availableCount() {
        return state.pool.filter(function (q) {
            return !state.usedIds.has(q.id);
        }).length;
    }

    // Returns null once every question in the pool has been shown this round.
    function drawPreparedQuestion() {

        var available = state.pool.filter(function (q) {
            return !state.usedIds.has(q.id);
        });

        if (available.length === 0) {
            return null;
        }

        // Prefer questions not yet seen in earlier rounds, so each new round
        // surfaces fresh content instead of replaying the same ones.
        var unseen = available.filter(function (q) {
            return !seenAcrossRounds.has(q.id);
        });

        var pickFrom = unseen.length > 0 ? unseen : available;
        var raw = pickFrom[randInt(pickFrom.length)];

        state.usedIds.add(raw.id);
        seenAcrossRounds.add(raw.id);
        saveSeen();

        return prepareQuestion(raw);
    }

    // Shuffle options while keeping track of the correct answer.
    function prepareQuestion(raw) {

        var mapped = raw.options.map(function (text, index) {
            return { text: text, correct: index === raw.answer };
        });

        var shuffled = shuffle(mapped);

        return {
            id: raw.id,
            subject: raw.subject,
            question: raw.question,
            options: shuffled.map(function (o) { return o.text; }),
            answer: shuffled.findIndex(function (o) { return o.correct; })
        };
    }

    function loadQuestion(advance) {

        var next = drawPreparedQuestion();

        // No fresh question left - the player cleared the whole pool.
        if (next === null) {
            roundComplete();
            return;
        }

        if (advance) {
            state.questionNumber++;
        }

        state.prepared = next;
        state.answered = false;
        state.removed = [];

        renderQuestion();
        clearHelper();
        clearFeedback();
        enableAnswers(true);
        renderLifelines();
        updateHud();
        startTimer();
    }

    // ---------------------------------------------------------
    // Rendering
    // ---------------------------------------------------------

    function renderQuestion() {

        ui.questionText.textContent = state.prepared.question;
        ui.answers.innerHTML = "";

        state.prepared.options.forEach(function (option, index) {

            var btn = document.createElement("button");
            btn.className = "answer";
            btn.type = "button";
            btn.dataset.index = index;

            var letter = document.createElement("span");
            letter.className = "answer-letter";
            letter.textContent = "ABCD"[index];

            var text = document.createElement("span");
            text.className = "answer-text";
            text.textContent = option;

            btn.appendChild(letter);
            btn.appendChild(text);

            btn.addEventListener("click", function () {
                handleAnswer(index);
            });

            ui.answers.appendChild(btn);
        });
    }

    function enableAnswers(enabled) {
        ui.answers.querySelectorAll(".answer").forEach(function (btn) {
            btn.disabled = !enabled;
        });
    }

    function updateHud() {
        ui.hudQno.textContent = "Question " + state.questionNumber;
        ui.hudStreak.textContent = state.streak;
        ui.hudRecord.textContent = "Best: " + state.stats.bestStreak;
    }

    function showFeedback(message, type) {
        ui.feedback.textContent = message;
        ui.feedback.className = "feedback " + type + " show";
    }

    function clearFeedback() {
        ui.feedback.textContent = "";
        ui.feedback.className = "feedback";
    }

    function clearHelper() {
        ui.helper.classList.remove("show");
        ui.helperTitle.textContent = "";
        ui.helperBody.innerHTML = "";
    }

    function showHelperText(title, text) {
        ui.helperTitle.textContent = title;
        ui.helperBody.innerHTML = "";

        var p = document.createElement("p");
        p.className = "helper-text";
        p.textContent = text;

        ui.helperBody.appendChild(p);
        ui.helper.classList.add("show");
    }

    function showAudience(percentages) {

        ui.helperTitle.textContent = "👥 Ask the Audience";
        ui.helperBody.innerHTML = "";

        percentages.forEach(function (percent, index) {

            var row = document.createElement("div");
            row.className = "poll-row";

            var label = document.createElement("span");
            label.className = "poll-label";
            label.textContent = "ABCD"[index];

            var track = document.createElement("div");
            track.className = "poll-track";

            var fill = document.createElement("div");
            fill.className = "poll-fill";
            fill.style.width = "0%";

            track.appendChild(fill);

            var value = document.createElement("span");
            value.className = "poll-value";
            value.textContent = percent + "%";

            row.appendChild(label);
            row.appendChild(track);
            row.appendChild(value);
            ui.helperBody.appendChild(row);

            requestAnimationFrame(function () {
                fill.style.width = percent + "%";
            });
        });

        ui.helper.classList.add("show");
    }

    // ---------------------------------------------------------
    // Timer
    // ---------------------------------------------------------

    function startTimer() {

        stopTimer();

        state.deadline = performance.now() + QUESTION_TIME;
        state.lastTickSecond = null;

        function tick(now) {

            if (state.answered) {
                return;
            }

            var left = Math.max(0, state.deadline - now);
            updateTimerUi(left);

            if (left <= 0) {
                handleTimeout();
                return;
            }

            state.rafId = requestAnimationFrame(tick);
        }

        state.rafId = requestAnimationFrame(tick);
    }

    function stopTimer() {
        if (state.rafId) {
            cancelAnimationFrame(state.rafId);
            state.rafId = null;
        }
    }

    function updateTimerUi(left) {

        var seconds = Math.ceil(left / 1000);
        var fraction = Math.max(0, Math.min(1, left / QUESTION_TIME));

        ui.timerNumber.textContent = seconds;
        ui.timerRingFg.style.strokeDashoffset = RING_CIRCUMFERENCE * (1 - fraction);
        ui.timerWrap.classList.toggle("danger", seconds <= 5 && left > 0);

        // Play one tick each time the displayed second changes.
        // The first frame only records the starting second (no beep),
        // and the final 5 seconds use a more urgent tone.
        if (state.lastTickSecond === null) {
            state.lastTickSecond = seconds;
        } else if (seconds > 0 && seconds !== state.lastTickSecond) {
            state.lastTickSecond = seconds;
            SFX.tick(seconds <= 5);
        }
    }

    // ---------------------------------------------------------
    // Answering
    // ---------------------------------------------------------

    function handleAnswer(selectedIndex) {

        if (state.answered) {
            return;
        }

        state.answered = true;
        stopTimer();
        enableAnswers(false);
        renderLifelines();

        var correctIndex = state.prepared.answer;
        var buttons = ui.answers.querySelectorAll(".answer");

        buttons.forEach(function (btn, index) {
            if (index === correctIndex) {
                btn.classList.add("correct");
            }
        });

        if (selectedIndex === correctIndex) {

            state.streak++;

            if (state.streak > state.stats.bestStreak) {
                state.stats.bestStreak = state.streak;
                saveStats();
                updateHomeStats();
                pulseRecord();
            }

            updateHud();
            SFX.correct();
            showFeedback("Correct! Next question...", "good");

            window.setTimeout(function () {
                loadQuestion(true);
            }, 950);

        } else {

            buttons[selectedIndex].classList.add("wrong");
            SFX.wrong();
            showFeedback("Wrong answer!", "bad");

            window.setTimeout(function () {
                gameOver("wrong");
            }, 1400);
        }
    }

    function handleTimeout() {

        if (state.answered) {
            return;
        }

        state.answered = true;
        stopTimer();
        enableAnswers(false);
        renderLifelines();

        var buttons = ui.answers.querySelectorAll(".answer");
        buttons.forEach(function (btn, index) {
            if (index === state.prepared.answer) {
                btn.classList.add("correct");
            }
        });

        showFeedback("Time's up!", "bad");

        SFX.timeout();

        window.setTimeout(function () {
            gameOver("timeout");
        }, 1400);
    }

    function pulseRecord() {
        ui.hudRecord.classList.add("pulse");
        window.setTimeout(function () {
            ui.hudRecord.classList.remove("pulse");
        }, 700);
    }

    // ---------------------------------------------------------
    // Lifelines
    // ---------------------------------------------------------

    function renderLifelines() {

        LIFELINE_KEYS.forEach(function (key) {

            var btn = lifelineButtons[key];
            var left = state.lifelines[key];

            btn.querySelector(".lifeline-count").textContent = left;

            var disabled = left <= 0 || state.answered;

            // 50:50 can only be applied once per question.
            if (key === "fifty" && state.removed.length > 0) {
                disabled = true;
            }

            // Cannot swap for a new question once the pool is spent.
            if (key === "change" && availableCount() === 0) {
                disabled = true;
            }

            btn.disabled = disabled;
            btn.classList.toggle("used-up", left <= 0);
        });
    }

    function useLifeline(key) {

        if (state.answered || state.lifelines[key] <= 0) {
            return;
        }

        // Do not play the sound for a 50:50 that is already active.
        if (key === "fifty" && state.removed.length > 0) {
            return;
        }

        // A swap is pointless if the pool has nothing left to offer.
        if (key === "change" && availableCount() === 0) {
            return;
        }

        SFX.lifeline();

        if (key === "fifty") {

            var remove = Lifelines.fiftyFifty(state.prepared, state.removed);
            state.removed = state.removed.concat(remove);
            state.lifelines.fifty--;

            remove.forEach(function (index) {
                var btn = ui.answers.querySelector('.answer[data-index="' + index + '"]');
                if (btn) {
                    btn.classList.add("removed");
                    btn.disabled = true;
                }
            });

            renderLifelines();
            return;
        }

        if (key === "friend") {
            state.lifelines.friend--;
            var suggestion = Lifelines.phoneFriend(state.prepared);
            showHelperText("📞 Phone a Friend", suggestion.text);
            renderLifelines();
            return;
        }

        if (key === "audience") {
            state.lifelines.audience--;
            showAudience(Lifelines.askAudience(state.prepared));
            renderLifelines();
            return;
        }

        if (key === "change") {
            // Replace the question WITHOUT touching streak or ending the game.
            state.lifelines.change--;
            loadQuestion(false);
        }
    }

    // ---------------------------------------------------------
    // Game over
    // ---------------------------------------------------------

    function gameOver(reason) {

        stopTimer();
        state.answered = true;

        var isNewRecord = state.streak > state.bestAtRunStart && state.streak > 0;

        ui.overBadge.textContent = "RUN COMPLETE";
        ui.overBadge.classList.remove("win");
        ui.overScoreLabel.textContent = "correct in a row";

        ui.overReason.textContent = reason === "timeout"
            ? "You ran out of time!"
            : "Wrong answer. Survival ends here!";

        ui.overStreak.textContent = state.streak;
        ui.overBest.textContent = state.stats.bestStreak;
        ui.overRecord.classList.toggle("show", isNewRecord);

        updateHomeStats();
        showScreen("screen-over");
    }

    // Every question in the pool has been shown without losing - round won.
    function roundComplete() {

        stopTimer();
        state.answered = true;

        var isNewRecord = state.streak > state.bestAtRunStart && state.streak > 0;

        ui.overBadge.textContent = "ROUND COMPLETE 🏆";
        ui.overBadge.classList.add("win");
        ui.overScoreLabel.textContent = "questions cleared";

        ui.overReason.textContent = state.mode === "subject"
            ? "You cleared every " + state.subject + " question!"
            : "You cleared every question!";

        ui.overStreak.textContent = state.streak;
        ui.overBest.textContent = state.stats.bestStreak;
        ui.overRecord.classList.toggle("show", isNewRecord);

        updateHomeStats();
        showScreen("screen-over");
    }

    // ---------------------------------------------------------
    // Event wiring
    // ---------------------------------------------------------

    $("btn-play").addEventListener("click", function () {
        showScreen("screen-mode");
    });

    $("btn-mixed").addEventListener("click", function () {
        startRun("mixed");
    });

    $("btn-subject").addEventListener("click", function () {
        showScreen("screen-subject");
    });

    $("btn-mode-back").addEventListener("click", function () {
        showScreen("screen-home");
    });

    $("btn-subject-back").addEventListener("click", function () {
        showScreen("screen-mode");
    });

    $("btn-restart").addEventListener("click", function () {
        startRun(state.mode, state.subject);
    });

    $("btn-home").addEventListener("click", function () {
        updateHomeStats();
        showScreen("screen-home");
    });

    // ---------------------------------------------------------
    // Sound toggle
    // ---------------------------------------------------------

    var soundToggle = $("sound-toggle");

    function renderSoundToggle() {
        var on = SFX.isEnabled();
        soundToggle.textContent = on ? "🔊" : "🔇";
        soundToggle.classList.toggle("muted", !on);
        soundToggle.setAttribute("aria-pressed", on ? "true" : "false");
    }

    soundToggle.addEventListener("click", function () {
        SFX.toggle();
        renderSoundToggle();
    });

    // Browsers block audio until the first user gesture - unlock it then.
    document.addEventListener("pointerdown", function unlockAudio() {
        SFX.resume();
        document.removeEventListener("pointerdown", unlockAudio);
    });

    Object.keys(lifelineButtons).forEach(function (key) {
        lifelineButtons[key].addEventListener("click", function () {
            useLifeline(key);
        });
    });

    // Keyboard shortcuts: 1-4 answers the current question.
    document.addEventListener("keydown", function (event) {

        if (!$("screen-game").classList.contains("active") || state.answered) {
            return;
        }

        var number = parseInt(event.key, 10);

        if (number >= 1 && number <= 4) {
            handleAnswer(number - 1);
        }
    });

    // ---------------------------------------------------------
    // Boot
    // ---------------------------------------------------------

    updateHomeStats();
    renderSoundToggle();
    showScreen("screen-home");

})();
