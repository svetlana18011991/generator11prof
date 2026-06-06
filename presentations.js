// ==========================================
// ОБЩАЯ НАСТРОЙКА: показывать верный ответ при ошибке
// ==========================================
function getShowCorrectOnErrorSetting() {
    const toggle = document.getElementById('toggle-show-correct');
    if (toggle) return toggle.checked;

    if (window.presentationSettings && typeof window.presentationSettings.showCorrectOnError !== 'undefined') {
        return !!window.presentationSettings.showCorrectOnError;
    }

    if (window.generatorSettings && typeof window.generatorSettings.showCorrectOnError !== 'undefined') {
        return !!window.generatorSettings.showCorrectOnError;
    }

    return false;
}

// ==========================================
// АВТОРСКИЙ СТИЛЬ 1 (Оранжевый неон)
// ==========================================
function generatePresentation1() {
    let teacherName = document.getElementById('teacher-name').value.trim();
    let authorLine = "";
    if (document.getElementById('toggle-signature').checked && teacherName) {
        let verb = (document.getElementById('teacher-gender').value === 'male') ? 'подготовил' : 'подготовила';
        authorLine = `Вариант ${verb}: ${teacherName}`;
    }

    let showSolutions = document.getElementById('toggle-explanations') ? document.getElementById('toggle-explanations').checked : true;
    let instantCheck = document.getElementById('toggle-instant-check') ? document.getElementById('toggle-instant-check').checked : false;
    let showCorrectOnError = document.getElementById('toggle-show-correct') ? document.getElementById('toggle-show-correct').checked : false;
    let showCorrectOnError = getShowCorrectOnErrorSetting();

    let topicsList = window.selectedBlockTitles.map(t => `<li style="margin-bottom: 10px;">${t}</li>`).join('');
    
    let taskSlides = window.currentGeneratedTasks.map((t, i) => `
        <div class="slide task-slide" style="background-image: url('${window.ASSETS_URL}p2.jpg')">
            <div class="header-plate" style="position: absolute; top: calc(15% - 107px); left: 70%; transform: translateX(-50%); width: calc(351px * 0.64); height: calc(220px * 0.64); background: url('${window.ASSETS_URL}p3.jpg') center/100% 100% no-repeat; display: flex; justify-content: center; align-items: center; z-index: 30;">
                <h3 style="font-family: 'Caveat', cursive; font-size: calc(39px * 0.64); color: #333; margin: 0; padding-bottom: 5px;">Задание ${i+1}</h3>
            </div>
            
            <div class="task-right-side ${t.svg && String(t.svg).trim() !== "" ? 'task-card-visual' : 'task-card-text-only'}" style="position: absolute; right: 5%; top: 15%; bottom: 15%; width: 50%; background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 15px; box-shadow: 0 0 25px #ff8c00, inset 0 0 15px #ff8c00; border: 2px solid #ff8c00; overflow: hidden; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;" onclick="event.stopPropagation();">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
                    ${t.svg ? `<div style="margin-bottom: 15px; display: flex; justify-content: center; align-items: center; width: 100%; flex-shrink: 1; min-height: 0;" class="svg-wrapper">${t.svg}</div>` : ""}
                    <div class="task-text" style="margin-bottom: 20px; text-align: center; color: #333; width: 100%; flex-shrink: 1; overflow-y: auto;">${t.text}</div>
                    
                    <div class="pres-check-zone" style="display: flex; gap: 15px; justify-content: center; align-items: center; width: 100%; flex-wrap: wrap; flex-shrink: 0;">
                        <input type="text" class="pres-input" placeholder="Ответ..." id="ans-${i}" style="font-size: 1.1em; padding: 12px 20px; width: 180px; border-radius: 10px; border: 2px solid #ccc; text-align: center; outline: none;">
                        <div id="pres-feedback-${i}" class="pres-feedback" style="width:100%; text-align:center; font-weight:bold; min-height:24px; display:none;"></div>
                        
                        ${ instantCheck ? `<button class="pres-btn-instant" onclick="checkPresSingle(${i}, '${t.answer}', this, ${showCorrectOnError})" style="background: #e8f5e9; border: 1px solid #4CAF50; border-radius: 10px; font-size: 18px; cursor: pointer; padding: 8px 12px; outline: none; box-shadow: 0 4px 10px rgba(76,175,80,0.2);" title="Проверить">✅</button>` : '' }
                        
                        ${ showSolutions && t.theory && t.theory.trim() !== '' ? `<button id="pres-help-${i}" class="btn-settings" style="display:none; background: #e3f2fd; color: #003399; border: 1px solid #90caf9; font-size: 16px; padding: 8px 12px; border-radius: 8px; cursor: pointer; font-weight: bold;" onclick="event.stopPropagation(); window.openTheoryModalLocal('theory-pres-${i}')" title="Открыть разбор">💡 Разбор</button>` : '' }
                        
                        <button class="pres-btn" onclick="submitTask(${i}, '${t.answer}')" data-correct="${t.answer}" style="font-size: 1.1em; padding: 12px 30px; border-radius: 10px; border: none; background: #ff8c00; color: white; cursor: pointer; font-weight: bold;">ОК</button>
                        <button class="btn-settings" style="background: #fff3e0; color: #e65100; border: 1px solid #ffcc80; font-size: 20px; padding: 8px 12px; border-radius: 8px; cursor: pointer;" onclick="event.stopPropagation(); window.toggleCanvas('pres-${i}')" title="Открыть черновик">✏️</button>
                    </div>
                    <div id="pres-status-${i}" class="pres-status" style="margin-top: 10px; min-height: 28px; font-size: 18px; font-weight: bold; text-align: center;"></div>

                </div>
            </div>

            <div id="draw-wrapper-pres-${i}" style="display:none; position: absolute; left: 5%; top: 15%; width: 40%; height: 70%; background: rgba(255,255,255,0.95); border: 2px solid #ff8c00; border-radius: 15px; padding: 20px; box-shadow: 0 0 25px rgba(0,0,0,0.2); box-sizing: border-box; z-index: 20;" onclick="event.stopPropagation();">
                <div style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-bottom: 10px; background: #e3f2fd; padding: 8px 15px; border-radius: 8px; border: 1px solid #bbdefb; color: #333;">
                    <button onclick="window.setTool('pres-${i}', 'pointer')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Указатель (Перетаскивание)">👆</button>
                    <button onclick="window.setTool('pres-${i}', 'pen')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Карандаш">🖊️</button>
                    <select id="tool-select-pres-${i}" onchange="window.setTool('pres-${i}', this.value)" style="background: #fff; border: 1px solid #90caf9; border-radius: 4px; padding: 4px 8px; font-size: 14px; cursor: pointer; outline: none; color: #003399; font-weight: 500;">
                        <option value="" disabled selected hidden>🔺 Фигуры</option>
                        <option value="line">📏 Прямая</option>
                        <option value="vector">↗️ Вектор</option>
                        <option value="circle">⭕ Окружность</option>
                        <option value="triangle">🔺 Треугольник</option>
                        <option value="cylinder">🛢️ Цилиндр</option>
                        <option value="cone">🍦 Конус</option>
                        <option value="sphere">🔮 Сфера</option>
                    </select>
                    <input type="color" id="color-pres-${i}" value="#003399" style="cursor:pointer; height: 30px; width: 35px; border: none; background: transparent; padding: 0;">
                    <input type="range" id="size-pres-${i}" min="1" max="15" value="3" style="cursor:pointer; width: 80px;">
                    <button onclick="window.setTool('pres-${i}', 'eraser')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Ластик">🧽</button>
                    <div style="flex-grow:1;"></div>
                    <button onclick="window.clearCanvas('pres-${i}')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Очистить всё">🗑️</button>
                    <input type="hidden" id="tool-pres-${i}" value="pen">
                </div>
                <div style="background-color: #fff; background-size: 20px 20px; background-image: linear-gradient(to right, #d2e3f2 1px, transparent 1px), linear-gradient(to bottom, #d2e3f2 1px, transparent 1px); border: 2px solid #bbdefb; border-radius: 8px; overflow: hidden; height: calc(100% - 60px); min-height: 250px;"><canvas id="canvas-pres-${i}" style="display:block; width:100%; height:100%; touch-action: none; cursor: crosshair;"></canvas></div>
            </div>
            <div class="pres-footer" style="position: absolute; bottom: 30px; left: 70px; font-family: 'Caveat'; font-size: 26px; color: #555;">Шкатулка математических интерактивов</div>
        </div>
    `).join('');

    let hiddenTheories = window.currentGeneratedTasks.map((t, i) => `<div id="theory-pres-${i}" style="display:none;">${encodeURIComponent(t.theory)}</div>`).join('');
    generateAndDownloadPresentationHTML(taskSlides, hiddenTheories, authorLine, topicsList, "Презентация_Урока_Стиль1.html", 'p1.jpg', 'p2.jpg', '#ff8c00');
}

