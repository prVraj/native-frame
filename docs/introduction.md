# Introduction

## What is NativeFrame?

**NativeFrame** is a lightweight UI component library built with pure HTML, CSS, and vanilla JavaScript. It gives you production-ready components that work anywhere — no build step needed, no framework required, no JavaScript overhead for most components.

## What NativeFrame is

- **A CSS-first component library** — Most components work with CSS alone. JavaScript is only needed for interactive behavior like modals and toasts.
- **Framework-agnostic** — Use it with React, Vue, Svelte, or plain HTML.
- **Accessible by default** — Every interactive component ships with ARIA patterns and keyboard support.
- **Dependency-free** — Zero runtime dependencies.
- **Small** — Under 10 KB total (minified + gzipped).

## What NativeFrame is not

- **Not a CSS framework** — There are no utility classes for every possible style.
- **Not a JavaScript framework** — There is no state management, reactivity, or virtual DOM.
- **Not an application framework** — There is no routing, data fetching, or app scaffolding.

## Who it's for

NativeFrame works well for:

- Developers who want clean, semantic HTML without framework overhead.
- Teams building prototypes or MVPs that need to move fast.
- Projects that need a consistent design system without heavy dependencies.
- Anyone who wants components that just work when dropped into a page.

## Philosophy

### CSS-first, JS-optional

Every component is designed to work as much as possible without JavaScript. Interactive components like modals and accordions enhance progressively with JS, but the visual foundation is pure CSS.

### Accessibility is not optional

All interactive components include:

- ARIA attributes
- Full keyboard navigation
- Focus management
- Screen reader compatibility
- Support for `prefers-reduced-motion` and `prefers-color-scheme`

### Progressive enhancement

Components work with just HTML and CSS. JavaScript adds behavior and interactivity, but the core experience stays functional without it.

### Zero dependencies

The entire library is self-contained. No external runtime dependencies means smaller bundles, no supply chain risk, no version conflicts, and full control over updates.

## Bundle sizes

| File | Minified | Gzipped |
|------|----------|---------|
| `nativeframe.min.css` | ~39 KB | ~7 KB |
| `nativeframe.min.js` | ~9 KB | ~3 KB |
| **Total** | **~48 KB** | **~10 KB** |

## Browser support

NativeFrame supports all modern browsers:

- Chrome / Edge 90+
- Firefox 88+
- Safari 14+

It uses modern CSS features like custom properties, Grid, and Flexbox. There is no IE11 support.

## Next steps

- [Installation](./installation.md) — Get NativeFrame into your project
- [Quick Start](./quick-start.md) — Build your first page
- [Components](./components/button.md) — Browse all available components
