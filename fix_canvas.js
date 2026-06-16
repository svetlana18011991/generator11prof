// fix_canvas.js

// safety wrapper to prevent double init
window.DraftEngineSafeInit = function(canvasId, task) {
    if (!window.DraftEngine) return;

    const el = document.getElementById(canvasId);
    if (el && el.dataset.initialized === "true") return;

    DraftEngine.init(canvasId, {
        taskId: task?.id,
        background: task?.svg || null,
        mode: "presentation"
    });

    DraftEngine.bindKeyboard(canvasId);

    if (el) el.dataset.initialized = "true";
};