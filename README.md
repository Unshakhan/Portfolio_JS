# Unsha Sattar — Portfolio, Part 02

A responsive navbar, hero and About section built with plain HTML, CSS and vanilla JavaScript. Theme: deep plum, champagne and soft ivory. Revised editorial composition with asymmetric portrait corners. This cumulative download includes Part 01 and Part 02; the complete assignment is still in progress.

## Run locally

1. Extract the ZIP using **Extract All** on Windows.
2. Open the extracted `unsha-portfolio-part-02` folder in VS Code.
3. Open `index.html` directly in a browser, or right-click it and select **Open with Live Server** if that extension is installed.
4. No `npm install`, framework, build process, database or API key is required.

In the hosted source checkout, the web files are under `dist/`. The download ZIP places them at the root for simpler local use.

## Files

- `index.html`: semantic page structure, navigation, hero content and accessible image text.
- `styles.css`: design tokens, base styles, navigation, hero, About, breakpoints and reduced-motion behavior.
- `script.js`: accessible mobile navigation state, Escape/outside-click/link closing and breakpoint reset.
- `assets/developer-modern.png`: locally included AI-generated portrait.
- `assets/logo.svg`: custom US monogram with developer brackets, drawn as crisp SVG paths.
- `assets/favicon.svg`: matching monogram for the browser tab.
- `assets/Unsha-Sattar-CV.pdf`: copy of the existing Unsha_Sattar_Job_Ready_ATS_CV_2026.pdf, unchanged.
- `LEARNING-NOTES.md`: Roman Urdu explanation and the next chunk's integration guide.

- `stars.css`: three responsive, looping box-shadow star layers adapted from the supplied snippet.

## Implemented

- Sticky navigation, smooth Home/About navigation, and active section highlighting.
- Available label beside Contact with a gently blinking green dot. This is declared availability for work, not a live presence service.
- Redesigned About section with centered heading, unboxed 100-word bio, three compact background cards, current TSG internship and a code-comment-style About Me label. CV download is in the hero only. Hero divider/text strip removed.
- Responsive mobile menu; `aria-expanded` communicates its state.
- Name, role, tagline, professional illustration and an icon-only CV download matching the GitHub/LinkedIn circles.
- GitHub and LinkedIn icon links with accessible labels.
- Portrait caption in a separate normal-flow row; redundant labels removed.
- Vanilla JavaScript typewriter: static grey greeting with developer / teacher / creative thinker typing on the next line, preserving “I am a ” during role changes. Reduced-motion fallback included.
- CSS variables for colors, fonts, spacing and timing.
- Hover treatments for logo, Home underline, GitHub navigation, CV button and social icons.
- Subtle entrance animation; reduced-motion preferences honored.
- Keyboard focus indicators and skip link.
- Responsive layouts designed around 360px, 768px and 1440px, with content-driven breakpoints.
- Local assets and system font stacks; no external font dependency.
- Full-page slow upward starfield in champagne/soft white, with lower mobile density, hidden-tab pause and reduced-motion support.
- Champagne breathing glow around portrait and thinner glowing React, JavaScript, Node.js and MongoDB icon borders. Icons gently float with staggered timing; reduced-motion preferences stop the effects.

## Remaining sections

Skills, Projects and Contact are visibly disabled navigation buttons until their real sections are added. They are not broken anchors. The toolkit line has been removed. The primary action downloads the previously supplied September 2026 CV. Contact form, project cards, and full-site footer remain for later chunks.

This preview is private; a publicly accessible final submission deployment is still needed later. This is AI-assisted learning code: understand and adapt it yourself, and follow your program's originality and AI-use rules. Do not describe it as entirely unaided work.

## Verification

JavaScript syntax, local asset references, and fragment targets checked before packaging. Typewriter sequence, prefix preservation, hidden-tab suspension and reduced-motion fallback verified with simulated DOM/timers. Illustration inspected. Responsive CSS is implemented, but browser/device visual and interaction QA was not run in this environment. Before final submission, inspect at 360, 768 and 1440 pixels in DevTools, check 200% zoom, keyboard Tab/Escape, and verify there is no horizontal scrolling. Open the mobile menu, follow Home/About/GitHub, resize to desktop and back, and test reduced motion. Future chunks require another check after integration.

## Asset credits

`developer-modern.png` was edited with OpenAI image generation using the earlier portrait as reference. It is an AI-generated character, not a real photograph of Unsha. Edit prompt: modern developer in a softly draped plum headscarf, lightweight matching face covering and tailored plum blazer behind a laptop, champagne rim lighting and dark plum studio background; no logos or text. The generated PNG is included locally. The US logo, matching favicon, and download icon are original SVG interface marks. GitHub and LinkedIn icons identify their respective platforms. Inline React, JavaScript, Node.js and MongoDB marks identify the named technologies; the monocolor treatment matches the portfolio. Fonts use locally installed Segoe UI/Arial and Georgia/Times New Roman; no font files are redistributed.

Starfield coordinates and animation approach adapted from the CSS snippet supplied by the user; no external animation library is used. Existing plum theme is preserved.
