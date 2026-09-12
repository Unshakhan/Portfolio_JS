# Unsha Sattar — Portfolio, Part 01

A responsive navbar and hero built with plain HTML, CSS and vanilla JavaScript. Theme: deep plum, champagne and soft ivory. Revised editorial composition with asymmetric portrait corners. This is the first learning chunk, not the completed assignment.

## Run locally

1. Extract the ZIP using **Extract All** on Windows.
2. Open the extracted `unsha-portfolio-part-01` folder in VS Code.
3. Open `index.html` directly in a browser, or right-click it and select **Open with Live Server** if that extension is installed.
4. No `npm install`, framework, build process, database or API key is required.

In the hosted source checkout, the web files are under `dist/`. The download ZIP places them at the root for simpler local use.

## Files

- `index.html`: semantic page structure, navigation, hero content and accessible image text.
- `styles.css`: design tokens, base styles, navigation, hero, breakpoints and reduced-motion behavior.
- `script.js`: accessible mobile navigation state, Escape/outside-click/link closing and breakpoint reset.
- `assets/developer.webp`: locally included, optimized AI-generated illustration.
- `assets/logo.svg`: custom US monogram with developer brackets, drawn as crisp SVG paths.
- `assets/favicon.svg`: matching monogram for the browser tab.
- `assets/Unsha-Sattar-CV.pdf`: copy of the existing Unsha_Sattar_Job_Ready_ATS_CV_2026.pdf, unchanged.
- `LEARNING-NOTES.md`: Roman Urdu explanation and the next chunk's integration guide.

## Implemented

- Sticky navigation and smooth Home navigation.
- Responsive mobile menu; `aria-expanded` communicates its state.
- Name, role, tagline, professional illustration and actual CV download.
- GitHub and LinkedIn icon links with accessible labels.
- Portrait caption in a separate normal-flow row; redundant labels removed.
- Vanilla JavaScript typewriter: static grey greeting with developer / teacher / creative thinker typing on the next line, preserving “I am a ” during role changes. Reduced-motion fallback included.
- CSS variables for colors, fonts, spacing and timing.
- Hover treatments for logo, Home underline, GitHub navigation, CV button and social icons.
- Subtle entrance animation; reduced-motion preferences honored.
- Keyboard focus indicators and skip link.
- Responsive layouts designed around 360px, 768px and 1440px, with content-driven breakpoints.
- Local assets and system font stacks; no external font dependency.

## Deliberate first-chunk limits

About, Skills, Projects and Contact are visibly disabled navigation buttons until the real sections are added. They are not broken anchors. The toolkit line has been removed. The primary action downloads the previously supplied September 2026 CV. Contact form, project cards, and full-site footer remain for later chunks.

This preview is private; a publicly accessible final submission deployment is still needed later. This is AI-assisted learning code: understand and adapt it yourself, and follow your program's originality and AI-use rules. Do not describe it as entirely unaided work.

## Verification

JavaScript syntax, local asset references, and fragment targets checked before packaging. Typewriter sequence, prefix preservation, hidden-tab suspension and reduced-motion fallback verified with simulated DOM/timers. Illustration inspected. Responsive CSS is implemented, but browser/device visual and interaction QA was not run in this environment. Before final submission, inspect at 360, 768 and 1440 pixels in DevTools, check 200% zoom, keyboard Tab/Escape, and verify there is no horizontal scrolling. Open the mobile menu, follow Home/GitHub, resize to desktop and back, and test reduced motion. Future chunks require another check after integration.

## Asset credits

`developer.webp` was generated with OpenAI image generation for this portfolio. It is a stylized character illustration, not a real photograph of Unsha. Prompt: editorial developer in a black niqab and abaya behind a dark laptop, champagne rim lighting, charcoal background, no logos or text. Original 1122 × 1402 PNG optimized into an 800 × 1000 WebP. The US logo, matching favicon, and download icon are original SVG interface marks. GitHub and LinkedIn icons identify their respective platforms. Fonts use locally installed Segoe UI/Arial and Georgia/Times New Roman; no font files are redistributed.
