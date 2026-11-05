# CROM Portfolio — Nuxt application

Nuxt 3 / Vue 3 implementation workspace for the CROM portfolio.

## Stack
- Nuxt 3 and Vue 3
- TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger

The existing dependency-free static portfolio remains in ../app as the baseline until this Nuxt version is verified and ready to replace.

## Local development
Requires Node.js 20 or later.

    cd web
    npm install
    npm run dev

## Quality checks
    npm run typecheck
    npm run build

## Notes
- The system topology is an illustrative SVG, not live infrastructure telemetry.
- Project descriptions are conservative; add detailed case studies only after verifying contributions, outcomes, and public links.
- GSAP animations are disabled when reduced motion is requested and reverted when the page unmounts.
- Storyblok is not connected yet; add a CMS only if editable case-study content is needed.
