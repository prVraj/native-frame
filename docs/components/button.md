# Button

Buttons trigger actions and navigate between pages. They come in multiple variants, sizes, and states.

---

## Preview

```html
<button class="nf-btn nf-btn-primary">Primary Button</button>
<button class="nf-btn nf-btn-secondary">Secondary Button</button>
<button class="nf-btn nf-btn-outline">Outline Button</button>
```

---

## Basic usage

The base class is `.nf-btn`. Always combine with a variant class for proper styling.

```html
<button class="nf-btn nf-btn-primary">Click me</button>
```

---

## Variants

### Primary

Use for the main call-to-action.

```html
<button class="nf-btn nf-btn-primary">Primary</button>
```

### Secondary

Use for secondary actions.

```html
<button class="nf-btn nf-btn-secondary">Secondary</button>
```

### Outline

Use for less prominent actions.

```html
<button class="nf-btn nf-btn-outline">Outline</button>
```

### Ghost

Use for subtle, low-emphasis actions.

```html
<button class="nf-btn nf-btn-ghost">Ghost</button>
```

### Danger

Use for destructive actions (delete, remove, etc.).

```html
<button class="nf-btn nf-btn-danger">Delete</button>
```

---

## Sizes

### Small

```html
<button class="nf-btn nf-btn-primary nf-btn-sm">Small</button>
```

### Default

No modifier class needed.

```html
<button class="nf-btn nf-btn-primary">Default</button>
```

### Large

```html
<button class="nf-btn nf-btn-primary nf-btn-lg">Large</button>
```

---

## States

### Hover

Hover effects are automatic. No extra classes needed.

### Active (pressed)

Active state is automatic when clicking.

### Focus

Focus indicators appear automatically when navigating with keyboard.

### Disabled

Add the `disabled` attribute to disable a button.

```html
<button class="nf-btn nf-btn-primary" disabled>Disabled</button>
```

Disabled buttons:
- Cannot be clicked
- Show reduced opacity
- Have `cursor: not-allowed`

---

## Modifiers

### Icon-only

Square button for a single icon.

```html
<button class="nf-btn nf-btn-primary nf-btn-icon" aria-label="Star">
  ★
</button>
```

**Accessibility note:** Always include `aria-label` for icon-only buttons.

---

### Full width

Button stretches to fill container width.

```html
<button class="nf-btn nf-btn-primary nf-btn-full">Full Width</button>
```

---

### Loading

Shows a spinner and prevents interaction.

```html
<button class="nf-btn nf-btn-primary nf-btn-loading">Loading...</button>
```

Loading buttons:
- Show an animated spinner (CSS-only)
- Have `pointer-events: none` (cannot be clicked)
- Are not actually disabled (to preserve form submission)

---

## Button groups

Combine buttons in a horizontal cluster.

```html
<div class="nf-cluster">
  <button class="nf-btn nf-btn-outline">Cancel</button>
  <button class="nf-btn nf-btn-primary">Save</button>
</div>
```

---

## Links as buttons

You can style links to look like buttons.

```html
<a href="/signup" class="nf-btn nf-btn-primary">Sign up</a>
```

---

## CSS variables

Buttons use these design tokens:

| Variable | Default | Usage |
|----------|---------|-------|
| `--nf-color-primary` | `#0088FF` | Primary button background |
| `--nf-color-primary-hover` | `#0070D6` | Primary button hover |
| `--nf-color-primary-active` | `#005BB0` | Primary button active |
| `--nf-color-text-inverse` | `#ffffff` | Button text color |
| `--nf-spacing-3` | `0.75rem` | Button padding (vertical) |
| `--nf-spacing-4` | `1rem` | Button padding (horizontal) |
| `--nf-radius-md` | `8px` | Button border radius |
| `--nf-transition-base` | `150ms ease` | Hover transition |

---

## Customization examples

### Custom button color

```css
.nf-btn-custom {
  background-color: #ec4899;
  color: white;
}

.nf-btn-custom:hover {
  background-color: #db2777;
}
```

### Rounded pill button

```css
.nf-btn-pill {
  border-radius: var(--nf-radius-full);
}
```

---

## Accessibility

- Use semantic `<button>` element for actions
- Use `<a>` with `.nf-btn` classes for navigation
- Always provide visible text or `aria-label` for icon-only buttons
- Disabled buttons are not focusable and cannot be activated
- Focus indicators are visible by default (don't remove them)

### Keyboard navigation

| Key | Action |
|-----|--------|
| `Tab` | Move focus to button |
| `Enter` / `Space` | Activate button |

---

## Best practices

✅ **Do:**
- Use primary buttons sparingly (one per section)
- Provide clear, action-oriented labels ("Save", "Delete", "Sign up")
- Use danger variant for destructive actions
- Disable buttons during async operations (or use loading state)

❌ **Don't:**
- Use multiple primary buttons in close proximity
- Use vague labels like "Click here" or "Submit"
- Disable buttons without explanation (show error message instead)
- Remove focus indicators

---

## Common patterns

### Form action buttons

```html
<div class="nf-cluster" style="justify-content: flex-end;">
  <button type="button" class="nf-btn nf-btn-secondary">Cancel</button>
  <button type="submit" class="nf-btn nf-btn-primary">Save</button>
</div>
```

### Call-to-action with secondary option

```html
<div class="nf-cluster" style="justify-content: center;">
  <a href="/signup" class="nf-btn nf-btn-primary nf-btn-lg">Get Started</a>
  <a href="/learn-more" class="nf-btn nf-btn-outline nf-btn-lg">Learn More</a>
</div>
```

### Icon with text

```html
<button class="nf-btn nf-btn-primary">
  <span>⬇</span> Download
</button>
```

---

## Related components

- [Card](./card.md) — Often contains buttons in footer
- [Modal](./modal.md) — Uses buttons for actions
- [Input](./input.md) — Often paired with buttons in forms
