/* Módulo 7 · Sección 4 — Proceso de Gram-Schmidt */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m07_s04", modulo: 7, moduloNombre: "Módulo 7 · Ortogonalidad y mínimos cuadrados", orden: 4,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Proceso de Gram-Schmidt",
    objetivo: "Construir una base ortogonal (y luego ortonormal) de un subespacio a partir de una base cualquiera mediante Gram-Schmidt, y obtener la factorización QR de una matriz de columnas linealmente independientes.",
    fuente: "Clase 36 · Lay §6.4 · Poole §5.2",
    prerrequisitos: ["Proyección ortogonal", "Bases ortogonales", "Independencia lineal"],
    teoria: [
      { tipo: "texto", html: "<p>Para proyectar sobre un subespacio necesitamos una base ortogonal. El <b>proceso de Gram-Schmidt</b> transforma cualquier base en una base ortogonal, restando a cada vector sus proyecciones sobre los anteriores.</p>" },
      { tipo: "teorema", titulo: "El proceso de Gram-Schmidt", html: "<p>Dada una base $\\{x_1,\\dots,x_p\\}$ de un subespacio $W\\neq\\{0\\}$ de $\\R^n$, defina</p>$$\\begin{aligned} v_1&=x_1,\\\\ v_2&=x_2-\\operatorname{proy}_{v_1}(x_2),\\\\ v_3&=x_3-\\operatorname{proy}_{\\{v_1,v_2\\}}(x_3),\\\\ &\\ \\vdots\\\\ v_p&=x_p-\\operatorname{proy}_{\\{v_1,\\dots,v_{p-1}\\}}(x_p).\\end{aligned}$$<p>Entonces $\\{v_1,\\dots,v_p\\}$ es una base ortogonal de $W$ y $\\gen\\{v_1,\\dots,v_k\\}=\\gen\\{x_1,\\dots,x_k\\}$ para $1\\le k\\le p$.</p>" },
      { tipo: "definicion", titulo: "Base ortonormal", html: "<p>Para obtener una base ortonormal basta normalizar cada $v_k$:</p>$$u_k=\\frac{1}{\\|v_k\\|}\\,v_k.$$" },
      { tipo: "teorema", titulo: "Factorización QR", html: "<p>Si $A$ es de $m\\times n$ con columnas linealmente independientes, entonces $A=QR$, donde $Q$ de $m\\times n$ tiene columnas que forman base ortonormal de $\\text{Col }A$, y $R$ es triangular superior invertible de $n\\times n$ con entradas positivas en la diagonal. Además $R=Q^{T}A$.</p>" },
      { tipo: "nota", titulo: "Idea detrás del algoritmo (Lay §6.4)", html: "<p>Cada paso garantiza $v_k\\perp\\gen\\{v_1,\\dots,v_{k-1}\\}$ porque se resta la proyección sobre ese subespacio. Como $x_k$ no está en $\\gen\\{x_1,\\dots,x_{k-1}\\}$, se tiene $v_k\\neq0$, lo que asegura que ninguna columna de $Q$ se anule. En la práctica, el QR suele calcularse con Householder, no a mano: pero el proceso explica por qué $A=QR$ existe.</p>" },
      { tipo: "grafico", spec: { tipo: "vectores3d", titulo: "Gram-Schmidt: v₂ = x₂ − proy_{v₁}(x₂) es ortogonal a v₁", vectores: [ { x: 3, y: 6, z: 0, label: "v₁=x₁", color: "#1e5eff" }, { x: 1, y: 2, z: 2, label: "x₂", color: "#e6a817" }, { x: 0, y: 0, z: 2, label: "v₂", color: "#e17055" } ], range: { x: [-1, 5], y: [-1, 8], z: [-1, 4] }, ocultarLeyenda: true } },
    ],
    ejemplos: [
      { titulo: "Base ortogonal y proyección en R³", enunciado: "<p>Sea $W=\\gen\\{x_1,x_2\\}$ con $x_1=(3,6,0)$, $x_2=(1,2,2)$. Construya una base ortogonal y proyecte $y=(0,4,2)$ sobre $W$.</p>", desarrollo: [ "$v_1=x_1=(3,6,0)$.", "$v_2=x_2-\\dfrac{x_2\\cdot v_1}{v_1\\cdot v_1}v_1=(1,2,2)-\\dfrac{15}{45}(3,6,0)=(1,2,2)-(1,2,0)=(0,0,2)$.", "Base ortogonal de $W$: $\\{(3,6,0),(0,0,2)\\}$.", "$\\hat y=\\dfrac{y\\cdot v_1}{v_1\\cdot v_1}v_1+\\dfrac{y\\cdot v_2}{v_2\\cdot v_2}v_2=\\dfrac{24}{45}(3,6,0)+\\dfrac{4}{4}(0,0,2)=\\left(\\dfrac85,\\dfrac{16}{5},2\\right)$." ], respuesta: "Base $\\{(3,6,0),(0,0,2)\\}$ y $\\hat y=\\left(\\dfrac85,\\dfrac{16}{5},2\\right)$." },
      { titulo: "Gram-Schmidt en R⁴", enunciado: "<p>Con $x_1=(1,1,1,1)$, $x_2=(0,1,1,1)$, $x_3=(0,0,1,1)$, construya una base ortogonal de $W=\\gen\\{x_1,x_2,x_3\\}$.</p>", desarrollo: [ "$v_1=(1,1,1,1)$.", "$v_2=x_2-\\dfrac{3}{4}v_1=(0,1,1,1)-\\tfrac34(1,1,1,1)=\\left(-\\tfrac34,\\tfrac14,\\tfrac14,\\tfrac14\\right)$; multiplicando por $4$: $(-3,1,1,1)$.", "Para $v_3$: $x_3\\cdot v_1=2$, $\\dfrac{2}{4}=\\tfrac12$, y $x_3\\cdot v_2=\\tfrac12$, $v_2\\cdot v_2=\\tfrac34$, cociente $\\tfrac23$.", "$v_3=x_3-\\tfrac12v_1-\\tfrac23v_2=\\left(0,-\\tfrac23,\\tfrac13,\\tfrac13\\right)$; multiplicando por $3$: $(0,-2,1,1)$." ], respuesta: "Base ortogonal $\\{(1,1,1,1),(-3,1,1,1),(0,-2,1,1)\\}$." },
      { titulo: "Factorización QR", enunciado: "<p>Encuentre la factorización QR de $A=\\begin{bmatrix}1&0&0\\\\1&1&0\\\\1&1&1\\\\1&1&1\\end{bmatrix}$.</p>", desarrollo: [ "Las columnas tienen LI; aplicando Gram-Schmidt: $v_1=(1,1,1,1)$, $v_2=(-3,1,1,1)$, $v_3=(0,-2,1,1)$.", "Normalizando: $q_1=\\tfrac12(1,1,1,1)$, $q_2=\\tfrac{1}{2\\sqrt3}(-3,1,1,1)$, $q_3=\\tfrac{1}{\\sqrt6}(0,-2,1,1)$.", "$R=Q^{T}A=\\begin{bmatrix}2&\\tfrac32&1\\\\0&\\tfrac{\\sqrt3}{2}&\\tfrac{\\sqrt3}{3}\\\\0&0&\\tfrac{\\sqrt6}{3}\\end{bmatrix}$." ], respuesta: "$A=QR$ con las columnas $q_1,q_2,q_3$ y $R=\\begin{bmatrix}2&\\tfrac32&1\\\\0&\\tfrac{\\sqrt3}{2}&\\tfrac{\\sqrt3}{3}\\\\0&0&\\tfrac{\\sqrt6}{3}\\end{bmatrix}$." },
    ],
    ejercicios: [
      { titulo: "Gram-Schmidt en R³", dificultad: "basico", enunciado: "<p>Ortogonalice $x_1=(1,1,0)$, $x_2=(1,0,1)$.</p>", pista: "Reste a $x_2$ su proyección sobre $x_1$.", desarrollo: [ "$v_1=(1,1,0)$.", "$\\dfrac{x_2\\cdot v_1}{v_1\\cdot v_1}=\\dfrac12$, así $v_2=(1,0,1)-\\tfrac12(1,1,0)=(\\tfrac12,-\\tfrac12,1)$.", "Multiplicando por $2$: $v_2=(1,-1,2)$." ], respuesta: "Base ortogonal $\\{(1,1,0),(1,-1,2)\\}$." },
      { titulo: "Normalizar una base ortogonal", dificultad: "basico", enunciado: "<p>Obtenga una base ortonormal a partir de $\\{(1,1,0),(1,-1,2)\\}$.</p>", pista: "Divida cada vector por su norma.", desarrollo: [ "$\\|(1,1,0)\\|=\\sqrt2$, $\\|(1,-1,2)\\|=\\sqrt6$.", "Base ortonormal: $\\left\\{\\tfrac{1}{\\sqrt2}(1,1,0),\\ \\tfrac{1}{\\sqrt6}(1,-1,2)\\right\\}$." ], respuesta: "$\\left\\{\\tfrac{1}{\\sqrt2}(1,1,0),\\ \\tfrac{1}{\\sqrt6}(1,-1,2)\\right\\}$." },
      { titulo: "Tres vectores en R³", dificultad: "intermedio", enunciado: "<p>Aplique Gram-Schmidt a $x_1=(1,1,1)$, $x_2=(0,1,1)$, $x_3=(0,0,1)$.</p>", pista: "Reste a $x_3$ sus proyecciones sobre $v_1$ y $v_2$.", desarrollo: [ "$v_1=(1,1,1)$.", "$v_2=(0,1,1)-\\tfrac23(1,1,1)=(-\\tfrac23,\\tfrac13,\\tfrac13)$, o $(-2,1,1)$.", "$v_3=(0,0,1)-\\tfrac13(1,1,1)-\\tfrac12(-\\tfrac23,\\tfrac13,\\tfrac13)=(0,-\\tfrac12,\\tfrac12)$, o $(0,-1,1)$." ], respuesta: "Base ortogonal $\\{(1,1,1),(-2,1,1),(0,-1,1)\\}$." },
      { titulo: "R en la factorización QR", dificultad: "avanzado", enunciado: "<p>Si $A=\\begin{bmatrix}1&3&5\\\\1&1&0\\\\1&1&2\\\\1&3&3\\end{bmatrix}$ y $Q=\\tfrac12\\begin{bmatrix}1&1&1\\\\1&-1&-1\\\\1&-1&1\\\\1&1&-1\\end{bmatrix}$, calcule $R=Q^{T}A$.</p>", pista: "Cada entrada de $R$ es un producto punto entre una columna de $Q$ y una de $A$.", desarrollo: [ "$r_{11}=q_1\\cdot a_1=2$, $r_{12}=q_1\\cdot a_2=4$, $r_{13}=q_1\\cdot a_3=5$.", "$r_{21}=q_2\\cdot a_1=0$, $r_{22}=q_2\\cdot a_2=2$, $r_{23}=q_2\\cdot a_3=3$.", "$r_{31}=q_3\\cdot a_1=0$, $r_{32}=q_3\\cdot a_2=0$, $r_{33}=q_3\\cdot a_3=2$.", "Por eso $R$ es triangular superior con diagonal positiva." ], respuesta: "$R=\\begin{bmatrix}2&4&5\\\\0&2&3\\\\0&0&2\\end{bmatrix}$." },
    ],
    erroresComunes: [
      "Restar proyecciones sobre $x_j$ en lugar de sobre los $v_j$ ya ortogonalizados.",
      "Olvidar restar la proyección sobre <b>todos</b> los vectores anteriores al calcular $v_k$.",
      "No normalizar al pedir una base ortonormal (Gram-Schmidt da ortogonal).",
      "Aplicar Gram-Schmidt/QR cuando las columnas son linealmente dependientes (alguno de los $v_k$ se anula).",
    ],
    checklist: [
      "Tomo $v_1=x_1$ y resto a cada $x_k$ su proyección sobre $\\gen\\{v_1,\\dots,v_{k-1}\\}$.",
      "Compruebo que cada $v_k$ sea ortogonal a los anteriores.",
      "Normalizo los $v_k$ cuando se pide base ortonormal.",
      "Construyo $Q$ con las columnas ortonormales y calculo $R=Q^{T}A$.",
      "Verifico $A=QR$ y que la diagonal de $R$ sea positiva.",
    ],
    autoevaluacion: [
      { pregunta: "Para ortogonalizar $x_2$, Gram-Schmidt calcula:", opciones: [ "$x_2-\\operatorname{proy}_{v_1}(x_2)$", "$x_2+\\operatorname{proy}_{v_1}(x_2)$", "$\\operatorname{proy}_{x_2}(v_1)$", "$x_2-v_1$" ], correcta: 0, explicacion: "Se resta la proyección de $x_2$ sobre $v_1$ para que el resto sea ortogonal a $v_1$." },
      { pregunta: "El proceso de Gram-Schmidt parte de una base de $W$ y entrega:", opciones: [ "Una base ortogonal de $W$", "Una base de $W^{\\perp}$", "La inversa de $A$", "La factorización LU" ], correcta: 0, explicacion: "Conserva el subespacio generado y ortogonaliza, produciendo una base ortogonal." },
      { pregunta: "En $A=QR$, las columnas de $Q$ forman:", opciones: [ "Una base ortonormal de $\\text{Col }A$", "Una base de $\\nul A$", "La matriz $A^{T}$", "Una base de $\\text{Fila }A$" ], correcta: 0, explicacion: "$Q$ tiene columnas ortonormales que generan el mismo espacio columna que $A$." },
    ],
    referencias: [ { titulo: "Clase 36 — Proceso de Gram-Schmidt (PDF)", ruta: "recursos/clases/clase-36.pdf" } ],
  });
})();
