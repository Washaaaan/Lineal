/* Módulo 5 · Sección 2 — Conjuntos linealmente independientes y bases */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m05_s02", modulo: 5, moduloNombre: "Módulo 5 · Espacios vectoriales", orden: 2,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Conjuntos linealmente independientes y bases",
    objetivo: "Determinar si un conjunto de vectores es linealmente independiente o dependiente, y decidir si forma una base de un subespacio, reduciendo la matriz asociada.",
    fuente: "Clase 23 · Lay §4.3 · Poole §3.3–3.4",
    prerrequisitos: ["Espacios y subespacios vectoriales", "Combinaciones lineales", "Algoritmo de Gauss-Jordan"],
    teoria: [
      { tipo: "texto", html: "<p>Para describir un subespacio sin redundancia necesitamos el concepto de base. La idea clave, igual que en $\\R^n$, es la independencia lineal.</p>" },
      { tipo: "definicion", titulo: "Independencia y dependencia lineal", html: "<p>Un conjunto indexado $\\{v_1,\\dots,v_p\\}$ en $V$ es <b>linealmente independiente</b> (LI) si la ecuación</p>$$c_1v_1+\\cdots+c_pv_p=0$$<p>tiene <b>solo</b> la solución trivial $c_1=\\cdots=c_p=0$. Es <b>linealmente dependiente</b> (LD) si existen pesos no todos nulos que dan la combinación nula.</p>" },
      { tipo: "nota", titulo: "Hechos rápidos (Lay §4.3)", html: "<ul><li>Un conjunto con un solo vector $v$ es LI si y solo si $v\\neq 0$.</li><li>Un conjunto de dos vectores es LD si y solo si uno es múltiplo del otro.</li><li>Cualquier conjunto que contenga al vector cero es LD.</li></ul>" },
      { tipo: "teorema", titulo: "Caracterización de la dependencia", html: "<p>Un conjunto $\\{v_1,\\dots,v_p\\}$ con $p\\ge 2$ y $v_1\\neq 0$ es linealmente dependiente si y solo si algún $v_j$ (con $j>1$) es combinación lineal de los vectores anteriores $v_1,\\dots,v_{j-1}$.</p>" },
      { tipo: "definicion", titulo: "Base", html: "<p>Un conjunto indexado $B=\\{b_1,\\dots,b_p\\}$ es una <b>base</b> de un subespacio $H$ si:</p><ol><li>$B$ es linealmente independiente, y</li><li>$H=\\gen\\{b_1,\\dots,b_p\\}$.</li></ol><p>Cuando $H=V$ se dice simplemente que $B$ es una base de $V$.</p>" },
      { tipo: "teorema", titulo: "Teorema del conjunto generador", html: "<p>Sea $S=\\{v_1,\\dots,v_p\\}$ y $H=\\gen S$. Si algún $v_k$ es combinación lineal de los demás, el conjunto que queda al eliminar $v_k$ sigue generando $H$. Además, si $H\\neq\\{0\\}$, algún subconjunto de $S$ es una base de $H$.</p>" },
      { tipo: "nota", titulo: "Dos perspectivas de una base (Lay §4.3)", html: "<p>Una base es:</p><ul><li>un conjunto generador <b>lo más pequeño posible</b>, y a la vez</li><li>un conjunto linealmente independiente <b>lo más grande posible</b>.</li></ul><p>Quitar un vector de una base deja de generar; agregar un vector la vuelve dependiente.</p>" },
      { tipo: "nota", titulo: "Bases estándar (Lay §4.3)", html: "<p>En $\\R^n$, la <b>base estándar</b> es $\\{e_1,\\dots,e_n\\}$, las columnas de $I_n$. En $P_n$, la <b>base estándar</b> es $\\{1,t,t^2,\\dots,t^n\\}$. Las columnas de una matriz invertible $A$ de $n\\times n$ forman una base de $\\R^n$.</p>" },
      { tipo: "grafico", spec: { tipo: "vectores2d", titulo: "{(1,0),(2,3)} LI vs {(1,0),(2,0)} LD", vectores: [ { x: 1, y: 0, x0: 0, y0: 0, label: "v1", color: "#1e5eff" }, { x: 2, y: 3, x0: 0, y0: 0, label: "v2 (LI)", color: "#00b894" }, { x: 2, y: 0, x0: 0, y0: 0, label: "w2=2v1 (LD)", color: "#e17055", dash: true } ], rangeX: [-1, 4], rangeY: [-1, 4] } },
    ],
    ejemplos: [
      { titulo: "¿Es base de R^3?", enunciado: "<p>Sean $v_1=(3,0,-6)$, $v_2=(-4,1,7)$ y $v_3=(-2,1,5)$. Determine si $\\{v_1,v_2,v_3\\}$ es una base de $\\R^3$.</p>", desarrollo: [ "Formamos $A=[v_1\\ v_2\\ v_3]=\\begin{bmatrix}3&-4&-2\\\\0&1&1\\\\-6&7&5\\end{bmatrix}$.", "Al reducir por filas se obtiene $\\begin{bmatrix}3&-4&-2\\\\0&1&1\\\\0&0&2\\end{bmatrix}$.", "Hay pivote en las tres columnas: no hay variables libres, luego el sistema $Ax=0$ solo tiene la solución trivial.", "El conjunto es LI y tiene 3 vectores en $\\R^3$; además genera $\\R^3$." ], respuesta: "$\\{v_1,v_2,v_3\\}$ es una base de $\\R^3$." },
      { titulo: "Polinomios linealmente dependientes", enunciado: "<p>Sean $p_1(t)=1$, $p_2(t)=t$ y $p_3(t)=4-t$. Determine si $\\{p_1,p_2,p_3\\}$ es LI en $P$.</p>", desarrollo: [ "Planteamos $c_1\\cdot 1+c_2\\,t+c_3(4-t)=0$.", "Agrupando: $(c_1+4c_3)+(c_2-c_3)t=0$.", "De ahí $c_1+4c_3=0$ y $c_2-c_3=0$.", "Hay soluciones no triviales: por ejemplo $c_3=1$, $c_1=-4$, $c_2=1$." ], respuesta: "$\\{p_1,p_2,p_3\\}$ es LD (de hecho $p_3=4p_1-p_2$)." },
      { titulo: "Base de un subespacio generado", enunciado: "<p>Sean $v_1=(0,2,-1)$, $v_2=(2,2,0)$, $v_3=(6,16,-5)$ con $v_3=5v_1+3v_2$, y $H=\\gen\\{v_1,v_2,v_3\\}$. Encuentre una base de $H$.</p>", desarrollo: [ "Como $v_3=5v_1+3v_2$, el teorema del conjunto generador permite eliminarlo: $H=\\gen\\{v_1,v_2\\}$.", "Comprobamos que $\\{v_1,v_2\\}$ es LI: $v_2$ no es múltiplo de $v_1$ (no hay $k$ con $(0,2,-1)=k(2,2,0)$).", "Un generador LI es una base." ], respuesta: "Una base de $H$ es $\\{v_1,v_2\\}=\\{(0,2,-1),(2,2,0)\\}$." },
    ],
    ejercicios: [
      { titulo: "Múltiplos", dificultad: "basico", enunciado: "<p>Determine si $\\{(1,2),(2,4)\\}$ es linealmente independiente en $\\R^2$.</p>", pista: "¿Es un vector múltiplo del otro?", desarrollo: [ "$(2,4)=2(1,2)$.", "Uno es múltiplo del otro.", "Por el criterio de dos vectores, el conjunto es LD." ], respuesta: "Es linealmente dependiente." },
      { titulo: "Base estándar", dificultad: "basico", enunciado: "<p>¿Es $\\{(1,0,0),(0,1,0),(0,0,1)\\}$ una base de $\\R^3$?</p>", pista: "Piense en la matriz identidad.", desarrollo: [ "$c_1(1,0,0)+c_2(0,1,0)+c_3(0,0,1)=(c_1,c_2,c_3)=0$ obliga a $c_1=c_2=c_3=0$: es LI.", "Todo $(x,y,z)=x(1,0,0)+y(0,1,0)+z(0,0,1)$: genera $\\R^3$.", "Es LI y genera." ], respuesta: "Sí, es la base estándar de $\\R^3$." },
      { titulo: "Polinomios LI en P_2", dificultad: "intermedio", enunciado: "<p>Determine si $\\{1+t,\\; t+t^2,\\; 1+t^2\\}$ es LI en $P_2$.</p>", pista: "Iguale coeficientes por potencias de $t$.", desarrollo: [ "$a(1+t)+b(t+t^2)+c(1+t^2)=(a+c)+(a+b)t+(b+c)t^2=0$.", "Sistema: $a+c=0$, $a+b=0$, $b+c=0$.", "De $a=-c$ y $b=-a=c$; entonces $b+c=2c=0\\Rightarrow c=0$, $a=0$, $b=0$.", "Solo hay solución trivial." ], respuesta: "El conjunto es linealmente independiente." },
      { titulo: "Base de un generado en P_2", dificultad: "avanzado", enunciado: "<p>Sean $p_1=1$, $p_2=t$, $p_3=4-t$ y $H=\\gen\\{p_1,p_2,p_3\\}$. Encuentre una base de $H$ y determine su dimensión (en términos del número de vectores).</p>", pista: "Use una dependencia lineal conocida.", desarrollo: [ "Del ejemplo, $p_3=4p_1-p_2$, así que sobra.", "El teorema del conjunto generador permite escribir $H=\\gen\\{p_1,p_2\\}$.", "$\\{1,t\\}$ es LI (ninguno es múltiplo del otro)." ], respuesta: "Base $\\{1,t\\}$; $H$ se genera con 2 vectores." },
    ],
    erroresComunes: [
      "Incluir el vector cero en un conjunto y aun así decir que es linealmente independiente.",
      "Confundir 'genera' con 'es base': se necesitan ambas condiciones (LI y generar).",
      "Eliminar un vector que NO es combinación lineal de los demás.",
      "Determinar LI mirando solo el número de vectores, sin resolver el sistema.",
      "Olvidar que en $P_n$ hay que comparar coeficientes de cada potencia de $t$.",
    ],
    checklist: [
      "Formulo la ecuación $c_1v_1+\\cdots+c_pv_p=0$ para estudiar dependencia.",
      "Uso la reducción por filas para decidir independencia lineal.",
      "Verifico las dos condiciones de base: LI y generación.",
      "Aplico el teorema del conjunto generador para eliminar vectores redundantes.",
      "Reconozco las bases estándar de $\\R^n$ y $P_n$.",
    ],
    autoevaluacion: [
      { pregunta: "¿Cuándo un conjunto de dos vectores en $\\R^2$ es linealmente dependiente?", opciones: [ "Nunca", "Cuando uno es múltiplo del otro", "Cuando ninguno es cero", "Siempre" ], correcta: 1, explicacion: "Dos vectores son LD si y solo si uno es múltiplo del otro." },
      { pregunta: "Un conjunto generador de $H$ que además es LI se llama:", opciones: [ "Subespacio", "Base", "Espacio nulo", "Dimensión" ], correcta: 1, explicacion: "Por definición, una base es un generador linealmente independiente." },
      { pregunta: "Las columnas de una matriz $A$ de $n\\times n$ forman una base de $\\R^n$ si y solo si:", opciones: [ "Tienen algún cero", "Alguna columna es combinación de otras", "$A$ es invertible", "$A$ tiene una fila nula" ], correcta: 2, explicacion: "$A$ invertible equivale a columnas LI, que en número $n$ generan $\\R^n$." },
    ],
    referencias: [ { titulo: "Clase 23 — Conjuntos LI. Bases (PDF)", ruta: "recursos/clases/clase-23.pdf" } ],
  });
})();
