/* Módulo 7 · Sección 2 — Conjuntos ortogonales y ortonormales */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m07_s02", modulo: 7, moduloNombre: "Módulo 7 · Ortogonalidad y mínimos cuadrados", orden: 2,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Conjuntos ortogonales y ortonormales",
    objetivo: "Reconocer conjuntos ortogonales y ortonormales, expresar vectores en una base ortogonal con la fórmula de pesos c_j=(y·u_j)/(u_j·u_j) y aplicar las propiedades de las matrices con columnas ortonormales.",
    fuente: "Clase 34 · Lay §6.2 · Poole §5.1",
    prerrequisitos: ["Ortogonalidad y complemento ortogonal", "Bases y coordenadas", "Norma de un vector"],
    teoria: [
      { tipo: "texto", html: "<p>Cuando una base es <b>ortogonal</b> (o <b>ortonormal</b>), calcular coordenadas y proyecciones se vuelve muy simple: no hay que resolver sistemas de ecuaciones, basta con productos punto.</p>" },
      { tipo: "definicion", titulo: "Conjunto ortogonal", html: "<p>Un conjunto $\\{u_1,\\dots,u_p\\}$ en $\\R^n$ es <b>ortogonal</b> si $u_i\\cdot u_j=0$ siempre que $i\\neq j$.</p>" },
      { tipo: "teorema", titulo: "La ortogonalidad implica independencia", html: "<p>Si $S=\\{u_1,\\dots,u_p\\}$ es un conjunto ortogonal de vectores <b>no nulos</b> en $\\R^n$, entonces $S$ es linealmente independiente y por tanto es una base del subespacio que genera. Una base que además es un conjunto ortogonal se llama <b>base ortogonal</b>.</p>" },
      { tipo: "teorema", titulo: "Pesos en una base ortogonal", html: "<p>Sea $\\{u_1,\\dots,u_p\\}$ una base ortogonal de un subespacio $W$. Para cada $y\\in W$, si $y=c_1u_1+\\cdots+c_pu_p$ entonces</p>$$c_j=\\frac{y\\cdot u_j}{u_j\\cdot u_j},\\qquad j=1,\\dots,p.$$" },
      { tipo: "definicion", titulo: "Conjunto y base ortonormal", html: "<p>Un conjunto es <b>ortonormal</b> si es ortogonal y todos sus vectores son unitarios ($\\|u_i\\|=1$). Si genera $W$, es una <b>base ortonormal</b> de $W$. En ese caso los pesos son simplemente $c_j=y\\cdot u_j$.</p>" },
      { tipo: "teorema", titulo: "Matrices con columnas ortonormales", html: "<p>Una matriz $U$ de $m\\times n$ tiene columnas ortonormales si y solo si $U^{T}U=I_n$. Si $U$ tiene columnas ortonormales y $x,y\\in\\R^n$, entonces</p>$$\\|Ux\\|=\\|x\\|,\\qquad (Ux)\\cdot(Uy)=x\\cdot y.$$<p>Una matriz $n\\times n$ con columnas ortonormales se llama <b>matriz ortogonal</b> y cumple $U^{-1}=U^{T}$.</p>" },
      { tipo: "nota", titulo: "Por qué UᵀU=I (Lay §6.2)", html: "<p>La entrada $(i,j)$ de $U^{T}U$ es $u_i\\cdot u_j$. Que todas las columnas sean ortonormales hace que esta matriz sea la identidad. Si $U$ además es cuadrada, $U^{T}U=I$ obliga a $U^{T}=U^{-1}$: las transformaciones ortogonales preservan longitudes y ángulos (son rotaciones o reflexiones).</p>" },
      { tipo: "grafico", spec: { tipo: "vectores3d", titulo: "Conjunto ortogonal {u₁,u₂,u₃} en R³", vectores: [ { x: 3, y: 1, z: 1, label: "u₁", color: "#1e5eff" }, { x: -1, y: 2, z: 1, label: "u₂", color: "#00b894" }, { x: -0.5, y: -2, z: 3.5, label: "u₃", color: "#e17055" } ], range: { x: [-3, 4], y: [-3, 3], z: [-1, 4] }, ocultarLeyenda: true } },
    ],
    ejemplos: [
      { titulo: "Verificar ortogonalidad y expresar en la base", enunciado: "<p>Sea $u_1=(3,1,1)$, $u_2=(-1,2,1)$, $u_3=(-\\tfrac12,-2,\\tfrac72)$. Verifique que es ortogonal y exprese $y=(6,1,-8)$ en esa base.</p>", desarrollo: [ "$u_1\\cdot u_2=-3+2+1=0$, $u_1\\cdot u_3=-\\tfrac32-2+\\tfrac72=0$ y $u_2\\cdot u_3=\\tfrac12-4+\\tfrac72=0$: el conjunto es ortogonal (y no nulo), luego es base de $\\R^3$.", "$u_1\\cdot u_1=11$, $u_2\\cdot u_2=6$, $u_3\\cdot u_3=\\tfrac{66}{4}=\\tfrac{33}{2}$.", "$c_1=\\dfrac{y\\cdot u_1}{u_1\\cdot u_1}=\\dfrac{18+1-8}{11}=1$.", "$c_2=\\dfrac{y\\cdot u_2}{u_2\\cdot u_2}=\\dfrac{-6+2-8}{6}=-2$.", "$c_3=\\dfrac{y\\cdot u_3}{u_3\\cdot u_3}=\\dfrac{-3-2-28}{33/2}=\\dfrac{-33}{33/2}=-2$." ], respuesta: "$y=u_1-2u_2-2u_3$." },
      { titulo: "Comprobar un conjunto ortonormal", enunciado: "<p>Muestre que $\\{v_1,v_2,v_3\\}$ es ortonormal con $v_1=\\frac{1}{\\sqrt{11}}(3,1,1)$, $v_2=\\frac{1}{\\sqrt6}(-1,2,1)$, $v_3=\\frac{1}{\\sqrt{66}}(-1,-4,7)$.</p>", desarrollo: [ "Cada $v_i$ es de la forma $u_i/\\|u_i\\|$, luego $\\|v_i\\|=1$.", "$v_1\\cdot v_2=\\frac{1}{\\sqrt{66}}(-3+2+1)=0$.", "$v_1\\cdot v_3=\\frac{1}{\\sqrt{726}}(-3-4+7)=0$ y $v_2\\cdot v_3=\\frac{1}{\\sqrt{396}}(1-8+7)=0$.", "Ortogonal y unitario: el conjunto es ortonormal." ], respuesta: "$\\{v_1,v_2,v_3\\}$ es ortonormal." },
      { titulo: "Longitud preservada por columnas ortonormales", enunciado: "<p>Sea $U=\\begin{bmatrix}1/\\sqrt2&2/3\\\\1/\\sqrt2&-2/3\\\\0&1/3\\end{bmatrix}$ y $x=(\\sqrt2,3)$. Verifique que $U$ tiene columnas ortonormales y calcule $\\|Ux\\|$.</p>", desarrollo: [ "Columnas $c_1=(1/\\sqrt2,1/\\sqrt2,0)$ y $c_2=(2/3,-2/3,1/3)$.", "$\\|c_1\\|=1$, $\\|c_2\\|=\\sqrt{4/9+4/9+1/9}=1$ y $c_1\\cdot c_2=\\frac{1}{\\sqrt2}\\cdot\\frac23+\\frac{1}{\\sqrt2}\\cdot(-\\frac23)+0=0$.", "Entonces $U^{T}U=I_2$ y $\\|Ux\\|=\\|x\\|$.", "$\\|x\\|=\\sqrt{2+9}=\\sqrt{11}$, luego $\\|Ux\\|=\\sqrt{11}$." ], respuesta: "$\\|Ux\\|=\\sqrt{11}=\\|x\\|$." },
    ],
    ejercicios: [
      { titulo: "Conjunto ortogonal sí o no", dificultad: "basico", enunciado: "<p>Determine si $\\{(1,1,1),(1,-1,0),(1,1,-2)\\}$ es ortogonal.</p>", pista: "Calcule los productos punto entre cada par distinto.", desarrollo: [ "$(1,1,1)\\cdot(1,-1,0)=1-1+0=0$.", "$(1,1,1)\\cdot(1,1,-2)=1+1-2=0$.", "$(1,-1,0)\\cdot(1,1,-2)=1-1+0=0$.", "Todos los productos son $0$: el conjunto es ortogonal." ], respuesta: "Sí, es ortogonal." },
      { titulo: "Coordendas en base ortogonal", dificultad: "intermedio", enunciado: "<p>Exprese $y=(5,3)$ en la base ortogonal $u_1=(1,0)$, $u_2=(0,1)$ y luego en $v_1=(2,1)$, $v_2=(-1,2)$.</p>", pista: "Use $c_j=(y\\cdot u_j)/(u_j\\cdot u_j)$.", desarrollo: [ "Con $u_1,u_2$: $c_1=5$, $c_2=3$, luego $y=5u_1+3u_2$.", "Con $v_1,v_2$: $v_1\\cdot v_1=5$, $v_1\\cdot v_2=0$, $v_2\\cdot v_2=5$.", "$c_1=\\dfrac{y\\cdot v_1}{5}=\\dfrac{10+3}{5}=\\dfrac{13}{5}$, $c_2=\\dfrac{y\\cdot v_2}{5}=\\dfrac{-5+6}{5}=\\dfrac15$.", "Verificación: $\\frac{13}{5}(2,1)+\\frac15(-1,2)=(\\frac{26-1}{5},\\frac{13+2}{5})=(5,3)$." ], respuesta: "$y=\\frac{13}{5}v_1+\\frac15v_2$." },
      { titulo: "Matriz ortogonal", dificultad: "intermedio", enunciado: "<p>Verifique que $U=\\begin{bmatrix}\\cos t&-\\sin t\\\\ \\sin t&\\cos t\\end{bmatrix}$ es ortogonal y calcule $U^{-1}$.</p>", pista: "Revise $U^{T}U=I$.", desarrollo: [ "Columnas $(\\cos t,\\sin t)$ y $(-\\sin t,\\cos t)$, ambas unitarias.", "Su producto punto es $-\\sin t\\cos t+\\cos t\\sin t=0$.", "Luego $U^{T}U=I_2$ y $U$ es ortogonal: $U^{-1}=U^{T}=\\begin{bmatrix}\\cos t&\\sin t\\\\-\\sin t&\\cos t\\end{bmatrix}$." ], respuesta: "$U^{-1}=\\begin{bmatrix}\\cos t&\\sin t\\\\-\\sin t&\\cos t\\end{bmatrix}$ (rotación inversa)." },
      { titulo: "Producto interno preservado", dificultad: "avanzado", enunciado: "<p>Con $U$ del ejemplo de $\\|Ux\\|$, calcule $(Ux)\\cdot(Uy)$ para $y=(1,1)$ y compárelo con $x\\cdot y$.</p>", pista: "Use $(Ux)\\cdot(Uy)=x\\cdot y$ sin calcular $Ux$ explícitamente.", desarrollo: [ "Por el teorema, $(Ux)\\cdot(Uy)=x\\cdot y$.", "$x=(\\sqrt2,3)$, $y=(1,1)$: $x\\cdot y=\\sqrt2+3$.", "Se concluye $(Ux)\\cdot(Uy)=\\sqrt2+3$, el mismo valor." ], respuesta: "$(Ux)\\cdot(Uy)=\\sqrt2+3=x\\cdot y$." },
    ],
    erroresComunes: [
      "Llamar ortonormal a un conjunto ortogonal cuyos vectores no son unitarios.",
      "Usar $c_j=y\\cdot u_j$ en una base solo ortogonal (debe dividir por $u_j\\cdot u_j$).",
      "Incluir el vector cero en un conjunto y creer que sigue siendo ortogonal/independiente.",
      "Confundir $U^{T}U=I$ (columnas ortonormales) con $UU^{T}=I$ (solo válido si $U$ es cuadrada).",
    ],
    checklist: [
      "Verifico la ortogonalidad calculando todos los productos punto entre pares distintos.",
      "Normalizo un conjunto ortogonal dividiendo cada vector por su norma.",
      "Expreso vectores en una base ortogonal con $c_j=(y\\cdot u_j)/(u_j\\cdot u_j)$.",
      "Reconozco una matriz ortogonal por $U^{T}U=I$ y uso $U^{-1}=U^{T}$.",
      "Aplico que las matrices con columnas ortonormales preservan normas y productos internos.",
    ],
    autoevaluacion: [
      { pregunta: "Un conjunto ortogonal de vectores no nulos siempre es:", opciones: [ "Linealmente independiente", "Linealmente dependiente", "Ortonormal", "Ortogonal a todo $\\R^n$" ], correcta: 0, explicacion: "La ortogonalidad de vectores no nulos garantiza independencia lineal (Teorema de la clase 34)." },
      { pregunta: "En una base ortogonal $\\{u_j\\}$, el peso de $y$ en la dirección $u_j$ es:", opciones: [ "$\\dfrac{y\\cdot u_j}{u_j\\cdot u_j}$", "$y\\cdot u_j$", "$\\dfrac{u_j\\cdot u_j}{y\\cdot u_j}$", "$\\|y\\|\\|u_j\\|$" ], correcta: 0, explicacion: "Esa es exactamente la fórmula de los pesos en una base ortogonal." },
      { pregunta: "$U$ tiene columnas ortonormales. Entonces $U^{T}U$ es:", opciones: [ "$I$", "$U$", "$U^{T}$", "La matriz nula" ], correcta: 0, explicacion: "$(U^{T}U)_{ij}=u_i\\cdot u_j=\\delta_{ij}$, es decir $U^{T}U=I$." },
    ],
    referencias: [ { titulo: "Clase 34 — Conjuntos ortogonales y ortonormales (PDF)", ruta: "recursos/clases/clase-34.pdf" } ],
  });
})();
