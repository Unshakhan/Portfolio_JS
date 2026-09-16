// Run before styles load to avoid flashing the wrong saved theme.
// Storage may be unavailable on local files or in privacy modes; switching still works.
(() => {
  let theme = 'dark';
  try {
    const saved = localStorage.getItem('unsha-portfolio-theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (_) { /* Keep the original dark palette when storage is unavailable. */ }
  document.documentElement.dataset.theme = theme;
})();
