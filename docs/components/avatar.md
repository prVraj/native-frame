# Avatar

Avatars display user profile images or initials.

---

## Preview

```html
<div class="nf-avatar">AB</div>
<div class="nf-avatar"><img src="user.jpg" alt="User"></div>
```

---

## Basic usage

### With initials

```html
<div class="nf-avatar">JD</div>
```

### With image

```html
<div class="nf-avatar">
  <img src="user.jpg" alt="John Doe">
</div>
```

### With icon

```html
<div class="nf-avatar">👤</div>
```

---

## Sizes

### Small

```html
<div class="nf-avatar nf-avatar-sm">SM</div>
```

### Medium (default)

```html
<div class="nf-avatar">MD</div>
```

### Large

```html
<div class="nf-avatar nf-avatar-lg">LG</div>
```

### Extra Large

```html
<div class="nf-avatar nf-avatar-xl">XL</div>
```

---

## Shapes

### Circle (default)

No modifier needed.

```html
<div class="nf-avatar">AB</div>
```

### Square

```html
<div class="nf-avatar nf-avatar-square">AB</div>
```

---

## CSS variables

| Variable | Default | Usage |
|----------|---------|-------|
| `--nf-color-bg-muted` | `#f1f5f9` | Avatar background |
| `--nf-color-text` | `#0f172a` | Avatar text |
| `--nf-font-weight-semibold` | `600` | Avatar font weight |

---

## Best practices

✅ **Do:**
- Always provide alt text for image avatars
- Use 2-letter initials (first + last name)
- Use consistent sizes in groups

❌ **Don't:**
- Use more than 3 letters in initials
- Mix shapes in the same context

---

## Common patterns

### User profile header

```html
<div class="nf-flex" style="align-items: center; gap: 1rem;">
  <div class="nf-avatar nf-avatar-lg">
    <img src="user.jpg" alt="John Doe">
  </div>
  <div>
    <h3 style="margin: 0;">John Doe</h3>
    <p style="margin: 0; color: var(--nf-color-text-muted);">john@example.com</p>
  </div>
</div>
```

### Avatar group

```html
<div class="nf-flex" style="gap: 0.5rem;">
  <div class="nf-avatar">AB</div>
  <div class="nf-avatar">CD</div>
  <div class="nf-avatar">EF</div>
  <div class="nf-avatar">+5</div>
</div>
```

---

## Related components

- [Badge](./badge.md) — Can be combined for status indicators
- [Card](./card.md) — Often contains avatars