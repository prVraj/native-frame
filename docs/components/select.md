# Select

Dropdown menus for selecting from a list of options.

---

## Preview

```html
<label class="nf-label" for="country">Country</label>
<div class="nf-select-wrapper">
  <select class="nf-select" id="country">
    <option value="">Select a country</option>
    <option>United States</option>
    <option>Canada</option>
    <option>United Kingdom</option>
  </select>
</div>
```

---

## Basic usage

Always wrap `<select>` in `.nf-select-wrapper` for custom styling.

```html
<div class="nf-select-wrapper">
  <select class="nf-select">
    <option value="">Choose an option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>
```

---

## With label

```html
<label class="nf-label" for="timezone">Timezone</label>
<div class="nf-select-wrapper">
  <select class="nf-select" id="timezone">
    <option value="">Select timezone</option>
    <option value="est">Eastern (EST)</option>
    <option value="cst">Central (CST)</option>
    <option value="mst">Mountain (MST)</option>
    <option value="pst">Pacific (PST)</option>
  </select>
</div>
```

---

## States

### Disabled

```html
<div class="nf-select-wrapper">
  <select class="nf-select" disabled>
    <option>Cannot select</option>
  </select>
</div>
```

### Error

```html
<label class="nf-label" for="category">Category</label>
<div class="nf-select-wrapper">
  <select class="nf-select nf-select-error" id="category" aria-invalid="true" aria-describedby="category-error">
    <option value="">Choose a category</option>
    <option>Option 1</option>
  </select>
</div>
<span class="nf-error-text" id="category-error">Please select a category.</span>
```

---

## Sizes

### Small

```html
<div class="nf-select-wrapper">
  <select class="nf-select nf-select-sm">
    <option>Small</option>
  </select>
</div>
```

### Default

No modifier needed.

### Large

```html
<div class="nf-select-wrapper">
  <select class="nf-select nf-select-lg">
    <option>Large</option>
  </select>
</div>
```

---

## Option groups

```html
<div class="nf-select-wrapper">
  <select class="nf-select">
    <option value="">Choose a fruit</option>
    <optgroup label="Citrus">
      <option>Orange</option>
      <option>Lemon</option>
      <option>Lime</option>
    </optgroup>
    <optgroup label="Berries">
      <option>Strawberry</option>
      <option>Blueberry</option>
    </optgroup>
  </select>
</div>
```

---

## CSS variables

| Variable | Default | Usage |
|----------|---------|-------|
| `--nf-color-border` | `#e2e8f0` | Select border |
| `--nf-color-bg` | `#ffffff` | Select background |
| `--nf-color-primary` | `#6366f1` | Focus ring |
| `--nf-spacing-3` | `0.75rem` | Select padding |

---

## Accessibility

- Always associate `<label>` with select
- Use descriptive first option ("Choose..." not just "Select")
- Add `aria-invalid` and `aria-describedby` for error states
- Keyboard navigable by default (native `<select>`)

### Keyboard navigation

| Key | Action |
|-----|--------|
| `Tab` | Move focus to select |
| `Space` / `Enter` | Open dropdown |
| `Arrow Up/Down` | Navigate options |
| `Escape` | Close dropdown |

---

## Best practices

✅ **Do:**
- Use native `<select>` for accessibility
- Provide a default "Choose..." option
- Use optgroups for long lists
- Sort options logically (alphabetical or by frequency)

❌ **Don't:**
- Use for very long lists (>20 items, use autocomplete instead)
- Omit labels
- Use placeholder as label

---

## Common patterns

### Country selector

```html
<label class="nf-label" for="country">Country</label>
<div class="nf-select-wrapper">
  <select class="nf-select" id="country" required>
    <option value="">Select your country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
    <option value="au">Australia</option>
  </select>
</div>
```

---

## Related components

- [Input](./input.md) — Other form inputs
- [Checkbox & Radio](./checkbox-radio.md) — Alternative for selections
- [Button](./button.md) — Form submission