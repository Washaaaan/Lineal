/* Módulo 2 · Sección 1 — Sistemas de ecuaciones lineales y su solución */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m02_s01", modulo: 2, moduloNombre: "Módulo 2 · Sistemas de ecuaciones lineales", orden: 1,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Sistemas de ecuaciones lineales y su solución",
    objetivo: "Reconocer una ecuación lineal y un sistema de ecuaciones lineales (SEL), comprobar si un vector dado es solución y clasificar un sistema según tenga ninguna, exactamente una o infinitas soluciones.",
    fuente: "Clase 06 · Apunte Clase 5 (SEL) · Lay §1.1 · Poole §2.1",
    prerrequisitos: ["Ecuaciones lineales", "Plano cartesiano", "Rectas en R² y R³"],
    teoria: [
      { tipo: "texto", html: "<p>Una <b>ecuación lineal</b> describe una recta en $\\R^2$, un plano en $\\R^3$ o un hiperplano en $\\R^n$. Resolver un <b>sistema de ecuaciones lineales</b> (SEL) equivale a <i>intersectar</i> esos objetos geométricos: buscamos los puntos comunes a todas las ecuaciones a la vez.</p>" },
      { tipo: "definicion", titulo: "Ecuación lineal", html: "<p>Una <b>ecuación lineal</b> en las variables $x_1,\\dots,x_n$ es una igualdad de la forma</p>$$a_1x_1+a_2x_2+\\cdots+a_nx_n=b,$$<p>donde los coeficientes $a_i$ y el término independiente $b$ son números reales.</p><p><b>Ejemplos:</b> $-3x+y-2z=9$ sí es lineal; $3x^2+xy-\\sqrt{z}+2x=1$ no lo es (potencias, productos y raíces de variables).</p>" },
      { tipo: "definicion", titulo: "Sistema de ecuaciones lineales (SEL)", html: "<p>Un <b>sistema lineal</b> es una colección de ecuaciones lineales que comparten las mismas variables:</p>$$\\begin{cases} a_{11}x_1+\\cdots+a_{1n}x_n=b_1\\\\ \\quad\\vdots\\\\ a_{m1}x_1+\\cdots+a_{mn}x_n=b_m\\end{cases}$$<p>Buscamos los números $(x_1,\\dots,x_n)$ que satisfacen <b>todas</b> las ecuaciones al mismo tiempo.</p>" },
      { tipo: "definicion", titulo: "Solución y conjunto solución", html: "<p>Una <b>solución</b> de un SEL es un vector $s=\\langle s_1,\\dots,s_n\\rangle$ que satisface cada ecuación. El <b>conjunto solución</b> es el conjunto de <i>todas</i> las soluciones del sistema.</p><p>Dos sistemas son <b>equivalentes</b> si tienen el mismo conjunto solución.</p>" },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "Intersección de dos rectas: solución única (1,1)", funciones: [ { f: function (x) { return 2 - x; }, desde: -1, hasta: 3, label: "x+y=2", color: "#1e5eff" }, { f: function (x) { return x; }, desde: -1, hasta: 3, label: "x−y=0", color: "#e17055" } ], series: [ { x: [1], y: [1], label: "solución (1,1)", color: "#00b894", mode: "markers" } ], xlabel: "x", ylabel: "y" } },
      { tipo: "teorema", titulo: "Número de soluciones de un SEL", html: "<p>Un sistema lineal puede tener exactamente una de estas tres situaciones:</p><ul><li><b>Ninguna solución</b> (sistema <i>inconsistente</i>).</li><li><b>Exactamente una solución</b> (sistema <i>consistente</i>).</li><li><b>Infinitas soluciones</b> (sistema <i>consistente</i>).</li></ul><p>Geométricamente: ningún punto común, un único punto, o una recta/plano/hiperplano completo de puntos comunes.</p>" },
      { tipo: "nota", titulo: "Ecuaciones homogéneas y no homogéneas (Lay §1.1)", html: "<p>Una ecuación lineal es <b>homogénea</b> si $b=0$, y <b>no homogénea</b> si $b\\neq0$. Geométricamente, una ecuación homogénea corresponde a un hiperplano que <i>pasa por el origen</i>, mientras que una no homogénea es un hiperplano desplazado.</p>" },
      { tipo: "nota", titulo: "Las operaciones no cambian las intersecciones (Lay §1.1)", html: "<p>Al manipular un sistema (multiplicar una ecuación por un escalar no nulo, sumar un múltiplo de una ecuación a otra, o intercambiar ecuaciones) cambiamos las rectas o planos <i>individuales</i>, pero <b>no</b> su intersección. Por eso todos esos sistemas son equivalentes y se resuelven con las mismas soluciones.</p>" },
    ],
    ejemplos: [
      { titulo: "Verificar una solución propuesta", enunciado: "¿Es $\\langle1,1,2\\rangle$ solución del sistema $\\begin{cases}2x-y+z=3\\\\ x+2y-z=1\\\\ 3x-y=2\\end{cases}$?", desarrollo: [ "Sustituimos en la primera ecuación: $2(1)-(1)+2=3$. ✓", "En la segunda: $(1)+2(1)-2=1$. ✓", "En la tercera: $3(1)-(1)=2$. ✓", "Como satisface las tres ecuaciones a la vez, sí es solución." ], respuesta: "Sí, $\\langle1,1,2\\rangle$ es solución del sistema." },
      { titulo: "Resolver un SEL 2×2", enunciado: "Resuelva el sistema $\\begin{cases}2x-y=4\\\\ x+3y=9\\end{cases}$.", desarrollo: [ "De la primera ecuación: $y=2x-4$.", "Sustituimos en la segunda: $x+3(2x-4)=9\\Rightarrow 7x-12=9\\Rightarrow x=3$.", "Entonces $y=2(3)-4=2$.", "Verificación: $2(3)-2=4$ ✓ y $3+3(2)=9$ ✓." ], respuesta: "$(x,y)=(3,2)$: solución única.", grafico: { tipo: "plot2d", titulo: "Solución única (3,2)", funciones: [ { f: function (x) { return 2 * x - 4; }, desde: -1, hasta: 6, label: "2x−y=4", color: "#1e5eff" }, { f: function (x) { return (9 - x) / 3; }, desde: -1, hasta: 6, label: "x+3y=9", color: "#e17055" } ], series: [ { x: [3], y: [2], label: "(3,2)", color: "#00b894", mode: "markers" } ], xlabel: "x", ylabel: "y" } },
      { titulo: "Interpretar un sistema sin solución", enunciado: "¿Cuántas soluciones tiene $\\begin{cases}x+y=1\\\\ x+y=3\\end{cases}$?", desarrollo: [ "Las dos ecuaciones describen rectas con la misma pendiente ($-1$), es decir, son <b>paralelas</b> y distintas.", "No existen puntos comunes porque, de $x+y=1$ se tendría $x+y=3$, una contradicción.", "Al restar las ecuaciones resulta $0=2$, imposible." ], respuesta: "Ninguna solución: el sistema es inconsistente." },
    ],
    ejercicios: [
      { titulo: "Comprobar una solución", dificultad: "basico", enunciado: "Verifique si $\\langle1,-1,2\\rangle$ resuelve $\\begin{cases}2x+3y-z=-3\\\\ x-y+z=4\\end{cases}$.", pista: "Sustituya los valores en cada ecuación.", desarrollo: [ "Primera: $2(1)+3(-1)-2=2-3-2=-3$. ✓", "Segunda: $1-(-1)+2=1+1+2=4$. ✓" ], respuesta: "Sí, $\\langle1,-1,2\\rangle$ satisface ambas ecuaciones." },
      { titulo: "SEL 2×2", dificultad: "basico", enunciado: "Resuelva $\\begin{cases}x+y=5\\\\ 2x-3y=0\\end{cases}$.", pista: "Despeje una variable y sustituya.", desarrollo: [ "De $x+y=5$: $x=5-y$.", "En la segunda: $2(5-y)-3y=0\\Rightarrow 10-5y=0\\Rightarrow y=2$.", "Luego $x=5-2=3$.", "Verificación: $3+2=5$ ✓, $2(3)-3(2)=0$ ✓." ], respuesta: "$(x,y)=(3,2)$." },
      { titulo: "Infinitas soluciones", dificultad: "intermedio", enunciado: "Describa el conjunto solución de $\\begin{cases}x+y=2\\\\ 2x+2y=4\\end{cases}$.", pista: "Compare las dos ecuaciones.", desarrollo: [ "La segunda ecuación es el doble de la primera: es la <i>misma</i> recta.", "Solo hay una condición: $x+y=2$.", "Tomando $x=t$ libre, se obtiene $y=2-t$." ], respuesta: "$(x,y)=(t,\\,2-t)$ con $t\\in\\R$: infinitas soluciones (una recta)." },
      { titulo: "Clasificación paramétrica", dificultad: "avanzado", enunciado: "Para $\\begin{cases}x+2y=3\\\\ 2x+4y=k\\end{cases}$, determine los valores de $k$ para los que el sistema tiene infinitas soluciones o ninguna.", pista: "Observe que $2x+4y=2(x+2y)$.", desarrollo: [ "La segunda ecuación es $2(x+2y)=k$, es decir, $2\\cdot 3=k$ para ser compatible con la primera.", "Si $k=6$, ambas ecuaciones son la misma recta: infinitas soluciones.", "Si $k\\neq6$, las rectas son paralelas distintas: ninguna solución.", "Nunca hay solución única porque los coeficientes son proporcionales." ], respuesta: "$k=6$: infinitas soluciones; $k\\neq6$: ninguna solución." },
    ],
    erroresComunes: [
      "Sustituir la solución en una sola ecuación y concluir que resuelve todo el sistema.",
      "Creer que dos rectas paralelas con distinta ordenada al origen se intersectan.",
      "Al despejar una variable, equivocarse con los signos al sustituir.",
      "Olvidar que 'consistente' incluye tanto la solución única como las infinitas soluciones.",
    ],
    checklist: [
      "Reconozco cuándo una ecuación es lineal y cuándo no.",
      "Escribo un SEL en forma general e identifico sus variables y coeficientes.",
      "Compruebo una solución propuesta en todas las ecuaciones.",
      "Clasifico un sistema en inconsistente, solución única o infinitas soluciones.",
      "Interpreto geométricamente el conjunto solución como una intersección.",
    ],
    autoevaluacion: [
      { pregunta: "¿Cuántas soluciones puede tener un SEL?", opciones: [ "0, 1 o infinitas", "Siempre infinitas", "Solo 0 o 1", "Exactamente 2" ], correcta: 0, explicacion: "Todo SEL cae en uno de esos tres casos." },
      { pregunta: "El sistema $\\begin{cases}x+y=2\\\\ x+y=5\\end{cases}$ es:", opciones: [ "Inconsistente", "De solución única", "De infinitas soluciones", "Homogéneo" ], correcta: 0, explicacion: "Al restar se obtiene $0=3$, imposible: no hay solución." },
      { pregunta: "$\\langle2,1\\rangle$ es solución de $\\begin{cases}x-y=1\\\\ x+y=3\\end{cases}$ porque:", opciones: [ "Satisface ambas ecuaciones", "Satisface la primera solamente", "Satisface la segunda solamente", "Es el vector nulo" ], correcta: 0, explicacion: "$2-1=1$ ✓ y $2+1=3$ ✓: satisface las dos." },
    ],
    referencias: [ { titulo: "Clase 06 — Sistemas de ecuaciones lineales (PDF)", ruta: "recursos/clases/clase-06.pdf" }, { titulo: "Apunte Clase 5 (SEL, PDF)", ruta: "recursos/apuntes/apunte-clase-05.pdf" } ],
  });
})();
