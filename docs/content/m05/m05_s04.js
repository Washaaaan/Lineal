/* Módulo 5 · Sección 4 — Sistemas de coordenadas */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m05_s04", modulo: 5, moduloNombre: "Módulo 5 · Espacios vectoriales", orden: 4,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Sistemas de coordenadas",
    objetivo: "Calcular las coordenadas de un vector respecto de una base, interpretar el isomorfismo de coordenadas y usarlo para analizar independencia en espacios de polinomios.",
    fuente: "Clase 25 · Lay §4.4 · Poole §3.4–3.5",
    prerrequisitos: ["Bases", "Resolución de SEL", "Independencia lineal"],
    teoria: [
      { tipo: "texto", html: "<p>Fijar una base $B$ de un espacio vectorial $V$ permite dar a cada vector una \"dirección\" única: sus coordenadas. Esto convierte problemas abstractos de $V$ en problemas concretos de $\\R^n$.</p>" },
      { tipo: "teorema", titulo: "Teorema de la representación única", html: "<p>Sea $B=\\{b_1,\\dots,b_n\\}$ una base de un espacio vectorial $V$. Entonces cada $x\\in V$ se escribe de <b>manera única</b> como</p>$$x=c_1b_1+\\cdots+c_nb_n.$$" },
      { tipo: "definicion", titulo: "Vector de coordenadas", html: "<p>Los escalares $c_1,\\dots,c_n$ del teorema anterior son las <b>B-coordenadas</b> de $x$, y el vector</p>$$[x]_B=\\begin{bmatrix}c_1\\\\\\vdots\\\\c_n\\end{bmatrix}\\in\\R^n$$<p>es el <b>vector de coordenadas</b> de $x$ relativo a $B$.</p>" },
      { tipo: "nota", titulo: "Coordenadas y matrices (Lay §4.4)", html: "<p>Para hallar $[x]_B$ en un subespacio de $\\R^n$ se resuelve el sistema $x=c_1b_1+\\cdots+c_nb_n$, cuya matriz aumentada es $[b_1\\ \\cdots\\ b_n\\ |\\ x]$. En $P_n$, los coeficientes se leen ordenando los polinomios por potencias de $t$; con la base estándar $\\{1,t,t^2,t^3\\}$, el polinomio $3t^2-2t-2$ tiene coordenadas $(-2,-2,3,0)$.</p>" },
      { tipo: "teorema", titulo: "Isomorfismo de coordenadas", html: "<p>Si $B=\\{b_1,\\dots,b_n\\}$ es una base de $V$, el mapeo $x\\mapsto[x]_B$ es una transformación lineal uno a uno de $V$ sobre $\\R^n$. En particular:</p>$$[u+v]_B=[u]_B+[v]_B,\\qquad [cu]_B=c\\,[u]_B.$$<p>Gracias a esto, un conjunto $\\{v_1,\\dots,v_p\\}$ es LI en $V$ si y solo si $\\{[v_1]_B,\\dots,[v_p]_B\\}$ es LI en $\\R^n$.</p>" },
      { tipo: "nota", titulo: "Por qué importa (Lay §4.4)", html: "<p>El isomorfismo de coordenadas dice que, algebraicamente, todo espacio vectorial de dimensión finita $n$ \"es igual\" a $\\R^n$: sumar, escalar y detectar independencia se pueden hacer con coordenadas estándar. Por eso el trabajo abstracto se reduce a reducir matrices.</p>" },
      { tipo: "grafico", spec: { tipo: "vectores2d", titulo: "x=(3,2) con B={b1=(1,0), b2=(1,2)}: [x]_B=(2,1)", vectores: [ { x: 1, y: 0, x0: 0, y0: 0, label: "b1", color: "#1e5eff" }, { x: 1, y: 2, x0: 0, y0: 0, label: "b2", color: "#00b894" }, { x: 3, y: 2, x0: 0, y0: 0, label: "x", color: "#e17055" }, { x: 2, y: 0, x0: 0, y0: 0, label: "2b1", color: "#8e44ad", dash: true } ], rangeX: [-1, 4], rangeY: [-1, 4] } },
    ],
    ejemplos: [
      { titulo: "De coordenadas al vector", enunciado: "<p>Sea $B=\\{b_1,b_2\\}$ con $b_1=(1,0)$, $b_2=(1,2)$. Si $[x]_B=\\begin{bmatrix}-2\\\\3\\end{bmatrix}$, determine $x$.</p>", desarrollo: [ "Por definición $x=c_1b_1+c_2b_2=(-2)b_1+3b_2$.", "$(-2)(1,0)=( -2,0)$ y $3(1,2)=(3,6)$.", "Sumando: $x=(-2+3,\\ 0+6)=(1,6)$." ], respuesta: "$x=(1,6)$." },
      { titulo: "Del vector a las coordenadas", enunciado: "<p>Con la misma base $B=\\{b_1,b_2\\}$ del ejemplo anterior, encuentre $[x]_B$ para $x=(3,2)$.</p>", desarrollo: [ "Planteamos $c_1(1,0)+c_2(1,2)=(3,2)$.", "De la segunda coordenada: $2c_2=2\\Rightarrow c_2=1$.", "De la primera: $c_1+c_2=3\\Rightarrow c_1=2$.", "Así $x=2b_1+1b_2$." ], respuesta: "$[x]_B=\\begin{bmatrix}2\\\\1\\end{bmatrix}$." },
      { titulo: "Coordenadas en un subespacio de R^3", enunciado: "<p>Sean $v_1=(3,6,2)$, $v_2=(-1,0,1)$, $x=(3,12,7)$ y $B=\\{v_1,v_2\\}$. Determine si $x\\in H=\\gen\\{v_1,v_2\\}$ y, en tal caso, calcule $[x]_B$.</p>", desarrollo: [ "Formamos $[v_1\\ v_2\\ |\\ x]=\\begin{bmatrix}3&-1&3\\\\6&0&12\\\\2&1&7\\end{bmatrix}$.", "Al reducir: $\\begin{bmatrix}1&0&2\\\\0&1&3\\\\0&0&0\\end{bmatrix}$.", "Como es consistente, $x\\in H$, con $c_1=2$ y $c_2=3$." ], respuesta: "$x\\in H$ y $[x]_B=\\begin{bmatrix}2\\\\3\\end{bmatrix}$." },
    ],
    ejercicios: [
      { titulo: "Coordenadas en R^2", dificultad: "basico", enunciado: "<p>Sea $B=\\{(1,1),(1,-1)\\}$ y $x=(3,1)$. Encuentre $[x]_B$.</p>", pista: "Resuelva $c_1(1,1)+c_2(1,-1)=(3,1)$.", desarrollo: [ "Sistema: $c_1+c_2=3$ y $c_1-c_2=1$.", "Sumando: $2c_1=4\\Rightarrow c_1=2$.", "Restando: $2c_2=2\\Rightarrow c_2=1$." ], respuesta: "$[x]_B=\\begin{bmatrix}2\\\\1\\end{bmatrix}$." },
      { titulo: "Coordenadas de un polinomio", dificultad: "basico", enunciado: "<p>En $P_2$ con la base estándar $\\{1,t,t^2\\}$, encuentre las coordenadas de $p(t)=2+3t-t^2$.</p>", pista: "Lea los coeficientes en orden de potencia creciente.", desarrollo: [ "$p(t)=2\\cdot1+3\\cdot t+(-1)\\cdot t^2$.", "Los coeficientes son $2$, $3$ y $-1$." ], respuesta: "$[p]=\\begin{bmatrix}2\\\\3\\\\-1\\end{bmatrix}$." },
      { titulo: "Independencia vía coordenadas", dificultad: "intermedio", enunciado: "<p>Determine si $\\{1+2t^2,\\ 4+t+5t^2,\\ 3+2t\\}$ es linealmente independiente en $P_2$.</p>", pista: "Escriba cada polinomio como vector de coordenadas y reduzca.", desarrollo: [ "Coordenadas en la base estándar: $(1,0,2)$, $(4,1,5)$, $(3,2,0)$.", "Formamos $\\begin{bmatrix}1&4&3\\\\0&1&2\\\\2&5&0\\end{bmatrix}$, que reduce a $\\begin{bmatrix}1&4&3\\\\0&1&2\\\\0&0&0\\end{bmatrix}$.", "Solo hay 2 pivotes: la tercera columna es libre.", "Entonces los vectores de coordenadas son LD, y también los polinomios." ], respuesta: "El conjunto es linealmente dependiente." },
      { titulo: "¿Pertenece al generado?", dificultad: "avanzado", enunciado: "<p>Con $p_1(t)=3+6t+t^2$, $p_2(t)=t^2-1$ y $q(t)=3+12t+7t^2$, determine si $q\\in\\gen\\{p_1,p_2\\}$.</p>", pista: "Plantee $c_1p_1+c_2p_2=q$ y compare coeficientes.", desarrollo: [ "$c_1(3+6t+t^2)+c_2(t^2-1)=(3c_1-c_2)+6c_1t+(c_1+c_2)t^2$.", "Comparando: $6c_1=12\\Rightarrow c_1=2$; luego $3(2)-c_2=3\\Rightarrow c_2=3$.", "Verificación en $t^2$: $2+3=5$, pero se requiere $7$." ], respuesta: "No, $q\\notin\\gen\\{p_1,p_2\\}$ (el sistema es inconsistente)." },
    ],
    erroresComunes: [
      "Confundir el vector $x$ con su vector de coordenadas $[x]_B$.",
      "Usar el orden incorrecto de los elementos de la base al armar $[x]_B$.",
      "Creer que las coordenadas son siempre las componentes estándar de $x$.",
      "Al trabajar con polinomios, mezclar el orden de las potencias (ascendente vs. descendente).",
      "Olvidar que $[x]_B$ solo existe de forma única porque $B$ es una base.",
    ],
    checklist: [
      "Encuentro $[x]_B$ resolviendo $[b_1\\ \\cdots\\ b_n\\ |\\ x]$.",
      "Reconstruyo $x$ a partir de $[x]_B$ y la base $B$.",
      "Uso el isomorfismo de coordenadas para sumar y escalar.",
      "Detecto independencia lineal en $P_n$ pasando a coordenadas.",
      "Manejo correctamente el orden de las potencias en la base estándar de $P_n$.",
    ],
    autoevaluacion: [
      { pregunta: "¿Por qué existe un único vector de coordenadas $[x]_B$?", opciones: [ "Porque $B$ es linealmente dependiente", "Porque $B$ es una base", "Porque $V$ es infinito", "Porque $x=0$" ], correcta: 1, explicacion: "El teorema de representación única garantiza unicidad cuando $B$ es base." },
      { pregunta: "Si $[u]_B=(1,2)$ y $[v]_B=(3,-1)$, entonces $[u+v]_B$ es:", opciones: [ "$(4,1)$", "$(3,-2)$", "$(1,2)$", "No se puede calcular" ], correcta: 0, explicacion: "El mapeo de coordenadas es lineal: $[u+v]_B=[u]_B+[v]_B=(4,1)$." },
      { pregunta: "En $P_2$ con la base estándar, las coordenadas de $4+t+5t^2$ son:", opciones: [ "$(5,1,4)$", "$(4,1,5)$", "$(1,4,5)$", "$(4,5,1)$" ], correcta: 1, explicacion: "El orden es $\\{1,t,t^2\\}$, así que $(4,1,5)$." },
    ],
    referencias: [ { titulo: "Clase 25 — Sistemas de coordenadas (PDF)", ruta: "recursos/clases/clase-25.pdf" } ],
  });
})();
