'use strict';

// Enable the mobile disclosure only after JavaScript has loaded successfully.
document.documentElement.classList.add('js');
const menuToggle = document.querySelector('.menu-toggle');
const menuPanel = document.querySelector('#primary-menu');
const mobileViewport = window.matchMedia('(max-width: 800px)');

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
