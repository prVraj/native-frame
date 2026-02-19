# Card

Cards are containers for grouping related content. They typically include a header, body, and optional footer.

---

## Preview

```html
<div class="nf-card">
  <div class="nf-card-header">Card Title</div>
  <div class="nf-card-body">Card content goes here.</div>
  <div class="nf-card-footer">
    <button class="nf-btn nf-btn-primary nf-btn-sm">Action</button>
  </div>
</div>
```

---

## Basic usage

```html
<div class="nf-card">
  <div class="nf-card-body">
    <p>Simple card with just a body.</p>
  </div>
</div>
```

---

## With header and footer

```html
<div class="nf-card">
  <div class="nf-card-header">
    <strong>Profile Settings</strong>
  </div>
  <div class="nf-card-body">
    <p>Update your profile information here.</p>
  </div>
  <div class="nf-card-footer">
    <button class="nf-btn nf-btn-secondary nf-btn-sm">Cancel</button>
    <button class="nf-btn nf-btn-primary nf-btn-sm">Save</button>
  </div>
</div>
```

---

## With image

```html
<div class="nf-card">
  <img src="image.jpg" alt="Description" class="nf-card-image">
  <div class="nf-card-body">
    <h3>Card Title</h3>
    <p>Card content with image on top.</p>
  </div>
</div>
```

---

## Variants

### Default (with shadow)

No modifier needed.

```html
<div class="nf-card">
  <div class="nf-card-body">Default card with shadow.</div>
</div>
```

### Bordered (no shadow)

```html
<div class="nf-card nf-card-bordered">
  <div class="nf-card-body">Card with border, no shadow.</div>
</div>
```

### Flat (no shadow, no border)

```html
<div class="nf-card nf-card-flat">
  <div class="nf-card-body">Flat card.</div>
</div>
```

---

## Modifiers

### Hoverable

Lifts on hover with increased shadow.

```html
<div class="nf-card nf-card-hoverable">
  <div class="nf-card-body">Hover over me!</div>
</div>
```

### Compact

Reduced padding.

```html
<div class="nf-card nf-card-compact">
  <div class="nf-card-body">Compact card with less padding.</div>
</div>
```

---

## Card grid

Use layout utilities to create card grids.

```html
<div class="nf-grid nf-md-grid-cols-3">
  <div class="nf-card">
    <div class="nf-card-body">Card 1</div>
  </div>
  <div class="nf-card">
    <div class="nf-card-body">Card 2</div>
  </div>
  <div class="nf-card">
    <div class="nf-card-body">Card 3</div>
  </div>
</div>
```

---

## CSS variables

| Variable | Default | Usage |
|----------|---------|-------|
| `--nf-color-bg` | `#ffffff` | Card background |
| `--nf-color-border` | `#e2e8f0` | Card border |
| `--nf-shadow-md` | `0 4px 6px...` | Card shadow |
| `--nf-radius-lg` | `12px` | Card border radius |
| `--nf-spacing-4` | `1rem` | Card padding |

---

## Accessibility

- Cards are presentational containers — no ARIA roles needed
- If a card is clickable, wrap it in a link or button (not just onclick)
- Ensure sufficient contrast for text on card background

---

## Best practices

✅ **Do:**
- Group related content in cards
- Use consistent card heights in grids
- Provide clear headers for complex cards
- Use images sparingly and with alt text

❌ **Don't:**
- Nest cards inside cards (rarely needed)
- Make cards too wide (max-width: 600px is a good rule)
- Use cards for everything (not all content needs to be boxed)

---

## Common patterns

### Product card

```html
<div class="nf-card nf-card-hoverable" style="max-width: 300px;">
  <img src="product.jpg" alt="Product" class="nf-card-image">
  <div class="nf-card-body">
    <h3 style="margin: 0 0 0.5rem;">Product Name</h3>
    <p style="color: var(--nf-color-text-muted); margin: 0 0 1rem;">Short description of the product.</p>
    <div style="font-size: 1.25rem; font-weight: 600;">$29.99</div>
  </div>
  <div class="nf-card-footer">
    <button class="nf-btn nf-btn-primary nf-btn-full">Add to Cart</button>
  </div>
</div>
```

### Stat card

```html
<div class="nf-card">
  <div class="nf-card-body">
    <div style="font-size: 0.875rem; color: var(--nf-color-text-muted);">Total Users</div>
    <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">12,482</div>
    <span class="nf-badge nf-badge-success nf-badge-pill">+14%</span>
  </div>
</div>
```

---

## Related components

- [Badge](./badge.md) — Often used inside cards
- [Button](./button.md) — Common in card footers
- [Layout](./layout.md) — Grid for card layouts
