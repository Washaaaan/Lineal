/* Módulo 2 · Sección 5 — Soluciones de un SEL: existencia y unicidad */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m02_s05", modulo: 2, moduloNombre: "Módulo 2 · Sistemas de ecuaciones lineales", orden: 5,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Soluciones de un SEL: existencia y unicidad",
    objetivo: "Decidir si un sistema es consistente usando la forma escalonada de su matriz ampliada, distinguir variables básicas de variables libres y determinar si hay solución única o infinitas soluciones.",
    fuente: "Clase 10 · Apunte Clase 9 (Conjunto solución) · Lay §1.2 · Poole §2.2",
    prerrequisitos: ["Forma escalonada y escalonada reducida", "Algoritmo de reducción por filas", "Matriz ampliada"],
    teoria: [
      { tipo: "texto", html: "<p>Reducir la matriz ampliada $[\\,A\\;b\\,]$ no solo resuelve el sistema: su forma escalonada revela de inmediato <b>si hay solución</b> y, en caso de haberla, <b>cuántas</b> hay.</p>" },
      { tipo: "definicion", titulo: "Variables básicas y variables libres", html: "<p>Dada la forma escalonada reducida de $[\\,A\\;b\\,]$:</p><ul><li><b>Variables básicas:</b> aquellas cuyas columnas son pivote.</li><li><b>Variables libres:</b> aquellas cuyas columnas <i>no</i> son pivote; actúan como parámetros y su valor puede elegirse arbitrariamente.</li></ul><p>El número de variables libres es (número de variables) $-\\rank(A)$.</p>" },
      { tipo: "teorema", titulo: "Criterio de consistencia", html: "<p>Un sistema lineal es <b>consistente</b> si y solo si una forma escalonada de la matriz ampliada <b>no</b> contiene una fila de la forma</p>$$[\\,0\\;\\cdots\\;0\\,|\\,b\\,],\\qquad b\\neq0.$$<p>Es decir, no aparece la ecuación imposible $0=b$.</p>" },
      { tipo: "teorema", titulo: "Número de soluciones", html: "<p>Si el sistema es consistente, entonces:</p><ul><li>tiene <b>solución única</b> si <i>no</i> hay variables libres;</li><li>tiene <b>infinitas soluciones</b> si hay <i>al menos una</i> variable libre.</li></ul>" },
      { tipo: "html", html: "<div class='callout'><b>Árbol de decisión.</b> Reduzca $[\\,A\\;b\\,]$. <br>¿Aparece una fila $[0\\;\\cdots\\;0\\,|\\,b]$ con $b\\neq0$?<br>&nbsp;&nbsp;• <b>Sí</b> → inconsistente: 0 soluciones.<br>&nbsp;&nbsp;• <b>No</b> → consistente. ¿Hay variables libres?<br>&nbsp;&nbsp;&nbsp;&nbsp;– <b>Sí</b> → infinitas soluciones.<br>&nbsp;&nbsp;&nbsp;&nbsp;– <b>No</b> → solución única.</div>" },
      { tipo: "nota", titulo: "El comportamiento depende de A, no de b (Lay §1.2)", html: "<p>Si un sistema consistente tiene solución única o infinitas depende exclusivamente de la forma escalonada de la matriz de coeficientes $A$ (del número de pivotes), <b>no</b> del vector $b$. Cambiar $b$ solo puede hacer que un sistema pase a ser inconsistente, pero no cambia el número de variables libres cuando es consistente.</p>" },
      { tipo: "nota", titulo: "Más incógnitas que ecuaciones (Poole §2.2)", html: "<p>Un sistema con más incógnitas que ecuaciones nunca tiene solución única: como $\\rank(A)\\le$ (número de filas), siempre quedará al menos una variable libre. Si además es consistente, tendrá infinitas soluciones.</p>" },
    ],
    ejemplos: [
      { titulo: "Solución única desde la FER", enunciado: "La matriz ampliada de un sistema se redujo a $\\begin{bmatrix}1&0&0&29\\\\ 0&1&0&16\\\\ 0&0&1&3\\end{bmatrix}$. Describa su solución.", desarrollo: [ "Cada variable tiene columna pivote: no hay variables libres.", "El sistema es consistente (no hay fila $0=b$ con $b\\neq0$).", "Se lee directamente $x_1=29,\\;x_2=16,\\;x_3=3$." ], respuesta: "Solución única: $(x_1,x_2,x_3)=(29,16,3)$." },
      { titulo: "Infinitas soluciones con variable libre", enunciado: "Se redujo $[\\,A\\;b\\,]$ a $\\begin{bmatrix}1&0&-5&1\\\\ 0&1&1&4\\\\ 0&0&0&0\\end{bmatrix}$. Describa la solución e interprétela geométricamente.", desarrollo: [ "Las columnas 1 y 2 son pivote ($x_1,x_2$ básicas); la columna 3 es libre ($x_3$ parámetro).", "De las ecuaciones: $x_1-5x_3=1\\Rightarrow x_1=1+5x_3$ y $x_2+x_3=4\\Rightarrow x_2=4-x_3$.", "Con $x_3=t\\in\\R$ se obtiene una familia de soluciones." ], respuesta: "$(x_1,x_2,x_3)=(1+5t,\\,4-t,\\,t)$, $t\\in\\R$: una recta en $\\R^3$.", grafico: { tipo: "plot2d", titulo: "Infinitas soluciones: rectas coincidentes", funciones: [ { f: function (x) { return 1 + 5 * x; }, desde: -1, hasta: 2, label: "x₁=1+5t (t=x₃)", color: "#1e5eff" }, { f: function (x) { return 4 - x; }, desde: -1, hasta: 2, label: "x₂=4−t", color: "#e17055" } ], xlabel: "t", ylabel: "valor" } },
      { titulo: "Sistema inconsistente", enunciado: "La matriz ampliada se redujo a $\\begin{bmatrix}2&-3&3&1\\\\ 0&1&-4&8\\\\ 0&0&0&5/2\\end{bmatrix}$. ¿Tiene solución el sistema?", desarrollo: [ "La última fila es $[\\,0\\;0\\;0\\,|\\,\\tfrac52\\,]$, es decir, $0=\\tfrac52$.", "Como $\\tfrac52\\neq0$, aparece una ecuación imposible.", "Por el criterio de consistencia, el sistema no tiene solución." ], respuesta: "No tiene solución: sistema inconsistente (rectas paralelas).", grafico: { tipo: "plot2d", titulo: "Rectas paralelas: sin intersección", funciones: [ { f: function (x) { return x + 1; }, desde: -2, hasta: 2, label: "y=x+1", color: "#1e5eff" }, { f: function (x) { return x - 1; }, desde: -2, hasta: 2, label: "y=x−1", color: "#e17055" } ], xlabel: "x", ylabel: "y" } },
    ],
    ejercicios: [
      { titulo: "Clasificar por la FER", dificultad: "basico", enunciado: "La FER de $[\\,A\\;b\\,]$ es $\\begin{bmatrix}1&6&0&3&0&0\\\\ 0&0&1&-4&0&5\\\\ 0&0&0&0&1&7\\end{bmatrix}$. ¿Cuántas soluciones hay y cuáles son las variables libres?", pista: "Cuente pivotes y compare con el número de variables.", desarrollo: [ "Hay 5 variables ($x_1,\\dots,x_5$) y 3 pivotes: columnas 1, 3 y 5.", "Variables básicas: $x_1,x_3,x_5$; libres: $x_2,x_4$.", "No hay fila $0=b$ con $b\\neq0$: es consistente." ], respuesta: "Infinitas soluciones; variables libres $x_2,x_4$." },
      { titulo: "Consistencia", dificultad: "basico", enunciado: "¿Es consistente el sistema cuya forma escalonada de $[\\,A\\;b\\,]$ contiene la fila $[\\,0\\;0\\;0\\,|\\;-3\\,]$?", pista: "Lea la ecuación que representa esa fila.", desarrollo: [ "La fila corresponde a $0\\cdot x_1+0\\cdot x_2+0\\cdot x_3=-3$, es decir, $0=-3$.", "Como $-3\\neq0$, la ecuación es imposible." ], respuesta: "No es consistente: 0 soluciones." },
      { titulo: "Resolver y clasificar", dificultad: "intermedio", enunciado: "Resuelva $\\begin{cases}x_1-2x_2+x_3=0\\\\ 2x_2-8x_3=8\\\\ -4x_1+5x_2+9x_3=-9\\end{cases}$ e indique si la solución es única.", pista: "Reduzca $[\\,A\\;b\\,]$ a la FER.", desarrollo: [ "Tras reducir se obtiene $\\begin{bmatrix}1&0&0&29\\\\ 0&1&0&16\\\\ 0&0&1&3\\end{bmatrix}$.", "Tres pivotes y tres variables: no hay variables libres.", "El sistema es consistente." ], respuesta: "Solución única $(29,16,3)$." },
      { titulo: "Análisis paramétrico", dificultad: "avanzado", enunciado: "Determine para qué valores de $a\\in\\R$ el sistema $\\begin{cases}ax+y=1\\\\ x+ay=1\\end{cases}$ tiene solución única, infinitas o ninguna.", pista: "Calcule el determinante $a^2-1$ y analice $a=\\pm1$ por separado.", desarrollo: [ "El determinante es $a\\cdot a-1=a^2-1=(a-1)(a+1)$.", "Si $a\\neq1$ y $a\\neq-1$: determinante no nulo ⇒ <b>solución única</b>.", "Si $a=1$: ambas ecuaciones son $x+y=1$ ⇒ <b>infinitas</b> soluciones $(t,1-t)$.", "Si $a=-1$: $y=x+1$ y $y=x-1$, rectas paralelas ⇒ <b>ninguna</b> solución." ], respuesta: "Única si $a\\neq\\pm1$; infinitas si $a=1$; ninguna si $a=-1$." },
    ],
    erroresComunes: [
      "Confundir 'consistente' con 'solución única': un sistema con infinitas soluciones también es consistente.",
      "Contar mal las variables libres: son las columnas NO pivote de la matriz de coeficientes.",
      "Creer que cambiar $b$ puede convertir un sistema con variable libre en uno de solución única.",
      "No revisar la fila $[0\\;\\cdots\\;0\\,|\\,b]$ y declarar consistente un sistema imposible.",
    ],
    checklist: [
      "Escribo la matriz ampliada y la reduzco a forma escalonada (reducida).",
      "Aplico el criterio de consistencia revisando filas $[0\\;\\cdots\\;0\\,|\\,b]$.",
      "Identifico variables básicas y libres a partir de las columnas pivote.",
      "Determino si hay solución única o infinitas soluciones.",
      "Analizo parámetros para clasificar familias de sistemas.",
    ],
    autoevaluacion: [
      { pregunta: "Si $[\\,A\\;b\\,]$ tiene una fila $[\\,0\\;0\\;0\\,|\\,4\\,]$, el sistema:", opciones: [ "No tiene solución", "Tiene solución única", "Tiene infinitas soluciones", "Es homogéneo" ], correcta: 0, explicacion: "$0=4$ es imposible: sistema inconsistente." },
      { pregunta: "Un sistema consistente con una variable libre tiene:", opciones: [ "Infinitas soluciones", "Solución única", "Ninguna solución", "Exactamente dos soluciones" ], correcta: 0, explicacion: "Cada variable libre aporta un parámetro, generando infinitas soluciones." },
      { pregunta: "El número de variables libres de un sistema con $n$ variables es:", opciones: [ "$n-\\rank(A)$", "$\\rank(A)$", "Siempre 0", "$n+\\rank(A)$" ], correcta: 0, explicacion: "Hay un pivote por cada variable básica; el resto es libre." },
    ],
    referencias: [ { titulo: "Clase 10 — Soluciones de SEL (PDF)", ruta: "recursos/clases/clase-10.pdf" }, { titulo: "Apunte Clase 9 (Conjunto solución, PDF)", ruta: "recursos/apuntes/apunte-clase-09.pdf" } ],
  });
})();
