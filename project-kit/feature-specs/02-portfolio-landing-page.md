# Feature 02 — Portfolio landing page

## Outcome

Give visitors a clear introduction to Clifford Ray's engineering focus, a visual overview of distributed systems, selected project summaries, and a path to the public GitHub profile.

## Scope and ownership

- App paths: `app/index.html`, `app/styles.css`, `app/app.js`, `app/README.md`.
- Supporting project records: this feature spec, the root progress tracker, UI token/rule context, and implementation roadmap.
- This slice is a static client-side page. It adds no server, data store, analytics, form submission, or deployment configuration.
- Project summaries are marked as in progress; they are not complete case studies.

## Dependencies and decisions

- Uses semantic HTML, CSS, SVG and minimal browser JavaScript. No app package manifest or runtime package is required.
- Uses Google Fonts with system fallbacks. The page remains readable if the font CDN is unavailable.
- The portfolio roadmap calls for a Three.js WebGL graph. This first slice uses an accessible SVG topology illustration; a live WebGL visualization remains a separate feature.
- The only supplied public contact destination is `github.com/cliffray7`; no email address, location, or current availability is claimed.

## UI and interaction

- One-page sections: introduction, selected work, engineering approach, contact.
- Responsive layout at desktop, tablet and narrow mobile widths.
- Keyboard skip link, semantic section headings, labeled SVG diagram, visible focus, and reduced-motion support.
- External GitHub links open in a new tab with `rel="noreferrer"`.
- Contact uses the existing GitHub profile link; no form or unverified email is introduced.

## Security, privacy, deployment

- No user input is collected or transmitted by the app.
- No secrets, credentials, or personal contact data are included.
- Static files can be hosted by any static web host. No deployment change is included in this feature.

## Acceptance criteria

- [x] A visitor can identify the portfolio owner and engineering focus from the first screen.
- [x] The page links to selected project summaries and the supplied GitHub profile.
- [x] Layout adapts to narrow screens and provides a skip link and reduced-motion handling.
- [x] Unverified contact details, location, and availability are not asserted.
- [ ] Verify appearance and keyboard flow in desktop and mobile browsers.

## Verification evidence

No browser or automated verification was run in this session. Manual viewport and keyboard review remains open.
