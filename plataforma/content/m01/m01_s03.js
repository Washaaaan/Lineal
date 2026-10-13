/* Módulo 1 · Sección 3 — Ortogonalidad y rectas en el espacio */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m01_s03", modulo: 1, moduloNombre: "Módulo 1 · Vectores y geometría", orden: 3,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Ortogonalidad y rectas en R² y R³",
    objetivo: "Calcular ángulos entre vectores, decidir ortogonalidad, y escribir una recta en forma vectorial, paramétrica y (en R²) normal usando punto y vector director o normal.",
    fuente: "Clase 03 · Apunte Clase 3 (Rectas y planos) · Lay §6.1, §1.3 · Poole §1.2",
    prerrequisitos: ["Producto punto", "Norma", "Trigonometría básica"],
    teoria: [
      { tipo: "teorema", titulo: "Desigualdad de Cauchy–Schwarz", html: "<p>Para todo $u,v\\in\\R^n$: $$|u\\cdot v|\\le\\|u\\|\\,\\|v\\|.$$</p><p>Es lo que permite definir el coseno de un ángulo entre vectores.</p>" },
      { tipo: "definicion", titulo: "Ángulo entre vectores", html: "<p>Para $u,v$ no nulos, el ángulo $\\theta\\in[0,\\pi]$ entre ellos satisface</p>$$\\cos\\theta=\\frac{u\\cdot v}{\\|u\\|\\,\\|v\\|}.$$" },
      { tipo: "definicion", titulo: "Ortogonalidad", html: "<p>Dos vectores $u$ y $v$ son <b>ortogonales</b> (perpendiculares) si $u\\cdot v=0$. El vector nulo es ortogonal a todos.</p>" },
      { tipo: "teorema", titulo: "Teorema de Pitágoras (vectorial)", html: "<p>Si $u\\cdot v=0$ entonces $\\|u+v\\|^2=\\|u\\|^2+\\|v\\|^2$.</p>" },
      { tipo: "nota", titulo: "Prueba breve (Lay §6.1)", html: "<p>$\\|u+v\\|^2=(u+v)\\cdot(u+v)=u\\cdot u+2u\\cdot v+v\\cdot v=\\|u\\|^2+\\|v\\|^2$, pues $u\\cdot v=0$.</p>" },
      { tipo: "definicion", titulo: "Recta en R² — ecuación normal", html: "<p>Si $n=\\langle a,b\\rangle$ (vector <b>normal</b>, perpendicular a la recta), la recta por el origen es $n\\cdot x=0$. En general, con un punto $p$ de la recta: $$n\\cdot(x-p)=0\\iff n\\cdot x=n\\cdot p.$$</p>" },
      { tipo: "definicion", titulo: "Recta — forma vectorial y paramétrica", html: "<p>Con punto $p$ y vector <b>director</b> $d\\neq\\mathbf{0}$: $$x=p+td,\\quad t\\in\\R.$$</p><p>Las ecuaciones por componente son las <b>paramétricas</b>.</p><div class='callout'><b>Importante:</b> la ecuación normal solo existe en $\\R^2$; la forma vectorial $x=p+td$ funciona en $\\R^2,\\R^3$ y en cualquier dimensión.</div>" },
      { tipo: "grafico", spec: { tipo: "vectores2d", titulo: "Recta 2x−y=0 con normal n=(2,−1) y director d=(1,2)", segmentos: [ { x0: -2.2, y0: -4.4, x1: 2.2, y1: 4.4, color: "#8e44ad", label: "recta", width: 2.5 } ], vectores: [ { x: 2, y: -1, label: "n=(2,−1)", color: "#e17055" }, { x: 1, y: 2, label: "d=(1,2)", color: "#1e5eff" } ], ocultarLeyenda: true, rangeX: [-2.5, 2.5], rangeY: [-3, 3] } },
      { tipo: "nota", titulo: "Rectas paralelas y perpendiculares", html: "<p>Dos rectas son <b>paralelas</b> si sus directores son paralelos (uno múltiplo del otro). Son <b>perpendiculares</b> si se intersectan y sus directores son ortogonales.</p>" },
    ],
    ejemplos: [
      { titulo: "Ángulo entre vectores", enunciado: "Calcule el ángulo entre $u=\\langle1,0,1\\rangle$ y $v=\\langle0,1,1\\rangle$.", desarrollo: [ "$u\\cdot v=0+0+1=1$.", "$\\|u\\|=\\|v\\|=\\sqrt2$.", "$\\cos\\theta=\\frac{1}{\\sqrt2\\cdot\\sqrt2}=\\frac12\\Rightarrow\\theta=60^\\circ=\\frac{\\pi}{3}$." ], respuesta: "$\\theta=60^\\circ$ ($\\pi/3$)." },
      { titulo: "Ortogonalidad", enunciado: "¿Son ortogonales $u=\\langle1,1,-2\\rangle$ y $v=\\langle3,1,2\\rangle$?", desarrollo: [ "$u\\cdot v=3+1-4=0$.", "Como el producto punto es cero, son ortogonales." ], respuesta: "Sí, son ortogonales." },
      { titulo: "Recta por un punto con director dado", enunciado: "Halle las ecuaciones vectorial y paramétricas de la recta en $\\R^3$ que pasa por $P(1,2,-1)$ y es paralela a $d=\\langle5,-1,3\\rangle$.", desarrollo: [ "Forma vectorial: $x=p+td$ con $p=\\langle1,2,-1\\rangle$.", "Paramétricas: $x=1+5t,\\;y=2-t,\\;z=-1+3t$." ], respuesta: "$x=\\langle1,2,-1\\rangle+t\\langle5,-1,3\\rangle$; $(x,y,z)=(1+5t,\\,2-t,\\,-1+3t)$.", grafico: { tipo: "vectores3d", titulo: "Recta x=(1,2,−1)+t(5,−1,3)", rectas: [ { p: [1, 2, -1], d: [5, -1, 3], color: "#1e5eff", label: "recta" } ], puntos: [ { x: 1, y: 2, z: -1, label: "P" } ], vectores: [ { x: 5, y: -1, z: 3, x0: 1, y0: 2, z0: -1, label: "d", color: "#e17055" } ], ocultarLeyenda: true } },
      { titulo: "Recta paralela a otra", enunciado: "Recta por $R(1,1,0)$ paralela a la recta por $P(-1,5,0)$ y $Q(2,1,1)$.", desarrollo: [ "Director de la recta dada: $d=Q-P=\\langle3,-4,1\\rangle$.", "La recta buscada usa ese director y punto $R$.", "$x=\\langle1,1,0\\rangle+t\\langle3,-4,1\\rangle$." ], respuesta: "$x=\\langle1,1,0\\rangle+t\\langle3,-4,1\\rangle$." },
    ],
    ejercicios: [
      { titulo: "Ángulo", dificultad: "basico", enunciado: "Calcule el ángulo entre $u=\\langle1,2,2\\rangle$ y $v=\\langle2,1,-2\\rangle$.", pista: "Use $\\cos\\theta=\\frac{u\\cdot v}{\\|u\\|\\|v\\|}$.", desarrollo: [ "$u\\cdot v=2+2-4=0$.", "Producto punto nulo ⇒ ángulo recto." ], respuesta: "$\\theta=90^\\circ$ (ortogonales)." },
      { titulo: "Ecuación normal", dificultad: "basico", enunciado: "Encuentre un vector normal y la ecuación normal de la recta $2x-y=0$.", pista: "Los coeficientes de $x,y$ forman la normal.", desarrollo: [ "La normal es $n=\\langle2,-1\\rangle$.", "Ecuación normal: $\\langle2,-1\\rangle\\cdot x=0$." ], respuesta: "$n=\\langle2,-1\\rangle$; $n\\cdot x=0$.", grafico: { tipo: "vectores2d", titulo: "Normal de 2x−y=0", segmentos: [ { x0: -1, y0: -2, x1: 1, y1: 2, color: "#8e44ad", label: "recta" } ], vectores: [ { x: 2, y: -1, label: "n", color: "#e17055" } ], ocultarLeyenda: true, rangeX: [-2, 3], rangeY: [-2, 3] } },
      { titulo: "Recta por dos puntos", dificultad: "intermedio", enunciado: "Escriba la forma vectorial de la recta que pasa por $A(1,-1,2)$ y $B(3,1,0)$.", pista: "El director es $B-A$.", desarrollo: [ "$d=B-A=\\langle2,2,-2\\rangle$ (o simplificado $\\langle1,1,-1\\rangle$).", "Usando $A$: $x=\\langle1,-1,2\\rangle+t\\langle2,2,-2\\rangle$." ], respuesta: "$x=\\langle1,-1,2\\rangle+t\\langle1,1,-1\\rangle$ (equivalente)." },
      { titulo: "Perpendicularidad", dificultad: "intermedio", enunciado: "Encuentre $k$ para que $u=\\langle1,k,2\\rangle$ y $v=\\langle3,-1,1\\rangle$ sean ortogonales.", pista: "Imponga $u\\cdot v=0$.", desarrollo: [ "$u\\cdot v=3-k+2=5-k$.", "$5-k=0\\Rightarrow k=5$." ], respuesta: "$k=5$." },
    ],
    erroresComunes: [
      "Calcular el ángulo sin normalizar (olvidar dividir por las normas).",
      "Usar la ecuación normal en $\\R^3$ (solo vale en $\\R^2$).",
      "Confundir vector normal con vector director.",
      "Decidir 'paralelas' comparando longitudes en vez de direcciones.",
    ],
    checklist: [
      "Aplico Cauchy–Schwarz y calculo ángulos correctamente.",
      "Verifico ortogonalidad con el producto punto.",
      "Escribo rectas en forma vectorial, paramétrica y normal (R²).",
      "Determino rectas paralelas/perpendiculares a partir de sus directores.",
    ],
    autoevaluacion: [
      { pregunta: "Si $u\\cdot v=0$ y ambos son no nulos, el ángulo es:", opciones: [ "$90^\\circ$", "$0^\\circ$", "$180^\\circ$", "$45^\\circ$" ], correcta: 0, explicacion: "$\\cos\\theta=0\\Rightarrow\\theta=90^\\circ$." },
      { pregunta: "Un vector director de la recta $x=\\langle2,0,1\\rangle+t\\langle-1,4,2\\rangle$ es:", opciones: [ "$\\langle-1,4,2\\rangle$", "$\\langle2,0,1\\rangle$", "$\\langle1,4,3\\rangle$", "$\\langle-2,0,-1\\rangle$" ], correcta: 0, explicacion: "El director es el vector que multiplica a $t$." },
      { pregunta: "¿En qué espacios vale la forma vectorial $x=p+td$?", opciones: [ "En $\\R^2$ y $\\R^3$ (y $\\R^n$)", "Solo en $\\R^2$", "Solo en $\\R^3$", "Solo en $\\R^n$ con $n\\ge4$" ], correcta: 0, explicacion: "$x=p+td$ define rectas en cualquier dimensión." },
    ],
    referencias: [ { titulo: "Clase 03 — Ortogonalidad y rectas (PDF)", ruta: "recursos/clases/clase-03.pdf" }, { titulo: "Apunte Clase 3 (PDF)", ruta: "recursos/apuntes/apunte-clase-03.pdf" } ],
  });
})();
