/* Módulo 3 · Sección 3 — Matriz estándar de una transformación lineal */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m03_s03", modulo: 3, moduloNombre: "Módulo 3 · Independencia lineal y transformaciones", orden: 3,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Matriz estándar de una transformación lineal",
    objetivo: "Encontrar la matriz estándar $A=[T(e_1)\\,\\cdots\\,T(e_n)]$ de una transformación lineal, usarla para calcular imágenes, y decidir si una transformación es sobreyectiva o inyectiva según los pivotes de $A$.",
    fuente: "Clase 14 · Apunte Clase 12 (Transformaciones lineales) · Lay §1.9 · Poole §3.5",
    prerrequisitos: ["Transformaciones lineales", "Vectores $e_1,\\dots,e_n$", "Multiplicación matriz-vector", "Pivotes y rango", "Independencia lineal"],
    teoria: [
      { tipo: "texto", html: "<p>Ya sabemos reconocer una transformación lineal y que las matriciales lo son. El paso decisivo es el recíproco: <b>toda</b> transformación lineal de $\\R^n$ en $\\R^m$ proviene de una matriz. Encontrar esa matriz es el objetivo de esta sección.</p>" },
      { tipo: "definicion", titulo: "Vectores canónicos", html: "<p>Los vectores canónicos de $\\R^n$ son $e_1=(1,0,\\dots,0)$, $e_2=(0,1,\\dots,0)$, $\\dots$, $e_n=(0,\\dots,0,1)$: $e_j$ tiene un $1$ en la posición $j$ y $0$ en las demás. Todo $x\\in\\R^n$ se escribe $x=x_1e_1+x_2e_2+\\cdots+x_ne_n$.</p>" },
      { tipo: "teorema", titulo: "Existencia y unicidad de la matriz estándar", html: "<p>Sea $T:\\R^n\\to\\R^m$ una transformación lineal. Entonces existe una <b>única</b> matriz $A$ tal que</p>$$T(x)=Ax\\quad\\text{para todo }x\\in\\R^n.$$<p>Esa matriz es</p>$$A=\\begin{bmatrix}T(e_1)&T(e_2)&\\cdots&T(e_n)\\end{bmatrix},$$<p>y se llama la <b>matriz estándar</b> de $T$.</p>" },
      { tipo: "nota", titulo: "Por qué funciona (Lay §1.9)", html: "<p>La clave es la linealidad: $x=x_1e_1+\\cdots+x_ne_n$, así que $T(x)=x_1T(e_1)+\\cdots+x_nT(e_n)$. Eso es exactamente $Ax$ con $A$ la matriz cuyas columnas son las imágenes de los vectores canónicos. La unicidad sale de que las columnas de $A$ quedan forzadas por $T(e_j)$.</p>" },
      { tipo: "nota", titulo: "Transformaciones lineales típicas en $\\R^2$ (Lay §1.9)", html: "<ul><li><b>Dilatación</b> de factor $k$: $T(x)=kx$, $A=\\begin{bmatrix}k&0\\\\0&k\\end{bmatrix}$.</li><li><b>Reflexión</b> respecto del eje $x$: $A=\\begin{bmatrix}1&0\\\\0&-1\\end{bmatrix}$.</li><li><b>Rotación</b> antihoraria de ángulo $\\varphi$: $A=\\begin{bmatrix}\\cos\\varphi&-\\sin\\varphi\\\\ \\sin\\varphi&\\cos\\varphi\\end{bmatrix}$.</li><li><b>Proyección</b> sobre el eje $x$: $A=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$.</li></ul>" },
      { tipo: "teorema", titulo: "Sobreyectiva y uno a uno (vía la matriz $A$)", html: "<p>Sea $T(x)=Ax$ con $T:\\R^n\\to\\R^m$ y $A$ de tamaño $m\\times n$. Entonces:</p><ul><li>$T$ es <b>sobreyectiva</b> (<i>onto</i>: todo $\\R^m$ es recorrido) $\\Leftrightarrow$ $Ax=b$ siempre tiene solución $\\Leftrightarrow$ las columnas de $A$ generan $\\R^m$ $\\Leftrightarrow$ <b>$A$ tiene un pivote en cada fila</b>.</li><li>$T$ es <b>inyectiva</b> (uno a uno) $\\Leftrightarrow$ $Ax=\\mathbf{0}$ solo tiene la solución trivial $\\Leftrightarrow$ las columnas de $A$ son LI $\\Leftrightarrow$ <b>$A$ tiene un pivote en cada columna</b>.</li></ul>" },
      { tipo: "grafico", spec: { tipo: "transformacion2d", matriz: [[1, 0], [0, -1]], titulo: "Reflexión respecto del eje x: A = [[1,0],[0,-1]]" } },
    ],
    ejemplos: [
      { titulo: "De las imágenes de $e_1,e_2$ a la fórmula", enunciado: "<p>Sea $T:\\R^2\\to\\R^2$ lineal con $T(e_1)=\\begin{bmatrix}2\\\\5\\end{bmatrix}$ y $T(e_2)=\\begin{bmatrix}-1\\\\6\\end{bmatrix}$. Encuentre $T\\left(\\begin{bmatrix}5\\\\-3\\end{bmatrix}\\right)$ y la fórmula de $T(x)$.</p>", desarrollo: [ "Las columnas de $A$ son las imágenes de $e_1$ y $e_2$: $A=\\begin{bmatrix}2&-1\\\\5&6\\end{bmatrix}$.", "Así $T(x)=\\begin{bmatrix}2x_1-x_2\\\\5x_1+6x_2\\end{bmatrix}$.", "Evaluamos $T(5,-3)=\\begin{bmatrix}2(5)-(-3)\\\\5(5)+6(-3)\\end{bmatrix}=\\begin{bmatrix}10+3\\\\25-18\\end{bmatrix}$." ], respuesta: "$T(5,-3)=\\begin{bmatrix}13\\\\7\\end{bmatrix}$ y $T(x_1,x_2)=(2x_1-x_2,\\ 5x_1+6x_2)$." },
      { titulo: "Matriz de la dilatación", enunciado: "<p>Encuentre la matriz estándar de la dilatación $T(x)=3x$ en $\\R^2$.</p>", desarrollo: [ "$T(e_1)=3e_1=\\begin{bmatrix}3\\\\0\\end{bmatrix}$ y $T(e_2)=3e_2=\\begin{bmatrix}0\\\\3\\end{bmatrix}$.", "La matriz estándar tiene esas imágenes como columnas." ], respuesta: "$A=\\begin{bmatrix}3&0\\\\0&3\\end{bmatrix}=3I$." },
      { titulo: "Matriz de la rotación", enunciado: "<p>Sea $T:\\R^2\\to\\R^2$ la rotación antihoraria de ángulo $\\varphi$ alrededor del origen. Determine su matriz estándar.</p>", desarrollo: [ "Calculamos las imágenes de los vectores canónicos: $T(e_1)=(\\cos\\varphi,\\ \\sin\\varphi)$.", "Para $e_2=(0,1)$, al rotar $90^\\circ$ queda sobre el eje $y$; rotado $\\varphi$ da $T(e_2)=(-\\sin\\varphi,\\ \\cos\\varphi)$.", "Ponemos ambas imágenes como columnas de $A$." ], respuesta: "$A=\\begin{bmatrix}\\cos\\varphi&-\\sin\\varphi\\\\ \\sin\\varphi&\\cos\\varphi\\end{bmatrix}$." },
    ],
    ejercicios: [
      { titulo: "Matriz estándar a partir de la fórmula", dificultad: "basico", enunciado: "<p>Encuentre la matriz estándar de $T\\begin{pmatrix}\\begin{bmatrix}x_1\\\\x_2\\end{bmatrix}\\end{pmatrix}=\\begin{bmatrix}x_1+3x_2\\\\x_2\\end{bmatrix}$.</p>", pista: "Calcule $T(e_1)$ y $T(e_2)$ y úselas como columnas.", desarrollo: [ "$T(e_1)=T(1,0)=\\begin{bmatrix}1\\\\0\\end{bmatrix}$ y $T(e_2)=T(0,1)=\\begin{bmatrix}3\\\\1\\end{bmatrix}$.", "La matriz estándar es $A=\\begin{bmatrix}T(e_1)&T(e_2)\\end{bmatrix}$." ], respuesta: "$A=\\begin{bmatrix}1&3\\\\0&1\\end{bmatrix}$." },
      { titulo: "La proyección sobre el eje $x$", dificultad: "basico", enunciado: "<p>Sea $T\\begin{pmatrix}\\begin{bmatrix}x_1\\\\x_2\\end{bmatrix}\\end{pmatrix}=\\begin{bmatrix}x_1\\\\0\\end{bmatrix}$. Halle su matriz estándar y evalúe $T(4,-7)$.</p>", pista: "Las columnas son las imágenes de los vectores canónicos.", desarrollo: [ "$T(e_1)=(1,0)$ y $T(e_2)=(0,0)$.", "Entonces $A=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$.", "$T(4,-7)=A\\begin{bmatrix}4\\\\-7\\end{bmatrix}=\\begin{bmatrix}4\\\\0\\end{bmatrix}$." ], respuesta: "$A=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$ y $T(4,-7)=\\begin{bmatrix}4\\\\0\\end{bmatrix}$." },
      { titulo: "Desde tres imágenes canónicas", dificultad: "intermedio", enunciado: "<p>Sea $T:\\R^3\\to\\R^3$ lineal con $T(e_1)=\\begin{bmatrix}1\\\\-1\\\\0\\end{bmatrix}$, $T(e_2)=\\begin{bmatrix}0\\\\1\\\\-1\\end{bmatrix}$, $T(e_3)=\\begin{bmatrix}1\\\\0\\\\1\\end{bmatrix}$. Encuentre $A$ y calcule $T(1,2,3)$.</p>", pista: "Arme $A$ con esas tres columnas y multiplique por $(1,2,3)$.", desarrollo: [ "$A=\\begin{bmatrix}1&0&1\\\\-1&1&0\\\\0&-1&1\\end{bmatrix}$.", "$T(1,2,3)=A\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}=\\begin{bmatrix}1(1)+0(2)+1(3)\\\\-1(1)+1(2)+0(3)\\\\0(1)-1(2)+1(3)\\end{bmatrix}$.", "$=\\begin{bmatrix}4\\\\1\\\\1\\end{bmatrix}$." ], respuesta: "$A=\\begin{bmatrix}1&0&1\\\\-1&1&0\\\\0&-1&1\\end{bmatrix}$ y $T(1,2,3)=\\begin{bmatrix}4\\\\1\\\\1\\end{bmatrix}$." },
      { titulo: "Sobre, uno a uno y tamaños", dificultad: "avanzado", enunciado: "<p>Sea $T:\\R^n\\to\\R^m$ dada por $T(x)=Ax$ con $A=\\begin{bmatrix}1&-4&8&1\\\\0&2&-1&3\\\\0&0&0&5\\end{bmatrix}$. Determine $m$, $n$, si $T$ es sobreyectiva y si es uno a uno.</p>", pista: "Cuente filas y columnas; ubique los pivotes de la forma escalonada.", desarrollo: [ "La matriz es $3\\times4$, luego $m=3$ y $n=4$.", "La forma ya está escalonada, con pivotes en las columnas $1$, $2$ y $4$ (una por fila): hay pivote en cada fila.", "Hay pivote en cada fila $\\Rightarrow$ $T$ es <b>sobreyectiva</b> (recorrido $=\\R^3$).", "Pero la columna $3$ no tiene pivote, así que las columnas no son LI y $Ax=\\mathbf{0}$ tiene solución no trivial: $T$ <b>no es uno a uno</b>." ], respuesta: "$m=3$, $n=4$; $T$ es sobreyectiva pero no inyectiva." },
    ],
    erroresComunes: [
      "Colocar las imágenes $T(e_j)$ como <b>filas</b> de $A$ en lugar de columnas.",
      "Confundir <b>sobreyectiva</b> (pivote en cada fila) con <b>inyectiva</b> (pivote en cada columna).",
      "Usar $n$ y $m$ al revés: en $A$ de tamaño $m\\times n$, el dominio es $\\R^n$ y el codominio $\\R^m$.",
      "Afirmar que una transformación $\\R^4\\to\\R^3$ puede ser uno a uno: con $n>m$ es imposible (faltan pivotes para las $n$ columnas).",
    ],
    checklist: [
      "Sé que toda transformación lineal tiene una única matriz estándar.",
      "Puedo construir $A=[T(e_1)\\,\\cdots\\,T(e_n)]$ a partir de las imágenes canónicas.",
      "Sé obtener $A$ cuando me dan la fórmula de $T$.",
      "Conozco las matrices de dilatación, reflexión, rotación y proyección.",
      "Decido sobreyectividad e inyectividad mirando los pivotes por fila y por columna.",
    ],
    autoevaluacion: [
      { pregunta: "Si $T:\\R^2\\to\\R^2$ es lineal con $T(e_1)=\\begin{bmatrix}1\\\\2\\end{bmatrix}$ y $T(e_2)=\\begin{bmatrix}3\\\\4\\end{bmatrix}$, su matriz estándar es:", opciones: [ "$\\begin{bmatrix}1&3\\\\2&4\\end{bmatrix}$", "$\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$", "$\\begin{bmatrix}1&2\\\\4&3\\end{bmatrix}$", "$\\begin{bmatrix}2&4\\\\1&3\\end{bmatrix}$" ], correcta: 0, explicacion: "Las columnas de $A$ son $T(e_1)$ y $T(e_2)$: $A=\\begin{bmatrix}1&3\\\\2&4\\end{bmatrix}$." },
      { pregunta: "$T(x)=Ax$ con $A$ de tamaño $3\\times3$ con pivote en cada columna. Entonces $T$ es:", opciones: [ "inyectiva y sobreyectiva", "solo inyectiva", "solo sobreyectiva", "ninguna de las anteriores" ], correcta: 0, explicacion: "Pivote en cada columna $\\Rightarrow$ inyectiva; al ser cuadrada, eso obliga también a tener pivote en cada fila, luego es sobreyectiva." },
      { pregunta: "Para que $T:\\R^n\\to\\R^m$ sea <b>sobreyectiva</b> se necesita:", opciones: [ "un pivote en cada fila de $A$", "un pivote en cada columna de $A$", "que $A$ sea cuadrada", "que $A$ sea la identidad" ], correcta: 0, explicacion: "El recorrido cubre todo $\\R^m$ exactamente cuando las columnas generan $\\R^m$, es decir, cuando hay pivote en cada una de las $m$ filas." },
    ],
    referencias: [
      { titulo: "Clase 14 — Matriz de una transformación lineal (PDF)", ruta: "recursos/clases/clase-14.pdf" },
      { titulo: "Apunte Clase 12 — Transformaciones lineales (PDF)", ruta: "recursos/apuntes/apunte-clase-12.pdf" },
    ],
  });
})();
