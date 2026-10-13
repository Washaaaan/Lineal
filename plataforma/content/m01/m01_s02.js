/* Módulo 1 · Sección 2 — Combinaciones lineales, producto punto, norma y distancia */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m01_s02", modulo: 1, moduloNombre: "Módulo 1 · Vectores y geometría", orden: 2,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Combinaciones lineales, producto punto, norma y distancia",
    objetivo: "Decidir si un vector es combinación lineal de otros, describir conjuntos generados, y calcular producto punto, norma, normalización y distancia.",
    fuente: "Clase 02 · Apunte Clase 2 (Producto punto) · Lay §1.3, §6.1 · Poole §1.1–1.2",
    prerrequisitos: ["Suma de vectores y escalar", "Sistema de ecuaciones simple"],
    teoria: [
      { tipo: "definicion", titulo: "Combinación lineal", html: "<p>Un vector $v$ es <b>combinación lineal</b> de $u_1,\\dots,u_k$ si existen escalares $c_1,\\dots,c_k$ tales que</p>$$v=c_1u_1+c_2u_2+\\dots+c_ku_k.$$<p>Los escalares $c_i$ se llaman <b>coeficientes</b> de la combinación.</p>" },
      { tipo: "definicion", titulo: "Conjunto generado", html: "<p>Dado $S=\\{u_1,\\dots,u_k\\}$, el <b>conjunto generado</b> por $S$ es</p>$$\\gen(S)=\\{c_1u_1+\\dots+c_ku_k \\mid c_1,\\dots,c_k\\in\\R\\}.$$<p>Es decir, <i>todos</i> los vectores que se pueden escribir como combinación lineal de $S$.</p>" },
      { tipo: "nota", titulo: "¿Qué genera...? (intuición, Poole §1.3)", html: "<ul><li>Un solo vector no nulo: una <b>recta</b> por el origen.</li><li>Dos vectores no paralelos en $\\R^2$: <b>todo el plano</b> $\\R^2$. Si son paralelos: solo una recta.</li><li>Dos vectores no paralelos en $\\R^3$: un <b>plano</b> por el origen.</li></ul>" },
      { tipo: "grafico", spec: { tipo: "vectores2d", titulo: "Gen{(1,0),(1,2)} recubre todo R²", vectores: [ { x: 1, y: 0, label: "u₁=(1,0)", color: "#1e5eff" }, { x: 1, y: 2, label: "u₂=(1,2)", color: "#00b894" } ], puntos: [ { x: 2, y: 2, label: "(2,2)=u₁+u₂" }, { x: 0.5, y: 1, label: "(0.5,1)=½u₂" } ], ocultarLeyenda: true, rangeX: [-0.5, 3], rangeY: [-0.5, 3] } },
      { tipo: "definicion", titulo: "Producto punto", html: "<p>Sean $u=\\langle u_1,\\dots,u_n\\rangle$, $v=\\langle v_1,\\dots,v_n\\rangle$. El <b>producto punto</b> es el número</p>$$u\\cdot v=u_1v_1+u_2v_2+\\dots+u_nv_n.$$<p>Está definido solo si ambos vectores tienen la misma dimensión y su resultado es un <b>escalar</b>, no un vector.</p>" },
      { tipo: "teorema", titulo: "Propiedades del producto punto", html: "<p>Para $u,v,w\\in\\R^n$ y $c\\in\\R$:</p><ul><li>$u\\cdot v=v\\cdot u$</li><li>$u\\cdot(v+w)=u\\cdot v+u\\cdot w$</li><li>$c(u\\cdot v)=(cu)\\cdot v=u\\cdot(cv)$</li><li>$u\\cdot u\\ge 0$ y $u\\cdot u=0\\iff u=\\mathbf{0}$</li></ul>" },
      { tipo: "definicion", titulo: "Norma (longitud)", html: "<p>La <b>norma</b> de $v\\in\\R^n$ es $$\\|v\\|=\\sqrt{v\\cdot v}=\\sqrt{v_1^2+\\dots+v_n^2}.$$</p><p>Propiedades: $\\|v\\|=0\\iff v=\\mathbf{0}$ y $\\|cv\\|=|c|\\,\\|v\\|$.</p>" },
      { tipo: "nota", titulo: "Normalizar y vectores unitarios (Lay §6.1)", html: "<p>Un vector es <b>unitario</b> si $\\|u\\|=1$. Todo $v\\neq\\mathbf{0}$ tiene un vector unitario en su misma dirección: $\\hat v=\\dfrac{1}{\\|v\\|}v$ (normalizar). Los <b>vectores unitarios estándar</b> de $\\R^n$ son $e_1,\\dots,e_n$ (un 1 en la posición $i$, ceros en el resto).</p>" },
      { tipo: "definicion", titulo: "Distancia", html: "<p>La <b>distancia</b> entre dos vectores es $d(u,v)=\\|u-v\\|$.</p>" },
    ],
    ejemplos: [
      { titulo: "¿Es combinación lineal?", enunciado: "¿Es $w=\\langle 3,1\\rangle$ combinación lineal de $u=\\langle1,0\\rangle$ y $v=\\langle1,2\\rangle$?", desarrollo: [ "Planteamos $c_1\\langle1,0\\rangle+c_2\\langle1,2\\rangle=\\langle3,1\\rangle$.", "Por componentes: $c_1+c_2=3$ y $2c_2=1\\Rightarrow c_2=\\tfrac12$.", "Luego $c_1=3-\\tfrac12=\\tfrac52$. El sistema es consistente." ], respuesta: "Sí: $\\langle3,1\\rangle=\\tfrac52\\langle1,0\\rangle+\\tfrac12\\langle1,2\\rangle$." },
      { titulo: "Producto punto directo", enunciado: "Calcule $u\\cdot v$ para $u=\\langle1,2,3\\rangle$, $v=\\langle-3,5,2\\rangle$.", desarrollo: [ "$u\\cdot v=(1)(-3)+(2)(5)+(3)(2)$.", "$=-3+10+6$." ], respuesta: "$u\\cdot v=13$." },
      { titulo: "Normalizar", enunciado: "Normalice $v=\\langle2,-1,3\\rangle$.", desarrollo: [ "$\\|v\\|=\\sqrt{4+1+9}=\\sqrt{14}$.", "$\\hat v=\\dfrac{1}{\\sqrt{14}}\\langle2,-1,3\\rangle$." ], respuesta: "$\\hat v=\\left\\langle\\dfrac{2}{\\sqrt{14}},\\dfrac{-1}{\\sqrt{14}},\\dfrac{3}{\\sqrt{14}}\\right\\rangle$ (longitud 1)." },
      { titulo: "Distancia", enunciado: "Encuentre la distancia entre $u=\\langle2,1,-1\\rangle$ y $v=\\langle0,2,-2\\rangle$.", desarrollo: [ "$u-v=\\langle2,-1,1\\rangle$.", "$d(u,v)=\\|u-v\\|=\\sqrt{4+1+1}=\\sqrt6$." ], respuesta: "$d(u,v)=\\sqrt6$." },
    ],
    ejercicios: [
      { titulo: "Conjunto generado en el plano", dificultad: "basico", enunciado: "¿Pertenece $\\langle4,5\\rangle$ a $\\gen\\{\\langle1,1\\rangle,\\langle2,1\\rangle\\}$?", pista: "Resuelva $c_1\\langle1,1\\rangle+c_2\\langle2,1\\rangle=\\langle4,5\\rangle$.", desarrollo: [ "Sistema: $c_1+2c_2=4$ y $c_1+c_2=5$.", "Restando: $c_2=-1$, entonces $c_1=6$.", "El sistema es consistente, luego pertenece." ], respuesta: "Sí: $\\langle4,5\\rangle=6\\langle1,1\\rangle-\\langle2,1\\rangle$." },
      { titulo: "Producto punto y norma", dificultad: "basico", enunciado: "Para $u=\\langle3,-1,2\\rangle$, calcule $u\\cdot u$, $\\|u\\|$ y el unitario $\\hat u$.", pista: "$u\\cdot u=\\|u\\|^2$.", desarrollo: [ "$u\\cdot u=9+1+4=14$.", "$\\|u\\|=\\sqrt{14}$.", "$\\hat u=\\frac{1}{\\sqrt{14}}\\langle3,-1,2\\rangle$." ], respuesta: "$u\\cdot u=14$, $\\|u\\|=\\sqrt{14}$, $\\hat u=\\frac{1}{\\sqrt{14}}\\langle3,-1,2\\rangle$." },
      { titulo: "Combinación en R³", dificultad: "intermedio", enunciado: "Determine si $\\langle1,2,3\\rangle$ es combinación lineal de $\\langle1,0,0\\rangle,\\langle0,1,0\\rangle,\\langle0,0,1\\rangle$.", pista: "Son los vectores unitarios estándar.", desarrollo: [ "Buscamos $c_1e_1+c_2e_2+c_3e_3=\\langle c_1,c_2,c_3\\rangle=\\langle1,2,3\\rangle$.", "De inmediato $c_1=1,c_2=2,c_3=3$." ], respuesta: "Sí, de forma única: $1e_1+2e_2+3e_3$." },
      { titulo: "Distancia entre puntos", dificultad: "intermedio", enunciado: "Calcule la distancia entre $P(1,1,1)$ y $Q(3,0,-1)$.", pista: "Use $\\|Q-P\\|$.", desarrollo: [ "$Q-P=\\langle2,-1,-2\\rangle$.", "$\\|Q-P\\|=\\sqrt{4+1+4}=3$." ], respuesta: "$d(P,Q)=3$." },
    ],
    erroresComunes: [
      "Multiplicar vectores componente a componente y llamarlo 'producto punto'.",
      "Confundir $\\|v\\|$ (escalar) con el vector $\\hat v$ (normalizado).",
      "Olvidar elevar al cuadrado antes de sumar en la norma.",
      "Creer que un sistema inconsistente igual da combinación lineal (si no hay solución, no lo es).",
    ],
    checklist: [
      "Planteo y resuelvo si $v$ es combinación lineal de un conjunto dado.",
      "Describo geométricamente el conjunto generado por 1 o 2 vectores.",
      "Calculo producto punto y aplico sus propiedades.",
      "Calculo normas, normalizo vectores y calculo distancias.",
    ],
    autoevaluacion: [
      { pregunta: "$\\langle2,-2,0\\rangle\\cdot\\langle1,3,-1\\rangle$ es:", opciones: [ "$-4$", "$4$", "$-8$", "$2$" ], correcta: 0, explicacion: "$(2)(1)+(-2)(3)+(0)(-1)=2-6+0=-4$." },
      { pregunta: "La norma de $\\langle1,2,2\\rangle$ es:", opciones: [ "$3$", "$\\sqrt5$", "$5$", "$9$" ], correcta: 0, explicacion: "$\\sqrt{1+4+4}=\\sqrt9=3$." },
      { pregunta: "Dos vectores $u,v$ no paralelos en $\\R^3$ generan:", opciones: [ "un plano por el origen", "todo $\\R^3$", "una recta", "solo el vector cero" ], correcta: 0, explicacion: "Sus combinaciones recubren un plano por el origen." },
    ],
    referencias: [ { titulo: "Clase 02 — Combinaciones lineales y producto punto (PDF)", ruta: "recursos/clases/clase-02.pdf" }, { titulo: "Apunte Clase 2 (PDF)", ruta: "recursos/apuntes/apunte-clase-02.pdf" } ],
  });
})();
