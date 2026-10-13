/* Módulo 5 · Sección 6 — Matriz de cambio de base */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m05_s06", modulo: 5, moduloNombre: "Módulo 5 · Espacios vectoriales", orden: 6,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Matriz de cambio de base",
    objetivo: "Construir la matriz de cambio de coordenadas entre dos bases, usarla para convertir coordenadas y explotar que su inversa intercambia los roles de las bases.",
    fuente: "Clase 27 · Lay §4.7 · Poole §3.5",
    prerrequisitos: ["Sistemas de coordenadas", "Matriz inversa", "Bases"],
    teoria: [
      { tipo: "texto", html: "<p>Si un mismo vector tiene coordenadas distintas según la base elegida, conviene una herramienta que traduzca de una base a otra. Esa herramienta es la <b>matriz de cambio de coordenadas</b>.</p>" },
      { tipo: "teorema", titulo: "Existencia y forma de $P_{C\\leftarrow B}$", html: "<p>Sean $B=\\{b_1,\\dots,b_n\\}$ y $C=\\{c_1,\\dots,c_n\\}$ bases de un espacio vectorial $V$. Existe una única matriz $P_{C\\leftarrow B}$ de $n\\times n$ tal que</p>$$[x]_C=P_{C\\leftarrow B}\\,[x]_B.$$<p>Sus columnas son los vectores de $C$-coordenadas de los vectores de $B$:</p>$$P_{C\\leftarrow B}=\\begin{bmatrix}[b_1]_C & [b_2]_C & \\dots & [b_n]_C\\end{bmatrix}.$$" },
      { tipo: "nota", titulo: "Cómo calcularla en Rn (Lay §4.7)", html: "<p>Para obtener $P_{C\\leftarrow B}$ se reduce la matriz aumentada</p>$$[\\,c_1\\ c_2\\ \\cdots\\ c_n\\ |\\ b_1\\ b_2\\ \\cdots\\ b_n\\,]\\ \\longrightarrow\\ [\\,I\\ |\\ P_{C\\leftarrow B}\\,].$$<p>Es decir, se expresan los vectores de $B$ en la base $C$. Como $C$ es base, la parte izquierda siempre se reduce a la identidad.</p>" },
      { tipo: "teorema", titulo: "La inversa invierte las bases", html: "<p>$P_{C\\leftarrow B}$ es invertible y</p>$$(P_{C\\leftarrow B})^{-1}=P_{B\\leftarrow C}.$$<p>Así, para volver de $C$-coordenadas a $B$-coordenadas, se multiplica por la matriz inversa.</p>" },
      { tipo: "nota", titulo: "Cambio desde la base estándar (Lay §4.7)", html: "<p>Si $\\mathcal{E}$ es la base estándar de $\\R^n$ y $B=\\{b_1,\\dots,b_n\\}$, entonces</p>$$P_B=\\begin{bmatrix}b_1&b_2&\\dots&b_n\\end{bmatrix}$$<p>es la matriz que lleva $B$-coordenadas a coordenadas estándar: $x=P_B[x]_B$. En consecuencia $[x]_B=P_B^{-1}x$. Este es el caso más frecuente en los ejercicios.</p>" },
      { tipo: "grafico", spec: { tipo: "vectores2d", titulo: "El mismo x en dos bases: B={b1,b2} y C={c1,c2}", vectores: [ { x: 1, y: 0, x0: 0, y0: 0, label: "b1", color: "#1e5eff" }, { x: 1, y: 2, x0: 0, y0: 0, label: "b2", color: "#1e5eff" }, { x: 1, y: -0.5, x0: 0, y0: 0, label: "c1", color: "#00b894" }, { x: 0.5, y: 1, x0: 0, y0: 0, label: "c2", color: "#00b894" }, { x: 3, y: 2, x0: 0, y0: 0, label: "x", color: "#e17055" } ], rangeX: [-1, 4], rangeY: [-1, 4] } },
    ],
    ejemplos: [
      { titulo: "Cambio de coordenadas usando la relación entre bases", enunciado: "<p>Sean $B=\\{b_1,b_2\\}$ y $C=\\{c_1,c_2\\}$ bases de $V$ con $b_1=4c_1+c_2$ y $b_2=-6c_1+c_2$. Si $x=3b_1+b_2$, encuentre $[x]_C$.</p>", desarrollo: [ "Sustituimos las relaciones: $x=3(4c_1+c_2)+(-6c_1+c_2)$.", "Agrupamos: $x=(12-6)c_1+(3+1)c_2=6c_1+4c_2$.", "Los coeficientes en la base $C$ son directamente las coordenadas." ], respuesta: "$[x]_C=\\begin{bmatrix}6\\\\4\\end{bmatrix}$." },
      { titulo: "Matriz de cambio de base en R^2", enunciado: "<p>Sean $b_1=(-9,1)$, $b_2=(-5,-1)$, $c_1=(1,-4)$, $c_2=(3,-5)$, con $B=\\{b_1,b_2\\}$ y $C=\\{c_1,c_2\\}$. Encuentre $P_{C\\leftarrow B}$.</p>", desarrollo: [ "Formamos $[c_1\\ c_2\\ |\\ b_1\\ b_2]=\\begin{bmatrix}1&3&-9&-5\\\\-4&-5&1&-1\\end{bmatrix}$.", "Reduciendo se obtiene $\\begin{bmatrix}1&0&6&4\\\\0&1&-5&-3\\end{bmatrix}$.", "Las dos últimas columnas son $[b_1]_C$ y $[b_2]_C$." ], respuesta: "$P_{C\\leftarrow B}=\\begin{bmatrix}6&4\\\\-5&-3\\end{bmatrix}$." },
      { titulo: "Coordenadas usando la inversa", enunciado: "<p>Sean $b_1=(2,1)$, $b_2=(-1,1)$, $x=(4,5)$ y $B=\\{b_1,b_2\\}$. Determine $[x]_B$.</p>", desarrollo: [ "$P_B=\\begin{bmatrix}2&-1\\\\1&1\\end{bmatrix}$ lleva $B$-coordenadas a coordenadas estándar.", "Resolvemos $P_B[x]_B=x$ mediante $[P_B|x]$: $\\begin{bmatrix}2&-1&4\\\\1&1&5\\end{bmatrix}\\to\\begin{bmatrix}1&0&3\\\\0&1&2\\end{bmatrix}$.", "Así $[x]_B=(3,2)$, es decir $x=3b_1+2b_2$." ], respuesta: "$[x]_B=\\begin{bmatrix}3\\\\2\\end{bmatrix}$." },
    ],
    ejercicios: [
      { titulo: "Cambio de coordenadas básico", dificultad: "basico", enunciado: "<p>Con $b_1=c_1+2c_2$ y $b_2=3c_1-c_2$, si $x=b_1-b_2$, encuentre $[x]_C$.</p>", pista: "Sustituya y agrupe en $c_1,c_2$.", desarrollo: [ "$x=(c_1+2c_2)-(3c_1-c_2)$.", "Agrupando: $x=(1-3)c_1+(2+1)c_2=-2c_1+3c_2$." ], respuesta: "$[x]_C=\\begin{bmatrix}-2\\\\3\\end{bmatrix}$." },
      { titulo: "Coordenadas desde la matriz P_B", dificultad: "basico", enunciado: "<p>Sean $b_1=(1,0)$, $b_2=(1,2)$ y $x=(3,2)$. Use $P_B$ para hallar $[x]_B$.</p>", pista: "$P_B=[b_1\\ b_2]$; resuelva $P_B[x]_B=x$.", desarrollo: [ "$P_B=\\begin{bmatrix}1&1\\\\0&2\\end{bmatrix}$.", "$[P_B|x]=\\begin{bmatrix}1&1&3\\\\0&2&2\\end{bmatrix}\\to\\begin{bmatrix}1&0&2\\\\0&1&1\\end{bmatrix}$." ], respuesta: "$[x]_B=\\begin{bmatrix}2\\\\1\\end{bmatrix}$." },
      { titulo: "Matriz de cambio de base", dificultad: "intermedio", enunciado: "<p>Con $b_1=(-9,1)$, $b_2=(-5,-1)$, $c_1=(1,-4)$, $c_2=(3,-5)$, encuentre $P_{C\\leftarrow B}$.</p>", pista: "Reduzca $[c_1\\ c_2\\ |\\ b_1\\ b_2]$ a la identidad.", desarrollo: [ "$[c_1\\ c_2\\ |\\ b_1\\ b_2]=\\begin{bmatrix}1&3&-9&-5\\\\-4&-5&1&-1\\end{bmatrix}$.", "Reduciendo la parte izquierda a $I$ queda $\\begin{bmatrix}1&0&6&4\\\\0&1&-5&-3\\end{bmatrix}$.", "Las columnas de la derecha son las $C$-coordenadas de $b_1,b_2$." ], respuesta: "$P_{C\\leftarrow B}=\\begin{bmatrix}6&4\\\\-5&-3\\end{bmatrix}$." },
      { titulo: "Inversa y cambio inverso", dificultad: "avanzado", enunciado: "<p>Sean $b_1=(1,-3)$, $b_2=(-2,4)$, $c_1=(-7,9)$, $c_2=(-5,7)$. Sabiendo que $[b_1\\ b_2\\ |\\ c_1\\ c_2]$ reduce a $\\begin{bmatrix}1&0&5&3\\\\0&1&6&4\\end{bmatrix}$, encuentre $P_{B\\leftarrow C}$ y $P_{C\\leftarrow B}$.</p>", pista: "Primero identifique $P_{B\\leftarrow C}$ y luego invierta.", desarrollo: [ "De la reducción, $P_{B\\leftarrow C}=\\begin{bmatrix}5&3\\\\6&4\\end{bmatrix}$.", "$\\det P_{B\\leftarrow C}=20-18=2$, así que es invertible.", "$P_{C\\leftarrow B}=(P_{B\\leftarrow C})^{-1}=\\dfrac{1}{2}\\begin{bmatrix}4&-3\\\\-6&5\\end{bmatrix}$." ], respuesta: "$P_{B\\leftarrow C}=\\begin{bmatrix}5&3\\\\6&4\\end{bmatrix}$ y $P_{C\\leftarrow B}=\\begin{bmatrix}2&-\\frac{3}{2}\\\\-3&\\frac{5}{2}\\end{bmatrix}$." },
    ],
    erroresComunes: [
      "Invertir el orden: escribir $[x]_B=P_{C\\leftarrow B}[x]_C$ en lugar de $[x]_C=P_{C\\leftarrow B}[x]_B$.",
      "Calcular $P_{C\\leftarrow B}$ reduciendo $[b\\ |\\ c]$ en vez de $[c\\ |\\ b]$.",
      "Confundir $P_{C\\leftarrow B}$ con su inversa, $P_{B\\leftarrow C}$.",
      "Olvidar que las columnas de $P_{C\\leftarrow B}$ son las $C$-coordenadas de los vectores de $B$.",
      "Suponer que la matriz de cambio de base es siempre la identidad cuando ambas bases están en $\\R^n$.",
    ],
    checklist: [
      "Construyo $P_{C\\leftarrow B}$ reduciendo $[c_1\\ \\cdots\\ c_n\\ |\\ b_1\\ \\cdots\\ b_n]$.",
      "Aplico correctamente $[x]_C=P_{C\\leftarrow B}[x]_B$.",
      "Uso $(P_{C\\leftarrow B})^{-1}=P_{B\\leftarrow C}$.",
      "En $\\R^n$, identifico $P_B=[b_1\\ \\cdots\\ b_n]$ y calculo $[x]_B=P_B^{-1}x$.",
      "Entiendo que las columnas de la matriz de cambio son coordenadas, no los vectores originales.",
    ],
    autoevaluacion: [
      { pregunta: "¿Qué hace la matriz $P_{C\\leftarrow B}$?", opciones: [ "Transforma $[x]_C$ en $[x]_B$", "Transforma $[x]_B$ en $[x]_C$", "Transforma $x$ en la base estándar", "No transforma coordenadas" ], correcta: 1, explicacion: "Por definición $[x]_C=P_{C\\leftarrow B}[x]_B$." },
      { pregunta: "Si $P_{C\\leftarrow B}=\\begin{bmatrix}6&4\\\\-5&-3\\end{bmatrix}$, entonces $P_{B\\leftarrow C}$ es:", opciones: [ "$\\begin{bmatrix}3&4\\\\-5&-6\\end{bmatrix}$", "$\\dfrac{1}{2}\\begin{bmatrix}-3&-4\\\\5&6\\end{bmatrix}$", "$\\begin{bmatrix}-6&5\\\\-4&3\\end{bmatrix}$", "No existe" ], correcta: 1, explicacion: "$\\det=6(-3)-4(-5)=2$, y la inversa de $\\begin{bmatrix}6&4\\\\-5&-3\\end{bmatrix}$ es $\\frac{1}{2}\\begin{bmatrix}-3&-4\\\\5&6\\end{bmatrix}$." },
      { pregunta: "En $\\R^n$ con base estándar $\\mathcal{E}$ y $B=\\{b_1,\\dots,b_n\\}$, la matriz $P_B$ satisface:", opciones: [ "$x=P_B[x]_B$", "$[x]_B=P_B x$", "$P_B=I$ siempre", "$P_B$ no es invertible" ], correcta: 0, explicacion: "$P_B$ lleva $B$-coordenadas a coordenadas estándar, es decir $x=P_B[x]_B$." },
    ],
    referencias: [ { titulo: "Clase 27 — Matriz de cambio de base (PDF)", ruta: "recursos/clases/clase-27.pdf" } ],
  });
})();
