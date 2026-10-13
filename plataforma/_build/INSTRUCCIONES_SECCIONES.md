# Instrucciones para generar secciones de MAT1203 (plataforma local)

Eres redactor de contenido de una plataforma web local de Álgebra Lineal (curso MAT1203, PUC).
Cada sección es un **archivo JS** que registra un objeto de contenido. Debe ser **válido** y pasar `node --check`.

## Reglas críticas
1. El archivo tiene EXACTAMENTE esta forma (wrapper IIFE):
```js
/* Módulo X · Sección N — Título */
(function () {
  var M = window.MAT1203;
  M.register({
    id: "mXX_sYY", modulo: X, moduloNombre: "Módulo X · <nombre del módulo>", orden: N,
    materia: "MAT1203 · Álgebra Lineal",
    titulo: "<título claro del objetivo>",
    objetivo: "<qué sabrá hacer el alumno al terminar>",
    fuente: "Clase NN · Apunte ... · Lay §... · Poole §...",
    prerrequisitos: ["...", "..."],
    teoria: [ ...bloques... ],
    ejemplos: [ ... ],
    ejercicios: [ ... ],
    erroresComunes: [ "...", "..." ],
    checklist: [ "...", "..." ],
    autoevaluacion: [ ... ],
    referencias: [ { titulo: "...", ruta: "../../Clases/Clases/<archivo>.pdf" } ]
  });
})();
```
2. **LaTeX dentro de strings JS**: la barra invertida se escribe DOBLE. Ej: `$\\theta$`, `\\langle`, `\\R` (macro de reales), `\\|v\\|`, `\\begin{bmatrix}...\\end{bmatrix}`, `\\frac{a}{b}`.
   - Delimitadores: `$...$` inline, `$$...$$` display. NO uses `\(` `\)`.
   - Usa la macro `\\R` para ℝ, `\\C`, `\\N`, `\\Z`, `\\gen` para "gen", `\\rank`, `\\nul`, `\\col`.
3. NO comentes el código. NO uses ES6+ (usa `var`, funciones `function(){}`), para compatibilidad.
4. Todo en **español de Chile**, tono didáctico. Basarse en las CLASES (fuente principal), enriquecer con NOTAS de los libros (bloques `nota`) y apuntes.
5. `node --check` debe pasar. Verifícalo antes de terminar.

## Bloque de teoría
Cada elemento de `teoria` es uno de:
- `{ tipo:"texto", html:"<p>...</p>" }`
- `{ tipo:"definicion", titulo:"...", html:"<p>...</p>$$...$$" }`
- `{ tipo:"teorema", titulo:"...", html:"..." }`
- `{ tipo:"nota", titulo:"... (Lay §..)", html:"..." }`  ← explicación adicional del libro/apunte
- `{ tipo:"grafico", spec:{...} }`
- `{ tipo:"html", html:"<div class='callout'>...</div>" }`

## Ejemplo guiado (respuesta visible)
```js
{ titulo:"...", enunciado:"<p>...</p>",
  desarrollo:[ "Paso 1...", "Paso 2...", "Paso 3..." ],
  respuesta:"$...$",
  grafico: { tipo:"...", ... }   // opcional
}
```

## Ejercicio (con botón revelar)
```js
{ titulo:"...", dificultad:"basico"|"intermedio"|"avanzado",
  enunciado:"<p>...</p>",
  pista:"...",
  desarrollo:[ "Paso 1...", "Paso 2..." ],
  respuesta:"$...$",
  grafico: { ... }   // opcional
}
```

## Autoevaluación (alternativas)
```js
{ pregunta:"...", opciones:["A","B","C","D"], correcta:1, explicacion:"..." }
```
`correcta` es el índice (0-based) de la opción correcta.

## Especificaciones de gráfico (usa solo estas)
- **vectores2d**: `{ tipo:"vectores2d", titulo:"", vectores:[{x,y,x0,y0,label,color,width}], segmentos:[{x0,y0,x1,y1,color,dash,label}], puntos:[{x,y,label}], rangeX:[a,b], rangeY:[a,b], ocultarLeyenda:true }`
- **vectores3d**: `{ tipo:"vectores3d", titulo:"", vectores:[{x,y,z,x0,y0,z0,label,color}], planos:[{a,b,c,d,r,color,label}], rectas:[{p:[x,y,z],d:[x,y,z],color,label}], puntos:[{x,y,z,label}], segmentos:[[[x,y,z],[x,y,z]]], range:{x:[a,b],y:[a,b],z:[a,b]}, ocultarLeyenda:true }`
- **plot2d**: `{ tipo:"plot2d", titulo:"", funciones:[{f:function(x){return x*x;},desde:-3,hasta:3,label:"",color:"#1e5eff"}], series:[{x:[..],y:[..],label:"",color:"",mode:"lines+markers"}], barras:[{x:[],y:[],label:""}], xlabel:"", ylabel:"" }`
- **transformacion2d**: `{ tipo:"transformacion2d", matriz:[[a,b],[c,d]], titulo:"" }`
- **tabla**: `{ tipo:"tabla", headers:["",""], rows:[["",""]] }`
Colores sugeridos: `#1e5eff`, `#00b894`, `#e17055`, `#8e44ad`, `#e6a817`.

## Calidad exigida por sección
- 1–2 definiciones + 1–2 teoremas + 1–2 notas de libro, con TeX correcto.
- 2–3 ejemplos guiados completos (pasos + respuesta).
- 4 ejercicios con dificultad variada, TODOS con desarrollo y respuesta correcta (verifica los números).
- 3–4 errores comunes; 4–6 ítems de checklist; 3 preguntas de autoevaluación.
- Al menos 1 gráfico pertinente (aunque no siempre es obligatorio).
- El `id`, `modulo`, `orden`, `moduloNombre` deben coincidir con lo indicado.

## Archivos de texto fuente (extraídos de los PDFs)
Ubicación: `plataforma\_build\texto\`.
- Clases: `clases__Clase NN <título>.txt`
- Apuntes: `apuntes__Clase-N <tema>.txt`
- Libro (soluciones): `libro_sol__Chp K.txt`
LÉELOS antes de redactar. Si un archivo no existe con ese nombre exacto, lista la carpeta y usa el más cercano.
