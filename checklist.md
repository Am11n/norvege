# NORVEGE MINERALS AS – AI Build Checklist

Goal: Build a modern, fast, bilingual corporate site for NORVEGE MINERALS AS.  
Inspiration: pureminerals.no and polartransitionminerals.com, but with a distinct and improved design.

---

## 0. Product goals and constraints

- [ ] Define primary goals
  - [ ] Present NORVEGE MINERALS AS as a serious, modern mining company
  - [ ] Showcase licenses, projects, and exploration areas in a clear way
  - [ ] Give a solid ESG / sustainability story
  - [ ] Support investor and partner communication
  - [ ] Make it easy to contact the company

- [ ] Define audience
  - [ ] Institutional and private investors
  - [ ] Authorities and regulators
  - [ ] Local communities and partners
  - [ ] Potential employees

- [ ] Language strategy
  - [ ] Default site language: English
  - [ ] Secondary language: Norwegian
  - [ ] All content must be stored in a language-agnostic structure ready for i18n
  - [ ] A visible language switcher (EN / NO) must exist in header and mobile menu

- [ ] Sitemap
  - [ ] `/` Home
  - [ ] `/about` About the company
  - [ ] `/projects` Project overview
  - [ ] `/projects/[slug]` Project detail page
  - [ ] `/esg` ESG / Sustainability
  - [ ] `/investors` Investor relations / key documents
  - [ ] `/contact` Contact
  - [ ] `/privacy-policy` Privacy policy
  - [ ] Optional: `/news` or `/updates` if needed later

---

## 1. Tech stack and project setup

- [x] Create repository
  - [x] Git repo with `main` and `develop` branches
  - [x] Package manager: `pnpm` (preferred) or `yarn`

- [x] Core stack
  - [x] Next.js 15 (App Router, `src` directory)
  - [x] React with TypeScript (`"strict": true`)
  - [x] Tailwind CSS for styling
  - [x] Framer Motion for animations and transitions
  - [x] `next-intl` or `next-i18next` for i18n and translations
  - [ ] Simple email handler for contact form (Next.js Route Handler or server action)
  - [x] Option: `zod` for input validation

- [x] Dev tooling
  - [x] ESLint configured for Next.js + TypeScript
  - [x] Prettier integration
  - [x] `.editorconfig` with standard settings
  - [x] Husky + lint-staged to run lint and format on commit
  - [x] `tsconfig.json` with path aliases:
    - [x] `@/components/*`
    - [x] `@/sections/*`
    - [x] `@/lib/*`
    - [x] `@/content/*`
    - [x] `@/styles/*`

- [x] Folder structure
  - [x] `src/app` for Next App Router pages and layout
  - [ ] `src/app/[locale]/...` if using locale segments
  - [x] `src/components` for shared components
  - [x] `src/components/layout` for header, footer, layout shells
  - [x] `src/components/ui` for small UI building blocks (buttons, cards, badges, etc.)
  - [x] `src/sections` for page sections (hero, exploration, projects, contact, etc.)
  - [x] `src/lib` for utilities (seo config, i18n config, content loaders)
  - [x] `src/content` for structured content (TS/JSON/MDX)
  - [x] `src/styles` for Tailwind and global CSS
  - [x] `public` for images, icons, favicons, Open Graph images
  - [x] `docs` for internal documentation (architecture, design system, content model)

---

## 2. Design system and visual identity

- [x] Brand foundations
  - [x] One-page brand note describing NORVEGE MINERALS AS, tone, and message
  - [x] Tone: clear, factual, confident, not overly "marketing"

- [x] Color system
  - [x] Primary dark background color (e.g. deep navy / charcoal)
  - [x] Light neutral background for sections (e.g. warm light grey / sand)
  - [x] Accent color inspired by minerals (e.g. copper/gold tone)
  - [x] Secondary accent for links, tags, and highlights
  - [x] Semantic colors: success, info, warning (subtle)
  - [x] Add all colors as CSS variables and Tailwind theme entries

- [x] Typography
  - [x] Select heading font (modern serif or strong sans)
  - [x] Select body font (high readability)
  - [x] Define scale for headings (H1–H6) on desktop and mobile
  - [x] Set base line-height and letter-spacing for body text
  - [x] Implement global typography in `globals.css` or a typography layer

- [x] Spacing and layout tokens
  - [x] Define vertical section padding for desktop and mobile
  - [x] Define max content width (e.g. `max-w-5xl` / `max-w-6xl`)
  - [x] Set consistent grid system for cards and sections

- [x] Component tokens
  - [x] Border radius scale (sm / md / lg / pill)
  - [x] Shadow tokens for cards and modals
  - [x] Focus styles (ring sizes, color)
  - [x] Standard animation durations and easings used across the site

- [x] Design documentation
  - [x] Create `docs/design-system.md` describing tokens, typography, and usage patterns
  - [x] Include Tailwind theme snippet in the document for quick reference

---

## 3. Layout, navigation, and footer

