(function () {
  "use strict";

  const PALETA = ["#1e5eff", "#00b894", "#e17055", "#8e44ad", "#e6a817", "#0b7a75", "#d64545", "#2d98da"];

  function tema() {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    return {
      dark: dark,
      paper: "rgba(0,0,0,0)",
      font: dark ? "#e7edf6" : "#1c2430",
      grid: dark ? "#27374b" : "#dde5f0",
      zero: dark ? "#5b6b82" : "#9aa8bd",
    };
  }

  function color(c, i) { return c || PALETA[i % PALETA.length]; }

  function layoutBase(t, titulo, extra) {
    const l = {
      paper_bgcolor: t.paper,
      plot_bgcolor: t.paper,
      font: { color: t.font, family: "Segoe UI, system-ui, sans-serif", size: 12 },
      margin: { l: 40, r: 20, t: titulo ? 40 : 20, b: 40 },
      showlegend: true,
      legend: { orientation: "h", y: 1.02, x: 0 },
    };
    if (titulo) l.title = { text: titulo, font: { size: 14 } };
    return Object.assign(l, extra || {});
  }

  function config() {
    return { responsive: true, displaylogo: false, locale: "es", modeBarButtonsToRemove: ["lasso2d", "select2d"] };
  }

  function ejes2D(t, ref) {
    return {
      xaxis: Object.assign({ zeroline: true, zerolinecolor: t.zero, zerolinewidth: 1.5, gridcolor: t.grid, scaleanchor: ref ? "y" : undefined, scaleratio: 1 }, ref && ref.rangeX ? { range: ref.rangeX } : {}),
      yaxis: Object.assign({ zeroline: true, zerolinecolor: t.zero, zerolinewidth: 1.5, gridcolor: t.grid }, ref && ref.rangeY ? { range: ref.rangeY } : {}),
    };
  }

  function escena3D(t, range) {
    const ax = { backgroundcolor: t.paper, gridcolor: t.grid, zerolinecolor: t.zero, showbackground: true };
    const s = {
      xaxis: Object.assign({}, ax),
      yaxis: Object.assign({}, ax),
      zaxis: Object.assign({}, ax),
      aspectmode: "cube",
      camera: { eye: { x: 1.6, y: 1.5, z: 1.1 } },
    };
    if (range) {
      if (range.x) s.xaxis.range = range.x;
      if (range.y) s.yaxis.range = range.y;
      if (range.z) s.zaxis.range = range.z;
    }
    return s;
  }

  /* ---------------- tipos ---------------- */

  function renderVectores2D(el, spec) {
    const t = tema();
    const traces = [];
    const anot = [];
    (spec.segmentos || []).forEach(function (s, i) {
      traces.push({ type: "scatter", mode: "lines", x: [s.x0, s.x1], y: [s.y0, s.y1], line: { color: color(s.color, i), width: s.width || 2.5, dash: s.dash || "solid" }, name: s.label || "", hoverinfo: "skip" });
    });
    (spec.vectores || []).forEach(function (v, i) {
      const col = color(v.color, i);
      traces.push({ type: "scatter", mode: "lines+markers", x: [v.x0 || 0, v.x], y: [v.y0 || 0, v.y], line: { color: col, width: v.width || 3 }, marker: { size: 7, color: col }, name: v.label || ("v" + (i + 1)), hovertemplate: (v.label || "") + "<br>(%{x}, %{y})<extra></extra>" });
      const x0 = v.x0 || 0, y0 = v.y0 || 0;
      anot.push({ x: v.x, y: v.y, ax: x0, ay: y0, xref: "x", yref: "y", axref: "x", ayref: "y", showarrow: true, arrowhead: 3, arrowsize: 1.2, arrowwidth: v.width || 3, arrowcolor: col, text: "" });
      if (v.label) anot.push({ x: v.x, y: v.y, xref: "x", yref: "y", text: "<b>" + v.label + "</b>", showarrow: false, font: { color: col, size: 13 }, xshift: 12, yshift: 8, bgcolor: "rgba(0,0,0,0.01)" });
    });
    (spec.puntos || []).forEach(function (p, i) {
      traces.push({ type: "scatter", mode: "markers+text", x: [p.x], y: [p.y], text: [p.label || ""], textposition: "top right", marker: { size: 9, color: color(p.color, i + 4) }, name: p.label || "", showlegend: false });
    });
    const l = layoutBase(t, spec.titulo, Object.assign(ejes2D(t, spec), { annotations: anot, height: spec.height || 420 }));
    if (spec.rangeX) l.xaxis.range = spec.rangeX;
    if (spec.rangeY) l.yaxis.range = spec.rangeY;
    if (spec.ocultarLeyenda) l.showlegend = false;
    Plotly.newPlot(el, traces, l, config());
  }

  function trazaVector3D(x0, y0, z0, x, y, z, col, label) {
    return { type: "scatter3d", mode: "lines+markers", x: [x0, x], y: [y0, y], z: [z0, z], line: { color: col, width: 5 }, marker: { size: 4, color: [col, col] }, name: label || "", hovertemplate: (label || "") + "<br>(%{x}, %{y}, %{z})<extra></extra>" };
  }

  function renderVectores3D(el, spec) {
    const t = tema();
    const traces = [];
    (spec.planos || []).forEach(function (p, i) {
      const col = color(p.color, i + 2);
      const r = p.r || 5;
      const pts = planoPuntos(p.a, p.b, p.c, p.d, r);
      traces.push({ type: "surface", x: pts.x, y: pts.y, z: pts.z, opacity: p.opacity == null ? 0.45 : p.opacity, colorscale: [[0, col], [1, col]], showscale: false, name: p.label || ("plano " + String.fromCharCode(960 + i)), hoverinfo: "skip" });
    });
    (spec.rectas || []).forEach(function (r, i) {
      const col = color(r.color, i + 3);
      const u = norm(r.d), L = r.l || 4.5, s = r.p;
      traces.push({ type: "scatter3d", mode: "lines", x: [s[0] - u[0] * L, s[0] + u[0] * L], y: [s[1] - u[1] * L, s[1] + u[1] * L], z: [s[2] - u[2] * L, s[2] + u[2] * L], line: { color: col, width: 5, dash: r.dash || "solid" }, name: r.label || "recta" });
    });
    (spec.segmentos || []).forEach(function (s, i) {
      traces.push({ type: "scatter3d", mode: "lines", x: [s[0][0], s[1][0]], y: [s[0][1], s[1][1]], z: [s[0][2], s[1][2]], line: { color: color(s.color, i + 5), width: 4, dash: s.dash || "solid" }, name: s.label || "" });
    });
    (spec.vectores || []).forEach(function (v, i) {
      const col = color(v.color, i);
      traces.push(trazaVector3D(v.x0 || 0, v.y0 || 0, v.z0 || 0, v.x, v.y, v.z, col, v.label || ("v" + (i + 1))));
    });
    (spec.puntos || []).forEach(function (p, i) {
      traces.push({ type: "scatter3d", mode: "markers+text", x: [p.x], y: [p.y], z: [p.z], text: [p.label || ""], textposition: "top center", marker: { size: 5, color: color(p.color, i + 4) }, name: p.label || "", showlegend: false });
    });
    const l = layoutBase(t, spec.titulo, { scene: escena3D(t, spec.range), height: spec.height || 500 });
    if (spec.ocultarLeyenda) l.showlegend = false;
    Plotly.newPlot(el, traces, l, config());
  }

  function planoPuntos(a, b, c, d, r) {
    // genera malla del plano ax+by+cz=d dentro de [-r,r]
    let u, v;
    const n = Math.hypot(a, b, c) || 1;
    if (Math.abs(c) > 1e-9) {
      u = [1, 0, -a / c]; v = [0, 1, -b / c];
    } else if (Math.abs(b) > 1e-9) {
      u = [1, -a / b, 0]; v = [0, 0, 1];
    } else {
      u = [0, 1, 0]; v = [0, 0, 1];
    }
    u = norm(u); v = norm(v);
    const p0 = [a * d / (n * n), b * d / (n * n), c * d / (n * n)];
    const X = [], Y = [], Z = [];
    const M = 12;
    for (let i = 0; i <= M; i++) {
      const sr = [], sy = [], sz = [];
      for (let j = 0; j <= M; j++) {
        const s = (i / M - 0.5) * 2 * r, tt = (j / M - 0.5) * 2 * r;
        sr.push(p0[0] + u[0] * s + v[0] * tt);
        sy.push(p0[1] + u[1] * s + v[1] * tt);
        sz.push(p0[2] + u[2] * s + v[2] * tt);
      }
      X.push(sr); Y.push(sy); Z.push(sz);
    }
    return { x: X, y: Y, z: Z };
  }

  function renderPlot2D(el, spec) {
    const t = tema();
    const traces = [];
    (spec.funciones || []).forEach(function (f, i) {
      const x = [], y = [];
      const a = f.desde, b = f.hasta, N = f.n || 200;
      for (let k = 0; k <= N; k++) { const xv = a + (b - a) * k / N; x.push(xv); y.push(f.f(xv)); }
      traces.push({ type: "scatter", mode: "lines", x: x, y: y, line: { color: color(f.color, i), width: f.width || 2.5, dash: f.dash || "solid" }, name: f.label || "" });
    });
    (spec.series || []).forEach(function (s, i) {
      traces.push({ type: "scatter", mode: s.mode || "lines+markers", x: s.x, y: s.y, line: { color: color(s.color, i + 2), width: 2.5 }, marker: { size: 8, color: color(s.color, i + 2) }, name: s.label || "", text: s.text });
    });
    (spec.barras || []).forEach(function (s, i) {
      traces.push({ type: "bar", x: s.x, y: s.y, marker: { color: color(s.color, i) }, name: s.label || "", text: s.text, textposition: "outside" });
    });
    const l = layoutBase(t, spec.titulo, Object.assign(ejes2D(t, spec), { height: spec.height || 400, xaxis: { title: spec.xlabel || "", gridcolor: t.grid, zeroline: true, zerolinecolor: t.zero }, yaxis: { title: spec.ylabel || "", gridcolor: t.grid, zeroline: true, zerolinecolor: t.zero } }));
    Plotly.newPlot(el, traces, l, config());
  }

  function renderTransformacion(el, spec) {
    // M transforma el cuadrado unitario y vectores base
    const t = tema();
    const M = spec.matriz;
    const ox = spec.origen || [0, 0, 0];
    const base = [[0, 0], [1, 0], [1, 1], [0, 1]];
    const orig = base.map(function (p) { return [ox[0] + p[0], ox[1] + p[1]]; });
    const img = base.map(function (p) {
      const x = p[0] + ox[0], y = p[1] + ox[1];
      return [M[0][0] * x + M[0][1] * y + (M[0][2] || 0), M[1][0] * x + M[1][1] * y + (M[1][2] || 0)];
    });
    const traces = [
      { type: "scatter", mode: "lines", x: orig.concat([orig[0]]).map(function (p) { return p[0]; }), y: orig.concat([orig[0]]).map(function (p) { return p[1]; }), line: { color: "#9aa8bd", width: 2, dash: "dot" }, name: "original" },
      { type: "scatter", mode: "lines", fill: "toself", x: img.concat([img[0]]).map(function (p) { return p[0]; }), y: img.concat([img[0]]).map(function (p) { return p[1]; }), line: { color: "#1e5eff", width: 3 }, fillcolor: "rgba(30,94,255,0.18)", name: "imagen T" },
    ];
    const anot = [];
    [[M[0][0], M[1][0], "T(e1)", "#00b894"], [M[0][1], M[1][1], "T(e2)", "#e17055"]].forEach(function (v) {
      anot.push({ x: v[0], y: v[1], ax: 0, ay: 0, xref: "x", yref: "y", axref: "x", ayref: "y", showarrow: true, arrowhead: 3, arrowwidth: 3, arrowcolor: v[3] });
      anot.push({ x: v[0], y: v[1], text: "<b>" + v[2] + "</b>", showarrow: false, font: { color: v[3] }, xshift: 10, yshift: 8 });
    });
    const l = layoutBase(t, spec.titulo || "Acción de la matriz " + JSON.stringify(M), Object.assign(ejes2D(t, { rangeX: spec.rangeX, rangeY: spec.rangeY }), { annotations: anot, height: spec.height || 420 }));
    Plotly.newPlot(el, traces, l, config());
  }

  function renderTabla(el, spec) {
    // pequeña tabla HTML (no plotly) para resultados numéricos
    let html = '<table style="width:100%;border-collapse:collapse;font-size:14px">';
    if (spec.headers) html += "<tr>" + spec.headers.map(function (h) { return '<th style="text-align:left;padding:6px 10px;border-bottom:2px solid var(--border)">' + h + "</th>"; }).join("") + "</tr>";
    (spec.rows || []).forEach(function (r) {
      html += "<tr>" + r.map(function (c) { return '<td style="padding:6px 10px;border-bottom:1px solid var(--border)">' + c + "</td>"; }).join("") + "</tr>";
    });
    html += "</table>";
    el.innerHTML = html;
  }

  const renderers = {
    vectores2d: renderVectores2D,
    vectores3d: renderVectores3D,
    plot2d: renderPlot2D,
    transformacion2d: renderTransformacion,
    tabla: renderTabla,
  };

  function norm(v) { const n = Math.hypot.apply(null, v) || 1; return v.map(function (x) { return x / n; }); }

  function render(el, spec) {
    if (!el || !spec) return;
    const fn = renderers[spec.tipo];
    try {
      if (fn) fn(el, spec);
      else el.innerHTML = '<p style="color:var(--muted);padding:12px">Gráfico no soportado: ' + spec.tipo + "</p>";
    } catch (e) {
      el.innerHTML = '<p style="color:var(--err);padding:12px">Error al graficar: ' + e.message + "</p>";
    }
    el.__spec = spec;
  }

  function renderTodos(root, force) {
    (root || document).querySelectorAll(".graph").forEach(function (el) {
      if (el.__spec && !force) return;
      const spec = el.__graficoSpec;
      if (spec) render(el, spec);
    });
  }

  function redibujar(root) {
    (root || document).querySelectorAll(".graph").forEach(function (el) {
      if (el.__spec) { try { Plotly.Plots.resize(el); } catch (e) {} }
    });
  }

  window.MAT1203 = window.MAT1203 || {};
  window.MAT1203.graphs = { render: render, renderTodos: renderTodos, redibujar: redibujar, PALETA: PALETA };
})();
