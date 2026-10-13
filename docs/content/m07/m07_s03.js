/* Módulo 7 · Sección 3 — Proyección ortogonal */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m07_s03", modulo: 7, moduloNombre: "Módulo 7 · Ortogonalidad y mínimos cuadrados", orden: 3,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Proyección ortogonal",
    objetivo: "Descomponer un vector y como suma de una componente en un subespacio W y otra ortogonal a W, calcular proy_W y hallar la distancia de y a W usando el teorema de la mejor aproximación.",
    fuente: "Clase 35 · Lay §6.3 · Poole §5.1",
    prerrequisitos: ["Conjuntos ortogonales y ortonormales", "Bases ortogonales", "Norma y distancia"],
    teoria: [
      { tipo: "texto", html: "<p>Dado un subespacio $W$ y un vector $y$, nos preguntamos cuál es el vector de $W$ <b>más cercano</b> a $y$. La respuesta es la <b>proyección ortogonal</b> $\\hat y$, que se construye fácilmente si disponemos de una base ortogonal de $W$.</p>" },
      { tipo: "definicion", titulo: "Proyección sobre un vector", html: "<p>Dados $y\\neq0$ y $u\\neq0$ en $\\R^n$, la <b>proyección ortogonal de $y$ sobre $u$</b> es</p>$$\\hat y=\\alpha u=\\frac{y\\cdot u}{u\\cdot u}\\,u,$$<p>y la componente de $y$ ortogonal a $u$ es $z=y-\\hat y$, con $z\\cdot u=0$.</p>" },
      { tipo: "teorema", titulo: "Teorema de la descomposición ortogonal", html: "<p>Sea $W$ subespacio de $\\R^n$. Cada $y\\in\\R^n$ se escribe de manera <b>única</b> como</p>$$y=\\hat y+z,\\qquad \\hat y\\in W,\\ z\\in W^{\\perp}.$$<p>Si $\\{u_1,\\dots,u_p\\}$ es una base <b>ortogonal</b> de $W$, entonces</p>$$\\hat y=\\frac{y\\cdot u_1}{u_1\\cdot u_1}u_1+\\cdots+\\frac{y\\cdot u_p}{u_p\\cdot u_p}u_p,\\qquad z=y-\\hat y.$$" },
      { tipo: "teorema", titulo: "Teorema de la mejor aproximación", html: "<p>Si $\\hat y=\\operatorname{proy}_W y$, entonces $\\hat y$ es el punto de $W$ más cercano a $y$:</p>$$\\|y-\\hat y\\|<\\|y-v\\|\\quad\\text{para todo } v\\in W,\\ v\\neq\\hat y.$$<p>La distancia de $y$ a $W$ es $\\operatorname{dist}(y,W)=\\|y-\\hat y\\|$.</p>" },
      { tipo: "nota", titulo: "Caso ortonormal y proyector (Lay §6.3)", html: "<p>Si $\\{u_1,\\dots,u_p\\}$ es una base <b>ortonormal</b> de $W$, la fórmula se simplifica a $\\hat y=(y\\cdot u_1)u_1+\\cdots+(y\\cdot u_p)u_p$. Si $U=[\\,u_1\\ \\cdots\\ u_p\\,]$ tiene columnas ortonormales, entonces $\\hat y=UU^{T}y$: la matriz $UU^{T}$ es el <b>proyector</b> sobre $W$. Además $\\operatorname{proy}_W y=y$ si $y\\in W$, y $\\operatorname{proy}_W y=0$ si $y\\in W^{\\perp}$.</p>" },
      { tipo: "grafico", spec: { tipo: "vectores2d", titulo: "y=(7,6) proyectado sobre u=(4,2): ŷ=(8,4), z=(-1,2)", vectores: [ { x: 7, y: 6, label: "y", color: "#1e5eff" }, { x: 4, y: 2, label: "u", color: "#00b894" }, { x: 8, y: 4, label: "ŷ", color: "#e17055" }, { x: -1, y: 2, x0: 8, y0: 4, label: "z", color: "#8e44ad" } ], segmentos: [ { x0: 7, y0: 6, x1: 8, y1: 4, color: "#8e44ad", dash: "dot" } ], ocultarLeyenda: true, rangeX: [-2, 10], rangeY: [-2, 9] } },
    ],
    ejemplos: [
      { titulo: "Proyección sobre un vector (1D)", enunciado: "<p>Sean $y=(7,6)$ y $u=(4,2)$. Encuentre la proyección de $y$ sobre $u$ y escriba $y$ como suma de dos vectores ortogonales.</p>", desarrollo: [ "$y\\cdot u=7\\cdot4+6\\cdot2=28+12=40$ y $u\\cdot u=16+4=20$.", "$\\hat y=\\dfrac{40}{20}(4,2)=2(4,2)=(8,4)$.", "$z=y-\\hat y=(7-8,\\,6-4)=(-1,2)$.", "Verificación: $z\\cdot u=-4+4=0$." ], respuesta: "$(7,6)=(8,4)+(-1,2)$ con $(8,4)\\parallel u$ y $(-1,2)\\perp u$." },
      { titulo: "Proyección sobre un subespacio", enunciado: "<p>Sea $W=\\gen\\{u_1,u_2\\}$ con $u_1=(1,1,0)$, $u_2=(1,-1,0)$, y $y=(1,2,3)$. Escriba $y$ como suma de un vector en $W$ y otro en $W^{\\perp}$.</p>", desarrollo: [ "Los generadores son ortogonales: $u_1\\cdot u_2=1-1+0=0$; son base ortogonal de $W$.", "$\\dfrac{y\\cdot u_1}{u_1\\cdot u_1}=\\dfrac{1+2}{2}=\\dfrac32$ y $\\dfrac{y\\cdot u_2}{u_2\\cdot u_2}=\\dfrac{1-2}{2}=-\\dfrac12$.", "$\\hat y=\\dfrac32(1,1,0)-\\dfrac12(1,-1,0)= (1,2,0)$.", "$z=y-\\hat y=(0,0,3)$, que es ortogonal a $u_1$ y $u_2$." ], respuesta: "$(1,2,3)=(1,2,0)+(0,0,3)$, con $(1,2,0)\\in W$ y $(0,0,3)\\in W^{\\perp}$." },
      { titulo: "Distancia de un punto a un subespacio", enunciado: "<p>Con los datos anteriores, calcule la distancia de $y$ a $W=\\gen\\{(1,1,0),(1,-1,0)\\}$.</p>", desarrollo: [ "La distancia es $\\|y-\\hat y\\|=\\|z\\|$.", "Ya obtuvimos $z=(0,0,3)$.", "$\\|z\\|=\\sqrt{0^2+0^2+3^2}=3$." ], respuesta: "$\\operatorname{dist}(y,W)=3$." },
    ],
    ejercicios: [
      { titulo: "Proyección 1D", dificultad: "basico", enunciado: "<p>Proyecte $y=(1,2)$ sobre $u=(3,1)$.</p>", pista: "Use $\\hat y=\\frac{y\\cdot u}{u\\cdot u}u$.", desarrollo: [ "$y\\cdot u=3+2=5$, $u\\cdot u=9+1=10$.", "$\\hat y=\\dfrac{5}{10}(3,1)=\\left(\\dfrac32,\\dfrac12\\right)$." ], respuesta: "$\\hat y=\\left(\\dfrac32,\\dfrac12\\right)$." },
      { titulo: "Distancia a una recta", dificultad: "basico", enunciado: "<p>Calcule la distancia de $y=(1,2)$ a la recta $\\gen\\{(3,1)\\}$.</p>", pista: "Calcule $z=y-\\hat y$ y su norma.", desarrollo: [ "Del ejercicio anterior, $\\hat y=(3/2,1/2)$.", "$z=y-\\hat y=(-1/2,3/2)$.", "$\\|z\\|=\\sqrt{1/4+9/4}=\\sqrt{10/4}=\\dfrac{\\sqrt{10}}{2}$." ], respuesta: "$\\dfrac{\\sqrt{10}}{2}$." },
      { titulo: "Proyección sobre un plano coordenado", dificultad: "intermedio", enunciado: "<p>Proyecte $y=(1,1,1)$ sobre $W=\\gen\\{(1,0,0),(0,1,0)\\}$ y halle $z$.</p>", pista: "La base dada es ortonormal.", desarrollo: [ "$\\hat y=(y\\cdot e_1)e_1+(y\\cdot e_2)e_2=1\\cdot(1,0,0)+1\\cdot(0,1,0)=(1,1,0)$.", "$z=y-\\hat y=(0,0,1)$." ], respuesta: "$\\hat y=(1,1,0)$ y $z=(0,0,1)$." },
      { titulo: "Proyección con base ortonormal", dificultad: "avanzado", enunciado: "<p>Sea $W=\\operatorname{Col}U$ con $U=[\\,u_1\\ u_2\\,]$, $u_1=\\frac{1}{\\sqrt2}(1,1,0)$, $u_2=(0,0,1)$. Proyecte $y=(1,2,3)$ sobre $W$.</p>", pista: "Con base ortonormal, $\\hat y=(y\\cdot u_1)u_1+(y\\cdot u_2)u_2$.", desarrollo: [ "$y\\cdot u_1=\\dfrac{1+2}{\\sqrt2}=\\dfrac{3}{\\sqrt2}$ y $y\\cdot u_2=3$.", "$\\hat y=\\dfrac{3}{\\sqrt2}\\cdot\\dfrac{1}{\\sqrt2}(1,1,0)+3(0,0,1)$.", "$=\\dfrac32(1,1,0)+(0,0,3)=\\left(\\dfrac32,\\dfrac32,3\\right)$." ], respuesta: "$\\hat y=\\left(\\dfrac32,\\dfrac32,3\\right)$." },
    ],
    erroresComunes: [
      "Proyectar sobre una base no ortogonal usando la fórmula de pesos $c_j=(y\\cdot u_j)/(u_j\\cdot u_j)$.",
      "Olvidar que $z=y-\\hat y$ debe ser ortogonal a <b>todos</b> los generadores de $W$.",
      "Confundir la distancia de $y$ a $W$ con $\\|\\hat y\\|$ (es $\\|y-\\hat y\\|$).",
      "Creer que $\\operatorname{proy}_W y=y$ para cualquier $y$ (solo si $y\\in W$).",
    ],
    checklist: [
      "Verifico que la base de $W$ usada sea ortogonal (u ortonormal) antes de aplicar la fórmula.",
      "Calculo cada peso como $(y\\cdot u_j)/(u_j\\cdot u_j)$.",
      "Obtengo $z=y-\\hat y$ y compruebo $z\\perp W$.",
      "Interpreto la distancia como $\\|y-\\hat y\\|$.",
      "Reconozco el caso especial $\\hat y=UU^{T}y$ cuando $U$ tiene columnas ortonormales.",
    ],
    autoevaluacion: [
      { pregunta: "La proyección de $y=(3,4)$ sobre $u=(1,0)$ es:", opciones: [ "$(3,0)$", "$(0,4)$", "$(3,4)$", "$(1,0)$" ], correcta: 0, explicacion: "$\\frac{y\\cdot u}{u\\cdot u}u=3(1,0)=(3,0)$; la componente ortogonal es $(0,4)$." },
      { pregunta: "La distancia de $y$ al subespacio $W$ es:", opciones: [ "$\\|y-\\hat y\\|$", "$\\|\\hat y\\|$", "$\\|y\\|+\\|\\hat y\\|$", "$y\\cdot\\hat y$" ], correcta: 0, explicacion: "El teorema de la mejor aproximación da $\\operatorname{dist}(y,W)=\\|y-\\hat y\\|$." },
      { pregunta: "En la descomposición $y=\\hat y+z$ con $\\hat y\\in W$, el vector $z$ pertenece a:", opciones: [ "$W^{\\perp}$", "$W$", "$\\gen\\{y\\}$", "$\\R^n\\setminus W$ únicamente" ], correcta: 0, explicacion: "La descomposición ortogonal garantiza $z=y-\\hat y\\in W^{\\perp}$." },
    ],
    referencias: [ { titulo: "Clase 35 — Proyección ortogonal (PDF)", ruta: "recursos/clases/clase-35.pdf" } ],
  });
})();
