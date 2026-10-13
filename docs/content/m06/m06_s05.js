/* Módulo 6 · Sección 5 — Valores propios complejos */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m06_s05", modulo: 6, moduloNombre: "Módulo 6 · Valores y vectores propios", orden: 5,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Valores propios complejos",
    objetivo: "Operar con números complejos, encontrar valores y vectores propios complejos, y reconocer matrices reales 2×2 con valores propios complejos como rotaciones escaladas A=PCP^{-1}.",
    fuente: "Clase 32 · Lay §5.5 · Poole §4.4",
    prerrequisitos: ["Valores y vectores propios", "Ecuación característica", "Diagonalización", "Matrices reales 2×2"],
    teoria: [
      { tipo: "texto", html: "<p>No toda ecuación característica tiene raíces reales. Cuando aparecen raíces complejas, la matriz no es diagonalizable sobre $\\R$, pero sí es similar a una <b>rotación escalada</b>. Para estudiarlo recordamos primero los números complejos.</p>" },
      { tipo: "definicion", titulo: "Números complejos", html: "<p>La unidad imaginaria $i$ cumple $i^2=-1$. Un número complejo es $z=a+bi$ con $a,b\\in\\R$; aquí $a=\\operatorname{Re}z$ es la parte real y $b=\\operatorname{Im}z$ la parte imaginaria. El <b>conjugado</b> es $\\bar z=a-bi$. El <b>módulo</b> es $|z|=\\sqrt{a^2+b^2}$ y el <b>argumento</b> $\\arg z$ es el ángulo $\\varphi$ del vector $(a,b)$ con el eje real positivo. Se opera usando $i^2=-1$ y racionalizando para dividir.</p>" },
      { tipo: "teorema", titulo: "Pares conjugados en matrices reales", html: "<p>Si $A$ es una matriz de $n\\times n$ con entradas <b>reales</b>, entonces todo valor propio complejo aparece en pares conjugados: si $\\lambda$ es valor propio con vector propio $v$, entonces $\\bar\\lambda$ es valor propio con vector propio $\\bar v$.</p>" },
      { tipo: "teorema", titulo: "Rotación escalada", html: "<p>Los valores propios de $C=\\begin{bmatrix}a&-b\\\\b&a\\end{bmatrix}$ (con $a,b$ reales, no ambos cero) son $\\lambda=a\\pm bi$. Si $r=|a+bi|$ y $\\varphi=\\arg(a+bi)$, entonces</p>$$C=r\\begin{bmatrix}\\cos\\varphi&-\\operatorname{sen}\\varphi\\\\ \\operatorname{sen}\\varphi&\\cos\\varphi\\end{bmatrix}.$$<p>Es decir, multiplicar por $C$ es <b>rotar</b> en ángulo $\\varphi$ y luego <b>ponderar</b> por $r$.</p>" },
      { tipo: "teorema", titulo: "Forma canónica de una 2×2 real", html: "<p>Sea $A$ una matriz real de $2\\times2$ con valor propio complejo $\\lambda=a+bi$ ($b\\neq0$) y vector propio asociado $v\\in\\C^2$. Entonces</p>$$A=PCP^{-1},\\qquad P=\\begin{bmatrix}\\operatorname{Re}v&\\operatorname{Im}v\\end{bmatrix},\\qquad C=\\begin{bmatrix}a&-b\\\\b&a\\end{bmatrix}.$$<p>Toda matriz real $2\\times2$ con valores propios complejos es similar a una rotación escalada.</p>" },
      { tipo: "nota", titulo: "Interpretación geométrica (Lay §5.5)", html: "<p>La rotación $R_\\varphi$ tiene valores propios $e^{\\pm i\\varphi}$ y no fija ninguna dirección real (salvo cuando $\\varphi=0,\\pi$). Por eso una matriz con valores propios complejos no es diagonalizable sobre $\\R$: no tiene vectores propios reales.</p>" },
      { tipo: "nota", titulo: "Cálculo de un vector propio complejo (Clase 32)", html: "<p>Para hallar $v$ resolvemos $(A-\\lambda I)v=0$ con $\\lambda$ complejo, exactamente como en el caso real pero con aritmética compleja. Recuerde separar la parte real y la imaginaria al formar $P$.</p>" },
      { tipo: "grafico", spec: { tipo: "vectores2d", titulo: "A=[[0,−1],[1,0]] rota 90°: [1,0] va a [0,1]; sus valores propios son ±i (rotación pura, r=1)", vectores: [ { x: 1, y: 0, x0: 0, y0: 0, label: "x=[1,0]", color: "#1e5eff", width: 3 }, { x: 0, y: 1, x0: 0, y0: 0, label: "Ax=[0,1]", color: "#e17055", width: 3 } ], rangeX: [-1.5, 1.5], rangeY: [-1.5, 1.5], ocultarLeyenda: false } },
    ],
    ejemplos: [
      { titulo: "Valores y vectores propios de una rotación", enunciado: "<p>Si $A=\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}$, encuentre sus valores y vectores propios.</p>", desarrollo: [ "$\\det(A-\\lambda I)=(0-\\lambda)(0-\\lambda)-(-1)(1)=\\lambda^2+1$; luego $\\lambda^2=-1$ y $\\lambda=\\pm i$.", "Para $\\lambda=i$: $A-iI=\\begin{bmatrix}-i&-1\\\\1&-i\\end{bmatrix}$. De $-i x_1-x_2=0$ se tiene $x_2=-i x_1$.", "Tomando $x_1=1$: $v=\\begin{bmatrix}1\\\\-i\\end{bmatrix}$.", "Por la propiedad de pares conjugados, $\\lambda=-i$ tiene vector propio $\\bar v=\\begin{bmatrix}1\\\\i\\end{bmatrix}$." ], respuesta: "$\\lambda=\\pm i$; $v=\\begin{bmatrix}1\\\\-i\\end{bmatrix}$ para $i$ y $\\begin{bmatrix}1\\\\i\\end{bmatrix}$ para $-i$." },
      { titulo: "Valores propios complejos generales", enunciado: "<p>Sea $A=\\begin{bmatrix}0.5&-0.6\\\\0.75&1.1\\end{bmatrix}$. Encuentre sus valores propios y una base de cada espacio propio.</p>", desarrollo: [ "$\\det(A-\\lambda I)=(0.5-\\lambda)(1.1-\\lambda)+0.45=\\lambda^2-1.6\\lambda+1$.", "Resolviendo: $\\lambda=\\dfrac{1.6\\pm\\sqrt{2.56-4}}{2}=\\dfrac{1.6\\pm0.6i}{2}=0.8\\pm0.6i$.", "Para $\\lambda=0.8+0.6i$: $A-\\lambda I=\\begin{bmatrix}-0.3-0.6i&-0.6\\\\0.75&0.3-0.6i\\end{bmatrix}$; de la primera fila $x_2=(-0.5-i)x_1$.", "Con $x_1=2$: $v=\\begin{bmatrix}2\\\\-1-2i\\end{bmatrix}$. El conjugado $\\begin{bmatrix}2\\\\-1+2i\\end{bmatrix}$ corresponde a $\\lambda=0.8-0.6i$." ], respuesta: "$\\lambda=0.8\\pm0.6i$; $v=\\begin{bmatrix}2\\\\-1-2i\\end{bmatrix}$ y $\\begin{bmatrix}2\\\\-1+2i\\end{bmatrix}$." },
      { titulo: "Forma rotación-escalada A=PCP^{-1}", enunciado: "<p>Para $A=\\begin{bmatrix}0.5&-0.6\\\\0.75&1.1\\end{bmatrix}$ con $\\lambda=0.8+0.6i$ y $v=\\begin{bmatrix}2\\\\-1-2i\\end{bmatrix}$, encuentre $P$ y $C$.</p>", desarrollo: [ "Separamos $v$: $\\operatorname{Re}v=\\begin{bmatrix}2\\\\-1\\end{bmatrix}$ y $\\operatorname{Im}v=\\begin{bmatrix}0\\\\-2\\end{bmatrix}$.", "$P=\\begin{bmatrix}\\operatorname{Re}v&\\operatorname{Im}v\\end{bmatrix}=\\begin{bmatrix}2&0\\\\-1&-2\\end{bmatrix}$.", "Con $a=0.8$, $b=0.6$: $C=\\begin{bmatrix}a&-b\\\\b&a\\end{bmatrix}=\\begin{bmatrix}0.8&-0.6\\\\0.6&0.8\\end{bmatrix}$.", "Entonces $A=PCP^{-1}$: $A$ rota en un ángulo $\\varphi=\\arg(0.8+0.6i)$ y escala por $r=|0.8+0.6i|=1$." ], respuesta: "$P=\\begin{bmatrix}2&0\\\\-1&-2\\end{bmatrix}$ y $C=\\begin{bmatrix}0.8&-0.6\\\\0.6&0.8\\end{bmatrix}$." },
    ],
    ejercicios: [
      { titulo: "Rotación pura", dificultad: "basico", enunciado: "<p>Encuentre los valores propios de $A=\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}$.</p>", pista: "Resuelva $\\det(A-\\lambda I)=0$.", desarrollo: [ "$\\det(A-\\lambda I)=\\lambda^2+1=0$." ], respuesta: "$\\lambda=i$ y $\\lambda=-i$." },
      { titulo: "Ecuación característica compleja", dificultad: "basico", enunciado: "<p>Encuentre los valores propios de $A=\\begin{bmatrix}1&-1\\\\1&1\\end{bmatrix}$.</p>", pista: "El discriminante saldrá negativo.", desarrollo: [ "$\\det(A-\\lambda I)=(1-\\lambda)^2+1=0$.", "$(1-\\lambda)^2=-1\\Rightarrow 1-\\lambda=\\pm i\\Rightarrow \\lambda=1\\mp i$." ], respuesta: "$\\lambda=1+i$ y $\\lambda=1-i$." },
      { titulo: "Vectores propios complejos", dificultad: "intermedio", enunciado: "<p>Para $A=\\begin{bmatrix}1&-2\\\\1&3\\end{bmatrix}$, uno de sus valores propios es $\\lambda=2+i$. Encuentre un vector propio asociado.</p>", pista: "Resuelva $(A-\\lambda I)v=0$ separando parte real e imaginaria.", desarrollo: [ "$\\det(A-\\lambda I)=(1-\\lambda)(3-\\lambda)+2=\\lambda^2-4\\lambda+5$, cuyas raíces son $2\\pm i$.", "$A-(2+i)I=\\begin{bmatrix}-1-i&-2\\\\1&1-i\\end{bmatrix}$; de $-1-i$ veces $x_1-2x_2=0$ se obtiene $x_2=\\dfrac{-1-i}{2}x_1$.", "Con $x_1=2$: $x_2=-1-i$, luego $v=\\begin{bmatrix}2\\\\-1-i\\end{bmatrix}$." ], respuesta: "$v=\\begin{bmatrix}2\\\\-1-i\\end{bmatrix}$." },
      { titulo: "Forma P, C", dificultad: "avanzado", enunciado: "<p>Para $A=\\begin{bmatrix}1&-2\\\\1&3\\end{bmatrix}$ con $\\lambda=2+i$ y $v=\\begin{bmatrix}2\\\\-1-i\\end{bmatrix}$, determine $P$ y $C$ tales que $A=PCP^{-1}$.</p>", pista: "$P$ lleva $\\operatorname{Re}v$ e $\\operatorname{Im}v$; $C$ usa $a=\\operatorname{Re}\\lambda$, $b=\\operatorname{Im}\\lambda$.", desarrollo: [ "Separamos: $\\operatorname{Re}v=\\begin{bmatrix}2\\\\-1\\end{bmatrix}$, $\\operatorname{Im}v=\\begin{bmatrix}0\\\\-1\\end{bmatrix}$.", "$P=\\begin{bmatrix}2&0\\\\-1&-1\\end{bmatrix}$.", "Con $a=2$, $b=1$: $C=\\begin{bmatrix}2&-1\\\\1&2\\end{bmatrix}$.", "Verificando, $A=PCP^{-1}$: la rotación escala por $r=|2+i|=\\sqrt5$ y gira un ángulo $\\varphi=\\arg(2+i)$." ], respuesta: "$P=\\begin{bmatrix}2&0\\\\-1&-1\\end{bmatrix}$ y $C=\\begin{bmatrix}2&-1\\\\1&2\\end{bmatrix}$." },
    ],
    erroresComunes: [
      "Olvidar que $i^2=-1$ al multiplicar o dividir números complejos.",
      "Concluir que una matriz con valores propios complejos 'no tiene solución'; sí tiene estructura, solo que sobre $\\C$.",
      "Confundir módulo $|a+bi|=\\sqrt{a^2+b^2}$ con $a^2+b^2$ (falta la raíz).",
      "Mezclar la parte real e imaginaria al construir $P=\\begin{bmatrix}\\operatorname{Re}v&\\operatorname{Im}v\\end{bmatrix}$.",
      "No recordar que en matrices reales los valores propios complejos vienen en pares conjugados.",
    ],
    checklist: [
      "Resuelvo ecuaciones características con raíces complejas.",
      "Escribo e interpreto módulo y argumento de un número complejo.",
      "Encuentro vectores propios complejos resolviendo $(A-\\lambda I)v=0$.",
      "Uso la propiedad de pares conjugados en matrices reales.",
      "Construyo $P$ y $C$ para expresar $A=PCP^{-1}$ como rotación escalada.",
    ],
    autoevaluacion: [
      { pregunta: "El módulo de $z=-1+2i$ es:", opciones: [ "$3$", "$\\sqrt5$", "$-1$", "$5$" ], correcta: 1, explicacion: "$|z|=\\sqrt{(-1)^2+2^2}=\\sqrt5$." },
      { pregunta: "Si $A$ es real y $\\lambda=a+bi$ ($b\\neq0$) es valor propio, entonces también es valor propio:", opciones: [ "$a-bi$", "$-a+bi$", "$1/\\lambda$", "$\\lambda^2$" ], correcta: 0, explicacion: "En matrices reales los valores propios complejos aparecen en pares conjugados." },
      { pregunta: "Los valores propios de $C=\\begin{bmatrix}a&-b\\\\b&a\\end{bmatrix}$ son:", opciones: [ "$a$ y $b$", "$a\\pm bi$", "$\\pm\\sqrt{a^2+b^2}$", "$a\\cdot b$" ], correcta: 1, explicacion: "El polinomio característico es $(a-\\lambda)^2+b^2$, cuyas raíces son $a\\pm bi$." },
    ],
    referencias: [ { titulo: "Clase 32 — Valores propios complejos (PDF)", ruta: "recursos/clases/clase-32.pdf" }, { titulo: "Apunte Clase 12 — TransformacionesLineales (PDF)", ruta: "recursos/apuntes/apunte-clase-12.pdf" } ],
  });
})();
