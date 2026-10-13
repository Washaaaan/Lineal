/* Módulo 5 · Sección 1 — Espacios y subespacios vectoriales */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "m05_s01", modulo: 5, moduloNombre: "Módulo 5 · Espacios vectoriales", orden: 1,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "Espacios y subespacios vectoriales",
    objetivo: "Reconocer la estructura de espacio vectorial, comprobar si un subconjunto es subespacio y describir subespacios generados por un conjunto de vectores.",
    fuente: "Clase 22 · Lay §2.8–2.9 y §4.1 · Poole §3.1–3.2",
    prerrequisitos: ["Vectores en R^n", "Combinaciones lineales", "Sistemas homogéneos"],
    teoria: [
      { tipo: "texto", html: "<p>Ya vimos que los vectores de $\\R^n$ se pueden sumar y multiplicar por escalares, y que las matrices también. En esta sección buscamos qué otros objetos comparten esa misma estructura y cuánta de la geometría de $\\R^n$ se puede reproducir en ellos.</p>" },
      { tipo: "definicion", titulo: "Espacio vectorial", html: "<p>Un <b>espacio vectorial</b> es un conjunto $V$ de objetos (llamados vectores) con dos operaciones, suma y multiplicación por escalar, que satisfacen:</p><ol><li>Si $u,v\\in V$ entonces $u+v\\in V$.</li><li>$u+v=v+u$.</li><li>$(u+v)+w=u+(v+w)$.</li><li>Existe $0\\in V$ con $u+0=u$.</li><li>Para cada $u$ existe $-u\\in V$ con $u+(-u)=0$.</li><li>Si $c\\in\\R$ y $u\\in V$ entonces $cu\\in V$.</li><li>$c(u+v)=cu+cv$.</li><li>$(c+d)u=cu+du$.</li><li>$c(du)=(cd)u$.</li><li>$1u=u$.</li></ol>" },
      { tipo: "nota", titulo: "Ejemplos y contraejemplos (Lay §4.1)", html: "<p>Son espacios vectoriales: $\\R^n$; el espacio $P_n$ de los polinomios de grado <b>a lo más</b> $n$; el espacio $M_{m\\times n}(\\R)$ de matrices $m\\times n$; el espacio de todas las funciones $f:\\R\\to\\R$; y el espacio de las sucesiones doblemente infinitas $\\{y_k\\}$.</p><p><b>No</b> son espacios vectoriales: los polinomios de grado <b>exactamente</b> $n$ (la suma puede bajar el grado), y el conjunto de todas las matrices reales de tamaños variables (no siempre se puede sumar).</p>" },
      { tipo: "teorema", titulo: "Propiedades básicas", html: "<p>Para cada $u\\in V$ y cada escalar $c$:</p><ul><li>$0u=0$</li><li>$c0=0$</li><li>$-u=(-1)u$</li></ul>" },
      { tipo: "definicion", titulo: "Subespacio", html: "<p>Un <b>subespacio</b> de un espacio vectorial $V$ es un subconjunto $H\\subseteq V$ que, con las mismas operaciones, es a su vez un espacio vectorial. Basta comprobar las tres condiciones:</p><ol><li>El vector cero de $V$ está en $H$.</li><li><b>Cerrado bajo la suma:</b> si $u,v\\in H$, entonces $u+v\\in H$.</li><li><b>Cerrado bajo el escalar:</b> si $u\\in H$ y $c\\in\\R$, entonces $cu\\in H$.</li></ol>" },
      { tipo: "nota", titulo: "Subespacios típicos (Lay §4.1)", html: "<p>En todo espacio vectorial $V$, los conjuntos $\\{0\\}$ y $V$ son subespacios (los llamados <i>triviales</i>). En $\\R^3$ los subespacios son: el origen, las rectas por el origen y los planos por el origen. Una recta o un plano que <b>no</b> pasa por el origen nunca es subespacio, porque no contiene al vector cero.</p>" },
      { tipo: "definicion", titulo: "Espacio generado", html: "<p>Si $v_1,\\dots,v_p\\in V$, el <b>espacio generado</b> por ellos es</p>$$\\gen\\{v_1,\\dots,v_p\\}=\\{c_1v_1+\\cdots+c_pv_p : c_1,\\dots,c_p\\in\\R\\}.$$<p>Es el conjunto de todas las combinaciones lineales de esos vectores.</p>" },
      { tipo: "teorema", titulo: "El generado es un subespacio", html: "<p>Si $v_1,\\dots,v_p$ están en un espacio vectorial $V$, entonces $\\gen\\{v_1,\\dots,v_p\\}$ es un subespacio de $V$.</p>" },
      { tipo: "grafico", spec: { tipo: "vectores3d", titulo: "El plano $2x-y+3z=0$ es un subespacio de $\\R^3$", vectores: [ { x: 3, y: 6, z: 0, x0: 0, y0: 0, z0: 0, label: "v", color: "#1e5eff" }, { x: -1, y: 0, z: 1, x0: 0, y0: 0, z0: 0, label: "w", color: "#00b894" } ], planos: [ { a: 2, b: -1, c: 3, d: 0, color: "#8e44ad", label: "2x-y+3z=0" } ], range: { x: [-6, 6], y: [-6, 6], z: [-6, 6] } } },
    ],
    ejemplos: [
      { titulo: "Verificar un subespacio sencillo", enunciado: "<p>Muestre que $H=\\left\\{\\begin{bmatrix}s\\\\t\\\\0\\end{bmatrix} : s,t\\in\\R\\right\\}$ es un subespacio de $\\R^3$.</p>", desarrollo: [ "El vector cero: tomando $s=t=0$ queda $\\begin{bmatrix}0\\\\0\\\\0\\end{bmatrix}\\in H$.", "Cerrado bajo suma: $\\begin{bmatrix}s_1\\\\t_1\\\\0\\end{bmatrix}+\\begin{bmatrix}s_2\\\\t_2\\\\0\\end{bmatrix}=\\begin{bmatrix}s_1+s_2\\\\t_1+t_2\\\\0\\end{bmatrix}\\in H$.", "Cerrado bajo escalar: $c\\begin{bmatrix}s\\\\t\\\\0\\end{bmatrix}=\\begin{bmatrix}cs\\\\ct\\\\0\\end{bmatrix}\\in H$.", "Se cumplen las tres condiciones, luego $H$ es subespacio (es el plano $XY$)." ], respuesta: "$H$ es un subespacio de $\\R^3$." },
      { titulo: "Plano que no pasa por el origen", enunciado: "<p>¿Es el plano $H=\\{(x,y,z): 2x-y+3z=6\\}$ un subespacio de $\\R^3$?</p>", desarrollo: [ "Evaluamos el vector cero: $2(0)-0+3(0)=0\\neq 6$.", "El vector cero no pertenece a $H$.", "Por lo tanto $H$ no es subespacio (basta que falle una condición)." ], respuesta: "No, porque $0\\notin H$." },
      { titulo: "Subespacio descrito por una fórmula", enunciado: "<p>Sea $H$ el conjunto de vectores de la forma $(a-3b,\\; b-a,\\; a,\\; b)$ con $a,b\\in\\R$. Demuestre que $H$ es un subespacio de $\\R^4$.</p>", desarrollo: [ "Reescribimos $H$ como un generado: $(a-3b,\\,b-a,\\,a,\\,b)=a(1,-1,1,0)+b(-3,1,0,1)$.", "Así $H=\\gen\\{(1,-1,1,0),\\,(-3,1,0,1)\\}$.", "El cero se obtiene con $a=b=0$.", "Como todo generado es un subespacio, $H$ es subespacio de $\\R^4$." ], respuesta: "$H=\\gen\\{(1,-1,1,0),(-3,1,0,1)\\}$, luego es subespacio de $\\R^4$." },
    ],
    ejercicios: [
      { titulo: "¿Es un subespacio?", dificultad: "basico", enunciado: "<p>Determine si $W=\\{(x,y)\\in\\R^2 : x\\ge 0\\}$ es un subespacio de $\\R^2$.</p>", pista: "Pruebe la cerradura bajo escalar con un número negativo.", desarrollo: [ "$(1,1)\\in W$ porque $1\\ge 0$.", "Tomando $c=-1$: $c(1,1)=(-1,-1)$, y $-1\\not\\ge 0$, luego $(-1,-1)\\notin W$.", "No es cerrado bajo la multiplicación por escalares." ], respuesta: "No, $W$ no es subespacio." },
      { titulo: "Subespacio de R^3", dificultad: "basico", enunciado: "<p>Compruebe que $H=\\{(a,0,c): a,c\\in\\R\\}$ es un subespacio de $\\R^3$.</p>", pista: "Verifique las tres condiciones de subespacio.", desarrollo: [ "$(0,0,0)\\in H$ tomando $a=c=0$.", "$(a_1,0,c_1)+(a_2,0,c_2)=(a_1+a_2,0,c_1+c_2)\\in H$.", "$k(a,0,c)=(ka,0,kc)\\in H$.", "Las tres condiciones se cumplen." ], respuesta: "$H$ es subespacio de $\\R^3$ (es el plano $x$-$z$)." },
      { titulo: "¿Pertenece al generado?", dificultad: "intermedio", enunciado: "<p>Sean $p(t)=t^2-3t$ y $q(t)=t+1$. ¿Está $s(t)=t^2+4t+1$ en $\\gen\\{p,q\\}$?</p>", pista: "Plantee $c_1 p+c_2 q=s$ e iguale coeficientes.", desarrollo: [ "$c_1(t^2-3t)+c_2(t+1)=c_1t^2+(-3c_1+c_2)t+c_2$.", "Comparando: $c_1=1$ (coef. de $t^2$), $c_2=1$ (constante).", "Verificación en $t$: $-3(1)+1=-2$, pero se necesita $4$." ], respuesta: "No, porque $-2\\neq 4$: $s\\notin\\gen\\{p,q\\}$." },
      { titulo: "Recta por el origen", dificultad: "avanzado", enunciado: "<p>Sea $L=\\{(x,y,z): x=2t,\\; y=-t,\\; z=3t,\\; t\\in\\R\\}$. Muestre que $L$ es un subespacio de $\\R^3$ y expréselo como un generado.</p>", pista: "Note que $L$ es el conjunto de múltiplos de un vector.", desarrollo: [ "$(x,y,z)=t(2,-1,3)$, así $L=\\gen\\{(2,-1,3)\\}$.", "El cero: $t=0$ da $(0,0,0)\\in L$.", "Suma: $t_1(2,-1,3)+t_2(2,-1,3)=(t_1+t_2)(2,-1,3)\\in L$.", "Escalar: $c\\,t(2,-1,3)=(ct)(2,-1,3)\\in L$." ], respuesta: "$L=\\gen\\{(2,-1,3)\\}$ es un subespacio (recta por el origen)." },
    ],
    erroresComunes: [
      "Aceptar como subespacio un plano o recta que no pasa por el origen (falla la primera condición).",
      "Verificar solo la cerradura bajo la suma y olvidar el vector cero o el escalar.",
      "Confundir polinomios de grado a lo más $n$ (sí son espacio vectorial) con los de grado exactamente $n$ (no lo son).",
      "Creer que cualquier subconjunto de un espacio vectorial es subespacio.",
      "Sumar vectores de tamaños distintos como si el conjunto fuera un espacio vectorial.",
    ],
    checklist: [
      "Conozco las diez propiedades que definen un espacio vectorial.",
      "Verifico las tres condiciones para probar que un subconjunto es subespacio.",
      "Reconozco subespacios en $\\R^2$ y $\\R^3$ (origen, rectas y planos por el origen).",
      "Escribo un subespacio dado por fórmulas como un espacio generado.",
      "Distingo ejemplos válidos de no-ejemplos de espacios vectoriales.",
    ],
    autoevaluacion: [
      { pregunta: "¿Cuál de los siguientes subconjuntos de $\\R^2$ NO es un subespacio?", opciones: [ "$\\{(x,y): y=3x\\}$", "$\\{(x,y): y=x+1\\}$", "$\\{(x,y): x=0\\}$", "$\\{(0,0)\\}$" ], correcta: 1, explicacion: "$y=x+1$ no contiene al origen ($0\\neq 1$), por lo que no es subespacio." },
      { pregunta: "¿Qué debe contener siempre todo subespacio?", opciones: [ "Al menos un vector no nulo", "El vector cero de $V$", "Una base de dos vectores", "Todos los vectores de $V$" ], correcta: 1, explicacion: "La primera condición de subespacio exige que $0\\in H$." },
      { pregunta: "El conjunto de polinomios de grado exactamente 2 en $P_2$ es:", opciones: [ "Un subespacio de $P_2$", "Un espacio vectorial", "No es subespacio porque la suma puede tener grado menor", "Cerrado bajo escalares pero no bajo suma" ], correcta: 2, explicacion: "Por ejemplo $(t^2)+( -t^2)=0$ sale del conjunto, así que no es subespacio." },
    ],
    referencias: [ { titulo: "Clase 22 — Espacios y subespacios vectoriales (PDF)", ruta: "recursos/clases/clase-22.pdf" } ],
  });
})();