// ==========================================
// АВТОРСКИЙ СТИЛЬ 2 (Розовый неон)
// ==========================================
function generatePresentation2() {
    let teacherName = document.getElementById('teacher-name').value.trim();
    let authorLine = "";
    if (document.getElementById('toggle-signature').checked && teacherName) {
        let verb = (document.getElementById('teacher-gender').value === 'male') ? 'подготовил' : 'подготовила';
        authorLine = `Вариант ${verb}: ${teacherName}`;
    }

    let showSolutions = document.getElementById('toggle-explanations') ? document.getElementById('toggle-explanations').checked : true;
    let instantCheck = document.getElementById('toggle-instant-check') ? document.getElementById('toggle-instant-check').checked : false;
    let showCorrectOnError = document.getElementById('toggle-show-correct') ? document.getElementById('toggle-show-correct').checked : false;
    let showCorrectOnError = getShowCorrectOnErrorSetting();

    let topicsList = window.selectedBlockTitles.map(t => `<li style="margin-bottom: 10px;">${t}</li>`).join('');
    
    let taskSlides = window.currentGeneratedTasks.map((t, i) => `
        <div class="slide task-slide" style="background-image: url('${window.ASSETS_URL}f2.png')">
            <div class="header-plate" style="position: absolute; top: calc(15% - 107px); left: 70%; transform: translateX(-50%); width: calc(351px * 0.64); height: calc(220px * 0.64); background: url('${window.ASSETS_URL}f4.png') center/100% 100% no-repeat; display: flex; justify-content: center; align-items: center; z-index: 30;">
                <h3 style="font-family: 'Caveat', cursive; font-size: calc(39px * 0.64); color: #333; margin: 0; padding-bottom: 5px;">Задание ${i+1}</h3>
            </div>
            
            <div class="task-right-side ${t.svg && String(t.svg).trim() !== "" ? 'task-card-visual' : 'task-card-text-only'}" style="position: absolute; right: 5%; top: 15%; bottom: 15%; width: 50%; background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 20px; box-shadow: 0 0 25px #ff4081, inset 0 0 15px #ff4081; border: 2px solid #ff4081; overflow: hidden; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;" onclick="event.stopPropagation();">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
                    ${t.svg ? `<div style="margin-bottom: 15px; display: flex; justify-content: center; align-items: center; width: 100%; flex-shrink: 1; min-height: 0;" class="svg-wrapper">${t.svg}</div>` : ""}
                    <div class="task-text" style="margin-bottom: 20px; text-align: center; color: #333; width: 100%; flex-shrink: 1; overflow-y: auto;">${t.text}</div>
                    
                    <div class="pres-check-zone" style="display: flex; gap: 15px; justify-content: center; align-items: center; width: 100%; flex-wrap: wrap; flex-shrink: 0;">
                        <input type="text" class="pres-input" placeholder="Ответ..." id="ans-${i}" style="font-size: 1.1em; padding: 12px 20px; width: 180px; border-radius: 12px; border: 2px solid #f8bbd0; text-align: center; outline: none; color: #e91e63;">
                        <div id="pres-feedback-${i}" class="pres-feedback" style="width:100%; text-align:center; font-weight:bold; min-height:24px; display:none;"></div>
                        
                        ${ instantCheck ? `<button class="pres-btn-instant" onclick="checkPresSingle(${i}, '${t.answer}', this, ${showCorrectOnError})" style="background: #e8f5e9; border: 1px solid #4CAF50; border-radius: 10px; font-size: 18px; cursor: pointer; padding: 8px 12px; outline: none; box-shadow: 0 4px 10px rgba(76,175,80,0.2);" title="Проверить">✅</button>` : '' }
                        
                        ${ showSolutions && t.theory && t.theory.trim() !== '' ? `<button id="pres-help-${i}" class="btn-settings" style="display:none; background: #e3f2fd; color: #003399; border: 1px solid #90caf9; font-size: 16px; padding: 8px 12px; border-radius: 8px; cursor: pointer; font-weight: bold;" onclick="event.stopPropagation(); window.openTheoryModalLocal('theory-pres-${i}')" title="Открыть разбор">💡 Разбор</button>` : '' }
                        
                        <button class="pres-btn" onclick="submitTask(${i}, '${t.answer}')" data-correct="${t.answer}" style="font-size: 1.1em; padding: 12px 30px; border-radius: 12px; border: none; background: #ff4081; color: white; cursor: pointer; font-weight: bold; box-shadow: 0 5px 15px rgba(255,64,129,0.3);">ОК</button>
                        <button class="btn-settings" style="background: #fce4ec; color: #d81b60; border: 1px solid #f8bbd0; font-size: 20px; padding: 8px 12px; border-radius: 10px; cursor: pointer;" onclick="event.stopPropagation(); window.toggleCanvas('pres-${i}')" title="Открыть черновик">✏️</button>
                    </div>
                    <div id="pres-status-${i}" class="pres-status" style="margin-top: 10px; min-height: 28px; font-size: 18px; font-weight: bold; text-align: center;"></div>

                </div>
            </div>

            <div id="draw-wrapper-pres-${i}" style="display:none; position: absolute; left: 5%; top: 15%; width: 40%; height: 70%; background: rgba(255,255,255,0.95); border: 2px solid #ff4081; border-radius: 20px; padding: 20px; box-shadow: 0 15px 40px rgba(255,64,129,0.15); box-sizing: border-box; z-index: 20;" onclick="event.stopPropagation();">
                <div style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-bottom: 10px; background: #fce4ec; padding: 8px 15px; border-radius: 12px; border: 1px solid #f8bbd0; color: #333;">
                    <button onclick="window.setTool('pres-${i}', 'pointer')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Указатель (Перетаскивание)">👆</button>
                    <button onclick="window.setTool('pres-${i}', 'pen')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Карандаш">🖊️</button>
                    <select id="tool-select-pres-${i}" onchange="window.setTool('pres-${i}', this.value)" style="background: #fff; border: 1px solid #f48fb1; border-radius: 8px; padding: 4px 8px; font-size: 14px; cursor: pointer; outline: none; color: #d81b60; font-weight: 500;">
                        <option value="" disabled selected hidden>🔺 Фигуры</option>
                        <option value="line">📏 Прямая</option>
                        <option value="vector">↗️ Вектор</option>
                        <option value="circle">⭕ Окружность</option>
                        <option value="triangle">🔺 Треугольник</option>
                        <option value="cylinder">🛢️ Цилиндр</option>
                        <option value="cone">🍦 Конус</option>
                        <option value="sphere">🔮 Сфера</option>
                    </select>
                    <input type="color" id="color-pres-${i}" value="#d81b60" style="cursor:pointer; height: 30px; width: 35px; border: none; background: transparent; padding: 0;">
                    <input type="range" id="size-pres-${i}" min="1" max="15" value="3" style="cursor:pointer; width: 80px;">
                    <button onclick="window.setTool('pres-${i}', 'eraser')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Ластик">🧽</button>
                    <div style="flex-grow:1;"></div>
                    <button onclick="window.clearCanvas('pres-${i}')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Очистить всё">🗑️</button>
                    <input type="hidden" id="tool-pres-${i}" value="pen">
                </div>
                <div style="background-color: #fff; background-size: 20px 20px; background-image: linear-gradient(to right, #fce4ec 1px, transparent 1px), linear-gradient(to bottom, #fce4ec 1px, transparent 1px); border: 2px solid #f8bbd0; border-radius: 12px; overflow: hidden; height: calc(100% - 60px); min-height: 250px;"><canvas id="canvas-pres-${i}" style="display:block; width:100%; height:100%; touch-action: none; cursor: crosshair;"></canvas></div>
            </div>
            <div class="pres-footer" style="position: absolute; bottom: 30px; left: 70px; font-family: 'Caveat'; font-size: 26px; color: #555;">Шкатулка математических интерактивов</div>
        </div>
    `).join('');

    let hiddenTheories = window.currentGeneratedTasks.map((t, i) => `<div id="theory-pres-${i}" style="display:none;">${encodeURIComponent(t.theory)}</div>`).join('');
    generateAndDownloadPresentationHTML(taskSlides, hiddenTheories, authorLine, topicsList, "Презентация_Урока_Стиль2.html", 'f1.png', 'f2.png', '#ff4081');
}

