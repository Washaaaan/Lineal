/* Módulo 4 · Sección 3 — Cómo encontrar la inversa */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m04_s03", modulo: 4, moduloNombre: "Módulo 4 · Matrices, inversa y determinantes", orden: 3,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Cómo encontrar la inversa",
    objetivo: "Expresar operaciones de fila mediante matrices elementales, calcular A⁻¹ reduciendo [A|I] a [I|A⁻¹] y aplicar el Teorema de la Matriz Invertible para decidir invertibilidad.",
    fuente: "Clase 17 · Lay §2.2–2.3 · Poole §2.3",
    prerrequisitos: ["Operaciones con matrices", "La inversa de una matriz", "Algoritmo de reducción de filas"],
    teoria: [
      { tipo: "texto", html: "<p>La fórmula $2\\times2$ no sirve para matrices grandes. Necesitamos un <b>algoritmo</b>: reducir por filas la matriz aumentada $[A\\,|\\,I]$. Antes mostramos que cada operación de fila equivale a multiplicar por una <b>matriz elemental</b>.</p>" },
      { tipo: "definicion", titulo: "Matriz elemental", html: "<p>Una <b>matriz elemental</b> es la que se obtiene al realizar una única operación elemental de fila sobre una matriz identidad $I_m$.</p><p>Si una operación de fila lleva $A$ a $B$, entonces $B=EA$, donde $E$ es la elemental obtenida al aplicar la misma operación a $I_m$.</p>" },
      { tipo: "teorema", titulo: "Las elementales son invertibles", html: "<p>Toda matriz elemental $E$ es invertible, y su inversa es la matriz elemental del mismo tipo que deshace la operación (volviendo $E$ en $I$). Por ejemplo, si $E$ representa $F_i\\to F_i+cF_j$, entonces $E^{-1}$ representa $F_i\\to F_i-cF_j$.</p>" },
      { tipo: "teorema", titulo: "Algoritmo para calcular A⁻¹", html: "<p>Una matriz $A$ de $n\\times n$ es invertible si y solo si $A$ es equivalente por filas a $I_n$. En tal caso, cualquier secuencia de operaciones elementales que lleve $A$ a $I_n$ transforma $I_n$ en $A^{-1}$. Es decir:</p>$$[\\,A\\;|\\;I\\,]\\xrightarrow{\\text{reducir}}\\;[\\,I\\;|\\;A^{-1}\\,].$$<p>Si la reducción no alcanza la identidad a la izquierda, entonces $A$ no es invertible.</p>" },
      { tipo: "nota", titulo: "¿Por qué funciona? (Lay §2.2)", html: "<p>Buscar $X$ con $AX=I$ equivale a resolver a la vez los sistemas $Ax_i=e_i$, donde $x_i$ es la columna $i$ de $X$ y $e_i$ es la columna $i$ de $I$. Al aumentar con $I$ resolvemos todos simultáneamente: obtener $I$ a la izquierda significa que $X$ es exactamente la inversa.</p>" },
      { tipo: "teorema", titulo: "Teorema de la Matriz Invertible", html: "<p>Sea $A$ de $n\\times n$. Los siguientes enunciados son <b>equivalentes</b>:</p><ul><li>(a) $A$ es invertible.</li><li>(b) $A$ es equivalente por filas a $I_n$.</li><li>(c) $A$ tiene $n$ posiciones pivote.</li><li>(d) $Ax=0$ tiene solo la solución trivial.</li><li>(e) Las columnas de $A$ son linealmente independientes.</li><li>(f) $x\\mapsto Ax$ es inyectiva (uno a uno).</li><li>(g) $Ax=b$ tiene solución para toda $b\\in\\R^n$.</li><li>(h) Las columnas de $A$ generan $\\R^n$.</li><li>(i) $x\\mapsto Ax$ es sobreyectiva ($\\R^n$ sobre $\\R^n$).</li><li>(j) Existe $C$ con $CA=I$.</li><li>(k) Existe $D$ con $AD=I$.</li><li>(l) $A^{T}$ es invertible.</li></ul>" },
      { tipo: "nota", titulo: "Transformaciones invertibles (Poole §2.3)", html: "<p>Una transformación lineal $T:\\R^n\\to\\R^n$ es invertible si existe $S$ con $S(T(x))=x$ y $T(S(x))=x$ para todo $x$. Si $A$ es la matriz estándar de $T$, entonces $T$ es invertible si y solo si $A$ es invertible, y $T^{-1}(x)=A^{-1}x$. Toda transformación lineal inyectiva de $\\R^n$ en $\\R^n$ es automáticamente invertible.</p>" },
      { tipo: "grafico", spec: { tipo: "transformacion2d", matriz: [[0, 1], [1, 0]], titulo: "Matriz elemental de intercambio: reflexión sobre y=x" } },
    ],
    ejemplos: [
      { titulo: "Efecto de una matriz elemental", enunciado: "<p>Con $E_1=\\begin{bmatrix}1&0&0\\\\0&1&0\\\\-4&0&1\\end{bmatrix}$ y $A=\\begin{bmatrix}a&b&c\\\\d&e&f\\\\g&h&i\\end{bmatrix}$, calcule $E_1A$ y describa la operación de fila.</p>", desarrollo: [ "$E_1$ proviene de $I_3$ al hacer $F_3\\to F_3-4F_1$.", "El producto reemplaza la fila 3 de $A$ por $(g-4a,\\;h-4b,\\;i-4c)$.", "Es decir, $E_1A=\\begin{bmatrix}a&b&c\\\\d&e&f\\\\g-4a&h-4b&i-4c\\end{bmatrix}$.", "La operación de fila es $F_3\\to F_3-4F_1$." ], respuesta: "$E_1A$ realiza $F_3\\to F_3-4F_1$ sobre $A$." },
      { titulo: "Inversa por reducción de filas", enunciado: "<p>Encuentre la inversa de $A=\\begin{bmatrix}0&1&2\\\\1&0&3\\\\4&-3&8\\end{bmatrix}$, si existe.</p>", desarrollo: [ "Aumentamos: $[\\,A\\,|\\,I\\,]=\\begin{bmatrix}0&1&2&1&0&0\\\\1&0&3&0&1&0\\\\4&-3&8&0&0&1\\end{bmatrix}$.", "Reduciendo por filas se obtiene $[\\,I\\,|\\,A^{-1}\\,]$ (la columna izquierda llega a la identidad, así que $A$ es invertible).", "$[\\,I\\,|\\,A^{-1}\\,]=\\begin{bmatrix}1&0&0&-9/2&7&-3/2\\\\0&1&0&-2&4&-1\\\\0&0&1&3/2&-2&1/2\\end{bmatrix}$." ], respuesta: "$A^{-1}=\\begin{bmatrix}-9/2&7&-3/2\\\\-2&4&-1\\\\3/2&-2&1/2\\end{bmatrix}$" },
      { titulo: "Decidir invertibilidad con el TMI", enunciado: "<p>Use el Teorema de la Matriz Invertible para decidir si $A=\\begin{bmatrix}1&0&-2\\\\3&1&-2\\\\-5&-1&9\\end{bmatrix}$ es invertible.</p>", desarrollo: [ "La matriz $A$ es equivalente por filas a $\\begin{bmatrix}1&0&-2\\\\0&1&4\\\\0&0&3\\end{bmatrix}$.", "Esa forma escalonada tiene tres pivotes ($1,1,3$), uno por fila.", "Por el TMI, $n=3$ pivotes implican que $A$ es invertible." ], respuesta: "$A$ es invertible (tiene 3 pivotes)." },
    ],
    ejercicios: [
      { titulo: "Matriz elemental", dificultad: "basico", enunciado: "<p>¿Qué operación de fila representa $E=\\begin{bmatrix}1&0&0\\\\0&5&0\\\\0&0&1\\end{bmatrix}$? Escriba $EA$ para $A$ genérica $3\\times n$.</p>", pista: "Compare $E$ con $I_3$.", desarrollo: [ "$E$ se obtiene de $I_3$ multiplicando la fila 2 por $5$.", "Por lo tanto $EA$ multiplica la segunda fila de $A$ por $5$." ], respuesta: "Representa $F_2\\to5F_2$; $EA$ tiene su fila 2 igual a $5$ veces la de $A$." },
      { titulo: "Inversa por algoritmo", dificultad: "basico", enunciado: "<p>Calcule $A^{-1}$ para $A=\\begin{bmatrix}2&1\\\\1&1\\end{bmatrix}$ reduciendo $[A|I]$.</p>", pista: "Intercambie filas para evitar fracciones al inicio.", desarrollo: [ "$[A|I]=\\begin{bmatrix}2&1&1&0\\\\1&1&0&1\\end{bmatrix}$; intercambiamos: $\\begin{bmatrix}1&1&0&1\\\\2&1&1&0\\end{bmatrix}$.", "$F_2\\to F_2-2F_1$: $\\begin{bmatrix}1&1&0&1\\\\0&-1&1&-2\\end{bmatrix}$.", "$F_2\\to -F_2$: $\\begin{bmatrix}1&1&0&1\\\\0&1&-1&2\\end{bmatrix}$; luego $F_1\\to F_1-F_2$: $\\begin{bmatrix}1&0&1&-1\\\\0&1&-1&2\\end{bmatrix}$." ], respuesta: "$A^{-1}=\\begin{bmatrix}1&-1\\\\-1&2\\end{bmatrix}$" },
      { titulo: "Inversa 3×3", dificultad: "intermedio", enunciado: "<p>Encuentre la inversa de $A=\\begin{bmatrix}1&0&1\\\\0&1&1\\\\1&1&1\\end{bmatrix}$ usando el algoritmo.</p>", pista: "Use $F_3\\to F_3-F_1$ para crear un cero.", desarrollo: [ "$[A|I]$, con $F_3\\to F_3-F_1$: $\\begin{bmatrix}1&0&1&1&0&0\\\\0&1&1&0&1&0\\\\0&1&0&-1&0&1\\end{bmatrix}$.", "$F_2\\to F_2-F_3$: $\\begin{bmatrix}1&0&1&1&0&0\\\\0&0&1&1&1&-1\\\\0&1&0&-1&0&1\\end{bmatrix}$; intercambiamos $F_2\\leftrightarrow F_3$.", "$F_1\\to F_1-F_3$: $\\begin{bmatrix}1&0&0&0&-1&1\\\\0&1&0&-1&0&1\\\\0&0&1&1&1&-1\\end{bmatrix}$." ], respuesta: "$A^{-1}=\\begin{bmatrix}0&-1&1\\\\-1&0&1\\\\1&1&-1\\end{bmatrix}$" },
      { titulo: "Producto invertible", dificultad: "avanzado", enunciado: "<p>Demuestre que si $A$ y $B$ son cuadradas y $AB$ es invertible, entonces $A$ es invertible.</p>", pista: "Use que $AB$ tiene inversa y multiplique convenientemente.", desarrollo: [ "Como $AB$ es invertible, existe $C$ con $C(AB)=I$.", "Es decir, $(CA)B=I$, así que $B$ admite inversa por la izquierda y, por el TMI (enunciado (j)), $B$ es invertible.", "Entonces $A=(AB)B^{-1}$ es producto de matrices invertibles, por lo tanto $A$ es invertible." ], respuesta: "Verdadero: $A=(AB)B^{-1}$ y $B^{-1}$ existe, luego $A$ es invertible." },
    ],
    erroresComunes: [
      "Olvidar aplicar la misma operación de fila sobre el bloque derecho $I$ al reducir $[A|I]$.",
      "Concluir que $A$ es invertible si la reducción deja filas nulas (en realidad no lo es).",
      "Confundir la matriz elemental con su efecto: $EA$ aplica la operación a las filas de $A$.",
      "Invertir mentalmente el orden de las operaciones al construir $A^{-1}$.",
      "Creer que toda matriz con una columna de ceros aún puede ser invertible (no puede).",
    ],
    checklist: [
      "Reconozco una matriz elemental y la operación de fila que representa.",
      "Calculo $A^{-1}$ reduciendo $[A|I]$ a $[I|A^{-1}]$.",
      "Uso el Teorema de la Matriz Invertible para decidir invertibilidad por pivotes.",
      "Sé invertir una transformación lineal a partir de la inversa de su matriz.",
      "Detecto cuándo la reducción falla y por qué $A$ no es invertible.",
    ],
    autoevaluacion: [
      { pregunta: "Si al reducir $[A|I]$ la parte izquierda NO llega a $I$, entonces:", opciones: [ "$A$ no es invertible", "$A^{-1}=I$", "$A$ sí es invertible", "El sistema no tiene solución única necesariamente" ], correcta: 0, explicacion: "Solo si $A$ es equivalente por filas a $I$ existe $A^{-1}$; si no, $A$ no es invertible." },
      { pregunta: "Una matriz $A$ de $4\\times4$ es invertible si y solo si:", opciones: [ "Tiene 4 posiciones pivote", "Tiene alguna fila de ceros", "Sus columnas son linealmente dependientes", "$Ax=0$ tiene infinitas soluciones" ], correcta: 0, explicacion: "Por el TMI, $A$ es invertible si y solo si tiene $n=4$ pivotes." },
      { pregunta: "Si $E$ es la elemental que hace $F_1\\to F_1+3F_2$, su inversa $E^{-1}$ corresponde a:", opciones: [ "$F_1\\to F_1-3F_2$", "$F_1\\to F_1+\\tfrac13F_2$", "$F_1\\to 3F_1$", "$F_1\\leftrightarrow F_2$" ], correcta: 0, explicacion: "La operación inversa del reemplazo es restar: $F_1\\to F_1-3F_2$." },
    ],
    referencias: [ { titulo: "Clase 17 — Cómo encontrar la inversa (PDF)", ruta: "recursos/clases/clase-17.pdf" } ],
  });
})();
