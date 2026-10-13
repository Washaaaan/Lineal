(function () {
  "use strict";
  const P = window.MAT1203.progress;

  function onReveal(btn) {
    const targetId = btn.getAttribute("data-target");
    const box = document.getElementById(targetId);
    if (!box) return;
    const hidden = box.hasAttribute("hidden");
    if (hidden) {
      box.removeAttribute("hidden");
      btn.textContent = btn.getAttribute("data-hide") || "Ocultar resultado";
      if (window.MAT1203.renderMath) window.MAT1203.renderMath(box);
      requestAnimationFrame(function () { window.MAT1203.graphs.redibujar(box); });
      if (btn.hasAttribute("data-sec")) {
        const sec = btn.getAttribute("data-sec"), idx = btn.getAttribute("data-idx");
        const ex = btn.closest(".ex");
        if (ex) ex.classList.add("solved");
        if (sec && idx != null && P) P.marcarEjercicio(sec, idx, true);
        if (window.MAT1203.actualizarProgreso) window.MAT1203.actualizarProgreso();
      }
    } else {
      box.setAttribute("hidden", "");
      btn.textContent = btn.getAttribute("data-show") || "Revelar resultado";
    }
  }

  function onMark(btn) {
    const sec = btn.getAttribute("data-sec"), idx = btn.getAttribute("data-idx");
    const on = !btn.classList.contains("on");
    btn.classList.toggle("on", on);
    btn.textContent = on ? "Listo ✓" : "Marcar como resuelto";
    if (P) P.marcarEjercicio(sec, idx, on);
    if (window.MAT1203.actualizarProgreso) window.MAT1203.actualizarProgreso();
  }

  function onQuizOption(opt) {
    const q = opt.closest(".quiz-q");
    if (!q || q.classList.contains("answered")) return;
    q.classList.add("answered");
    const correct = parseInt(opt.getAttribute("data-correct"), 10);
    q.querySelectorAll(".opt").forEach(function (o, i) {
      if (i === correct) o.classList.add("correct");
      if (o === opt && i !== correct) o.classList.add("wrong");
      o.style.cursor = "default";
    });
    const fb = q.querySelector(".quiz-fb");
    if (fb) { fb.removeAttribute("hidden"); if (window.MAT1203.renderMath) window.MAT1203.renderMath(fb); }
    const wrap = q.closest(".quiz");
    if (wrap) {
      wrap.__answered = (wrap.__answered || 0) + 1;
      wrap.__correct = (wrap.__correct || 0) + (parseInt(opt.getAttribute("data-correct"), 10) === Array.prototype.indexOf.call(q.querySelectorAll(".opt"), opt) ? 1 : 0);
      const total = wrap.querySelectorAll(".quiz-q").length;
      const sc = wrap.querySelector(".quiz-score");
      if (sc) sc.textContent = "Puntaje: " + wrap.__correct + " / " + wrap.__answered + " respondidas (de " + total + ")";
      if (wrap.__answered === total && wrap.__correct === total) {
        if (sc) sc.textContent += "  ¡Perfecto! 🎉";
      }
    }
  }

  document.addEventListener("click", function (ev) {
    const r = ev.target.closest("[data-reveal]");
    if (r) { onReveal(r); return; }
    const m = ev.target.closest("[data-mark]");
    if (m) { onMark(m); return; }
    const o = ev.target.closest(".quiz-q .opt");
    if (o) { onQuizOption(o); return; }
  });
})();
