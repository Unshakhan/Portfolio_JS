'use strict';

// Enable the mobile disclosure only after JavaScript has loaded successfully.
document.documentElement.classList.add('js');
const menuToggle = document.querySelector('.menu-toggle');
const menuPanel = document.querySelector('#primary-menu');
const mobileViewport = window.matchMedia('(max-width: 1000px)');

function setMenuOpen(isOpen, restoreFocus = false) {
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuPanel.classList.toggle('is-open', isOpen);
  if (restoreFocus) menuToggle.focus();
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

// Close after selecting a real link; unfinished sections are disabled in HTML.
menuPanel.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false, mobileViewport.matches);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false, true);
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.navigation') && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false, menuPanel.contains(document.activeElement));
  }
});

// Reset disclosure state when switching between desktop and mobile layouts.
mobileViewport.addEventListener('change', () => {
  setMenuOpen(false, mobileViewport.matches && menuPanel.contains(document.activeElement));
});

// Typewriter: rotate roles below the static greeting, retaining "I am a ".
// Edit phrases and timing here; no library or CSS typing trick is involved.
(() => {
  const output = document.querySelector('#typing-text');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const phrases = [
    'I am a Full stack developer',
    'I am a Teacher',
    'I am a Creative thinker',
  ];
  const rolePrefix = 'I am a ';
  const timing = { type: 85, erase: 45, hold: 1800, next: 350 };
  let phraseIndex = 0;
  let characterCount = 0;
  let isDeleting = false;
  let timer;

  function schedule(delay) {
    clearTimeout(timer);
    if (!document.hidden && !reducedMotion.matches) {
      timer = setTimeout(tick, delay);
    }
  }

  function tick() {
    const phrase = phrases[phraseIndex];
    // Every role change retains the shared prefix.
    const minimumCharacters = rolePrefix.length;
    let delay;
    if (!isDeleting && characterCount < phrase.length) {
      characterCount += 1;
      delay = timing.type;
    } else if (!isDeleting) {
      isDeleting = true;
      delay = timing.hold;
    } else if (characterCount > minimumCharacters) {
      characterCount -= 1;
      delay = timing.erase;
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      isDeleting = false;
      delay = timing.next;
    }
    output.textContent = phrases[phraseIndex].slice(0, characterCount);
    schedule(delay);
  }

  function applyMotionPreference() {
    clearTimeout(timer);
    if (reducedMotion.matches) {
      output.textContent = phrases[0];
    } else {
      phraseIndex = 0;
      characterCount = 0;
      isDeleting = false;
      output.textContent = '';
      schedule(timing.next);
    }
  }

  // Suspend work in background tabs; resume the same phrase when visible again.
  document.addEventListener('visibilitychange', () => {
    clearTimeout(timer);
    if (!document.hidden) schedule(timing.next);
  });
  reducedMotion.addEventListener('change', applyMotionPreference);
  applyMotionPreference();
})();

// Keep the enabled navigation links in sync with the section being read.
// A single animation-frame update batches scroll events and avoids repeated work.
(() => {
  const links = [...document.querySelectorAll('.nav-link[href^="#"]')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  const header = document.querySelector('.site-header');
  let scheduled = false;

  function updateActiveSection() {
    scheduled = false;
    const readingLine = header.getBoundingClientRect().height + window.innerHeight * 0.22;
    let activeIndex = 0;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= readingLine) activeIndex = index;
    });
    // Short final sections may never reach the reading line, so handle page end.
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      activeIndex = sections.length - 1;
    }
    links.forEach((link, index) => {
      const isActive = index === activeIndex;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function queueUpdate() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateActiveSection);
    }
  }
  window.addEventListener('scroll', queueUpdate, { passive: true });
  window.addEventListener('resize', queueUpdate);
  window.addEventListener('load', queueUpdate);
  updateActiveSection();
})();

// Pause decorative CSS motion in background tabs without adding UI controls.
(() => {
  const starfield = document.querySelector('.starfield');
  const syncStarVisibility = () => starfield.classList.toggle('is-paused', document.hidden);
  document.addEventListener('visibilitychange', syncStarVisibility);
  syncStarVisibility();
})();

