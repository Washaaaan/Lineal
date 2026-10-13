/* Módulo 5 · Sección 5 — Dimensión */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m05_s05", modulo: 5, moduloNombre: "Módulo 5 · Espacios vectoriales", orden: 5,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Dimensión",
    objetivo: "Calcular la dimensión de espacios y subespacios, y aplicar el teorema del rango relacionando rango, espacio nulo y número de columnas.",
    fuente: "Clase 26 · Lay §4.5–4.6 · Poole §3.4–3.6",
    prerrequisitos: ["Bases", "Espacio nulo y columna", "Sistemas de coordenadas"],
    teoria: [
      { tipo: "teorema", titulo: "Todas las bases miden lo mismo", html: "<p>Si $V$ tiene una base con $n$ vectores, entonces cualquier conjunto de más de $n$ vectores es linealmente dependiente, y ningún conjunto de menos de $n$ vectores genera $V$. En consecuencia, <b>todas las bases de $V$ tienen exactamente $n$ vectores</b>.</p>" },
      { tipo: "definicion", titulo: "Dimensión", html: "<p>Si $V$ es generado por un conjunto finito, se dice que tiene <b>dimensión finita</b>, y su <b>dimensión</b> $\\dim V$ es el número de vectores de una base de $V$. La dimensión del espacio cero es $\\dim\\{0\\}=0$. Si $V$ no es generado por un conjunto finito, se dice de <b>dimensión infinita</b>.</p>" },
      { tipo: "nota", titulo: "Ejemplos de dimensiones (Lay §4.5)", html: "<ul><li>$\\dim\\R^n=n$.</li><li>$\\dim P_n=n+1$ (la base es $\\{1,t,\\dots,t^n\\}$).</li><li>$\\dim M_{m\\times n}=mn$.</li><li>En $\\R^3$ los subespacios tienen dimensiones posibles $0,1,2,3$ (origen, recta, plano, todo $\\R^3$).</li></ul>" },
      { tipo: "teorema", titulo: "Subespacios y extensión a bases", html: "<p>Sea $H$ un subespacio de un espacio de dimensión finita $V$. Todo conjunto linealmente independiente de $H$ puede extenderse a una base de $H$. Además, $H$ tiene dimensión finita y $\\dim H\\le\\dim V$.</p>" },
      { tipo: "teorema", titulo: "Teorema base", html: "<p>Si $\\dim V=p\\ge1$: todo conjunto LI de exactamente $p$ vectores de $V$ es automáticamente una base, y todo conjunto de exactamente $p$ vectores que genera $V$ también es una base.</p>" },
      { tipo: "nota", titulo: "Dimensiones de Nul A, Col A y Fila A (Lay §4.5–4.6)", html: "<p>La dimensión de $\\nul A$ es el número de <b>variables libres</b> de $Ax=0$, y la de $\\col A$ es el número de <b>columnas pivote</b>. El espacio fila $\\operatorname{Fila} A=\\col A^{T}$ tiene la misma dimensión que $\\col A$, y si $B$ es una forma escalonada de $A$, las filas no nulas de $B$ forman una base del espacio fila de $A$.</p>" },
      { tipo: "teorema", titulo: "Teorema del rango", html: "<p>Para $A$ de $m\\times n$, las dimensiones del espacio columna y del espacio fila coinciden. Ese valor común es el <b>rango</b> de $A$, igual al número de posiciones pivote, y cumple</p>$$\\rank A+\\dim\\nul A=n.$$" },
      { tipo: "nota", titulo: "Teorema de la matriz invertible (continuación, Lay §4.6)", html: "<p>Para $A$ de $n\\times n$ son equivalentes: las columnas de $A$ forman una base de $\\R^n$; $\\col A=\\R^n$; $\\dim\\col A=n$; $\\rank A=n$; $\\nul A=\\{0\\}$; $\\dim\\nul A=0$.</p>" },
      { tipo: "grafico", spec: { tipo: "vectores3d", titulo: "Subespacios de R^3: recta (dim 1) y plano (dim 2)", vectores: [ { x: 2, y: -1, z: 3, x0: 0, y0: 0, z0: 0, label: "recta dim 1", color: "#1e5eff" } ], planos: [ { a: 0, b: 1, c: 0, d: 0, color: "#00b894", label: "plano y=0 (dim 2)" } ], range: { x: [-5, 5], y: [-5, 5], z: [-5, 5] } } },
    ],
    ejemplos: [
      { titulo: "Dimensión de un generado", enunciado: "<p>Sea $H=\\gen\\{v_1,v_2\\}$ con $v_1=(3,6,2)$ y $v_2=(-1,0,1)$. Determine $\\dim H$.</p>", desarrollo: [ "$v_1$ no es múltiplo de $v_2$ (no existe $k$ con $(3,6,2)=k(-1,0,1)$, pues la segunda coordenada daría $6=0$).", "El conjunto $\\{v_1,v_2\\}$ es LI.", "Un generador LI es una base." ], respuesta: "$\\dim H=2$." },
      { titulo: "Dimensión de un subespacio dado por fórmula", enunciado: "<p>Determine la dimensión de $H=\\{(a-3b+6c,\\ 5a+4d,\\ b-2c-d,\\ 5d): a,b,c,d\\in\\R\\}$.</p>", desarrollo: [ "Escribimos los vectores como combinación: $a(1,5,0,0)+b(-3,0,1,0)+c(6,0,-2,0)+d(0,4,-1,5)$.", "Notamos que $c(6,0,-2,0)=-2c\\,(-3,0,1,0)$, así que el cuarto generador es redundante.", "Quedan $v_1=(1,5,0,0)$, $v_2=(-3,0,1,0)$, $v_4=(0,4,-1,5)$.", "Comprobamos LI: $\\alpha v_1+\\beta v_2+\\delta v_4=0$ da, por la cuarta coordenada, $5\\delta=0\\Rightarrow\\delta=0$; luego $\\beta-\\delta=0\\Rightarrow\\beta=0$; y $5\\alpha+4\\delta=0\\Rightarrow\\alpha=0$." ], respuesta: "$\\dim H=3$." },
      { titulo: "Rango y nulidad", enunciado: "<p>Para $A=\\begin{bmatrix}-3&6&-1&1&-7\\\\1&-2&2&3&-1\\\\2&-4&5&8&-4\\end{bmatrix}$, calcule $\\dim\\nul A$, $\\dim\\col A$ y verifique el teorema del rango.</p>", desarrollo: [ "La forma reducida de $[A|0]$ tiene pivotes en las columnas 1 y 3: hay 2 columnas pivote.", "$\\dim\\col A=2$ y $\\rank A=2$.", "De 5 columnas, variables libres $=5-2=3$, así $\\dim\\nul A=3$.", "Verificación: $\\rank A+\\dim\\nul A=2+3=5=n$." ], respuesta: "$\\dim\\col A=2$, $\\dim\\nul A=3$, y $2+3=5$." },
    ],
    ejercicios: [
      { titulo: "Dimensiones básicas", dificultad: "basico", enunciado: "<p>Indique $\\dim\\R^4$ y $\\dim P_4$.</p>", pista: "Recuerde la base estándar.", desarrollo: [ "$\\R^4$ tiene base estándar de 4 vectores: $\\dim\\R^4=4$.", "$P_4$ tiene base $\\{1,t,t^2,t^3,t^4\\}$, con 5 vectores." ], respuesta: "$\\dim\\R^4=4$ y $\\dim P_4=5$." },
      { titulo: "Dimensión de un generado", dificultad: "basico", enunciado: "<p>Determine la dimensión de $H=\\gen\\{(1,0),(0,1),(1,1)\\}$.</p>", pista: "Detecte la dependencia.", desarrollo: [ "$(1,1)=(1,0)+(0,1)$, así que el tercer vector es redundante.", "$H=\\gen\\{(1,0),(0,1)\\}=\\R^2$.", "Los dos generadores restantes son LI." ], respuesta: "$\\dim H=2$." },
      { titulo: "Nulidad a partir del rango", dificultad: "intermedio", enunciado: "<p>Una matriz $A$ de $4\\times5$ tiene rango $3$. ¿Cuál es la dimensión de su espacio nulo?</p>", pista: "Use el teorema del rango.", desarrollo: [ "Teorema del rango: $\\rank A+\\dim\\nul A=n$.", "Aquí $n=5$ y $\\rank A=3$.", "Entonces $\\dim\\nul A=5-3=2$." ], respuesta: "$\\dim\\nul A=2$." },
      { titulo: "Aplicación del teorema del rango", dificultad: "avanzado", enunciado: "<p>Si $A$ es de $7\\times9$ con $\\dim\\nul A=2$, ¿cuál es $\\rank A$? ¿Podría una matriz de $6\\times9$ tener espacio nulo de dimensión 2?</p>", pista: "El rango nunca supera el número de filas.", desarrollo: [ "$\\rank A=9-\\dim\\nul A=9-2=7$.", "Para una matriz $6\\times9$ con $\\dim\\nul=2$ se tendría $\\rank=9-2=7$.", "Pero el rango no puede superar el número de filas ($6$).", "Por lo tanto, es imposible." ], respuesta: "$\\rank A=7$; una matriz $6\\times9$ no puede tener $\\dim\\nul=2$." },
    ],
    erroresComunes: [
      "Creer que dos bases distintas de un mismo espacio pueden tener distinto número de vectores.",
      "Confundir la dimensión con el número de filas o de entradas de una matriz.",
      "Olvidar que $\\dim\\nul A$ = número de variables libres y $\\dim\\col A$ = número de pivotes.",
      "Aplicar $\\rank A+\\dim\\nul A=m$ (filas) en vez de $n$ (columnas).",
      "Suponer que un conjunto LI de 5 vectores en $\\R^4$ puede existir.",
    ],
    checklist: [
      "Sé que todas las bases de un espacio de dimensión finita tienen el mismo tamaño.",
      "Calculo $\\dim V$ contando los vectores de una base.",
      "Uso $\\dim P_n=n+1$ y $\\dim\\R^n=n$.",
      "Aplico el teorema del rango: $\\rank A+\\dim\\nul A=n$.",
      "Identifico el rango con el número de columnas pivote.",
    ],
    autoevaluacion: [
      { pregunta: "Si $V$ tiene una base con 4 vectores, ¿cuántos vectores tiene toda base de $V$?", opciones: [ "Menos de 4", "4", "Más de 4", "Depende de la base" ], correcta: 1, explicacion: "Todas las bases de $V$ tienen el mismo número de vectores, igual a $\\dim V$." },
      { pregunta: "Para $A$ de $5\\times7$ con rango 4, $\\dim\\nul A$ es:", opciones: [ "3", "4", "5", "7" ], correcta: 0, explicacion: "$\\dim\\nul A=7-4=3$ por el teorema del rango." },
      { pregunta: "El rango de una matriz $A$ es igual a:", opciones: [ "El número de filas", "El número de variables libres", "El número de columnas pivote", "$\\dim\\nul A$" ], correcta: 2, explicacion: "El rango es la dimensión de $\\col A$, igual al número de posiciones pivote." },
    ],
    referencias: [ { titulo: "Clase 26 — Dimensión (PDF)", ruta: "recursos/clases/clase-26.pdf" } ],
  });
})();
