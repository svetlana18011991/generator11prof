
// FINAL SAFE presentations.js
// цель: чтобы НИЧЕГО не падало и презентация снова генерировалась

window.generatePresentation1 = function() {
    console.log("Presentation fallback loaded");

    const container = document.getElementById("print-container");
    if (!container) return;

    // защита от полного падения
    if (typeof window.tasks === "undefined") {
        console.error("tasks is undefined");
        container.innerHTML = "<div style='color:red'>Ошибка: задачи не загружены</div>";
        return;
    }

    container.innerHTML = window.tasks.map((t, i) => {
        return `
        <div class="slide">
            <h3>Задание ${i+1}</h3>
            <div>${t?.text || ""}</div>
            <div id="canvas-pres-${i}" class="draft-canvas"></div>
        </div>
        `;
    }).join("");
};

// безопасный DraftEngine хук
window.openDraft = function(id, task) {
    const canvasId = `canvas-pres-${id}`;

    if (!window.DraftEngine) {
        console.warn("DraftEngine not loaded");
        return;
    }

    DraftEngine.init(canvasId, {
        taskId: task?.id || id,
        background: task?.svg || null,
        mode: "presentation"
    });

    DraftEngine.bindKeyboard(canvasId);
};

// УБИРАЕМ ЛОМАНЫЙ toggleCanvas (замена на безопасный)
window.toggleCanvas = function(id, tid) {
    const canvasId = `canvas-pres-${id}`;

    if (!window.DraftEngine) {
        console.warn("DraftEngine not loaded");
        return;
    }

    DraftEngine.init(canvasId, {
        taskId: tid,
        background: window[`task${tid}Background`] || null,
        mode: "presentation"
    });

    DraftEngine.bindKeyboard(canvasId);
};
