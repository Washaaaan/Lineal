(function () {
  "use strict";
  const M = window.MAT1203;
  const P = M.progress;
  const S = M.secciones;
  const MOD = M.modulos;

  let gid = 0;
  function uid(p) { return (p || "el") + "-" + (++gid); }

  /* ---------------- Math ---------------- */
  function renderMath(root) {
    if (typeof renderMathInElement !== "function") return;
    renderMathInElement(root || document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
      ],
      throwOnError: false,
      macros: { "\\R": "\\mathbb{R}", "\\C": "\\mathbb{C}", "\\N": "\\mathbb{N}", "\\Z": "\\mathbb{Z}", "\\vv": "\\mathbf", "\\proj": "\\operatorname{proj}", "\\rank": "\\operatorname{rank}", "\\nul": "\\operatorname{nul}", "\\col": "\\operatorname{col}", "\\gen": "\\operatorname{gen}", "\\tr": "\\operatorname{tr}", "\\Span": "\\operatorname{gen}", "\\dist": "\\operatorname{dist}" },
    });
  }
  M.renderMath = renderMath;

  /* ---------------- helpers ---------------- */
  const graphSpecs = {};
  function graphHTML(spec, small) {
    const id = uid("g");
    graphSpecs[id] = spec;
    return '<div class="graph' + (small ? " small" : "") + '" id="' + id + '" data-graph></div>';
  }

  function solutionHTML(sec, idx, o) {
    const id = uid("sol");
    let html = "";
    if (o.desarrollo && o.desarrollo.length) {
      html += '<ol class="steps">' + o.desarrollo.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>";
    }
    if (o.respuesta) html += '<div class="res">Respuesta: ' + o.respuesta + "</div>";
    if (o.grafico) html += graphHTML(o.grafico);
    return '<div class="solution" id="' + id + '" hidden>' + html + "</div>";
  }

  function ejemploHTML(o, i) {
    const solId = uid("ej");
    let html = '<div class="ex ex-ejemplo">';
    html += '<div class="ex-head"><span class="num">Ejemplo guiado ' + (i + 1) + "</span>" + (o.titulo ? " — " + o.titulo : "") + "</div>";
    html += '<div class="ex-body"><div class="enunciado">' + o.enunciado + "</div>";
    let inner = "";
    if (o.desarrollo && o.desarrollo.length) inner += '<ol class="steps">' + o.desarrollo.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>";
    if (o.respuesta) inner += '<div class="res">Respuesta: ' + o.respuesta + "</div>";
    if (o.grafico) inner += graphHTML(o.grafico);
    html += '<div id="' + solId + '" class="solution">' + inner + "</div>";
    html += "</div></div>";
    return html;
  }

  function ejercicioHTML(sec, o, i) {
    const solId = uid("sol");
    const dificultad = o.dificultad || "intermedio";
    let html = '<div class="ex">';
    html += '<div class="ex-head"><span class="num">' + (i + 1) + "</span> <span>" + (o.titulo || "Ejercicio") + '</span> <span class="badge ' + dificultad + '" style="margin-left:auto">' + dificultad + "</span></div>";
    html += '<div class="ex-body"><div class="enunciado">' + o.enunciado + "</div>";
    let inner = "";
    if (o.pista) inner += '<div class="callout"><b>Pista:</b> ' + o.pista + "</div>";
    if (o.desarrollo && o.desarrollo.length) inner += '<ol class="steps">' + o.desarrollo.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>";
    if (o.respuesta) inner += '<div class="res">Resultado: ' + o.respuesta + "</div>";
    if (o.grafico) inner += graphHTML(o.grafico);
    html += '<div class="ex-actions">';
    html += '<button class="runbtn" data-reveal data-target="' + solId + '" data-sec="' + sec + '" data-idx="' + i + '" data-show="Revelar resultado" data-hide="Ocultar resultado">▸ Revelar resultado</button>';
    html += '<button class="markbtn" data-mark data-sec="' + sec + '" data-idx="' + i + '">Marcar como resuelto</button>';
    html += "</div>";
    html += '<div class="solution" id="' + solId + '" hidden>' + inner + "</div>";
    html += "</div></div>";
    return html;
  }

  function bloqueHTML(b) {
    if (b.tipo === "grafico") return graphHTML(b.spec);
    if (b.tipo === "html") return b.html;
    if (b.tipo === "tabla") {
      let t = '<div class="card">';
      if (b.titulo) t += '<div class="card-h">' + b.titulo + "</div>";
      t += '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:14px">';
      if (b.headers) t += "<tr>" + b.headers.map(function (h) { return '<th style="text-align:left;padding:7px 10px;border-bottom:2px solid var(--border)">' + h + "</th>"; }).join("") + "</tr>";
      (b.rows || []).forEach(function (r) { t += "<tr>" + r.map(function (c) { return '<td style="padding:7px 10px;border-bottom:1px solid var(--border)">' + c + "</td>"; }).join("") + "</tr>"; });
      t += "</table></div></div>";
      return t;
    }
    const cls = b.tipo === "definicion" ? "def" : b.tipo === "teorema" ? "thm" : b.tipo === "nota" ? "note" : "";
    const etiqueta = { definicion: "Definición", teorema: "Teorema / Proposición", nota: "Nota del libro", ejemplo: "Ejemplo" }[b.tipo] || "";
    let h = '<div class="card ' + cls + '">';
    if (b.titulo || etiqueta) h += '<div class="card-h">' + (etiqueta ? '<span class="tag">' + etiqueta + "</span> " : "") + (b.titulo || "") + "</div>";
    h += "<div>" + b.html + "</div></div>";
    return h;
  }

  function autoevaluacionHTML(sec, quiz) {
    const id = uid("quiz");
    let h = '<div class="quiz" id="' + id + '">';
    quiz.forEach(function (q, qi) {
      h += '<div class="quiz-q" data-q="' + qi + '"><div>' + q.pregunta + "</div>";
      (q.opciones || []).forEach(function (op, oi) {
        h += '<label class="opt" data-correct="' + q.correcta + '">' + op + "</label>";
      });
      h += '<div class="quiz-fb" hidden>' + (q.explicacion || "") + "</div></div>";
    });
    h += '<div class="quiz-score">Puntaje: 0 / 0 respondidas (de ' + quiz.length + ")</div></div>";
    return h;
  }

  /* ---------------- render sección ---------------- */
  function renderSeccion(s) {
    let h = "";
    h += '<div class="section-head">';
    h += '<div class="materia">' + (s.materia || "MAT1203 · Álgebra Lineal") + " — " + (s.moduloNombre || "Módulo") + "</div>";
    h += "<h2>" + s.titulo + "</h2>";
    h += "</div>";

    h += '<div class="objetivo"><b>Objetivo:</b> ' + (s.objetivo || "—") + "</div>";
    if (s.prerrequisitos && s.prerrequisitos.length) {
      h += '<div class="chips">' + s.prerrequisitos.map(function (p) { return '<span class="chip">↩ ' + p + "</span>"; }).join("") + "</div>";
    }
    if (s.fuente) h += '<div class="chips"><span class="chip">Fuente: ' + s.fuente + "</span></div>";

    if (s.teoria && s.teoria.length) {
      h += '<h3 class="block-title"><span class="ico">📘</span> Teoría</h3>';
      s.teoria.forEach(function (b) { h += bloqueHTML(b); });
    }
    if (s.ejemplos && s.ejemplos.length) {
      h += '<h3 class="block-title"><span class="ico">🧭</span> Ejemplos guiados</h3>';
      s.ejemplos.forEach(function (e, i) { h += ejemploHTML(e, i); });
    }
    if (s.ejercicios && s.ejercicios.length) {
      h += '<h3 class="block-title"><span class="ico">✏️</span> Ejercicios <span class="chip" style="margin-left:auto">' + s.ejercicios.length + " ejercicios</span></h3>";
      s.ejercicios.forEach(function (e, i) { h += ejercicioHTML(s.id, e, i); });
    }
    if (s.erroresComunes && s.erroresComunes.length) {
      h += '<h3 class="block-title"><span class="ico">⚠️</span> Errores comunes</h3><div class="card note"><ul>' + s.erroresComunes.map(function (e) { return "<li>" + e + "</li>"; }).join("") + "</ul></div>";
    }
    if (s.checklist && s.checklist.length) {
      h += '<h3 class="block-title"><span class="ico">✅</span> Checklist para la interrogación</h3><div class="card"><ul class="checklist">' + s.checklist.map(function (c) { return "<li>" + c + "</li>"; }).join("") + "</ul></div>";
    }
    if (s.autoevaluacion && s.autoevaluacion.length) {
      h += '<h3 class="block-title"><span class="ico">🎯</span> Autoevaluación</h3>' + autoevaluacionHTML(s.id, s.autoevaluacion);
    }
    if (s.referencias && s.referencias.length) {
      h += '<h3 class="block-title"><span class="ico">🔗</span> Material de origen</h3><div class="refs">' + s.referencias.map(function (r) {
        return r.ruta ? '<a class="ref" target="_blank" href="' + r.ruta + '">' + (r.titulo || r.ruta) + "</a>" : '<span class="ref">' + (r.titulo || "") + "</span>";
      }).join("") + "</div>";
    }

    // pager
    M.ordenar();
    const idx = M.orden.indexOf(s.id);
    const prev = M.orden[idx - 1], next = M.orden[idx + 1];
    h += '<div class="pager">';
    h += prev ? '<button data-nav="' + prev + '">← ' + S[prev].titulo + "</button>" : "<span></span>";
    h += next ? '<button data-nav="' + next + '">' + S[next].titulo + " →</button>" : '<button data-nav="__home">Volver al inicio →</button>';
    h += "</div>";
    return h;
  }

  /* ---------------- home ---------------- */
  function renderHome() {
    M.ordenar();
    const total = M.orden.length;
    const totalEj = M.orden.reduce(function (a, id) { return a + ((S[id].ejercicios || []).length); }, 0);
    let vistos = M.orden.filter(function (id) { return P.esVisto(id); }).length;
    let h = '<div class="hero"><h1>MAT1203 · Álgebra Lineal</h1><p>Plataforma de estudio local construida a partir de las clases, apuntes y libros del curso. Teoría, ejemplos guiados, ejercicios con resultado, gráficos interactivos y autoevaluaciones para rendir tus interrogaciones.</p>';
    h += '<div class="stats"><div><b>' + total + "</b><span>secciones</span></div><div><b>" + M.orden.length + "</b><span>clases cubiertas</span></div><div><b>" + totalEj + "</b><span>ejercicios</span></div><div><b>" + vistos + "</b><span>vistas</span></div></div></div>";

    h += '<h3 class="block-title"><span class="ico">📚</span> Módulos</h3>';
    h += '<div class="home-grid">';
    const modIds = Object.keys(MOD).map(Number).sort(function (a, b) { return a - b; });
    modIds.forEach(function (mid) {
      const m = MOD[mid];
      const secs = M.orden.filter(function (id) { return S[id].modulo === mid; });
      const done = secs.filter(function (id) { return P.esVisto(id); }).length;
      h += '<div class="home-card" data-nav="' + (secs[0] || "") + '"><h4>' + m.nombre + "</h4><p>" + (m.descripcion || "") + '</p><div class="n">' + done + " / " + secs.length + " secciones completadas</div></div>";
    });
    h += "</div>";
    return h;
  }

  function renderNoDisponible(s) {
    let h = "";
    h += '<div class="section-head"><div class="materia">' + (s.materia || "MAT1203 · Álgebra Lineal") + " — " + (s.moduloNombre || "") + "</div><h2>" + s.titulo + "</h2></div>";
    if (s.objetivo) h += '<div class="objetivo"><b>Objetivo:</b> ' + s.objetivo + "</div>";
    h += '<div class="card note"><div class="card-h">Contenido en preparación</div><p>Esta sección está planificada y su contenido se está incorporando.</p></div>';
    if (s.fuente) h += '<div class="chips"><span class="chip">Fuente: ' + s.fuente + "</span></div>";
    return h;
  }

  /* ---------------- sidebar ---------------- */
  function renderSidebar() {
    M.ordenar();
    const sb = document.getElementById("sidebar-list");
    const modIds = Object.keys(MOD).map(Number).sort(function (a, b) { return a - b; });
    let h = "";
    modIds.forEach(function (mid) {
      const m = MOD[mid];
      const secs = M.orden.filter(function (id) { return S[id].modulo === mid; });
      if (!secs.length) return;
      h += '<div class="module"><button data-toggle="mod-' + mid + '"><span>' + m.nombre + '</span><span class="mod-tag">' + secs.length + "</span></button>";
      h += '<ul class="secs" id="mod-' + mid + '">';
      secs.forEach(function (id) {
        const s = S[id];
        h += '<li><a class="sec-link" data-nav="' + id + '"><span>' + s.orden + ". " + s.titulo + "</span>" + (P.esVisto(id) ? '<span class="done">✓</span>' : "") + "</a></li>";
      });
      h += "</ul></div>";
    });
    sb.innerHTML = h;
    actualizarProgreso();
  }

  function actualizarProgreso() {
    M.ordenar();
    const total = M.orden.length || 1;
    const vistos = M.orden.filter(function (id) { return P.esVisto(id); }).length;
    const pct = Math.round((vistos / total) * 100);
    const bar = document.getElementById("pbar");
    if (bar) bar.style.width = pct + "%";
    const lbl = document.getElementById("plabel");
    if (lbl) lbl.textContent = vistos + " / " + total;
    document.querySelectorAll(".sec-link").forEach(function (a) {
      const id = a.getAttribute("data-nav");
      const done = a.querySelector(".done");
      if (P.esVisto(id) && !done) { const s = document.createElement("span"); s.className = "done"; s.textContent = "✓"; a.appendChild(s); }
      if (!P.esVisto(id) && done) done.remove();
    });
  }
  M.actualizarProgreso = actualizarProgreso;

  /* ---------------- router ---------------- */
  function navegar(id) {
    if (!id) return;
    if (id === "__home") { location.hash = "#/inicio"; return; }
    location.hash = "#/" + id;
  }

  function route() {
    const hash = location.hash.replace(/^#\/?/, "");
    const content = document.getElementById("content");
    gid = 0;
    let html, tituloCrumb;
    if (!hash || hash === "inicio") {
      html = renderHome();
      tituloCrumb = "Inicio";
    } else if (S[hash]) {
      const s = S[hash];
      P.marcarVisto(s.id);
      html = s._disponible === false ? renderNoDisponible(s) : renderSeccion(s);
      tituloCrumb = "Módulo " + s.modulo + " · " + s.titulo;
      document.title = s.materia + " — " + s.titulo + " — Objetivo: " + (s.objetivo || "");
    } else {
      html = '<div class="card note"><div class="card-h">No encontrado</div><p>La sección solicitada no existe.</p></div>';
      tituloCrumb = "—";
    }
    content.innerHTML = html;
    const crumb = document.getElementById("crumb");
    if (crumb) crumb.textContent = tituloCrumb;

    // render graphs
    content.querySelectorAll(".graph").forEach(function (el) {
      const spec = graphSpecs[el.id];
      if (spec) M.graphs.render(el, spec);
    });
    renderMath(content);
    resaltarActivo(hash);
    document.querySelector(".sidebar").classList.remove("open");
    window.scrollTo({ top: 0, behavior: "instant" in document.documentElement.style ? "instant" : "auto" });
    actualizarProgreso();
    guardarUltimo(hash);
  }

  function resaltarActivo(id) {
    document.querySelectorAll(".sec-link").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-nav") === id);
    });
    document.querySelectorAll(".home-card").forEach(function (c) {
      c.classList.remove("active");
    });
  }

  function guardarUltimo(id) {
    try { if (id && id !== "inicio") localStorage.setItem("mat1203.ultimo", id); } catch (e) {}
  }

  /* ---------------- events ---------------- */
  document.addEventListener("click", function (ev) {
    const nav = ev.target.closest("[data-nav]");
    if (nav) { ev.preventDefault(); navegar(nav.getAttribute("data-nav")); return; }
    const tog = ev.target.closest("[data-toggle]");
    if (tog) {
      const ul = document.getElementById(tog.getAttribute("data-toggle"));
      if (ul) ul.style.display = ul.style.display === "none" ? "" : "none";
      return;
    }
    const theme = ev.target.closest("#theme-toggle");
    if (theme) {
      const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", cur);
      try { localStorage.setItem("mat1203.tema", cur); } catch (e) {}
      theme.textContent = cur === "dark" ? "☀️ Claro" : "🌙 Oscuro";
      setTimeout(function () {
        document.querySelectorAll(".graph").forEach(function (el) {
          const spec = graphSpecs[el.id];
          if (spec) M.graphs.render(el, spec);
        });
      }, 60);
      return;
    }
    const menu = ev.target.closest("#mobile-toggle");
    if (menu) { document.querySelector(".sidebar").classList.toggle("open"); return; }
    const home = ev.target.closest("#home-btn");
    if (home) { navegar("__home"); return; }
    const reset = ev.target.closest("#reset-btn");
    if (reset) {
      if (confirm("¿Borrar todo tu progreso guardado?")) { P.reset(); renderSidebar(); route(); }
      return;
    }
  });

  /* ---------------- search ---------------- */
  function initSearch() {
    const input = document.getElementById("search");
    if (!input) return;
    input.addEventListener("input", function () {
      const q = input.value.trim().toLowerCase();
      const box = document.getElementById("search-results");
      if (!q) { box.innerHTML = ""; renderSidebar(); return; }
      const res = M.orden.filter(function (id) {
        const s = S[id];
        const hay = (s.titulo + " " + (s.objetivo || "") + " " + (s.moduloNombre || "") + " " + (s._texto || "")).toLowerCase();
        return hay.indexOf(q) !== -1;
      });
      box.innerHTML = res.length
        ? res.slice(0, 30).map(function (id) { return '<a class="sec-link" data-nav="' + id + '">' + S[id].titulo + "</a>"; }).join("")
        : '<div class="ref">Sin resultados</div>';
      document.getElementById("sidebar-list").innerHTML = "";
    });
  }

  /* ---------------- init ---------------- */
  window.addEventListener("hashchange", route);
  window.addEventListener("resize", function () { M.graphs.redibujar(document); });

  document.addEventListener("DOMContentLoaded", function () {
    try {
      const tema = localStorage.getItem("mat1203.tema") || "light";
      document.documentElement.setAttribute("data-theme", tema);
      const t = document.getElementById("theme-toggle");
      if (t) t.textContent = tema === "dark" ? "☀️ Claro" : "🌙 Oscuro";
    } catch (e) {}
    renderSidebar();
    initSearch();
    if (!location.hash) location.hash = "#/inicio";
    route();
  });
})();
