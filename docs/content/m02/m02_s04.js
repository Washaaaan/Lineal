/* Módulo 2 · Sección 4 — Algoritmo de reducción por filas (Gauss-Jordan) */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m02_s04", modulo: 2, moduloNombre: "Módulo 2 · Sistemas de ecuaciones lineales", orden: 4,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Algoritmo de reducción por filas (Gauss-Jordan)",
    objetivo: "Aplicar sistemáticamente el algoritmo de reducción por filas (Gauss) para obtener la forma escalonada y su extensión (Gauss-Jordan) para obtener la forma escalonada reducida, identificando posiciones y columnas pivote.",
    fuente: "Clase 09 · Apunte Clase 8 (Algoritmo de Gauss) · Lay §1.2 · Poole §2.2",
    prerrequisitos: ["Forma escalonada y escalonada reducida", "Operaciones elementales de filas", "Matriz ampliada"],
    teoria: [
      { tipo: "texto", html: "<p>La reducción por filas es un <b>algoritmo</b>: una receta finita y ordenada de pasos que, partiendo de cualquier matriz, llega siempre a una forma escalonada y, si se continúa, a la forma escalonada reducida.</p>" },
      { tipo: "definicion", titulo: "Posiciones y columnas pivote", html: "<p>Una <b>posición pivote</b> es la ubicación de un $1$ principal en la forma escalonada reducida de $A$. Las columnas que contienen posiciones pivote se llaman <b>columnas pivote</b>. El número de pivotes es el <b>rango</b> de la matriz, $\\rank(A)$.</p>" },
      { tipo: "teorema", titulo: "Algoritmo de reducción por filas (Gauss)", html: "<p>Para llevar una matriz a la forma escalonada:</p><ol><li>Localizar la <b>columna no nula más a la izquierda</b> (columna pivote).</li><li>Elegir un <b>pivote</b> en esa columna (intercambiar filas si es necesario).</li><li>Crear <b>ceros debajo</b> del pivote con operaciones elementales.</li><li><b>Cubrir</b> la fila y la columna del pivote y repetir sobre la submatriz inferior.</li></ol><p><b>Paso adicional (Gauss-Jordan)</b> para la forma escalonada reducida: hacer ceros <i>arriba</i> de cada pivote y convertir cada pivote en $1$ mediante escalamiento.</p>" },
      { tipo: "grafico", spec: { tipo: "tabla", headers: ["Paso", "$F_1$", "$F_2$", "$F_3$"], rows: [["Inicio", "$[1\\;1\\;1]$", "$[1\\;2\\;3]$", "$[2\\;3\\;4]$"], ["$F_2\\to F_2-F_1$", "$[1\\;1\\;1]$", "$[0\\;1\\;2]$", "$[2\\;3\\;4]$"], ["$F_3\\to F_3-2F_1$", "$[1\\;1\\;1]$", "$[0\\;1\\;2]$", "$[0\\;1\\;2]$"], ["$F_3\\to F_3-F_2$", "$[1\\;1\\;1]$", "$[0\\;1\\;2]$", "$[0\\;0\\;0]$"]] } },
      { tipo: "nota", titulo: "Estrategia de cálculo eficiente (Lay §1.2)", html: "<p>En una columna pivote conviene elegir como pivote un $1$ si está disponible, o bien un número que haga las cuentas sencillas. Así se evitan fracciones innecesarias y se reduce el riesgo de errores.</p>" },
      { tipo: "nota", titulo: "Las operaciones de fila son reversibles (Poole §2.2)", html: "<p>Cada operación elemental tiene su inversa: el intercambio $F_i\\leftrightarrow F_j$ es su propia inversa; $(F_i\\to cF_i)^{-1}$ es $F_i\\to\\tfrac1cF_i$; y $(F_i\\to F_i+cF_j)^{-1}$ es $F_i\\to F_i-cF_j$. Por eso la reducción no pierde información.</p>" },
    ],
    ejemplos: [
      { titulo: "Reducción completa paso a paso", enunciado: "Aplique el algoritmo a $A=\\begin{bmatrix}1&1&1\\\\ 1&2&3\\\\ 2&3&4\\end{bmatrix}$ y obtenga su forma escalonada y su FER.", desarrollo: [ "$F_2\\to F_2-F_1$ y $F_3\\to F_3-2F_1$: $\\begin{bmatrix}1&1&1\\\\ 0&1&2\\\\ 0&1&2\\end{bmatrix}$.", "$F_3\\to F_3-F_2$: $\\begin{bmatrix}1&1&1\\\\ 0&1&2\\\\ 0&0&0\\end{bmatrix}$ (forma escalonada).", "Paso adicional: $F_1\\to F_1-F_2$: $\\begin{bmatrix}1&0&-1\\\\ 0&1&2\\\\ 0&0&0\\end{bmatrix}$ (FER).", "Las columnas pivote son la 1 y la 2; $\\rank(A)=2$." ], respuesta: "Escalonada $\\begin{bmatrix}1&1&1\\\\ 0&1&2\\\\ 0&0&0\\end{bmatrix}$; FER $\\begin{bmatrix}1&0&-1\\\\ 0&1&2\\\\ 0&0&0\\end{bmatrix}$." },
      { titulo: "Intercambio de filas necesario", enunciado: "Reduzca $A=\\begin{bmatrix}0&3&-6\\\\ 3&-7&8\\\\ 3&-9&12\\end{bmatrix}$ a la forma escalonada.", desarrollo: [ "La columna pivote es la 1, pero su primera entrada es $0$: intercambiamos $F_1\\leftrightarrow F_2$.", "Queda $\\begin{bmatrix}3&-7&8\\\\ 0&3&-6\\\\ 3&-9&12\\end{bmatrix}$.", "$F_3\\to F_3-F_1$: $\\begin{bmatrix}3&-7&8\\\\ 0&3&-6\\\\ 0&-2&4\\end{bmatrix}$.", "$F_3\\to F_3+\\tfrac23 F_2$: las entradas $-2+\\tfrac23(3)=0$ y $4+\\tfrac23(-6)=0$." ], respuesta: "$\\begin{bmatrix}3&-7&8\\\\ 0&3&-6\\\\ 0&0&0\\end{bmatrix}$; pivotes en las columnas 1 y 2." },
      { titulo: "Aplicación: cepas de bacterias", enunciado: "Tres cepas consumen alimento según la matriz $\\begin{bmatrix}1&1&1&1500\\\\ 1&2&3&3000\\\\ 1&3&5&4500\\end{bmatrix}$. ¿Cuántas bacterias de cada cepa pueden coexistir consumiendo todo el alimento?", desarrollo: [ "$F_2\\to F_2-F_1$: $[0,1,2,1500]$; $F_3\\to F_3-F_1$: $[0,2,4,3000]$.", "$F_3\\to F_3-2F_2$: $[0,0,0,0]$; no hay fila imposible: el sistema es consistente.", "Resolviendo $x_2+2x_3=1500$ y $x_1+x_2+x_3=1500$: $x_1=x_3=t$ y $x_2=1500-2t$.", "La variable $x_3=t$ es libre, con $0\\le t\\le 750$ para cantidades no negativas." ], respuesta: "$(x_1,x_2,x_3)=(t,\\,1500-2t,\\,t)$ con $0\\le t\\le750$." },
    ],
    ejercicios: [
      { titulo: "Posiciones pivote", dificultad: "basico", enunciado: "Para $A=\\begin{bmatrix}0&-3&-6&4&9\\\\ -1&-2&-1&3&1\\\\ -2&-3&0&3&-1\\\\ 1&4&5&-9&-7\\end{bmatrix}$, identifique las columnas pivote tras reducir.", pista: "Ubique la primera entrada no nula de cada fila escalonada.", desarrollo: [ "Intercambiando filas se lleva un $1$ a la primera posición.", "Tras el algoritmo quedan pivotes en las columnas 1, 2, 4 y 5.", "La columna 3 no es pivote porque es combinación de las anteriores." ], respuesta: "Columnas pivote: 1, 2, 4 y 5 ($\\rank(A)=4$)." },
      { titulo: "Reducción con intercambio", dificultad: "basico", enunciado: "Lleve $\\begin{bmatrix}2&4&-2\\\\ 1&2&3\\end{bmatrix}$ a la forma escalonada.", pista: "Puede intercambiar para tener un pivote $1$.", desarrollo: [ "Intercambio $F_1\\leftrightarrow F_2$: $\\begin{bmatrix}1&2&3\\\\ 2&4&-2\\end{bmatrix}$.", "$F_2\\to F_2-2F_1$: $\\begin{bmatrix}1&2&3\\\\ 0&0&-8\\end{bmatrix}$.", "Ya está escalonada, con pivotes en las columnas 1 y 3." ], respuesta: "$\\begin{bmatrix}1&2&3\\\\ 0&0&-8\\end{bmatrix}$." },
      { titulo: "Hasta la FER", dificultad: "intermedio", enunciado: "Reduzca $\\begin{bmatrix}1&3&2\\\\ 2&7&5\\\\ 2&8&8\\end{bmatrix}$ a la forma escalonada reducida.", pista: "Primero baje los ceros; luego limpia arriba de cada pivote.", desarrollo: [ "$F_2\\to F_2-2F_1$: $[0,1,1]$; $F_3\\to F_3-2F_1$: $[0,2,4]$.", "$F_3\\to F_3-2F_2$: $[0,0,2]$; escalo $F_3\\to\\tfrac12F_3$: $[0,0,1]$.", "$F_1\\to F_1-2F_3$ y $F_2\\to F_2-F_3$; luego $F_1\\to F_1-3F_2$: queda $\\begin{bmatrix}1&0&0\\\\ 0&1&0\\\\ 0&0&1\\end{bmatrix}$." ], respuesta: "$\\begin{bmatrix}1&0&0\\\\ 0&1&0\\\\ 0&0&1\\end{bmatrix}$ (rango 3)." },
      { titulo: "Algoritmo en un SEL", dificultad: "avanzado", enunciado: "Use la reducción por filas para resolver $\\begin{cases}x_1-2x_2+x_3=0\\\\ 2x_2-8x_3=8\\\\ -4x_1+5x_2+9x_3=-9\\end{cases}$.", pista: "Reduzca la matriz ampliada $[\\,A\\;b\\,]$ a la FER.", desarrollo: [ "$F_1$ pivote; $F_3\\to F_3+4F_1$: $[0,-3,13,-9]$.", "Escalo $F_2\\to\\tfrac12F_2$: $[0,1,-4,4]$; luego $F_3\\to F_3+3F_2$: $[0,0,1,3]$.", "Limpio arriba: $F_2\\to F_2+4F_3$ y $F_1\\to F_1-F_3$, después $F_1\\to F_1+2F_2$.", "Se obtiene $\\begin{bmatrix}1&0&0&29\\\\ 0&1&0&16\\\\ 0&0&1&3\\end{bmatrix}$." ], respuesta: "$(x_1,x_2,x_3)=(29,16,3)$: solución única." },
    ],
    erroresComunes: [
      "Olvidar cubrir la fila y columna del pivote al pasar a la submatriz siguiente.",
      "No intercambiar filas cuando el pivote natural es cero.",
      "Al hacer ceros, modificar también las filas que ya usó como pivote.",
      "Detenerse en la forma escalonada cuando se pide la forma escalonada reducida.",
    ],
    checklist: [
      "Localizo la columna pivote más a la izquierda correctamente.",
      "Intercambio filas para obtener un pivote conveniente.",
      "Genero ceros debajo de cada pivote y luego arriba para la FER.",
      "Identifico posiciones y columnas pivote y el rango de la matriz.",
      "Aplico el algoritmo a una matriz ampliada para resolver un SEL.",
    ],
    autoevaluacion: [
      { pregunta: "En el algoritmo de Gauss, tras elegir un pivote el paso siguiente es:", opciones: [ "Crear ceros debajo del pivote", "Escalar a 1 todas las filas", "Sumar todas las filas", "Eliminar la última columna" ], correcta: 0, explicacion: "Se elimina debajo del pivote y se repite sobre la submatriz." },
      { pregunta: "El número de columnas pivote de una matriz coincide con:", opciones: [ "Su rango", "Su número de filas siempre", "Su número de columnas siempre", "El tamaño del sistema" ], correcta: 0, explicacion: "Cada pivote aporta uno al rango." },
      { pregunta: "Para pasar de la forma escalonada a la FER se debe, además:", opciones: [ "Hacer ceros arriba de los pivotes y escalarlos a 1", "Multiplicar por cero una fila", "Eliminar todas las filas nulas a mano", "Intercambiar siempre la primera y la última fila" ], correcta: 0, explicacion: "El paso adicional de Gauss-Jordan hace eso." },
    ],
    referencias: [ { titulo: "Clase 09 — Algoritmo de reducción de filas (PDF)", ruta: "recursos/clases/clase-09.pdf" }, { titulo: "Apunte Clase 8 (Algoritmo de Gauss, PDF)", ruta: "recursos/apuntes/apunte-clase-08.pdf" } ],
  });
})();
