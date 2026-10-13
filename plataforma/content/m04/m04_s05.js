/* Módulo 4 · Sección 5 — Determinantes II: propiedades */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m04_s05", modulo: 4, moduloNombre: "Módulo 4 · Matrices, inversa y determinantes", orden: 5,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Determinantes II: propiedades",
    objetivo: "Usar el efecto de las operaciones de fila sobre el determinante para calcularlo por reducción, decidir invertibilidad con det A ≠ 0 y aplicar la propiedad multiplicativa det(AB)=det A·det B.",
    fuente: "Clase 19 · Lay §3.2 · Poole §4.2",
    prerrequisitos: ["Determinantes I", "Reducción de filas", "Matriz invertible"],
    teoria: [
      { tipo: "texto", html: "<p>El valor del determinante es fácil de calcular cuando la matriz es triangular. La estrategia es <b>reducir por filas hasta una forma triangular</b>, llevando la cuenta de cómo cambia el determinante en cada operación.</p>" },
      { tipo: "teorema", titulo: "Efecto de las operaciones de fila", html: "<p>Sea $A$ cuadrada:</p><ul><li>Si se suma un múltiplo de una fila a otra fila para obtener $B$, entonces $\\det B=\\det A$ ($F_i\\to F_i+cF_j$ no cambia el determinante).</li><li>Si se intercambian dos filas para obtener $B$, entonces $\\det B=-\\det A$.</li><li>Si se multiplica una fila por $k$ para obtener $B$, entonces $\\det B=k\\det A$.</li></ul>" },
      { tipo: "nota", titulo: "Factorizar un múltiplo común (Lay §3.2)", html: "<p>Un uso frecuente a mano es extraer un factor común de una fila: $\\begin{vmatrix}\\ast&\\ast&\\ast\\\\5k&-2k&3k\\\\\\ast&\\ast&\\ast\\end{vmatrix}=k\\begin{vmatrix}\\ast&\\ast&\\ast\\\\5&-2&3\\\\\\ast&\\ast&\\ast\\end{vmatrix}$. Esto simplifica los números antes de reducir.</p>" },
      { tipo: "teorema", titulo: "Determinante por reducción", html: "<p>Si $A$ se reduce a una forma escalonada $U$ mediante reemplazos e intercambios de fila, y hay $r$ intercambios, entonces</p>$$\\det A=(-1)^{r}\\det U,$$<p>y como $U$ es triangular, $\\det U$ es el producto de sus pivotes. En resumen:</p>$$\\det A=\\begin{cases}(-1)^{r}\\cdot(\\text{producto de pivotes})&\\text{si }A\\text{ invertible}\\\\ 0&\\text{si }A\\text{ no es invertible.}\\end{cases}$$" },
      { tipo: "teorema", titulo: "Invertibilidad y dependencia", html: "<p>Una matriz cuadrada $A$ es invertible si y solo si $\\det A\\neq0$.</p><p>En particular, si las columnas (o las filas) de $A$ son linealmente dependientes, entonces $\\det A=0$.</p>" },
      { tipo: "teorema", titulo: "Propiedad multiplicativa y transpuesta", html: "<p>Si $A$ y $B$ son de $n\\times n$:</p>$$\\det(AB)=(\\det A)(\\det B),\\qquad \\det(A^{T})=\\det A.$$<p>Como $AA^{-1}=I$, se deduce $\\det(A^{-1})=\\dfrac{1}{\\det A}$.</p>" },
      { tipo: "nota", titulo: "Advertencia (Lay §3.2)", html: "<p>En general $\\det(A+B)\\neq\\det A+\\det B$. La función determinante es lineal en <b>cada columna por separado</b>, pero no aditiva respecto de la suma de matrices. Además, sumar un múltiplo de una fila (o columna) a otra <b>no cambia</b> el determinante, por lo que se usa para crear ceros sin costo.</p>" },
      { tipo: "grafico", spec: { tipo: "tabla", headers: ["Operación de fila", "Efecto sobre det A"], rows: [["$F_i\\to F_i+cF_j$", "No cambia"], ["$F_i\\leftrightarrow F_j$", "$\\times(-1)$"], ["$F_i\\to kF_i$", "$\\times k$"], ["$F_i\\to F_i+cF_j$ (columnas)", "No cambia"]] } },
    ],
    ejemplos: [
      { titulo: "Cálculo por operaciones de fila", enunciado: "<p>Calcule $\\det A$ para $A=\\begin{bmatrix}1&-4&2\\\\-2&8&-9\\\\-1&7&0\\end{bmatrix}$.</p>", desarrollo: [ "Hacemos $F_2\\to F_2+2F_1$ y $F_3\\to F_3+F_1$ (no cambian el determinante).", "$\\det A=\\det\\begin{bmatrix}1&-4&2\\\\0&0&-5\\\\0&3&2\\end{bmatrix}$.", "Desarrollamos por la primera columna: $=1\\cdot\\det\\begin{bmatrix}0&-5\\\\3&2\\end{bmatrix}$.", "$=0\\cdot2-(-5)\\cdot3=15$." ], respuesta: "$\\det A=15$" },
      { titulo: "Filas dependientes", enunciado: "<p>Calcule $\\det A$ para $A=\\begin{bmatrix}3&-1&2&-5\\\\0&5&-3&-6\\\\-6&7&-7&4\\\\-5&-8&0&9\\end{bmatrix}$.</p>", desarrollo: [ "Aplicamos $F_3\\to F_3+2F_1$: la fila 3 queda $(0,\\;7-2,\\;-7+4,\\;4-10)=(0,5,-3,-6)$.", "Ahora la fila 3 es igual a la fila 2.", "Al tener dos filas iguales, $\\det A=0$ (filas linealmente dependientes)." ], respuesta: "$\\det A=0$" },
      { titulo: "Parámetro y valores singulares de α", enunciado: "<p>Determine para qué valores de $\\alpha$ la matriz $A=\\begin{bmatrix}1-\\alpha&3&3\\\\-3&-5-\\alpha&-3\\\\3&3&1-\\alpha\\end{bmatrix}$ es invertible.</p>", desarrollo: [ "Desarrollamos el determinante. Con $a=1-\\alpha$: $\\det= a(ei-fh)-3(di-fg)+3(dh-eg)$.", "$ei-fh=(-5-\\alpha)(1-\\alpha)-(-3)(3)=(\\alpha+2)^2$.", "$di-fg=(-3)(1-\\alpha)-(-3)(3)=3(\\alpha+2)$ y $dh-eg=(-3)(3)-(-5-\\alpha)(3)=3(\\alpha+2)$.", "$\\det=(1-\\alpha)(\\alpha+2)^2-9(\\alpha+2)+9(\\alpha+2)=(1-\\alpha)(\\alpha+2)^2$.", "$A$ es invertible $\\iff \\det\\neq0\\iff \\alpha\\neq1$ y $\\alpha\\neq-2$." ], respuesta: "$A$ es invertible para todo $\\alpha$ con $\\alpha\\neq1$ y $\\alpha\\neq-2$." },
    ],
    ejercicios: [
      { titulo: "Propiedad multiplicativa", dificultad: "basico", enunciado: "<p>Con $A=\\begin{bmatrix}6&1\\\\3&2\\end{bmatrix}$ y $B=\\begin{bmatrix}4&3\\\\1&2\\end{bmatrix}$, verifique $\\det(AB)=\\det A\\cdot\\det B$.</p>", pista: "Calcule los tres determinantes.", desarrollo: [ "$\\det A=12-3=9$ y $\\det B=8-3=5$.", "$AB=\\begin{bmatrix}25&20\\\\14&13\\end{bmatrix}$.", "$\\det(AB)=325-280=45=9\\cdot5$." ], respuesta: "$\\det(AB)=45=9\\cdot5=(\\det A)(\\det B)$." },
      { titulo: "Dependencia lineal", dificultad: "basico", enunciado: "<p>Calcule $\\det\\begin{bmatrix}1&2\\\\2&4\\end{bmatrix}$ e interprete.</p>", pista: "Observe la relación entre filas.", desarrollo: [ "$\\det=1\\cdot4-2\\cdot2=4-4=0$.", "La fila 2 es el doble de la fila 1: son dependientes.", "Determinante nulo $\\Rightarrow$ matriz no invertible." ], respuesta: "$\\det=0$; las filas son dependientes y la matriz no es invertible." },
      { titulo: "Factor común y reducción", dificultad: "intermedio", enunciado: "<p>Calcule $\\det A$ para $A=\\begin{bmatrix}2&-8&6&8\\\\3&-9&5&10\\\\-3&0&1&-2\\\\1&-4&0&6\\end{bmatrix}$.</p>", pista: "Extraiga factor 2 de la primera fila y luego cree ceros.", desarrollo: [ "Sacamos factor 2 de la fila 1: $\\det A=2\\det\\begin{bmatrix}1&-4&3&4\\\\3&-9&5&10\\\\-3&0&1&-2\\\\1&-4&0&6\\end{bmatrix}$.", "Con $F_2\\to F_2-3F_1$, $F_3\\to F_3+3F_1$, $F_4\\to F_4-F_1$: $\\det A=2\\det\\begin{bmatrix}1&-4&3&4\\\\0&3&-4&-2\\\\0&-12&10&10\\\\0&0&-3&2\\end{bmatrix}$.", "Desarrollando por la primera columna: $\\det A=2\\det\\begin{bmatrix}3&-4&-2\\\\-12&10&10\\\\0&-3&2\\end{bmatrix}$.", "$\\det A=2\\left[3(20+30)+12(-14)\\right]=2(150-168)=-36$." ], respuesta: "$\\det A=-36$" },
      { titulo: "Matriz singular", dificultad: "avanzado", enunciado: "<p>Muestre que $A=\\begin{bmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{bmatrix}$ es singular hallando una combinación de filas nula y verificando $\\det A=0$.</p>", pista: "Note que $F_3-F_2=F_2-F_1$.", desarrollo: [ "Calculamos $F_3-2F_2+F_1=(7-8+1,\\;8-10+2,\\;9-12+3)=(0,0,0)$.", "Existe una combinación no trivial de filas igual a cero: las filas son dependientes.", "Por lo tanto $\\det A=0$. En efecto, $\\det A=1(45-48)-2(36-42)+3(32-35)=-3+12-9=0$." ], respuesta: "$\\det A=0$ (filas dependientes, matriz singular)." },
    ],
    erroresComunes: [
      "Olvidar el signo al intercambiar filas (cada intercambio multiplica el determinante por −1).",
      "No ajustar el determinante al multiplicar filas por escalares durante la reducción.",
      "Creer que $\\det(A+B)=\\det A+\\det B$ (falso en general).",
      "Pensar que sumar un múltiplo de una fila cambia el determinante (no lo cambia).",
      "Concluir que $\\det A=0$ solo por tener entradas repetidas, sin verificar dependencia.",
    ],
    checklist: [
      "Conozco el efecto exacto de cada operación de fila sobre el determinante.",
      "Calculo determinantes reduciendo a forma escalonada y multiplicando pivotes.",
      "Decido invertibilidad con $\\det A\\neq0$.",
      "Aplico $\\det(AB)=\\det A\\,\\det B$ y $\\det(A^{T})=\\det A$.",
      "Detecto determinante nulo por dependencia lineal de filas o columnas.",
    ],
    autoevaluacion: [
      { pregunta: "Si se intercambian dos filas de $A$ para obtener $B$, entonces:", opciones: [ "$\\det B=-\\det A$", "$\\det B=\\det A$", "$\\det B=2\\det A$", "$\\det B=0$" ], correcta: 0, explicacion: "Cada intercambio de filas cambia el signo del determinante." },
      { pregunta: "¿Cuál de las siguientes es FALSA en general?", opciones: [ "$\\det(A+B)=\\det A+\\det B$", "$\\det(AB)=\\det A\\,\\det B$", "$\\det(A^{T})=\\det A$", "$\\det(A^{-1})=1/\\det A$" ], correcta: 0, explicacion: "El determinante no es aditivo respecto de la suma de matrices." },
      { pregunta: "$\\det\\begin{bmatrix}2&-8&6&8\\\\3&-9&5&10\\\\-3&0&1&-2\\\\1&-4&0&6\\end{bmatrix}$ vale:", opciones: [ "$-36$", "$-18$", "$36$", "$0$" ], correcta: 0, explicacion: "Extrayendo factor 2 y reduciendo se obtiene $2\\cdot(-18)=-36$." },
    ],
    referencias: [ { titulo: "Clase 19 — Determinantes II: propiedades (PDF)", ruta: "recursos/clases/clase-19.pdf" } ],
  });
})();
