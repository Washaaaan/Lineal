/* Módulo 1 · Sección 4 — Planos en el espacio */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m01_s04", modulo: 1, moduloNombre: "Módulo 1 · Vectores y geometría", orden: 4,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Planos en R³: formas normal, general y paramétrica",
    objetivo: "Determinar la ecuación de un plano usando punto y normal (o dos directores), y relacionar las formas normal, general y paramétrica.",
    fuente: "Clase 04 · Apunte Clase 3 (Rectas y planos) · Lay §1.3, §6.1 · Poole §1.3",
    prerrequisitos: ["Producto punto", "Ecuación vectorial de la recta", "Vectores ortogonales"],
    teoria: [
      { tipo: "definicion", titulo: "Plano en R³ — forma normal", html: "<p>Un plano queda determinado por un punto $p$ y un vector <b>normal</b> $n\\neq\\mathbf{0}$:</p>$$n\\cdot(x-p)=0\\iff n\\cdot x=n\\cdot p.$$" },
      { tipo: "definicion", titulo: "Forma general", html: "<p>Con $n=\\langle a,b,c\\rangle$, la ecuación se escribe $$ax+by+cz=d.$$<p>Los coeficientes $(a,b,c)$ son las componentes del vector normal.</p>" },
      { tipo: "definicion", titulo: "Forma vectorial / paramétrica del plano", html: "<p>Si $p$ es un punto del plano y $u,v$ son directores <b>no paralelos</b>:</p>$$x=p+su+tv,\\quad s,t\\in\\R.$$<p>Sus componentes son las <b>ecuaciones paramétricas</b>. Un parámetro da una recta; dos parámetros, un plano.</p>" },
      { tipo: "nota", titulo: "La normal es ortogonal a todo el plano (Lay §6.1)", html: "<p>El vector normal $n$ es perpendicular a los directores $u$ y $v$: $n\\cdot u=n\\cdot v=0$. En la práctica, para hallar $n$ a partir de dos directores se usa el <b>producto cruz</b> $u\\times v$ (que se estudia como herramienta de cálculo).</p>" },
      { tipo: "grafico", spec: { tipo: "vectores3d", titulo: "Plano x+2y+3z=6 y su normal n=(1,2,3)", planos: [ { a: 1, b: 2, c: 3, d: 6, r: 3.5, color: "#1e5eff", label: "plano" } ], vectores: [ { x: 1, y: 2, z: 3, label: "n", color: "#e17055" } ], puntos: [ { x: 6, y: 0, z: 1, label: "P(6,0,1)" } ], ocultarLeyenda: true } },
      { tipo: "nota", titulo: "Ángulo y paralelismo entre planos", html: "<p>Dos planos son <b>paralelos</b> si sus normales son paralelas. El <b>ángulo</b> entre dos planos es el ángulo entre sus vectores normales.</p>" },
      { tipo: "teorema", titulo: "Conteo de parámetros y ecuaciones", html: "<p>En $\\R^n$: $\\text{n° de parámetros}+\\text{n° de ecuaciones}=n$. Por eso una ecuación en $\\R^3$ es un <b>hiperplano</b> (un plano) y dos ecuaciones corresponden a una recta.</p>" },
    ],
    ejemplos: [
      { titulo: "Plano por punto y normal", enunciado: "Encuentre las formas normal y general del plano que contiene $P(6,0,1)$ con normal $n=\\langle1,2,3\\rangle$.", desarrollo: [ "Forma normal: $n\\cdot(x-p)=0$, es decir $\\langle1,2,3\\rangle\\cdot(x-\\langle6,0,1\\rangle)=0$.", "Calculamos $n\\cdot p=6+0+3=9$.", "Forma general: $x+2y+3z=9$." ], respuesta: "$\\langle1,2,3\\rangle\\cdot(x-\\langle6,0,1\\rangle)=0$ y $x+2y+3z=9$." },
      { titulo: "Plano desde forma paramétrica", enunciado: "Determine la ecuación general del plano $x=s\\langle1,2,-1\\rangle+t\\langle1,1,0\\rangle$.", desarrollo: [ "Un punto del plano es el origen $p=\\mathbf{0}$; directores $u=\\langle1,2,-1\\rangle$, $v=\\langle1,1,0\\rangle$.", "La normal debe cumplir $n\\cdot u=0$ y $n\\cdot v=0$.", "Se obtiene $n=\\langle1,-1,-1\\rangle$ (múltiplo de $u\\times v$).", "Ecuación: $x-y-z=0$." ], respuesta: "$x-y-z=0$." },
      { titulo: "Directores desde puntos", enunciado: "Dado el plano del primer ejemplo, encuentre dos directores usando puntos adicionales.", desarrollo: [ "Buscamos puntos que cumplan $x+2y+3z=9$: $Q(9,0,0)$ y $R(0,0,3)$.", "$u=Q-P=\\langle3,0,-1\\rangle$, $v=R-P=\\langle-6,0,2\\rangle$... pero son paralelos, tomamos $R(0,\\tfrac92,0)$.", "Con $R(0,\\tfrac92,0)$: $v=R-P=\\langle-6,\\tfrac92,-1\\rangle$, no paralelo a $u$." ], respuesta: "Con $Q(9,0,0)$ y $R(0,\\tfrac92,0)$: $x=\\langle6,0,1\\rangle+s\\langle3,0,-1\\rangle+t\\langle-6,\\tfrac92,-1\\rangle$." },
    ],
    ejercicios: [
      { titulo: "Forma general", dificultad: "basico", enunciado: "Encuentre la ecuación general del plano con normal $n=\\langle2,-1,1\\rangle$ que pasa por $P(1,1,0)$.", pista: "$n\\cdot x=n\\cdot p$.", desarrollo: [ "$n\\cdot p=2-1+0=1$.", "Ecuación: $2x-y+z=1$." ], respuesta: "$2x-y+z=1$." },
      { titulo: "Plano por tres puntos", dificultad: "intermedio", enunciado: "Halle la ecuación del plano que pasa por $A(1,0,0)$, $B(0,1,0)$, $C(0,0,1)$.", pista: "Use dos directores y busque una normal.", desarrollo: [ "$u=B-A=\\langle-1,1,0\\rangle$, $v=C-A=\\langle-1,0,1\\rangle$.", "Normal $n=\\langle1,1,1\\rangle$ (satisface $n\\cdot u=n\\cdot v=0$).", "$n\\cdot A=1\\Rightarrow x+y+z=1$." ], respuesta: "$x+y+z=1$." },
      { titulo: "¿Paralelos?", dificultad: "intermedio", enunciado: "Determine si los planos $x+2y+z=1$ y $2x+4y+2z=5$ son paralelos y si coinciden.", pista: "Compare normales y luego un punto.", desarrollo: [ "Normales $\\langle1,2,1\\rangle$ y $\\langle2,4,2\\rangle=2\\langle1,2,1\\rangle$: son paralelos.", "Pero $5\\neq2\\cdot1$; las ecuaciones no son múltiplos.", "Planos paralelos distintos: no se intersectan." ], respuesta: "Paralelos y distintos (sin intersección)." },
      { titulo: "Hiperplano", dificultad: "avanzado", enunciado: "Escriba la forma general del plano y su normal dado por $x=t\\langle1,1,0\\rangle+s\\langle2,0,1\\rangle$.", pista: "La normal es ortogonal a ambos directores.", desarrollo: [ "$u=\\langle1,1,0\\rangle$, $v=\\langle2,0,1\\rangle$, $p=\\mathbf0$.", "$n$ debe cumplir $n_1+n_2=0$ y $2n_1+n_3=0$.", "Tomando $n_1=1$: $n=\\langle1,-1,-2\\rangle$.", "Ecuación: $x-y-2z=0$." ], respuesta: "$x-y-2z=0$, normal $n=\\langle1,-1,-2\\rangle$." },
    ],
    erroresComunes: [
      "Confundir la orientación del plano con la de un punto que pertenece a él.",
      "Usar un solo director para definir un plano (se necesitan dos).",
      "Elegir directores paralelos entre sí (no generan el plano).",
      "Pensar que una ecuación en $\\R^3$ es una recta: es un plano.",
    ],
    checklist: [
      "Escribo plano por punto y normal en forma normal y general.",
      "Obtengo directores a partir de puntos del plano.",
      "Determino la normal a partir de dos directores.",
      "Decido paralelismo/coincidencia comparando normales y términos independientes.",
    ],
    autoevaluacion: [
      { pregunta: "La normal al plano $3x-y+2z=4$ es:", opciones: [ "$\\langle3,-1,2\\rangle$", "$\\langle4,4,4\\rangle$", "$\\langle1,-1,2\\rangle$", "$\\langle3,1,2\\rangle$" ], correcta: 0, explicacion: "Los coeficientes de $x,y,z$ forman la normal." },
      { pregunta: "¿Cuántos directores independientes definen un plano en $\\R^3$?", opciones: [ "2", "1", "3", "4" ], correcta: 0, explicacion: "Dos directores no paralelos." },
      { pregunta: "Dos planos son paralelos si:", opciones: [ "sus normales son paralelas", "tienen el mismo término independiente", "pasan por el origen", "sus normales son ortogonales" ], correcta: 0, explicacion: "Normales paralelas ⇒ planos paralelos (o coincidentes)." },
    ],
    referencias: [ { titulo: "Clase 04 — Planos en el espacio (PDF)", ruta: "recursos/clases/clase-04.pdf" }, { titulo: "Apunte Clase 3 (PDF)", ruta: "recursos/apuntes/apunte-clase-03.pdf" } ],
  });
})();
