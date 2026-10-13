/* Módulo 5 · Sección 3 — Espacios nulo y columna; transformaciones lineales */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m05_s03", modulo: 5, moduloNombre: "Módulo 5 · Espacios vectoriales", orden: 3,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Espacios nulo y columna; transformaciones lineales",
    objetivo: "Calcular bases del espacio nulo y del espacio columna de una matriz, y describir el núcleo y el rango de una transformación lineal.",
    fuente: "Clase 24 · Lay §2.8–2.9 y §4.2 · Poole §3.5",
    prerrequisitos: ["Conjuntos LI y bases", "Sistemas homogéneos", "Transformaciones lineales"],
    teoria: [
      { tipo: "definicion", titulo: "Espacio nulo", html: "<p>El <b>espacio nulo</b> de una matriz $A$ de $m\\times n$, denotado $\\nul A$, es el conjunto de soluciones de la ecuación homogénea $Ax=0$:</p>$$\\nul A=\\{x\\in\\R^n : Ax=0\\}.$$<p>De forma dinámica, es el conjunto de los $x\\in\\R^n$ que la transformación $x\\mapsto Ax$ envía al vector cero de $\\R^m$.</p>" },
      { tipo: "teorema", titulo: "Nul A es subespacio", html: "<p>El espacio nulo de una matriz $A$ de $m\\times n$ es un subespacio de $\\R^n$.</p>" },
      { tipo: "nota", titulo: "Cómo obtener una base de Nul A (Lay §2.8)", html: "<p>Se resuelve $Ax=0$ escribiendo la solución en forma paramétrica: se expresan las variables pivote en función de las variables libres. Cada variable libre produce un vector generador y el conjunto resultante es automáticamente LI, porque en cada vector la variable libre aparece como un $1$ en una posición donde los demás tienen $0$. Luego <b>hay una base de $\\nul A$ con tantos vectores como variables libres</b>.</p>" },
      { tipo: "definicion", titulo: "Espacio columna", html: "<p>El <b>espacio columna</b> de $A=[a_1\\ \\cdots\\ a_n]$ es el conjunto de todas las combinaciones lineales de sus columnas:</p>$$\\col A=\\gen\\{a_1,\\dots,a_n\\}=\\{b : b=Ax\\ \\text{para algún } x\\in\\R^n\\}.$$" },
      { tipo: "teorema", titulo: "Base del espacio columna", html: "<p>El espacio columna de $A$ de $m\\times n$ es un subespacio de $\\R^m$. Las <b>columnas pivote de $A$</b> forman una base de $\\col A$. Además $\\col A=\\R^m$ si y solo si $Ax=b$ tiene solución para todo $b\\in\\R^m$.</p>" },
      { tipo: "nota", titulo: "Cuidado al escalonar (Lay §2.8)", html: "<p>Las operaciones de fila <b>no</b> cambian $\\nul A$, pero <b>sí</b> cambian $\\col A$. Por eso, para una base de $\\col A$ se identifican las columnas pivote en la forma escalonada, pero se toman esas columnas <b>de la matriz original $A$</b>.</p><p>Cuando $A$ no es cuadrada, $\\nul A\\subseteq\\R^n$ y $\\col A\\subseteq\\R^m$ viven en espacios distintos.</p>" },
      { tipo: "definicion", titulo: "Núcleo y rango de una transformación", html: "<p>Para una transformación lineal $T:V\\to W$, el <b>núcleo</b> es $\\{u\\in V : T(u)=0\\}$ y el <b>rango</b> es $\\{T(x) : x\\in V\\}$. El núcleo es subespacio de $V$ y el rango es subespacio de $W$. Si $T(x)=Ax$, el núcleo y el rango son precisamente $\\nul A$ y $\\col A$.</p>" },
      { tipo: "grafico", spec: { tipo: "vectores2d", titulo: "Nul A para $A=\\begin{bmatrix}1&2\\\\3&6\\end{bmatrix}$: la recta $x_1+2x_2=0$", vectores: [ { x: -2, y: 1, x0: 0, y0: 0, label: "(-2,1)", color: "#1e5eff" } ], segmentos: [ { x0: 4, y0: -2, x1: -4, y1: 2, color: "#8e44ad", label: "Nul A" } ], rangeX: [-5, 5], rangeY: [-3, 3] } },
    ],
    ejemplos: [
      { titulo: "¿Pertenece u al espacio nulo?", enunciado: "<p>Sea $A=\\begin{bmatrix}1&-3&-2\\\\-5&9&1\\end{bmatrix}$ y $u=\\begin{bmatrix}5\\\\3\\\\-2\\end{bmatrix}$. ¿Está $u$ en $\\nul A$?</p>", desarrollo: [ "Calculamos $Au$.", "Fila 1: $1\\cdot5+(-3)\\cdot3+(-2)\\cdot(-2)=5-9+4=0$.", "Fila 2: $(-5)\\cdot5+9\\cdot3+1\\cdot(-2)=-25+27-2=0$.", "Como $Au=0$, el vector pertenece a $\\nul A$." ], respuesta: "Sí, $u\\in\\nul A$." },
      { titulo: "Base del espacio nulo", enunciado: "<p>Encuentre una base de $\\nul A$ para $A=\\begin{bmatrix}-3&6&-1&1&-7\\\\1&-2&2&3&-1\\\\2&-4&5&8&-4\\end{bmatrix}$.</p>", desarrollo: [ "La forma reducida de $[A|0]$ es $\\begin{bmatrix}1&-2&0&-1&3&0\\\\0&0&1&2&-2&0\\\\0&0&0&0&0&0\\end{bmatrix}$.", "Variables pivote: $x_1,x_3$. Libres: $x_2,x_4,x_5$.", "De las filas: $x_1=2x_2+x_4-3x_5$ y $x_3=-2x_4+2x_5$.", "Con $(x_2,x_4,x_5)=(1,0,0),(0,1,0),(0,0,1)$ se obtienen los generadores." ], respuesta: "Base de $\\nul A$: $\\{(2,1,0,0,0),\\,(1,0,-2,1,0),\\,(-3,0,2,0,1)\\}$." },
      { titulo: "Base del espacio columna", enunciado: "<p>Encuentre una base de $\\col A$ para $A=\\begin{bmatrix}1&4&0&2&-1\\\\3&12&1&5&5\\\\2&8&1&3&2\\\\5&20&2&8&8\\end{bmatrix}$.</p>", desarrollo: [ "$A$ es equivalente por filas a $B=\\begin{bmatrix}1&4&0&2&0\\\\0&0&1&-1&0\\\\0&0&0&0&1\\\\0&0&0&0&0\\end{bmatrix}$.", "Las columnas pivote de $B$ son las columnas 1, 3 y 5.", "Tomamos esas mismas columnas de la matriz original $A$.", "Son $a_1=(1,3,2,5)$, $a_3=(0,1,1,2)$, $a_5=(-1,5,2,8)$." ], respuesta: "Base de $\\col A$: $\\{(1,3,2,5),\\,(0,1,1,2),\\,(-1,5,2,8)\\}$." },
    ],
    ejercicios: [
      { titulo: "Nul de una matriz 2×2", dificultad: "basico", enunciado: "<p>Encuentre una base de $\\nul A$ para $A=\\begin{bmatrix}1&2\\\\3&6\\end{bmatrix}$.</p>", pista: "Resuelva $x_1+2x_2=0$.", desarrollo: [ "La segunda fila es $3$ veces la primera, así que basta $x_1+2x_2=0$.", "$x_2$ es libre; $x_1=-2x_2$.", "Solución: $x=x_2(-2,1)$." ], respuesta: "Base: $\\{(-2,1)\\}$." },
      { titulo: "¿Está b en Col A?", dificultad: "basico", enunciado: "<p>Con $A=\\begin{bmatrix}1&3\\\\2&6\\end{bmatrix}$ y $b=(2,4)$, determine si $b\\in\\col A$.</p>", pista: "Las columnas de $A$ son múltiplos entre sí.", desarrollo: [ "Las columnas son $(1,2)$ y $(3,6)=3(1,2)$, así que $\\col A=\\gen\\{(1,2)\\}$.", "¿Es $b=(2,4)$ múltiplo de $(1,2)$? Sí: $(2,4)=2(1,2)$.", "Luego $b$ es combinación de las columnas." ], respuesta: "Sí, $b\\in\\col A$." },
      { titulo: "Dimensión de un espacio columna", dificultad: "intermedio", enunciado: "<p>Determine el número de vectores de una base de $\\col A$ para $A=\\begin{bmatrix}1&2&3\\\\0&1&4\\\\0&0&0\\end{bmatrix}$.</p>", pista: "Cuente las columnas pivote.", desarrollo: [ "La matriz está en forma escalonada.", "Los pivotes están en las columnas 1 y 2.", "El número de columnas pivote es 2." ], respuesta: "Una base de $\\col A$ tiene 2 vectores." },
      { titulo: "Núcleo y rango de una transformación", dificultad: "avanzado", enunciado: "<p>Sea $T:P_3\\to\\R^2$ dada por $T(p)=\\begin{bmatrix}p(0)\\\\p(1)-p(-1)\\end{bmatrix}$. Encuentre el núcleo y el rango de $T$.</p>", pista: "Escriba $p(t)=at^3+bt^2+ct+d$.", desarrollo: [ "$p(0)=d$, y $p(1)-p(-1)=2a+2c$.", "Núcleo: $d=0$ y $a+c=0$, es decir $c=-a$; quedan $a,b$ libres.", "Así $\\ker T=\\gen\\{t^3-t,\\ t^2\\}$, de dimensión 2.", "Rango: $T(p)=(d,\\,2a+2c)$ recorre todo $\\R^2$ al variar $a,c,d$." ], respuesta: "$\\ker T=\\gen\\{t^3-t,\\,t^2\\}$ y $\\operatorname{ran} T=\\R^2$." },
    ],
    erroresComunes: [
      "Usar las columnas pivote de la matriz escalonada (no las de $A$) para bases de $\\col A$.",
      "Creer que las operaciones de fila preservan $\\col A$ (no lo hacen).",
      "Confundir el espacio al que pertenecen los vectores: $\\nul A\\subseteq\\R^n$ y $\\col A\\subseteq\\R^m$.",
      "Olvidar las variables libres al describir $\\nul A$, produciendo menos generadores de los necesarios.",
      "Pensar que $\\nul A$ puede contener el vector cero solo si $A=0$.",
    ],
    checklist: [
      "Calculo $\\nul A$ resolviendo $Ax=0$ y escribo la solución paramétrica.",
      "Obtengo bases de $\\nul A$ usando las variables libres.",
      "Identifico columnas pivote y tomo las correspondientes columnas de $A$ para $\\col A$.",
      "Relaciono núcleo con $\\nul A$ y rango con $\\col A$ cuando $T(x)=Ax$.",
      "Reconozco que $\\col A=\\R^m$ si $Ax=b$ es consistente para todo $b$.",
    ],
    autoevaluacion: [
      { pregunta: "El número de vectores de una base de $\\nul A$ es igual a:", opciones: [ "El número de filas de $A$", "El número de columnas pivote", "El número de variables libres en $Ax=0$", "El rango de $A$" ], correcta: 2, explicacion: "Cada variable libre produce un vector generador de $\\nul A$." },
      { pregunta: "¿Qué columnas forman una base de $\\col A$?", opciones: [ "Las columnas de la forma escalonada", "Las columnas pivote de $A$", "Las filas no nulas", "Las columnas libres" ], correcta: 1, explicacion: "Las columnas pivote de la matriz original forman la base de $\\col A$." },
      { pregunta: "Si $A$ es $3\\times5$, entonces $\\nul A$ es subespacio de:", opciones: [ "$\\R^3$", "$\\R^5$", "$\\R^{15}$", "$\\R^2$" ], correcta: 1, explicacion: "$Ax=0$ tiene $x\\in\\R^5$, así que $\\nul A\\subseteq\\R^5$." },
    ],
    referencias: [ { titulo: "Clase 24 — Espacios Nulo y Columna. Transformaciones lineales (PDF)", ruta: "recursos/clases/clase-24.pdf" } ],
  });
})();
