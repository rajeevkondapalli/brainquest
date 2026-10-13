// ============================================================
// BrainQuest - Audio Engine (Web Audio API)
// ------------------------------------------------------------
// No audio files needed - all sounds are generated in the
// browser. Includes a per-second countdown tick, urgent beeps
// for the final 5 seconds, and correct / wrong / time-up sounds.
// ============================================================

(function () {
    "use strict";

    var STORAGE_KEY = "brainquest.sound.v1";

    var ctx = null;
    var master = null;
    var enabled = true;

    // Remember the player's sound preference (default: on).
    try {
        enabled = localStorage.getItem(STORAGE_KEY) !== "off";
    } catch (error) {
        enabled = true;
    }

    function savePreference() {
        try {
            localStorage.setItem(STORAGE_KEY, enabled ? "on" : "off");
        } catch (error) {
            /* storage may be unavailable - ignore */
        }
    }

    function ensureContext() {
        if (ctx) {
            return ctx;
        }

        var AudioContextClass = window.AudioContext || window.webkitAudioContext;

        if (!AudioContextClass) {
            return null;
        }

        try {
            ctx = new AudioContextClass();
            master = ctx.createGain();
            master.gain.value = 0.85;
            master.connect(ctx.destination);
        } catch (error) {
            ctx = null;
            master = null;
        }

        return ctx;
    }

    // Browsers require a user gesture before audio can play.
    function resume() {
        var context = ensureContext();
        if (context && context.state === "suspended") {
            context.resume();
        }
    }

    // Play a single short tone.
    function tone(frequency, startDelay, duration, type, peak) {
        if (!enabled) {
            return;
        }

        var context = ensureContext();
        if (!context) {
            return;
        }

        var startAt = context.currentTime + startDelay;
        var oscillator = context.createOscillator();
        var gain = context.createGain();

        oscillator.type = type || "sine";
        oscillator.frequency.setValueAtTime(frequency, startAt);

        gain.gain.setValueAtTime(0.0001, startAt);
        gain.gain.exponentialRampToValueAtTime(peak || 0.18, startAt + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);

        oscillator.connect(gain);
        gain.connect(master);

        oscillator.start(startAt);
        oscillator.stop(startAt + duration + 0.03);
    }

    var Audio = {

        resume: resume,

        isEnabled: function () {
            return enabled;
        },

        setEnabled: function (value) {
            enabled = !!value;
            savePreference();
            if (enabled) {
                resume();
            }
        },

        toggle: function () {
            enabled = !enabled;
            savePreference();
            if (enabled) {
                resume();
                Audio.click();
            }
            return enabled;
        },

        // One countdown tick. `urgent` = the final 5 seconds.
        tick: function (urgent) {
            if (urgent) {
                tone(1500, 0, 0.09, "square", 0.16);
            } else {
                tone(900, 0, 0.045, "triangle", 0.09);
            }
        },

        // Small UI click.
        click: function () {
            tone(1200, 0, 0.04, "square", 0.05);
        },

        // A run has started.
        start: function () {
            tone(523, 0, 0.12, "sine", 0.18);
            tone(784, 0.1, 0.16, "sine", 0.18);
        },

        // Lifeline used.
        lifeline: function () {
            tone(700, 0, 0.08, "triangle", 0.14);
            tone(1000, 0.07, 0.1, "triangle", 0.14);
        },

        // Correct answer - rising happy arpeggio.
        correct: function () {
            tone(660, 0, 0.14, "sine", 0.2);
            tone(880, 0.12, 0.14, "sine", 0.2);
            tone(1100, 0.24, 0.24, "sine", 0.2);
        },

        // Wrong answer - descending buzz.
        wrong: function () {
            tone(220, 0, 0.28, "sawtooth", 0.22);
            tone(150, 0.16, 0.36, "sawtooth", 0.22);
        },

        // Time up - alarm-like triple beep.
        timeout: function () {
            tone(440, 0, 0.18, "square", 0.2);
            tone(330, 0.2, 0.18, "square", 0.2);
            tone(220, 0.4, 0.42, "square", 0.2);
        }
    };

    window.BrainQuest = window.BrainQuest || {};
    window.BrainQuest.Audio = Audio;

})();
