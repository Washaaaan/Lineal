const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");

global.window = {};
global.localStorage = { getItem() { return null; }, setItem() {}, removeItem() {} };
global.document = { addEventListener() {} };

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  try {
    eval(code);
  } catch (e) {
    console.log("ERROR cargando " + rel + ": " + e.message);
    process.exitCode = 1;
  }
}

load("assets/js/content.js");
load("assets/js/progress.js");

const files = [];
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith(".js")) files.push(path.relative(ROOT, p).replace(/\\/g, "/"));
  }
}
walk(path.join(ROOT, "content"));
files.sort();
for (const f of files) load(f);

const M = global.window.MAT1203;
M.ordenar();
const ord = M.orden;
let problemas = 0;
const ids = new Set();
for (const id of ord) {
  const s = M.secciones[id];
  if (ids.has(id)) { console.log("DUPLICADO " + id); problemas++; }
  ids.add(id);
  if (!s.titulo) { console.log("SIN titulo: " + id); problemas++; }
  if (!s.objetivo) { console.log("SIN objetivo: " + id); problemas++; }
  if (!s.materia || s.materia.indexOf("MAT1203") === -1) { console.log("SIN materia: " + id); problemas++; }
  const ne = (s.ejercicios || []).length;
  const nex = (s.ejemplos || []).length;
  if (ne < 1) { console.log("SIN ejercicios: " + id); problemas++; }
  if (nex < 1) { console.log("SIN ejemplos: " + id); problemas++; }
}
console.log("Archivos JS cargados: " + files.length);
console.log("Secciones registradas: " + ord.length);
console.log("Módulos: " + Object.keys(M.modulos).sort((a, b) => a - b).join(","));
let totEj = 0, totEx = 0, totQ = 0;
for (const id of ord) {
  totEj += (M.secciones[id].ejercicios || []).length;
  totEx += (M.secciones[id].ejemplos || []).length;
  totQ += (M.secciones[id].autoevaluacion || []).length;
}
console.log("Total ejemplos: " + totEx + " | Total ejercicios: " + totEj + " | Preguntas autoeval: " + totQ);
console.log(problemas === 0 ? "RESULTADO: OK sin problemas" : "RESULTADO: " + problemas + " problemas");
