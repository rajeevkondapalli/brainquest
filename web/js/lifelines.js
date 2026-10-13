// ============================================================
// BrainQuest - Lifelines (pure logic, no DOM)
// ------------------------------------------------------------
// "prepared" is the current question after options were shuffled:
//   { id, subject, question, options: [4 strings], answer: index }
// ============================================================

(function () {
    "use strict";

    function randInt(max) {
        return Math.floor(Math.random() * max);
    }

    function shuffle(array) {
        var copy = array.slice();
        for (var i = copy.length - 1; i > 0; i--) {
            var j = randInt(i + 1);
            var tmp = copy[i];
            copy[i] = copy[j];
            copy[j] = tmp;
        }
        return copy;
    }

    var Lifelines = {

        // 50:50 -> returns the indices of two wrong options to remove.
        // `alreadyRemoved` lets it skip options that are already hidden.
        fiftyFifty: function (prepared, alreadyRemoved) {

            alreadyRemoved = alreadyRemoved || [];

            var wrongIndices = [];

            prepared.options.forEach(function (_, index) {
                if (index !== prepared.answer && alreadyRemoved.indexOf(index) === -1) {
                    wrongIndices.push(index);
                }
            });

            return shuffle(wrongIndices).slice(0, 2);
        },

        // Phone a Friend -> a suggestion that is correct ~70% of the time.
        phoneFriend: function (prepared) {

            var isCorrect = Math.random() < 0.7;
            var index = prepared.answer;

            if (!isCorrect) {
                var wrongIndices = [];
                prepared.options.forEach(function (_, i) {
                    if (i !== prepared.answer) {
                        wrongIndices.push(i);
                    }
                });
                index = wrongIndices[randInt(wrongIndices.length)];
            }

            var letter = "ABCD"[index];
            var optionText = prepared.options[index];

            var text;

            if (isCorrect) {
                text = "I'm fairly confident it's " + letter +
                    ": \"" + optionText + "\". We covered this recently - trust me on this one!";
            } else {
                text = "Hmm, I'd probably go with " + letter +
                    ": \"" + optionText + "\". Not fully sure though, good luck!";
            }

            return {
                index: index,
                correct: isCorrect,
                text: text
            };
        },

        // Ask the Audience -> four percentages that always sum to 100.
        // The correct option is biased to be the most popular.
        askAudience: function (prepared) {

            var weights = [0, 0, 0, 0];

            // Correct answer gets 45% - 75%
            weights[prepared.answer] = 45 + randInt(31);

            var remaining = 100 - weights[prepared.answer];

            var others = [0, 1, 2, 3].filter(function (i) {
                return i !== prepared.answer;
            });

            var shuffledOthers = shuffle(others);

            // Split the remaining votes across the three wrong options.
            var first = randInt(remaining + 1);
            var second = randInt(remaining - first + 1);
            var third = remaining - first - second;

            weights[shuffledOthers[0]] = first;
            weights[shuffledOthers[1]] = second;
            weights[shuffledOthers[2]] = third;

            // Safety net: guarantee an exact total of 100.
            var total = weights.reduce(function (sum, value) {
                return sum + value;
            }, 0);

            if (total !== 100) {
                weights[prepared.answer] += (100 - total);
            }

            return weights;
        }

    };

    window.BrainQuest = window.BrainQuest || {};
    window.BrainQuest.Lifelines = Lifelines;
    window.BrainQuest.utils = {
        randInt: randInt,
        shuffle: shuffle
    };

})();