// Tap / Enter / Space toggles preview scrolling on touch and keyboard devices.
// CSS handles pointer hover; no external animation library is needed.
document.querySelectorAll('.project-preview').forEach((preview) => {
  preview.addEventListener('click', () => {
    const active = preview.getAttribute('aria-pressed') !== 'true';
    preview.setAttribute('aria-pressed', String(active));
    preview.classList.toggle('is-scrolling', active);
  });
});

// Skill meters: one shared animation frame, once on entry. Static HTML is the fallback.
(() => {
  const section = document.querySelector('#skills');
  const rows = [...section.querySelectorAll('.skills-rating')];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let played = false;
  let frame;
  const render = (fraction) => rows.forEach(row => {
    const value = Math.round(Number(row.dataset.rating) * fraction);
    row.querySelector('.rating-fill').style.width = `${value}%`;
    row.querySelector('.rating-number').textContent = `${value}%`;
  });
  function animate() {
    if (played) return;
    played = true;
    if (motion.matches) return;
    const start = performance.now();
    const tick = now => {
      const progress = Math.min((now - start) / 1400, 1);
      render(1 - Math.pow(1 - progress, 3));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries[0].isIntersecting;
      section.classList.toggle('is-visible', visible);
      if (visible) animate();
    }, { threshold: .15 });
    observer.observe(section);
  }
  motion.addEventListener('change', () => {
    if (motion.matches) { cancelAnimationFrame(frame); render(1); }
  });
})();

// Accessible theme control: its name describes the next action, matching the icon.
(() => {
  const toggle = document.querySelector('.theme-toggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`;
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
    themeMeta.content = theme === 'dark' ? '#181317' : '#f7f3ee';
  }
  applyTheme(document.documentElement.dataset.theme || 'dark');
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try { localStorage.setItem('unsha-portfolio-theme', theme); } catch (_) { /* Optional persistence. */ }
  });
})();