// ==========================================
// АВТОРСКИЙ СТИЛЬ 3 (Фиолетовый неон, без плашки)
// ==========================================
function generatePresentation3() {
    let teacherName = document.getElementById('teacher-name').value.trim();
    let authorLine = "";
    if (document.getElementById('toggle-signature').checked && teacherName) {
        let verb = (document.getElementById('teacher-gender').value === 'male') ? 'подготовил' : 'подготовила';
        authorLine = `Вариант ${verb}: ${teacherName}`;
    }

    let showSolutions = document.getElementById('toggle-explanations') ? document.getElementById('toggle-explanations').checked : true;
    let instantCheck = document.getElementById('toggle-instant-check') ? document.getElementById('toggle-instant-check').checked : false;
    let showCorrectOnError = document.getElementById('toggle-show-correct') ? document.getElementById('toggle-show-correct').checked : false;
    let showCorrectOnError = getShowCorrectOnErrorSetting();

    let topicsList = window.selectedBlockTitles.map(t => `<li style="margin-bottom: 10px;">${t}</li>`).join('');
    
    let taskSlides = window.currentGeneratedTasks.map((t, i) => `
        <div class="slide task-slide" style="background-image: url('${window.ASSETS_URL}s1.png')">
            <div style="position: absolute; top: calc(15% - 55px); left: 70%; transform: translateX(-50%); z-index: 30;">
                <h3 style="font-family: 'Caveat', cursive; font-size: 38px; color: #fff; text-shadow: 0 0 10px #9c27b0, 0 0 20px #9c27b0; margin: 0;">Задание ${i+1}</h3>
            </div>
            
            <div class="task-right-side ${t.svg && String(t.svg).trim() !== "" ? 'task-card-visual' : 'task-card-text-only'}" style="position: absolute; right: 5%; top: 15%; bottom: 15%; width: 50%; background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 20px; box-shadow: 0 0 25px #9c27b0, inset 0 0 15px #9c27b0; border: 2px solid #9c27b0; overflow: hidden; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;" onclick="event.stopPropagation();">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
                    ${t.svg ? `<div style="margin-bottom: 15px; display: flex; justify-content: center; align-items: center; width: 100%; flex-shrink: 1; min-height: 0;" class="svg-wrapper">${t.svg}</div>` : ""}
                    <div class="task-text" style="margin-bottom: 20px; text-align: center; color: #333; width: 100%; flex-shrink: 1; overflow-y: auto;">${t.text}</div>
                    
                    <div class="pres-check-zone" style="display: flex; gap: 15px; justify-content: center; align-items: center; width: 100%; flex-wrap: wrap; flex-shrink: 0;">
                        <input type="text" class="pres-input" placeholder="Ответ..." id="ans-${i}" style="font-size: 1.1em; padding: 12px 20px; width: 180px; border-radius: 12px; border: 2px solid #e1bee7; text-align: center; outline: none; color: #7b1fa2;">
                        <div id="pres-feedback-${i}" class="pres-feedback" style="width:100%; text-align:center; font-weight:bold; min-height:24px; display:none;"></div>
                        
                        ${ instantCheck ? `<button class="pres-btn-instant" onclick="checkPresSingle(${i}, '${t.answer}', this, ${showCorrectOnError})" style="background: #e8f5e9; border: 1px solid #4CAF50; border-radius: 10px; font-size: 18px; cursor: pointer; padding: 8px 12px; outline: none; box-shadow: 0 4px 10px rgba(76,175,80,0.2);" title="Проверить">✅</button>` : '' }
                        
                        ${ showSolutions && t.theory && t.theory.trim() !== '' ? `<button id="pres-help-${i}" class="btn-settings" style="display:none; background: #e3f2fd; color: #003399; border: 1px solid #90caf9; font-size: 16px; padding: 8px 12px; border-radius: 8px; cursor: pointer; font-weight: bold;" onclick="event.stopPropagation(); window.openTheoryModalLocal('theory-pres-${i}')" title="Открыть разбор">💡 Разбор</button>` : '' }
                        
                        <button class="pres-btn" onclick="submitTask(${i}, '${t.answer}')" data-correct="${t.answer}" style="font-size: 1.1em; padding: 12px 30px; border-radius: 12px; border: none; background: #9c27b0; color: white; cursor: pointer; font-weight: bold; box-shadow: 0 5px 15px rgba(156,39,176,0.3);">ОК</button>
                        <button class="btn-settings" style="background: #f3e5f5; color: #7b1fa2; border: 1px solid #e1bee7; font-size: 20px; padding: 8px 12px; border-radius: 10px; cursor: pointer;" onclick="event.stopPropagation(); window.toggleCanvas('pres-${i}')" title="Открыть черновик">✏️</button>
                    </div>
                    <div id="pres-status-${i}" class="pres-status" style="margin-top: 10px; min-height: 28px; font-size: 18px; font-weight: bold; text-align: center;"></div>

                </div>
            </div>

            <div id="draw-wrapper-pres-${i}" style="display:none; position: absolute; left: 5%; top: 15%; width: 40%; height: 70%; background: rgba(255,255,255,0.95); border: 2px solid #9c27b0; border-radius: 20px; padding: 20px; box-shadow: 0 15px 40px rgba(156,39,176,0.15); box-sizing: border-box; z-index: 20;" onclick="event.stopPropagation();">
                <div style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-bottom: 10px; background: #f3e5f5; padding: 8px 15px; border-radius: 12px; border: 1px solid #e1bee7; color: #333;">
                    <button onclick="window.setTool('pres-${i}', 'pointer')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Указатель (Перетаскивание)">👆</button>
                    <button onclick="window.setTool('pres-${i}', 'pen')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Карандаш">🖊️</button>
                    <select id="tool-select-pres-${i}" onchange="window.setTool('pres-${i}', this.value)" style="background: #fff; border: 1px solid #ce93d8; border-radius: 8px; padding: 4px 8px; font-size: 14px; cursor: pointer; outline: none; color: #7b1fa2; font-weight: 500;">
                        <option value="" disabled selected hidden>🔺 Фигуры</option>
                        <option value="line">📏 Прямая</option>
                        <option value="vector">↗️ Вектор</option>
                        <option value="circle">⭕ Окружность</option>
                        <option value="triangle">🔺 Треугольник</option>
                        <option value="cylinder">🛢️ Цилиндр</option>
                        <option value="cone">🍦 Конус</option>
                        <option value="sphere">🔮 Сфера</option>
                    </select>
                    <input type="color" id="color-pres-${i}" value="#7b1fa2" style="cursor:pointer; height: 30px; width: 35px; border: none; background: transparent; padding: 0;">
                    <input type="range" id="size-pres-${i}" min="1" max="15" value="3" style="cursor:pointer; width: 80px;">
                    <button onclick="window.setTool('pres-${i}', 'eraser')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Ластик">🧽</button>
                    <div style="flex-grow:1;"></div>
                    <button onclick="window.clearCanvas('pres-${i}')" style="background:none; border:none; cursor:pointer; font-size:20px;" title="Очистить всё">🗑️</button>
                    <input type="hidden" id="tool-pres-${i}" value="pen">
                </div>
                <div style="background-color: #fff; background-size: 20px 20px; background-image: linear-gradient(to right, #f3e5f5 1px, transparent 1px), linear-gradient(to bottom, #f3e5f5 1px, transparent 1px); border: 2px solid #e1bee7; border-radius: 12px; overflow: hidden; height: calc(100% - 60px); min-height: 250px;"><canvas id="canvas-pres-${i}" style="display:block; width:100%; height:100%; touch-action: none; cursor: crosshair;"></canvas></div>
            </div>
            <div class="pres-footer" style="position: absolute; bottom: 30px; left: 70px; font-family: 'Caveat'; font-size: 26px; color: #555;">Шкатулка математических интерактивов</div>
        </div>
    `).join('');

    let hiddenTheories = window.currentGeneratedTasks.map((t, i) => `<div id="theory-pres-${i}" style="display:none;">${encodeURIComponent(t.theory)}</div>`).join('');
    generateAndDownloadPresentationHTML(taskSlides, hiddenTheories, authorLine, topicsList, "Презентация_Урока_Стиль3.html", 's2.png', 's1.png', '#9c27b0');
}

