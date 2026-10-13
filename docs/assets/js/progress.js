(function () {
  "use strict";
  const KEY = "mat1203.progreso.v1";
  let data = { vistos: {}, ejercicios: {}, quiz: {} };
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) data = Object.assign(data, JSON.parse(raw));
  } catch (e) { /* file:// sin storage */ }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {}
  }

  const Progress = {
    get data() { return data; },
    marcarVisto(id) {
      if (!data.vistos[id]) { data.vistos[id] = 1; save(); }
    },
    esVisto(id) { return !!data.vistos[id]; },
    marcarEjercicio(sec, idx, done) {
      const k = sec + ":" + idx;
      if (done) data.ejercicios[k] = 1; else delete data.ejercicios[k];
      save();
    },
    esEjercicio(sec, idx) { return !!data.ejercicios[sec + ":" + idx]; },
    contarEjercicios(sec) {
      let n = 0;
      for (const k in data.ejercicios) if (k.indexOf(sec + ":") === 0) n++;
      return n;
    },
    guardarQuiz(sec, score, total) {
      data.quiz[sec] = { score: score, total: total, t: Date.now() };
      save();
    },
    reset() { data = { vistos: {}, ejercicios: {}, quiz: {} }; save(); },
  };
  window.MAT1203 = window.MAT1203 || {};
  window.MAT1203.progress = Progress;
})();