// Static contact flow: validate locally, then prepare a mailto draft.
// Opening an email application is not confirmation that a message was delivered.
(() => {
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#contact-form-status');
  const fields = [...form.querySelectorAll('input, textarea')];
  form.noValidate = true;
  form.querySelector('button[type="submit"]').disabled = false;
  function validate(field) {
    field.setCustomValidity(field.value.trim() ? '' : 'Please complete this field.');
    field.setAttribute('aria-invalid', String(!field.validity.valid));
    return field.validity.valid;
  }
  fields.forEach(field => field.addEventListener('input', () => {
    field.setCustomValidity('');
    field.removeAttribute('aria-invalid');
    status.textContent = '';
  }));
  form.addEventListener('submit', event => {
    event.preventDefault();
    const valid = fields.map(validate);
    if (valid.includes(false)) { form.reportValidity(); return; }
    const data = new FormData(form);
    const subject = String(data.get('subject')).trim();
    const body = `Name: ${String(data.get('name')).trim()}\nReply to: ${String(data.get('email')).trim()}\n\n${String(data.get('message')).trim()}`;
    const draft = `mailto:unshak08@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = 'Your email draft is ready to open. If no email app opens, contact unshak08@gmail.com directly. Your message remains here.';
    document.dispatchEvent(new CustomEvent('contact:draft-ready'));
    window.location.href = draft;
  });
})();

// Experience / Certificates: ARIA tabs with roving focus and arrow-key navigation.
(() => {
  const section = document.querySelector('#journey');
  const list = section.querySelector('.journey-tabs');
  const tabs = [...list.querySelectorAll('.journey-tab')];
  const panels = tabs.map(tab => document.getElementById(tab.dataset.panel));
  list.setAttribute('role', 'tablist');
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panels[index].id);
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].tabIndex = 0;
  });
  function selectTab(index, focus = false) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    if (focus) tabs[index].focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(index));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectTab(next, true); }
    });
  });
  selectTab(0);
  section.classList.add('tabs-ready');

  const dialog = section.querySelector('.certificate-dialog');
  let opener;
  section.querySelectorAll('.certificate-preview').forEach(button => {
    button.addEventListener('click', () => {
      opener = button;
      dialog.querySelector('img').src = button.dataset.certificate;
      dialog.querySelector('img').alt = button.dataset.title;
      dialog.querySelector('h3').textContent = button.dataset.title;
      dialog.showModal();
    });
  });
  dialog.querySelector('.certificate-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  });
  dialog.addEventListener('close', () => opener?.focus());
})();

// A softly trailing background glow. Native cursor and text contrast stay intact.
// One animation frame loop runs only while the pointer is moving toward its target.
(() => {
  const glow = document.querySelector('.cursor-glow');
  const allowed = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  let x = 0, y = 0, targetX = 0, targetY = 0, frame = 0, initialized = false;
  function stop() {
    cancelAnimationFrame(frame);
    frame = 0;
    initialized = false;
    glow.classList.remove('is-visible');
  }
  function draw() {
    x += (targetX - x) * 0.14;
    y += (targetY - y) * 0.14;
    glow.style.transform = `translate3d(${x - 210}px, ${y - 210}px, 0)`;
    if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.3) frame = requestAnimationFrame(draw);
    else frame = 0;
  }
  document.addEventListener('pointermove', event => {
    if (!allowed.matches || event.pointerType === 'touch' || document.hidden) return;
    targetX = event.clientX;
    targetY = event.clientY;
    if (!initialized) { x = targetX; y = targetY; initialized = true; }
    glow.classList.add('is-visible');
    if (!frame) frame = requestAnimationFrame(draw);
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', stop);
  window.addEventListener('blur', stop);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
  allowed.addEventListener('change', stop);
})();

// A brief celebration of preparing the draft, not a claim of email delivery.
// Confetti is decorative, ignores input, and respects reduced motion.
(() => {
  const canvas = document.querySelector('.email-confetti');
  const context = canvas.getContext('2d');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  function clear() { cancelAnimationFrame(frame); canvas.hidden = true; }
  document.addEventListener('contact:draft-ready', () => {
    clear();
    if (!context || motion.matches) return;
    const width = innerWidth, height = innerHeight;
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    canvas.hidden = false;
    const rect = document.querySelector('.contact-submit').getBoundingClientRect();
    const origin = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    const colors = ['#e8cda5', '#b48395', '#8c5d79', '#d9b579', '#f5dfbb'];
    const pieces = Array.from({ length: 65 }, () => ({
      vx: (Math.random() - .5) * 620,
      vy: -200 - Math.random() * 390,
      rotation: Math.random() * Math.PI,
      spin: (Math.random() - .5) * 12,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 4 + Math.random() * 5,
    }));
    const start = performance.now();
    function draw(now) {
      const elapsed = (now - start) / 1000;
      context.clearRect(0, 0, width, height);
      if (elapsed > 1.6) { clear(); return; }
      context.globalAlpha = Math.min(1, (1.6 - elapsed) / .5);
      pieces.forEach(piece => {
        context.save();
        context.translate(origin.x + piece.vx * elapsed, origin.y + piece.vy * elapsed + 360 * elapsed * elapsed);
        context.rotate(piece.rotation + piece.spin * elapsed);
        context.fillStyle = piece.color;
        context.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * .55);
        context.restore();
      });
      frame = requestAnimationFrame(draw);
    }
    frame = requestAnimationFrame(draw);
  });
  motion.addEventListener('change', clear);
  window.addEventListener('resize', clear);
  document.addEventListener('visibilitychange', () => { if (document.hidden) clear(); });
})();

// Back to top is offered only after scrolling; return keyboard focus to Home.
(() => {
  const button = document.querySelector('.back-to-top');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let scheduled = false;
  function update() { button.hidden = window.scrollY < 450; scheduled = false; }
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
  }, { passive: true });
  button.addEventListener('click', () => {
    document.querySelector('#home').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: motion.matches ? 'instant' : 'smooth' });
  });
  window.addEventListener('pageshow', update);
  update();
})();
