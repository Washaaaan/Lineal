/* Módulo 2 · Sección 3 — Forma escalonada y forma escalonada reducida */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m02_s03", modulo: 2, moduloNombre: "Módulo 2 · Sistemas de ecuaciones lineales", orden: 3,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Forma escalonada y forma escalonada reducida",
    objetivo: "Identificar entradas principales y decidir si una matriz está en forma escalonada o en forma escalonada reducida, y reconocer que toda matriz tiene una única forma escalonada reducida por filas.",
    fuente: "Clase 08 · Apunte Clase 8 (Algoritmo de Gauss) · Lay §1.2 · Poole §2.2",
    prerrequisitos: ["Matrices y matriz ampliada", "Operaciones elementales de filas", "Equivalencia por filas"],
    teoria: [
      { tipo: "texto", html: "<p>Ya sabemos que las operaciones de filas no cambian el conjunto solución de un SEL. La pregunta natural es: <i>¿hasta dónde aplicar esas operaciones?</i> La respuesta es: hasta alcanzar una <b>forma escalonada</b> (o, más aún, la <b>forma escalonada reducida</b>).</p>" },
      { tipo: "definicion", titulo: "Entrada principal", html: "<p>Se llama <b>entrada principal</b> (o simplemente <i>pivote</i>) de una fila a la primera entrada no nula de esa fila, leyendo de izquierda a derecha.</p>" },
      { tipo: "definicion", titulo: "Matriz en forma escalonada", html: "<p>Una matriz está en <b>forma escalonada</b> (por filas) si cumple:</p><ol><li>Todas las filas no nulas están <i>arriba</i> de las filas nulas.</li><li>La entrada principal de cada fila aparece a la <i>derecha</i> de la entrada principal de la fila superior.</li><li>Todas las entradas <i>debajo</i> de cada entrada principal son ceros.</li></ol><p>Esquema (los $\\star$ son entradas principales, $\\ast$ entradas arbitrarias):</p>$$\\begin{bmatrix}\\star&\\ast&\\ast&\\ast\\\\ 0&0&\\star&\\ast\\\\ 0&0&0&0\\end{bmatrix}$$" },
      { tipo: "grafico", spec: { tipo: "tabla", headers: ["", "$x_1$", "$x_2$", "$x_3$", "b"], rows: [["$F_1$", "2", "−3", "5", "1"], ["$F_2$", "0", "0", "4", "−2"], ["$F_3$", "0", "0", "0", "0"]] } },
      { tipo: "definicion", titulo: "Matriz en forma escalonada reducida", html: "<p>Una matriz está en <b>forma escalonada reducida</b> (FER) si, además de las condiciones anteriores:</p><ol start='4'><li>Cada entrada principal es igual a $1$.</li><li>Cada entrada principal es el <i>único</i> número distinto de cero en su columna.</li></ol><p>Esquema:</p>$$\\begin{bmatrix}1&\\ast&0&\\ast\\\\ 0&0&1&\\ast\\\\ 0&0&0&0\\end{bmatrix}$$" },
      { tipo: "teorema", titulo: "Unicidad de la forma escalonada reducida", html: "<p>Toda matriz es equivalente por filas a una y solo una matriz en <b>forma escalonada reducida</b>. En cambio, la forma escalonada (no reducida) <i>no</i> es única.</p>" },
      { tipo: "nota", titulo: "Equivalencia por filas (Lay §1.2)", html: "<p>Si $A$ se transforma en $B$ mediante operaciones de filas, decimos que $A$ y $B$ son <b>equivalentes por filas</b>. Si dos matrices ampliadas son equivalentes por filas, los SEL correspondientes tienen el <b>mismo conjunto solución</b>. El recíproco es <i>falso</i>: dos matrices con el mismo conjunto solución pueden no ser equivalentes por filas si una tiene ecuaciones redundantes (filas nulas) que la otra no.</p>" },
      { tipo: "nota", titulo: "Filas nulas y solución (Lay §1.2)", html: "<p>Una fila nula $[0\\;\\cdots\\;0\\,|\\,0]$ aporta la ecuación $0=0$, que no restringe las variables. Por eso puede aparecer o desaparecer al reducir sin cambiar las soluciones. Una fila $[0\\;\\cdots\\;0\\,|\\,b]$ con $b\\neq0$, en cambio, es la ecuación $0=b$, imposible.</p>" },
    ],
    ejemplos: [
      { titulo: "¿Está en forma escalonada?", enunciado: "Decida si $\\begin{bmatrix}1&-2&5\\\\ 0&0&0\\\\ 0&3&-4\\end{bmatrix}$ está en forma escalonada y justifique.", desarrollo: [ "La fila 2 es nula y la fila 3 no lo es.", "Esto viola la regla 1 (las filas no nulas deben ir arriba de las nulas).", "Por lo tanto no está en forma escalonada; bastaría intercambiar $F_2\\leftrightarrow F_3$ para arreglarlo." ], respuesta: "No está en forma escalonada (fila nula por encima de una no nula)." },
      { titulo: "¿Está en forma escalonada reducida?", enunciado: "Analice $\\begin{bmatrix}1&4&0&2&0\\\\ 0&0&1&-3&0\\\\ 0&0&0&0&1\\end{bmatrix}$.", desarrollo: [ "Cada entrada principal es $1$ y aparecen escalonadas hacia la derecha. ✓", "En las columnas de los pivotes (1, 3 y 5) no hay otros números distintos de cero. ✓", "Cumple las cinco condiciones: está en forma escalonada reducida." ], respuesta: "Sí, está en forma escalonada reducida." },
      { titulo: "Reducir a la forma escalonada reducida", enunciado: "Lleve $A=\\begin{bmatrix}1&-2&1\\\\ 2&-5&3\\end{bmatrix}$ a su forma escalonada reducida.", desarrollo: [ "Reemplazo $F_2\\to F_2-2F_1$: $\\begin{bmatrix}1&-2&1\\\\ 0&-1&1\\end{bmatrix}$.", "Escalo $F_2\\to -F_2$: $\\begin{bmatrix}1&-2&1\\\\ 0&1&-1\\end{bmatrix}$.", "Hago cero arriba del pivote: $F_1\\to F_1+2F_2$: $\\begin{bmatrix}1&0&-1\\\\ 0&1&-1\\end{bmatrix}$.", "Cada pivote es $1$ y es el único no nulo de su columna: FER alcanzada." ], respuesta: "$\\begin{bmatrix}1&0&-1\\\\ 0&1&-1\\end{bmatrix}$." },
    ],
    ejercicios: [
      { titulo: "Forma escalonada", dificultad: "basico", enunciado: "¿Está $\\begin{bmatrix}2&4&-1&6\\\\ 0&3&2&0\\\\ 0&1&5&-2\\\\ 0&0&0&0\\end{bmatrix}$ en forma escalonada? Justifique.", pista: "Revise las tres condiciones, sobre todo las entradas bajo cada pivote.", desarrollo: [ "La fila nula está al final. ✓", "Los pivotes van escalonados hacia la derecha. ✓", "Pero en la columna 2, bajo el pivote $3$ de $F_2$ hay un $1$ en $F_3$: viola la condición 3." ], respuesta: "No: hay un número distinto de cero bajo un pivote (el $1$ de la fila 3)." },
      { titulo: "Reconocer la FER", dificultad: "basico", enunciado: "¿Está $\\begin{bmatrix}1&-2&0\\\\ 0&0&1\\\\ 0&0&0\\end{bmatrix}$ en forma escalonada reducida?", pista: "Verifique pivotes $=1$ y columnas pivote limpias.", desarrollo: [ "Los pivotes son $1$ (columnas 1 y 3).", "En la columna 1 el único no nulo es el pivote; en la columna 3 también.", "Las filas nulas están al final." ], respuesta: "Sí, está en forma escalonada reducida." },
      { titulo: "Reducción completa", dificultad: "intermedio", enunciado: "Reduzca $\\begin{bmatrix}1&2&3\\\\ 2&4&7\\end{bmatrix}$ a la forma escalonada reducida.", pista: "Primero elimine debajo del pivote de $F_1$, luego arriba del de $F_2$.", desarrollo: [ "$F_2\\to F_2-2F_1$: $\\begin{bmatrix}1&2&3\\\\ 0&0&1\\end{bmatrix}$.", "Haga cero arriba del pivote: $F_1\\to F_1-3F_2$: $\\begin{bmatrix}1&2&0\\\\ 0&0&1\\end{bmatrix}$.", "Los pivotes ya son $1$ y sus columnas están limpias." ], respuesta: "$\\begin{bmatrix}1&2&0\\\\ 0&0&1\\end{bmatrix}$ (la columna 2 no es pivote)." },
      { titulo: "Comparar equivalencia", dificultad: "avanzado", enunciado: "Explique por qué $\\begin{bmatrix}2&-3&5&1\\\\ 0&0&4&-2\\end{bmatrix}$ y $\\begin{bmatrix}2&-3&5&1\\\\ 0&0&4&-2\\\\ 0&0&0&0\\end{bmatrix}$ no son equivalentes por filas, aunque tienen el mismo conjunto solución.", pista: "Piense en el rango (número de pivotes) y en filas nulas.", desarrollo: [ "La primera matriz no tiene filas nulas y la segunda sí.", "La forma escalonada reducida es única; al reducir ambas, la primera produce dos filas no nulas y la segunda una fila nula extra.", "Por lo tanto no pueden ser equivalentes por filas, aunque la fila nula no cambie las soluciones." ], respuesta: "No son equivalentes por filas: la segunda posee una fila nula que la primera no tiene, y la FER es única." },
    ],
    erroresComunes: [
      "Confundir la forma escalonada (no única) con la forma escalonada reducida (única).",
      "Pensar que un pivote debe ser 1 en la forma escalonada: en la escalonada puede ser cualquier número no nulo.",
      "Dejar una fila nula por encima de una fila no nula.",
      "Olvidar hacer ceros también <i>arriba</i> de los pivotes para llegar a la FER.",
    ],
    checklist: [
      "Identifico la entrada principal (primer número no nulo) de cada fila.",
      "Verifico las tres condiciones de la forma escalonada.",
      "Verifico las dos condiciones adicionales de la forma escalonada reducida.",
      "Comprendo que toda matriz tiene una única FER por filas.",
      "Relaciono equivalencia por filas con igual conjunto solución.",
    ],
    autoevaluacion: [
      { pregunta: "En la forma escalonada, cada entrada principal (pivote) debe ser:", opciones: [ "Cualquier número no nulo", "Siempre 1", "Siempre 0", "Un número negativo" ], correcta: 0, explicacion: "En la escala basta que no sea nula; que sea 1 se exige solo en la FER." },
      { pregunta: "La forma escalonada reducida de una matriz es:", opciones: [ "Única", "Siempre la matriz nula", "Igual a su traspuesta", "No siempre existe" ], correcta: 0, explicacion: "Toda matriz es equivalente por filas a una única FER." },
      { pregunta: "Dos matrices ampliadas equivalentes por filas tienen:", opciones: [ "El mismo conjunto solución", "El mismo tamaño de solución trivial siempre", "Distinto número de variables", "Nunca las mismas soluciones" ], correcta: 0, explicacion: "La equivalencia por filas preserva el conjunto solución del SEL." },
    ],
    referencias: [ { titulo: "Clase 08 — Forma escalonada y escalonada reducida (PDF)", ruta: "recursos/clases/clase-08.pdf" }, { titulo: "Apunte Clase 8 (Algoritmo de Gauss, PDF)", ruta: "recursos/apuntes/apunte-clase-08.pdf" } ],
  });
})();
