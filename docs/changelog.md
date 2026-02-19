# Changelog

All notable changes to NativeFrame are documented here.

This project follows [Semantic Versioning](https://semver.org/).

---

## 0.1.0 — 2026-02-17

First public release.

### Added

- 15 components: Button, Input, Select, Checkbox & Radio, Toggle, Card, Badge, Avatar, Skeleton, Layout, Modal, Toast, Tabs, Accordion, Tooltip.
- Design token system with 60+ CSS custom properties.
- Dark mode via `prefers-color-scheme` and manual `.nf-dark` class.
- JavaScript API under the global `NF` object.
- Data attribute API for no-JS usage.
- Accessibility: ARIA patterns, keyboard navigation, focus trapping, roving tabindex, `prefers-reduced-motion`.
- Toast stacking with 4 visible rows and perspective overflow.
- Build system using clean-css and terser.
- Local dev server with path traversal protection.
- 3 example pages.
- Documentation site with search, sidebar navigation, and dark mode.
- CI pipeline with build, lint, tests, and bundle size checks.
