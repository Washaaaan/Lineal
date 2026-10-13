/* Módulo 7 · Sección 1 — Complemento ortogonal */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m07_s01", modulo: 7, moduloNombre: "Módulo 7 · Ortogonalidad y mínimos cuadrados", orden: 1,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Complemento ortogonal",
    objetivo: "Calcular el complemento ortogonal W⊥ de un subespacio W, usar que (Fila A)⊥ = Nul A y (Col A)⊥ = Nul Aᵀ, y relacionar dimensiones con el teorema del rango.",
    fuente: "Clase 33 · Lay §6.1 · Poole §5.1",
    prerrequisitos: ["Producto punto y ortogonalidad", "Subespacios vectoriales", "Espacio nulo y espacio columna"],
    teoria: [
      { tipo: "texto", html: "<p>Recordemos que dos vectores $u,v\\in\\R^n$ son <b>ortogonales</b> si $u\\cdot v=0$. El complemento ortogonal reúne <b>todos</b> los vectores que son ortogonales a un subespacio completo y resulta ser, a su vez, un subespacio.</p>" },
      { tipo: "definicion", titulo: "Complemento ortogonal", html: "<p>Si $W$ es un subespacio de $\\R^n$, el conjunto de todos los vectores $z\\in\\R^n$ ortogonales a todo vector de $W$ se llama <b>complemento ortogonal</b> de $W$ y se denota $W^{\\perp}$:</p>$$W^{\\perp}=\\{\\,z\\in\\R^n : z\\cdot w=0\\ \\text{para todo } w\\in W\\,\\}.$$" },
      { tipo: "teorema", titulo: "Propiedades del complemento ortogonal", html: "<p>Sea $W$ un subespacio de $\\R^n$.</p><p>1. $x\\in W^{\\perp}$ si y solo si $x$ es ortogonal a <b>cada</b> vector de un conjunto que genera a $W$.</p><p>2. $W^{\\perp}$ es un subespacio de $\\R^n$.</p><p>Además $W\\cap W^{\\perp}=\\{0\\}$ y $\\dim W+\\dim W^{\\perp}=n$.</p>" },
      { tipo: "teorema", titulo: "Complementos del espacio fila y columna", html: "<p>Sea $A$ una matriz de $m\\times n$. Entonces</p>$$(\\text{Fila }A)^{\\perp}=\\nul A,\\qquad (\\text{Col }A)^{\\perp}=\\nul A^{T}.$$" },
      { tipo: "nota", titulo: "Interpretación y dimensiones (Lay §6.1)", html: "<p>Como $\\dim(\\nul A)=n-\\rank A=\\nul A$ y $\\dim(\\text{Fila }A)=\\rank A$, la igualdad $(\\text{Fila }A)^{\\perp}=\\nul A$ es consistente con $\\dim W+\\dim W^{\\perp}=n$. En $\\R^3$, el complemento ortogonal de un plano por el origen es la recta perpendicular, y viceversa.</p>" },
      { tipo: "grafico", spec: { tipo: "vectores3d", titulo: "W = plano z = 0 y W⊥ = eje z", vectores: [ { x: 2, y: 0, z: 0, label: "e₁ ∈ W", color: "#1e5eff" }, { x: 0, y: 2, z: 0, label: "e₂ ∈ W", color: "#00b894" }, { x: 0, y: 0, z: 2, label: "e₃ ∈ W⊥", color: "#e17055" } ], planos: [ { a: 0, b: 0, c: 1, d: 0, label: "W", color: "#1e5eff" } ], rectas: [ { p: [0, 0, 0], d: [0, 0, 1], label: "W⊥", color: "#e17055" } ], range: { x: [-3, 3], y: [-3, 3], z: [-3, 3] }, ocultarLeyenda: true } },
    ],
    ejemplos: [
      { titulo: "Complemento ortogonal de un subespacio en R⁴", enunciado: "<p>Calcule $W^{\\perp}$ para $W=\\gen\\{(1,0,0,0),(3,1,0,0)\\}$ en $\\R^4$.</p>", desarrollo: [ "Sea $x=(x_1,x_2,x_3,x_4)$. La propiedad 1 permite imponer ortogonalidad solo contra los <b>generadores</b>.", "$x\\cdot(1,0,0,0)=x_1=0$ y $x\\cdot(3,1,0,0)=3x_1+x_2=0$, de donde $x_2=0$.", "Las coordenadas $x_3,x_4$ quedan libres, luego un vector típico de $W^{\\perp}$ es $(0,0,x_3,x_4)$.", "Entonces $W^{\\perp}=\\gen\\{(0,0,1,0),(0,0,0,1)\\}$." ], respuesta: "$W^{\\perp}=\\gen\\{(0,0,1,0),(0,0,0,1)\\}$." },
      { titulo: "Complemento ortogonal de un plano", enunciado: "<p>Sea $W=\\gen\\{(1,1,0),(0,0,1)\\}$ en $\\R^3$. Encuentre $W^{\\perp}$.</p>", desarrollo: [ "Imponemos $x\\cdot(1,1,0)=x_1+x_2=0$ y $x\\cdot(0,0,1)=x_3=0$.", "De la segunda, $x_3=0$; de la primera, $x_2=-x_1$.", "$W^{\\perp}=\\gen\\{(1,-1,0)\\}$, una recta perpendicular al plano $W$." ], respuesta: "$W^{\\perp}=\\gen\\{(1,-1,0)\\}$." },
      { titulo: "El complemento del espacio fila es el espacio nulo", enunciado: "<p>Verifique que $(\\text{Fila }A)^{\\perp}=\\nul A$ para $A=\\begin{bmatrix}1&2&3\\\\2&4&6\\end{bmatrix}$.</p>", desarrollo: [ "El espacio fila es $\\gen\\{(1,2,3)\\}$ (la segunda fila es múltiplo de la primera).", "Resolvemos $Ax=0$: como las dos filas son equivalentes, basta $x_1+2x_2+3x_3=0$.", "Con $x_2=s$, $x_3=t$ libres: $x_1=-2s-3t$, así $\\nul A=\\gen\\{(-2,1,0),(-3,0,1)\\}$.", "Cada generador es ortogonal a $(1,2,3)$: $-2+2=0$ y $-3+3=0$." ], respuesta: "$(\\text{Fila }A)^{\\perp}=\\nul A=\\gen\\{(-2,1,0),(-3,0,1)\\}$." },
    ],
    ejercicios: [
      { titulo: "Complemento de una recta", dificultad: "basico", enunciado: "<p>Sea $W=\\gen\\{(1,1,1)\\}$ en $\\R^3$. Encuentre una base de $W^{\\perp}$.</p>", pista: "Imponga $x\\cdot(1,1,1)=0$.", desarrollo: [ "La condición es $x_1+x_2+x_3=0$.", "Con $x_2=s$, $x_3=t$ libres: $x_1=-s-t$.", "Una base es $\\{(-1,1,0),(-1,0,1)\\}$." ], respuesta: "$W^{\\perp}=\\gen\\{(-1,1,0),(-1,0,1)\\}$ (plano $x_1+x_2+x_3=0$)." },
      { titulo: "Dimensiones complementarias", dificultad: "basico", enunciado: "<p>Si $W$ es un subespacio de $\\R^5$ con $\\dim W=3$, ¿cuál es $\\dim W^{\\perp}$?</p>", pista: "Use $\\dim W+\\dim W^{\\perp}=n$.", desarrollo: [ "Aquí $n=5$ y $\\dim W=3$.", "$\\dim W^{\\perp}=5-3=2$." ], respuesta: "$\\dim W^{\\perp}=2$." },
      { titulo: "Complemento de un plano dado", dificultad: "intermedio", enunciado: "<p>Sea $W=\\{\\,(x,y,z): x+2y-3z=0\\,\\}$. Encuentre $W^{\\perp}$.</p>", pista: "El plano $W$ está definido por el vector normal $(1,2,-3)$.", desarrollo: [ "$W$ es el conjunto de vectores ortogonales a $v=(1,2,-3)$, es decir $W=(\\gen\\{v\\})^{\\perp}$.", "De manera recíproca, $(\\gen\\{v\\})^{\\perp\\perp}=\\gen\\{v\\}$ en dimensión finita.", "Por lo tanto $W^{\\perp}=\\gen\\{(1,2,-3)\\}$." ], respuesta: "$W^{\\perp}=\\gen\\{(1,2,-3)\\}$." },
      { titulo: "Espacio nulo de la traspuesta", dificultad: "avanzado", enunciado: "<p>Encuentre $(\\text{Fila }A)^{\\perp}$ para $A=\\begin{bmatrix}1&2&3\\\\0&1&1\\end{bmatrix}$.</p>", pista: "Calcule $\\nul A$ y verifique ortogonalidad con cada fila.", desarrollo: [ "$\\nul A$: resolver $x_1+2x_2+3x_3=0$ y $x_2+x_3=0$.", "De la segunda $x_2=-x_3$; en la primera $x_1=-2x_2-3x_3=2x_3-3x_3=-x_3$.", "Con $x_3=1$: $x=(-1,-1,1)$, luego $\\nul A=\\gen\\{(-1,-1,1)\\}$.", "Verificación: $(-1,-1,1)\\cdot(1,2,3)=0$ y $(-1,-1,1)\\cdot(0,1,1)=0$." ], respuesta: "$(\\text{Fila }A)^{\\perp}=\\gen\\{(-1,-1,1)\\}$." },
    ],
    erroresComunes: [
      "Imponer ortogonalidad solo contra un generador cuando la descripción de $W$ tiene varios generadores.",
      "Confundir $\\nul A$ con $\\nul A^{T}$: recuerde $(\\text{Fila }A)^{\\perp}=\\nul A$ y $(\\text{Col }A)^{\\perp}=\\nul A^{T}$.",
      "Creer que $W\\cap W^{\\perp}=W$; en realidad siempre $W\\cap W^{\\perp}=\\{0\\}$.",
      "Olvidar que $\\dim W+\\dim W^{\\perp}=n$ para controlar el tamaño del resultado.",
    ],
    checklist: [
      "Aplico la definición de $W^{\\perp}$ imponiendo ortogonalidad contra los generadores de $W$.",
      "Uso $(\\text{Fila }A)^{\\perp}=\\nul A$ y $(\\text{Col }A)^{\\perp}=\\nul A^{T}$.",
      "Determino una base de $W^{\\perp}$ resolviendo el sistema adecuado.",
      "Compruebo dimensiones con $\\dim W+\\dim W^{\\perp}=n$.",
      "Verifico la ortogonalidad de mis vectores contra los generadores de $W$.",
    ],
    autoevaluacion: [
      { pregunta: "Si $W$ es un subespacio de $\\R^n$, entonces $\\dim W+\\dim W^{\\perp}$ es igual a:", opciones: [ "$n$", "$2n$", "$\\dim W$", "$0$" ], correcta: 0, explicacion: "Es la versión dimensional del teorema de la descomposición ortogonal: $\\dim W+\\dim W^{\\perp}=n$." },
      { pregunta: "El complemento ortogonal del espacio columna de $A$ es:", opciones: [ "$\\nul A^{T}$", "$\\nul A$", "$\\text{Fila }A$", "$\\text{Col }A$" ], correcta: 0, explicacion: "$(\\text{Col }A)^{\\perp}=\\nul A^{T}$, porque cada fila de $A^{T}$ es una columna de $A$." },
      { pregunta: "Para $W=\\gen\\{(1,1,1)\\}\\subset\\R^3$, una base de $W^{\\perp}$ es:", opciones: [ "$\\{(-1,1,0),(-1,0,1)\\}$", "$\\{(1,1,0),(1,0,1)\\}$", "$\\{(1,1,1)\\}$", "$\\{(1,0,0),(0,1,0)\\}$" ], correcta: 0, explicacion: "Ambos vectores satisfacen $x_1+x_2+x_3=0$ y son linealmente independientes; el plano $W^{\\perp}$ tiene dimensión $2$." },
    ],
    referencias: [ { titulo: "Clase 33 — Complemento ortogonal (PDF)", ruta: "recursos/clases/clase-33.pdf" } ],
  });
})();
