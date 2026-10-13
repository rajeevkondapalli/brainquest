// ============================================================
// BrainQuest - Home 3D Effects
// ------------------------------------------------------------
// Adds a subtle mouse-driven parallax / tilt to the home screen.
// The CSS reads two custom properties set here:
//   --px  horizontal pointer position  (-0.5 .. 0.5)
//   --py  vertical   pointer position  (-0.5 .. 0.5)
//
// Pure vanilla JS. No dependencies. Motion is disabled on touch
// devices and when the user prefers reduced motion.
// ============================================================

(function () {
    "use strict";

    var screen = document.getElementById("screen-home");
    var stage = document.getElementById("home-stage");

    if (!screen || !stage) {
        return; // home markup not present - nothing to do
    }

    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReduced || coarsePointer) {
        return; // keep it flat on touch / reduced-motion
    }

    var EASE = 0.12; // follow smoothing (0 = instant, 1 = frozen)

    var targetX = 0;
    var targetY = 0;
    var currentX = 0;
    var currentY = 0;

    var frame = null;

    function render() {
        currentX += (targetX - currentX) * EASE;
        currentY += (targetY - currentY) * EASE;

        stage.style.setProperty("--px", currentX.toFixed(4));
        stage.style.setProperty("--py", currentY.toFixed(4));

        // Keep animating while we are still catching up to the pointer.
        if (Math.abs(currentX - targetX) > 0.0005 || Math.abs(currentY - targetY) > 0.0005) {
            frame = window.requestAnimationFrame(render);
        } else {
            frame = null;
        }
    }

    function schedule() {
        if (frame === null) {
            frame = window.requestAnimationFrame(render);
        }
    }

    function onPointerMove(event) {
        // Only react when the home screen is the one on display.
        if (!screen.classList.contains("active")) {
            return;
        }

        var rect = stage.getBoundingClientRect();
        if (!rect.width || !rect.height) {
            return;
        }

        targetX = (event.clientX - rect.left) / rect.width - 0.5;
        targetY = (event.clientY - rect.top) / rect.height - 0.5;
        schedule();
    }

    function reset() {
        targetX = 0;
        targetY = 0;
        schedule();
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    screen.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
})();
