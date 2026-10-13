/* Módulo 3 · Sección 1 — Independencia y dependencia lineal */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m03_s01", modulo: 3, moduloNombre: "Módulo 3 · Independencia lineal y transformaciones", orden: 1,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Independencia y dependencia lineal",
    objetivo: "Decidir si un conjunto de vectores en $\\R^m$ es linealmente independiente o dependiente, usando el sistema homogéneo $Ax=0$ y la posición de los pivotes, e interpretar geométricamente el resultado.",
    fuente: "Clase 12 · Apunte Clase 11 (Independencia lineal) · Lay §1.7 · Poole §2.3",
    prerrequisitos: ["Vectores en $\\R^n$", "Combinación lineal", "Sistemas homogéneos $Ax=0$", "Forma escalonada y pivotes"],
    teoria: [
      { tipo: "texto", html: "<p>Ya sabemos resolver sistemas y describir su conjunto solución. Ahora preguntamos algo más fino sobre un conjunto de vectores: ¿<i>sobran</i> vectores o todos son necesarios? La respuesta se llama <b>independencia lineal</b> y es la base de las bases, la dimensión, el rango y las transformaciones lineales.</p>" },
      { tipo: "definicion", titulo: "Conjunto linealmente independiente / dependiente", html: "<p>Un conjunto de vectores $\\{v_1,\\dots,v_n\\}$ en $\\R^m$ es <b>linealmente independiente (LI)</b> si la ecuación</p>$$c_1v_1+c_2v_2+\\cdots+c_nv_n=\\mathbf{0}$$<p>tiene <b>únicamente la solución trivial</b> $c_1=c_2=\\cdots=c_n=0$.</p><p>Si existe una solución <b>no trivial</b> (algún $c_i\\neq 0$), el conjunto es <b>linealmente dependiente (LD)</b>.</p>" },
      { tipo: "nota", titulo: "¿Por qué mirar el sistema homogéneo? (Lay §1.7)", html: "<p>La ecuación vectorial $c_1v_1+\\cdots+c_nv_n=\\mathbf{0}$ es exactamente $Ax=\\mathbf{0}$ con columnas $v_1,\\dots,v_n$. Por el teorema de existencia, $Ax=\\mathbf{0}$ tiene solución no trivial <b>si y solo si</b> hay al menos una variable libre, es decir, <b>alguna columna sin pivote</b>. Así, LI $\\Leftrightarrow$ todas las columnas son pivote.</p>" },
      { tipo: "teorema", titulo: "Caracterización con la matriz de columnas", html: "<p>El conjunto $\\{v_1,\\dots,v_n\\}$ es linealmente independiente <b>si y solo si</b> el sistema homogéneo $\\begin{bmatrix}v_1&\\cdots&v_n\\end{bmatrix}x=\\mathbf{0}$ tiene únicamente la solución trivial. Equivalentemente, <b>si y solo si todas las columnas de $A=\\begin{bmatrix}v_1&\\cdots&v_n\\end{bmatrix}$ son columnas pivote</b>.</p>" },
      { tipo: "grafico", spec: { tipo: "vectores2d", titulo: "Dos vectores no paralelos (LI) y dos paralelos (LD)", vectores: [ { x: 2, y: 1, label: "v₁", color: "#1e5eff" }, { x: -1, y: 2, label: "v₂", color: "#00b894" }, { x: 2, y: 2, x0: 0, y0: 0, label: "w₁", color: "#8e44ad" }, { x: 4, y: 4, label: "w₂ = 2w₁", color: "#e17055" } ], rangeX: [-2, 5], rangeY: [-1, 5], ocultarLeyenda: false } },
      { tipo: "teorema", titulo: "Casos sencillos y acotaciones", html: "<ul><li>Dos vectores son <b>LI si y solo si ninguno es múltiplo del otro</b>.</li><li>Un conjunto que contiene el vector $\\mathbf{0}$ <b>siempre es LD</b>.</li><li>$\\{v_1,\\dots,v_n\\}$ es LI si y solo si $v_1\\neq\\mathbf{0}$ y ningún $v_k$ es combinación lineal de los anteriores.</li><li>Si un conjunto de vectores de $\\R^m$ tiene <b>más de $m$ vectores</b>, entonces es <b>LD</b> (hay más incógnitas que ecuaciones).</li></ul>" },
    ],
    ejemplos: [
      { titulo: "Dos vectores en $\\R^2$: ¿LI o LD?", enunciado: "<p>Determine si $v_1=\\begin{bmatrix}1\\\\2\\end{bmatrix}$ y $v_2=\\begin{bmatrix}3\\\\6\\end{bmatrix}$ son linealmente independientes.</p>", desarrollo: [ "Planteamos $c_1v_1+c_2v_2=\\mathbf{0}$ y miramos la matriz de columnas.", "Observamos que $v_2=3v_1$: los vectores son paralelos (múltiplos).", "Entonces $3v_1-v_2=\\mathbf{0}$ es una combinación no trivial, por lo que son LD." ], respuesta: "$\\{v_1,v_2\\}$ es linealmente dependiente, pues $v_2=3v_1$." },
      { titulo: "Conjunto de tres vectores en $\\R^3$", enunciado: "<p>Considere $v_1=\\begin{bmatrix}1\\\\-2\\\\3\\end{bmatrix}$, $v_2=\\begin{bmatrix}4\\\\1\\\\5\\end{bmatrix}$, $v_3=\\begin{bmatrix}7\\\\0\\\\4\\end{bmatrix}$. Determine si $\\{v_1,v_2,v_3\\}$ es LI.</p>", desarrollo: [ "Formamos la matriz ampliada $[v_1\\ v_2\\ v_3\\ \\mathbf{0}]$ y escalonamos:", "$$\\begin{bmatrix}1&4&7&0\\\\-2&1&0&0\\\\3&5&4&0\\end{bmatrix}\\sim\\begin{bmatrix}1&4&7&0\\\\0&9&14&0\\\\0&-7&-17&0\\end{bmatrix}$$", "Como las tres columnas quedan con pivote (ninguna variable libre), la única solución es la trivial.", "Por lo tanto ninguna columna es combinación de las otras." ], respuesta: "$\\{v_1,v_2,v_3\\}$ es linealmente independiente (tres pivotes)." },
      { titulo: "Columnas de una matriz $3\\times3$", enunciado: "<p>Determine si las columnas de $A=\\begin{bmatrix}1&4&2\\\\2&5&1\\\\3&6&0\\end{bmatrix}$ son linealmente independientes.</p>", desarrollo: [ "Estudiamos $Ax=\\mathbf{0}$ con la matriz ampliada.", "$$\\begin{bmatrix}1&4&2&0\\\\2&5&1&0\\\\3&6&0&0\\end{bmatrix}\\sim\\begin{bmatrix}1&0&-2&0\\\\0&1&1&0\\\\0&0&0&0\\end{bmatrix}$$", "La tercera columna no tiene pivote (variable libre), así que hay solución no trivial.", "De hecho se lee $x_1=2x_3,\\ x_2=-x_3$, o sea $a_3=2a_1-a_2$." ], respuesta: "Las columnas son linealmente dependientes: $a_3=2a_1-a_2$." },
    ],
    ejercicios: [
      { titulo: "Determinar LI o LD (I)", dificultad: "basico", enunciado: "<p>Determine si el conjunto $\\left\\{\\begin{bmatrix}-2\\\\4\\\\6\\\\10\\end{bmatrix},\\begin{bmatrix}3\\\\-6\\\\-9\\\\15\\end{bmatrix}\\right\\}$ es LI o LD.</p>", pista: "Dos vectores son LD solo si uno es múltiplo del otro. Compare las razones entre todas las componentes.", desarrollo: [ "Si existiera $c\\neq0$ con $v_2=c\\,v_1$, las dos primeras componentes darían $c=-\\tfrac32$.", "Pero la última componente pediría $15=c\\cdot10\\Rightarrow c=\\tfrac32$, que contradice $c=-\\tfrac32$.", "No existe tal $c$: no son múltiplos.", "Por lo tanto la única solución de $c_1v_1+c_2v_2=\\mathbf{0}$ es la trivial." ], respuesta: "Es linealmente independiente (no son múltiplos)." },
      { titulo: "Cuatro vectores en $\\R^3$", dificultad: "basico", enunciado: "<p>¿Es LI el conjunto $\\left\\{\\begin{bmatrix}1\\\\7\\\\6\\end{bmatrix},\\begin{bmatrix}2\\\\0\\\\9\\end{bmatrix},\\begin{bmatrix}3\\\\1\\\\5\\end{bmatrix},\\begin{bmatrix}4\\\\1\\\\8\\end{bmatrix}\\right\\}$?</p>", pista: "Cuente cuántos vectores hay y la dimensión del espacio.", desarrollo: [ "Hay 4 vectores en $\\R^3$, es decir, más vectores que componentes.", "El sistema homogéneo asociado tiene 3 ecuaciones y 4 incógnitas, por lo que necesariamente hay al menos una variable libre.", "Entonces existe solución no trivial." ], respuesta: "Es linealmente dependiente (4 vectores en $\\R^3$)." },
      { titulo: "Con múltiplos evidentes", dificultad: "basico", enunciado: "<p>Determine si $\\left\\{\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix},\\begin{bmatrix}2\\\\4\\\\6\\end{bmatrix},\\begin{bmatrix}-1\\\\-2\\\\3\\end{bmatrix}\\right\\}$ es LI o LD.</p>", pista: "Compare el primero y el segundo vector.", desarrollo: [ "El segundo vector es $2$ veces el primero: $v_2=2v_1$.", "Luego $2v_1-v_2+0\\cdot v_3=\\mathbf{0}$ es una combinación no trivial." ], respuesta: "Es linealmente dependiente ($v_2=2v_1$)." },
      { titulo: "Presencia del vector nulo", dificultad: "intermedio", enunciado: "<p>Considere $\\left\\{\\begin{bmatrix}2\\\\3\\\\5\\end{bmatrix},\\begin{bmatrix}0\\\\0\\\\0\\end{bmatrix},\\begin{bmatrix}1\\\\1\\\\8\\end{bmatrix}\\right\\}$. ¿Es LI o LD? Justifique sin calcular.</p>", pista: "Recuerde qué pasa cuando el conjunto contiene $\\mathbf{0}$.", desarrollo: [ "El vector $\\mathbf{0}$ está en el conjunto.", "Basta tomar el escalar $1$ para $\\mathbf{0}$ y $0$ para los demás: $0\\cdot v_1+1\\cdot\\mathbf{0}+0\\cdot v_3=\\mathbf{0}$.", "Es una combinación no trivial." ], respuesta: "Es linealmente dependiente: todo conjunto que contiene $\\mathbf{0}$ es LD." },
    ],
    erroresComunes: [
      "Concluir que dos vectores son LD mirando solo las primeras componentes: hay que verificar que <b>todas</b> mantengan la misma razón.",
      "Olvidar que un conjunto con el vector $\\mathbf{0}$ es <b>siempre</b> LD.",
      "Confundir «solución no trivial de $Ax=0$» con «sistema inconsistente»: son ideas distintas.",
      "Creer que «más vectores que filas» se decide resolviendo todo: basta el conteo ($n>m\\Rightarrow$ LD).",
    ],
    checklist: [
      "Sé enunciar la definición de conjunto LI y de conjunto LD.",
      "Puedo traducir $c_1v_1+\\cdots+c_nv_n=\\mathbf{0}$ al sistema homogéneo $Ax=\\mathbf{0}$.",
      "Sé decidir LI/LD escalonando y observando si todas las columnas tienen pivote.",
      "Reconozco los casos rápidos: múltiplos, vector $\\mathbf{0}$ y $n>m$.",
      "Puedo explicar geométricamente por qué dos vectores paralelos son LD.",
    ],
    autoevaluacion: [
      { pregunta: "El conjunto $\\{v_1,v_2\\}$ en $\\R^n$ es linealmente dependiente si y solo si:", opciones: [ "$v_2=k\\,v_1$ para algún escalar $k$", "Ambos vectores son no nulos", "Son perpendiculares", "Tienen distinta norma" ], correcta: 0, explicacion: "Dos vectores son LD exactamente cuando uno es múltiplo del otro." },
      { pregunta: "Si $A$ es una matriz $3\\times5$ con columnas $v_1,\\dots,v_5$, entonces:", opciones: [ "Las columnas son LD", "Las columnas son LI", "Depende de $A$", "El sistema $Ax=0$ no tiene solución" ], correcta: 0, explicacion: "Hay 5 vectores en $\\R^3$ (más que componentes), así que el conjunto es LD." },
      { pregunta: "Para decidir si $\\{v_1,v_2,v_3\\}$ es LI en $\\R^3$, la forma escalonada de $[v_1\\ v_2\\ v_3\\ \\mathbf{0}]$ tiene 3 pivotes. Entonces:", opciones: [ "Es LI", "Es LD", "Hay infinitas soluciones", "Falta información" ], correcta: 0, explicacion: "3 pivotes implican que no hay variables libres; la solución de $Ax=0$ es la trivial, así que es LI." },
    ],
    referencias: [
      { titulo: "Clase 12 — Independencia lineal (PDF)", ruta: "recursos/clases/clase-12.pdf" },
      { titulo: "Apunte Clase 11 — Independencia lineal (PDF)", ruta: "recursos/apuntes/apunte-clase-11.pdf" },
    ],
  });
})();
