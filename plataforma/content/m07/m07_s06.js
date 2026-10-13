/* Módulo 7 · Sección 6 — Matrices simétricas y diagonalización ortogonal */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m07_s06", modulo: 7, moduloNombre: "Módulo 7 · Ortogonalidad y mínimos cuadrados", orden: 6,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Matrices simétricas y diagonalización ortogonal",
    objetivo: "Reconocer matrices simétricas, diagonalizarlas ortogonalmente mediante una base ortonormal de vectores propios y construir la descomposición espectral A=λ₁u₁u₁ᵀ+⋯+λₙuₙuₙᵀ.",
    fuente: "Clase 38 · Lay §7.1 · Poole §5.4",
    prerrequisitos: ["Diagonalización", "Vectores propios", "Conjuntos ortonormales"],
    teoria: [
      { tipo: "texto", html: "<p>Las matrices simétricas reales tienen una propiedad excepcional: siempre pueden diagonalizarse con una base de vectores propios <b>ortonormales</b>. Esto las hace centrales en formas cuadráticas, optimización y estadística.</p>" },
      { tipo: "definicion", titulo: "Matriz simétrica", html: "<p>Una matriz $A$ es <b>simétrica</b> si $A^{T}=A$; necesariamente es cuadrada. Sus entradas fuera de la diagonal aparecen por pares en lados opuestos.</p>" },
      { tipo: "teorema", titulo: "Vectores propios de espacios propios distintos", html: "<p>Si $A$ es simétrica, entonces vectores propios asociados a valores propios <b>distintos</b> son ortogonales.</p>" },
      { tipo: "definicion", titulo: "Diagonalización ortogonal", html: "<p>$A$ de $n\\times n$ es <b>diagonalizable ortogonalmente</b> si existe una matriz ortogonal $P$ ($P^{-1}=P^{T}$) y una matriz diagonal $D$ tales que</p>$$A=PDP^{T}=PDP^{-1}.$$<p>Las columnas de $P$ son vectores propios ortonormales de $A$.</p>" },
      { tipo: "teorema", titulo: "Teorema espectral para matrices simétricas", html: "<p>Una matriz $A$ de $n\\times n$ es diagonalizable ortogonalmente si y solo si $A$ es simétrica. En tal caso: $A$ tiene $n$ valores propios reales (con multiplicidad), cada espacio propio tiene dimensión igual a la multiplicidad de su valor propio, y los espacios propios son mutuamente ortogonales.</p>" },
      { tipo: "nota", titulo: "Descomposición espectral (Lay §7.1)", html: "<p>Si $A=PDP^{T}$ con columnas ortonormales $u_1,\\dots,u_n$ y valores propios $\\lambda_1,\\dots,\\lambda_n$, entonces</p>$$A=\\lambda_1u_1u_1^{T}+\\lambda_2u_2u_2^{T}+\\cdots+\\lambda_nu_nu_n^{T}.$$<p>Cada $u_ju_j^{T}$ es una matriz de rango $1$ (un proyector). Esta representación se llama <b>descomposición espectral</b> de $A$.</p>" },
      { tipo: "grafico", spec: { tipo: "vectores2d", titulo: "Vectores propios ortogonales de A=[[7,2],[2,4]]: (2,1) y (−1,2)", vectores: [ { x: 2, y: 1, label: "u₁ (λ=8)", color: "#1e5eff" }, { x: -1, y: 2, label: "u₂ (λ=3)", color: "#00b894" } ], ocultarLeyenda: true, rangeX: [-3, 3], rangeY: [-1, 3] } },
    ],
    ejemplos: [
      { titulo: "Reconocer matrices simétricas", enunciado: "<p>Indique cuáles son simétricas: $\\begin{bmatrix}1&-3\\\\-3&5\\end{bmatrix}$, $\\begin{bmatrix}1&-4&0\\\\-6&1&-4\\\\0&-6&1\\end{bmatrix}$, $\\begin{bmatrix}5&4\\\\3&2\\end{bmatrix}$, $\\begin{bmatrix}0&-1&0\\\\-1&5&8\\\\0&8&-7\\end{bmatrix}$.</p>", desarrollo: [ "La primera es simétrica: $a_{12}=a_{21}=-3$.", "La segunda <b>no</b>: $a_{12}=-4$ pero $a_{21}=-6$.", "La tercera <b>no</b>: $a_{12}=4$ pero $a_{21}=3$.", "La cuarta es simétrica: sus entradas fuera de la diagonal coinciden por pares." ], respuesta: "Son simétricas la $1$ª y la $4$ª." },
      { titulo: "Diagonalización ortogonal 3×3", enunciado: "<p>Diagonalice ortogonalmente $A=\\begin{bmatrix}3&-2&4\\\\-2&6&2\\\\4&2&3\\end{bmatrix}$.</p>", desarrollo: [ "Valores propios: $\\lambda=7$ (mult. $2$) y $\\lambda=-2$ (mult. $1$).", "Para $\\lambda=7$, una base del espacio propio es $(1,-2,0),(0,2,1)$; se ortogonalizan: $w_1=(1,-2,0)$ y $w_2=(0,2,1)-\\dfrac{-4}{5}(1,-2,0)=(4,2,5)$.", "Para $\\lambda=-2$: $w_3=(2,1,-2)$.", "Normalizando: $u_1=\\tfrac{1}{\\sqrt5}(1,-2,0)$, $u_2=\\tfrac{1}{3\\sqrt5}(4,2,5)$, $u_3=\\tfrac13(2,1,-2)$.", "$P=[\\,u_1\\ u_2\\ u_3\\,]$ es ortogonal y $D=\\operatorname{diag}(7,7,-2)$." ], respuesta: "$A=PDP^{T}$ con $D=\\operatorname{diag}(7,7,-2)$ y $P$ de columnas $u_1,u_2,u_3$." },
      { titulo: "Descomposición espectral 2×2", enunciado: "<p>Construya la descomposición espectral de $A=\\begin{bmatrix}7&2\\\\2&4\\end{bmatrix}$.</p>", desarrollo: [ "Valores propios: $\\lambda=8$ con $u_1=\\tfrac{1}{\\sqrt5}(2,1)$ y $\\lambda=3$ con $u_2=\\tfrac{1}{\\sqrt5}(-1,2)$.", "$u_1u_1^{T}=\\tfrac15\\begin{bmatrix}4&2\\\\2&1\\end{bmatrix}$ y $u_2u_2^{T}=\\tfrac15\\begin{bmatrix}1&-2\\\\-2&4\\end{bmatrix}$.", "$A=8u_1u_1^{T}+3u_2u_2^{T}=\\tfrac15\\begin{bmatrix}35&10\\\\10&20\\end{bmatrix}=\\begin{bmatrix}7&2\\\\2&4\\end{bmatrix}$." ], respuesta: "$A=8u_1u_1^{T}+3u_2u_2^{T}$ con $u_1=\\tfrac{1}{\\sqrt5}(2,1)$, $u_2=\\tfrac{1}{\\sqrt5}(-1,2)$." },
    ],
    ejercicios: [
      { titulo: "Simetría básica", dificultad: "basico", enunciado: "<p>¿Es simétrica $A=\\begin{bmatrix}2&-1&0\\\\-1&3&4\\\\0&4&5\\end{bmatrix}$?</p>", pista: "Compare $A$ con $A^{T}$.", desarrollo: [ "Revisamos las entradas fuera de la diagonal: $a_{12}=a_{21}=-1$, $a_{13}=a_{31}=0$, $a_{23}=a_{32}=4$.", "Todas coinciden, luego $A^{T}=A$." ], respuesta: "Sí, es simétrica." },
      { titulo: "Eigenvector ortogonal", dificultad: "basico", enunciado: "<p>Una matriz simétrica $2\\times2$ tiene valores propios $2$ y $5$, con eigenvector $(1,1)$ para $\\lambda=2$. Encuentre un eigenvector para $\\lambda=5$.</p>", pista: "Los eigenvectores de valores propios distintos son ortogonales.", desarrollo: [ "Buscamos $v=(a,b)$ con $(a,b)\\cdot(1,1)=0$.", "$a+b=0$, por ejemplo $v=(1,-1)$.", "Verificación: $v\\perp(1,1)$." ], respuesta: "$v=(1,-1)$ (o cualquier múltiplo no nulo)." },
      { titulo: "Diagonalizar ortogonalmente 2×2", dificultad: "intermedio", enunciado: "<p>Diagonalice ortogonalmente $A=\\begin{bmatrix}2&2\\\\2&2\\end{bmatrix}$.</p>", pista: "Calcule los valores propios y ortonormalice.", desarrollo: [ "$\\operatorname{tr}A=4$, $\\det A=0$, luego $\\lambda=4,0$.", "Para $\\lambda=4$: $(A-4I)=\\begin{bmatrix}-2&2\\\\2&-2\\end{bmatrix}$, eigenvector $(1,1)$.", "Para $\\lambda=0$: eigenvector $(1,-1)$, ortogonal al anterior.", "Ortonormal: $u_1=\\tfrac{1}{\\sqrt2}(1,1)$, $u_2=\\tfrac{1}{\\sqrt2}(1,-1)$; $D=\\operatorname{diag}(4,0)$." ], respuesta: "$A=PDP^{T}$, $P=\\tfrac{1}{\\sqrt2}\\begin{bmatrix}1&1\\\\1&-1\\end{bmatrix}$, $D=\\operatorname{diag}(4,0)$." },
      { titulo: "Descomposición espectral", dificultad: "avanzado", enunciado: "<p>Halle la descomposición espectral de $A=\\begin{bmatrix}3&1\\\\1&3\\end{bmatrix}$.</p>", pista: "Valores propios $4$ y $2$ con eigenvectores $(1,1)$ y $(1,-1)$.", desarrollo: [ "Normalizando: $u_1=\\tfrac{1}{\\sqrt2}(1,1)$ (para $4$), $u_2=\\tfrac{1}{\\sqrt2}(1,-1)$ (para $2$).", "$u_1u_1^{T}=\\tfrac12\\begin{bmatrix}1&1\\\\1&1\\end{bmatrix}$, $u_2u_2^{T}=\\tfrac12\\begin{bmatrix}1&-1\\\\-1&1\\end{bmatrix}$.", "$A=4u_1u_1^{T}+2u_2u_2^{T}=\\begin{bmatrix}2&2\\\\2&2\\end{bmatrix}+\\begin{bmatrix}1&-1\\\\-1&1\\end{bmatrix}=\\begin{bmatrix}3&1\\\\1&3\\end{bmatrix}$." ], respuesta: "$A=4u_1u_1^{T}+2u_2u_2^{T}$." },
    ],
    erroresComunes: [
      "Suponer que cualquier matriz diagonalizable es simétrica (la equivalencia es solo con diagonalización <b>ortogonal</b>).",
      "Olvidar aplicar Gram-Schmidt dentro de un espacio propio de dimensión mayor que $1$.",
      "Usar eigenvectores no normalizados y llamar $P$ \"ortogonal\".",
      "Creer que una matriz simétrica puede tener valores propios complejos no reales.",
    ],
    checklist: [
      "Verifico $A^{T}=A$ antes de buscar una diagonalización ortogonal.",
      "Encuentro una base ortonormal de cada espacio propio (normalizo y, si hace falta, ortogonalizo).",
      "Formo $P$ con los eigenvectores ortonormales y $D$ con sus valores propios.",
      "Construyo $A=PDP^{T}$ y compruebo $P^{-1}=P^{T}$.",
      "Escribo la descomposición espectral $A=\\sum \\lambda_ju_ju_j^{T}$.",
    ],
    autoevaluacion: [
      { pregunta: "Una matriz $A$ de $n\\times n$ es diagonalizable ortogonalmente si y solo si:", opciones: [ "$A$ es simétrica", "$A$ es invertible", "$A$ tiene $n$ valores propios distintos", "$A$ es triangular" ], correcta: 0, explicacion: "El teorema espectral afirma que la diagonalización ortogonal equivale a la simetría de $A$." },
      { pregunta: "Los espacios propios de una matriz simétrica asociados a valores propios distintos son:", opciones: [ "Mutuamente ortogonales", "Iguales", "Paralelos", "De dimensión $1$ siempre" ], correcta: 0, explicacion: "En una matriz simétrica, eigenvectores de valores propios diferentes son ortogonales." },
      { pregunta: "En la descomposición espectral $A=\\sum\\lambda_ju_ju_j^{T}$, cada $u_ju_j^{T}$ es:", opciones: [ "Una matriz de rango $1$", "La matriz identidad", "La matriz nula", "Una matriz triangular" ], correcta: 0, explicacion: "Cada $u_ju_j^{T}$ es un proyector de rango $1$ sobre la recta $\\gen\\{u_j\\}$." },
    ],
    referencias: [ { titulo: "Clase 38 — Matrices simétricas y diagonalización ortogonal (PDF)", ruta: "recursos/clases/clase-38.pdf" } ],
  });
})();
