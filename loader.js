// A brief branded reveal, NOT a download-percentage measurement.
// Actual page load gates completion; a timeout always lets visitors through.
(() => {
  const root = document.documentElement;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const minimumTime = reducedMotion ? 0 : 1100;
  const started = performance.now();
  let frame, completionTimer, ready = document.readyState === 'complete';
  let finishing = false;
  root.classList.add('is-loading');

  function release() {
    cancelAnimationFrame(frame);
    clearTimeout(completionTimer);
    root.classList.remove('is-loading');
    document.querySelector('#portfolio-loader')?.remove();
    document.querySelectorAll('[data-loader-inert]').forEach(element => {
      element.inert = false;
      element.removeAttribute('data-loader-inert');
    });
  }
  // Independent escape hatch also covers missing markup and interrupted initialization.
  const watchdog = setTimeout(release, 4500);
  window.addEventListener('pageshow', event => {
    if (event.persisted) release();
  });
  window.addEventListener('load', () => { ready = true; }, { once: true });

  document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('#portfolio-loader');
    const number = document.querySelector('#loader-number');
    const fill = document.querySelector('#loader-fill');
    const phase = document.querySelector('#loader-phase');
    if (!overlay || !number || !fill || !phase) { release(); return; }
    document.querySelectorAll('.site-header, main, .skip-link').forEach(element => {
      if (!element.inert) { element.inert = true; element.dataset.loaderInert = ''; }
    });
    function paint(value) {
      number.textContent = String(value);
      fill.style.transform = `scaleX(${value / 100})`;
    }
    function tick(now) {
      const elapsed = now - started;
      // Finish after assets load, with a bounded wait for slow or failed requests.
      if (!finishing && elapsed >= minimumTime && (ready || elapsed >= 2600)) {
        finishing = true;
        paint(100);
        phase.textContent = 'Ready to explore';
        completionTimer = setTimeout(() => {
          overlay.classList.add('is-leaving');
          completionTimer = setTimeout(() => { clearTimeout(watchdog); release(); }, reducedMotion ? 0 : 450);
        }, reducedMotion ? 0 : 250);
        return;
      }
      paint(Math.min(94, Math.floor(94 * (1 - Math.exp(-elapsed / 550)))));
      if (elapsed > 650) phase.textContent = 'Bringing it together';
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
  }, { once: true });
})();
