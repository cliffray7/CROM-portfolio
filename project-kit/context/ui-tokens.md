# UI tokens

Status: Initial values selected for Feature 02; visual review is pending. This file owns approved token names and values.

| Token | Semantic role | Value/modes | Evidence/rationale | Consumers |
|---|---|---|---|---|
| `color.canvas` | Page background | `#090b0d` | Dark engineering portfolio direction in `docs/planning/IMPLEMENTATION-ROADMAP.md` | `app/styles.css` |
| `color.surface` | Cards and panels | `#101316` | Separation from canvas while retaining low contrast | `app/styles.css` |
| `color.text.primary` | Main text | `#f1f0ed` | Readability on dark canvas; contrast review pending | `app/styles.css` |
| `color.text.secondary` | Supporting text | `#969b9e` | Muted explanatory copy; contrast review pending | `app/styles.css` |
| `color.accent` | Accent line and highlights | `#d49a58` | Amber/copper direction from roadmap | `app/styles.css` |
| `color.accent.action` | Primary action | `#f0bd7c` | Distinct action surface; contrast review pending | `app/styles.css` |
| `font.heading.body` | Interface and headings | Manrope with system sans fallback | CDN loaded with local fallback | `app/index.html`, `app/styles.css` |
| `font.code` | Labels and technical annotations | DM Mono with system monospace fallback | Technical metadata treatment | `app/index.html`, `app/styles.css` |
| `layout.content.max` | Main content width | `1180px` | Keeps long screens readable | `app/styles.css` |

Spacing, radius and contrast pairings still need a browser and accessibility review before this set is treated as final.

Define primitives and semantic mappings for color, typography, spacing, radius, elevation, motion and layering. Record units, theme modes and compatibility. A source screenshot can inspire values but cannot verify accessibility. Consumer themes reference this contract; no Griot palette is bundled.
