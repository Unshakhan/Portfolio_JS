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

## 6. Next chunk integration

Next: About section. Real CV download hero mein already connected hai.

1. Hero section ke baad, `main` ke andar `<section id="about">` add karo.
2. About disabled button ko `<a class="nav-link" href="#about">About</a>` se replace karo.
3. CV update karni ho to `assets/Unsha-Sattar-CV.pdf` ko apni updated PDF se replace karo; filename same rakho.
4. 80–120 words ki original bio likho.
5. Multi-section active-navigation behavior baad mein add karo; current Home underline abhi first-chunk state hai.

Later chunks: Skills (minimum 6 with icons + ratings), Projects (minimum 3 real cards), Contact form validation, footer, README screenshots and 60–90 second walkthrough. Skills section ki requirement abhi pending hai.

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
