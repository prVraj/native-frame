# Input

Text inputs, textareas, labels, and form helpers for collecting user input.

---

## Preview

```html
<label class="nf-label" for="name">Name</label>
<input type="text" class="nf-input" id="name" placeholder="Enter your name">
```

---

## Basic usage

### Text input

```html
<div>
  <label class="nf-label" for="email">Email</label>
  <input type="email" class="nf-input" id="email" placeholder="you@example.com">
</div>
```

### Textarea

```html
<div>
  <label class="nf-label" for="bio">Bio</label>
  <textarea class="nf-textarea" id="bio" rows="4" placeholder="Tell us about yourself"></textarea>
</div>
```

---

## With helper text

```html
<div>
  <label class="nf-label" for="password">Password</label>
  <input type="password" class="nf-input" id="password">
  <span class="nf-help-text">Must be at least 8 characters</span>
</div>
```

---

## States

### Error state

```html
<div>
  <label class="nf-label" for="email-error">Email</label>
  <input type="email" class="nf-input nf-input-error" id="email-error" value="invalid" aria-invalid="true" aria-describedby="email-error-msg">
  <span class="nf-error-text" id="email-error-msg">Please enter a valid email address.</span>
</div>
```

### Success state

```html
<div>
  <label class="nf-label" for="username">Username</label>
  <input type="text" class="nf-input nf-input-success" id="username" value="johndoe">
  <span class="nf-help-text" style="color: var(--nf-color-success);">Username is available!</span>
</div>
```

### Disabled

```html
<div>
  <label class="nf-label" for="readonly">Readonly field</label>
  <input type="text" class="nf-input" id="readonly" value="Cannot edit" disabled>
</div>
```

### Read-only

```html
<input type="text" class="nf-input" value="Read only" readonly>
```

---

## Sizes

### Small

```html
<input type="text" class="nf-input nf-input-sm" placeholder="Small input">
```

### Default

No modifier needed.

```html
<input type="text" class="nf-input" placeholder="Default input">
```

### Large

```html
<input type="text" class="nf-input nf-input-lg" placeholder="Large input">
```

---

## Full width

```html
<input type="text" class="nf-input nf-input-full" placeholder="Full width">
```

---

## Input groups (with prefix/suffix)

### With prefix

```html
<div class="nf-input-group">
  <span class="nf-input-prefix">https://</span>
  <input type="text" class="nf-input" placeholder="example.com">
</div>
```

### With suffix

```html
<div class="nf-input-group">
  <input type="text" class="nf-input" placeholder="Search">
  <span class="nf-input-suffix">🔍</span>
</div>
```

### With both

```html
<div class="nf-input-group">
  <span class="nf-input-prefix">$</span>
  <input type="number" class="nf-input" placeholder="0.00">
  <span class="nf-input-suffix">USD</span>
</div>
```

---

## CSS variables

| Variable | Default | Usage |
|----------|---------|-------|
| `--nf-color-border` | `#e2e8f0` | Input border |
| `--nf-color-bg` | `#ffffff` | Input background |
| `--nf-color-text` | `#0f172a` | Input text |
| `--nf-color-primary` | `#0088FF` | Focus ring color |
| `--nf-color-danger` | `#dc2626` | Error border |
| `--nf-spacing-3` | `0.75rem` | Input padding |
| `--nf-radius-md` | `8px` | Input border radius |

---

## Accessibility

- Always associate `<label>` with input using `for` and `id` attributes
- Use `aria-describedby` to link error messages to inputs
- Add `aria-invalid="true"` for invalid inputs
- Never rely on placeholder as a label (it disappears on input)
- Disabled inputs are not focusable

### Keyboard navigation

| Key | Action |
|-----|--------|
| `Tab` | Move focus to input |
| `Shift + Tab` | Move focus to previous element |
| (Any key) | Type into input |

---

## Best practices

✅ **Do:**
- Always provide a visible label
- Use appropriate `type` attribute (`email`, `tel`, `url`, etc.)
- Show clear error messages below the input
- Use helper text for format requirements
- Make required fields obvious (with `*` or "Required" text)

❌ **Don't:**
- Use placeholder as a label
- Show error states before user interaction
- Hide labels visually (screen readers need them)
- Use vague error messages ("Invalid input")

---

## Common patterns

### Complete form field

```html
<div style="margin-bottom: 1rem;">
  <label class="nf-label" for="full-name">
    Full name <span style="color: var(--nf-color-danger);">*</span>
  </label>
  <input 
    type="text" 
    class="nf-input" 
    id="full-name" 
    required
    aria-required="true"
  >
</div>
```

### Search input

```html
<div class="nf-input-group">
  <input type="search" class="nf-input" placeholder="Search...">
  <button class="nf-btn nf-btn-primary" type="submit">Search</button>
</div>
```

### Validation example

```html
<form id="email-form">
  <div>
    <label class="nf-label" for="email-validate">Email</label>
    <input type="email" class="nf-input" id="email-validate" required>
    <span class="nf-error-text" id="email-validate-error" hidden>Please enter a valid email.</span>
  </div>
  <button type="submit" class="nf-btn nf-btn-primary">Submit</button>
</form>

<script>
  const form = document.getElementById('email-form');
  const input = document.getElementById('email-validate');
  const error = document.getElementById('email-validate-error');
  
  form.addEventListener('submit', (e) => {
    if (!input.validity.valid) {
      e.preventDefault();
      input.classList.add('nf-input-error');
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', 'email-validate-error');
      error.hidden = false;
    }
  });
  
  input.addEventListener('input', () => {
    if (input.validity.valid) {
      input.classList.remove('nf-input-error');
      input.removeAttribute('aria-invalid');
      error.hidden = true;
    }
  });
</script>
```

---

## Related components

- [Button](./button.md) — Often paired with inputs in forms
- [Select](./select.md) — Dropdown alternative to text input
- [Checkbox & Radio](./checkbox-radio.md) — Other form input types
