# Part 01 — Code samjho, phir customize karo

## 1. HTML ka role

HTML page ka structure hai. `header` ke andar `nav`, phir `main` ke andar hero `section` hai. Ek main `h1` rakha hai. `alt` image ka meaning screen-reader users ko batata hai. Illustration fictional hai; tumhari real photo hone ka claim nahi.

`class` styling ke liye reuse hoti hai. `id="home"` unique target hai: `href="#home"` isi par scroll karta hai. Disabled About/Skills/Projects/Contact future chunks mein real anchors banenge.

## 2. CSS variables kyun?

`:root` mein theme ki central values hain. `--color-accent: #e8cda5` ko badalne se jahan `var(--color-accent)` use hua hai wahan color update ho jayega. Har button mein alag hex likhne ki zaroorat nahi.

- Background: `#181317`
- Main text: `#f6f1e9`
- Muted text: `#bcb0b7`
- Accent: `#e8cda5`
- Borders: `#4a3843`

Variables semantic names se hain: naam color ke purpose ko batata hai. Section numbers wale comments se CSS navigate kar sakti ho.

## 3. Grid, Flex aur responsive layout

Hero desktop par CSS Grid se do columns mein hai. Navbar, CV button aur social icons Flexbox use karte hain. `min-width: 0` grid children ko shrink hone deta hai. `clamp()` font size aur spacing ko minimum aur maximum ke darmiyan fluid rakhta hai.

1100px par spacing adjust hoti hai. 800px aur neeche hero single column aur navigation mobile disclosure banti hai. 480px aur neeche typography/spacing aur compact hain. Fixed hero height nahi hai: text barhe to section naturally barhta hai.

## 4. JavaScript ka menu

`setMenuOpen()` ek central function hai. Ye button ka `aria-expanded`, accessible label aur panel ki `.is-open` class ek saath update karta hai. Is se visual aur accessibility state match rehti hai.

- Menu button: open/close.
- Escape: close aur focus button par.
- Bahar click: close.
- Real navigation link: close.
- Desktop/mobile breakpoint change: reset.

Ye non-modal disclosure hai: focus trap ki zaroorat nahi. JavaScript fail/disable ho to mobile navigation default mein visible rehti hai.

## 5. Hover aur motion

Button hover par halka lift hota hai. Social icons par border aur color change ke saath halka lift hai. Home link ki underline aur logo ka color bhi respond karte hain. `prefers-reduced-motion` on ho to entrance animations, smooth scrolling aur movement disable hain.

## 6. Part 02 — About section

About section add hai. Next chunk: Skills section (minimum 6 skills with icons aur honest rating indicators). Uske baad Projects, Contact aur footer.

## 7. Khud check karne ke sawal

- `position: sticky` navbar ko kis tarah visible rakhta hai?
- CSS variable ka scope kya hai?
- Grid aur Flexbox yahan alag kaam kyun kar rahe hain?
- `aria-expanded` true/false se kya change hota hai?
- `defer` script execution mein kya karta hai?
- `rel="noopener noreferrer"` external links par kyun hai?

In points ko explain kar pao, phir apne colors, text aur layout decisions customize karo. Git commits apni actual learning aur changes ke saath banao.

## Revised portrait layout

Figure ke andar image frame aur figcaption separate grid rows hain. Sirf image ki corners rounded hain. Extra portrait heading remove kar di hai. Caption clipped image container ke andar nahi hai. Floating craft card remove hai, is liye caption ke upar koi element overlap nahi karta. Text zoom par rows ki height naturally grow hoti hai.

## JavaScript typing animation

`script.js` ke end mein typewriter function hai. `phrases` array mein text, aur `timing` object mein milliseconds hain: type 85, erase 45, hold 1800, next 350. Speed change karni ho to in values ko edit karo.

