# Badge

Badges are small labels for status, counts, or categories.

---

## Preview

```html
<span class="nf-badge nf-badge-primary">Primary</span>
<span class="nf-badge nf-badge-success">Success</span>
<span class="nf-badge nf-badge-warning">Warning</span>
<span class="nf-badge nf-badge-danger">Danger</span>
```

---

## Basic usage

```html
<span class="nf-badge nf-badge-primary">New</span>
```

---

## Variants

### Primary

```html
<span class="nf-badge nf-badge-primary">Primary</span>
```

### Success

```html
<span class="nf-badge nf-badge-success">Active</span>
```

### Warning

```html
<span class="nf-badge nf-badge-warning">Pending</span>
```

### Danger

```html
<span class="nf-badge nf-badge-danger">Error</span>
```

### Neutral

```html
<span class="nf-badge nf-badge-neutral">Draft</span>
```

---

## Modifiers

### Pill

Fully rounded.

```html
<span class="nf-badge nf-badge-primary nf-badge-pill">Pill Badge</span>
```

### Dot

Small dot indicator (no text).

```html
<span class="nf-badge nf-badge-success nf-badge-dot"></span>
```

---

## CSS variables

| Variable | Default | Usage |
|----------|---------|-------|
| `--nf-font-size-xs` | `0.75rem` | Badge font size |
| `--nf-spacing-1` | `0.25rem` | Badge padding |
| `--nf-radius-sm` | `4px` | Badge border radius |

---

## Best practices

✅ **Do:**
- Use for status, counts, categories
- Keep text very short (1-2 words)
- Use semantic colors (green for success, red for danger)

❌ **Don't:**
- Use for long text (use a tag or chip component instead)
- Overuse on a single page (loses meaning)

---

## Common patterns

### With text

```html
<h3>
  Notifications 
  <span class="nf-badge nf-badge-danger nf-badge-pill">3</span>
</h3>
```

### Status indicator

```html
<div class="nf-flex" style="align-items: center; gap: 0.5rem;">
  <span class="nf-badge nf-badge-success nf-badge-dot"></span>
  <span>Online</span>
</div>
```

### In a list

```html
<ul style="list-style: none; padding: 0;">
  <li style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0;">
    <span>Task 1</span>
    <span class="nf-badge nf-badge-success">Complete</span>
  </li>
  <li style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0;">
    <span>Task 2</span>
    <span class="nf-badge nf-badge-warning">In Progress</span>
  </li>
</ul>
```

---

## Related components

- [Avatar](./avatar.md) — Can have badge indicators
- [Button](./button.md) — Can contain badges
- [Card](./card.md) — Often contains badges