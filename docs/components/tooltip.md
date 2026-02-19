# Tooltip

Tooltips display helpful information when hovering or focusing on an element.

---

## Preview

```html
<button class="nf-btn nf-btn-secondary" data-tooltip="Helpful hint" data-tooltip-pos="top">
  Hover me
</button>
```

---

## Basic usage

Add `data-tooltip` attribute to any element.

```html
<button data-tooltip="This is a tooltip">
  Hover me
</button>
```

---

## Positions

```html
<button data-tooltip="Top tooltip" data-tooltip-pos="top">Top</button>
<button data-tooltip="Bottom tooltip" data-tooltip-pos="bottom">Bottom</button>
<button data-tooltip="Left tooltip" data-tooltip-pos="left">Left</button>
<button data-tooltip="Right tooltip" data-tooltip-pos="right">Right</button>
```

Default position: `top`

---

## JavaScript API

### Show

```javascript
const element = document.querySelector('[data-tooltip]');
NF.tooltip.show(element);
```

### Hide

```javascript
NF.tooltip.hide(element);
```

---

## CSS variables

| Variable | Default | Usage |
|----------|---------|-------|
| `--nf-z-tooltip` | `1300` | Tooltip z-index |
| `--nf-color-text-inverse` | `#ffffff` | Tooltip text |
| `--nf-color-text` | `#0f172a` | Tooltip background |
| `--nf-font-size-sm` | `0.875rem` | Tooltip font size |

---

## Accessibility

- Uses `role="tooltip"` on tooltip element
- `aria-describedby` links trigger to tooltip
- Shows on hover and focus
- Hides on mouseleave and blur
- Announced by screen readers

---

## Best practices

✅ **Do:**
- Keep tooltip text short (1-2 sentences max)
- Use for supplementary information
- Ensure trigger is keyboard focusable
- Use for icons that need explanation

❌ **Don't:**
- Put critical information in tooltips
- Use for long explanations (use a modal instead)
- Put interactive content in tooltips (use a popover instead)
- Use on mobile-only interfaces (no hover support)

---

## Common patterns

### Icon button with tooltip

```html
<button class="nf-btn nf-btn-icon" data-tooltip="Add to favorites" data-tooltip-pos="top" aria-label="Add to favorites">
  ★
</button>
```

### Form field hint

```html
<label class="nf-label" for="username">
  Username
  <span data-tooltip="Lowercase letters and numbers only" data-tooltip-pos="right" style="cursor: help;">
    ℹ️
  </span>
</label>
<input type="text" class="nf-input" id="username">
```

---

## Related components

- [Button](./button.md) — Often enhanced with tooltips
- [Badge](./badge.md) — Alternative for status labels