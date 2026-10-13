/* Módulo 4 · Sección 7 — El determinante como área o volumen */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m04_s07", modulo: 4, moduloNombre: "Módulo 4 · Matrices, inversa y determinantes", orden: 7,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "El determinante como área o volumen",
    objetivo: "Interpretar |det A| como área (en R²) o volumen (en R³) de la región generada por las columnas y usar |det A| para escalar áreas y volúmenes bajo transformaciones lineales.",
    fuente: "Clase 21 · Lay §3.3 · Poole §4.3",
    prerrequisitos: ["Determinantes", "Transformaciones lineales", "Vectores en R² y R³"],
    teoria: [
      { tipo: "texto", html: "<p>El determinante no es solo un número que decide invertibilidad: tiene un significado <b>geométrico</b> preciso. Mide cuánto se estira (o contrae) el área o el volumen al aplicar la transformación lineal.</p>" },
      { tipo: "teorema", titulo: "Área y volumen como |det A|", html: "<p>Si $A$ es de $2\\times2$, el área del paralelogramo determinado por sus columnas es $|\\det A|$.</p><p>Si $A$ es de $3\\times3$, el volumen del paralelepípedo determinado por sus columnas es $|\\det A|$.</p><p>Si $\\det A=0$, las columnas son dependientes y la región se aplasta (área o volumen nulo).</p>" },
      { tipo: "teorema", titulo: "Efecto sobre regiones arbitrarias", html: "<p>Sea $T:\\R^2\\to\\R^2$ con matriz $A$ de $2\\times2$ y $S$ un conjunto del plano:</p>$$\\{\\text{área de }T(S)\\}=|\\det A|\\cdot\\{\\text{área de }S\\}.$$<p>Análogamente en $\\R^3$, con $A$ de $3\\times3$ y $S$ un paralelepípedo:</p>$$\\{\\text{volumen de }T(S)\\}=|\\det A|\\cdot\\{\\text{volumen de }S\\}.$$<p>El resultado también vale si $S$ no es un paralelogramo (el factor $|\\det A|$ es el mismo para toda región).</p>" },
      { tipo: "nota", titulo: "Área de un triángulo (Lay §3.3)", html: "<p>El triángulo con vértices $P,Q,R$ tiene área $\\tfrac12|\\det[\\,Q-P \\;\\; R-P\\,]|$. En $\\R^3$, el área de un triángulo y el volumen de un paralelepípedo se calculan con determinantes de $3\\times3$.</p>" },
      { tipo: "nota", titulo: "Determinante y composición (Poole §4.3)", html: "<p>Como $\\det(AB)=\\det A\\,\\det B$, aplicar dos transformaciones multiplica las áreas por $|\\det A||\\det B|$. Por eso $|\\det A|=1$ caracteriza las transformaciones que preservan área (como rotaciones y reflexiones).</p>" },
      { tipo: "grafico", spec: { tipo: "vectores2d", titulo: "Paralelogramo generado por u=(3,1) y v=(1,2): área |det|=5", vectores: [ { x: 3, y: 1, label: "u", color: "#1e5eff" }, { x: 1, y: 2, label: "v", color: "#00b894" } ], segmentos: [ { x0: 3, y0: 1, x1: 4, y1: 3, dash: "dot", color: "#8e44ad" }, { x0: 1, y0: 2, x1: 4, y1: 3, dash: "dot", color: "#8e44ad" } ], ocultarLeyenda: true, rangeX: [-0.5, 5], rangeY: [-0.5, 4] } },
    ],
    ejemplos: [
      { titulo: "Área de un paralelogramo por vértices", enunciado: "<p>Calcule el área del paralelogramo de vértices $(-2,-2)$, $(0,3)$, $(4,-1)$ y $(6,4)$.</p>", desarrollo: [ "Tomamos el vértice $(-2,-2)$ como origen y los vectores a los vértices adyacentes $u=(0,3)-(-2,-2)=(2,5)$ y $v=(4,-1)-(-2,-2)=(6,1)$.", "El área es $|\\det[u\\;\\;v]|=\\left|\\det\\begin{bmatrix}2&6\\\\5&1\\end{bmatrix}\\right|$.", "$=|\\,2\\cdot1-6\\cdot5\\,|=|2-30|=28$." ], respuesta: "El área es $28$." },
      { titulo: "Área bajo una transformación", enunciado: "<p>Sea $S$ el paralelogramo generado por $a=\\begin{bmatrix}1\\\\3\\end{bmatrix}$ y $b=\\begin{bmatrix}5\\\\5\\end{bmatrix}$, y $A=\\begin{bmatrix}1&-0{,}1\\\\0&2\\end{bmatrix}$. Calcule el área de $T(S)$ con $T(x)=Ax$.</p>", desarrollo: [ "Área de $S=|\\det[a\\;\\;b]|=|1\\cdot5-3\\cdot5|=|-10|=10$.", "$\\det A=1\\cdot2-(-0{,}1)\\cdot0=2$.", "$\\{\\text{área de }T(S)\\}=|\\det A|\\cdot10=2\\cdot10=20$." ], respuesta: "El área de $T(S)$ es $20$." },
      { titulo: "Área de una elipse", enunciado: "<p>Sean $a,b>0$. Encuentre el área de la región encerrada por la elipse $\\dfrac{x_1^2}{a^2}+\\dfrac{x_2^2}{b^2}=1$.</p>", desarrollo: [ "La elipse es la imagen del disco unitario bajo la transformación diagonal $D=\\begin{bmatrix}a&0\\\\0&b\\end{bmatrix}$.", "El disco unitario tiene área $\\pi$.", "$\\det D=ab$, así que el área de la elipse es $|\\det D|\\cdot\\pi=\\pi ab$." ], respuesta: "El área es $\\pi ab$." },
    ],
    ejercicios: [
      { titulo: "Área desde dos vectores", dificultad: "basico", enunciado: "<p>Calcule el área del paralelogramo generado por $u=(3,1)$ y $v=(1,2)$.</p>", pista: "Área $=|\\det[u\\;\\;v]|$.", desarrollo: [ "$\\det\\begin{bmatrix}3&1\\\\1&2\\end{bmatrix}=6-1=5$.", "El área es $|5|=5$." ], respuesta: "Área $=5$." },
      { titulo: "Área de un triángulo", dificultad: "basico", enunciado: "<p>Calcule el área del triángulo de vértices $(0,0)$, $(4,0)$ y $(0,3)$.</p>", pista: "El triángulo es la mitad de un paralelogramo.", desarrollo: [ "Los vectores desde el origen son $(4,0)$ y $(0,3)$.", "El paralelogramo tiene área $|\\det\\begin{bmatrix}4&0\\\\0&3\\end{bmatrix}|=12$.", "El triángulo es la mitad: $12/2=6$." ], respuesta: "Área $=6$." },
      { titulo: "Volumen de un paralelepípedo", dificultad: "intermedio", enunciado: "<p>Calcule el volumen del paralelepípedo generado por $u=(1,0,0)$, $v=(0,2,0)$ y $w=(0,0,3)$.</p>", pista: "Volumen $=|\\det[u\\;\\;v\\;\\;w]|$.", desarrollo: [ "$\\det\\begin{bmatrix}1&0&0\\\\0&2&0\\\\0&0&3\\end{bmatrix}=1\\cdot2\\cdot3=6$ (matriz diagonal).", "El volumen es $|6|=6$." ], respuesta: "Volumen $=6$.", grafico: { tipo: "vectores3d", titulo: "Paralelepípedo de lados 1, 2 y 3 (volumen 6)", vectores: [ { x: 1, y: 0, z: 0, label: "u", color: "#1e5eff" }, { x: 0, y: 2, z: 0, label: "v", color: "#00b894" }, { x: 0, y: 0, z: 3, label: "w", color: "#e17055" } ], segmentos: [ [[1, 0, 0], [1, 2, 0]], [[0, 2, 0], [1, 2, 0]], [[1, 0, 0], [1, 0, 3]], [[1, 0, 3], [1, 2, 3]], [[0, 2, 0], [0, 2, 3]], [[0, 0, 3], [0, 2, 3]], [[1, 2, 0], [1, 2, 3]], [[0, 2, 3], [1, 2, 3]], [[1, 0, 3], [0, 0, 3]] ], ocultarLeyenda: true } },
      { titulo: "Área de un triángulo por determinante", dificultad: "avanzado", enunciado: "<p>Calcule el área del triángulo de vértices $A(1,1)$, $B(4,2)$ y $C(2,5)$.</p>", pista: "Use $\\tfrac12|\\det[\\,B-A\\;\\;C-A\\,]|$.", desarrollo: [ "$B-A=(3,1)$ y $C-A=(1,4)$.", "$\\det\\begin{bmatrix}3&1\\\\1&4\\end{bmatrix}=12-1=11$.", "El área es $\\tfrac12|11|=\\dfrac{11}{2}$." ], respuesta: "Área $=\\dfrac{11}{2}$.", grafico: { tipo: "vectores2d", titulo: "Triángulo A(1,1), B(4,2), C(2,5): área 11/2", vectores: [ { x: 3, y: 1, x0: 1, y0: 1, label: "B−A", color: "#1e5eff" }, { x: 1, y: 4, x0: 1, y0: 1, label: "C−A", color: "#00b894" } ], puntos: [ { x: 1, y: 1, label: "A" }, { x: 4, y: 2, label: "B" }, { x: 2, y: 5, label: "C" } ], segmentos: [ { x0: 4, y0: 2, x1: 2, y1: 5, color: "#8e44ad" }, { x0: 2, y0: 5, x1: 1, y1: 1, color: "#8e44ad" } ], ocultarLeyenda: true, rangeX: [0, 5], rangeY: [0, 6] } },
    ],
    erroresComunes: [
      "Olvidar el valor absoluto: el área o volumen es $|\\det A|$, no $\\det A$ (que puede ser negativo).",
      "Usar $\\det A$ para escalar áreas cuando la transformación no es lineal.",
      "Confundir el área del paralelogramo con la de un triángulo (falta el factor $\\tfrac12$).",
      "Tomar los vectores equivocados (p. ej. no usar aristas desde un mismo vértice).",
      "Suponer que $|\\det A|$ depende de la región $S$ (es un factor constante).",
    ],
    checklist: [
      "Interpreto $|\\det A|$ como área en $\\R^2$ y como volumen en $\\R^3$.",
      "Escalo áreas y volúmenes de regiones bajo $T(x)=Ax$ con $|\\det A|$.",
      "Calculo el área de un triángulo con $\\tfrac12|\\det[Q-P\\;\\;R-P]|$.",
      "Relaciono $\\det A=0$ con regiones aplastadas (área o volumen nulo).",
      "Uso $\\det(AB)=\\det A\\det B$ para áreas de composiciones.",
    ],
    autoevaluacion: [
      { pregunta: "El área del paralelogramo generado por las columnas de $A=\\begin{bmatrix}2&1\\\\1&3\\end{bmatrix}$ es:", opciones: [ "$5$", "$7$", "$-5$", "$6$" ], correcta: 0, explicacion: "$|\\det A|=|2\\cdot3-1\\cdot1|=|5|=5$." },
      { pregunta: "Si $\\det A=0$ para una matriz $2\\times2$, el área del paralelogramo generado es:", opciones: [ "$0$ (las columnas son dependientes)", "$1$", "Infinita", "Indefinida" ], correcta: 0, explicacion: "Columnas dependientes generan un paralelogramo degenerado de área $0$." },
      { pregunta: "Bajo $T(x)=Ax$ con $\\det A=3$, el área de una región se multiplica por:", opciones: [ "$3$", "$9$", "$\\tfrac13$", "$0$" ], correcta: 0, explicacion: "El área se escala por $|\\det A|=3$." },
    ],
    referencias: [ { titulo: "Clase 21 — Determinante como área o volumen (PDF)", ruta: "recursos/clases/clase-21.pdf" } ],
  });
})();
