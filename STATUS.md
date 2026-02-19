# Implementation Status

Current version: **0.1.0**

## Components — 15/15

| Component | CSS | JS | Docs | Notes |
|-----------|:---:|:--:|:----:|-------|
| Button | done | — | done | 5 variants, 3 sizes, loading state |
| Input | done | — | done | Error/success states, groups with prefix/suffix |
| Select | done | — | done | Styled native select |
| Checkbox & Radio | done | — | done | Custom styled, groups |
| Toggle | done | — | done | 3 sizes |
| Card | done | — | done | 3 variants, hoverable, compact |
| Badge | done | — | done | 5 variants, pill, dot |
| Avatar | done | — | done | 4 sizes, circle/square |
| Skeleton | done | — | done | Text, circle, rect with shimmer |
| Layout | done | — | done | Container, grid, flex, stack, cluster |
| Modal | done | done | done | Focus trap, Escape to close, data attribute API |
| Toast | done | done | done | 4-row stack with overflow, progress timer |
| Tabs | done | done | done | Arrow key navigation, roving tabindex |
| Accordion | done | done | done | Single/multi open, animated collapse |
| Tooltip | done | done | done | Auto-position, flip on overflow |

## Infrastructure

| Item | Status |
|------|--------|
| Design tokens (`_tokens.css`) | done |
| CSS reset + base styles | done |
| Build script (clean-css + terser) | done |
| Dev server (`scripts/serve.js`) | done |
| CI pipeline (GitHub Actions) | done |
| Interaction tests (Playwright) | done |
| Accessibility audit (axe-core) | done |
| Documentation site (`docs/index.html`) | done |
| 3 example pages | done |

## Bundle sizes

| File | Minified | Gzipped |
|------|----------|---------|
| `nativeframe.min.css` | ~39 KB | ~7 KB |
| `nativeframe.min.js` | ~9 KB | ~3 KB |
| **Total** | **~48 KB** | **~10 KB** |
