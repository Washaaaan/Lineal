/* Módulo 1 · Sección 5 — Intersección de planos y SEL (puente al Módulo 2) */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m01_s05", modulo: 1, moduloNombre: "Módulo 1 · Vectores y geometría", orden: 5,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Intersección de planos y sistemas de ecuaciones lineales",
    objetivo: "Interpretar geométricamente un SEL como intersección de planos y describir la solución (punto, recta o vacío) en forma paramétrica.",
    fuente: "Clase 05 · Apunte Clase 4 (Intersección de planos) · Lay §1.1–1.2 · Poole §2.1",
    prerrequisitos: ["Planos en R³", "Ecuación vectorial de recta", "Resolución de sistemas 2×2"],
    teoria: [
      { tipo: "texto", html: "<p>Una ecuación lineal en $\\R^3$ corresponde a un <b>plano</b>. Por lo tanto, resolver un <b>Sistema de Ecuaciones Lineales (SEL)</b> equivale a <b>intersectar planos</b>.</p>" },
      { tipo: "definicion", titulo: "SEL como intersección", html: "<p>El sistema $$\\begin{cases}3x-2y+z=1\\\\ x+y-3z=2\\end{cases}$$ corresponde a dos planos. Su solución es el conjunto de puntos $(x,y,z)$ que satisfacen <b>ambas</b> ecuaciones: en este caso, una <b>recta</b>.</p>" },
      { tipo: "nota", titulo: "Álgebra y geometría se corresponden (Clase 05)", html: "<p>La eliminación produce ecuaciones equivalentes que:</p><ul><li>no modifican la intersección geométrica;</li><li>pueden cambiar cada plano, pero no su recta común;</li><li>revelan la recta de soluciones en <b>forma paramétrica</b>.</li></ul><p>Multiplicar una ecuación por un escalar no cambia su plano. Reemplazar una ecuación por una combinación de las otras cambia el plano, pero no la intersección.</p>" },
      { tipo: "teorema", titulo: "Posición relativa de dos planos en R³", html: "<ul><li>Se cortan en una <b>recta</b> ⇒ infinitas soluciones (1 variable libre).</li><li>Son <b>paralelos y distintos</b> ⇒ sin solución.</li><li><b>Coinciden</b> ⇒ infinitas soluciones (todo un plano, 2 variables libres).</li></ul>" },
      { tipo: "teorema", titulo: "Posición relativa de tres planos", html: "<ul><li>Se cortan en un <b>único punto</b> ⇒ solución única.</li><li>Tienen una <b>recta común</b> ⇒ infinitas soluciones.</li><li>Sin punto común (paralelos, dos paralelos, o en <b>prisma</b>) ⇒ sin solución.</li></ul>" },
      { tipo: "grafico", spec: { tipo: "vectores3d", titulo: "Dos planos que se cortan en una recta", planos: [ { a: 3, b: -2, c: 1, d: 1, r: 3, color: "#1e5eff", label: "3x−2y+z=1" }, { a: 1, b: 1, c: -3, d: 2, r: 3, color: "#00b894", label: "x+y−3z=2" } ], ocultarLeyenda: false } },
    ],
    ejemplos: [
      { titulo: "Intersección de dos planos", enunciado: "Resuelva $\\begin{cases}3x-2y+z=1\\\\ x+y-3z=2\\end{cases}$ y describa la solución.", desarrollo: [ "Tomamos $z=t$ como variable libre y despejamos $x,y$ en función de $t$.", "De la segunda: $x=2-y+3t$. Sustituimos en la primera: $3(2-y+3t)-2y+t=1$.", "$6-3y+9t-2y+t=1\\Rightarrow -5y+10t=-5\\Rightarrow y=2t+1$.", "Entonces $x=2-(2t+1)+3t=1+t$.", "Solución: $(x,y,z)=(1+t,\\,1+2t,\\,t)$." ], respuesta: "Recta: $x=\\langle1,1,0\\rangle+t\\langle1,2,1\\rangle$, $t\\in\\R$." },
      { titulo: "Planos paralelos", enunciado: "Interprete $\\begin{cases}x+y+z=1\\\\ x+y+z=3\\end{cases}$.", desarrollo: [ "Las normales son iguales: $\\langle1,1,1\\rangle$.", "Pero $1\\neq3$: son planos paralelos distintos.", "No hay punto común." ], respuesta: "Sistema inconsistente (sin solución): planos paralelos." },
      { titulo: "Planos coincidentes", enunciado: "Interprete $\\begin{cases}x+y+z=1\\\\ 2x+2y+2z=2\\end{cases}$.", desarrollo: [ "La segunda ecuación es $2\\times$ la primera.", "Son el mismo plano." ], respuesta: "Infinitas soluciones (todo el plano $x+y+z=1$; 2 variables libres)." },
    ],
    ejercicios: [
      { titulo: "Recta de intersección", dificultad: "intermedio", enunciado: "Halle la recta de intersección de $\\begin{cases}x+y+z=2\\\\ x-y+z=0\\end{cases}$.", pista: "Reste las ecuaciones para eliminar $z$ o $x$.", desarrollo: [ "Sumando las ecuaciones: $2x+2z=2\\Rightarrow x+z=1\\Rightarrow x=1-t$ con $z=t$.", "De $x+y+z=2$: $(1-t)+y+t=2\\Rightarrow y=1$.", "Solución: $(x,y,z)=(1-t,\\,1,\\,t)$." ], respuesta: "$x=\\langle1,1,0\\rangle+t\\langle-1,0,1\\rangle$." },
      { titulo: "Clasificar posición", dificultad: "intermedio", enunciado: "Clasifique $\\begin{cases}2x-y=1\\\\ 4x-2y=2\\end{cases}$.", pista: "Compare las ecuaciones.", desarrollo: [ "La segunda es $2\\times$ la primera.", "Coinciden (en $\\R^2$: misma recta; en $\\R^3$: mismo plano)." ], respuesta: "Infinitas soluciones (coincidentes)." },
      { titulo: "Sin solución", dificultad: "basico", enunciado: "Clasifique $\\begin{cases}x-2y=3\\\\ 2x-4y=5\\end{cases}$.", pista: "Compare la razón entre coeficientes y términos independientes.", desarrollo: [ "Coeficientes: $2x-4y=2(x-2y)$, la segunda debería ser $2\\cdot3=6$.", "Pero es $5\\neq6$.", "Rectas paralelas distintas." ], respuesta: "Inconsistente (sin solución)." },
      { titulo: "Tres planos, un punto", dificultad: "avanzado", enunciado: "Resuelva $\\begin{cases}x+y+z=2\\\\ x-y+z=0\\\\ x+y-z=0\\end{cases}$.", pista: "Combine ecuaciones para eliminar variables.", desarrollo: [ "Sumando 2ª y 3ª: $2x+2y=0\\Rightarrow y=-x$.", "De la 3ª: $x+y-z=0\\Rightarrow 0-z=0\\Rightarrow z=0$.", "De la 1ª: $x-x+0=2$?? Revisamos: $x+(-x)+0=0\\neq2$.", "En realidad de 2ª y 3ª restadas: $(x-y+z)-(x+y-z)=0\\Rightarrow -2y+2z=0\\Rightarrow y=z$.", "De 1ª y 3ª: $(x+y+z)-(x+y-z)=2-0\\Rightarrow 2z=2\\Rightarrow z=1$. Entonces $y=1$ y $x=0$." ], respuesta: "Solución única: $(x,y,z)=(0,1,1)$." },
    ],
    erroresComunes: [
      "Creer que dos planos pueden intersectarse en exactamente dos puntos (si se cortan, es en una recta).",
      "Confundir 'paralelos' con 'coincidentes' sin revisar el término independiente.",
      "Perder variables libres al parametrizar la solución.",
    ],
    checklist: [
      "Traduzco un SEL a la intersección de sus planos.",
      "Describo la solución como punto, recta (paramétrica) o vacío.",
      "Clasifico la posición relativa de 2 y de 3 planos.",
      "Explico por qué la eliminación no cambia la intersección.",
    ],
    autoevaluacion: [
      { pregunta: "La intersección de dos planos no paralelos en $\\R^3$ es:", opciones: [ "una recta", "un punto", "un plano", "vacía" ], correcta: 0, explicacion: "Dos planos no paralelos se cortan en una recta." },
      { pregunta: "Si un SEL 3×3 tiene infinitas soluciones con una variable libre, la solución es:", opciones: [ "una recta", "un punto", "un plano completo", "vacío" ], correcta: 0, explicacion: "Una variable libre ⇒ 1 parámetro ⇒ recta." },
      { pregunta: "$\\begin{cases}x+y+z=1\\\\ x+y+z=3\\end{cases}$ es:", opciones: [ "inconsistente", "solución única", "infinitas soluciones", "coincidente" ], correcta: 0, explicacion: "Planos paralelos distintos ⇒ sin solución." },
    ],
    referencias: [ { titulo: "Clase 05 — Intersección de planos y SEL (PDF)", ruta: "recursos/clases/clase-05.pdf" }, { titulo: "Apunte Clase 4 (PDF)", ruta: "recursos/apuntes/apunte-clase-04.pdf" } ],
  });
})();