`setTimeout()` har tick par next character add ya remove karta hai. `textContent` safe plain text update karta hai. `slice(0, characterCount)` batata hai kitne letters show karne hain. Greeting grey color mein static HTML paragraph hai, uske neeche roles animate hote hain. Roles ke liye minimum length `rolePrefix.length` hai, is liye “I am a ” same rehta hai aur sirf role change hota hai.

CSS typing nahi karti; text ka type/delete JavaScript se hai. CSS colors, responsive sizing aur blinking cursor style karti hai. Hidden sizing lines longest phrase ki height reserve karti hain taake animation se heading jump na kare. Screen readers ko stable complete introduction milta hai. Pause/resume control remove hai. Reduced motion enabled ho to static role dikhta hai.

## Custom logo

`assets/logo.svg` mein US initials custom vector paths se bane hain. Side brackets developer identity ko represent karte hain. SVG resolution-independent hai, is liye zoom par sharp rehta hai. Matching `favicon.svg` browser tab mein show hota hai. Navbar ka logo Home anchor hai; screen readers ko link ka `aria-label` name batata hai. Visual mark aur name lockup duplicate announce nahi hote. `.brand-mark` logo size aur `.brand-name` name styling control karta hai.

## Portrait glow aur floating skill icons

CSS section 07 mein `portrait-glow` border ko bright/dim karta hai. `skill-float` icons ko 9px up/down move karta hai; `skill-glow` unka thin border pulse karta hai. Image border 2px aur icon borders 1px hain. `--glow-cycle` pulse duration hai. Har icon ka negative `animation-delay` different hai taake sab ek saath move na karein.

`.portrait-stage` relative parent hai. Icons absolute hain lekin stage ke left/right bounds ke andar hain. Padding image ke side space reserve karti hai. Caption stage ke bahar normal flow mein rehta hai. Ye hero decoration hai; assignment ka full Skills section abhi separately banana hai. Reduced-motion preference par glow aur float ruk jate hain.

## About code samjho

`id="about"` section ko navbar ke `href="#about"` se connect karta hai. Bio 80–120 words ki requirement follow karti hai. `dl`, `dt` aur `dd` background ke labels aur values ko semantic structure dete hain. About centered layout mein hai. Background cards desktop par three columns aur 700px se neeche single column bante hain. Bio ki max-width readability control karti hai aur mobile par left-align hoti hai. CV anchor existing PDF ko download karta hai.

`script.js` ke end mein active-section function hai. Ye scroll par visible section ke according underline aur `aria-current` update karta hai. `requestAnimationFrame` repeated scroll events ko batch karta hai. Main content ka ID `main-content`, hero ka ID `home` aur About ka ID `about` hai: har target unique aur sahi section se connected hai.

Date-based claims add nahi kiye. Degree, SMIT training, teaching background aur current TSG internship provided context se liye gaye hain. About ka CSS section 08 mein hai.

## CV icon aur comment-style About label

Hero ka CV link ab `.social-link` class use karta hai, bilkul GitHub/LinkedIn ki tarah. SVG document icon show karta hai aur `download` attribute PDF download karta hai. `aria-label` aur `title` icon ka purpose batate hain. About ka duplicate CV button remove hai.

About heading label mein visible `//` aur dashed lines hain. Ye actual HTML comment nahi: screen par styled text hai. Decorative slashes aur lines screen readers se hidden hain. Flexible lines mobile width ke according shrink hoti hain.

## Star background

`stars.css` mein teen layers hain: 1px / 2px / 3px dots, 50s / 100s / 150s durations. `box-shadow` ek element se multiple stars draw karta hai. `::after` same points ko 100vh neeche repeat karta hai; animation -100vh par end hoti hai, is liye next cycle ka start match hota hai.

Original CSS ki `.container` overwrite nahi ki: woh portfolio ki layout width control karti hai. Naya `.starfield` fixed background hai, `pointer-events: none` clicks pass karta hai, aur sirf isi layer mein overflow clip hota hai. Coordinates vw/vh hain, is liye screen ke saath adapt hote hain. 600px se neeche fewer stars hain. Reduced motion par stars static rehte hain.

