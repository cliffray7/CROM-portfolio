# Feature 03 — Read-only profile terminal

## Outcome

Let visitors explore a small set of portfolio facts through a terminal-style interaction that works with a keyboard and does not execute arbitrary commands.

## Scope and ownership

- App paths: `app/index.html`, `app/styles.css`, `app/app.js`, `app/README.md`.
- Supporting records: this feature spec, `project-kit/context/progress-tracker.md`, and `docs/planning/IMPLEMENTATION-ROADMAP.md`.
- Accepted commands: `whoami`, `stack`, `projects`, `architecture`, `contact`, `help`.
- The command set is a fixed in-memory map. The widget does not invoke a shell, evaluate input as code, or send it over the network.

## UI and interaction

- Visitors type a command and press Enter or activate the Run button.
- Output is appended to an announced log; at most eight command results remain visible.
- Unknown input returns a short error and points to `help`.
- Output is inserted as text, not parsed as HTML.

## Security and privacy

- User input stays in the browser and is compared against an allowlist.
- There is no command execution, network request, persistence, or secret in this feature.

## Acceptance criteria

- [x] Each listed command returns its matching fixed profile response.
- [x] Unknown commands show an error without running or evaluating the input.
- [x] Terminal output is written as text and old entries are bounded.
- [x] The input has a label and the output uses a live log region.
- [ ] Verify keyboard operation and live announcements in a browser.

## Verification evidence

Browser interaction and assistive technology review remain open. No automated tests were added for this feature.
