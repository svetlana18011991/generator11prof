// presentations.js (CLEAN FIX v2.2)

// SAFE OPEN DRAFT (presentation)
window.openDraft = function(id, task) {
    const canvasId = `canvas-pres-${id}`;

    if (!window.DraftEngine) {
        console.error("DraftEngine not loaded");
        return;
    }

    DraftEngine.init(canvasId, {
        taskId: task?.id || id,
        background: task?.svg || null,
        mode: "presentation"
    });

    DraftEngine.bindKeyboard(canvasId);
};

// OLD CONFLICT FIX: override broken toggleCanvas safely
window.toggleCanvas = function(id, tid) {
    const canvasId = `canvas-pres-${id}`;

    if (!window.DraftEngine) {
        console.error("DraftEngine not loaded");
        return;
    }

    DraftEngine.init(canvasId, {
        taskId: tid,
        background: window[`task${tid}Background`] || null,
        mode: "presentation"
    });

    DraftEngine.bindKeyboard(canvasId);
};