(function () {
  "use strict";
  const MAT1203 = (window.MAT1203 = window.MAT1203 || {});
  MAT1203.modulos = MAT1203.modulos || {};
  MAT1203.secciones = MAT1203.secciones || {};
  MAT1203.orden = MAT1203.orden || [];

  MAT1203.modulo = function (m) {
    if (!MAT1203.modulos[m.id]) MAT1203.modulos[m.id] = m;
  };

  MAT1203.register = function (s) {
    if (!s || !s.id) throw new Error("Sección sin id");
    if (MAT1203.secciones[s.id]) {
      console.warn("Sección duplicada: " + s.id);
    }
    MAT1203.secciones[s.id] = s;
    if (MAT1203.orden.indexOf(s.id) === -1) MAT1203.orden.push(s.id);
  };

  MAT1203.ordenar = function () {
    // ordena secciones según modulos/indice si están definidos
    MAT1203.orden.sort(function (a, b) {
      const A = MAT1203.secciones[a], B = MAT1203.secciones[b];
      if (!A || !B) return 0;
      if (A.modulo !== B.modulo) return A.modulo - B.modulo;
      return (A.orden || 0) - (B.orden || 0);
    });
  };
})();
