# Feature 04 — Client-side architecture simulator

## Outcome

Show visitors how a simple illustrative request model changes as load increases and a cache layer is enabled or disabled.

## Scope and ownership

- App paths: `app/index.html`, `app/styles.css`, `app/app.js`, `app/README.md`.
- Supporting records: this feature spec, `project-kit/context/progress-tracker.md`, and `docs/planning/IMPLEMENTATION-ROADMAP.md`.
- Controls: a 0–100% load slider and a Redis cache toggle.
- Metrics: modeled load, estimated response time, and estimated cache hit rate.
- Formula inputs are illustrative constants in client-side code; values are not measured production data.

## Interaction and accessibility

- Slider supports keyboard and pointer input and exposes its current modeled value.
- Cache is a labeled native checkbox with a visible switch treatment and focus indicator.
- A concise polite status announces whether simulation controls have changed.
- Metric figures are explicitly described as estimates; the model note explains the direction of each formula.

## Security and privacy

- No network requests, persistent storage, or user data collection are introduced.
- Only numeric slider state and a boolean toggle affect local output.

## Acceptance criteria

- [x] Changing load updates the modeled load and response time.
- [x] Toggling cache changes the estimated latency and cache hit rate.
- [x] Values are labeled illustrative and never presented as live telemetry.
- [x] Controls have accessible labels and keyboard focus treatment.
- [ ] Verify slider, toggle, layout, and announcements in a browser.

## Verification evidence

Browser interaction and assistive technology review remain open. No automated tests were added for this feature.
