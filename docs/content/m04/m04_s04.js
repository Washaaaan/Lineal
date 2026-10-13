/* Módulo 4 · Sección 4 — Determinantes I: definición */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m04_s04", modulo: 4, moduloNombre: "Módulo 4 · Matrices, inversa y determinantes", orden: 4,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Determinantes I: definición",
    objetivo: "Calcular submatrices y cofactores, evaluar determinantes por desarrollo por cofactores a lo largo de cualquier fila o columna y reconocer el determinante de una matriz triangular.",
    fuente: "Clase 18 · Lay §3.1 · Poole §4.1",
    prerrequisitos: ["Inversa de una matriz 2×2", "Operaciones con matrices", "Reducción de filas"],
    teoria: [
      { tipo: "texto", html: "<p>Para una matriz $2\\times2$ sabemos que es invertible si $ad-bc\\neq0$. El <b>determinante</b> generaliza ese número a matrices cuadradas de cualquier tamaño y decide la invertibilidad. Aquí lo definimos de forma recursiva mediante <b>cofactores</b>.</p>" },
      { tipo: "definicion", titulo: "Submatriz Aᵢⱼ", html: "<p>Para una matriz cuadrada $A$, la <b>submatriz</b> $A_{ij}$ es la matriz que queda al eliminar la fila $i$ y la columna $j$ de $A$.</p>" },
      { tipo: "definicion", titulo: "Cofactor (i,j)", html: "<p>Dada $A=[a_{ij}]$, el <b>cofactor</b> $(i,j)$ de $A$ es el número</p>$$C_{ij}=(-1)^{i+j}\\det A_{ij}.$$<p>El signo $(-1)^{i+j}$ genera el patrón $\\begin{bmatrix}+&-&+&\\cdots\\\\-&+&-\\\\+&-&+\\\\ \\vdots&&&\\ddots\\end{bmatrix}$.</p>" },
      { tipo: "definicion", titulo: "Determinante: desarrollo por cofactores", html: "<p>Para $n\\ge2$, el determinante de $A$ es la suma, a lo largo de la primera fila,</p>$$\\det A=a_{11}C_{11}+a_{12}C_{12}+\\dots+a_{1n}C_{1n}=\\sum_{j=1}^{n}(-1)^{1+j}a_{1j}\\det A_{1j}.$$<p>Para $n=1$, se define $\\det[a_{11}]=a_{11}$.</p>" },
      { tipo: "teorema", titulo: "Desarrollo por cualquier fila o columna", html: "<p>El determinante puede calcularse mediante un desarrollo por cofactores a lo largo de <b>cualquier</b> fila o columna:</p>$$\\det A=\\sum_{j=1}^{n}a_{ij}C_{ij}\\quad\\text{(fila }i\\text{)},\\qquad \\det A=\\sum_{i=1}^{n}a_{ij}C_{ij}\\quad\\text{(columna }j\\text{)}.$$<p>Conviene elegir la fila o columna con más ceros.</p>" },
      { tipo: "teorema", titulo: "Determinante de una matriz triangular", html: "<p>Si $A$ es triangular (superior o inferior), entonces $\\det A$ es el producto de las entradas de su diagonal principal.</p>" },
      { tipo: "nota", titulo: "Costo numérico (Lay §3.1)", html: "<p>Un desarrollo por cofactores requiere alrededor de $n!$ multiplicaciones. Para $n=25$ serían del orden de $10^{25}$ operaciones: inviable a mano y en computadora. El método práctico será reducir por filas (Sección 5). Aquí el objetivo es entender <i>qué</i> es el determinante.</p>" },
      { tipo: "grafico", spec: { tipo: "tabla", headers: ["i+j", "Par (más)", "Impar (menos)"], rows: [["Signo", "+", "−"], ["Ejemplo", "$C_{11},C_{22},C_{13}$", "$C_{12},C_{21},C_{23}$"], ["Patrón", "+ − + ...", "− + − ..."]] } },
    ],
    ejemplos: [
      { titulo: "Determinante 3×3 por cofactores", enunciado: "<p>Calcule $\\det A$ para $A=\\begin{bmatrix}1&5&0\\\\2&4&-1\\\\0&-2&0\\end{bmatrix}$.</p>", desarrollo: [ "Desarrollamos por la primera fila: $\\det A=1\\cdot C_{11}+5\\cdot C_{12}+0\\cdot C_{13}$.", "$C_{11}=(+)\\det\\begin{bmatrix}4&-1\\\\-2&0\\end{bmatrix}=4\\cdot0-(-1)(-2)=-2$.", "$C_{12}=(-)\\det\\begin{bmatrix}2&-1\\\\0&0\\end{bmatrix}=-(2\\cdot0-(-1)\\cdot0)=0$.", "$C_{13}=(+)\\det\\begin{bmatrix}2&4\\\\0&-2\\end{bmatrix}=2(-2)-4\\cdot0=-4$ (no aporta por el $0$).", "Así $\\det A=1(-2)+5(0)+0(-4)=-2$." ], respuesta: "$\\det A=-2$" },
      { titulo: "Submatriz y cofactor", enunciado: "<p>Para $A=\\begin{bmatrix}1&-2&5&0\\\\2&0&4&-1\\\\3&1&0&7\\\\0&4&-2&0\\end{bmatrix}$, determine la submatriz $A_{32}$ y el cofactor $C_{32}$.</p>", desarrollo: [ "Eliminamos la fila 3 y la columna 2 de $A$.", "$A_{32}=\\begin{bmatrix}1&5&0\\\\2&4&-1\\\\0&-2&0\\end{bmatrix}$.", "El signo es $(-1)^{3+2}=-1$, luego $C_{32}=-\\det A_{32}$.", "$\\det A_{32}=-2$ (calculado antes), así $C_{32}=-(-2)=2$." ], respuesta: "$A_{32}=\\begin{bmatrix}1&5&0\\\\2&4&-1\\\\0&-2&0\\end{bmatrix}$ y $C_{32}=2$." },
      { titulo: "Matriz casi triangular", enunciado: "<p>Calcule $\\det A$ para $A=\\begin{bmatrix}3&-7&8&9&-6\\\\0&2&-5&7&3\\\\0&0&1&5&0\\\\0&0&2&4&-1\\\\0&0&0&-2&0\\end{bmatrix}$.</p>", desarrollo: [ "Desarrollamos por la primera columna (que tiene un solo término no nulo): $\\det A=3\\det\\begin{bmatrix}2&-5&7&3\\\\0&1&5&0\\\\0&2&4&-1\\\\0&0&-2&0\\end{bmatrix}$.", "Otra vez por la primera columna: $=3\\cdot2\\det\\begin{bmatrix}1&5&0\\\\2&4&-1\\\\0&-2&0\\end{bmatrix}$.", "El determinante interior es $-2$ (igual al ejemplo anterior), así $\\det A=3\\cdot2\\cdot(-2)$." ], respuesta: "$\\det A=-12$" },
    ],
    ejercicios: [
      { titulo: "Determinante 2×2", dificultad: "basico", enunciado: "<p>Calcule $\\det\\begin{bmatrix}3&4\\\\5&6\\end{bmatrix}$.</p>", pista: "Para $2\\times2$, $ad-bc$.", desarrollo: [ "$\\det=3\\cdot6-4\\cdot5$.", "$=18-20=-2$." ], respuesta: "$\\det=-2$" },
      { titulo: "Triangular", dificultad: "basico", enunciado: "<p>Calcule $\\det\\begin{bmatrix}1&2&3\\\\0&4&5\\\\0&0&6\\end{bmatrix}$.</p>", pista: "Es triangular superior.", desarrollo: [ "Al ser triangular, el determinante es el producto de la diagonal.", "$\\det=1\\cdot4\\cdot6$." ], respuesta: "$\\det=24$" },
      { titulo: "Cofactores 3×3", dificultad: "intermedio", enunciado: "<p>Calcule $\\det A$ para $A=\\begin{bmatrix}2&0&1\\\\3&2&0\\\\1&1&1\\end{bmatrix}$.</p>", pista: "Desarrolle por la fila que tenga más ceros.", desarrollo: [ "Por la primera fila: $\\det A=2\\cdot C_{11}+0\\cdot C_{12}+1\\cdot C_{13}$.", "$C_{11}=(+)\\det\\begin{bmatrix}2&0\\\\1&1\\end{bmatrix}=2$.", "$C_{13}=(+)\\det\\begin{bmatrix}3&2\\\\1&1\\end{bmatrix}=3-2=1$.", "$\\det A=2(2)+0+1(1)=5$." ], respuesta: "$\\det A=5$" },
      { titulo: "Bloques y ceros", dificultad: "intermedio", enunciado: "<p>Calcule $\\det\\begin{bmatrix}1&2&0&0\\\\3&4&0&0\\\\0&0&5&6\\\\0&0&7&8\\end{bmatrix}$.</p>", pista: "Observe la estructura en bloques $2\\times2$.", desarrollo: [ "La matriz es triangular por bloques, así que $\\det A=\\det\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}\\cdot\\det\\begin{bmatrix}5&6\\\\7&8\\end{bmatrix}$.", "$\\det\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}=4-6=-2$; $\\det\\begin{bmatrix}5&6\\\\7&8\\end{bmatrix}=40-42=-2$.", "$\\det A=(-2)(-2)=4$." ], respuesta: "$\\det A=4$" },
    ],
    erroresComunes: [
      "Olvidar alternar los signos $(-1)^{i+j}$ de los cofactores.",
      "Eliminar la fila/columna equivocadas al construir $A_{ij}$.",
      "Usar el desarrollo por cofactores pero multiplicar por la fila equivocada.",
      "Creer que $\\det A$ cambia al desarrollarlo por otra fila (el valor es el mismo).",
      "Pensar que una matriz no triangular siempre tiene determinante nulo o no nulo según su tamaño.",
    ],
    checklist: [
      "Construyo submatrices $A_{ij}$ correctamente.",
      "Calculo cofactores aplicando el signo $(-1)^{i+j}$.",
      "Desarrollo un determinante por la fila o columna con más ceros.",
      "Reconozco inmediatamente el determinante de una triangular como producto de la diagonal.",
      "Sé que el valor del determinante no depende de la fila usada.",
    ],
    autoevaluacion: [
      { pregunta: "El cofactor $C_{ij}$ está dado por:", opciones: [ "$(-1)^{i+j}\\det A_{ij}$", "$(-1)^{i}\\det A_{ij}$", "$\\det A_{ij}$", "$(-1)^{j}\\det A_{ij}$" ], correcta: 0, explicacion: "Por definición $C_{ij}=(-1)^{i+j}\\det A_{ij}$." },
      { pregunta: "El determinante de $\\begin{bmatrix}1&2&3\\\\0&4&5\\\\0&0&6\\end{bmatrix}$ es:", opciones: [ "$24$", "$0$", "$6$", "$15$" ], correcta: 0, explicacion: "Es triangular superior: $1\\cdot4\\cdot6=24$." },
      { pregunta: "Desarrollar por una fila distinta de la primera:", opciones: [ "Da el mismo determinante", "Cambia el signo del determinante", "Es siempre inválido", "Duplica el determinante" ], correcta: 0, explicacion: "El desarrollo por cofactores a lo largo de cualquier fila o columna entrega el mismo valor." },
    ],
    referencias: [ { titulo: "Clase 18 — Determinantes I: definición (PDF)", ruta: "recursos/clases/clase-18.pdf" } ],
  });
})();
