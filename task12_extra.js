(function() {
    window.extraDatabase = window.extraDatabase || {};

    const task12Extra = {
    "title": "Дополнительно",
    "source": "Задание 12. Исследование функций",
    "prototypes": [
        {
            "desc": "Корень из квадратного трёхчлена",
            "theory_task": "Найдите точку максимума функции \\(y=\\sqrt{16+8x-x^2}\\).<br><br>",
            "theory_sol": "<ol style=\"margin:7px 0 7px 24px;padding-left:10px\"><li style=\"margin:4px 0\">Функция \\(y=\\sqrt{t}\\) возрастает, поэтому достаточно найти точку максимума подкоренного выражения \\(f(x)=-x^2+8x+16\\).</li><li style=\"margin:4px 0\">Это квадратичная функция, причём \\(a=-1<0\\), поэтому её наибольшее значение достигается в вершине параболы:\n\\[\nx_0=-\\frac{b}{2a}=-\\frac{8}{2\\cdot(-1)}=4.\n\\]</li><li style=\"margin:4px 0\">Следовательно, подкоренное выражение, а вместе с ним и исходная функция, принимает наибольшее значение при \\(x=4\\).</li></ol>\nСледовательно, \\(x=4\\) — точка максимума.<br><br><b>Ответ:</b> \\(4\\)",
            "tasks": [
                {
                    "text": "Найдите точку минимума функции \\(y=\\sqrt{x^2-8x+20}\\).",
                    "answer": "4"
                },
                {
                    "text": "Найдите наименьшее значение функции \\(y=\\sqrt{x^2-10x+34}\\).",
                    "answer": "3"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=\\sqrt{7+6x-x^2}\\).",
                    "answer": "4"
                },
                {
                    "text": "Найдите точку максимума функции \\(y=\\sqrt{20-4x-x^2}\\).",
                    "answer": "-2"
                }
            ]
        },
        {
            "desc": "Логарифм квадратного трёхчлена",
            "theory_task": "Найдите точку максимума функции \\(y=\\log_{2}(10+6x-x^2)-3\\).<br><br>",
            "theory_sol": "<ol style=\"margin:7px 0 7px 24px;padding-left:10px\"><li style=\"margin:4px 0\">Так как основание логарифма \\(2>1\\), функция \\(y=\\log_2 t\\) возрастает. Поэтому достаточно найти точку максимума аргумента \\(f(x)=-x^2+6x+10\\).</li><li style=\"margin:4px 0\">Это квадратичная функция, причём \\(a=-1<0\\), поэтому максимум достигается в вершине параболы:\n\\[\nx_0=-\\frac{b}{2a}=-\\frac{6}{2\\cdot(-1)}=3.\n\\]</li><li style=\"margin:4px 0\">Значит, аргумент логарифма, а вместе с ним и исходная функция, принимает наибольшее значение при \\(x=3\\). Вычитание числа \\(3\\) точку максимума не изменяет.</li></ol>\nСледовательно, \\(x=3\\) — точка максимума.<br><br><b>Ответ:</b> \\(3\\)",
            "tasks": [
                {
                    "text": "Найдите точку минимума функции \\(y=\\log_{5}(x^2-8x+20)+2\\).",
                    "answer": "4"
                },
                {
                    "text": "Найдите наименьшее значение функции \\(y=\\log_{3}(x^2-6x+10)+4\\).",
                    "answer": "4"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=\\log_{2}(7+6x-x^2)+1\\).",
                    "answer": "5"
                },
                {
                    "text": "Найдите точку максимума функции \\(y=\\log_{7}(5-4x-x^2)-2\\).",
                    "answer": "-2"
                }
            ]
        },
        {
            "desc": "Показательная функция с квадратным показателем",
            "theory_task": "Найдите точку максимума функции \\(y=5^{12x-2x^2+1}\\).<br><br>",
            "theory_sol": "<ol style=\"margin:7px 0 7px 24px;padding-left:10px\"><li style=\"margin:4px 0\">Так как основание степени \\(5>1\\), функция \\(y=5^t\\) возрастает. Поэтому достаточно найти точку максимума показателя \\(f(x)=-2x^2+12x+1\\).</li><li style=\"margin:4px 0\">Это квадратичная функция, причём \\(a=-2<0\\), поэтому максимум достигается в вершине параболы:\n\\[\nx_0=-\\frac{b}{2a}=-\\frac{12}{2\\cdot(-2)}=3.\n\\]</li><li style=\"margin:4px 0\">Следовательно, показатель степени, а вместе с ним и исходная функция, принимает наибольшее значение при \\(x=3\\).</li></ol>\nСледовательно, \\(x=3\\) — точка максимума.<br><br><b>Ответ:</b> \\(3\\)",
            "tasks": [
                {
                    "text": "Найдите точку минимума функции \\(y=3^{x^2-10x+7}\\).",
                    "answer": "5"
                },
                {
                    "text": "Найдите наименьшее значение функции \\(y=2^{x^2-6x+9}\\).",
                    "answer": "1"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=3^{-x^2+4x-3}\\).",
                    "answer": "3"
                },
                {
                    "text": "Найдите точку максимума функции \\(y=11^{6x-x^2}\\).",
                    "answer": "3"
                }
            ]
        },
        {
            "desc": "Функция вида x + a/x",
            "theory_task": "Найдите точку минимума функции \\(y=x+\\dfrac{36}{x}\\).<br><br>",
            "theory_sol": "<ol style=\"margin:7px 0 7px 24px;padding-left:10px\"><li style=\"margin:4px 0\">Область определения: \\(x\\ne0\\). Производная: \\(y'=1-\\dfrac{36}{x^2}=\\dfrac{(x-6)(x+6)}{x^2}\\).</li><li style=\"margin:4px 0\">Нули производной: \\(x=-6\\) и \\(x=6\\). Знаменатель положителен при \\(x\\ne0\\).</li><li style=\"margin:4px 0\">Построим числовую ось:</li></ol>\n<div style=\"display:flex;align-items:center;justify-content:center;gap:2px;margin:10px auto;padding:8px;border:1px solid #9bbbe0;border-radius:8px;background:#f7fbff;max-width:560px\"><b style=\"margin-right:6px\">Знаки производной:</b><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(-6\\)<small style=\"display:block;color:#555\">max</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">−</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(0\\)</span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">−</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(6\\)<small style=\"display:block;color:#555\">min</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span></div>\nСледовательно, \\(x=6\\) — точка минимума.<br><br><b>Ответ:</b> \\(6\\)",
            "tasks": [
                {
                    "text": "Найдите точку максимума функции \\(y=x+\\dfrac{25}{x}\\).",
                    "answer": "-5"
                },
                {
                    "text": "Найдите наименьшее значение функции \\(y=x+\\dfrac{16}{x}\\) на отрезке \\([1;8]\\).",
                    "answer": "8"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=x+\\dfrac{9}{x}\\) на отрезке \\([-6;-1]\\).",
                    "answer": "-6"
                },
                {
                    "text": "Найдите точку минимума функции \\(y=\\dfrac{49}{x}+x+12\\).",
                    "answer": "7"
                }
            ]
        },
        {
            "desc": "Дробно-рациональная функция x/(x² + a)",
            "theory_task": "Найдите точку максимума функции \\(y=-\\dfrac{x}{x^2+16}\\).<br><br>",
            "theory_sol": "<ol style=\"margin:7px 0 7px 24px;padding-left:10px\"><li style=\"margin:4px 0\">Найдём производную: \\(y'=\\dfrac{x^2-16}{(x^2+16)^2}=\\dfrac{(x-4)(x+4)}{(x^2+16)^2}\\).</li><li style=\"margin:4px 0\">Нули производной: \\(x=-4\\) и \\(x=4\\). Знаменатель всегда положителен.</li><li style=\"margin:4px 0\">Расставим знаки:</li></ol>\n<div style=\"display:flex;align-items:center;justify-content:center;gap:2px;margin:10px auto;padding:8px;border:1px solid #9bbbe0;border-radius:8px;background:#f7fbff;max-width:560px\"><b style=\"margin-right:6px\">Знаки производной:</b><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(-4\\)<small style=\"display:block;color:#555\">max</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">−</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(4\\)<small style=\"display:block;color:#555\">min</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span></div>\nСледовательно, \\(x=-4\\) — точка максимума.<br><br><b>Ответ:</b> \\(-4\\)",
            "tasks": [
                {
                    "text": "Найдите точку минимума функции \\(y=-\\dfrac{x}{x^2+9}\\).",
                    "answer": "3"
                },
                {
                    "text": "Найдите точку максимума функции \\(y=\\dfrac{x}{x^2+36}\\).",
                    "answer": "6"
                },
                {
                    "text": "Найдите точку минимума функции \\(y=\\dfrac{x}{x^2+49}\\).",
                    "answer": "-7"
                },
                {
                    "text": "Найдите точку максимума функции \\(y=-\\dfrac{x}{x^2+1}\\).",
                    "answer": "-1"
                }
            ]
        },
        {
            "desc": "Кубическая функция в виде произведения",
            "theory_task": "Найдите точку максимума функции \\(y=(x-1)^2(x-3)+4\\).<br><br>",
            "theory_sol": "<ol style=\"margin:7px 0 7px 24px;padding-left:10px\"><li style=\"margin:4px 0\">Найдём производную: \\(y'=2(x-1)(x-3)+(x-1)^2=(x-1)(3x-7)\\).</li><li style=\"margin:4px 0\">Нули производной: \\(x=1\\) и \\(x=\\dfrac73\\).</li><li style=\"margin:4px 0\">Построим числовую ось:</li></ol>\n<div style=\"display:flex;align-items:center;justify-content:center;gap:2px;margin:10px auto;padding:8px;border:1px solid #9bbbe0;border-radius:8px;background:#f7fbff;max-width:560px\"><b style=\"margin-right:6px\">Знаки производной:</b><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(1\\)<small style=\"display:block;color:#555\">max</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">−</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(\\frac73\\)<small style=\"display:block;color:#555\">min</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span></div>\nСледовательно, \\(x=1\\) — точка максимума.<br><br><b>Ответ:</b> \\(1\\)",
            "tasks": [
                {
                    "text": "Найдите точку минимума функции \\(y=(x+2)^2(x+4)-3\\).",
                    "answer": "-2"
                },
                {
                    "text": "Найдите точку максимума функции \\(y=(x-3)^2(x-6)+2\\).",
                    "answer": "3"
                },
                {
                    "text": "Найдите наименьшее значение функции \\(y=(x+1)^2(x+3)-2\\) на отрезке \\([-2;0]\\).",
                    "answer": "-2"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=(x-2)^2(x-5)+6\\) на отрезке \\([1;3]\\).",
                    "answer": "6"
                }
            ]
        },
        {
            "desc": "Кубическая функция на отрезке",
            "theory_task": "Найдите наибольшее значение функции \\(y=x^3-12x+5\\) на отрезке \\([-3;1]\\).<br><br>",
            "theory_sol": "<ol style=\"margin:7px 0 7px 24px;padding-left:10px\"><li style=\"margin:4px 0\">Найдём производную: \\(y'=3x^2-12=3(x-2)(x+2)\\).</li><li style=\"margin:4px 0\">На отрезке находится одна критическая точка: \\(x=-2\\).</li><li style=\"margin:4px 0\">Функция возрастает до \\(-2\\) и убывает после \\(-2\\):</li></ol>\n<div style=\"display:flex;align-items:center;justify-content:center;gap:2px;margin:10px auto;padding:8px;border:1px solid #9bbbe0;border-radius:8px;background:#f7fbff;max-width:560px\"><b style=\"margin-right:6px\">Знаки производной:</b><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(-3\\)</span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(-2\\)<small style=\"display:block;color:#555\">max</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">−</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(1\\)</span></div>\n\\(y(-2)=-8+24+5=21\\).<br><br><b>Ответ:</b> \\(21\\)",
            "tasks": [
                {
                    "text": "Найдите наименьшее значение функции \\(y=x^3-27x+4\\) на отрезке \\([0;4]\\).",
                    "answer": "-50"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=7+12x-x^3\\) на отрезке \\([-2;2]\\).",
                    "answer": "23"
                },
                {
                    "text": "Найдите наименьшее значение функции \\(y=x^3-3x^2+2\\) на отрезке \\([1;4]\\).",
                    "answer": "-2"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=x^3+3x^2-9x+1\\) на отрезке \\([-4;1]\\).",
                    "answer": "28"
                }
            ]
        },
        {
            "desc": "Функция с логарифмом на отрезке",
            "theory_task": "Найдите наибольшее значение функции \\(y=x^2-10x+8\\ln x+12\\) на отрезке \\([0{,}5;1{,}5]\\).<br><br>",
            "theory_sol": "<ol style=\"margin:7px 0 7px 24px;padding-left:10px\"><li style=\"margin:4px 0\">Найдём производную: \\(y'=2x-10+\\dfrac8x=\\dfrac{2(x-1)(x-4)}x\\).</li><li style=\"margin:4px 0\">На заданном отрезке находится один нуль производной: \\(x=1\\).</li><li style=\"margin:4px 0\">Производная меняет знак с плюса на минус:</li></ol>\n<div style=\"display:flex;align-items:center;justify-content:center;gap:2px;margin:10px auto;padding:8px;border:1px solid #9bbbe0;border-radius:8px;background:#f7fbff;max-width:560px\"><b style=\"margin-right:6px\">Знаки производной:</b><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(0{,}5\\)</span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(1\\)<small style=\"display:block;color:#555\">max</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">−</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(1{,}5\\)</span></div>\n\\(y(1)=1-10+8\\ln1+12=3\\).<br><br><b>Ответ:</b> \\(3\\)",
            "tasks": [
                {
                    "text": "Найдите наименьшее значение функции \\(y=x^2-3x+\\ln x+5\\) на отрезке \\(\\left[\\dfrac34;\\dfrac54\\right]\\).",
                    "answer": "3"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=2x^2-16x+12\\ln x+20\\) на отрезке \\(\\left[\\dfrac45;\\dfrac65\\right]\\).",
                    "answer": "6"
                },
                {
                    "text": "Найдите наименьшее значение функции \\(y=2x^2-5x+\\ln x+1\\) на отрезке \\(\\left[\\dfrac56;\\dfrac76\\right]\\).",
                    "answer": "-2"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=2x^2-13x+9\\ln x+8\\) на отрезке \\(\\left[\\dfrac{13}{14};\\dfrac{15}{14}\\right]\\).",
                    "answer": "-3"
                }
            ]
        },
        {
            "desc": "Косинус с линейным слагаемым",
            "theory_task": "Найдите наибольшее значение функции \\(y=8\\cos x+4\\sqrt3\\,x-\\dfrac{4\\sqrt3\\pi}{3}+5\\) на отрезке \\(\\left[0;\\dfrac\\pi2\\right]\\).<br><br>",
            "theory_sol": "<ol style=\"margin:7px 0 7px 24px;padding-left:10px\"><li style=\"margin:4px 0\">Найдём производную: \\(y'=-8\\sin x+4\\sqrt3\\).</li><li style=\"margin:4px 0\">\\(y'=0\\Rightarrow\\sin x=\\dfrac{\\sqrt3}{2}\\Rightarrow x=\\dfrac\\pi3\\).</li><li style=\"margin:4px 0\">На отрезке производная меняет знак с плюса на минус:</li></ol>\n<div style=\"display:flex;align-items:center;justify-content:center;gap:2px;margin:10px auto;padding:8px;border:1px solid #9bbbe0;border-radius:8px;background:#f7fbff;max-width:560px\"><b style=\"margin-right:6px\">Знаки производной:</b><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(0\\)</span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(\\frac\\pi3\\)<small style=\"display:block;color:#555\">max</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">−</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(\\frac\\pi2\\)</span></div>\n\\(y\\!\\left(\\dfrac\\pi3\\right)=4+\\dfrac{4\\sqrt3\\pi}{3}-\\dfrac{4\\sqrt3\\pi}{3}+5=9\\).<br><br><b>Ответ:</b> \\(9\\)",
            "tasks": [
                {
                    "text": "Найдите наименьшее значение функции \\(y=2+\\dfrac{3\\pi}{4}-3x-3\\sqrt2\\cos x\\) на отрезке \\(\\left[0;\\dfrac\\pi2\\right]\\).",
                    "answer": "-1"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=10\\sin x-5\\sqrt3\\,x+\\dfrac{5\\sqrt3\\pi}{6}+4\\) на отрезке \\(\\left[0;\\dfrac\\pi2\\right]\\).",
                    "answer": "9"
                },
                {
                    "text": "Найдите наименьшее значение функции \\(y=6x-6\\sqrt2\\sin x-\\dfrac{3\\pi}{2}+8\\) на отрезке \\(\\left[0;\\dfrac\\pi2\\right]\\).",
                    "answer": "2"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=6\\cos x+3\\sqrt3\\,x-\\sqrt3\\pi+2\\) на отрезке \\(\\left[0;\\dfrac\\pi2\\right]\\).",
                    "answer": "5"
                }
            ]
        },
        {
            "desc": "Тангенс с линейным слагаемым",
            "theory_task": "Найдите наименьшее значение функции \\(y=2\\operatorname{tg} x-4x+\\pi+1\\) на отрезке \\(\\left[-\\dfrac\\pi3;\\dfrac\\pi3\\right]\\).<br><br>",
            "theory_sol": "<ol style=\"margin:7px 0 7px 24px;padding-left:10px\"><li style=\"margin:4px 0\">Найдём производную: \\(y'=\\dfrac2{\\cos^2x}-4=2(\\operatorname{tg}^2x-1)\\).</li><li style=\"margin:4px 0\">Нули производной: \\(x=-\\dfrac\\pi4\\) и \\(x=\\dfrac\\pi4\\).</li><li style=\"margin:4px 0\">Расставим знаки производной:</li></ol>\n<div style=\"display:flex;align-items:center;justify-content:center;gap:2px;margin:10px auto;padding:8px;border:1px solid #9bbbe0;border-radius:8px;background:#f7fbff;max-width:560px\"><b style=\"margin-right:6px\">Знаки производной:</b><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(-\\frac\\pi3\\)</span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(-\\frac\\pi4\\)<small style=\"display:block;color:#555\">max</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">−</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(\\frac\\pi4\\)<small style=\"display:block;color:#555\">min</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(\\frac\\pi3\\)</span></div>\nМинимум достигается при \\(x=\\dfrac\\pi4\\): \\(y\\!\\left(\\dfrac\\pi4\\right)=3\\).<br><br><b>Ответ:</b> \\(3\\)",
            "tasks": [
                {
                    "text": "Найдите наибольшее значение функции \\(y=-2\\operatorname{tg} x+4x-\\pi+5\\) на отрезке \\(\\left[-\\dfrac\\pi3;\\dfrac\\pi3\\right]\\).",
                    "answer": "3"
                },
                {
                    "text": "Найдите наименьшее значение функции \\(y=3\\operatorname{tg} x-6x+\\dfrac{3\\pi}{2}+4\\) на отрезке \\(\\left[-\\dfrac\\pi3;\\dfrac\\pi3\\right]\\).",
                    "answer": "7"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=5x-2{,}5\\operatorname{tg} x-\\dfrac{5\\pi}{4}+6\\) на отрезке \\(\\left[-\\dfrac\\pi3;\\dfrac\\pi3\\right]\\).",
                    "answer": "3,5"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=4\\operatorname{tg} x-4x+\\pi+3\\) на отрезке \\(\\left[0;\\dfrac\\pi4\\right]\\).",
                    "answer": "7"
                }
            ]
        },
        {
            "desc": "Линейный множитель при cos x и sin x",
            "theory_task": "Найдите точку максимума функции \\(y=(2x-2)\\cos x-2\\sin x+5\\), принадлежащую промежутку \\(\\left(0;\\dfrac\\pi2\\right)\\).<br><br>",
            "theory_sol": "<ol style=\"margin:7px 0 7px 24px;padding-left:10px\"><li style=\"margin:4px 0\">Найдём производную: \\(y'=2\\cos x-(2x-2)\\sin x-2\\cos x=2(1-x)\\sin x\\).</li><li style=\"margin:4px 0\">На заданном промежутке \\(\\sin x>0\\), поэтому \\(y'=0\\) при \\(x=1\\).</li><li style=\"margin:4px 0\">Производная положительна слева от \\(1\\) и отрицательна справа:</li></ol>\n<div style=\"display:flex;align-items:center;justify-content:center;gap:2px;margin:10px auto;padding:8px;border:1px solid #9bbbe0;border-radius:8px;background:#f7fbff;max-width:560px\"><b style=\"margin-right:6px\">Знаки производной:</b><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(0\\)</span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(1\\)<small style=\"display:block;color:#555\">max</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">−</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(\\frac\\pi2\\)</span></div>\nСледовательно, \\(x=1\\) — точка максимума.<br><br><b>Ответ:</b> \\(1\\)",
            "tasks": [
                {
                    "text": "Найдите точку минимума функции \\(y=(0{,}8-x)\\cos x+\\sin x\\), принадлежащую промежутку \\(\\left(0;\\dfrac\\pi2\\right)\\).",
                    "answer": "0,8"
                },
                {
                    "text": "Найдите точку максимума функции \\(y=(4x-5)\\cos x-4\\sin x+3\\), принадлежащую промежутку \\(\\left(0;\\dfrac\\pi2\\right)\\).",
                    "answer": "1,25"
                },
                {
                    "text": "Найдите точку минимума функции \\(y=(1{,}2-x)\\cos x+\\sin x+4\\), принадлежащую промежутку \\(\\left(0;\\dfrac\\pi2\\right)\\).",
                    "answer": "1,2"
                },
                {
                    "text": "Найдите точку максимума функции \\(y=(4x-6)\\cos x-4\\sin x+2\\), принадлежащую промежутку \\(\\left(0;\\dfrac\\pi2\\right)\\).",
                    "answer": "1,5"
                }
            ]
        },
        {
            "desc": "Произведение линейного множителя и экспоненты",
            "theory_task": "Найдите наибольшее значение функции \\(y=(6-x)\\mathrm{e}^{x-5}\\) на отрезке \\([2;8]\\).<br><br>",
            "theory_sol": "<ol style=\"margin:7px 0 7px 24px;padding-left:10px\"><li style=\"margin:4px 0\">Найдём производную: \\(y'=\\mathrm{e}^{x-5}(5-x)\\).</li><li style=\"margin:4px 0\">Экспонента положительна, поэтому нуль производной: \\(x=5\\).</li><li style=\"margin:4px 0\">Функция возрастает до \\(5\\) и убывает после \\(5\\):</li></ol>\n<div style=\"display:flex;align-items:center;justify-content:center;gap:2px;margin:10px auto;padding:8px;border:1px solid #9bbbe0;border-radius:8px;background:#f7fbff;max-width:560px\"><b style=\"margin-right:6px\">Знаки производной:</b><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(2\\)</span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(5\\)<small style=\"display:block;color:#555\">max</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">−</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(8\\)</span></div>\n\\(y(5)=(6-5)\\mathrm{e}^0=1\\).<br><br><b>Ответ:</b> \\(1\\)",
            "tasks": [
                {
                    "text": "Найдите наименьшее значение функции \\(y=(x-5)\\mathrm{e}^{x-4}\\) на отрезке \\([2;7]\\).",
                    "answer": "-1"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=(8-x)\\mathrm{e}^{x-7}\\) на отрезке \\([3;10]\\).",
                    "answer": "1"
                },
                {
                    "text": "Найдите наименьшее значение функции \\(y=(x+2)\\mathrm{e}^{x+3}\\) на отрезке \\([-5;1]\\).",
                    "answer": "-1"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=(9-x)\\mathrm{e}^{x-8}\\) на отрезке \\([5;11]\\).",
                    "answer": "1"
                }
            ]
        },
        {
            "desc": "Произведение квадрата и экспоненты",
            "theory_task": "Найдите точку максимума функции \\(y=(x-3)^2\\mathrm{e}^{x-7}\\).<br><br>",
            "theory_sol": "<ol style=\"margin:7px 0 7px 24px;padding-left:10px\"><li style=\"margin:4px 0\">Найдём производную: \\(y'=\\mathrm{e}^{x-7}(x-3)(x-1)\\).</li><li style=\"margin:4px 0\">Экспонента положительна. Нули производной: \\(x=1\\) и \\(x=3\\).</li><li style=\"margin:4px 0\">Построим числовую ось:</li></ol>\n<div style=\"display:flex;align-items:center;justify-content:center;gap:2px;margin:10px auto;padding:8px;border:1px solid #9bbbe0;border-radius:8px;background:#f7fbff;max-width:560px\"><b style=\"margin-right:6px\">Знаки производной:</b><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(1\\)<small style=\"display:block;color:#555\">max</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">−</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(3\\)<small style=\"display:block;color:#555\">min</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span></div>\nСледовательно, \\(x=1\\) — точка максимума.<br><br><b>Ответ:</b> \\(1\\)",
            "tasks": [
                {
                    "text": "Найдите точку минимума функции \\(y=(x+4)^2\\mathrm{e}^{x-2}\\).",
                    "answer": "-4"
                },
                {
                    "text": "Найдите точку максимума функции \\(y=(x-2)^2\\mathrm{e}^{5-x}\\).",
                    "answer": "4"
                },
                {
                    "text": "Найдите точку минимума функции \\(y=(x+3)^2\\mathrm{e}^{-x-1}\\).",
                    "answer": "-3"
                },
                {
                    "text": "Найдите точку максимума функции \\(y=(x^2-6x+6)\\mathrm{e}^{x-6}\\).",
                    "answer": "0"
                }
            ]
        },
        {
            "desc": "Произведение квадрата и экспоненты на отрезке",
            "theory_task": "Найдите наименьшее значение функции \\(y=(x-2)^2\\mathrm{e}^{x-2}\\) на отрезке \\([1;4]\\).<br><br>",
            "theory_sol": "<ol style=\"margin:7px 0 7px 24px;padding-left:10px\"><li style=\"margin:4px 0\">Найдём производную: \\(y'=\\mathrm{e}^{x-2}(x-2)x\\).</li><li style=\"margin:4px 0\">На отрезке находится один внутренний нуль производной: \\(x=2\\).</li><li style=\"margin:4px 0\">Производная меняет знак с минуса на плюс:</li></ol>\n<div style=\"display:flex;align-items:center;justify-content:center;gap:2px;margin:10px auto;padding:8px;border:1px solid #9bbbe0;border-radius:8px;background:#f7fbff;max-width:560px\"><b style=\"margin-right:6px\">Знаки производной:</b><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(1\\)</span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">−</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(2\\)<small style=\"display:block;color:#555\">min</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(4\\)</span></div>\n\\(y(2)=0^2\\mathrm{e}^0=0\\).<br><br><b>Ответ:</b> \\(0\\)",
            "tasks": [
                {
                    "text": "Найдите наибольшее значение функции \\(y=(x-2)^2\\mathrm{e}^x\\) на отрезке \\([-5;1]\\).",
                    "answer": "4"
                },
                {
                    "text": "Найдите наименьшее значение функции \\(y=(x+3)^2\\mathrm{e}^{-x-3}\\) на отрезке \\([-5;-1]\\).",
                    "answer": "0"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=(x+4)^2\\mathrm{e}^{-x-2}\\) на отрезке \\([-4;0]\\).",
                    "answer": "4"
                },
                {
                    "text": "Найдите наименьшее значение функции \\(y=(x^2-5x+5)\\mathrm{e}^{2-x}\\) на отрезке \\([1;4]\\).",
                    "answer": "-1"
                }
            ]
        },
        {
            "desc": "Квадратный трёхчлен относительно eˣ",
            "theory_task": "Найдите наименьшее значение функции \\(y=\\mathrm{e}^{2x}-8\\mathrm{e}^x+20\\) на отрезке \\([1;2]\\).<br><br>",
            "theory_sol": "<ol style=\"margin:7px 0 7px 24px;padding-left:10px\"><li style=\"margin:4px 0\">Найдём производную: \\(y'=2\\mathrm{e}^x(\\mathrm{e}^x-4)\\).</li><li style=\"margin:4px 0\">Нуль производной: \\(\\mathrm{e}^x=4\\Rightarrow x=\\ln4\\), эта точка принадлежит отрезку.</li><li style=\"margin:4px 0\">Производная меняет знак с минуса на плюс:</li></ol>\n<div style=\"display:flex;align-items:center;justify-content:center;gap:2px;margin:10px auto;padding:8px;border:1px solid #9bbbe0;border-radius:8px;background:#f7fbff;max-width:560px\"><b style=\"margin-right:6px\">Знаки производной:</b><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(1\\)</span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">−</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(\\ln4\\)<small style=\"display:block;color:#555\">min</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(2\\)</span></div>\nПри \\(\\mathrm{e}^x=4\\): \\(y=4^2-8\\cdot4+20=4\\).<br><br><b>Ответ:</b> \\(4\\)",
            "tasks": [
                {
                    "text": "Найдите наименьшее значение функции \\(y=\\mathrm{e}^{2x}-6\\mathrm{e}^x+12\\) на отрезке \\([1;2]\\).",
                    "answer": "3"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=-\\mathrm{e}^{2x}+10\\mathrm{e}^x-16\\) на отрезке \\([1;2]\\).",
                    "answer": "9"
                },
                {
                    "text": "Найдите наименьшее значение функции \\(y=2\\mathrm{e}^{2x}-12\\mathrm{e}^x+19\\) на отрезке \\([1;2]\\).",
                    "answer": "1"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=-2\\mathrm{e}^{2x}+16\\mathrm{e}^x-24\\) на отрезке \\([1;2]\\).",
                    "answer": "8"
                }
            ]
        },
        {
            "desc": "Многочлен пятой степени на отрезке",
            "theory_task": "Найдите наибольшее значение функции \\(y=x^5-5x^3-20x+7\\) на отрезке \\([-5;1]\\).<br><br>",
            "theory_sol": "<ol style=\"margin:7px 0 7px 24px;padding-left:10px\"><li style=\"margin:4px 0\">Найдём производную: \\(y'=5x^4-15x^2-20=5(x^2-4)(x^2+1)\\).</li><li style=\"margin:4px 0\">На заданном отрезке находится один нуль производной: \\(x=-2\\).</li><li style=\"margin:4px 0\">Функция возрастает до \\(-2\\) и убывает после \\(-2\\):</li></ol>\n<div style=\"display:flex;align-items:center;justify-content:center;gap:2px;margin:10px auto;padding:8px;border:1px solid #9bbbe0;border-radius:8px;background:#f7fbff;max-width:560px\"><b style=\"margin-right:6px\">Знаки производной:</b><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(-5\\)</span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">+</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(-2\\)<small style=\"display:block;color:#555\">max</small></span><span style=\"padding:2px 10px;font-weight:700;color:#0756B7\">−</span><span style=\"min-width:52px;text-align:center;border-left:1px solid #777;border-right:1px solid #777;padding:2px 7px\">\\(1\\)</span></div>\n\\(y(-2)=-32+40+40+7=55\\).<br><br><b>Ответ:</b> \\(55\\)",
            "tasks": [
                {
                    "text": "Найдите наибольшее значение функции \\(y=x^5-5x^3-20x-3\\) на отрезке \\([-4;1]\\).",
                    "answer": "45"
                },
                {
                    "text": "Найдите наименьшее значение функции \\(y=x^5-5x^3-20x+4\\) на отрезке \\([-1;5]\\).",
                    "answer": "-44"
                },
                {
                    "text": "Найдите наибольшее значение функции \\(y=3x^5-20x^3+6\\) на отрезке \\([-4;-1]\\).",
                    "answer": "70"
                },
                {
                    "text": "Найдите наименьшее значение функции \\(y=3x^5-20x^3-4\\) на отрезке \\([1;4]\\).",
                    "answer": "-68"
                }
            ]
        }
    ]
};

    window.extraDatabase[12] = task12Extra;
    window.extraDatabase["task12"] = task12Extra;
})();
