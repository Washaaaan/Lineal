/* Módulo 7 · Sección 5 — Mínimos cuadrados y recta de mínimos cuadrados */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m07_s05", modulo: 7, moduloNombre: "Módulo 7 · Ortogonalidad y mínimos cuadrados", orden: 5,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Mínimos cuadrados y recta de mínimos cuadrados",
    objetivo: "Hallar soluciones de mínimos cuadrados de sistemas inconsistentes mediante las ecuaciones normales AᵀAx=Aᵀb (o el factor QR), calcular el error de mínimos cuadrados y ajustar rectas a datos.",
    fuente: "Clase 37 · Lay §6.5 · Poole §5.3",
    prerrequisitos: ["Proyección ortogonal", "Ecuaciones normales", "Factorización QR"],
    teoria: [
      { tipo: "texto", html: "<p>Muchos sistemas $Ax=b$ no tienen solución. En lugar de rendirnos, buscamos el $x$ que hace a $Ax$ lo <b>más cercano posible</b> a $b$, es decir, proyectamos $b$ sobre $\\text{Col }A$.</p>" },
      { tipo: "definicion", titulo: "Solución de mínimos cuadrados", html: "<p>Si $A$ es de $m\\times n$ y $b\\in\\R^m$, una <b>solución de mínimos cuadrados</b> de $Ax=b$ es un $\\hat x\\in\\R^n$ tal que</p>$$\\|b-A\\hat x\\|\\le\\|b-Ax\\|\\quad\\text{para todo } x\\in\\R^n.$$<p>El nombre proviene de que $\\|b-Ax\\|$ es la raíz de una suma de cuadrados.</p>" },
      { tipo: "teorema", titulo: "Ecuaciones normales", html: "<p>El conjunto de soluciones de mínimos cuadrados de $Ax=b$ coincide con el conjunto de soluciones de</p>$$A^{T}Ax=A^{T}b.$$" },
      { tipo: "teorema", titulo: "Unicidad y fórmula", html: "<p>Las siguientes afirmaciones son equivalentes:</p><p>1. $Ax=b$ tiene solución de mínimos cuadrados única para cada $b\\in\\R^m$.</p><p>2. Las columnas de $A$ son linealmente independientes.</p><p>3. $A^{T}A$ es invertible.</p><p>Si ocurren, entonces $\\hat x=(A^{T}A)^{-1}A^{T}b$.</p>" },
      { tipo: "nota", titulo: "Estrategia con QR (Lay §6.5)", html: "<p>Si $A=QR$ con columnas de $A$ linealmente independientes, la solución de mínimos cuadrados es $\\hat x=R^{-1}Q^{T}b$, y en la práctica basta resolver $Rx=Q^{T}b$ (sistema triangular). El <b>error de mínimos cuadrados</b> es $\\|b-A\\hat x\\|$, es decir, la distancia de $b$ a $\\text{Col }A$.</p>" },
      { tipo: "definicion", titulo: "Recta de mínimos cuadrados", html: "<p>Al ajustar una recta $y=\\beta_0+\\beta_1x$ a datos $(x_1,y_1),\\dots,(x_n,y_n)$ se resuelve $X\\beta=y$ con</p>$$X=\\begin{bmatrix}1&x_1\\\\1&x_2\\\\ \\vdots&\\vdots\\\\1&x_n\\end{bmatrix},\\qquad \\beta=\\begin{bmatrix}\\beta_0\\\\\\beta_1\\end{bmatrix}.$$<p>La <b>recta de mínimos cuadrados</b> minimiza la suma de los cuadrados de los residuos (distancias verticales punto-recta).</p>" },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "Recta de mínimos cuadrados para (2,1),(5,2),(7,3),(8,3)", funciones: [ { f: function (x) { return 2 / 7 + (5 / 14) * x; }, desde: 0, hasta: 9, label: "y = 2/7 + 5x/14", color: "#1e5eff" } ], series: [ { x: [2, 5, 7, 8], y: [1, 2, 3, 3], label: "datos", color: "#e17055", mode: "markers" } ], xlabel: "x", ylabel: "y" } },
    ],
    ejemplos: [
      { titulo: "Mínimos cuadrados con columnas ortogonales", enunciado: "<p>Encuentre una solución de mínimos cuadrados de $Ax=b$ para $A=\\begin{bmatrix}1&-6\\\\1&-2\\\\1&1\\\\1&7\\end{bmatrix}$, $b=\\begin{bmatrix}-1\\\\2\\\\1\\\\6\\end{bmatrix}$.</p>", desarrollo: [ "$A^{T}A=\\begin{bmatrix}4&0\\\\0&90\\end{bmatrix}$ (las columnas de $A$ son ortogonales) y $A^{T}b=\\begin{bmatrix}8\\\\45\\end{bmatrix}$.", "Las ecuaciones normales son $4x_1=8$ y $90x_2=45$.", "Luego $x_1=2$ y $x_2=\\tfrac12$." ], respuesta: "$\\hat x=\\left(2,\\tfrac12\\right)$." },
      { titulo: "Ecuaciones normales y error", enunciado: "<p>Resuelva el sistema inconsistente $Ax=b$ con $A=\\begin{bmatrix}4&0\\\\0&2\\\\1&1\\end{bmatrix}$, $b=\\begin{bmatrix}2\\\\0\\\\11\\end{bmatrix}$ y calcule el error de mínimos cuadrados.</p>", desarrollo: [ "$A^{T}A=\\begin{bmatrix}17&1\\\\1&5\\end{bmatrix}$ y $A^{T}b=\\begin{bmatrix}19\\\\11\\end{bmatrix}$.", "Resolviendo: $x_1=1$, $x_2=2$, es decir $\\hat x=(1,2)$.", "$A\\hat x=(4,4,3)$ y $b-A\\hat x=(-2,-4,8)$.", "Error $=\\|b-A\\hat x\\|=\\sqrt{4+16+64}=\\sqrt{84}=2\\sqrt{21}$." ], respuesta: "$\\hat x=(1,2)$ con error $2\\sqrt{21}$." },
      { titulo: "Recta de mínimos cuadrados", enunciado: "<p>Encuentre la recta de mínimos cuadrados para los puntos $(2,1),(5,2),(7,3),(8,3)$.</p>", desarrollo: [ "$X=\\begin{bmatrix}1&2\\\\1&5\\\\1&7\\\\1&8\\end{bmatrix}$, $y=\\begin{bmatrix}1\\\\2\\\\3\\\\3\\end{bmatrix}$.", "$X^{T}X=\\begin{bmatrix}4&22\\\\22&142\\end{bmatrix}$ y $X^{T}y=\\begin{bmatrix}9\\\\57\\end{bmatrix}$.", "Las normales se reducen a $\\beta_0=\\tfrac27$, $\\beta_1=\\tfrac{5}{14}$.", "Entonces $y=\\tfrac27+\\tfrac{5}{14}x$." ], respuesta: "$y=\\dfrac27+\\dfrac{5}{14}x$." },
    ],
    ejercicios: [
      { titulo: "Recta por tres puntos alineados", dificultad: "basico", enunciado: "<p>Ajuste una recta a $(0,1),(1,2),(2,3)$.</p>", pista: "Plantee $X\\beta=y$ y use las ecuaciones normales.", desarrollo: [ "$X=\\begin{bmatrix}1&0\\\\1&1\\\\1&2\\end{bmatrix}$, $X^{T}X=\\begin{bmatrix}3&3\\\\3&5\\end{bmatrix}$, $X^{T}y=\\begin{bmatrix}6\\\\8\\end{bmatrix}$.", "De $3\\beta_0+3\\beta_1=6$ y $3\\beta_0+5\\beta_1=8$: restando, $2\\beta_1=2$.", "$\\beta_1=1$ y $\\beta_0=1$." ], respuesta: "$y=1+x$ (los puntos están alineados)." },
      { titulo: "Ecuaciones normales 2×2", dificultad: "basico", enunciado: "<p>Encuentre $\\hat x$ de mínimos cuadrados para $A=\\begin{bmatrix}1&1\\\\1&2\\\\1&3\\end{bmatrix}$, $b=(1,2,2)$.</p>", pista: "Calcule $A^{T}A$ y $A^{T}b$.", desarrollo: [ "$A^{T}A=\\begin{bmatrix}3&6\\\\6&14\\end{bmatrix}$, $A^{T}b=\\begin{bmatrix}5\\\\11\\end{bmatrix}$.", "$3x_1+6x_2=5$, $6x_1+14x_2=11$; restando el doble de la primera, $2x_2=1$.", "$x_2=\\tfrac12$ y $x_1=\\tfrac23$." ], respuesta: "$\\hat x=\\left(\\tfrac23,\\tfrac12\\right)$." },
      { titulo: "Recta para datos", dificultad: "intermedio", enunciado: "<p>Ajuste una recta a $(1,1),(2,2),(3,4)$.</p>", pista: "Use $X$ con columna de unos y las normales.", desarrollo: [ "$X^{T}X=\\begin{bmatrix}3&6\\\\6&14\\end{bmatrix}$, $X^{T}y=\\begin{bmatrix}7\\\\17\\end{bmatrix}$.", "De $3\\beta_0+6\\beta_1=7$ y $6\\beta_0+14\\beta_1=17$: restando el doble de la primera, $2\\beta_1=3$.", "$\\beta_1=\\tfrac32$ y $\\beta_0=-\\tfrac23$." ], respuesta: "$y=-\\dfrac23+\\dfrac32x$." },
      { titulo: "Error vía columnas de A", dificultad: "avanzado", enunciado: "<p>Para $A=\\begin{bmatrix}1&0\\\\0&1\\\\1&1\\end{bmatrix}$ y $b=(1,1,0)$, encuentre $\\hat x$ y el error de mínimos cuadrados.</p>", pista: "Las columnas de $A$ son ortogonales entre sí.", desarrollo: [ "$A^{T}A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}$, $A^{T}b=\\begin{bmatrix}1\\\\1\\end{bmatrix}$.", "De $2x_1+x_2=1$, $x_1+2x_2=1$: restando, $x_1=x_2$; entonces $3x_1=1$.", "$\\hat x=\\left(\\tfrac13,\\tfrac13\\right)$; $A\\hat x=\\left(\\tfrac13,\\tfrac13,\\tfrac23\\right)$.", "$b-A\\hat x=\\left(\\tfrac23,\\tfrac23,-\\tfrac23\\right)$, error $=\\sqrt{\\tfrac49+\\tfrac49+\\tfrac49}=\\dfrac{2}{\\sqrt3}=\\dfrac{2\\sqrt3}{3}$." ], respuesta: "$\\hat x=\\left(\\tfrac13,\\tfrac13\\right)$, error $=\\dfrac{2\\sqrt3}{3}$." },
    ],
    erroresComunes: [
      "Escribir las ecuaciones normales como $A A^{T}x=A^{T}b$ en lugar de $A^{T}Ax=A^{T}b$.",
      "Aplicar $\\hat x=(A^{T}A)^{-1}A^{T}b$ cuando las columnas de $A$ son dependientes ($A^{T}A$ no invertible).",
      "Confundir el error de mínimos cuadrados con $\\|b\\|$ o con el residuo de una sola ecuación.",
      "En la recta, olvidar la columna de unos en $X$ (la recta tendría $\\beta_0=0$).",
    ],
    checklist: [
      "Identifico cuándo $Ax=b$ es inconsistente y busco la mejor aproximación.",
      "Planteo y resuelvo las ecuaciones normales $A^{T}Ax=A^{T}b$.",
      "Verifico si $A^{T}A$ es invertible (columnas LI) para la solución única.",
      "Calculo el error de mínimos cuadrados como $\\|b-A\\hat x\\|$.",
      "Ajusto una recta formando $X$ con columna de unos.",
    ],
    autoevaluacion: [
      { pregunta: "Las ecuaciones normales para mínimos cuadrados son:", opciones: [ "$A^{T}Ax=A^{T}b$", "$Ax=b$", "$A^{T}bx=Ab$", "$(A^{T}A)x=b$" ], correcta: 0, explicacion: "La solución de mínimos cuadrados satisface exactamente $A^{T}Ax=A^{T}b$." },
      { pregunta: "$Ax=b$ tiene solución de mínimos cuadrados única para cada $b$ si y solo si:", opciones: [ "Las columnas de $A$ son linealmente independientes", "$A$ es cuadrada", "$b=0$", "$A^{T}A=0$" ], correcta: 0, explicacion: "Columnas LI $\\iff$ $A^{T}A$ invertible $\\iff$ solución de mínimos cuadrados única." },
      { pregunta: "El error de mínimos cuadrados mide:", opciones: [ "La distancia de $b$ a $\\text{Col }A$", "La suma de las entradas de $b$", "$\\|\\hat x\\|$", "$\\det(A^{T}A)$" ], correcta: 0, explicacion: "Es $\\|b-A\\hat x\\|$, la distancia de $b$ a su proyección sobre $\\text{Col }A$." },
    ],
    referencias: [ { titulo: "Clase 37 — Problemas de mínimos cuadrados y recta de mínimos cuadrados (PDF)", ruta: "recursos/clases/clase-37.pdf" } ],
  });
})();
