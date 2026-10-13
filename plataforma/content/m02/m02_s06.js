/* Módulo 2 · Sección 6 — Sistemas homogéneos y conjunto solución */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m02_s06", modulo: 2, moduloNombre: "Módulo 2 · Sistemas de ecuaciones lineales", orden: 6,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Sistemas homogéneos y conjunto solución",
    objetivo: "Reconocer un sistema homogéneo Ax=0, decidir cuándo admite soluciones no triviales y describir el conjunto solución de un sistema no homogéneo como una traslación del conjunto solución homogéneo.",
    fuente: "Clase 11 · Apunte Clase 10 (Sistemas homogéneos) · Lay §1.5 · Poole §2.3",
    prerrequisitos: ["Soluciones de un SEL", "Variables libres", "Conjunto generado (Gen)"],
    teoria: [
      { tipo: "texto", html: "<p>Un caso especialmente importante es el de los sistemas cuyo vector de resultados es el vector nulo. Su conjunto solución tiene una estructura muy regular y aparece en todo el curso (núcleo de una transformación, subespacios, etc.).</p>" },
      { tipo: "definicion", titulo: "Sistema lineal homogéneo", html: "<p>Un sistema es <b>homogéneo</b> si puede escribirse como</p>$$Ax=\\mathbf{0}.$$<p>El sistema homogéneo <b>siempre</b> tiene al menos una solución: $x=\\mathbf{0}$, llamada <b>solución trivial</b>. Cualquier otra solución se llama <b>no trivial</b>.</p>" },
      { tipo: "teorema", titulo: "Existencia de soluciones no triviales", html: "<p>El sistema homogéneo $Ax=\\mathbf{0}$ tiene una solución <b>no trivial</b> si y solo si el sistema tiene <b>al menos una variable libre</b>. Más aún, el conjunto solución es siempre un <b>conjunto generado</b>:</p>$$x=t_1u_1+t_2u_2+\\cdots+t_ku_k,$$<p>que describe rectas, planos (o hiperplanos) <b>que pasan por el origen</b>.</p>" },
      { tipo: "teorema", titulo: "Solución general de un sistema no homogéneo", html: "<p>Si el sistema $Ax=b$ tiene al menos una solución $p$, entonces su conjunto solución completo es</p>$$x=p+v_h,$$<p>donde $v_h$ recorre <b>todas</b> las soluciones del sistema homogéneo $Ax=\\mathbf{0}$ asociado.</p>" },
      { tipo: "grafico", spec: { tipo: "vectores2d", titulo: "Solución de Ax=b = traslación de la solución de Ax=0", vectores: [ { x: 4, y: 3, label: "v (dirección homogénea)", color: "#1e5eff" }, { x: 4, y: 3, x0: -1, y0: 2, label: "v desde p", color: "#e17055" } ], puntos: [ { x: -1, y: 2, label: "p=(−1,2)" } ], rangeX: [-2, 6], rangeY: [-1, 5] } },
      { tipo: "nota", titulo: "Interpretación geométrica (Lay §1.5)", html: "<p>Las soluciones de $Ax=b$ se obtienen <b>trasladando</b> las soluciones de $Ax=\\mathbf{0}$ por un vector particular $p$. Por eso, si $Ax=0$ solución es una recta por el origen, entonces $Ax=b$ es una recta <i>paralela</i> que pasa por $p$.</p>" },
      { tipo: "nota", titulo: "La homogeneidad depende de A (Poole §2.3)", html: "<p>Si $A\\sim B$ (equivalentes por filas), entonces $Ax=\\mathbf{0}$ y $Bx=\\mathbf{0}$ tienen exactamente las mismas soluciones. Esta propiedad <b>no</b> vale para sistemas no homogéneos: ahí el vector $b$ también importa.</p>" },
    ],
    ejemplos: [
      { titulo: "Homogéneo con dos variables libres", enunciado: "Describa todas las soluciones de $10x_1-3x_2-2x_3=0$.", desarrollo: [ "Hay una sola ecuación con tres variables: dos de ellas son libres.", "Despejamos $x_1=\\tfrac{3x_2+2x_3}{10}$.", "Escribimos $x=x_2\\cdot\\tfrac1{10}\\begin{bmatrix}3\\\\10\\\\0\\end{bmatrix}+x_3\\cdot\\tfrac1{10}\\begin{bmatrix}2\\\\0\\\\10\\end{bmatrix}$.", "Equivalente y más limpio: $x=s\\begin{bmatrix}3\\\\10\\\\0\\end{bmatrix}+t\\begin{bmatrix}1\\\\0\\\\5\\end{bmatrix}$." ], respuesta: "$x=s\\langle3,10,0\\rangle+t\\langle1,0,5\\rangle$ con $s,t\\in\\R$: un plano por el origen." },
      { titulo: "Homogéneo 3×3 sin solución trivial extra", enunciado: "Resuelva $\\begin{cases}3x_1+5x_2-4x_3=0\\\\ -3x_1-2x_2+4x_3=0\\\\ 6x_1+x_2-8x_3=0\\end{cases}$.", desarrollo: [ "Sumando la primera y la segunda: $3x_2=0\\Rightarrow x_2=0$.", "En la primera: $3x_1-4x_3=0\\Rightarrow x_1=\\tfrac43x_3$.", "Con $x_3=t$: $x=t\\langle\\tfrac43,0,1\\rangle$, o bien $x=s\\langle4,0,3\\rangle$.", "Verificación en la segunda: $-3(4s)+0+4(3s)=0$. ✓" ], respuesta: "$x=s\\langle4,0,3\\rangle$, $s\\in\\R$: hay soluciones no triviales." },
      { titulo: "No homogéneo: particular + homogéneo", enunciado: "Con $A=\\begin{bmatrix}3&5&-4\\\\ -3&-2&4\\\\ 6&1&-8\\end{bmatrix}$ y $b=\\begin{bmatrix}7\\\\-1\\\\-4\\end{bmatrix}$, describa todas las soluciones de $Ax=b$.", desarrollo: [ "Se verifica que $p=\\langle-1,2,0\\rangle$ es solución: $Ap=\\langle7,-1,-4\\rangle=b$. ✓", "El sistema homogéneo asociado tiene solución $v_h=s\\langle4,0,3\\rangle$ (ejemplo anterior).", "Por el teorema, la solución general es $x=p+v_h$." ], respuesta: "$x=\\langle-1,2,0\\rangle+s\\langle4,0,3\\rangle$, $s\\in\\R$: recta paralela a la solución homogénea." },
    ],
    ejercicios: [
      { titulo: "¿Solución no trivial?", dificultad: "basico", enunciado: "¿Tiene $\\begin{cases}x_1+2x_2=0\\\\ 2x_1+4x_2=0\\end{cases}$ soluciones no triviales?", pista: "Reduzca y cuente variables libres.", desarrollo: [ "La segunda ecuación es el doble de la primera; el sistema equivale a $x_1+2x_2=0$.", "Queda una variable libre ($x_2$).", "Con $x_2=t$: $x_1=-2t$." ], respuesta: "Sí: $x=t\\langle-2,1\\rangle$, $t\\in\\R$ (infinitas soluciones no triviales)." },
      { titulo: "Conjunto solución como generado", dificultad: "basico", enunciado: "Escriba el conjunto solución de $\\begin{cases}x_1-2x_2+x_3=0\\\\ 2x_2-8x_3=0\\end{cases}$.", pista: "Despeje las variables básicas en función de la libre.", desarrollo: [ "De la segunda: $x_2=4x_3$.", "En la primera: $x_1=2x_2-x_3=8x_3-x_3=7x_3$.", "Con $x_3=t$: $x=t\\langle7,4,1\\rangle$." ], respuesta: "$x=t\\langle7,4,1\\rangle$, $t\\in\\R$." },
      { titulo: "Desde la FER", dificultad: "intermedio", enunciado: "Si la FER de $A$ es $\\begin{bmatrix}1&0&-1\\\\ 0&1&1\\\\ 0&0&0\\end{bmatrix}$, describa el conjunto solución de $Ax=\\mathbf{0}$.", pista: "La tercera columna no es pivote.", desarrollo: [ "Ecuaciones: $x_1-x_3=0$ y $x_2+x_3=0$.", "Con $x_3=t$ libre: $x_1=t$ y $x_2=-t$.", "Entonces $x=t\\langle1,-1,1\\rangle$." ], respuesta: "$x=t\\langle1,-1,1\\rangle$: recta por el origen." },
      { titulo: "No homogéneo completo", dificultad: "avanzado", enunciado: "El sistema $Ax=b$ tiene solución particular $p=\\langle3,1,0\\rangle$ y su homogéneo asociado tiene solución general $x_h=r\\langle1,2,0\\rangle+s\\langle-1,1,1\\rangle$. Escriba la solución general de $Ax=b$.", pista: "Sume la particular más el homogéneo completo.", desarrollo: [ "La solución general es $x=p+x_h$ con $r,s$ libres.", "$x=\\langle3,1,0\\rangle+r\\langle1,2,0\\rangle+s\\langle-1,1,1\\rangle$.", "El conjunto es un plano trasladado que pasa por $p$, paralelo al plano del homogéneo." ], respuesta: "$x=\\langle3,1,0\\rangle+r\\langle1,2,0\\rangle+s\\langle-1,1,1\\rangle$, $r,s\\in\\R$." },
    ],
    erroresComunes: [
      "Afirmar que el sistema homogéneo solo tiene la solución trivial.",
      "Olvidar que, si hay variable libre, el homogéneo tiene infinitas soluciones no triviales.",
      "Confundir el conjunto solución homogéneo (pasa por el origen) con el no homogéneo (en general no pasa por el origen).",
      "Escribir la solución general no homogénea sin sumar la parte particular $p$.",
    ],
    checklist: [
      "Reconozco un sistema homogéneo $Ax=\\mathbf{0}$ y su solución trivial.",
      "Decido la existencia de soluciones no triviales contando variables libres.",
      "Escribo el conjunto solución homogéneo como un conjunto generado.",
      "Uso $x=p+v_h$ para describir la solución general no homogénea.",
      "Relaciono las soluciones con rectas/planos que pasan por el origen y sus traslaciones.",
    ],
    autoevaluacion: [
      { pregunta: "El sistema homogéneo $Ax=\\mathbf{0}$ siempre tiene:", opciones: [ "La solución trivial $x=\\mathbf{0}$", "Solución única", "Infinitas soluciones", "Ninguna solución" ], correcta: 0, explicacion: "Sustituir $x=0$ satisface siempre $A\\mathbf{0}=\\mathbf{0}$." },
      { pregunta: "Un sistema homogéneo tiene solución no trivial si y solo si:", opciones: [ "Tiene al menos una variable libre", "Tiene más ecuaciones que variables", "Su única columna pivote es la primera", "$A$ es la matriz nula" ], correcta: 0, explicacion: "Una variable libre genera infinitas soluciones no triviales." },
      { pregunta: "La solución general de $Ax=b$ (si $p$ es una solución particular) es:", opciones: [ "$x=p+v_h$ con $v_h$ solución de $Ax=0$", "$x=p$ únicamente", "$x=v_h$", "$x=\\mathbf{0}$" ], correcta: 0, explicacion: "Toda solución es una particular más una solución del homogéneo asociado." },
    ],
    referencias: [ { titulo: "Clase 11 — Sistemas homogéneos y conjunto solución (PDF)", ruta: "recursos/clases/clase-11.pdf" }, { titulo: "Apunte Clase 10 (Sistemas homogéneos, PDF)", ruta: "recursos/apuntes/apunte-clase-10.pdf" } ],
  });
})();
