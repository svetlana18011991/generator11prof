(function() {
    function genVecSvg(gx, gy, ax1, ay1, ax2, ay2, aLoc, bx1, by1, bx2, by2, bLoc) {
        const sc = 35; // Масштаб (1 единичный отрезок = 35 пикселей)
        const ox = 50; // Отступ по X
        const oy = (gy + 1.5) * sc + 20; // Отступ по Y
        
        const tx = (x) => ox + x * sc;
        const ty = (y) => oy - y * sc;

        let grid = '';
        for (let i = -1; i <= gx; i++) {
            grid += `<line x1="${tx(i)}" y1="${ty(-1.5)}" x2="${tx(i)}" y2="${ty(gy+0.5)}" stroke="#d0d0d0" stroke-width="1.2"/>`;
        }
        for (let j = -1; j <= gy; j++) {
            grid += `<line x1="${tx(-1.5)}" y1="${ty(j)}" x2="${tx(gx+0.5)}" y2="${ty(j)}" stroke="#d0d0d0" stroke-width="1.2"/>`;
        }

        let axes = `
            <defs>
                <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M0 1 L9 5 L0 9 z" fill="black" stroke-linejoin="round"/>
                </marker>
                <marker id="arrV" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                    <path d="M0 1 L9 5 L0 9 L3 5 z" fill="black" stroke-linejoin="round"/>
                </marker>
            </defs>
            <line x1="${tx(-1.5)}" y1="${ty(0)}" x2="${tx(gx+0.8)}" y2="${ty(0)}" stroke="black" stroke-width="1.5" marker-end="url(#arr)" stroke-linecap="round"/>
            <line x1="${tx(0)}" y1="${ty(-1.5)}" x2="${tx(0)}" y2="${ty(gy+0.8)}" stroke="black" stroke-width="1.5" marker-end="url(#arr)" stroke-linecap="round"/>
            <text x="${tx(gx+0.8)}" y="${ty(0)+20}" font-family="Times New Roman" font-size="18" font-style="italic">x</text>
            <text x="${tx(0)-18}" y="${ty(gy+0.8)+10}" font-family="Times New Roman" font-size="18" font-style="italic">y</text>
            <text x="${tx(0)-12}" y="${ty(0)+18}" font-family="Arial, sans-serif" font-size="14">0</text>
            <text x="${tx(1)}" y="${ty(0)+18}" text-anchor="middle" font-family="Arial, sans-serif" font-size="14">1</text>
            <text x="${tx(0)-10}" y="${ty(1)+5}" font-family="Arial, sans-serif" font-size="14">1</text>
        `;

        let drawVec = (x1, y1, x2, y2, name, loc) => {
            let cx = (tx(x1) + tx(x2))/2;
            let cy = (ty(y1) + ty(y2))/2;
            let nx = cx, ny = cy;
            let offset = 18;
            if (loc.includes('left')) nx -= offset;
            if (loc.includes('right')) nx += offset;
            if (loc.includes('above')) ny -= offset;
            if (loc.includes('below')) ny += offset;

            let textVec = `
                <text x="${nx}" y="${ny}" text-anchor="middle" dominant-baseline="central" font-family="Times New Roman" font-size="20" font-style="italic">${name}</text>
                <path d="M${nx-5},${ny-14} L${nx+6},${ny-14} M${nx+2},${ny-18} L${nx+6},${ny-14} L${nx+2},${ny-10}" stroke="black" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            `;
            
            return `
                <line x1="${tx(x1)}" y1="${ty(y1)}" x2="${tx(x2)}" y2="${ty(y2)}" stroke="black" stroke-width="2.5" marker-end="url(#arrV)" stroke-linecap="round"/>
                ${textVec}
            `;
        };

        let width = tx(gx + 1) + 20;
        let height = ty(-1.5) + 20;
        
        return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" overflow="visible">
            ${grid}${axes}
            ${drawVec(ax1, ay1, ax2, ay2, 'a', aLoc)}
            ${drawVec(bx1, by1, bx2, by2, 'b', bLoc)}
        </svg>`;
    }

    window.database[2] = {
        title: "Задание 2. Векторы",
        prototypes: [
            { desc: "Длина вектора по координатам", svg_code: ``, 
              theory_task: "Найдите длину вектора $\\vec{a}(8;-6)$.", 
              theory_sol: "Формула длины вектора: $|\\vec{a}| = \\sqrt{x^2+y^2}$.<br>$|\\vec{a}| = \\sqrt{8^2 + (-6)^2} = \\sqrt{64+36} = \\sqrt{100} = 10$.<br><br><b>Ответ:</b> 10", 
              tasks: [{text: "Найдите длину вектора $\\vec{a}(3;-4)$.", answer: "5"}, {text: "Найдите длину вектора $\\vec{a}(6;-8)$.", answer: "10"}, {text: "Найдите длину вектора $\\vec{a}(5;-12)$.", answer: "13"}, {text: "Найдите длину вектора $\\vec{a}(8;-15)$.", answer: "17"}, {text: "Найдите длину вектора $\\vec{a}(9;-12)$.", answer: "15"}] 
            },
            { desc: "Длина суммы/разности векторов", svg_code: ``, 
              theory_task: "Даны векторы $\\vec{a}(4; 1)$ и $\\vec{b}(2; 3)$. Найдите длину вектора $\\vec{a} - 2\\vec{b}$.", 
              theory_sol: "1) Найдём координаты вектора $2\\vec{b}$: $(2 \\cdot 2; 2 \\cdot 3) = (4; 6)$.<br>2) Найдём разность векторов $\\vec{a} - 2\\vec{b}$: $(4 - 4; 1 - 6) = (0; -5)$.<br>3) Вычислим длину полученного вектора: $\\sqrt{0^2 + (-5)^2} = \\sqrt{25} = 5$.<br><br><b>Ответ:</b> 5", 
              tasks: [{text: "Даны векторы $\\vec{a}(2;0)$ и $\\vec{b}(1;4)$. Найдите длину вектора $\\vec{a}+3\\vec{b}$.", answer: "13"}, {text: "Даны векторы $\\vec{a}(3;2)$ и $\\vec{b}(1;2)$. Найдите длину вектора $\\vec{a}+3\\vec{b}$.", answer: "10"}, {text: "Даны векторы $\\vec{a}(3;0)$ и $\\vec{b}(2;4)$. Найдите длину вектора $\\vec{a}+3\\vec{b}$.", answer: "15"}, {text: "Даны векторы $\\vec{a}(-1;3)$ и $\\vec{b}(3;4)$. Найдите длину вектора $\\vec{a}+3\\vec{b}$.", answer: "17"}, {text: "Даны векторы $\\vec{a}(4;6)$ и $\\vec{b}(1;6)$. Найдите длину вектора $\\vec{a}+3\\vec{b}$.", answer: "25"}] 
            },
            { desc: "Длина по чертежу на координатной плоскости", 
              svg_code: genVecSvg(5, 5, 1, 1, 4, 5, 'left', 1, 1, 4, 1, 'below'), 
              theory_task: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$. Найдите длину вектора $\\vec{a}+\\vec{b}$.", 
              theory_sol: "1) Определим координаты по чертежу (конец минус начало):<br>$\\vec{a} = (4-1; 5-1) = (3; 4)$.<br>$\\vec{b} = (4-1; 1-1) = (3; 0)$.<br>2) Сложим векторы: $\\vec{a}+\\vec{b} = (3+3; 4+0) = (6; 4)$.<br>3) Длина вектора: $\\sqrt{6^2 + 4^2} = \\sqrt{36+16} = \\sqrt{52}$.<br><i>В тренировочной версии подобраны целые ответы.</i><br><br><b>Ответ:</b> $\\sqrt{52}$", 
              tasks: [
                {text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите длину вектора $\\vec{a}+3\\vec{b}$.", answer: "8", svg_code: genVecSvg(6, 5, 1, 1, 3, 4, 'above left', 4, 4, 6, 3, 'right')}, 
                {text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите длину вектора $\\vec{a}-\\vec{b}$.", answer: "2", svg_code: genVecSvg(6, 5, 1, 2, 4, 4, 'above left', 2, 1, 3, 3, 'right')}, 
                {text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите длину вектора $2\\vec{a}-\\vec{b}$.", answer: "5", svg_code: genVecSvg(5, 5, 2, 1, 1, 4, 'left', 3, 1, 5, 4, 'right')}, 
                {text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите длину вектора $-\\vec{a}+3\\vec{b}$.", answer: "9", svg_code: genVecSvg(7, 8, 1, 1, 1, 7, 'left', 3, 2, 6, 4, 'below right')}, 
                {text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите длину вектора $\\vec{a}-5\\vec{b}$.", answer: "17", svg_code: genVecSvg(6, 7, 1, 2, 4, 7, 'left', 2, 0, 6, 1, 'below')}
            ] },
            { desc: "Скалярное произведение через длины и угол", svg_code: ``, 
              theory_task: "Длины векторов $\\vec{a}$ и $\\vec{b}$ равны $3$ и $4$, а угол между ними $60^{\\circ}$. Найдите $\\vec{a}\\cdot\\vec{b}$.", 
              theory_sol: "Скалярное произведение через угол: $\\vec{a}\\cdot\\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos \\angle(\\vec{a}, \\vec{b})$.<br>$\\vec{a}\\cdot\\vec{b} = 3 \\cdot 4 \\cdot \\cos 60^{\\circ} = 12 \\cdot 0{,}5 = 6$.<br><br><b>Ответ:</b> 6", 
              tasks: [{text: "Длины векторов $\\vec{a}$ и $\\vec{b}$ равны $5$ и $7$, а угол между ними равен $60^{\\circ}$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "17,5"}, {text: "Длины векторов $\\vec{a}$ и $\\vec{b}$ равны $4$ и $9$, а угол между ними равен $60^{\\circ}$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "18"}, {text: "Длины векторов $\\vec{a}$ и $\\vec{b}$ равны $8$ и $15$, а угол между ними равен $60^{\\circ}$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "60"}, {text: "Длины векторов $\\vec{a}$ и $\\vec{b}$ равны $6$ и $11$, а угол между ними равен $120^{\\circ}$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "-33"}, {text: "Длины векторов $\\vec{a}$ и $\\vec{b}$ равны $10$ и $13$, а угол между ними равен $120^{\\circ}$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "-65"}] 
            },
            { desc: "Скалярное произведение по координатам", svg_code: ``, 
              theory_task: "Даны векторы $\\vec{a}(2;-5)$ и $\\vec{b}(3;1)$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", 
              theory_sol: "Скалярное произведение в координатах: $\\vec{a}\\cdot\\vec{b} = x_1 x_2 + y_1 y_2$.<br>$\\vec{a}\\cdot\\vec{b} = 2 \\cdot 3 + (-5) \\cdot 1 = 6 - 5 = 1$.<br><br><b>Ответ:</b> 1", 
              tasks: [{text: "Даны векторы $\\vec{a}(11;-3)$ и $\\vec{b}(4;5)$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "29"}, {text: "Даны векторы $\\vec{a}(5;-2)$ и $\\vec{b}(3;4)$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "7"}, {text: "Даны векторы $\\vec{a}(-3;6)$ и $\\vec{b}(2;5)$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "24"}, {text: "Даны векторы $\\vec{a}(8;-4)$ и $\\vec{b}(-1;-3)$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "4"}, {text: "Даны векторы $\\vec{a}(-4;-7)$ и $\\vec{b}(-2;3)$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "-13"}] 
            },
            { desc: "Скалярное произведение по чертежу", 
              svg_code: genVecSvg(6, 5, 1, 1, 3, 4, 'left', 1, 2, 5, 1, 'below'), 
              theory_task: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", 
              theory_sol: "1) Определим координаты векторов:<br>$\\vec{a} = (3-1; 4-1) = (2; 3)$.<br>$\\vec{b} = (5-1; 1-2) = (4; -1)$.<br>2) Перемножим координаты: $\\vec{a}\\cdot\\vec{b} = 2 \\cdot 4 + 3 \\cdot (-1) = 8 - 3 = 5$.<br><br><b>Ответ:</b> 5", 
              tasks: [
                {text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "16", svg_code: genVecSvg(6, 5, 1, 1, 4, 5, 'above left', 2, 1, 6, 2, 'below right')}, 
                {text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите скалярное произведение $\\vec{a}\\cdot\\vec{b}$.", answer: "10", svg_code: genVecSvg(6, 6, 1, 4, 5, 6, 'above left', 1, 2, 4, 1, 'below left')}, 
                {text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите скалярное произведение $2\\vec{a}\\cdot\\vec{b}$.", answer: "12", svg_code: genVecSvg(6, 5, 2, 1, 1, 4, 'left', 3, 1, 6, 4, 'right')}, 
                {text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите скалярное произведение $\\vec{a}\\cdot(-\\vec{b})$.", answer: "0", svg_code: genVecSvg(6, 5, 1, 2, 4, 5, 'left', 5, 2, 3, 4, 'right')}, 
                {text: "На координатной плоскости изображены векторы $\\vec{a}$ и $\\vec{b}$, координатами которых являются целые числа. Найдите скалярное произведение $\\vec{a}\\cdot 2\\vec{b}$.", answer: "8", svg_code: genVecSvg(6, 5, 2, 1, 4, 4, 'above left', 4, 1, 3, 3, 'right')}
            ] }
        ]
    };
})();