# Toggle

Toggle switches are an alternative to checkboxes for on/off states.

---

## Preview

```html
<label class="nf-checkbox-label">
  <input type="checkbox" class="nf-toggle" checked> Enable notifications
</label>
```

---

## Basic usage

Built on native `<input type="checkbox">` with `.nf-toggle` class.

```html
<label class="nf-checkbox-label">
  <input type="checkbox" class="nf-toggle"> Enable feature
</label>
```

---

## Checked

```html
<label class="nf-checkbox-label">
  <input type="checkbox" class="nf-toggle" checked> Enabled
</label>
```

---

## Disabled

```html
<label class="nf-checkbox-label">
  <input type="checkbox" class="nf-toggle" disabled> Disabled
</label>
```

---

## Sizes

### Small

```html
<label class="nf-checkbox-label">
  <input type="checkbox" class="nf-toggle nf-toggle-sm"> Small toggle
</label>
```

### Default

No modifier needed.

### Large

```html
<label class="nf-checkbox-label">
  <input type="checkbox" class="nf-toggle nf-toggle-lg"> Large toggle
</label>
```

---

## Horizontal layout

```html
<div style="display: flex; align-items: center; gap: 0.75rem;">
  <input type="checkbox" class="nf-toggle" id="dark-mode">
  <label class="nf-label" for="dark-mode" style="margin: 0;">Dark Mode</label>
</div>
```

---

## CSS variables

| Variable | Default | Usage |
|----------|---------|-------|
| `--nf-color-primary` | `#0088FF` | Toggle active background |
| `--nf-color-border` | `#e2e8f0` | Toggle inactive border |
| `--nf-transition-base` | `150ms ease` | Toggle animation |

---

## Accessibility

- Uses native `<input type="checkbox">`
- Includes proper focus indicators
- Space key toggles
- Label must be associated with input

### Keyboard navigation

| Key | Action |
|-----|--------|
| `Tab` | Move focus to toggle |
| `Space` | Toggle on/off |

---

## Best practices

✅ **Do:**
- Use for instant on/off actions (dark mode, notifications)
- Always provide a label
- Use for settings and preferences
- Show immediate feedback (no "Save" button needed)

❌ **Don't:**
- Use for actions that require confirmation (use checkbox + button)
- Use multiple toggles for mutually exclusive options (use radio instead)
- Use without a label

---

## Common patterns

### Settings panel

```html
<div style="max-width: 400px;">
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; border-bottom: 1px solid var(--nf-color-border);">
    <div>
      <div style="font-weight: 600;">Email notifications</div>
      <div style="font-size: 0.875rem; color: var(--nf-color-text-muted);">Receive updates via email</div>
    </div>
    <input type="checkbox" class="nf-toggle" id="email-notif" checked>
  </div>
  
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; border-bottom: 1px solid var(--nf-color-border);">
    <div>
      <div style="font-weight: 600;">Dark mode</div>
      <div style="font-size: 0.875rem; color: var(--nf-color-text-muted);">Use dark theme</div>
    </div>
    <input type="checkbox" class="nf-toggle" id="dark-mode">
  </div>
</div>
```

---

## Related components

- [Checkbox](./checkbox-radio.md) — Traditional checkbox style
- [Input](./input.md) — Other form inputs