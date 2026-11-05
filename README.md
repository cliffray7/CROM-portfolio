# Clifford Ray — Portfolio & System Engineering

This repository contains the portfolio website and supporting engineering documentation for Clifford Ray.

## Portfolio applications

- **Nuxt application:** [`web/`](web/) — current implementation workspace using Nuxt 3, Vue 3, TypeScript, Tailwind CSS, and GSAP.
- **Static baseline:** [`app/`](app/) — original dependency-free portfolio page retained while the Nuxt implementation is validated.

To run the Nuxt app locally:

```bash
cd web
npm install
npm run dev
```

Requires Node.js 20 or later. See [web/README.md](web/README.md) for build and type-check commands.

## Portfolio direction

The portfolio presents backend engineering, full-stack product development, system design, and DevOps capabilities through concise explanations and verified project case studies. The visual direction follows the supplied Kenjimmy portfolio reference: a light editorial layout, coral-led accent palette, compact side rail, section-based navigation, and an optional persistent dark theme.

## Architecture and quality principles

1. **Clear system boundaries:** document responsibilities, interfaces, tenancy, and security assumptions.
2. **Evidence-led project stories:** describe actual contributions and verified outcomes; do not inflate experience or metrics.
3. **Accessible interactions:** keyboard support, visible focus, responsive layouts, and reduced-motion support.
4. **Reproducible delivery:** keep dependencies explicit and run type-check/build verification before deployment.
5. **Honest technical visuals:** topology diagrams and browser simulators are clearly labelled as illustrative unless connected to real telemetry.

## Documentation

- [Portfolio reverse-engineering specification](docs/portfolio-reverse-engineering-spec.md)
- [Nuxt application setup](web/README.md)

## Developer overview

- **Name:** Clifford Ray
- **Focus:** Backend engineering, full-stack development, system design, and DevOps.
- **GitHub:** [github.com/cliffray7](https://github.com/cliffray7)

Project-specific technologies and responsibilities should be described in each case study only after they have been verified.
