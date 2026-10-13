/* Módulo 4 · Sección 2 — La inversa de una matriz */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m04_s02", modulo: 4, moduloNombre: "Módulo 4 · Matrices, inversa y determinantes", orden: 2,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "La inversa de una matriz",
    objetivo: "Decidir si una matriz cuadrada es invertible, calcular la inversa de una matriz 2×2, usar la inversa para resolver Ax=b y aplicar las propiedades de la inversa de productos y transpuestas.",
    fuente: "Clase 16 · Apunte Clase 6 · Lay §2.2 · Poole §2.2",
    prerrequisitos: ["Operaciones con matrices", "Producto de matrices", "Matriz identidad"],
    teoria: [
      { tipo: "texto", html: "<p>Así como los números reales no nulos tienen recíproco, ciertas matrices cuadradas poseen <b>inversa</b>. La inversa permite resolver sistemas $Ax=b$ de forma directa y es la base de la fórmula del determinante que veremos más adelante.</p>" },
      { tipo: "definicion", titulo: "Matriz invertible e inversa", html: "<p>Una matriz $A$ de $n\\times n$ es <b>invertible</b> si existe una matriz $C$ de $n\\times n$ tal que</p>$$CA=I \\quad\\text{y}\\quad AC=I,$$<p>donde $I=I_n$. En tal caso $C$ es <b>una</b> inversa de $A$. La inversa es única y se denota $A^{-1}$.</p>" },
      { tipo: "nota", titulo: "Solo las cuadradas pueden invertirse (Lay §2.2)", html: "<p>Una matriz no cuadrada no puede tener inversa (a lo más puede tener inversa por un lado). Además, si existe $C$ con $CA=I$ entonces necesariamente también $AC=I$; basta comprobar una de las dos igualdades para matrices cuadradas.</p>" },
      { tipo: "teorema", titulo: "Inversa de una matriz 2×2", html: "<p>Sea $A=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$. Si $ad-bc\\neq0$, entonces $A$ es invertible y</p>$$A^{-1}=\\frac{1}{ad-bc}\\begin{bmatrix}d&-b\\\\-c&a\\end{bmatrix}.$$<p>Si $ad-bc=0$, entonces $A$ no es invertible.</p>" },
      { tipo: "teorema", titulo: "Solución única de Ax=b", html: "<p>Si $A$ es invertible de $n\\times n$, entonces para cada $b\\in\\R^n$ la ecuación $Ax=b$ tiene la solución única</p>$$x=A^{-1}b.$$" },
      { tipo: "teorema", titulo: "Propiedades de la inversa", html: "<p>Si $A$ y $B$ son invertibles de $n\\times n$:</p><ul><li>$A^{-1}$ es invertible y $(A^{-1})^{-1}=A$.</li><li>$AB$ es invertible y $(AB)^{-1}=B^{-1}A^{-1}$ (¡orden opuesto!).</li><li>$A^{T}$ es invertible y $(A^{T})^{-1}=(A^{-1})^{T}$.</li><li>Para $k\\ge1$, $A^k$ es invertible y $(A^k)^{-1}=(A^{-1})^k$.</li></ul>" },
      { tipo: "nota", titulo: "Interpretación geométrica (Poole §2.2)", html: "<p>Si $A$ es invertible, la transformación $x\\mapsto Ax$ es reversible: $A^{-1}$ deshace lo que hizo $A$. Geométricamente, invertir equivale a poder recuperar el vector original sin ambigüedad, lo que exige que $A$ no 'aplaste' el espacio.</p>" },
      { tipo: "grafico", spec: { tipo: "transformacion2d", matriz: [[3, 4], [5, 6]], titulo: "T(x)=Ax con A=[[3,4],[5,6]] (invertible)" } },
    ],
    ejemplos: [
      { titulo: "Verificar una inversa", enunciado: "<p>Sean $A=\\begin{bmatrix}2&5\\\\-3&-7\\end{bmatrix}$ y $C=\\begin{bmatrix}-7&-5\\\\3&2\\end{bmatrix}$. Compruebe que $C=A^{-1}$.</p>", desarrollo: [ "Calculamos $AC=\\begin{bmatrix}2(-7)+5(3)&2(-5)+5(2)\\\\-3(-7)-7(3)&-3(-5)-7(2)\\end{bmatrix}$.", "$AC=\\begin{bmatrix}-14+15&-10+10\\\\21-21&15-14\\end{bmatrix}=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$.", "Como $AC=I$ (y $A,C$ son cuadradas), $C=A^{-1}$." ], respuesta: "$AC=I$, luego $C=A^{-1}$." },
      { titulo: "Inversa de una 2×2", enunciado: "<p>Encuentre la inversa de $A=\\begin{bmatrix}3&4\\\\5&6\\end{bmatrix}$.</p>", desarrollo: [ "Calculamos el determinante: $ad-bc=3\\cdot6-4\\cdot5=18-20=-2\\neq0$.", "Entonces $A$ es invertible.", "$A^{-1}=\\frac{1}{-2}\\begin{bmatrix}6&-4\\\\-5&3\\end{bmatrix}=\\begin{bmatrix}-3&2\\\\5/2&-3/2\\end{bmatrix}$." ], respuesta: "$A^{-1}=\\begin{bmatrix}-3&2\\\\5/2&-3/2\\end{bmatrix}$" },
      { titulo: "Resolver un sistema con la inversa", enunciado: "<p>Use $A^{-1}$ para resolver $3x_1+4x_2=3$, $5x_1+6x_2=7$.</p>", desarrollo: [ "El sistema es $Ax=b$ con $A=\\begin{bmatrix}3&4\\\\5&6\\end{bmatrix}$, $b=\\begin{bmatrix}3\\\\7\\end{bmatrix}$.", "Como $A^{-1}=\\begin{bmatrix}-3&2\\\\5/2&-3/2\\end{bmatrix}$, entonces $x=A^{-1}b$.", "$x=\\begin{bmatrix}-3(3)+2(7)\\\\5/2\\cdot3-3/2\\cdot7\\end{bmatrix}=\\begin{bmatrix}-9+14\\\\15/2-21/2\\end{bmatrix}=\\begin{bmatrix}5\\\\-3\\end{bmatrix}$.", "Verificación: $3(5)+4(-3)=3$ y $5(5)+6(-3)=7$." ], respuesta: "$x_1=5$, $x_2=-3$; es decir $x=\\begin{bmatrix}5\\\\-3\\end{bmatrix}$." },
    ],
    ejercicios: [
      { titulo: "¿Existe la inversa?", dificultad: "basico", enunciado: "<p>Determine si $A=\\begin{bmatrix}4&1\\\\2&3\\end{bmatrix}$ es invertible y, en caso afirmativo, calcule $A^{-1}$.</p>", pista: "Calcule $ad-bc$.", desarrollo: [ "$ad-bc=4\\cdot3-1\\cdot2=12-2=10\\neq0$.", "Como el determinante no es cero, $A$ es invertible.", "$A^{-1}=\\frac{1}{10}\\begin{bmatrix}3&-1\\\\-2&4\\end{bmatrix}$." ], respuesta: "$A^{-1}=\\frac{1}{10}\\begin{bmatrix}3&-1\\\\-2&4\\end{bmatrix}$" },
      { titulo: "Inversa 2×2", dificultad: "basico", enunciado: "<p>Calcule la inversa de $A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$.</p>", pista: "Aplique la fórmula para matrices $2\\times2$.", desarrollo: [ "$ad-bc=1\\cdot4-2\\cdot3=4-6=-2$.", "$A^{-1}=\\frac{1}{-2}\\begin{bmatrix}4&-2\\\\-3&1\\end{bmatrix}=\\begin{bmatrix}-2&1\\\\3/2&-1/2\\end{bmatrix}$." ], respuesta: "$A^{-1}=\\begin{bmatrix}-2&1\\\\3/2&-1/2\\end{bmatrix}$" },
      { titulo: "Sistema con inversa", dificultad: "intermedio", enunciado: "<p>Resuelva $2x+y=5$, $3x+2y=8$ usando la inversa de la matriz de coeficientes.</p>", pista: "Escriba $Ax=b$ e identifique $A$ y $b$.", desarrollo: [ "$A=\\begin{bmatrix}2&1\\\\3&2\\end{bmatrix}$, con $ad-bc=4-3=1$.", "$A^{-1}=\\frac{1}{1}\\begin{bmatrix}2&-1\\\\-3&2\\end{bmatrix}=\\begin{bmatrix}2&-1\\\\-3&2\\end{bmatrix}$.", "$x=A^{-1}b=\\begin{bmatrix}2&-1\\\\-3&2\\end{bmatrix}\\begin{bmatrix}5\\\\8\\end{bmatrix}=\\begin{bmatrix}10-8\\\\-15+16\\end{bmatrix}=\\begin{bmatrix}2\\\\1\\end{bmatrix}$.", "Verificación: $2(2)+1=5$ y $3(2)+2(1)=8$." ], respuesta: "$x=2$, $y=1$." },
      { titulo: "Inversa de un producto", dificultad: "avanzado", enunciado: "<p>Con $A=\\begin{bmatrix}2&1\\\\1&1\\end{bmatrix}$ y $B=\\begin{bmatrix}1&0\\\\1&2\\end{bmatrix}$, verifique numéricamente que $(AB)^{-1}=B^{-1}A^{-1}$.</p>", pista: "Calcule primero $AB$, su inversa, y luego $B^{-1}A^{-1}$.", desarrollo: [ "$AB=\\begin{bmatrix}2\\cdot1+1\\cdot1&2\\cdot0+1\\cdot2\\\\1\\cdot1+1\\cdot1&1\\cdot0+1\\cdot2\\end{bmatrix}=\\begin{bmatrix}3&2\\\\2&2\\end{bmatrix}$.", "$\\det(AB)=6-4=2$, así $(AB)^{-1}=\\frac{1}{2}\\begin{bmatrix}2&-2\\\\-2&3\\end{bmatrix}=\\begin{bmatrix}1&-1\\\\-1&3/2\\end{bmatrix}$.", "$A^{-1}=\\begin{bmatrix}1&-1\\\\-1&2\\end{bmatrix}$, $B^{-1}=\\frac{1}{2}\\begin{bmatrix}2&0\\\\-1&1\\end{bmatrix}$.", "$B^{-1}A^{-1}=\\begin{bmatrix}1&0\\\\-1/2&1/2\\end{bmatrix}\\begin{bmatrix}1&-1\\\\-1&2\\end{bmatrix}=\\begin{bmatrix}1&-1\\\\-1&3/2\\end{bmatrix}$. Coinciden." ], respuesta: "$(AB)^{-1}=B^{-1}A^{-1}=\\begin{bmatrix}1&-1\\\\-1&3/2\\end{bmatrix}$." },
    ],
    erroresComunes: [
      "Intentar invertir una matriz no cuadrada.",
      "Confundir el orden en $(AB)^{-1}$ y escribir $A^{-1}B^{-1}$ en vez de $B^{-1}A^{-1}$.",
      "Calcular $ad-bc$ con los signos cambiados o intercambiar $b$ y $c$ al armar la inversa 2×2.",
      "Suponer que toda matriz cuadrada es invertible (no lo es si $ad-bc=0$).",
      "Pensar que $(A+B)^{-1}=A^{-1}+B^{-1}$ (falso en general).",
    ],
    checklist: [
      "Verifico que $AA^{-1}=A^{-1}A=I$ al comprobar una inversa.",
      "Aplico la fórmula $2\\times2$ solo cuando $ad-bc\\neq0$.",
      "Resuelvo $Ax=b$ mediante $x=A^{-1}b$.",
      "Uso $(AB)^{-1}=B^{-1}A^{-1}$ y $(A^{T})^{-1}=(A^{-1})^{T}$ correctamente.",
      "Reconozco que solo las matrices cuadradas con determinante no nulo son invertibles.",
    ],
    autoevaluacion: [
      { pregunta: "¿Para qué matrices está definida la inversa $A^{-1}$?", opciones: [ "Para matrices cuadradas con $ad-bc$ (det) distinto de cero", "Para cualquier matriz", "Solo para matrices $2\\times2$", "Para toda matriz con entradas no nulas" ], correcta: 0, explicacion: "Solo las matrices cuadradas (en general con $\\det A\\neq0$) poseen inversa." },
      { pregunta: "Si $A$ y $B$ son invertibles $n\\times n$, entonces $(AB)^{-1}$ es:", opciones: [ "$B^{-1}A^{-1}$", "$A^{-1}B^{-1}$", "$AB$", "$A^{-1}+B^{-1}$" ], correcta: 0, explicacion: "El orden se invierte: $(AB)^{-1}=B^{-1}A^{-1}$." },
      { pregunta: "Si $A=\\begin{bmatrix}3&4\\\\5&6\\end{bmatrix}$, entonces $A^{-1}$ es:", opciones: [ "$\\begin{bmatrix}-3&2\\\\5/2&-3/2\\end{bmatrix}$", "$\\begin{bmatrix}3&-2\\\\-5/2&3/2\\end{bmatrix}$", "$\\begin{bmatrix}6&-4\\\\-5&3\\end{bmatrix}$", "$\\begin{bmatrix}-2&3\\\\5/2&-3/2\\end{bmatrix}$" ], correcta: 0, explicacion: "$\\det=-2$ y $A^{-1}=\\frac{1}{-2}\\begin{bmatrix}6&-4\\\\-5&3\\end{bmatrix}=\\begin{bmatrix}-3&2\\\\5/2&-3/2\\end{bmatrix}$." },
    ],
    referencias: [ { titulo: "Clase 16 — La inversa de una matriz (PDF)", ruta: "recursos/clases/clase-16.pdf" }, { titulo: "Apunte Clase 6 — Matrices (PDF)", ruta: "recursos/apuntes/apunte-clase-06.pdf" } ],
  });
})();
