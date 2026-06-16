
// FIX v2.2 presentations.js

function openDraft(i, t) {
    const canvasId = `canvas-pres-${i}`;

    if (!window.DraftEngine) {
        console.error('DraftEngine not loaded');
        return;
    }

    DraftEngine.init(canvasId, {
        taskId: t.id,
        background: t.svg || null,
        mode: 'presentation'
    });

    DraftEngine.bindKeyboard(canvasId);
}

window.openDraft = openDraft;
