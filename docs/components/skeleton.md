# Skeleton

Skeleton loaders show a placeholder animation while content is loading.

---

## Preview

```html
<div class="nf-skeleton nf-skeleton-text"></div>
<div class="nf-skeleton nf-skeleton-circle"></div>
<div class="nf-skeleton nf-skeleton-rect"></div>
```

---

## Basic usage

### Text line

```html
<div class="nf-skeleton nf-skeleton-text" style="width: 80%;"></div>
```

### Circle

```html
<div class="nf-skeleton nf-skeleton-circle"></div>
```

### Rectangle

```html
<div class="nf-skeleton nf-skeleton-rect" style="height: 200px;"></div>
```

---

## Common patterns

### Loading user profile

```html
<div class="nf-flex" style="gap: 0.75rem; align-items: center;">
  <div class="nf-skeleton nf-skeleton-circle"></div>
  <div style="flex: 1;">
    <div class="nf-skeleton nf-skeleton-text" style="width: 60%;"></div>
    <div class="nf-skeleton nf-skeleton-text" style="width: 40%;"></div>
  </div>
</div>
```

### Loading card

```html
<div class="nf-card">
  <div class="nf-skeleton nf-skeleton-rect" style="height: 200px; margin-bottom: 1rem;"></div>
  <div class="nf-card-body">
    <div class="nf-skeleton nf-skeleton-text" style="width: 70%; margin-bottom: 0.5rem;"></div>
    <div class="nf-skeleton nf-skeleton-text" style="width: 50%;"></div>
  </div>
</div>
```

---

## CSS variables

| Variable | Default | Usage |
|----------|---------|-------|
| `--nf-color-bg-muted` | `#f1f5f9` | Skeleton base color |
| `--nf-color-bg-subtle` | `#f8fafc` | Skeleton shimmer color |

---

## Accessibility

- Purely decorative (no ARIA needed)
- Animation respects `prefers-reduced-motion`
- Always replace with real content when loaded

---

## Best practices

✅ **Do:**
- Match skeleton to actual content layout
- Show during async data fetching
- Use multiple text skeletons for paragraphs

❌ **Don't:**
- Use for critical content that's always available
- Show for too long (indicate loading errors after 10s)

---

## Related components

- [Card](./card.md) — Often contains skeletons while loading
- [Avatar](./avatar.md) — Use circle skeleton as placeholder