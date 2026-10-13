/* Módulo 4 · Sección 6 — Regla de Cramer y fórmula de la inversa */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m04_s06", modulo: 4, moduloNombre: "Módulo 4 · Matrices, inversa y determinantes", orden: 6,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Regla de Cramer y fórmula de la inversa",
    objetivo: "Resolver sistemas Ax=b con la regla de Cramer y calcular A⁻¹ mediante la adjunta, comprendiendo sus ventajas teóricas y sus limitaciones numéricas.",
    fuente: "Clase 20 · Lay §3.3 · Poole §4.3",
    prerrequisitos: ["Determinantes", "Cofactores", "Matriz invertible"],
    teoria: [
      { tipo: "texto", html: "<p>Con el determinante ya disponible podemos resolver sistemas y calcular inversas mediante <b>fórmulas cerradas</b>. Aunque computacionalmente no son las más eficientes, son muy útiles para argumentos teóricos y para sistemas con parámetros.</p>" },
      { tipo: "definicion", titulo: "Matriz Aᵢ(b)", html: "<p>Para $A$ de $n\\times n$ y $b\\in\\R^n$, $A_i(b)$ es la matriz obtenida al <b>reemplazar la columna $i$</b> de $A$ por el vector $b$:</p>$$A_i(b)=\\begin{bmatrix} a_1 & \\cdots & b & \\cdots & a_n\\end{bmatrix}.$$" },
      { tipo: "teorema", titulo: "Regla de Cramer", html: "<p>Sea $A$ invertible de $n\\times n$. Para cualquier $b\\in\\R^n$, la solución única $x$ de $Ax=b$ tiene entradas</p>$$x_i=\\frac{\\det A_i(b)}{\\det A},\\qquad i=1,2,\\dots,n.$$" },
      { tipo: "definicion", titulo: "Adjunta de A", html: "<p>La <b>matriz de cofactores</b> de $A$ tiene en la posición $(i,j)$ al cofactor $C_{ij}$. La <b>adjunta</b> $\\operatorname{adj}A$ es la <b>transpuesta</b> de esa matriz de cofactores:</p>$$\\operatorname{adj}A=\\begin{bmatrix}C_{11}&C_{21}&\\cdots&C_{n1}\\\\C_{12}&C_{22}&\\cdots&C_{n2}\\\\ \\vdots&\\vdots&\\ddots&\\vdots\\\\C_{1n}&C_{2n}&\\cdots&C_{nn}\\end{bmatrix}.$$" },
      { tipo: "teorema", titulo: "Fórmula para la inversa", html: "<p>Si $A$ es invertible de $n\\times n$, entonces</p>$$A^{-1}=\\frac{1}{\\det A}\\operatorname{adj}A.$$" },
      { tipo: "nota", titulo: "Uso numérico (Lay §3.3)", html: "<p>La fórmula de la inversa y la regla de Cramer son útiles para cálculos <b>teóricos</b> y para tamaños pequeños. Para matrices grandes, la reducción de filas es mucho más eficiente: calcular un solo determinante con cofactores cuesta tanto como resolver $Ax=b$ completo. La regla de Cramer también brilla cuando los coeficientes dependen de un parámetro.</p>" },
      { tipo: "grafico", spec: { tipo: "tabla", headers: ["Método", "Ventaja", "Desventaja"], rows: [["Regla de Cramer", "Fórmula directa; ideal con parámetros", "Costoso para n grande"], ["Adjunta", "Fórmula cerrada de $A^{-1}$", "Costoso para n grande"], ["Reducción de filas", "Eficiente y general", "Menos simbólico"]] } },
    ],
    ejemplos: [
      { titulo: "Regla de Cramer 2×2", enunciado: "<p>Resuelva por Cramer: $3x_1-2x_2=6$, $-5x_1+4x_2=8$.</p>", desarrollo: [ "$A=\\begin{bmatrix}3&-2\\\\-5&4\\end{bmatrix}$, $\\det A=12-10=2\\neq0$.", "$A_1(b)=\\begin{bmatrix}6&-2\\\\8&4\\end{bmatrix}$, $\\det A_1(b)=24+16=40$, luego $x_1=40/2=20$.", "$A_2(b)=\\begin{bmatrix}3&6\\\\-5&8\\end{bmatrix}$, $\\det A_2(b)=24+30=54$, luego $x_2=54/2=27$.", "Verificación: $3(20)-2(27)=6$ y $-5(20)+4(27)=8$." ], respuesta: "$x_1=20$, $x_2=27$." },
      { titulo: "Sistema con parámetro", enunciado: "<p>Determine para qué $s$ el sistema $3s\\,x_1-2x_2=4$, $-6x_1+s\\,x_2=1$ tiene solución única y descríbala con Cramer.</p>", desarrollo: [ "$\\det A=(3s)(s)-(-2)(-6)=3s^2-12=3(s^2-4)$.", "Solución única $\\iff \\det A\\neq0\\iff s\\neq\\pm2$.", "$x_1=\\dfrac{\\det\\begin{bmatrix}4&-2\\\\1&s\\end{bmatrix}}{3(s^2-4)}=\\dfrac{4s+2}{3(s^2-4)}$.", "$x_2=\\dfrac{\\det\\begin{bmatrix}3s&4\\\\-6&1\\end{bmatrix}}{3(s^2-4)}=\\dfrac{3s+24}{3(s^2-4)}=\\dfrac{s+8}{s^2-4}$." ], respuesta: "Única para $s\\neq\\pm2$, con $x_1=\\dfrac{4s+2}{3(s^2-4)}$ y $x_2=\\dfrac{s+8}{s^2-4}$." },
      { titulo: "Inversa mediante la adjunta", enunciado: "<p>Encuentre $A^{-1}$ para $A=\\begin{bmatrix}2&1&3\\\\1&-1&1\\\\1&4&-2\\end{bmatrix}$, sabiendo que $C_{11}=-2$, $C_{12}=3$, $C_{13}=5$, $C_{21}=14$, $C_{22}=-7$, $C_{23}=-7$, $C_{31}=4$, $C_{32}=1$, $C_{33}=-3$.</p>", desarrollo: [ "Calculamos $\\det A=a_{11}C_{11}+a_{12}C_{12}+a_{13}C_{13}=2(-2)+1(3)+3(5)=-4+3+15=14$.", "La adjunta es la transpuesta de la matriz de cofactores: $\\operatorname{adj}A=\\begin{bmatrix}-2&14&4\\\\3&-7&1\\\\5&-7&-3\\end{bmatrix}$.", "$A^{-1}=\\dfrac{1}{14}\\operatorname{adj}A=\\dfrac{1}{14}\\begin{bmatrix}-2&14&4\\\\3&-7&1\\\\5&-7&-3\\end{bmatrix}$." ], respuesta: "$A^{-1}=\\dfrac{1}{14}\\begin{bmatrix}-2&14&4\\\\3&-7&1\\\\5&-7&-3\\end{bmatrix}$" },
    ],
    ejercicios: [
      { titulo: "Cramer básico", dificultad: "basico", enunciado: "<p>Resuelva por Cramer: $2x+3y=8$, $x-y=1$.</p>", pista: "Construya $A_1(b)$ y $A_2(b)$ reemplazando columnas.", desarrollo: [ "$\\det A=\\det\\begin{bmatrix}2&3\\\\1&-1\\end{bmatrix}=-2-3=-5$.", "$x=\\dfrac{\\det\\begin{bmatrix}8&3\\\\1&-1\\end{bmatrix}}{-5}=\\dfrac{-8-3}{-5}=\\dfrac{11}{5}$.", "$y=\\dfrac{\\det\\begin{bmatrix}2&8\\\\1&1\\end{bmatrix}}{-5}=\\dfrac{2-8}{-5}=\\dfrac{6}{5}$." ], respuesta: "$x=\\dfrac{11}{5}$, $y=\\dfrac{6}{5}$." },
      { titulo: "Inversa 2×2 por adjunta", dificultad: "basico", enunciado: "<p>Use la fórmula $A^{-1}=\\frac{1}{\\det A}\\operatorname{adj}A$ para $A=\\begin{bmatrix}2&1\\\\5&3\\end{bmatrix}$.</p>", pista: "La adjunta de una $2\\times2$ intercambia la diagonal y cambia el signo de las otras entradas.", desarrollo: [ "$\\det A=2\\cdot3-1\\cdot5=6-5=1$.", "$\\operatorname{adj}A=\\begin{bmatrix}3&-1\\\\-5&2\\end{bmatrix}$.", "$A^{-1}=\\frac{1}{1}\\begin{bmatrix}3&-1\\\\-5&2\\end{bmatrix}$." ], respuesta: "$A^{-1}=\\begin{bmatrix}3&-1\\\\-5&2\\end{bmatrix}$" },
      { titulo: "Cramer 3×3", dificultad: "intermedio", enunciado: "<p>Resuelva por Cramer: $x+y+z=6$, $2x-y+z=3$, $x+2y-z=2$.</p>", pista: "Calcule $\\det A$ y luego los tres determinantes reemplazando una columna por $b$ cada vez.", desarrollo: [ "$\\det A=\\det\\begin{bmatrix}1&1&1\\\\2&-1&1\\\\1&2&-1\\end{bmatrix}=7\\neq0$.", "$\\det A_1(b)=\\det\\begin{bmatrix}6&1&1\\\\3&-1&1\\\\2&2&-1\\end{bmatrix}=7$, luego $x=7/7=1$.", "$\\det A_2(b)=\\det\\begin{bmatrix}1&6&1\\\\2&3&1\\\\1&2&-1\\end{bmatrix}=14$, luego $y=14/7=2$.", "$\\det A_3(b)=\\det\\begin{bmatrix}1&1&6\\\\2&-1&3\\\\1&2&2\\end{bmatrix}=21$, luego $z=21/7=3$." ], respuesta: "$x=1$, $y=2$, $z=3$." },
      { titulo: "Inversa 3×3 por adjunta", dificultad: "avanzado", enunciado: "<p>Calcule $A^{-1}$ para $A=\\begin{bmatrix}1&0&1\\\\0&1&1\\\\1&1&1\\end{bmatrix}$ usando la adjunta.</p>", pista: "Calcule los nueve cofactores y transponga.", desarrollo: [ "$\\det A=-1$.", "Cofactores: $C_{11}=0$, $C_{12}=1$, $C_{13}=-1$, $C_{21}=1$, $C_{22}=0$, $C_{23}=-1$, $C_{31}=-1$, $C_{32}=-1$, $C_{33}=1$.", "$\\operatorname{adj}A=\\begin{bmatrix}0&1&-1\\\\1&0&-1\\\\-1&-1&1\\end{bmatrix}$.", "$A^{-1}=\\dfrac{1}{-1}\\begin{bmatrix}0&1&-1\\\\1&0&-1\\\\-1&-1&1\\end{bmatrix}=\\begin{bmatrix}0&-1&1\\\\-1&0&1\\\\1&1&-1\\end{bmatrix}$." ], respuesta: "$A^{-1}=\\begin{bmatrix}0&-1&1\\\\-1&0&1\\\\1&1&-1\\end{bmatrix}$" },
    ],
    erroresComunes: [
      "Olvidar que la adjunta es la <b>transpuesta</b> de la matriz de cofactores.",
      "Aplicar la regla de Cramer cuando $\\det A=0$ (no hay solución única).",
      "Reemplazar la columna equivocada al formar $A_i(b)$.",
      "Equivocar los signos de los cofactores al construir la adjunta.",
      "Usar Cramer para sistemas grandes por eficiencia, cuando la reducción de filas es mejor.",
    ],
    checklist: [
      "Construyo $A_i(b)$ reemplazando correctamente la columna $i$.",
      "Aplico la regla de Cramer y verifico el resultado en el sistema.",
      "Calculo la adjunta como transpuesta de la matriz de cofactores.",
      "Uso $A^{-1}=\\frac{1}{\\det A}\\operatorname{adj}A$ en matrices pequeñas.",
      "Reconozco cuándo $\\det A=0$ impide aplicar ambos métodos.",
    ],
    autoevaluacion: [
      { pregunta: "La adjunta de $A$ se define como:", opciones: [ "La transpuesta de la matriz de cofactores", "La matriz de cofactores", "La inversa de $A$", "La matriz de submatrices" ], correcta: 0, explicacion: "$\\operatorname{adj}A=(C_{ij})^{T}$, la transpuesta de la matriz de cofactores." },
      { pregunta: "La regla de Cramer es válida cuando:", opciones: [ "$A$ es cuadrada e invertible", "$A$ es cualquier matriz", "$\\det A=0$", "$A$ es triangular únicamente" ], correcta: 0, explicacion: "Requiere $A$ invertible ($\\det A\\neq0$) para dar la solución única $x_i=\\det A_i(b)/\\det A$." },
      { pregunta: "Si $A=\\begin{bmatrix}2&1\\\\5&3\\end{bmatrix}$, entonces $A^{-1}$ es:", opciones: [ "$\\begin{bmatrix}3&-1\\\\-5&2\\end{bmatrix}$", "$\\begin{bmatrix}2&-1\\\\-5&3\\end{bmatrix}$", "$\\begin{bmatrix}3&1\\\\5&2\\end{bmatrix}$", "$\\begin{bmatrix}-3&1\\\\5&-2\\end{bmatrix}$" ], correcta: 0, explicacion: "$\\det A=1$ y $\\operatorname{adj}A=\\begin{bmatrix}3&-1\\\\-5&2\\end{bmatrix}$, así $A^{-1}=\\operatorname{adj}A$." },
    ],
    referencias: [ { titulo: "Clase 20 — Regla de Cramer y fórmula de inversa (PDF)", ruta: "recursos/clases/clase-20.pdf" } ],
  });
})();
