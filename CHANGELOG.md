# Changelog

All notable changes to NativeFrame are documented here.

This project follows [Semantic Versioning](https://semver.org/).

---

## 0.1.0 — 2026-02-17

First public release.

### Added

- **15 components:** Button, Input, Select, Checkbox & Radio, Toggle, Card, Badge, Avatar, Skeleton, Layout, Modal, Toast, Tabs, Accordion, Tooltip.
- **Design token system** with 60+ CSS custom properties for colors, typography, spacing, shadows, and transitions.
- **Dark mode** support via `prefers-color-scheme` and manual `.nf-dark` class.
- **JavaScript API** under the global `NF` object for Modal, Toast, Tabs, Accordion, and Tooltip.
- **Data attribute API** so interactive components work without writing any JavaScript.
- **Accessibility** built in: ARIA patterns, keyboard navigation, focus trapping (Modal), roving tabindex (Tabs), and `prefers-reduced-motion` support.
- **Toast stacking** with 4 visible rows and perspective overflow behind the oldest row, plus a full-card progress timer.
- **Build system** (`scripts/build.js`) using clean-css and terser for minification.
- **Local dev server** (`scripts/serve.js`) with path traversal protection.
- **3 example pages:** component showcase, landing page, and dashboard app.
- **Documentation site** (`docs/index.html`) with sidebar navigation, search, markdown rendering, and dark mode.
- **CI pipeline** (`.github/workflows/ci.yml`) with build, lint, tests, accessibility audit, and bundle size checks.
- **Interaction tests** (`tests/interactions/smoke.test.js`) using Playwright.
- **Accessibility audit** (`tests/accessibility/axe-audit.js`) using axe-core.
