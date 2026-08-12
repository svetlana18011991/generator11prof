(function() {
    window.extraDatabase = window.extraDatabase || {};

    // Ровно тот же принцип, что используется в рабочем task2.js:
    // каждый чертёж строится при загрузке, имеет собственный viewBox
    // и уникальные marker id, поэтому элементы разных SVG не конфликтуют.
    let svgCounter = 0;

    const esc = value => String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

    const labelOffset = position => {
        const p = String(position || '').toLowerCase();
        if (p === 'left') return { dx: -18, dy: 5, anchor: 'end' };
        if (p === 'right') return { dx: 18, dy: 5, anchor: 'start' };
        if (p === 'above') return { dx: 0, dy: -12, anchor: 'middle' };
        if (p === 'below') return { dx: 0, dy: 22, anchor: 'middle' };
        if (p === 'above right') return { dx: 15, dy: -10, anchor: 'start' };
        if (p === 'above left') return { dx: -15, dy: -10, anchor: 'end' };
        if (p === 'below right') return { dx: 15, dy: 20, anchor: 'start' };
        if (p === 'below left') return { dx: -15, dy: 20, anchor: 'end' };
        return { dx: 0, dy: -10, anchor: 'middle' };
    };

    const makeCoordinateSvg = (minX, minY, maxX, maxY, options = {}) => {
        svgCounter += 1;
        const sc = Number(options.scale) || 25;
        const w = (maxX - minX) * sc;
        const h = (maxY - minY) * sc;
        const tx = x => (x - minX) * sc;
        const ty = y => h - (y - minY) * sc;
        const axisArrowId = `arrow-task2-extra-axis-${svgCounter}`;
        const vectorArrowId = `arrow-task2-extra-vector-${svgCounter}`;

        let s = `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" `
            + `preserveAspectRatio="xMidYMid meet" overflow="visible" `
            + `style="display:block;max-width:100%;width:auto;height:auto;margin:0 auto;" `
            + `xmlns="http://www.w3.org/2000/svg" aria-hidden="true">`;

        s += `<defs>`;
        s += `<marker id="${axisArrowId}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L8,4 L0,8 Z" fill="#000"/></marker>`;
        s += `<marker id="${vectorArrowId}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L8,4 L0,8 Z" fill="#000"/></marker>`;
        s += `</defs>`;

        s += `<rect x="0" y="0" width="${w}" height="${h}" fill="#fff"/>`;

        for (let x = Math.ceil(minX); x <= Math.floor(maxX); x++) {
            s += `<line x1="${tx(x)}" y1="0" x2="${tx(x)}" y2="${h}" stroke="#d9d9d9" stroke-width="1" vector-effect="non-scaling-stroke"/>`;
        }
        for (let y = Math.ceil(minY); y <= Math.floor(maxY); y++) {
            s += `<line x1="0" y1="${ty(y)}" x2="${w}" y2="${ty(y)}" stroke="#d9d9d9" stroke-width="1" vector-effect="non-scaling-stroke"/>`;
        }

        if (minY <= 0 && maxY >= 0) {
            s += `<line x1="0" y1="${ty(0)}" x2="${w}" y2="${ty(0)}" stroke="#000" stroke-width="1.5" marker-end="url(#${axisArrowId})" vector-effect="non-scaling-stroke"/>`;
            s += `<text x="${w - 15}" y="${ty(0) - 8}" font-family="Times New Roman, serif" font-size="16" font-style="italic">x</text>`;
        }
        if (minX <= 0 && maxX >= 0) {
            s += `<line x1="${tx(0)}" y1="${h}" x2="${tx(0)}" y2="0" stroke="#000" stroke-width="1.5" marker-end="url(#${axisArrowId})" vector-effect="non-scaling-stroke"/>`;
            s += `<text x="${tx(0) + 8}" y="15" font-family="Times New Roman, serif" font-size="16" font-style="italic">y</text>`;
        }

        if (minX <= 0 && maxX >= 0 && minY <= 0 && maxY >= 0) {
            s += `<text x="${tx(0) - 12}" y="${ty(0) + 16}" font-family="Times New Roman, serif" font-size="14">0</text>`;
        }
        if (minX <= 1 && maxX >= 1 && minY <= 0 && maxY >= 0) {
            s += `<text x="${tx(1) - 4}" y="${ty(0) + 16}" font-family="Times New Roman, serif" font-size="14">1</text>`;
        }
        if (minX <= 0 && maxX >= 0 && minY <= 1 && maxY >= 1) {
            s += `<text x="${tx(0) - 12}" y="${ty(1) + 4}" font-family="Times New Roman, serif" font-size="14">1</text>`;
        }

        for (const segment of (options.segments || [])) {
            s += `<line x1="${tx(segment.x1)}" y1="${ty(segment.y1)}" x2="${tx(segment.x2)}" y2="${ty(segment.y2)}" stroke="${segment.stroke || '#000'}" stroke-width="${segment.width || 2.2}" vector-effect="non-scaling-stroke"/>`;
        }

        for (const vector of (options.vectors || [])) {
            s += `<line x1="${tx(vector.x1)}" y1="${ty(vector.y1)}" x2="${tx(vector.x2)}" y2="${ty(vector.y2)}" stroke="#000" stroke-width="2.5" marker-end="url(#${vectorArrowId})" vector-effect="non-scaling-stroke"/>`;

            const standard = labelOffset(vector.position);
            const midX = (tx(vector.x1) + tx(vector.x2)) / 2;
            const midY = (ty(vector.y1) + ty(vector.y2)) / 2;
            const lx = vector.labelX !== undefined ? tx(vector.labelX) : midX + (vector.dx !== undefined ? vector.dx : standard.dx);
            const ly = vector.labelY !== undefined ? ty(vector.labelY) : midY + (vector.dy !== undefined ? vector.dy : standard.dy);
            const anchor = vector.anchor || standard.anchor;
            const name = esc(vector.name || '');
            const arrowWidth = 10;
            const arrowStart = anchor === 'end' ? lx - 11 : anchor === 'start' ? lx + 1 : lx - 5;

            s += `<text x="${lx}" y="${ly}" text-anchor="${anchor}" font-family="Times New Roman, serif" font-size="18" font-style="italic">${name}</text>`;
            s += `<line x1="${arrowStart}" y1="${ly - 16}" x2="${arrowStart + arrowWidth}" y2="${ly - 16}" stroke="#000" stroke-width="1" vector-effect="non-scaling-stroke"/>`;
            s += `<path d="M ${arrowStart + arrowWidth - 3} ${ly - 19} L ${arrowStart + arrowWidth} ${ly - 16} L ${arrowStart + arrowWidth - 3} ${ly - 13}" stroke="#000" stroke-width="1" fill="none" vector-effect="non-scaling-stroke"/>`;
        }

        for (const label of (options.labels || [])) {
            const standard = labelOffset(label.position);
            const lx = tx(label.x) + (label.dx !== undefined ? label.dx : standard.dx);
            const ly = ty(label.y) + (label.dy !== undefined ? label.dy : standard.dy);
            s += `<text x="${lx}" y="${ly}" text-anchor="${label.anchor || standard.anchor}" font-family="Times New Roman, serif" font-size="17" font-style="italic">${esc(label.text)}</text>`;
        }

        s += `</svg>`;
        return s;
    };

    const makeVectorSvg = (minX, minY, maxX, maxY, vectors, scale = 25) =>
        makeCoordinateSvg(minX, minY, maxX, maxY, { vectors, scale });

    const makeTriangleGridSvg = (minX, minY, maxX, maxY, points, scale = 25) => {
        const byName = Object.fromEntries(points.map(point => [point.text, point]));
        const A = byName.A;
        const B = byName.B;
        const C = byName.C;
        return makeCoordinateSvg(minX, minY, maxX, maxY, {
            scale,
            segments: [
                { x1: A.x, y1: A.y, x2: B.x, y2: B.y },
                { x1: B.x, y1: B.y, x2: C.x, y2: C.y },
                { x1: C.x, y1: C.y, x2: A.x, y2: A.y }
            ],
            labels: points
        });
    };

    const makeRightTriangleSvg = () => {
        const w = 250;
        const h = 190;
        return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet" overflow="visible" style="display:block;max-width:100%;width:auto;height:auto;margin:0 auto;" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">`
            + `<rect x="0" y="0" width="${w}" height="${h}" fill="#fff"/>`
            + `<path d="M35 155 L180 155 L180 30 Z" fill="none" stroke="#000" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>`
            + `<path d="M166 155 L166 141 L180 141" fill="none" stroke="#000" stroke-width="1.6" vector-effect="non-scaling-stroke"/>`
            + `<text x="22" y="174" font-family="Times New Roman, serif" font-size="17" font-style="italic">A</text>`
            + `<text x="187" y="174" font-family="Times New Roman, serif" font-size="17" font-style="italic">C</text>`
            + `<text x="187" y="27" font-family="Times New Roman, serif" font-size="17" font-style="italic">B</text>`
            + `</svg>`;
    };

    const task2Extra = {
    "title": "Дополнительно",
    "source": "Дополнительные прототипы из присланного LaTeX-файла «2 задание»",
    "prototypes": [
        {
            "desc": "Прототип 1. Сумма трёх векторов по рисунку",
            "theory_task": "На координатной плоскости изображены векторы $\\vec a$, $\\vec b$ и $\\vec c$. Найдите длину вектора $\\vec a+\\vec b+\\vec c$.",
            "theory_sol": "1) Определим координаты векторов по чертежу: конец минус начало.<br>$\\vec a=(4-1;5-1)=(3;4)$, $\\vec b=(6-4;5-6)=(2;-1)$, $\\vec c=(1-6;8-(-1))=(-5;9)$.<br>2) Сложим координаты: $\\vec a+\\vec b+\\vec c=(3+2-5;4-1+9)=(0;12)$.<br>3) Найдём длину: $\\sqrt{0^2+12^2}=12$.<br><br><b>Ответ:</b> 12",
            "tasks": [
                {
                    "text": "На координатной плоскости изображены векторы $\\vec a$, $\\vec b$ и $\\vec c$, координатами которых являются целые числа. Найдите длину вектора $\\vec a+\\vec b+\\vec c$.",
                    "answer": "12"
                },
                {
                    "text": "Найдите длину вектора $\\vec a+\\vec b+\\vec c$.",
                    "answer": "8"
                },
                {
                    "text": "Найдите длину вектора $\\vec a+\\vec b+\\vec c$.",
                    "answer": "10"
                },
                {
                    "text": "Найдите длину вектора $\\vec a+\\vec b+\\vec c$.",
                    "answer": "13"
                },
                {
                    "text": "Найдите длину вектора $\\vec a+\\vec b+\\vec c$.",
                    "answer": "15"
                }
            ]
        },
        {
            "desc": "Прототип 2. Длина линейной комбинации трёх векторов",
            "theory_task": "Даны векторы $\\vec a(0;3)$, $\\vec b(-2;4)$ и $\\vec c(4;-1)$. Найдите длину вектора $\\vec a+2\\vec b+\\vec c$.",
            "theory_sol": "1) Найдём координаты вектора $2\\vec b$: $2\\vec b=(-4;8)$.<br>2) Сложим координаты: $\\vec a+2\\vec b+\\vec c=(0;3)+(-4;8)+(4;-1)=(0;10)$.<br>3) Длина полученного вектора: $\\sqrt{0^2+10^2}=10$.<br><br><b>Ответ:</b> 10",
            "tasks": [
                {
                    "text": "Даны векторы $\\vec a(0;3)$, $\\vec b(-2;4)$ и $\\vec c(4;-1)$. Найдите длину вектора $\\vec a+2\\vec b+\\vec c$.",
                    "answer": "10"
                },
                {
                    "text": "Даны векторы $\\vec a(6;-1)$, $\\vec b(1;2)$ и $\\vec c(-3;5)$. Найдите длину вектора $\\vec a-2\\vec b+\\vec c$.",
                    "answer": "1"
                },
                {
                    "text": "Даны векторы $\\vec a(2;5)$, $\\vec b(3;-1)$ и $\\vec c(-1;3)$. Найдите длину вектора $2\\vec a+\\vec b-\\vec c$.",
                    "answer": "10"
                },
                {
                    "text": "Даны векторы $\\vec a(-3;4)$, $\\vec b(5;0)$ и $\\vec c(2;-6)$. Найдите длину вектора $\\vec a+\\vec b+2\\vec c$.",
                    "answer": "10"
                },
                {
                    "text": "Даны векторы $\\vec a(1;-2)$, $\\vec b(2;5)$ и $\\vec c(6;0)$. Найдите длину вектора $-\\vec a+2\\vec b+\\vec c$.",
                    "answer": "15"
                }
            ]
        },
        {
            "desc": "Прототип 3. Скалярное произведение выражения с векторами",
            "theory_task": "Даны векторы $\\vec a(1;2)$, $\\vec b(3;-6)$ и $\\vec c(4;-3)$. Найдите значение выражения $(\\vec a+\\vec b)\\cdot\\vec c$.",
            "theory_sol": "1) Найдём координаты суммы: $\\vec a+\\vec b=(1+3;2-6)=(4;-4)$.<br>2) Используем формулу скалярного произведения: $x_1x_2+y_1y_2$.<br>$(\\vec a+\\vec b)\\cdot\\vec c=(4;-4)\\cdot(4;-3)=4\\cdot4+(-4)\\cdot(-3)=16+12=28$.<br><br><b>Ответ:</b> 28",
            "tasks": [
                {
                    "text": "Даны векторы $\\vec a(1;2)$, $\\vec b(3;-6)$ и $\\vec c(4;-3)$. Найдите значение выражения $(\\vec a+\\vec b)\\cdot\\vec c$.",
                    "answer": "28"
                },
                {
                    "text": "Даны векторы $\\vec a(5;1)$, $\\vec b(2;4)$ и $\\vec c(6;-2)$. Найдите значение выражения $(\\vec a-\\vec b)\\cdot\\vec c$.",
                    "answer": "24"
                },
                {
                    "text": "Даны векторы $\\vec a(1;-1)$, $\\vec b(4;2)$ и $\\vec c(3;5)$. Найдите значение выражения $(2\\vec a+\\vec b)\\cdot\\vec c$.",
                    "answer": "18"
                },
                {
                    "text": "Даны векторы $\\vec a(-2;5)$, $\\vec b(3;-1)$ и $\\vec c(4;2)$. Найдите значение выражения $(\\vec a+2\\vec b)\\cdot\\vec c$.",
                    "answer": "22"
                },
                {
                    "text": "Даны векторы $\\vec a(0;3)$, $\\vec b(-2;4)$ и $\\vec c(5;-1)$. Найдите значение выражения $(\\vec a+\\vec b)\\cdot\\vec c$.",
                    "answer": "-17"
                }
            ]
        },
        {
            "desc": "Прототип 4. Скалярное произведение выражения по рисунку",
            "theory_task": "На координатной плоскости изображены векторы $\\vec a$, $\\vec b$ и $\\vec c$. Найдите значение выражения $(\\vec a-\\vec b)\\cdot\\vec c$.",
            "theory_sol": "1) Определим координаты: $\\vec a=(2;1)$, $\\vec b=(-1;3)$, $\\vec c=(4;-2)$.<br>2) Найдём разность: $\\vec a-\\vec b=(2-(-1);1-3)=(3;-2)$.<br>3) Вычислим скалярное произведение: $(3;-2)\\cdot(4;-2)=3\\cdot4+(-2)\\cdot(-2)=12+4=16$.<br><br><b>Ответ:</b> 16",
            "tasks": [
                {
                    "text": "Найдите значение выражения $(\\vec a-\\vec b)\\cdot\\vec c$.",
                    "answer": "16"
                },
                {
                    "text": "Найдите значение выражения $(\\vec a+\\vec b)\\cdot\\vec c$.",
                    "answer": "13"
                },
                {
                    "text": "Найдите значение выражения $(\\vec a-2\\vec b)\\cdot\\vec c$.",
                    "answer": "-33"
                },
                {
                    "text": "Найдите значение выражения $(2\\vec a+\\vec b)\\cdot\\vec c$.",
                    "answer": "13"
                },
                {
                    "text": "Найдите значение выражения $(-\\vec a+3\\vec b)\\cdot\\vec c$.",
                    "answer": "-57"
                }
            ]
        },
        {
            "desc": "Прототип 5. Неизвестная длина вектора по скалярному произведению",
            "theory_task": "Длина вектора $\\vec a$ равна $2\\sqrt2$, угол между векторами $\\vec a$ и $\\vec b$ равен $45^{\\circ}$, а скалярное произведение $\\vec a\\cdot\\vec b$ равно $12$. Найдите длину вектора $\\vec b$.",
            "theory_sol": "Используем формулу $\\vec a\\cdot\\vec b=|\\vec a|\\cdot|\\vec b|\\cdot\\cos\\alpha$.<br>$12=2\\sqrt2\\cdot|\\vec b|\\cdot\\cos45^{\\circ}=2\\sqrt2\\cdot|\\vec b|\\cdot\\dfrac{\\sqrt2}{2}=2|\\vec b|$.<br>Значит, $|\\vec b|=6$.<br><br><b>Ответ:</b> 6",
            "tasks": [
                {
                    "text": "Длина вектора $\\vec a$ равна $2\\sqrt2$, угол между векторами $\\vec a$ и $\\vec b$ равен $45^{\\circ}$, а скалярное произведение $\\vec a\\cdot\\vec b$ равно $12$. Найдите длину вектора $\\vec b$.",
                    "answer": "6"
                },
                {
                    "text": "Длина вектора $\\vec a$ равна $4$, угол между векторами $\\vec a$ и $\\vec b$ равен $60^{\\circ}$, а скалярное произведение $\\vec a\\cdot\\vec b$ равно $18$. Найдите длину вектора $\\vec b$.",
                    "answer": "9"
                },
                {
                    "text": "Длина вектора $\\vec a$ равна $5$, угол между векторами $\\vec a$ и $\\vec b$ равен $120^{\\circ}$, а скалярное произведение $\\vec a\\cdot\\vec b$ равно $-20$. Найдите длину вектора $\\vec b$.",
                    "answer": "8"
                },
                {
                    "text": "Длина вектора $\\vec a$ равна $3\\sqrt3$, угол между векторами $\\vec a$ и $\\vec b$ равен $30^{\\circ}$, а скалярное произведение $\\vec a\\cdot\\vec b$ равно $27$. Найдите длину вектора $\\vec b$.",
                    "answer": "6"
                },
                {
                    "text": "Длина вектора $\\vec a$ равна $10$, угол между векторами $\\vec a$ и $\\vec b$ равен $120^{\\circ}$, а скалярное произведение $\\vec a\\cdot\\vec b$ равно $-35$. Найдите длину вектора $\\vec b$.",
                    "answer": "7"
                }
            ]
        },
        {
            "desc": "Прототип 6. Косинус угла между векторами по координатам",
            "theory_task": "Даны векторы $\\vec a(3;4)$ и $\\vec b(-4;-3)$. Найдите косинус угла между ними.",
            "theory_sol": "Косинус угла между векторами можно найти по формуле $\\cos\\alpha=\\dfrac{\\vec a\\cdot\\vec b}{|\\vec a|\\cdot|\\vec b|}$.<br>$\\vec a\\cdot\\vec b=3\\cdot(-4)+4\\cdot(-3)=-12-12=-24$.<br>$|\\vec a|=\\sqrt{3^2+4^2}=5$, $|\\vec b|=\\sqrt{(-4)^2+(-3)^2}=5$.<br>$\\cos\\alpha=\\dfrac{-24}{5\\cdot5}=-\\dfrac{24}{25}=-0{,}96$.<br><br><b>Ответ:</b> $-0{,}96$",
            "tasks": [
                {
                    "text": "Даны векторы $\\vec a(3;4)$ и $\\vec b(-4;-3)$. Найдите косинус угла между ними.",
                    "answer": "-0,96"
                },
                {
                    "text": "Даны векторы $\\vec a(5;0)$ и $\\vec b(3;4)$. Найдите косинус угла между ними.",
                    "answer": "0,6"
                },
                {
                    "text": "Даны векторы $\\vec a(7;24)$ и $\\vec b(24;-7)$. Найдите косинус угла между ними.",
                    "answer": "0"
                },
                {
                    "text": "Даны векторы $\\vec a(-6;8)$ и $\\vec b(3;-4)$. Найдите косинус угла между ними.",
                    "answer": "-1"
                },
                {
                    "text": "Даны векторы $\\vec a(8;6)$ и $\\vec b(6;-8)$. Найдите косинус угла между ними.",
                    "answer": "0"
                }
            ]
        },
        {
            "desc": "Прототип 7. Косинус угла между векторами по рисунку",
            "theory_task": "На координатной плоскости изображены векторы $\\vec a$ и $\\vec b$. Найдите косинус угла между ними.",
            "theory_sol": "1) По рисунку: $\\vec a=(3;4)$, $\\vec b=(4;3)$.<br>2) $\\vec a\\cdot\\vec b=3\\cdot4+4\\cdot3=24$, $|\\vec a|=|\\vec b|=5$.<br>3) $\\cos\\alpha=\\dfrac{24}{5\\cdot5}=\\dfrac{24}{25}=0{,}96$.<br><br><b>Ответ:</b> 0{,}96",
            "tasks": [
                {
                    "text": "На координатной плоскости изображены векторы $\\vec a$ и $\\vec b$. Найдите косинус угла между ними.",
                    "answer": "0,96"
                },
                {
                    "text": "Найдите косинус угла между векторами $\\vec a$ и $\\vec b$.",
                    "answer": "0,8"
                },
                {
                    "text": "Найдите косинус угла между векторами $\\vec a$ и $\\vec b$.",
                    "answer": "0"
                },
                {
                    "text": "Найдите косинус угла между векторами $\\vec a$ и $\\vec b$.",
                    "answer": "-0,6"
                },
                {
                    "text": "Найдите косинус угла между векторами $\\vec a$ и $\\vec b$.",
                    "answer": "0,96"
                }
            ]
        },
        {
            "desc": "Прототип 8. Скалярное произведение в треугольнике на клетчатой бумаге",
            "theory_task": "На клетчатой бумаге с размером клетки $1\\times1$ изображён треугольник $ABC$. Найдите скалярное произведение $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.",
            "theory_sol": "$\\overrightarrow{AB}=(5-1;6-2)=(4;4)$, $\\overrightarrow{AC}=(4-1;1-2)=(3;-1)$.<br>$\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=4\\cdot3+4\\cdot(-1)=12-4=8$.<br><br><b>Ответ:</b> 8",
            "tasks": [
                {
                    "text": "На клетчатой бумаге с размером клетки $1\\times1$ изображён треугольник $ABC$. Найдите скалярное произведение $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.",
                    "answer": "8"
                },
                {
                    "text": "Найдите $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.",
                    "answer": "0"
                },
                {
                    "text": "Найдите $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.",
                    "answer": "15"
                },
                {
                    "text": "Найдите $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.",
                    "answer": "20"
                },
                {
                    "text": "Найдите $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.",
                    "answer": "0"
                }
            ]
        },
        {
            "desc": "Прототип 9. Скалярное произведение в прямоугольном треугольнике",
            "theory_task": "В прямоугольном треугольнике $ABC$ катет $AC$ равен $\\sqrt3$. Найдите скалярное произведение $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.",
            "theory_sol": "Так как $\\angle C=90^\\circ$, то $\\overrightarrow{AB}=\\overrightarrow{AC}+\\overrightarrow{CB}$, причём $\\overrightarrow{AC}\\perp\\overrightarrow{CB}$.<br>$\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=(\\overrightarrow{AC}+\\overrightarrow{CB})\\cdot\\overrightarrow{AC}=|AC|^2+0=(\\sqrt3)^2=3$.<br><br><b>Ответ:</b> 3",
            "tasks": [
                {
                    "text": "В прямоугольном треугольнике $ABC$ катет $AC$ равен $\\sqrt3$. Найдите скалярное произведение $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.",
                    "answer": "3"
                },
                {
                    "text": "В прямоугольном треугольнике $ABC$ катет $AC$ равен $2$. Найдите скалярное произведение $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.",
                    "answer": "4"
                },
                {
                    "text": "В прямоугольном треугольнике $ABC$ катет $AC$ равен $3$. Найдите скалярное произведение $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.",
                    "answer": "9"
                },
                {
                    "text": "В прямоугольном треугольнике $ABC$ катет $AC$ равен $\\sqrt5$. Найдите скалярное произведение $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.",
                    "answer": "5"
                },
                {
                    "text": "В прямоугольном треугольнике $ABC$ катет $AC$ равен $5$. Найдите скалярное произведение $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.",
                    "answer": "25"
                }
            ]
        }
    ]
};


    // Прототип 1 — сумма трёх векторов по рисунку.
    const p1Pictures = [
        () => makeVectorSvg(-1.5, -1.5, 7.5, 8.5, [
            { x1: 1, y1: 1, x2: 4, y2: 5, name: 'a', position: 'left' },
            { x1: 4, y1: 6, x2: 6, y2: 5, name: 'b', position: 'above' },
            { x1: 6, y1: -1, x2: 1, y2: 8, name: 'c', position: 'right' }
        ]),
        () => makeVectorSvg(-1.5, -1.5, 7.5, 6.5, [
            { x1: 1, y1: 1, x2: 2, y2: 4, name: 'a', position: 'left' },
            { x1: 2, y1: 1, x2: 6, y2: 1, name: 'b', position: 'above' },
            { x1: 4, y1: 4, x2: 7, y2: 1, name: 'c', position: 'right' }
        ]),
        () => makeVectorSvg(-1.5, -1.5, 7.5, 7.5, [
            { x1: 1, y1: 1, x2: 3, y2: 4, name: 'a', position: 'left' },
            { x1: 1, y1: 5, x2: 6, y2: 6, name: 'b', position: 'above' },
            { x1: 6, y1: 1, x2: 5, y2: 5, name: 'c', position: 'right' }
        ]),
        () => makeVectorSvg(-2.5, -1.5, 7.5, 7.5, [
            { x1: 1, y1: 1, x2: 5, y2: 5, name: 'a', position: 'left' },
            { x1: 5, y1: 1, x2: 3, y2: 6, name: 'b', position: 'right' },
            { x1: 1, y1: 4, x2: 4, y2: 7, name: 'c', position: 'left' }
        ]),
        () => makeVectorSvg(-2.5, -1.5, 8.5, 7.5, [
            { x1: 1, y1: 1, x2: 6, y2: 6, name: 'a', position: 'left' },
            { x1: 1, y1: 5, x2: 7, y2: 7, name: 'b', position: 'above' },
            { x1: 7, y1: 2, x2: 5, y2: 7, name: 'c', position: 'right' }
        ])
    ];
    task2Extra.prototypes[0].svg_code = p1Pictures[0]();
    task2Extra.prototypes[0].tasks.forEach((task, index) => { task.svg_code = p1Pictures[index](); });

    // Прототип 4 — скалярное произведение выражения по рисунку.
    const p4Pictures = [
        () => makeVectorSvg(-1.5, -2.5, 7.5, 6.5, [
            { x1: 1, y1: 1, x2: 3, y2: 2, name: 'a', position: 'above' },
            { x1: 5, y1: 1, x2: 4, y2: 4, name: 'b', position: 'right' },
            { x1: 2, y1: 5, x2: 6, y2: 3, name: 'c', position: 'above' }
        ]),
        () => makeVectorSvg(-1.5, -1.5, 7.5, 7.5, [
            { x1: 1, y1: 1, x2: 4, y2: 3, name: 'a', position: 'left' },
            { x1: 2, y1: 5, x2: 3, y2: 4, name: 'b', position: 'above right' },
            { x1: 5, y1: 1, x2: 7, y2: 6, name: 'c', position: 'right' }
        ]),
        () => makeVectorSvg(-1.5, -2.5, 7.5, 7.5, [
            { x1: 1, y1: 5, x2: 6, y2: 3, name: 'a', position: 'above' },
            { x1: 2, y1: 1, x2: 4, y2: 4, name: 'b', position: 'left' },
            { x1: 7, y1: 1, x2: 6, y2: 5, name: 'c', position: 'right' }
        ]),
        () => makeVectorSvg(-2.5, -1.5, 7.5, 7.5, [
            { x1: 3, y1: 1, x2: 1, y2: 5, name: 'a', position: 'left' },
            { x1: 2, y1: 6, x2: 5, y2: 7, name: 'b', position: 'above' },
            { x1: 1, y1: 1, x2: 6, y2: 3, name: 'c', position: 'below' }
        ]),
        () => makeVectorSvg(-2.5, -6.5, 7.5, 5.5, [
            { x1: 1, y1: 1, x2: 5, y2: 1, name: 'a', labelX: 2.9, labelY: 0.5, anchor: 'middle' },
            { x1: 5, y1: 2, x2: 4, y2: 4, name: 'b', position: 'right' },
            { x1: 3, y1: 4, x2: 6, y2: -2, name: 'c', labelX: 3.65, labelY: 3.0, anchor: 'end' }
        ])
    ];
    task2Extra.prototypes[3].svg_code = p4Pictures[0]();
    task2Extra.prototypes[3].tasks.forEach((task, index) => { task.svg_code = p4Pictures[index](); });

    // Прототип 7 — косинус угла по рисунку.
    const p7Pictures = [
        () => makeVectorSvg(-1.5, -1.5, 7.5, 6.5, [
            { x1: 1, y1: 1, x2: 4, y2: 5, name: 'a', position: 'left' },
            { x1: 2, y1: 1, x2: 6, y2: 4, name: 'b', position: 'below right' }
        ]),
        () => makeVectorSvg(-1.5, -1.5, 6.5, 6.5, [
            { x1: 1, y1: 1, x2: 1, y2: 6, name: 'a', position: 'left' },
            { x1: 2, y1: 1, x2: 5, y2: 5, name: 'b', position: 'right' }
        ]),
        () => makeVectorSvg(-4.5, -1.5, 6.5, 6.5, [
            { x1: 1, y1: 1, x2: 5, y2: 4, name: 'a', position: 'below right' },
            { x1: 2, y1: 1, x2: -1, y2: 5, name: 'b', labelX: -1.15, labelY: 4.15, anchor: 'end' }
        ]),
        () => makeVectorSvg(-4.5, -1.5, 6.5, 5.5, [
            { x1: 1, y1: 1, x2: 6, y2: 1, name: 'a', position: 'below' },
            { x1: 2, y1: 1, x2: -1, y2: 5, name: 'b', labelX: -1.15, labelY: 4.15, anchor: 'end' }
        ]),
        () => makeVectorSvg(-1.5, -1.5, 9.5, 9.5, [
            { x1: 1, y1: 1, x2: 7, y2: 9, name: 'a', position: 'left' },
            { x1: 1, y1: 2, x2: 9, y2: 8, name: 'b', position: 'below right' }
        ], 22)
    ];
    task2Extra.prototypes[6].svg_code = p7Pictures[0]();
    task2Extra.prototypes[6].tasks.forEach((task, index) => { task.svg_code = p7Pictures[index](); });

    // Прототип 8 — треугольники на клетчатой бумаге.
    const p8Pictures = [
        () => makeTriangleGridSvg(-0.5, -0.5, 6.5, 6.5, [
            { text: 'A', x: 1, y: 2, position: 'left' },
            { text: 'B', x: 5, y: 6, position: 'above right' },
            { text: 'C', x: 4, y: 1, position: 'below right' }
        ]),
        () => makeTriangleGridSvg(-0.5, -0.5, 7.5, 5.5, [
            { text: 'A', x: 2, y: 1, position: 'below' },
            { text: 'B', x: 7, y: 1, position: 'right' },
            { text: 'C', x: 2, y: 5, position: 'left' }
        ]),
        () => makeTriangleGridSvg(-0.5, -0.5, 6.5, 5.5, [
            { text: 'A', x: 1, y: 1, position: 'left' },
            { text: 'B', x: 4, y: 5, position: 'above' },
            { text: 'C', x: 6, y: 1, position: 'right' }
        ]),
        () => makeTriangleGridSvg(-0.5, -0.5, 8.5, 7.5, [
            { text: 'A', x: 3, y: 2, position: 'left' },
            { text: 'B', x: 8, y: 4, position: 'right' },
            { text: 'C', x: 5, y: 7, position: 'above' }
        ], 22),
        () => makeTriangleGridSvg(-0.5, -0.5, 8.5, 6.5, [
            { text: 'A', x: 4, y: 6, position: 'above' },
            { text: 'B', x: 1, y: 2, position: 'left' },
            { text: 'C', x: 8, y: 3, position: 'right' }
        ], 22)
    ];
    task2Extra.prototypes[7].svg_code = p8Pictures[0]();
    task2Extra.prototypes[7].tasks.forEach((task, index) => { task.svg_code = p8Pictures[index](); });

    // Прототип 9 — один устойчивый чертёж для всех числовых вариантов.
    task2Extra.prototypes[8].svg_code = makeRightTriangleSvg();
    task2Extra.prototypes[8].tasks.forEach(task => { task.svg_code = makeRightTriangleSvg(); });

    window.extraDatabase[2] = task2Extra;
    window.extraDatabase["task2"] = task2Extra;
})();
