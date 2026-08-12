(function() {
    window.extraDatabase = window.extraDatabase || {};

    const task1Extra = {
    "title": "Дополнительно",
    "source": "Дополнительные прототипы из присланного LaTeX-файла",
    "prototypes": [
        {
            "desc": "Прямоугольный треугольник: гипотенуза и sin/cos/tg",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AB=5$, $\\sin A=\\frac{7}{25}$. Найдите $AC$.",
            "theory_sol": "Так как $AB$ — гипотенуза, а $AC$ — катет, прилежащий к углу $A$, используем косинус: $\\cos A=\\frac{AC}{AB}$.<br><br>Найдём $\\cos A$ по основному тригонометрическому тождеству:<br>$\\cos A=\\sqrt{1-\\sin^2 A}=\\sqrt{1-\\left(\\frac{7}{25}\\right)^2}=\\sqrt{\\frac{576}{625}}=\\frac{24}{25}$.<br><br>Тогда $AC=AB\\cdot\\cos A=5\\cdot\\frac{24}{25}=\\frac{24}{5}=4{,}8$.<br><br><b>Ответ:</b> 4,8",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AB=10$, $\\sin A=0{,}6$. Найдите $AC$.",
                    "answer": "8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AB=7$, $\\operatorname{tg} A=\\frac{33}{4\\sqrt{33}}$. Найдите $AC$.",
                    "answer": "4",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AB=5$, $\\cos A=\\frac{7}{25}$. Найдите $BC$.",
                    "answer": "4,8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AB=20$, $\\sin A=0{,}8$. Найдите $AC$.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AB=30$, $\\cos A=0{,}6$. Найдите $BC$.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Прямоугольный треугольник: сторона по sin/cos/tg",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AC=4{,}8$, $\\sin A=\\frac{7}{25}$. Найдите $AB$.",
            "theory_sol": "Гипотенуза — сторона $AB$. По условию известен прилежащий к углу $A$ катет $AC$.<br><br>$\\cos A=\\sqrt{1-\\sin^2 A}=\\sqrt{1-\\frac{49}{625}}=\\frac{24}{25}$.<br><br>По определению косинуса: $\\cos A=\\frac{AC}{AB}$, поэтому $AB=\\dfrac{AC}{\\cos A}=\\dfrac{4{,}8}{\\frac{24}{25}}=5$.<br><br><b>Ответ:</b> 5",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AC=4$, $\\cos A=0{,}5$. Найдите $AB$.",
                    "answer": "8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AC=4{,}8$, $\\sin A=\\frac{7}{25}$. Найдите $AB$.",
                    "answer": "5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $BC=4$, $\\sin A=\\frac{\\sqrt{17}}{17}$. Найдите $AC$.",
                    "answer": "16",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $BC=9$, $\\operatorname{tg} A=0{,}75$. Найдите $AC$.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AC=16$, $\\operatorname{tg} A=0{,}75$. Найдите $BC$.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Прямоугольный треугольник: sin, cos, tg по сторонам",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AC=24$, $BC=7$. Найдите $\\sin A$.",
            "theory_sol": "Найдём гипотенузу по теореме Пифагора: $AB=\\sqrt{AC^2+BC^2}=\\sqrt{24^2+7^2}=\\sqrt{625}=25$.<br><br>Синус угла — отношение противолежащего катета к гипотенузе: $\\sin A=\\frac{BC}{AB}=\\frac{7}{25}$.<br><br><b>Ответ:</b> $0{,}28$",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AC=7$, $BC=24$. Найдите $\\cos A$.",
                    "answer": "0,28",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AC=8$, $BC=4$. Найдите $\\operatorname{tg} A$.",
                    "answer": "0,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AB=4\\sqrt5$, $AC=8$. Найдите $\\operatorname{tg} A$.",
                    "answer": "0,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AC=12$, $BC=9$. Найдите $\\operatorname{tg} A$.",
                    "answer": "0,75",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $AB=20$, $AC=12$. Найдите $\\sin A$.",
                    "answer": "0,8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Высота к гипотенузе: проекция катета $AH$",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=27$, $\\sin A=\\frac{2}{3}$. Найдите $AH$.",
            "theory_sol": "В прямоугольном треугольнике $AC=AB\\cos A$. По свойству проекции катета на гипотенузу $AC^2=AB\\cdot AH$, поэтому $AH=\\frac{AC^2}{AB}=AB\\cdot\\cos^2 A$.<br><br>Найдём $\\cos A$: $\\cos A=\\sqrt{1-\\sin^2 A}=\\sqrt{1-\\frac{4}{9}}=\\frac{\\sqrt5}{3}$.<br><br>$AH=27\\cdot\\left(\\frac{\\sqrt5}{3}\\right)^2=27\\cdot\\frac{5}{9}=15$.<br><br><b>Ответ:</b> 15",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=27$, $\\cos A=\\frac{2}{3}$. Найдите $AH$.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=13$, $\\operatorname{tg} A=\\frac15$. Найдите $AH$.",
                    "answer": "12,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=10$, $\\sin A=\\frac35$. Найдите $AH$.",
                    "answer": "6,4",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=30$, $\\operatorname{tg} A=0{,}75$. Найдите $AH$.",
                    "answer": "19,2",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=50$, $\\sin A=0{,}8$. Найдите $AH$.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Высота к гипотенузе: проекция катета $BH$",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=27$, $\\sin A=\\frac{2}{3}$. Найдите $BH$.",
            "theory_sol": "В прямоугольном треугольнике $BC=AB\\sin A$. По свойству проекции катета на гипотенузу $BC^2=AB\\cdot BH$, поэтому $BH=\\frac{BC^2}{AB}=AB\\cdot\\sin^2 A$.<br><br>$BH=27\\cdot\\left(\\frac{2}{3}\\right)^2=27\\cdot\\frac{4}{9}=12$.<br><br><b>Ответ:</b> 12",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=27$, $\\cos A=\\frac23$. Найдите $BH$.",
                    "answer": "15",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=13$, $\\operatorname{tg} A=5$. Найдите $BH$.",
                    "answer": "12,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=25$, $\\sin A=0{,}6$. Найдите $BH$.",
                    "answer": "9",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=30$, $\\operatorname{tg} A=0{,}75$. Найдите $BH$.",
                    "answer": "10,8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=50$, $\\sin A=0{,}8$. Найдите $BH$.",
                    "answer": "32",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Высота к гипотенузе: найти $CH$",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=4\\sqrt{15}$, $\\sin A=0{,}25$. Найдите $CH$.",
            "theory_sol": "Катеты равны $AC=AB\\cos A$ и $BC=AB\\sin A$. Площадь можно записать двумя способами: $\\frac12 AC\\cdot BC=\\frac12 AB\\cdot CH$, поэтому $CH=\\frac{AC\\cdot BC}{AB}=AB\\sin A\\cos A$.<br><br>$\\sin A=\\frac14$, тогда $\\cos A=\\sqrt{1-\\frac{1}{16}}=\\frac{\\sqrt{15}}{4}$.<br><br>$CH=4\\sqrt{15}\\cdot\\frac14\\cdot\\frac{\\sqrt{15}}{4}=\\frac{15}{4}=3{,}75$.<br><br><b>Ответ:</b> 3,75",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=4\\sqrt{15}$, $\\cos A=0{,}25$. Найдите $CH$.",
                    "answer": "3,75",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=13$, $\\operatorname{tg} A=5$. Найдите $CH$.",
                    "answer": "2,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=10$, $\\sin A=0{,}6$. Найдите $CH$.",
                    "answer": "4,8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=30$, $\\operatorname{tg} A=0{,}75$. Найдите $CH$.",
                    "answer": "14,4",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $AB=50$, $\\sin A=0{,}8$. Найдите $CH$.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Равнобедренный треугольник: сторона по основанию",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "В треугольнике $ABC$ известно, что $AC=BC$, $AB=8$, $\\cos A=0{,}5$. Найдите $AC$.",
            "theory_sol": "В равнобедренном треугольнике высота $CH$, проведённая к основанию, является медианой, значит $AH=\\frac{AB}{2}=4$.<br><br>В прямоугольном треугольнике $ACH$: $\\cos A=\\frac{AH}{AC}$.<br><br>$AC=\\frac{AH}{\\cos A}=\\frac{4}{0{,}5}=8$.<br><br><b>Ответ:</b> 8",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, $AB=8$, $\\cos A=0{,}5$. Найдите $AC$.",
                    "answer": "8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, $AB=9{,}6$, $\\sin A=\\frac{7}{25}$. Найдите $AC$.",
                    "answer": "5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC=5$, $\\sin A=\\frac{7}{25}$. Найдите $AB$.",
                    "answer": "9,6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC=10$, $\\cos A=0{,}6$. Найдите $AB$.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC=25$, $\\sin A=0{,}6$. Найдите $AB$.",
                    "answer": "40",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Равнобедренный треугольник: сторона по высоте",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "В треугольнике $ABC$ известно, что $AC=BC$, высота $CH$ равна $4$, $\\sin A=0{,}5$. Найдите $AC$.",
            "theory_sol": "В прямоугольном треугольнике $ACH$ катет $CH$ противолежит углу $A$, поэтому $\\sin A=\\frac{CH}{AC}$.<br><br>$AC=\\frac{CH}{\\sin A}=\\frac{4}{0{,}5}=8$.<br><br><b>Ответ:</b> 8",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, высота $CH$ равна $4$, $\\sin A=0{,}5$. Найдите $AC$.",
                    "answer": "8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, высота $CH$ равна $3$, $\\cos A=0{,}8$. Найдите $AC$.",
                    "answer": "5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, высота $CH$ равна $20$, $\\cos A=0{,}6$. Найдите $AC$.",
                    "answer": "25",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, высота $CH$ равна $5$, $\\sin A=0{,}8$. Найдите $AC$.",
                    "answer": "6,25",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, высота $CH$ равна $7{,}2$, $\\cos A=0{,}6$. Найдите $AC$.",
                    "answer": "9",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Равнобедренный треугольник: высота из вершины $A$",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"40\" y1=\"135\" x2=\"175\" y2=\"88\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"181\" y=\"91\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "В треугольнике $ABC$ известно, что $AC=BC$, $AH$ — высота, проведённая к стороне $BC$, $\\sin BAC=\\frac{7}{25}$. Найдите $\\sin BAH$.",
            "theory_sol": "Так как $AC=BC$, то углы при основании равны: $\\angle BAC=\\angle ABC$.<br><br>В прямоугольном треугольнике $ABH$ угол $ABH$ равен углу $ABC$, значит $\\angle BAH=90^{\\circ}-\\angle BAC$.<br><br>Тогда $\\sin BAH=\\cos BAC=\\sqrt{1-\\left(\\frac{7}{25}\\right)^2}=\\frac{24}{25}$.<br><br><b>Ответ:</b> $0{,}96$",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, $AH$ — высота, проведённая к стороне $BC$, $\\sin BAC=\\frac{7}{25}$. Найдите $\\sin BAH$.",
                    "answer": "0,96",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"40\" y1=\"135\" x2=\"175\" y2=\"88\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"181\" y=\"91\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, $AH$ — высота, проведённая к стороне $BC$, $\\cos BAC=\\frac{\\sqrt{17}}{17}$. Найдите $\\operatorname{tg} BAH$.",
                    "answer": "0,25",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"40\" y1=\"135\" x2=\"175\" y2=\"88\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"181\" y=\"91\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, $AH$ — высота, проведённая к стороне $BC$, $\\cos BAC=0{,}1$. Найдите $\\sin BAH$.",
                    "answer": "0,1",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"40\" y1=\"135\" x2=\"175\" y2=\"88\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"181\" y=\"91\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, $AH$ — высота, проведённая к стороне $BC$, $\\sin BAC=0{,}8$. Найдите $\\cos BAH$.",
                    "answer": "0,8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"40\" y1=\"135\" x2=\"175\" y2=\"88\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"181\" y=\"91\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ известно, что $AC=BC$, $AH$ — высота, проведённая к стороне $BC$, $\\cos BAC=0{,}6$. Найдите $\\sin BAH$.",
                    "answer": "0,6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"40\" y1=\"135\" x2=\"175\" y2=\"88\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"181\" y=\"91\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Катет и его проекция на гипотенузу",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $BC=25$, $BH=20$. Найдите $\\cos A$.",
            "theory_sol": "Для катета и его проекции верно: $BC^2=AB\\cdot BH$.<br><br>Отсюда $AB=\\frac{BC^2}{BH}=\\frac{25^2}{20}=\\frac{125}{4}$.<br><br>$AH=AB-BH=\\frac{125}{4}-20=\\frac{45}{4}$. Тогда<br>$\\cos^2 A=\\frac{AH}{AB}=\\frac{45/4}{125/4}=\\frac{9}{25}$.<br><br>$\\cos A=\\frac{3}{5}=0{,}6$.<br><br><b>Ответ:</b> 0,6",
            "tasks": [
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $BC=25$, $BH=20$. Найдите $\\cos A$.",
                    "answer": "0,6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $BC=8$, $BH=4$. Найдите $\\sin A$.",
                    "answer": "0,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $BC=4\\sqrt5$, $BH=4$. Найдите $\\operatorname{tg} A$.",
                    "answer": "0,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $BC=15$, $BH=9$. Найдите $\\sin A$.",
                    "answer": "0,6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В треугольнике $ABC$ угол $C$ равен $90^{\\circ}$, $CH$ — высота, $BC=15$, $BH=9$. Найдите $\\operatorname{tg} A$.",
                    "answer": "0,75",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,40 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"145\" y1=\"40\" x2=\"145\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.3,46.1 L144,53.1 L150.6,47\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M145,130 L155,130 L155,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"149\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Тупоугольный равнобедренный треугольник: синус угла",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,40 L95,135 L220,135 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"40\" y1=\"135\" x2=\"95\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M40,125 L50,125 L50,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"73.1\" y1=\"84.2\" x2=\"61.9\" y2=\"90.8\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"157.5\" y1=\"128.5\" x2=\"157.5\" y2=\"141.5\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"25\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"92\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"26\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "В тупоугольном треугольнике $ABC$ известно, что $AC=BC=8$, высота $AH$ равна $4$. Найдите $\\sin ACB$.",
            "theory_sol": "Рассмотрим прямоугольный треугольник $ACH$. Гипотенуза $AC=8$, катет $AH=4$.<br><br>Угол $\\angle ACH$ смежный с тупым углом $\\angle ACB$, поэтому $\\angle ACB=180^{\\circ}-\\angle ACH$.<br><br>Используем формулу приведения: $\\sin(180^{\\circ}-\\alpha)=\\sin\\alpha$, значит $\\sin(\\angle ACB)=\\sin(\\angle ACH)$.<br><br>В прямоугольном треугольнике $ACH$: $\\sin ACH=\\dfrac{AH}{AC}=\\dfrac{4}{8}=0{,}5$.<br><br><b>Ответ:</b> 0,5",
            "tasks": [
                {
                    "text": "В тупоугольном треугольнике $ABC$ известно, что $AC=BC=8$, высота $AH$ равна $4$. Найдите $\\sin ACB$.",
                    "answer": "0,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,40 L95,135 L220,135 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"40\" y1=\"135\" x2=\"95\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M40,125 L50,125 L50,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"73.1\" y1=\"84.2\" x2=\"61.9\" y2=\"90.8\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"157.5\" y1=\"128.5\" x2=\"157.5\" y2=\"141.5\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"25\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"92\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"26\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В тупоугольном треугольнике $ABC$ известно, что $AC=BC=25$, высота $AH$ равна $20$. Найдите $\\cos ACB$.",
                    "answer": "-0,6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,40 L95,135 L220,135 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"40\" y1=\"135\" x2=\"95\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M40,125 L50,125 L50,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"73.1\" y1=\"84.2\" x2=\"61.9\" y2=\"90.8\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"157.5\" y1=\"128.5\" x2=\"157.5\" y2=\"141.5\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"25\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"92\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"26\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В тупоугольном треугольнике $ABC$ известно, что $AC=BC=\\sqrt{17}$, $AH$ — высота, $CH=4$. Найдите $\\operatorname{tg} ACB$.",
                    "answer": "-0,25",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,40 L95,135 L220,135 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"40\" y1=\"135\" x2=\"95\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M40,125 L50,125 L50,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"73.1\" y1=\"84.2\" x2=\"61.9\" y2=\"90.8\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"157.5\" y1=\"128.5\" x2=\"157.5\" y2=\"141.5\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"25\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"92\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"26\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В тупоугольном треугольнике $ABC$ известно, что $AC=BC=10$, высота $AH$ равна $8$. Найдите $\\sin ACB$.",
                    "answer": "0,8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,40 L95,135 L220,135 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"40\" y1=\"135\" x2=\"95\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M40,125 L50,125 L50,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"73.1\" y1=\"84.2\" x2=\"61.9\" y2=\"90.8\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"157.5\" y1=\"128.5\" x2=\"157.5\" y2=\"141.5\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"25\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"92\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"26\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "В тупоугольном треугольнике $ABC$ известно, что $AC=BC=10$, высота $AH$ равна $6$. Найдите $\\cos ACB$.",
                    "answer": "-0,8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,40 L95,135 L220,135 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"40\" y1=\"135\" x2=\"95\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M40,125 L50,125 L50,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"73.1\" y1=\"84.2\" x2=\"61.9\" y2=\"90.8\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"157.5\" y1=\"128.5\" x2=\"157.5\" y2=\"141.5\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"25\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"92\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"26\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Равнобедренная трапеция: синус острого угла",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "Основания равнобедренной трапеции равны $51$ и $65$. Боковые стороны равны $25$. Найдите синус острого угла трапеции.",
            "theory_sol": "Опустим высоту из вершины меньшего основания. Разность оснований равна $65-51=14$, значит горизонтальная проекция боковой стороны равна $\\frac{14}{2}=7$.<br><br>Высота: $h=\\sqrt{25^2-7^2}=\\sqrt{625-49}=24$.<br><br>Синус острого угла равен отношению высоты к боковой стороне: $\\sin\\alpha=\\frac{24}{25}$.<br><br><b>Ответ:</b> $0{,}96$",
            "tasks": [
                {
                    "text": "Основания равнобедренной трапеции равны $17$ и $87$. Высота трапеции равна $14$. Найдите тангенс острого угла.",
                    "answer": "0,4",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $43$ и $73$. Косинус острого угла трапеции равен $\\frac57$. Найдите боковую сторону.",
                    "answer": "21",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $7$ и $51$. Тангенс острого угла равен $\\frac5{11}$. Найдите высоту трапеции.",
                    "answer": "10",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $20$ и $44$. Высота трапеции равна $12$. Найдите тангенс острого угла.",
                    "answer": "1",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $14$ и $26$. Косинус острого угла трапеции равен $0{,}6$. Найдите боковую сторону.",
                    "answer": "10",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Квадрат: площадь по диагонали",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L190,135 L190,35 L60,35 L60,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"60\" y1=\"135\" x2=\"190\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"195\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"47\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>",
            "theory_task": "Найдите площадь квадрата, если его диагональ равна $1$.",
            "theory_sol": "Диагональ квадрата со стороной $a$ равна $d=a\\sqrt2$. Поэтому $a=\\frac{d}{\\sqrt2}=\\frac{1}{\\sqrt2}$.<br><br>Площадь квадрата $S=a^2=\\left(\\frac{1}{\\sqrt2}\\right)^2=\\frac12=0{,}5$.<br><br><b>Ответ:</b> 0,5",
            "tasks": [
                {
                    "text": "Найдите площадь квадрата, если его диагональ равна $1$.",
                    "answer": "0,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L190,135 L190,35 L60,35 L60,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"60\" y1=\"135\" x2=\"190\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"195\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"47\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Найдите диагональ квадрата, если его площадь равна $2$.",
                    "answer": "2",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L190,135 L190,35 L60,35 L60,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"60\" y1=\"135\" x2=\"190\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"195\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"47\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Найдите площадь квадрата, если его диагональ равна $6$.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L190,135 L190,35 L60,35 L60,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"60\" y1=\"135\" x2=\"190\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"195\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"47\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Найдите диагональ квадрата, если его площадь равна $8$.",
                    "answer": "4",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L190,135 L190,35 L60,35 L60,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"60\" y1=\"135\" x2=\"190\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"195\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"47\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Найдите площадь квадрата, если его диагональ равна $10$.",
                    "answer": "50",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,135 L190,135 L190,35 L60,35 L60,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"60\" y1=\"135\" x2=\"190\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"47\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"195\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"47\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                }
            ]
        },
        {
            "desc": "Прямоугольник: стороны по площади и отношению",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,130 L220,130 L220,55 L40,55 L40,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"40\" y1=\"130\" x2=\"220\" y2=\"55\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"225\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"27\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>",
            "theory_task": "Найдите периметр прямоугольника, если его площадь равна $18$, а отношение соседних сторон равно $1:2$.",
            "theory_sol": "Пусть стороны прямоугольника равны $x$ и $2x$. Тогда площадь $2x^2=18$, откуда $x^2=9$, $x=3$.<br><br>Стороны равны $3$ и $6$. Периметр $P=2(3+6)=18$.<br><br><b>Ответ:</b> 18",
            "tasks": [
                {
                    "text": "Найдите периметр прямоугольника, если его площадь равна $18$, а отношение соседних сторон равно $1:2$.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,130 L220,130 L220,55 L40,55 L40,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"40\" y1=\"130\" x2=\"220\" y2=\"55\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"225\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"27\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Площадь прямоугольника равна $18$. Найдите его большую сторону, если она на $3$ больше меньшей стороны.",
                    "answer": "6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,130 L220,130 L220,55 L40,55 L40,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"40\" y1=\"130\" x2=\"220\" y2=\"55\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"225\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"27\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Периметр прямоугольника равен $42$, а площадь равна $98$. Найдите большую сторону прямоугольника.",
                    "answer": "14",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,130 L220,130 L220,55 L40,55 L40,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"40\" y1=\"130\" x2=\"220\" y2=\"55\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"225\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"27\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Найдите периметр прямоугольника, если его площадь равна $32$, а отношение соседних сторон равно $1:2$.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,130 L220,130 L220,55 L40,55 L40,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"40\" y1=\"130\" x2=\"220\" y2=\"55\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"225\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"27\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Площадь прямоугольника равна $45$. Найдите его большую сторону, если она на $4$ больше меньшей стороны.",
                    "answer": "9",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,130 L220,130 L220,55 L40,55 L40,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"40\" y1=\"130\" x2=\"220\" y2=\"55\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"225\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"27\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                }
            ]
        },
        {
            "desc": "Прямоугольник: площадь по периметру и диагонали",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,130 L220,130 L220,55 L40,55 L40,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"40\" y1=\"130\" x2=\"220\" y2=\"55\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"225\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"27\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>",
            "theory_task": "Периметр прямоугольника равен $28$, а диагональ равна $10$. Найдите площадь этого прямоугольника.",
            "theory_sol": "Пусть стороны прямоугольника равны $a$ и $b$. Тогда $2(a+b)=28$, значит $a+b=14$.<br><br>По теореме Пифагора для диагонали: $a^2+b^2=10^2=100$.<br><br>$(a+b)^2=a^2+2ab+b^2$, поэтому $14^2=100+2ab$.<br><br>$196=100+2ab$, $ab=48$. Значит площадь равна $48$.<br><br><b>Ответ:</b> 48",
            "tasks": [
                {
                    "text": "Периметр прямоугольника равен $28$, а диагональ равна $10$. Найдите площадь этого прямоугольника.",
                    "answer": "48",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,130 L220,130 L220,55 L40,55 L40,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"40\" y1=\"130\" x2=\"220\" y2=\"55\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"225\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"27\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Периметр прямоугольника равен $34$, а площадь равна $60$. Найдите диагональ этого прямоугольника.",
                    "answer": "13",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,130 L220,130 L220,55 L40,55 L40,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"40\" y1=\"130\" x2=\"220\" y2=\"55\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"225\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"27\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Сторона прямоугольника относится к его диагонали как $4:5$, а другая сторона равна $6$. Найдите площадь прямоугольника.",
                    "answer": "48",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,130 L220,130 L220,55 L40,55 L40,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"40\" y1=\"130\" x2=\"220\" y2=\"55\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"225\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"27\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Периметр прямоугольника равен $46$, а площадь равна $120$. Найдите диагональ этого прямоугольника.",
                    "answer": "17",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,130 L220,130 L220,55 L40,55 L40,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"40\" y1=\"130\" x2=\"220\" y2=\"55\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"225\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"27\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Диагональ прямоугольника равна $17$, а одна из его сторон равна $8$. Найдите площадь прямоугольника.",
                    "answer": "120",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,130 L220,130 L220,55 L40,55 L40,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"40\" y1=\"130\" x2=\"220\" y2=\"55\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"145\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"225\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"27\" y=\"55\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                }
            ]
        },
        {
            "desc": "Треугольник: площадь по двум сторонам и углу",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L95,42 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M58,135 Q53,125 49,120\" fill=\"none\" stroke=\"black\" stroke-width=\"1.3\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"92\" y=\"32\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "Найдите площадь треугольника, две стороны которого равны $8$ и $12$, а угол между ними равен $30^{\\circ}$.",
            "theory_sol": "Площадь треугольника по двум сторонам и углу между ними:<br>$S=\\frac12 ab\\sin\\gamma$.<br><br>$S=\\frac12\\cdot 8\\cdot 12\\cdot \\sin 30^{\\circ}=48\\cdot\\frac12=24$.<br><br><b>Ответ:</b> 24",
            "tasks": [
                {
                    "text": "Найдите площадь треугольника, две стороны которого равны $8$ и $12$, а угол между ними равен $30^{\\circ}$.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L95,42 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M58,135 Q53,125 49,120\" fill=\"none\" stroke=\"black\" stroke-width=\"1.3\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"92\" y=\"32\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Угол при вершине равнобедренного треугольника равен $30^{\\circ}$. Боковая сторона треугольника равна $10$. Найдите площадь этого треугольника.",
                    "answer": "25",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L95,42 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M58,135 Q53,125 49,120\" fill=\"none\" stroke=\"black\" stroke-width=\"1.3\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"92\" y=\"32\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Угол при вершине равнобедренного треугольника равен $150^{\\circ}$. Боковая сторона треугольника равна $20$. Найдите площадь этого треугольника.",
                    "answer": "100",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L95,42 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M58,135 Q53,125 49,120\" fill=\"none\" stroke=\"black\" stroke-width=\"1.3\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"92\" y=\"32\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Найдите площадь треугольника, две стороны которого равны $6$ и $10$, а угол между ними равен $90^{\\circ}$.",
                    "answer": "30",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L95,42 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M58,135 Q53,125 49,120\" fill=\"none\" stroke=\"black\" stroke-width=\"1.3\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"92\" y=\"32\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Найдите площадь треугольника, две стороны которого равны $14$ и $18$, а угол между ними равен $30^{\\circ}$.",
                    "answer": "63",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L95,42 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M58,135 Q53,125 49,120\" fill=\"none\" stroke=\"black\" stroke-width=\"1.3\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"92\" y=\"32\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Прямоугольный треугольник: площадь по катету и гипотенузе",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "В прямоугольном треугольнике катет равен $6$, а гипотенуза равна $10$. Найдите площадь этого треугольника.",
            "theory_sol": "По теореме Пифагора второй катет равен $\\sqrt{10^2-6^2}=8$.<br><br>Тогда $S=\\frac12\\cdot 6\\cdot 8=24$.<br><br><b>Ответ:</b> 24",
            "tasks": [
                {
                    "text": "В прямоугольном треугольнике катет равен $5$, а гипотенуза равна $13$. Найдите площадь треугольника.",
                    "answer": "30",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В прямоугольном треугольнике катет равен $7$, а гипотенуза равна $25$. Найдите площадь треугольника.",
                    "answer": "84",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В прямоугольном треугольнике катет равен $9$, а гипотенуза равна $15$. Найдите площадь треугольника.",
                    "answer": "54",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В прямоугольном треугольнике катет равен $8$, а гипотенуза равна $10$. Найдите площадь треугольника.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "В прямоугольном треугольнике катет равен $20$, а гипотенуза равна $29$. Найдите площадь треугольника.",
                    "answer": "210",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L145,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M138.2,50.9 L144,57.8 L150.8,51.9\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"142\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Прямоугольный треугольник: высота и медиана",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L160,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"160\" y1=\"45\" x2=\"160\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"160\" y1=\"45\" x2=\"130\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M152.8,50.4 L157.9,57.9 L165.1,52.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M160,130 L170,130 L170,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"157\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"164\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text><text x=\"124\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">M</text></svg>",
            "theory_task": "Острый угол $B$ прямоугольного треугольника $ABC$ равен $61^{\\circ}$. Найдите угол между высотой $CH$ и медианой $CM$, проведёнными из вершины прямого угла $C$. Ответ дайте в градусах.",
            "theory_sol": "$\\angle A=90^{\\circ}-61^{\\circ}=29^{\\circ}$.<br><br>Медиана к гипотенузе даёт равнобедренный треугольник $ACM$, поэтому $\\angle ACM=\\angle A=29^{\\circ}$.<br><br>Так как $CH\\perp AB$, то $\\angle ACH=\\angle B=61^{\\circ}$.<br><br>Искомый угол равен $61^{\\circ}-29^{\\circ}=32^{\\circ}$.<br><br><b>Ответ:</b> 32",
            "tasks": [
                {
                    "text": "Острый угол $B$ прямоугольного треугольника $ABC$ равен $66^{\\circ}$. Найдите угол между высотой $CH$ и медианой $CM$, проведёнными из вершины прямого угла $C$.",
                    "answer": "42",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L160,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"160\" y1=\"45\" x2=\"160\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"160\" y1=\"45\" x2=\"130\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M152.8,50.4 L157.9,57.9 L165.1,52.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M160,130 L170,130 L170,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"157\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"164\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text><text x=\"124\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">M</text></svg>"
                },
                {
                    "text": "Острый угол $B$ прямоугольного треугольника $ABC$ равен $32^{\\circ}$. Найдите угол между высотой $CH$ и медианой $CM$, проведёнными из вершины прямого угла $C$.",
                    "answer": "26",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L160,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"160\" y1=\"45\" x2=\"160\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"160\" y1=\"45\" x2=\"130\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M152.8,50.4 L157.9,57.9 L165.1,52.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M160,130 L170,130 L170,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"157\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"164\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text><text x=\"124\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">M</text></svg>"
                },
                {
                    "text": "Острый угол $B$ прямоугольного треугольника $ABC$ равен $58^{\\circ}$. Найдите угол между высотой $CH$ и медианой $CM$, проведёнными из вершины прямого угла $C$.",
                    "answer": "26",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L160,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"160\" y1=\"45\" x2=\"160\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"160\" y1=\"45\" x2=\"130\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M152.8,50.4 L157.9,57.9 L165.1,52.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M160,130 L170,130 L170,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"157\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"164\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text><text x=\"124\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">M</text></svg>"
                },
                {
                    "text": "Острый угол $B$ прямоугольного треугольника $ABC$ равен $40^{\\circ}$. Найдите угол между высотой $CH$ и медианой $CM$, проведёнными из вершины прямого угла $C$.",
                    "answer": "10",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L160,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"160\" y1=\"45\" x2=\"160\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"160\" y1=\"45\" x2=\"130\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M152.8,50.4 L157.9,57.9 L165.1,52.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M160,130 L170,130 L170,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"157\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"164\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text><text x=\"124\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">M</text></svg>"
                },
                {
                    "text": "Острый угол $B$ прямоугольного треугольника $ABC$ равен $75^{\\circ}$. Найдите угол между высотой $CH$ и медианой $CM$, проведёнными из вершины прямого угла $C$.",
                    "answer": "60",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L160,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"160\" y1=\"45\" x2=\"160\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"160\" y1=\"45\" x2=\"130\" y2=\"140\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M152.8,50.4 L157.9,57.9 L165.1,52.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><path d=\"M160,130 L170,130 L170,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"157\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"164\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text><text x=\"124\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">M</text></svg>"
                }
            ]
        },
        {
            "desc": "Прямоугольный треугольник: биссектрисы острых углов",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L200,140 L200,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"35\" y1=\"140\" x2=\"155\" y2=\"102\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"200\" y1=\"45\" x2=\"155\" y2=\"102\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M190,140 L190,130 L200,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"40\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"205\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"158\" y=\"102\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>",
            "theory_task": "Найдите острый угол между биссектрисами острых углов прямоугольного треугольника. Ответ дайте в градусах.",
            "theory_sol": "В любом треугольнике угол между внутренними биссектрисами двух углов при точке их пересечения равен $90^{\\circ}+\\frac{C}{2}$.<br><br>В прямоугольном треугольнике $C=90^{\\circ}$, поэтому больший угол между биссектрисами равен $90^{\\circ}+45^{\\circ}=135^{\\circ}$.<br><br>В задаче требуется острый угол, значит берём смежный с ним угол: $180^{\\circ}-135^{\\circ}=45^{\\circ}$.<br><br><b>Ответ:</b> 45",
            "tasks": [
                {
                    "text": "Найдите острый угол между биссектрисами острых углов прямоугольного треугольника.",
                    "answer": "45",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L200,140 L200,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"35\" y1=\"140\" x2=\"155\" y2=\"102\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"200\" y1=\"45\" x2=\"155\" y2=\"102\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M190,140 L190,130 L200,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"40\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"205\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"158\" y=\"102\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "В прямоугольном треугольнике проведены биссектрисы двух острых углов. Найдите острый угол между этими биссектрисами.",
                    "answer": "45",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L200,140 L200,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"35\" y1=\"140\" x2=\"155\" y2=\"102\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"200\" y1=\"45\" x2=\"155\" y2=\"102\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M190,140 L190,130 L200,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"40\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"205\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"158\" y=\"102\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Найдите меньший угол, образованный биссектрисами острых углов прямоугольного треугольника.",
                    "answer": "45",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L200,140 L200,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"35\" y1=\"140\" x2=\"155\" y2=\"102\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"200\" y1=\"45\" x2=\"155\" y2=\"102\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M190,140 L190,130 L200,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"40\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"205\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"158\" y=\"102\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Определите острый угол между биссектрисами острых углов прямоугольного треугольника.",
                    "answer": "45",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L200,140 L200,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"35\" y1=\"140\" x2=\"155\" y2=\"102\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"200\" y1=\"45\" x2=\"155\" y2=\"102\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M190,140 L190,130 L200,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"40\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"205\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"158\" y=\"102\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Найдите величину меньшего угла между биссектрисами острых углов прямоугольного треугольника.",
                    "answer": "45",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L200,140 L200,45 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"35\" y1=\"140\" x2=\"155\" y2=\"102\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"200\" y1=\"45\" x2=\"155\" y2=\"102\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M190,140 L190,130 L200,130\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"40\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"205\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"158\" y=\"102\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                }
            ]
        },
        {
            "desc": "Равнобедренный треугольник: площадь по сторонам",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "Боковая сторона равнобедренного треугольника равна $5$, а основание равно $6$. Найдите площадь этого треугольника.",
            "theory_sol": "Высота, проведённая к основанию, является медианой, поэтому половина основания равна $3$.<br><br>По теореме Пифагора высота равна $\\sqrt{5^2-3^2}=4$.<br><br>Тогда $S=\\frac12\\cdot 6\\cdot 4=12$.<br><br><b>Ответ:</b> 12",
            "tasks": [
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $13$, а основание равно $10$. Найдите площадь треугольника.",
                    "answer": "60",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $10$, а основание равно $12$. Найдите площадь треугольника.",
                    "answer": "48",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $17$, а основание равно $16$. Найдите площадь треугольника.",
                    "answer": "120",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $5$, а основание равно $6$. Найдите площадь треугольника.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $25$, а основание равно $14$. Найдите площадь треугольника.",
                    "answer": "168",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Равнобедренный треугольник: площадь по боковым сторонам",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "Боковая сторона равнобедренного треугольника равна $10$, а угол при вершине, противолежащей основанию, равен $30^{\\circ}$. Найдите площадь этого треугольника.",
            "theory_sol": "Площадь по двум сторонам и углу между ними: $S=\\frac12 ab\\sin\\gamma$.<br><br>В данном случае $a=b=10$, $\\gamma=30^{\\circ}$, поэтому $S=\\frac12\\cdot 10\\cdot 10\\cdot \\frac12=25$.<br><br><b>Ответ:</b> 25",
            "tasks": [
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $8$, а угол при вершине, противолежащей основанию, равен $30^{\\circ}$. Найдите площадь треугольника.",
                    "answer": "16",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $10$, а угол при вершине, противолежащей основанию, равен $30^{\\circ}$. Найдите площадь треугольника.",
                    "answer": "25",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $12$, а угол при вершине, противолежащей основанию, равен $90^{\\circ}$. Найдите площадь треугольника.",
                    "answer": "72",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $20$, а угол при вершине, противолежащей основанию, равен $150^{\\circ}$. Найдите площадь треугольника.",
                    "answer": "100",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Боковая сторона равнобедренного треугольника равна $6$, а угол при вершине, противолежащей основанию, равен $150^{\\circ}$. Найдите площадь треугольника.",
                    "answer": "9",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Правильный треугольник: сторона и высота",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "Правильный треугольник: высота равна $2\\sqrt3$. Найдите сторону этого треугольника.",
            "theory_sol": "В правильном треугольнике высота равна $h=\\frac{a\\sqrt3}{2}$.<br><br>Поэтому $a=\\frac{2h}{\\sqrt3}=\\frac{2\\cdot 2\\sqrt3}{\\sqrt3}=4$.<br><br><b>Ответ:</b> 4",
            "tasks": [
                {
                    "text": "Высота правильного треугольника равна $2\\sqrt3$. Найдите сторону этого треугольника.",
                    "answer": "4",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Сторона правильного треугольника равна $\\sqrt3$. Найдите радиус окружности, описанной около этого треугольника.",
                    "answer": "1",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Радиус окружности, вписанной в правильный треугольник, равен $6$. Найдите высоту этого треугольника.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Радиус окружности, вписанной в правильный треугольник, равен $4$. Найдите высоту этого треугольника.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Высота правильного треугольника равна $9\\sqrt3$. Найдите сторону этого треугольника.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L130,40 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"135\" stroke=\"black\" stroke-width=\"1.7\"/><path d=\"M130,126 L139,126 L139,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"80.3\" y1=\"83\" x2=\"89.7\" y2=\"92\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"170.3\" y1=\"92\" x2=\"179.7\" y2=\"83\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"30\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"134\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Вписанная окружность: площадь треугольника",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "Периметр треугольника равен $12$, а радиус вписанной окружности равен $1$. Найдите площадь этого треугольника.",
            "theory_sol": "Площадь треугольника равна произведению радиуса вписанной окружности на полупериметр: $S=rp$.<br><br>Здесь полупериметр $p=\\frac{12}{2}=6$, поэтому $S=1\\cdot 6=6$.<br><br><b>Ответ:</b> 6",
            "tasks": [
                {
                    "text": "Периметр треугольника равен $12$, а радиус вписанной окружности равен $1$. Найдите площадь треугольника.",
                    "answer": "6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Периметр треугольника равен $36$, а радиус вписанной окружности равен $2$. Найдите площадь треугольника.",
                    "answer": "36",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Периметр треугольника равен $18$, а радиус вписанной окружности равен $3$. Найдите площадь треугольника.",
                    "answer": "27",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Периметр треугольника равен $20$, а радиус вписанной окружности равен $1{,}5$. Найдите площадь треугольника.",
                    "answer": "15",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Периметр треугольника равен $50$, а радиус вписанной окружности равен $2{,}4$. Найдите площадь треугольника.",
                    "answer": "60",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Вписанная окружность: периметр треугольника",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "Площадь треугольника равна $24$, а радиус вписанной окружности равен $2$. Найдите периметр этого треугольника.",
            "theory_sol": "Используем формулу $S=rp$, где $p$ — полупериметр.<br><br>$p=\\frac{S}{r}=\\frac{24}{2}=12$, значит периметр равен $2p=24$.<br><br><b>Ответ:</b> 24",
            "tasks": [
                {
                    "text": "Площадь треугольника равна $24$, а радиус вписанной окружности равен $2$. Найдите периметр треугольника.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Площадь треугольника равна $54$, а радиус вписанной окружности равен $3$. Найдите периметр треугольника.",
                    "answer": "36",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Площадь треугольника равна $25$, а радиус вписанной окружности равен $5$. Найдите периметр треугольника.",
                    "answer": "10",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Площадь треугольника равна $28$, а радиус вписанной окружности равен $2$. Найдите периметр треугольника.",
                    "answer": "28",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Площадь треугольника равна $45$, а радиус вписанной окружности равен $1{,}8$. Найдите периметр треугольника.",
                    "answer": "50",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Параллелограмм: сравнение с прямоугольником",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M15,120 L75,120 L75,70 L15,70 L15,120\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M120,125 L190,125 L225,70 L155,70 L120,125\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"108\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"150\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>",
            "theory_task": "Параллелограмм и прямоугольник имеют одинаковые стороны. Найдите острый угол параллелограмма, если его площадь равна половине площади прямоугольника. Ответ дайте в градусах.",
            "theory_sol": "Если стороны фигур одинаковы и равны $a$ и $b$, то площадь прямоугольника равна $ab$, а площадь параллелограмма равна $ab\\sin\\alpha$.<br><br>По условию $ab\\sin\\alpha=\\frac12ab$, значит $\\sin\\alpha=\\frac12$.<br><br>Острый угол параллелограмма равен $30^{\\circ}$.<br><br><b>Ответ:</b> 30",
            "tasks": [
                {
                    "text": "Параллелограмм и прямоугольник имеют одинаковые стороны. Найдите острый угол параллелограмма, если его площадь равна половине площади прямоугольника.",
                    "answer": "30",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M15,120 L75,120 L75,70 L15,70 L15,120\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M120,125 L190,125 L225,70 L155,70 L120,125\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"108\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"150\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Параллелограмм и прямоугольник имеют одинаковые стороны. Найдите острый угол параллелограмма, если его площадь равна $\\frac{\\sqrt2}{2}$ площади прямоугольника.",
                    "answer": "45",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M15,120 L75,120 L75,70 L15,70 L15,120\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M120,125 L190,125 L225,70 L155,70 L120,125\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"108\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"150\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Параллелограмм и прямоугольник имеют одинаковые стороны. Найдите острый угол параллелограмма, если его площадь равна $\\frac{\\sqrt3}{2}$ площади прямоугольника.",
                    "answer": "60",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M15,120 L75,120 L75,70 L15,70 L15,120\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M120,125 L190,125 L225,70 L155,70 L120,125\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"108\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"150\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Параллелограмм и прямоугольник имеют одинаковые стороны. Найдите острый угол параллелограмма, если его площадь равна $0{,}5$ площади прямоугольника.",
                    "answer": "30",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M15,120 L75,120 L75,70 L15,70 L15,120\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M120,125 L190,125 L225,70 L155,70 L120,125\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"108\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"150\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Параллелограмм и прямоугольник имеют одинаковые стороны. Найдите острый угол параллелограмма, если его площадь равна $\\frac{\\sqrt3}{2}$ площади прямоугольника.",
                    "answer": "60",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M15,120 L75,120 L75,70 L15,70 L15,120\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M120,125 L190,125 L225,70 L155,70 L120,125\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"108\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"140\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"230\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"150\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                }
            ]
        },
        {
            "desc": "Параллелограмм: сторона по периметру и отношению",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L155,135 L210,70 L95,70 L40,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"160\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"215\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"90\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>",
            "theory_task": "Периметр параллелограмма равен $88$, а его стороны относятся как $4:7$. Найдите большую сторону параллелограмма.",
            "theory_sol": "Пусть стороны равны $4x$ и $7x$. Тогда $2(4x+7x)=88$.<br><br>$22x=88$, откуда $x=4$. Большая сторона равна $7x=28$.<br><br><b>Ответ:</b> 28",
            "tasks": [
                {
                    "text": "Периметр параллелограмма равен $88$, а его стороны относятся как $4:7$. Найдите большую сторону.",
                    "answer": "28",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L155,135 L210,70 L95,70 L40,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"160\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"215\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"90\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Периметр параллелограмма равен $70$, а его стороны относятся как $3:4$. Найдите большую сторону.",
                    "answer": "20",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L155,135 L210,70 L95,70 L40,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"160\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"215\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"90\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Периметр параллелограмма равен $46$. Одна сторона в $3$ раза больше другой. Найдите меньшую сторону.",
                    "answer": "5,75",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L155,135 L210,70 L95,70 L40,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"160\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"215\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"90\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Периметр параллелограмма равен $60$, а его стороны относятся как $2:3$. Найдите большую сторону.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L155,135 L210,70 L95,70 L40,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"160\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"215\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"90\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Периметр параллелограмма равен $90$, а его стороны относятся как $1:4$. Найдите большую сторону.",
                    "answer": "36",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L155,135 L210,70 L95,70 L40,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"27\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"160\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"215\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"90\" y=\"67\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                }
            ]
        },
        {
            "desc": "Ромб: площадь по стороне и углу",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M50,135 L135,135 L190,80 L105,80 L50,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"37\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"140\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"195\" y=\"78\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"100\" y=\"75\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>",
            "theory_task": "Найдите площадь ромба, если его сторона равна $6$, а острый угол равен $30^{\\circ}$.",
            "theory_sol": "Площадь ромба через сторону и угол: $S=a^2\\sin\\alpha$.<br><br>$S=6^2\\cdot \\sin30^{\\circ}=36\\cdot \\frac12=18$.<br><br><b>Ответ:</b> 18",
            "tasks": [
                {
                    "text": "Найдите площадь ромба, если его сторона равна $2$, а острый угол равен $30^{\\circ}$.",
                    "answer": "2",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M50,135 L135,135 L190,80 L105,80 L50,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"37\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"140\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"195\" y=\"78\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"100\" y=\"75\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Найдите площадь ромба, если его сторона равна $6$, а острый угол равен $30^{\\circ}$.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M50,135 L135,135 L190,80 L105,80 L50,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"37\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"140\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"195\" y=\"78\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"100\" y=\"75\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Найдите площадь ромба, если его сторона равна $8$, а угол равен $90^{\\circ}$.",
                    "answer": "64",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M50,135 L135,135 L190,80 L105,80 L50,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"37\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"140\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"195\" y=\"78\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"100\" y=\"75\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Найдите площадь ромба, если его сторона равна $10$, а острый угол равен $30^{\\circ}$.",
                    "answer": "50",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M50,135 L135,135 L190,80 L105,80 L50,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"37\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"140\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"195\" y=\"78\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"100\" y=\"75\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Найдите площадь ромба, если его сторона равна $12$, а острый угол равен $30^{\\circ}$.",
                    "answer": "72",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M50,135 L135,135 L190,80 L105,80 L50,135\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"37\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"140\" y=\"150\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"195\" y=\"78\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"100\" y=\"75\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                }
            ]
        },
        {
            "desc": "Ромб: площадь по диагоналям",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>",
            "theory_task": "Найдите площадь ромба, если его диагонали равны $4$ и $12$.",
            "theory_sol": "Площадь ромба равна половине произведения диагоналей: $S=\\frac12 d_1d_2$.<br><br>$S=\\frac12\\cdot 4\\cdot 12=24$.<br><br><b>Ответ:</b> 24",
            "tasks": [
                {
                    "text": "Найдите площадь ромба, если его диагонали равны $4$ и $12$.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Найдите площадь ромба, если его диагонали равны $6$ и $10$.",
                    "answer": "30",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Найдите площадь ромба, если его диагонали равны $8$ и $15$.",
                    "answer": "60",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Найдите площадь ромба, если его диагонали равны $14$ и $6$.",
                    "answer": "42",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Найдите площадь ромба, если его диагонали равны $20$ и $5$.",
                    "answer": "50",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                }
            ]
        },
        {
            "desc": "Ромб: диагональ по площади",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>",
            "theory_task": "Площадь ромба равна $18$. Одна из его диагоналей равна $12$. Найдите другую диагональ.",
            "theory_sol": "По формуле площади ромба $S=\\frac12d_1d_2$.<br><br>$18=\\frac12\\cdot 12\\cdot d_2$, значит $18=6d_2$, откуда $d_2=3$.<br><br><b>Ответ:</b> 3",
            "tasks": [
                {
                    "text": "Площадь ромба равна $18$. Одна из его диагоналей равна $12$. Найдите другую диагональ.",
                    "answer": "3",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Площадь ромба равна $54$. Одна из его диагоналей равна $36$. Найдите другую диагональ.",
                    "answer": "3",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Площадь ромба равна $40$. Одна из его диагоналей равна $10$. Найдите другую диагональ.",
                    "answer": "8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Площадь ромба равна $84$. Одна из его диагоналей равна $12$. Найдите другую диагональ.",
                    "answer": "14",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Площадь ромба равна $96$. Одна из его диагоналей равна $16$. Найдите другую диагональ.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                }
            ]
        },
        {
            "desc": "Ромб: высота по диагоналям",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>",
            "theory_task": "Диагонали ромба относятся как $3:4$, а периметр ромба равен $200$. Найдите высоту ромба.",
            "theory_sol": "Пусть диагонали равны $3x$ и $4x$. Сторона ромба равна гипотенузе прямоугольного треугольника с катетами $\\frac{3x}{2}$ и $\\frac{4x}{2}$, то есть $\\frac{5x}{2}$.<br><br>Тогда периметр $4\\cdot \\frac{5x}{2}=10x=200$, откуда $x=20$.<br><br>Диагонали равны $60$ и $80$, площадь $S=\\frac12\\cdot 60\\cdot 80=2400$. Сторона равна $50$, поэтому высота $h=\\frac{S}{a}=\\frac{2400}{50}=48$.<br><br><b>Ответ:</b> 48",
            "tasks": [
                {
                    "text": "Диагонали ромба относятся как $3:4$, а периметр равен $100$. Найдите высоту ромба.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Диагонали ромба относятся как $3:4$, а периметр равен $200$. Найдите высоту ромба.",
                    "answer": "48",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Диагонали ромба относятся как $3:4$, а периметр равен $50$. Найдите высоту ромба.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Диагонали ромба относятся как $3:4$, а периметр равен $75$. Найдите высоту ромба.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Диагонали ромба относятся как $3:4$, а периметр равен $125$. Найдите высоту ромба.",
                    "answer": "30",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M130,145 L190,90 L130,35 L70,90 L130,145\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"35\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"190\" y1=\"90\" x2=\"70\" y2=\"90\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"127\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"195\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"57\" y=\"90\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                }
            ]
        },
        {
            "desc": "Трапеция: средняя линия по площади и высоте",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,65 L75,65 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"55\" y1=\"102.5\" x2=\"205\" y2=\"102.5\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"75\" y1=\"65\" x2=\"75\" y2=\"140\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M75,130 L85,130 L85,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"190\" y=\"60\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"60\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>",
            "theory_task": "Высота трапеции равна $10$, площадь равна $150$. Найдите среднюю линию трапеции.",
            "theory_sol": "Площадь трапеции равна произведению средней линии на высоту: $S=mh$.<br><br>$m=\\frac{S}{h}=\\frac{150}{10}=15$.<br><br><b>Ответ:</b> 15",
            "tasks": [
                {
                    "text": "Высота трапеции равна $10$, площадь равна $150$. Найдите среднюю линию трапеции.",
                    "answer": "15",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,65 L75,65 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"55\" y1=\"102.5\" x2=\"205\" y2=\"102.5\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"75\" y1=\"65\" x2=\"75\" y2=\"140\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M75,130 L85,130 L85,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"190\" y=\"60\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"60\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Средняя линия трапеции равна $12$, площадь равна $96$. Найдите высоту трапеции.",
                    "answer": "8",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,65 L75,65 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"55\" y1=\"102.5\" x2=\"205\" y2=\"102.5\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"75\" y1=\"65\" x2=\"75\" y2=\"140\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M75,130 L85,130 L85,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"190\" y=\"60\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"60\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Высота трапеции равна $7$, площадь равна $168$. Найдите среднюю линию трапеции.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,65 L75,65 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"55\" y1=\"102.5\" x2=\"205\" y2=\"102.5\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"75\" y1=\"65\" x2=\"75\" y2=\"140\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M75,130 L85,130 L85,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"190\" y=\"60\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"60\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Средняя линия трапеции равна $20$, площадь равна $140$. Найдите высоту трапеции.",
                    "answer": "7",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,65 L75,65 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"55\" y1=\"102.5\" x2=\"205\" y2=\"102.5\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"75\" y1=\"65\" x2=\"75\" y2=\"140\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M75,130 L85,130 L85,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"190\" y=\"60\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"60\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                },
                {
                    "text": "Высота трапеции равна $12$, площадь равна $216$. Найдите среднюю линию трапеции.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,65 L75,65 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"55\" y1=\"102.5\" x2=\"205\" y2=\"102.5\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"75\" y1=\"65\" x2=\"75\" y2=\"140\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M75,130 L85,130 L85,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"190\" y=\"60\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"60\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text></svg>"
                }
            ]
        },
        {
            "desc": "Трапеция: основание по площади и высоте",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,70 L75,70 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"190\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>",
            "theory_task": "Основание трапеции равно $13$, высота равна $5$, а площадь равна $50$. Найдите второе основание трапеции.",
            "theory_sol": "Пусть второе основание равно $x$. Тогда $50=\\frac{13+x}{2}\\cdot 5$.<br><br>$13+x=20$, откуда $x=7$.<br><br><b>Ответ:</b> 7",
            "tasks": [
                {
                    "text": "Основание трапеции равно $13$, высота равна $5$, а площадь равна $50$. Найдите второе основание.",
                    "answer": "7",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,70 L75,70 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"190\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Основание трапеции равно $8$, высота равна $10$, а площадь равна $90$. Найдите второе основание.",
                    "answer": "10",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,70 L75,70 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"190\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Основание трапеции равно $18$, высота равна $4$, а площадь равна $48$. Найдите второе основание.",
                    "answer": "6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,70 L75,70 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"190\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Основание трапеции равно $12$, высота равна $6$, а площадь равна $72$. Найдите второе основание.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,70 L75,70 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"190\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Основание трапеции равно $25$, высота равна $8$, а площадь равна $180$. Найдите второе основание.",
                    "answer": "20",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,70 L75,70 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"190\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                }
            ]
        },
        {
            "desc": "Равнобедренная трапеция: площадь по основаниям и боковой стороне",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "Основания равнобедренной трапеции равны $14$ и $26$, а боковая сторона равна $10$. Найдите площадь трапеции.",
            "theory_sol": "Половина разности оснований равна $\\frac{26-14}{2}=6$.<br><br>Высота трапеции: $h=\\sqrt{10^2-6^2}=8$.<br><br>Площадь: $S=\\frac{14+26}{2}\\cdot 8=160$.<br><br><b>Ответ:</b> 160",
            "tasks": [
                {
                    "text": "Основания равнобедренной трапеции равны $14$ и $26$, боковая сторона равна $10$. Найдите площадь трапеции.",
                    "answer": "160",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $7$ и $13$, боковая сторона равна $5$. Найдите площадь трапеции.",
                    "answer": "40",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $18$ и $6$, боковая сторона равна $10$. Найдите площадь трапеции.",
                    "answer": "96",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $10$ и $26$, боковая сторона равна $10$. Найдите площадь трапеции.",
                    "answer": "108",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $8$ и $20$, боковая сторона равна $10$. Найдите площадь трапеции.",
                    "answer": "112",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Равнобедренная трапеция: периметр по площади",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>",
            "theory_task": "Основания равнобедренной трапеции равны $6$ и $12$, а её площадь равна $36$. Найдите периметр трапеции.",
            "theory_sol": "Средняя линия равна $\\frac{6+12}{2}=9$. Высота $h=\\frac{36}{9}=4$.<br><br>Половина разности оснований равна $\\frac{12-6}{2}=3$. Боковая сторона равна $\\sqrt{3^2+4^2}=5$.<br><br>Периметр равен $6+12+5+5=28$.<br><br><b>Ответ:</b> 28",
            "tasks": [
                {
                    "text": "Основания равнобедренной трапеции равны $6$ и $12$, а площадь равна $36$. Найдите периметр трапеции.",
                    "answer": "28",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $7$ и $13$, а площадь равна $40$. Найдите периметр трапеции.",
                    "answer": "30",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $10$ и $18$, а площадь равна $42$. Найдите периметр трапеции.",
                    "answer": "38",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $14$ и $26$, а площадь равна $160$. Найдите периметр трапеции.",
                    "answer": "60",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                },
                {
                    "text": "Основания равнобедренной трапеции равны $8$ и $18$, а площадь равна $156$. Найдите периметр трапеции.",
                    "answer": "52",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M40,135 L220,135 L180,60 L80,60 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"135\" stroke=\"black\" stroke-width=\"1.4\" stroke-dasharray=\"5,4\"/><path d=\"M80,135 L88,135 L88,127\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"58\" y1=\"101\" x2=\"66\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><line x1=\"194\" y1=\"101\" x2=\"202\" y2=\"93\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"28\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"225\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"185\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"68\" y=\"56\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"68\" y=\"151\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">H</text></svg>"
                }
            ]
        },
        {
            "desc": "Трапеция: площадь по боковой стороне и углу",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,70 L75,70 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"190\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>",
            "theory_task": "Основания трапеции равны $18$ и $6$, боковая сторона равна $7$, один из углов при основании равен $150^{\\circ}$. Найдите площадь трапеции.",
            "theory_sol": "Высота равна проекции боковой стороны на направление, перпендикулярное основанию: $h=7\\sin150^{\\circ}=7\\cdot \\frac12=3{,}5$.<br><br>Средняя линия равна $\\frac{18+6}{2}=12$. Площадь $S=mh=12\\cdot 3{,}5=42$.<br><br><b>Ответ:</b> 42",
            "tasks": [
                {
                    "text": "Основания трапеции равны $18$ и $6$, боковая сторона равна $7$, один из углов при основании равен $150^{\\circ}$. Найдите площадь трапеции.",
                    "answer": "42",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,70 L75,70 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"190\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Основания трапеции равны $27$ и $9$, боковая сторона равна $8$, один из углов при основании равен $30^{\\circ}$. Найдите площадь трапеции.",
                    "answer": "72",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,70 L75,70 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"190\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Основания трапеции равны $15$ и $9$, боковая сторона равна $\\sqrt2$, один из углов при основании равен $45^{\\circ}$. Найдите площадь трапеции.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,70 L75,70 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"190\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Основания трапеции равны $20$ и $8$, боковая сторона равна $10$, один из углов при основании равен $150^{\\circ}$. Найдите площадь трапеции.",
                    "answer": "70",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,70 L75,70 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"190\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Основания трапеции равны $14$ и $6$, боковая сторона равна $4$, один из углов при основании равен $30^{\\circ}$. Найдите площадь трапеции.",
                    "answer": "20",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M35,140 L225,140 L185,70 L75,70 L35,140\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><text x=\"22\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"230\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"190\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"62\" y=\"65\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                }
            ]
        },
        {
            "desc": "Описанная трапеция: средняя линия",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M55,140 L205,140 L155,53.4 L105,53.4 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"96.7\" r=\"43.3\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"42\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"160\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"92\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>",
            "theory_task": "Около окружности описана трапеция, периметр которой равен $40$. Найдите длину её средней линии.",
            "theory_sol": "В описанном четырёхугольнике суммы противоположных сторон равны. Для трапеции это даёт: сумма оснований равна сумме боковых сторон.<br><br>Поэтому периметр равен удвоенной сумме оснований: $P=2(a+b)$.<br><br>Средняя линия $m=\\frac{a+b}{2}=\\frac{P}{4}=\\frac{40}{4}=10$.<br><br><b>Ответ:</b> 10",
            "tasks": [
                {
                    "text": "Около окружности описана трапеция, периметр которой равен $40$. Найдите длину её средней линии.",
                    "answer": "10",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M55,140 L205,140 L155,53.4 L105,53.4 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"96.7\" r=\"43.3\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"42\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"160\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"92\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Около окружности описана трапеция, периметр которой равен $22$. Найдите длину её средней линии.",
                    "answer": "5,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M55,140 L205,140 L155,53.4 L105,53.4 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"96.7\" r=\"43.3\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"42\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"160\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"92\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Около окружности описана трапеция, периметр которой равен $60$. Найдите длину её средней линии.",
                    "answer": "15",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M55,140 L205,140 L155,53.4 L105,53.4 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"96.7\" r=\"43.3\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"42\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"160\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"92\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Около окружности описана трапеция, периметр которой равен $48$. Найдите длину её средней линии.",
                    "answer": "12",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M55,140 L205,140 L155,53.4 L105,53.4 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"96.7\" r=\"43.3\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"42\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"160\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"92\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                },
                {
                    "text": "Около окружности описана трапеция, периметр которой равен $34$. Найдите длину её средней линии.",
                    "answer": "8,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M55,140 L205,140 L155,53.4 L105,53.4 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"96.7\" r=\"43.3\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"42\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"155\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"160\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"92\" y=\"50\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text></svg>"
                }
            ]
        },
        {
            "desc": "Описанный многоугольник: периметр через $S$ и $r$",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M57.9,123.6 L135.4,151.8 L199,115.1 L170.6,37.1 L91.9,30.2 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"90\" r=\"56.2\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"39.9\" y=\"133.6\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"131.4\" y=\"166\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"207\" y=\"120.1\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"178.6\" y=\"32.1\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"73.9\" y=\"25.2\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">E</text><text x=\"136\" y=\"106\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>",
            "theory_task": "Около окружности описан многоугольник, площадь которого равна $33$, а радиус окружности равен $3$. Найдите периметр многоугольника.",
            "theory_sol": "Для многоугольника, описанного около окружности, площадь равна $S=rp$, где $p$ — полупериметр.<br><br>$p=\\frac{S}{r}=\\frac{33}{3}=11$, значит периметр равен $22$.<br><br><b>Ответ:</b> 22",
            "tasks": [
                {
                    "text": "Около окружности описан многоугольник, площадь которого равна $33$, а радиус окружности равен $3$. Найдите периметр многоугольника.",
                    "answer": "22",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M57.9,123.6 L135.4,151.8 L199,115.1 L170.6,37.1 L91.9,30.2 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"90\" r=\"56.2\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"39.9\" y=\"133.6\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"131.4\" y=\"166\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"207\" y=\"120.1\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"178.6\" y=\"32.1\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"73.9\" y=\"25.2\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">E</text><text x=\"136\" y=\"106\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Около окружности описан многоугольник, площадь которого равна $5$, а периметр равен $10$. Найдите радиус окружности.",
                    "answer": "1",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M57.9,123.6 L135.4,151.8 L199,115.1 L170.6,37.1 L91.9,30.2 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"90\" r=\"56.2\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"39.9\" y=\"133.6\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"131.4\" y=\"166\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"207\" y=\"120.1\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"178.6\" y=\"32.1\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"73.9\" y=\"25.2\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">E</text><text x=\"136\" y=\"106\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Около окружности описан многоугольник, радиус окружности равен $3$, а периметр равен $20$. Найдите площадь многоугольника.",
                    "answer": "30",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M57.9,123.6 L135.4,151.8 L199,115.1 L170.6,37.1 L91.9,30.2 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"90\" r=\"56.2\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"39.9\" y=\"133.6\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"131.4\" y=\"166\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"207\" y=\"120.1\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"178.6\" y=\"32.1\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"73.9\" y=\"25.2\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">E</text><text x=\"136\" y=\"106\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Около окружности описан многоугольник, площадь которого равна $48$, а радиус окружности равен $4$. Найдите периметр многоугольника.",
                    "answer": "24",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M57.9,123.6 L135.4,151.8 L199,115.1 L170.6,37.1 L91.9,30.2 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"90\" r=\"56.2\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"39.9\" y=\"133.6\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"131.4\" y=\"166\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"207\" y=\"120.1\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"178.6\" y=\"32.1\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"73.9\" y=\"25.2\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">E</text><text x=\"136\" y=\"106\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Около окружности описан многоугольник, площадь которого равна $18$, а периметр равен $12$. Найдите радиус окружности.",
                    "answer": "3",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M57.9,123.6 L135.4,151.8 L199,115.1 L170.6,37.1 L91.9,30.2 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"90\" r=\"56.2\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"39.9\" y=\"133.6\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"131.4\" y=\"166\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"207\" y=\"120.1\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"178.6\" y=\"32.1\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">D</text><text x=\"73.9\" y=\"25.2\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">E</text><text x=\"136\" y=\"106\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                }
            ]
        },
        {
            "desc": "Правильный треугольник: радиус описанной окружности",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"85\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><path d=\"M78,115 L182,115 L130,25 L78,115\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><circle cx=\"130\" cy=\"85\" r=\"2\" fill=\"black\"/><text x=\"65\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"187\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"135\" y=\"88\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>",
            "theory_task": "Сторона правильного треугольника равна $\\sqrt3$. Найдите радиус окружности, описанной около этого треугольника.",
            "theory_sol": "Для правильного треугольника $R=\\frac{a}{\\sqrt3}$.<br><br>$R=\\frac{\\sqrt3}{\\sqrt3}=1$.<br><br><b>Ответ:</b> 1",
            "tasks": [
                {
                    "text": "Сторона правильного треугольника равна $\\sqrt3$. Найдите радиус окружности, описанной около этого треугольника.",
                    "answer": "1",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"85\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><path d=\"M78,115 L182,115 L130,25 L78,115\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><circle cx=\"130\" cy=\"85\" r=\"2\" fill=\"black\"/><text x=\"65\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"187\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"135\" y=\"88\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Сторона правильного треугольника равна $3\\sqrt3$. Найдите радиус окружности, описанной около этого треугольника.",
                    "answer": "3",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"85\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><path d=\"M78,115 L182,115 L130,25 L78,115\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><circle cx=\"130\" cy=\"85\" r=\"2\" fill=\"black\"/><text x=\"65\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"187\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"135\" y=\"88\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Радиус окружности, описанной около правильного треугольника, равен $2\\sqrt3$. Найдите сторону этого треугольника.",
                    "answer": "6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"85\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><path d=\"M78,115 L182,115 L130,25 L78,115\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><circle cx=\"130\" cy=\"85\" r=\"2\" fill=\"black\"/><text x=\"65\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"187\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"135\" y=\"88\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Радиус окружности, описанной около правильного треугольника, равен $3\\sqrt3$. Найдите сторону этого треугольника.",
                    "answer": "9",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"85\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><path d=\"M78,115 L182,115 L130,25 L78,115\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><circle cx=\"130\" cy=\"85\" r=\"2\" fill=\"black\"/><text x=\"65\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"187\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"135\" y=\"88\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Сторона правильного треугольника равна $5\\sqrt3$. Найдите радиус окружности, описанной около этого треугольника.",
                    "answer": "5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"85\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><path d=\"M78,115 L182,115 L130,25 L78,115\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><circle cx=\"130\" cy=\"85\" r=\"2\" fill=\"black\"/><text x=\"65\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"187\" y=\"130\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"135\" y=\"88\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                }
            ]
        },
        {
            "desc": "Правильный треугольник: высота через вписанную окружность",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"104.6\" r=\"2\" fill=\"black\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"136\" y=\"110\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>",
            "theory_task": "Радиус окружности, вписанной в правильный треугольник, равен $6$. Найдите высоту этого треугольника.",
            "theory_sol": "В правильном треугольнике радиус вписанной окружности равен трети высоты: $r=\\frac{h}{3}$.<br><br>Значит $h=3r=18$.<br><br><b>Ответ:</b> 18",
            "tasks": [
                {
                    "text": "Радиус окружности, вписанной в правильный треугольник, равен $6$. Найдите высоту этого треугольника.",
                    "answer": "18",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"104.6\" r=\"2\" fill=\"black\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"136\" y=\"110\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Высота правильного треугольника равна $3$. Найдите радиус вписанной окружности.",
                    "answer": "1",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"104.6\" r=\"2\" fill=\"black\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"136\" y=\"110\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Сторона правильного треугольника равна $2\\sqrt3$. Найдите радиус вписанной окружности.",
                    "answer": "1",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"104.6\" r=\"2\" fill=\"black\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"136\" y=\"110\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Радиус окружности, вписанной в правильный треугольник, равен $2{,}5$. Найдите высоту этого треугольника.",
                    "answer": "7,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"104.6\" r=\"2\" fill=\"black\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"136\" y=\"110\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                },
                {
                    "text": "Высота правильного треугольника равна $12$. Найдите радиус вписанной окружности.",
                    "answer": "4",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><path d=\"M60,145 L200,145 L130,23.8 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\"/><circle cx=\"130\" cy=\"104.6\" r=\"40.4\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"104.6\" r=\"2\" fill=\"black\"/><text x=\"48\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"205\" y=\"160\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"20\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text><text x=\"136\" y=\"110\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text></svg>"
                }
            ]
        },
        {
            "desc": "Прямоугольный треугольник: радиус описанной окружности",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"88\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><path d=\"M72,88 L188,88 L130,30 L72,88\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M124.3,35.7 L130,41.3 L135.7,35.7\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"59\" y=\"103\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"193\" y=\"103\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "Гипотенуза прямоугольного треугольника равна $12$. Найдите радиус окружности, описанной около этого треугольника.",
            "theory_sol": "В прямоугольном треугольнике центр описанной окружности — середина гипотенузы, поэтому $R=\\frac{c}{2}$.<br><br>$R=\\frac{12}{2}=6$.<br><br><b>Ответ:</b> 6",
            "tasks": [
                {
                    "text": "Гипотенуза прямоугольного треугольника равна $12$. Найдите радиус окружности, описанной около этого треугольника.",
                    "answer": "6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"88\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><path d=\"M72,88 L188,88 L130,30 L72,88\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M124.3,35.7 L130,41.3 L135.7,35.7\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"59\" y=\"103\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"193\" y=\"103\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Радиус окружности, описанной около прямоугольного треугольника, равен $3$. Найдите гипотенузу треугольника.",
                    "answer": "6",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"88\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><path d=\"M72,88 L188,88 L130,30 L72,88\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M124.3,35.7 L130,41.3 L135.7,35.7\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"59\" y=\"103\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"193\" y=\"103\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Катеты прямоугольного треугольника равны $6$ и $8$. Найдите радиус окружности, описанной около этого треугольника.",
                    "answer": "5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"88\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><path d=\"M72,88 L188,88 L130,30 L72,88\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M124.3,35.7 L130,41.3 L135.7,35.7\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"59\" y=\"103\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"193\" y=\"103\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Гипотенуза прямоугольного треугольника равна $25$. Найдите радиус окружности, описанной около этого треугольника.",
                    "answer": "12,5",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"88\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><path d=\"M72,88 L188,88 L130,30 L72,88\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M124.3,35.7 L130,41.3 L135.7,35.7\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"59\" y=\"103\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"193\" y=\"103\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Катеты прямоугольного треугольника равны $10$ и $24$. Найдите радиус окружности, описанной около этого треугольника.",
                    "answer": "13",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"130\" cy=\"88\" r=\"58\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><path d=\"M72,88 L188,88 L130,30 L72,88\" fill=\"none\" stroke=\"black\" stroke-width=\"1.7\" /><path d=\"M124.3,35.7 L130,41.3 L135.7,35.7\" fill=\"none\" stroke=\"black\" stroke-width=\"1.4\"/><text x=\"59\" y=\"103\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"193\" y=\"103\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"127\" y=\"25\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        },
        {
            "desc": "Окружность: угол между касательной и хордой",
            "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"100\" cy=\"90\" r=\"50\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><line x1=\"100\" y1=\"40\" x2=\"145\" y2=\"112\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"20\" y1=\"40\" x2=\"205\" y2=\"40\" stroke=\"black\" stroke-width=\"1.7\" /><circle cx=\"100\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"105\" y=\"94\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text><text x=\"92\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"149\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"44\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>",
            "theory_task": "Хорда $AB$ стягивает дугу окружности в $92^{\\circ}$. Найдите угол между этой хордой и касательной к окружности, проведённой через точку $B$. Ответ дайте в градусах.",
            "theory_sol": "Угол между касательной и хордой равен половине градусной меры дуги, заключённой между ними.<br><br>Искомый угол равен $\\frac{92^{\\circ}}{2}=46^{\\circ}$.<br><br><b>Ответ:</b> 46",
            "tasks": [
                {
                    "text": "Хорда $AB$ стягивает дугу окружности в $92^{\\circ}$. Найдите угол между этой хордой и касательной к окружности, проведённой через точку $B$.",
                    "answer": "46",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"100\" cy=\"90\" r=\"50\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><line x1=\"100\" y1=\"40\" x2=\"145\" y2=\"112\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"20\" y1=\"40\" x2=\"205\" y2=\"40\" stroke=\"black\" stroke-width=\"1.7\" /><circle cx=\"100\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"105\" y=\"94\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text><text x=\"92\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"149\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"44\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Хорда $AB$ стягивает дугу окружности в $80^{\\circ}$. Найдите угол между этой хордой и касательной к окружности, проведённой через точку $B$.",
                    "answer": "40",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"100\" cy=\"90\" r=\"50\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><line x1=\"100\" y1=\"40\" x2=\"145\" y2=\"112\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"20\" y1=\"40\" x2=\"205\" y2=\"40\" stroke=\"black\" stroke-width=\"1.7\" /><circle cx=\"100\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"105\" y=\"94\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text><text x=\"92\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"149\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"44\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Хорда $AB$ стягивает дугу окружности в $110^{\\circ}$. Найдите угол между этой хордой и касательной к окружности, проведённой через точку $B$.",
                    "answer": "55",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"100\" cy=\"90\" r=\"50\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><line x1=\"100\" y1=\"40\" x2=\"145\" y2=\"112\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"20\" y1=\"40\" x2=\"205\" y2=\"40\" stroke=\"black\" stroke-width=\"1.7\" /><circle cx=\"100\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"105\" y=\"94\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text><text x=\"92\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"149\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"44\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Хорда $AB$ стягивает дугу окружности в $34^{\\circ}$. Найдите угол между этой хордой и касательной к окружности, проведённой через точку $B$.",
                    "answer": "17",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"100\" cy=\"90\" r=\"50\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><line x1=\"100\" y1=\"40\" x2=\"145\" y2=\"112\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"20\" y1=\"40\" x2=\"205\" y2=\"40\" stroke=\"black\" stroke-width=\"1.7\" /><circle cx=\"100\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"105\" y=\"94\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text><text x=\"92\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"149\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"44\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                },
                {
                    "text": "Хорда $AB$ стягивает дугу окружности в $150^{\\circ}$. Найдите угол между этой хордой и касательной к окружности, проведённой через точку $B$.",
                    "answer": "75",
                    "svg_code": "<svg width=\"260\" height=\"170\" viewBox=\"0 0 260 170\" overflow=\"visible\"><circle cx=\"100\" cy=\"90\" r=\"50\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\" /><line x1=\"100\" y1=\"40\" x2=\"145\" y2=\"112\" stroke=\"black\" stroke-width=\"1.7\" /><line x1=\"20\" y1=\"40\" x2=\"205\" y2=\"40\" stroke=\"black\" stroke-width=\"1.7\" /><circle cx=\"100\" cy=\"90\" r=\"2\" fill=\"black\"/><text x=\"105\" y=\"94\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">O</text><text x=\"92\" y=\"35\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">B</text><text x=\"149\" y=\"120\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">A</text><text x=\"210\" y=\"44\" font-family=\"Times New Roman\" font-size=\"16\" font-style=\"italic\">C</text></svg>"
                }
            ]
        }
    ]
};

    window.extraDatabase[1] = task1Extra;
    window.extraDatabase["task1"] = task1Extra;
})();