Stars ke colors/opacities aur `--star-speed` values `stars.css` mein customize kar sakti ho. Background tab mein animation pause hoti hai. Kisi package installation ki zaroorat nahi.

## Available indicator

Contact aur Available ek flex group mein hain taake mobile par alag na hon. Dot 12px hai aur CSS `availability-blink` opacity ko 1 se .35 aur wapas karta hai. Color `--color-available` se control hota hai. Text stable hai; sirf dot blink hota hai. Reduced-motion preference par dot static rehta hai. Ye tumhari work availability ka label hai, real-time online tracker nahi.

## Skills section
Eight skills in two responsive groups. CSS Grid changes from four columns to two, then one on small screens. Hover motion respects reduced-motion settings. Skill labels describe project experience, not scored proficiency. Edit the skill list in index.html; no library is required.

## Replace sample projects
The three project cards are dummy content, not claims about completed work.
In index.html find PROJECTS. Edit each h3, description and project-tech list.
For screenshots, replace span.project-mockup (including its contents) with:
<img class="project-screenshot" src="assets/my-project.webp" alt="">
Use a tall full-page screenshot. The preview wrapper already labels the project.
Replace disabled Live Demo / GitHub buttons with anchors containing your actual URLs:
<a href="https://your-real-url" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
Remove the sample label and pending-links note when real content is ready.
The preview scrolls on hover or on tap/keyboard activation. Reduced motion removes transitions.

## Skills redesign
Reference direction: https://codepen.io/Kan3an/pen/qEZzbom — category cards and animated meters, independently implemented in vanilla JavaScript. The displayed ratings are illustrative. Edit data-rating, --rating and the static number together in index.html. Replace sample values after personal review and then remove the illustrative note.

## Theme and heading update
All section headings now share the numbered code-bracket style. theme.js reads the saved preference before CSS loads. The navbar button switches data-theme and saves it locally. Light palette tokens live under :root[data-theme="light"]. Storage failure never stops the toggle. No library is required.

## Portfolio opening animation
loader.js runs early and reveals the portfolio after its introductory counter reaches 100. It waits for page load with a 2.6-second asset wait cap, and includes a 4.5-second independent escape hatch. The number measures intro progress, not network bytes. No-JavaScript visitors see the portfolio directly; reduced-motion visitors skip the extended animation. Change minimumTime for the brief intro duration.

## Contact section
Reference-inspired details and four-field form; CSS is scoped to contact. Contact details match the supplied CV. The JavaScript validates required trimmed fields and browser email validity, then opens an encoded mailto draft. It does not deliver messages through a backend. Inputs remain intact. Configure a real server endpoint before changing the interface to claim message delivery.

## Experience and certificates
The #journey section is inserted immediately after About. Experience and Certificates are accessible vanilla-JS tabs supporting click, arrows, Home and End. Without JavaScript both panels remain readable. Replace certificate PNG files in assets with original images and update their titles, alt text and sample labels. Clicking a certificate opens a native dialog; Escape or the close button returns focus. Current internship: TSG; earlier roles match the CV.

## Navigation and cursor glow
Experience links to #journey and participates in the existing active-link tracking. Send email keeps the clearly disclosed mailto-draft behavior. The background cursor glow follows desktop pointers using requestAnimationFrame; it is disabled for touch and reduced motion, ignores pointer events and stops when idle or hidden.

## Contact polish
Send email uses a theme-aware gradient. Validating the contact form dispatches contact:draft-ready and triggers a brief vanilla canvas confetti burst. This celebrates draft preparation, not confirmed delivery; mailto still requires the visitor to send from their email app. Confetti respects reduced motion and does not intercept clicks. The return-to-top button appears after 450px of scroll, smoothly returns to the top and restores focus to Home.
