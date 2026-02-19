# Introduction

## What is NativeFrame?

**NativeFrame** is a lightweight, framework-agnostic UI component library built with pure HTML, CSS, and vanilla JavaScript. It provides production-ready UI primitives that work anywhere — no build step, no framework lock-in, no JavaScript overhead.

## What NativeFrame is

- **A CSS-first component library** — Most components work with CSS alone, no JavaScript required
- **Framework-agnostic** — Use it with React, Vue, Svelte, or plain HTML
- **Accessible by default** — Every interactive component ships with proper ARIA patterns and keyboard support
- **Dependency-free** — Zero npm runtime dependencies
- **Tiny footprint** — Under 10 KB gzipped for the complete library

## What NativeFrame is NOT

- **Not a CSS framework** — We don't provide utility classes for every possible style
- **Not a JavaScript framework** — No state management, no reactivity system, no virtual DOM
- **Not an application framework** — No routing, no data fetching, no complex app patterns

## Who it's for

NativeFrame is perfect for:

- Developers who want clean, semantic HTML without framework overhead
- Teams building prototypes or MVPs that need to move fast
- Projects that need a consistent design system without heavy dependencies
- Anyone tired of bundler complexity and just wants components that work

## Philosophy

### CSS-first, JS-optional

Every component is designed to work as much as possible without JavaScript. Interactive components like modals and accordions gracefully enhance with JS, but the foundation is pure CSS.

### Accessibility is not optional

All interactive components include:
- Proper ARIA attributes
- Full keyboard navigation support
- Focus management
- Screen reader compatibility
- Support for `prefers-reduced-motion` and `prefers-color-scheme`

### Progressive enhancement

Components work with just HTML and CSS. JavaScript adds behavior and interactivity, but the core experience remains functional without it.

### Zero dependencies

The entire library is self-contained. No external runtime dependencies means:
- Smaller bundle sizes
- No supply chain vulnerabilities
- No version conflicts
- Complete control over updates

## Bundle sizes

| File | Uncompressed | Gzipped |
|------|--------------|---------|
| `nativeframe.css` | ~45 KB | ~7 KB |
| `nativeframe.min.css` | ~30 KB | ~5 KB |
| `nativeframe.js` | ~15 KB | ~4 KB |
| `nativeframe.min.js` | ~8 KB | ~2.5 KB |

**Total library size (minified + gzipped): Under 8 KB**

## Browser support

NativeFrame supports all modern browsers:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

We use modern CSS features like custom properties, Grid, and Flexbox. No IE11 support.

## Next steps

- [Installation](./installation.md) — Get started in under 60 seconds
- [Quick Start](./quick-start.md) — Your first NativeFrame page
- [Components](./components/button.md) — Browse all available components