// ==========================================
// ОБЩИЙ СБОРЩИК ПРЕЗЕНТАЦИЙ (ДЛЯ ЛЮБОГО СТИЛЯ)
// ==========================================
function generateAndDownloadPresentationHTML(taskSlides, hiddenTheories, authorLine, topicsList, fileName, bgTitle, bgMain, accentColor) {

    let showSolutions = true;
    let solToggle = document.getElementById('toggle-explanations'); 
    if (solToggle) {
        showSolutions = solToggle.checked;
    }

    let instantCheck = false;
    let instantToggle = document.getElementById('toggle-instant-check');
    if (instantToggle) {
        instantCheck = instantToggle.checked;
    }

    let showCorrectOnError = false;
    let showCorrectToggle = document.getElementById('toggle-show-correct');
    if (showCorrectToggle) {
        showCorrectOnError = showCorrectToggle.checked;
    }

    let timerMinutes = 0;
    let timerInput = document.getElementById('timer-input');
    if (timerInput) {
        timerMinutes = parseInt(timerInput.value, 10) || 0;
    }

    let fullHTML = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Презентация урока</title>
    <base href="https://svetlana18011991.github.io/generator11prof/">
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap" rel="stylesheet">
    <script>window.MathJax = { tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] } };${window.SCRIPT_END}
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">${window.SCRIPT_END}
    <style>
        body, html { margin: 0; padding: 0; overflow: hidden; font-family: 'Segoe UI', sans-serif; }
        .slide { width: 100vw; height: 100vh; background-size: cover; background-position: center; display: none; flex-direction: column; align-items: center; justify-content: center; position: relative; padding: 50px; box-sizing: border-box; }
        .slide.active { display: flex; }
        .title-box { background: rgba(255,255,255,0.95); padding: 40px 60px; border-radius: 20px; border: 3px solid ${accentColor}; text-align: center; max-width: 900px; box-shadow: 0 15px 40px rgba(0,0,0,0.15); }
        .topics-list { text-align: left; margin: 20px 0; font-size: 1.3em; color: #333; line-height: 1.4; list-style-type: disc; padding-left: 20px;}
        .nav-btns { position: fixed; bottom: 40px; right: 70px; display: flex; gap: 20px; z-index: 100; }
        .nav-btn { background: #333; color: white; border: none; padding: 15px 35px; border-radius: 50px; cursor: pointer; font-size: 1.3em; opacity: 0.85; transition: 0.3s; box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
        .nav-btn:hover { opacity: 1; background: ${accentColor}; transform: translateY(-2px); }
        .pres-btn:hover { filter: brightness(1.1); }
        .results-table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 1.05em; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .results-table th, .results-table td { padding: 12px; border-bottom: 1px solid #ddd; text-align: center; }
        .results-table th { background: #f5f5f5; color: #333; }
        .row-correct { background-color: #e8f5e9; color: #2e7d32; }
        .row-incorrect { background-color: #ffebee; color: #c62828; }
        .pres-footer { position: absolute; bottom: 30px; left: 70px; font-family: 'Caveat'; font-size: 26px; color: #555; }
        .logo-small { height: 50px; vertical-align: middle; margin-right: 15px; }
        .modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 1000; align-items: center; justify-content: center; backdrop-filter: blur(5px); }
        .modal-box { background: #fff; max-width: 800px; width: 90%; max-height: 90vh; overflow-y: auto; border-radius: 12px; border: 2px solid ${accentColor}; box-shadow: 0 10px 30px rgba(0,0,0,0.3); padding: 30px; position: relative; text-align: left; font-size: 18px;}
        .close-btn { position: absolute; top: 15px; right: 20px; font-size: 32px; line-height: 1; cursor: pointer; color: #888; transition: 0.2s; }
        .close-btn:hover { color: ${accentColor}; }
        .help-btn { background: #e3f2fd; color: #003399; border: 1px solid #003399; padding: 8px 15px; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 16px; transition: 0.2s; }
        .help-btn:hover { background: #003399; color: #fff; }
        .pres-timer-box { position: fixed; top: 25px; right: 35px; z-index: 200; background: rgba(255,255,255,0.95); border: 2px solid ${accentColor}; color: ${accentColor}; padding: 12px 18px; border-radius: 12px; font-weight: bold; font-size: 22px; box-shadow: 0 5px 18px rgba(0,0,0,0.18); }
        .pres-status.ok { color: #2e7d32; }
        .pres-status.bad { color: #c62828; }

        /* ФИКС СЛАЙДОВ С КАРТИНКАМИ */
        .task-right-side { overflow: hidden !important; }
        .task-right-side > div { min-height: 0 !important; height: 100% !important; justify-content: flex-start !important; overflow: hidden !important; }
        .svg-wrapper { flex: 1 1 auto !important; min-height: 0 !important; max-height: 54% !important; width: 100% !important; overflow: hidden !important; margin-bottom: 10px !important; }
        .svg-wrapper img, .svg-wrapper svg { max-width: 100% !important; max-height: 100% !important; width: auto !important; height: auto !important; object-fit: contain !important; display: block !important; margin: 0 auto !important; }
        .task-text { font-size: clamp(16px, 1.5vw, 23px) !important; line-height: 1.22 !important; max-height: 28% !important; min-height: 0 !important; flex: 0 1 auto !important; overflow: hidden !important; padding: 0 8px !important; margin-bottom: 10px !important; box-sizing: border-box !important; text-align: center !important; }
        .task-card-visual .task-text mjx-container { font-size: 108% !important; }
        .pres-check-zone { flex: 0 0 auto !important; margin-top: auto !important; gap: 10px !important; }
        .pres-input { max-width: 180px !important; box-sizing: border-box !important; }

        @media (max-height: 760px), (max-width: 1200px) {
            .task-right-side { padding: 14px 18px !important; }
            .svg-wrapper { max-height: 50% !important; }
            .task-text { font-size: 15px !important; line-height: 1.16 !important; max-height: 30% !important; }
            .pres-input { padding: 9px 14px !important; width: 150px !important; }
            .pres-btn { padding: 9px 22px !important; }
        }

        /* РЕЖИМ ДЛЯ ЗАДАНИЙ БЕЗ ЧЕРТЕЖА */
        .task-card-text-only { width: min(58vw, 780px) !important; min-height: 230px !important; height: auto !important; max-height: 68vh !important; top: 50% !important; bottom: auto !important; right: 7% !important; transform: translateY(-50%) !important; padding: 24px 34px !important; justify-content: center !important; }
        .task-card-text-only > div { justify-content: center !important; min-height: 0 !important; height: auto !important; overflow: hidden !important; }
        .task-card-text-only .task-text { font-size: clamp(19px, 1.72vw, 27px) !important; line-height: 1.28 !important; max-height: 44vh !important; overflow: hidden !important; text-align: center !important; margin: 0 0 22px 0 !important; padding: 0 6px !important; color: #222 !important; }
        .task-card-text-only .task-text mjx-container { font-size: 104% !important; }
        .task-card-text-only .pres-check-zone { margin-top: 0 !important; gap: 14px !important; }
        .task-card-text-only .pres-input { width: 190px !important; font-size: 1.15em !important; }
        .task-card-text-only .pres-btn { font-size: 1.15em !important; }

        @media (max-height: 760px), (max-width: 1200px) {
            .task-card-text-only { width: min(64vw, 760px) !important; min-height: 210px !important; max-height: 70vh !important; padding: 18px 24px !important; }
            .task-card-text-only .task-text { font-size: clamp(16px, 1.65vw, 24px) !important; max-height: 46vh !important; line-height: 1.22 !important; margin-bottom: 18px !important; }
        }
    </style>
</head>
<body>
    <div id="pres-timer-box" class="pres-timer-box">⏱ 00:00</div>

    <div class="slide active" style="background-image: url('${window.ASSETS_URL}${bgTitle}')">
        <div class="title-box" onclick="event.stopPropagation();">
            <h1 style="color:#003399; margin:0; font-size: 3em; border-bottom: 3px solid ${accentColor}; padding-bottom: 20px;">Тренировочный вариант</h1>
            <ul class="topics-list">${topicsList}</ul>
            <div style="font-family:'Caveat'; font-size:35px; color:#003399; margin-top:30px;">${authorLine}</div>
            <div style="margin-top:40px; font-size: 1.2em; color: #555; font-style: italic;">
                <img src="${window.ASSETS_URL}logo.png" class="logo-small" onerror="this.style.display='none'"> 
                Шкатулка математических интерактивов
            </div>
        </div>
        <div class="nav-btns" id="start-nav"><button class="nav-btn" onclick="event.stopPropagation(); nextSlide()">Начать →</button></div>
    </div>

    ${taskSlides}

    <div class="slide" id="results-slide" style="background-image: url('${window.ASSETS_URL}${bgMain}')">
        <div class="title-box" style="padding: 40px; max-width: 1200px; width: 95%; max-height: 90vh; overflow-y: auto;" onclick="event.stopPropagation();">
            <h2 style="font-size:3.2em; color:#4CAF50; margin:0;">Спасибо за работу!</h2>
            <div id="results-summary" style="font-size: 1.35em; color:#333; margin-top: 12px; font-weight: bold;"></div>
            <table class="results-table">
                <thead>
                    <tr>
                        <th>Задание</th>
                        <th>Ваш ответ</th>
                        <th>Результат</th>
                        ${showCorrectOnError ? '<th>Верный ответ</th>' : ''}
                        <th>Время</th>
                        ${showSolutions ? '<th>Разбор</th>' : ''}
                    </tr>
                </thead>
                <tbody id="results-tbody"></tbody>
            </table>
            <button class="nav-btn" style="margin-top:30px; font-size: 1.3em; padding: 15px 40px; position: static;" onclick="event.stopPropagation(); location.reload()">Начать сначала</button>
        </div>
        <div class="pres-footer">Шкатулка математических интерактивов</div>
    </div>

    <div id="hidden-theories-container">${hiddenTheories}</div>

    <div id="modal-overlay" class="modal-overlay" onclick="if(event.target===this) document.getElementById('modal-overlay').style.display='none'">
        <div class="modal-box">
            <div class="close-btn" onclick="document.getElementById('modal-overlay').style.display='none'">&times;</div>
            <div id="modal-content-box"></div>
        </div>
    </div>

    <script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalTasks = Math.max(0, slides.length - 2);
        let userResults = [];
        let answeredMap = {};
        let slideStartTime = Date.now();
        let presentationStartTime = Date.now();
        let totalTimerSeconds = ${timerMinutes} > 0 ? ${timerMinutes} * 60 : 0;
        let timerInterval = null;
        let resultsRendered = false;
        const showSolutions = ${showSolutions};
        const showCorrectOnError = ${showCorrectOnError};
        const instantCheck = ${instantCheck};

        function normalizeAnswer(value) {
            return String(value == null ? '' : value).trim().replace(',', '.');
        }

        function formatTime(totalSeconds) {
            totalSeconds = Math.max(0, Math.floor(totalSeconds || 0));
            let m = Math.floor(totalSeconds / 60);
            let s = totalSeconds % 60;
            return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
        }

        function updateTimerDisplay() {
            let box = document.getElementById('pres-timer-box');
            if (!box) return;

            if (totalTimerSeconds > 0) {
                let elapsed = Math.floor((Date.now() - presentationStartTime) / 1000);
                let left = totalTimerSeconds - elapsed;
                box.textContent = '⏳ ' + formatTime(left);
                if (left <= 0) {
                    box.textContent = '⏳ 00:00';
                    finishPresentationByTimer();
                }
            } else {
                let elapsed = Math.floor((Date.now() - presentationStartTime) / 1000);
                box.textContent = '⏱ ' + formatTime(elapsed);
            }
        }

        function startPresentationTimer() {
            updateTimerDisplay();
            timerInterval = setInterval(updateTimerDisplay, 1000);
        }

        function finishPresentationByTimer() {
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
            collectMissingResults();
            showSlide(slides.length - 1);
        }

        function collectMissingResults() {
            for (let i = 0; i < totalTasks; i++) {
                if (!answeredMap[i]) {
                    let input = document.getElementById('ans-' + i);
                    let userAns = input ? normalizeAnswer(input.value) : '';
                    let btn = input ? input.closest('.task-right-side')?.querySelector('.pres-btn') : null;
                    let correctAns = btn ? btn.getAttribute('data-correct') : '';
                    let timeSpent = Math.round((Date.now() - slideStartTime) / 1000);
                    userResults.push({ taskNum: i + 1, userAns: userAns, correctAns: correctAns, time: timeSpent });
                    answeredMap[i] = true;
                }
            }
        }

        function fitTextToBox(textEl, maxPx, minPx) {
            if (!textEl) return;
            textEl.style.fontSize = maxPx + 'px';
            textEl.style.overflow = 'hidden';

            let size = maxPx;
            let safety = 0;
            while (safety < 80 && size > minPx && (textEl.scrollHeight > textEl.clientHeight + 2 || textEl.scrollWidth > textEl.clientWidth + 2)) {
                size -= 1;
                textEl.style.fontSize = size + 'px';
                safety++;
            }

            if (textEl.scrollHeight > textEl.clientHeight + 3 && size <= minPx) {
                textEl.style.lineHeight = '1.12';
            }
        }

        function chooseTextOnlyMax(textEl) {
            const plain = (textEl.textContent || '').replace(/\\s+/g, ' ').trim();
            const len = plain.length;
            if (len > 520) return 19;
            if (len > 420) return 21;
            if (len > 300) return 23;
            if (len > 200) return 25;
            return 27;
        }

        function fitCurrentSlideText() {
            let slide = slides[currentSlide];
            if (!slide) return;
            slide.querySelectorAll('.task-right-side').forEach(card => {
                let textEl = card.querySelector('.task-text');
                if (!textEl) return;
                if (card.classList.contains('task-card-text-only')) {
                    fitTextToBox(textEl, chooseTextOnlyMax(textEl), 13);
                } else {
                    fitTextToBox(textEl, 23, 14);
                }
            });
        }

        function scheduleFitText() {
            requestAnimationFrame(() => {
                fitCurrentSlideText();
                setTimeout(fitCurrentSlideText, 120);
                setTimeout(fitCurrentSlideText, 500);
            });
        }

        function showSlide(idx) {
            if (idx < 0 || idx >= slides.length) return;
            slides.forEach(s => s.classList.remove('active'));
            slides[idx].classList.add('active');
            currentSlide = idx;
            slideStartTime = Date.now();
            if (idx === slides.length - 1) { 
                if (timerInterval) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                }
                renderResults(); 
            }
            if (window.MathJax && MathJax.typesetPromise) {
                MathJax.typesetPromise([slides[idx]]).then(scheduleFitText).catch(scheduleFitText);
            } else {
                scheduleFitText();
            }
        }

        function nextSlide() { 
            if (currentSlide < slides.length - 1) showSlide(currentSlide + 1); 
        }

        // --- МГНОВЕННАЯ ПРОВЕРКА В ПРЕЗЕНТАЦИИ ---
        function checkPresSingle(idx, correctAns, btn, showCorrectFlag) {
            event.stopPropagation();
            let input = document.getElementById('ans-'+idx);
            let status = document.getElementById('pres-status-'+idx);
            if (!input) return;
            let u = normalizeAnswer(input.value);
            let c = normalizeAnswer(correctAns);
            if (u === '') return;

            if (u === c) {
                input.style.background = '#e8f5e9'; 
                input.style.borderColor = '#4CAF50'; 
                input.style.color = '#1b5e20';
                if (status) {
                    status.className = 'pres-status ok';
                    status.textContent = '✅ Верно';
                }
            } else {
                input.style.background = '#ffebee'; 
                input.style.borderColor = '#f44336'; 
                input.style.color = '#b71c1c';
                if (status) {
                    status.className = 'pres-status bad';
                    status.textContent = showCorrectFlag ? ('❌ Неверно. Верный ответ: ' + correctAns) : '❌ Неверно';
                }
            }

            input.readOnly = true;
            btn.style.display = 'none';

            let helpBtn = document.getElementById('pres-help-'+idx);
            if (helpBtn && showSolutions) helpBtn.style.display = 'inline-block';
        }

        function submitTask(idx, correctAns) {
            event.stopPropagation();
            let input = document.getElementById('ans-'+idx);
            let userAns = input ? normalizeAnswer(input.value) : '';
            let timeSpent = Math.round((Date.now() - slideStartTime) / 1000);

            if (!answeredMap[idx]) {
                userResults.push({ taskNum: idx + 1, userAns: userAns, correctAns: normalizeAnswer(correctAns), time: timeSpent });
                answeredMap[idx] = true;
            }
            nextSlide();
        }

        function renderResults() {
            if (resultsRendered) return;
            resultsRendered = true;

            collectMissingResults();

            let tbody = document.getElementById('results-tbody');
            let summary = document.getElementById('results-summary');
            let html = '';
            let correctCount = 0;

            userResults
                .sort((a, b) => a.taskNum - b.taskNum)
                .forEach((res, idx) => {
                    let isCorrect = (normalizeAnswer(res.userAns) === normalizeAnswer(res.correctAns));
                    if (isCorrect) correctCount++;
                    let rowClass = isCorrect ? 'row-correct' : 'row-incorrect';
                    let displayAns = res.userAns === "" ? "—" : res.userAns;
                    let resultText = isCorrect ? '✅ Верно' : '❌ Неверно';
                    let correctCell = showCorrectOnError ? \`<td>\${res.correctAns}</td>\` : '';
                    let solutionCell = showSolutions ? \`<td><button class="help-btn" onclick="event.stopPropagation(); window.openTheoryModalLocal('theory-pres-\${res.taskNum - 1}')">Смотреть</button></td>\` : '';

                    html += \`<tr class="\${rowClass}">
                        <td>\${res.taskNum}</td>
                        <td>\${displayAns}</td>
                        <td>\${resultText}</td>
                        \${correctCell}
                        <td>\${res.time} сек.</td>
                        \${solutionCell}
                    </tr>\`;
                });

            if (summary) {
                summary.textContent = 'Верно: ' + correctCount + ' из ' + userResults.length;
            }

            tbody.innerHTML = html;
        }

        function openTheoryModalLocal(dataId) {
            let el = document.getElementById(dataId);
            if(el) {
                document.getElementById('modal-content-box').innerHTML = decodeURIComponent(el.textContent);
                document.getElementById('modal-overlay').style.display = 'flex';
                if (window.MathJax) MathJax.typesetPromise([document.getElementById('modal-overlay')]);
            }
        }

        window.onclick = function() { 
            if(currentSlide < slides.length - 1) showSlide(currentSlide + 1); 
        };

        window.addEventListener('load', () => {
            startPresentationTimer();
            document.querySelectorAll('.pres-btn').forEach(btn => {
                let match = btn.getAttribute('onclick') ? btn.getAttribute('onclick').match(/submitTask\\((\\d+),\\s*'([^']*)'\\)/) : null;
                if (match) btn.setAttribute('data-correct', match[2]);
            });

            if (window.MathJax && MathJax.typesetPromise) {
                MathJax.typesetPromise([document.body]).then(scheduleFitText).catch(scheduleFitText);
            } else {
                scheduleFitText();
            }
        });
        window.addEventListener('resize', scheduleFitText);
        ${window.CANVAS_LOGIC_SCRIPT}
    ${window.SCRIPT_END}
</body>
</html>`;

    let blob = new Blob([fullHTML], { type: "text/html;charset=utf-8" });
    let a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = fileName; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(a.href);
    document.getElementById('pres-modal').style.display = 'none';
}
