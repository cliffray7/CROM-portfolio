# Portfolio Reverse-Engineering Specification

**Target reference:** https://kenjimmy.xyz/  
**Working repository:** https://github.com/cliffray7/CROM-portfolio  
**Implementation branch:** `feat/kenjimmy-inspired-rebuild`  
**Status:** Discovery complete; implementation not yet started.

## 1. Objective

Improve the existing Clifford Ray portfolio by studying the information architecture, interaction patterns, motion language, and content presentation of the reference portfolio. The result must remain an original Clifford Ray product: retain the current CROM visual identity (dark editorial palette, warm amber accents, engineering diagrams, and restrained typography) while borrowing useful structural ideas rather than copying the reference site's source or branding.

## 2. Reference-site findings

The reference site presents a personal engineering portfolio with these major content areas:

- Introductory hero with role, location, short positioning statement, and primary navigation.
- Skills grouped by frontend and backend technologies.
- Selected activities and featured product/work highlights.
- About/engineering philosophy content.
- Web and native application portfolio sections.
- Contact and social links, plus resume access.

The public source repository identifies the original ecosystem as Nuxt 2 / Vue 2, Tailwind CSS, GSAP, ScrollMagic, Storyblok, Sass, and Vue Slick Carousel. The original project also includes dark mode, responsive navigation, animated content, and portfolio/blog-oriented pages.

## 3. Current CROM baseline

The current working app is a dependency-free static page under `app/`:

- `app/index.html`: semantic single-page portfolio structure.
- `app/styles.css`: custom responsive dark theme and visual system.
- `app/app.js`: fixed-command read-only terminal and illustrative load/cache simulator.
- `app/README.md`: explains the static app and identifies placeholder case studies.

Existing sections include a hero with an SVG service-topology illustration, interactive terminal, illustrative architecture simulator, selected work, engineering principles, and contact panel.

The root `package.json` is currently a minimal workflow baseline, not the app's runtime/build manifest. The portfolio itself currently has no frontend build step or framework runtime.

## 4. Recommended implementation direction

Preserve the requested original technology ecosystem while using supported modern equivalents:

| Concern | Reference ecosystem | Proposed implementation |
|---|---|---|
| App framework | Nuxt 2 | Nuxt 3 / Vue 3 (after dependency compatibility review) |
| Language | JavaScript / Vue SFC | TypeScript + Vue SFC |
| Styling | Tailwind + Sass | Tailwind CSS + Sass where useful |
| Motion | GSAP + ScrollMagic | GSAP + ScrollTrigger |
| Content | Storyblok | Storyblok only if editable case-study content is needed; otherwise typed local content initially |
| Carousel | Vue Slick Carousel | Accessible Vue-compatible/native carousel if a carousel is genuinely needed |

Do not add a dependency solely to imitate the reference. Keep the architecture proportionate to a personal portfolio.

## 5. Proposed information architecture

1. **Home / Hero** — clear positioning as a backend and full-stack engineer; concise proof-oriented introduction; primary work and contact actions.
2. **Capabilities** — backend engineering, frontend/product development, system design, and DevOps, with technologies presented as supporting evidence rather than an oversized logo wall.
3. **Selected work** — a small number of reviewed case studies. Each case study should state the problem, the user's contribution, architecture and trade-offs, technologies used, and verifiable outcome.
4. **Engineering approach** — modular design, API contracts, tenancy/security, reliability, observability, delivery practices.
5. **Interactive architecture** — retain the current topology visual and simulator as clearly labelled illustrative demos. Never imply simulated metrics are production telemetry.
6. **About and contact** — concise professional biography, approved contact details, GitHub, and resume link.

## 6. Design and interaction principles

- Preserve CROM's dark charcoal surfaces, amber accent, Manrope/DM Mono typographic pairing, and technical editorial tone.
- Make the hero immediately communicate role, strengths, and a route to evidence.
- Use motion to clarify hierarchy and transitions, not as decoration that delays reading.
- Support keyboard, touch, reduced-motion preferences, and small screens.
- Keep navigation and calls to action obvious.
- Use real project screenshots or diagrams only when available and approved.
- Avoid inflated claims, invented performance metrics, and unverified project outcomes.

## 7. Engineering requirements

- Use Nuxt/Vue component boundaries for navigation, hero, capability groups, case-study cards/details, architecture demos, and contact.
- Use data-driven case studies with a typed schema.
- Scope and clean up GSAP animations with component lifecycle/context handling.
- Prefer ScrollTrigger over the older ScrollMagic integration.
- Provide semantic landmarks, heading order, skip navigation, visible focus, descriptive link text, and accessible controls.
- Respect `prefers-reduced-motion`.
- Optimize images (responsive sizes, explicit dimensions, lazy-load below the fold).
- Add route metadata, canonical URL, Open Graph/Twitter metadata, sitemap, and robots rules before launch.
- Keep secrets out of client-side code; validate and protect any future contact endpoint server-side.
- Add automated checks for formatting/linting, component behavior, and key browser journeys.

## 8. Content accuracy rules

The existing case-study descriptions are explicitly marked as in progress. Do not turn them into claims of completed delivery, scale, impact, or ownership without confirmation. In particular:

- SABABISHA-PMS should describe only work and responsibilities the portfolio owner can substantiate.
- The legal practice platform should remain a placeholder until the project scope and contribution are verified.
- The topology and load/cache simulator must remain labelled as illustrative.
- Add email, phone, resume, client names, and private project details only after approval.

## 9. Delivery phases

### Phase A — Discovery and content validation
- Confirm final role/title and concise professional positioning.
- Verify project names, contributions, technologies, screenshots, and outcomes.
- Confirm approved contact and resume destinations.
- Review the reference repo's license before reusing any source assets or code. Until then, use it as behavioral/design reference and implement independently.

### Phase B — Framework foundation
- Introduce Nuxt 3 / Vue 3 / TypeScript and a reproducible package manifest.
- Port the existing CROM design tokens and global styles.
- Establish accessible layout, navigation, and responsive breakpoints.

### Phase C — Portfolio experience
- Build hero, capabilities, work index, case-study details, approach, and contact.
- Port the terminal and simulator only after their content and interaction contracts are tested.
- Add GSAP motion with reduced-motion and lifecycle cleanup.

### Phase D — Quality and release
- Test mobile, keyboard, and reduced-motion behavior.
- Run production build and dependency/security checks.
- Verify metadata, links, image performance, and deployment configuration.
- Publish only after all project claims and contact details are reviewed.

## 10. Acceptance criteria

- The site builds reproducibly from a clean install.
- It retains the CROM visual identity while presenting a clearer professional story.
- All navigation and interactive controls work with keyboard and touch.
- No illustrative metric is presented as measured production data.
- Case studies contain only verified claims.
- Responsive, accessibility, SEO, and performance checks are completed before release.
- The implementation is original and does not copy unlicensed source code or assets.