- [x] Root layout
  - [x] Create main layout component with:
    - [x] Header
    - [x] Main content area
    - [x] Footer
  - [ ] Apply background gradient or subtle texture inspired by geology
  - [x] Ensure content uses center alignment with max-width and padding

- [x] Header and navigation
  - [x] Logo area (NORVEGE MINERALS AS logo)
  - [x] Main nav links:
    - [x] Home
    - [x] About
    - [x] Projects
    - [x] ESG
    - [x] Investors
    - [x] Contact
  - [x] Clear “Contact” or “Get in touch” call-to-action button
  - [x] Language switcher: EN / NO
  - [x] Mobile menu:
    - [x] Slide-in drawer
    - [x] Same navigation links and language toggle
  - [x] Sticky header on scroll with slight background change

- [x] Footer
  - [x] Company short description
  - [x] Address and basic contact info
  - [x] Quick links to main pages
  - [x] Link to privacy policy
  - [x] Link to ESG/CSR information
  - [ ] Small note about site creator if needed
  - [x] Correct copyright text with year update logic

---

## 4. Home page structure

- [x] Hero section
  - [x] Short title line tying history, geology, and future minerals
  - [x] Subheading explaining the company in 1–2 sentences
  - [x] Strong primary call-to-action (e.g. “View Projects”)
  - [x] Secondary call-to-action (e.g. “Investor Information”)
  - [x] Background:
    - [x] High-quality geology / rock image
    - [ ] Optional parallax or soft motion on scroll
  - [x] Optional small badge for “Active exploration in [regions]”

- [x] “Exploration at scale” metrics
  - [x] Stats cards for:
    - [x] Number of licenses
    - [x] Total exploration area (km²)
    - [x] Number of historic mines / prospects
    - [x] Number of key project areas
  - [x] Each card should:
    - [x] Show number and unit
    - [x] Short description
    - [ ] Optional icon
  - [x] Light background, clear contrast with hero section

- [x] Exploration areas / key projects teaser
  - [x] Section header with short intro
  - [x] 2–4 project cards with:
    - [x] Image
    - [x] Project name
    - [x] Region
    - [x] Stage (e.g. “Early exploration”, “Advanced exploration”)
    - [x] Key metrics (licenses, area, priority)
    - [x] “View project” link
  - [x] Use cards with hover effects and motion

- [x] ESG / responsible mining teaser
  - [x] Short text about sustainability and local engagement
  - [x] 3 highlight items (e.g. “Environmental care”, “Community engagement”, “Transparency”)
  - [x] Link to full ESG page

- [x] “Why NORVEGE MINERALS” / Strategic vision
  - [x] 3–4 columns or feature cards:
    - [x] Position in Norwegian mineral sector
    - [x] Focus on critical minerals for energy transition
    - [x] Long-term value for stakeholders
    - [x] Experienced team and partners

- [x] Investor / partner call-to-action
  - [x] Block with:
    - [x] Short message for investors and partners
    - [x] Button to “Investor information”
    - [x] Button to “Contact our team”

- [x] Contact strip / map teaser
  - [x] Small section before footer
  - [x] Key contact details
  - [x] Optional embedded static map image for relevant region in Norway

---

## 5. About page

- [x] Company overview
  - [x] Clear story: who, what, where, why
  - [x] Timeline or key milestones component
  - [x] Section describing regions and minerals of focus

- [x] Management and board
  - [x] Cards for key people:
    - [x] Name
    - [x] Role
    - [x] Short bio
    - [ ] Optional LinkedIn link

- [x] Strategy section
  - [x] Long-term vision
  - [x] Position in Norwegian and European critical minerals context

---

## 6. Projects pages

- [x] Project overview (`/projects`)
  - [x] Intro text
  - [x] Filterable list or simple grid of projects
  - [x] Each project card:
    - [x] Name
    - [x] Region
    - [x] Stage
    - [x] License count and total area
    - [x] Link to detail page

- [ ] Project detail (`/projects/[slug]`)
  - [ ] Header with:
    - [ ] Name, region, country
    - [ ] Stage tag
  - [ ] Key metrics section:
    - [ ] Licenses
    - [ ] Area (km²)
    - [ ] Mineral focus
  - [ ] Narrative sections:
    - [ ] Geological summary
    - [ ] Work completed to date
    - [ ] Planned activities
  - [ ] Optional:
    - [ ] Map image
    - [ ] Photo gallery
  - [ ] “Back to projects” link

---

## 7. ESG page

- [x] ESG overview
  - [x] Clear statement on responsible mining
  - [x] Connection to Norwegian and EU standards where relevant

- [x] Sections
  - [x] Environment (land use, biodiversity, emissions)
  - [x] Social (local communities, jobs, safety)
  - [x] Governance (transparency, reporting)

- [ ] Optional KPI list or diagram if data is ready

---

## 8. Investors page

- [x] Investor summary
  - [x] One section speaking directly to investors
  - [x] Summary of company positioning and potential

- [x] Key facts
  - [x] Projects and licenses
  - [x] Stage of development
  - [ ] Optional cap table / listing info if relevant later

