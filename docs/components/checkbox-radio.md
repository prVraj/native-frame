# Checkbox & Radio

Checkboxes allow multiple selections. Radio buttons allow a single selection from a group.

---

## Preview

```html
<label class="nf-checkbox-label">
  <input type="checkbox" class="nf-checkbox" checked> Option A
</label>

<label class="nf-radio-label">
  <input type="radio" class="nf-radio" name="choice" checked> Choice 1
</label>
```

---

## Checkbox

### Basic usage

```html
<label class="nf-checkbox-label">
  <input type="checkbox" class="nf-checkbox"> Accept terms
</label>
```

### Checked

```html
<label class="nf-checkbox-label">
  <input type="checkbox" class="nf-checkbox" checked> Checked
</label>
```

### Disabled

```html
<label class="nf-checkbox-label">
  <input type="checkbox" class="nf-checkbox" disabled> Disabled
</label>
```

### Checkbox group

```html
<div class="nf-checkbox-group">
  <label class="nf-checkbox-label">
    <input type="checkbox" class="nf-checkbox" checked> Option A
  </label>
  <label class="nf-checkbox-label">
    <input type="checkbox" class="nf-checkbox"> Option B
  </label>
  <label class="nf-checkbox-label">
    <input type="checkbox" class="nf-checkbox"> Option C
  </label>
</div>
```

---

## Radio

### Basic usage

```html
<label class="nf-radio-label">
  <input type="radio" class="nf-radio" name="size" value="small" checked> Small
</label>
<label class="nf-radio-label">
  <input type="radio" class="nf-radio" name="size" value="medium"> Medium
</label>
<label class="nf-radio-label">
  <input type="radio" class="nf-radio" name="size" value="large"> Large
</label>
```

### Radio group

```html
<fieldset style="border: none; padding: 0;">
  <legend class="nf-label">Choose a size</legend>
  <div class="nf-radio-group">
    <label class="nf-radio-label">
      <input type="radio" class="nf-radio" name="size" value="s" checked> Small
    </label>
    <label class="nf-radio-label">
      <input type="radio" class="nf-radio" name="size" value="m"> Medium
    </label>
    <label class="nf-radio-label">
      <input type="radio" class="nf-radio" name="size" value="l"> Large
    </label>
  </div>
</fieldset>
```

---

## CSS variables

| Variable | Default | Usage |
|----------|---------|-------|
| `--nf-color-primary` | `#0088FF` | Checked state |
| `--nf-color-border` | `#e2e8f0` | Unchecked border |
| `--nf-spacing-2` | `0.5rem` | Spacing in groups |

---

## Accessibility

- Always use `<label>` associated with input
- Use `<fieldset>` and `<legend>` for groups
- Disabled inputs are not focusable
- Radio buttons in the same group must have same `name` attribute

### Keyboard navigation

| Key | Action |
|-----|--------|
| `Tab` | Move to next input |
| `Space` | Check/uncheck checkbox |
| `Arrow keys` | Navigate between radios in a group |

---

## Best practices

✅ **Do:**
- Always provide a label
- Use fieldset/legend for groups
- Use checkboxes for multiple selections
- Use radios for single selection

❌ **Don't:**
- Use radio buttons for yes/no (use checkbox or toggle)
- Have only one radio button (use checkbox instead)
- Use checkbox for mutually exclusive options

---

## Common patterns

### Terms and conditions

```html
<label class="nf-checkbox-label">
  <input type="checkbox" class="nf-checkbox" required>
  I agree to the <a href="/terms">Terms and Conditions</a>
</label>
```

### Filter options

```html
<fieldset style="border: none; padding: 0;">
  <legend class="nf-label">Filter by status</legend>
  <div class="nf-checkbox-group">
    <label class="nf-checkbox-label">
      <input type="checkbox" class="nf-checkbox" name="status" value="active" checked> Active
    </label>
    <label class="nf-checkbox-label">
      <input type="checkbox" class="nf-checkbox" name="status" value="pending"> Pending
    </label>
    <label class="nf-checkbox-label">
      <input type="checkbox" class="nf-checkbox" name="status" value="completed"> Completed
    </label>
  </div>
</fieldset>
```

---

## Related components

- [Toggle](./toggle.md) — Switch-style checkbox
- [Input](./input.md) — Other form inputs
- [Button](./button.md) — Form submission