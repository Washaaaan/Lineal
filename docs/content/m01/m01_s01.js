/* Módulo 1 · Sección 1 — Vectores en R², R³ y Rⁿ */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m01_s01", modulo: 1, moduloNombre: "Módulo 1 · Vectores y geometría", orden: 1,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Vectores en R², R³ y Rⁿ",
    objetivo: "Representar un vector en el plano y en el espacio, operar sumando/restándolo y multiplicándolo por un escalar, y distinguir sus formas (par ordenado, punto, flecha en posición estándar).",
    fuente: "Clase 01 · Apunte Clase 1 (Vectores) · Lay §1.3 · Poole §1.1",
    prerrequisitos: ["Plano cartesiano", "Números reales", "Teorema de Pitágoras"],
    teoria: [
      { tipo: "texto", html: "<p>El Álgebra Lineal modela desplazamientos, fuerzas, velocidades e información mediante <b>vectores</b>. Estos aparecen en circuitos, estructuras, gráficos computacionales, optimización y análisis de datos.</p>" },
      { tipo: "definicion", titulo: "Vector (definición geométrica y algebraica)", html: "<p>Un <b>vector</b> es un objeto con <i>dirección</i>, <i>sentido</i> y <i>magnitud</i>. Un vector en $\\R^2$ se representa por un par ordenado y uno en $\\R^3$ por una terna:</p>$$\\langle a,b\\rangle=[a,\\;b]=\\begin{bmatrix}a\\\\ b\\end{bmatrix},\\qquad \\langle a,b,c\\rangle=\\begin{bmatrix}a\\\\ b\\\\ c\\end{bmatrix}.$$<p>En general, un <b>vector en $\\R^n$</b> es una $n$-tupla de números reales $v=\\langle v_1,v_2,\\dots,v_n\\rangle$. Los números $v_1,\\dots,v_n$ son sus <b>componentes</b>.</p>" },
      { tipo: "nota", titulo: "Punto vs. vector (Lay §1.3)", html: "<p>Desde el punto de vista geométrico, un vector es una <b>flecha</b>. Cuando su cola se ubica en el origen se dice que está en <b>posición estándar</b>. En $\\R^2$ a menudo identificamos el vector $\\begin{bmatrix}a\\\\ b\\end{bmatrix}$ con el punto $(a,b)$; ambos se representan con la misma flecha desde el origen.</p>" },
      { tipo: "definicion", titulo: "Igualdad, suma y multiplicación por escalar", html: "<p><b>Igualdad:</b> dos vectores son iguales si y solo si tienen las mismas componentes (y la misma dimensión).</p><p><b>Suma</b> (por componentes): $$u+v=\\langle u_1+v_1,\\dots,u_n+v_n\\rangle.$$</p><p><b>Escalar:</b> dado $c\\in\\R$, $$cv=\\langle cv_1,\\dots,cv_n\\rangle.$$</p>" },
      { tipo: "nota", titulo: "Interpretación geométrica (Poole §1.1)", html: "<p>Geométricamente, $u+v$ se obtiene por la <b>ley del paralelógramo</b> (o punta-con-cola): traslada $v$ hasta la punta de $u$; el vector resultante une el origen con esa punta. El múltiplo $cv$ es <b>paralelo</b> a $v$: estira ($|c|>1$), comprime ($0<|c|<1$) o invierte ($c<0$) su dirección.</p>" },
      { tipo: "grafico", spec: { tipo: "vectores2d", titulo: "Suma de vectores (ley del paralelógramo)", vectores: [ { x: 3, y: 1, label: "u", color: "#1e5eff" }, { x: 1, y: 2, label: "v", color: "#00b894" }, { x: 4, y: 3, label: "u+v", color: "#e17055", width: 4 } ], segmentos: [ { x0: 3, y0: 1, x1: 4, y1: 3, dash: "dot", color: "#00b894" }, { x0: 1, y0: 2, x1: 4, y1: 3, dash: "dot", color: "#1e5eff" } ], rangeX: [-1, 5.5], rangeY: [-1, 4.5] } },
      { tipo: "teorema", titulo: "Propiedades algebraicas", html: "<p>Para vectores $u,v,w$ y escalares $c,k$:</p><ul><li>$u+v=v+u$ (conmutatividad)</li><li>$(u+v)+w=u+(v+w)$ (asociatividad)</li><li>$c(u+v)=cu+cv$, $(c+k)v=cv+kv$ (distributividad)</li><li>$c(kv)=(ck)v$</li><li>$1v=v$; existe $\\mathbf{0}=\\langle0,\\dots,0\\rangle$ con $\\mathbf{0}+v=v$</li><li>cada $v$ tiene opuesto $-v$ con $v+(-v)=\\mathbf{0}$</li></ul>" },
    ],
    ejemplos: [
      { titulo: "Vector de desplazamiento", enunciado: "Determine el vector de desplazamiento entre $A(2,3)$ y $B(-1,5)$.", desarrollo: [ "El vector de desplazamiento de $A$ a $B$ es $\\overrightarrow{AB}=B-A$.", "Restamos componente a componente: $\\overrightarrow{AB}=\\langle -1-2,\\;5-3\\rangle$.", "Se obtiene $\\overrightarrow{AB}=\\langle -3,\\;2\\rangle$." ], respuesta: "$\\overrightarrow{AB}=\\langle -3,\\;2\\rangle$", grafico: { tipo: "vectores2d", titulo: "Desplazamiento de A a B", vectores: [ { x: -3, y: 2, x0: 2, y0: 3, label: "AB", color: "#1e5eff" } ], puntos: [ { x: 2, y: 3, label: "A(2,3)" }, { x: -1, y: 5, label: "B(-1,5)" } ], ocultarLeyenda: true, rangeX: [-2.5, 3.5], rangeY: [1.5, 6] } },
      { titulo: "Suma y combinación escalar", enunciado: "Dados $u=\\langle 2,-1,3\\rangle$ y $v=\\langle -1,4,0\\rangle$, calcule $u+v$ y $2u-v$.", desarrollo: [ "$u+v=\\langle 2+(-1),\\;-1+4,\\;3+0\\rangle=\\langle 1,3,3\\rangle$.", "$2u=\\langle 4,-2,6\\rangle$ y $-v=\\langle 1,-4,0\\rangle$.", "$2u-v=2u+(-v)=\\langle 4+1,\\;-2-4,\\;6+0\\rangle=\\langle 5,-6,6\\rangle$." ], respuesta: "$u+v=\\langle 1,3,3\\rangle$ y $2u-v=\\langle 5,-6,6\\rangle$" },
      { titulo: "Uso del paralelógramo", enunciado: "Verifique que en $\\R^2$, $\\langle 1,0\\rangle+\\langle 0,1\\rangle=\\langle 1,1\\rangle$ interpretando geométricamente.", desarrollo: [ "El vector $e_1=\\langle1,0\\rangle$ apunta sobre el eje $x$; $e_2=\\langle0,1\\rangle$ sobre el eje $y$.", "Al sumarlos punta-con-cola se llega al punto $(1,1)$.", "Por lo tanto la suma es la diagonal del cuadrado unitario: $\\langle 1,1\\rangle$." ], respuesta: "$\\langle 1,1\\rangle$; es la diagonal del cuadrado unitario.", grafico: { tipo: "vectores2d", titulo: "e₁ + e₂ = (1,1)", vectores: [ { x: 1, y: 0, label: "e₁", color: "#1e5eff" }, { x: 1, y: 1, x0: 1, y0: 0, label: "e₂", color: "#00b894" }, { x: 1, y: 1, label: "e₁+e₂", color: "#e17055", width: 4 } ], rangeX: [-0.5, 1.8], rangeY: [-0.5, 1.8] } },
    ],
    ejercicios: [
      { titulo: "Operaciones básicas", dificultad: "basico", enunciado: "Dados $u=\\langle 3,-2,1\\rangle$, $v=\\langle -1,0,4\\rangle$, calcule $u+v$, $u-v$ y $3u+2v$.", pista: "Opere componente a componente.", desarrollo: [ "$u+v=\\langle 3-1,\\,-2+0,\\,1+4\\rangle=\\langle 2,-2,5\\rangle$.", "$u-v=\\langle 3+1,\\,-2-0,\\,1-4\\rangle=\\langle 4,-2,-3\\rangle$.", "$3u=\\langle9,-6,3\\rangle$, $2v=\\langle-2,0,8\\rangle\\Rightarrow 3u+2v=\\langle7,-6,11\\rangle$." ], respuesta: "$u+v=\\langle2,-2,5\\rangle$, $u-v=\\langle4,-2,-3\\rangle$, $3u+2v=\\langle7,-6,11\\rangle$" },
      { titulo: "Desplazamiento entre puntos", dificultad: "basico", enunciado: "Encuentre el vector $\\overrightarrow{PQ}$ con $P=(1,-1,0)$ y $Q=(4,2,-3)$. ¿Cuál es su punto medio?", pista: "$\\overrightarrow{PQ}=Q-P$; el punto medio es $\\tfrac{P+Q}{2}$.", desarrollo: [ "$\\overrightarrow{PQ}=\\langle 4-1,\\,2-(-1),\\,-3-0\\rangle=\\langle3,3,-3\\rangle$.", "Punto medio: $\\left(\\frac{1+4}{2},\\frac{-1+2}{2},\\frac{0-3}{2}\\right)$." ], respuesta: "$\\overrightarrow{PQ}=\\langle3,3,-3\\rangle$; punto medio $=\\left(\\tfrac52,\\tfrac12,-\\tfrac32\\right)$" },
      { titulo: "Vector nulo", dificultad: "basico", enunciado: "Determine los escalares $a,b$ tales que $a\\langle2,-1\\rangle+b\\langle-4,2\\rangle=\\mathbf{0}$ ¿Cuántas soluciones hay?", pista: "Escriba el sistema por componentes.", desarrollo: [ "Componente $x$: $2a-4b=0\\Rightarrow a=2b$.", "Componente $y$: $-a+2b=0\\Rightarrow a=2b$ (misma ecuación).", "Las dos ecuaciones son equivalentes: hay infinitas soluciones de la forma $a=2b$." ], respuesta: "$a=2b$: infinitas soluciones (p. ej. $a=2,b=1$). Los vectores son paralelos." },
      { titulo: "Interpretación", dificultad: "intermedio", enunciado: "Explique geométricamente qué representa el conjunto $\\{t\\langle3,4\\rangle : t\\in\\R\\}$ en $\\R^2$.", pista: "Piense en todos los múltiplos escalares del vector.", desarrollo: [ "Para cada $t$ se obtiene un vector paralelo a $\\langle3,4\\rangle$.", "Al variar $t\\in\\R$ se recorren ambos sentidos sobre la misma dirección." ], respuesta: "Es la recta que pasa por el origen con dirección $\\langle3,4\\rangle$.", grafico: { tipo: "vectores2d", titulo: "Recta generada por (3,4)", vectores: [ { x: 3, y: 4, label: "(3,4)", color: "#1e5eff" }, { x: -1.5, y: -2, label: "t=-0.5", color: "#8e44ad", dash: "solid" }, { x: 4.5, y: 6, label: "t=1.5", color: "#e17055" } ], ocultarLeyenda: true, rangeX: [-3, 6], rangeY: [-4, 8] } },
    ],
    erroresComunes: [
      "Sumar vectores de distinta dimensión (no está definido).",
      "Confundir punto con vector: $A(2,3)$ es un punto, $\\overrightarrow{OA}$ es el vector.",
      "Al calcular $\\overrightarrow{AB}$, restar en el orden incorrecto (debe ser $B-A$, no $A-B$).",
      "Olvidar que el resultado de $cv$ es un vector, no un número.",
    ],
    checklist: [
      "Sé escribir un vector en las formas $\\langle a,b\\rangle$, columna y como punto.",
      "Sé sumar, restar y multiplicar por escalar componente a componente.",
      "Puedo interpretar gráficamente $u+v$ (paralelógramo) y $cv$ (paralelismo).",
      "Conozco y puedo enunciar las 8 propiedades algebraicas básicas.",
      "Sé calcular un vector de desplazamiento y un punto medio.",
    ],
    autoevaluacion: [
      { pregunta: "Si $u=\\langle2,1\\rangle$ y $v=\\langle-1,3\\rangle$, entonces $2u-v$ es:", opciones: [ "$\\langle5,-1\\rangle$", "$\\langle3,5\\rangle$", "$\\langle5,5\\rangle$", "$\\langle-3,5\\rangle$" ], correcta: 0, explicacion: "$2u-v=\\langle4,2\\rangle-\\langle-1,3\\rangle=\\langle4+1,\\,2-3\\rangle=\\langle5,-1\\rangle$." },
      { pregunta: "¿Cuál de estas afirmaciones es siempre verdadera?", opciones: [ "$u+v=v+u$", "Todo vector es múltiplo de otro", "Los vectores de $\\R^2$ tienen 3 componentes", "Restar vectores de distinta dimensión es válido" ], correcta: 0, explicacion: "La suma de vectores es conmutativa; las demás son falsas." },
      { pregunta: "El vector $\\overrightarrow{AB}$ con $A(0,0)$ y $B(-2,5)$ es:", opciones: [ "$\\langle-2,5\\rangle$", "$\\langle2,-5\\rangle$", "$\\langle2,5\\rangle$", "$\\langle-2,-5\\rangle$" ], correcta: 0, explicacion: "$\\overrightarrow{AB}=B-A=\\langle-2,5\\rangle$." },
    ],
    referencias: [ { titulo: "Clase 01 — Vectores en R³ (PDF)", ruta: "recursos/clases/clase-01.pdf" }, { titulo: "Apunte Clase 1 (PDF)", ruta: "recursos/apuntes/apunte-clase-01.pdf" } ],
  });
})();