- [x] Document list
  - [x] Space for:
    - [x] Presentations (PDF)
    - [x] Reports
    - [x] Notices
  - [x] Use structured data model so that new documents can be added easily

---

## 9. Contact page

- [x] Contact info
  - [x] Company legal name
  - [x] Address
  - [x] Email
  - [x] Phone (if available)

- [x] Contact form
  - [x] Fields:
    - [x] Name
    - [x] Email
    - [x] Company (optional)
    - [x] Subject (select + text)
    - [x] Message
  - [x] Validation with `zod` or similar
  - [x] Server-side handling:
    - [x] Spam protection (honeypot or basic rate limit)
    - [x] Email send or storage (configurable)
    - [x] User-facing success / error messages

- [x] Optional map or region image

---

## 10. Internationalization (EN / NO)

- [ ] i18n setup
  - [ ] Pick i18n solution (`next-intl` or `next-i18next`)
  - [ ] Configure locale detection if needed
  - [ ] Decide URL pattern:
    - [ ] `/en/...` and `/no/...` or
    - [ ] `/[locale]/...` with default redirect

- [ ] Translation storage
  - [ ] Create translation files:
    - [ ] `en/common.json`, `no/common.json`
    - [ ] `en/home.json`, `no/home.json`, etc.
  - [ ] All UI strings must come from translation files
  - [ ] All navigation labels must be translatable
  - [ ] Form labels and messages must be translatable

- [ ] Language switcher
  - [ ] Visible in header and mobile menu
  - [ ] Correctly switches locale and keeps user on equivalent route
  - [ ] Accessible (buttons or links with clear labels)

---

## 11. Animations and interactions

- [x] Use Framer Motion for:
  - [x] Hero content fade-in and slight upward motion
  - [x] Cards subtle hover scale and shadow
  - [x] Scroll-based staggered reveals for sections
  - [x] Mobile menu slide-in

- [x] Keep motion subtle and performance-friendly
  - [x] Respect reduced motion preference (`prefers-reduced-motion`)
  - [x] Avoid long or distracting animations

---

## 12. Performance, SEO, and analytics

- [ ] Performance
  - [ ] Optimize images with Next Image component
  - [ ] Use modern image formats where possible
  - [ ] Avoid heavy client-side code where not needed
  - [ ] Use static or server-side rendering for main pages

- [x] SEO
  - [x] Set up default metadata in root layout
  - [x] Set unique titles and descriptions per page
  - [ ] Configure Open Graph and Twitter image
  - [x] Use clean, descriptive URLs
  - [x] Semantic HTML structure (headings, sections, nav, main, footer)

- [ ] Analytics
  - [ ] Integrate lightweight analytics (e.g. Plausible, Vercel Analytics, or chosen tool)
  - [ ] Respect cookie and privacy rules (EU / Norway)

---

## 13. Accessibility and quality

- [x] Accessibility
  - [x] Check contrast ratios for all text and UI elements
  - [x] Ensure keyboard navigation works on all interactive elements
  - [x] Add `aria` labels where needed (menus, toggles, forms)
  - [ ] Provide alt text for all key images
  - [x] Respect `prefers-reduced-motion`

- [ ] Quality checks
  - [ ] Run lint and type check with no errors
  - [ ] Add a few basic tests where it makes sense (e.g. rendering critical components)
  - [ ] Manual test on:
    - [ ] Desktop (large, medium)
    - [ ] Tablet
    - [ ] Mobile

---

## 14. Content model and configuration

- [x] Central config
  - [x] `src/content/site.ts` with:
    - [x] Company name
    - [x] Main contact info
    - [ ] Social links if used

- [ ] Static content structures
  - [ ] Define TS interfaces for:
    - [ ] Projects
    - [ ] Team members
    - [ ] ESG items
    - [ ] Investor documents
  - [ ] Store sample data in TS/JSON files to keep content editable and predictable

- [ ] Hooks or helpers
  - [ ] Helper functions to fetch content by locale
  - [ ] Typed accessors for projects, team, documents

---

## 15. Deployment and environment

- [ ] Environment setup
  - [ ] `.env.example` with required variables (mail provider, analytics keys, base URL)
  - [ ] Load env values only on server where needed

- [ ] Deployment target
  - [ ] Deploy to preferred platform (e.g. Vercel or Azure)
  - [ ] Set up production and preview environments
  - [ ] Configure domain(s) and HTTPS

- [ ] Post-deploy checks
  - [ ] Run Lighthouse report for performance and accessibility
  - [ ] Verify language switch, navigation, and forms in production

---

## 16. Documentation

- [x] Create `docs/architecture.md`
  - [x] Describe stack, routing, content model, i18n approach

- [x] Create `docs/content-editing.md`
  - [x] Explain how to update text, projects, ESG content, and translations

- [x] Create `docs/development-guide.md`
  - [x] Explain how to run the project locally
  - [x] Commit rules, branch strategy, and coding style

- [x] Keep all docs in English, with room to extend with Norwegian notes later

---
