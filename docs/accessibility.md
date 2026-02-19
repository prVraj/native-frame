# Accessibility

Accessibility is a core principle of NativeFrame, not an afterthought. Every interactive component ships with proper ARIA patterns, keyboard navigation, and focus management built in.

---

## Principles

1. **Semantic HTML first** — Use native elements whenever possible
2. **Keyboard accessible** — Every interactive element must be keyboard-operable
3. **ARIA when needed** — Use ARIA to enhance, not replace, semantic HTML
4. **Focus management** — Visible focus indicators and logical focus flow
5. **Screen reader friendly** — Proper labels, roles, and live regions
6. **Motion sensitivity** — Respect `prefers-reduced-motion`

---

## Keyboard navigation reference

### Global patterns

| Key | Action |
|-----|--------|
| `Tab` | Move focus to next focusable element |
| `Shift + Tab` | Move focus to previous focusable element |
| `Enter` | Activate button or link |
| `Space` | Activate button, check/uncheck checkbox |
| `Escape` | Close modal, tooltip, or dismiss toast |

---

### Component-specific keyboard navigation

#### Accordion

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Toggle accordion panel |
| `Escape` | Close focused panel (if open) |

**ARIA pattern:**
- `role="button"` on trigger (implicit via `<button>`)
- `aria-expanded="true"` when open, `"false"` when closed
- `aria-controls` links trigger to panel ID

---

#### Tabs

| Key | Action |
|-----|--------|
| `Tab` | Move focus into tab list, then out to panel content |
| `Arrow Left` | Move to previous tab |
| `Arrow Right` | Move to next tab |
| `Home` | Move to first tab |
| `End` | Move to last tab |
| `Enter` / `Space` | Activate focused tab |

**ARIA pattern:**
- `role="tablist"` on container
- `role="tab"` on each tab button
- `role="tabpanel"` on each panel
- `aria-selected="true"` on active tab, `"false"` on others
- `aria-controls` links tab to panel ID
- `tabindex="0"` on active tab, `"-1"` on inactive tabs (roving tabindex)

---

#### Modal

| Key | Action |
|-----|--------|
| `Escape` | Close modal |
| `Tab` | Move focus to next element *inside modal* (focus trapped) |
| `Shift + Tab` | Move focus to previous element *inside modal* |

**ARIA pattern:**
- `role="dialog"` on modal container
- `aria-modal="true"` prevents screen readers from accessing background content
- `aria-labelledby` points to modal title ID
- Focus moves to first focusable element on open
- Focus returns to trigger element on close

---

#### Tooltip

| Key | Action |
|-----|--------|
| `Focus` | Show tooltip |
| `Blur` | Hide tooltip |
| `Escape` | Hide tooltip |

**ARIA pattern:**
- `role="tooltip"` on tooltip element
- `aria-describedby` on trigger points to tooltip ID
- Tooltip content announced by screen readers on focus

---

#### Button

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Activate button |

**ARIA pattern:**
- Use native `<button>` element (implicit `role="button"`)
- Provide visible label or `aria-label` for icon-only buttons
- `:disabled` state prevents interaction

---

#### Checkbox & Radio

| Key | Action |
|-----|--------|
| `Space` | Check/uncheck checkbox |
| `Arrow keys` | Navigate between radios in a group |

**ARIA pattern:**
- Use native `<input type="checkbox">` and `<input type="radio">`
- Associate `<label>` via `for` attribute
- Use `<fieldset>` and `<legend>` for groups

---

#### Toggle (Switch)

| Key | Action |
|-----|--------|
| `Space` | Toggle on/off |

**ARIA pattern:**
- Built on native `<input type="checkbox">`
- `role="switch"` (implicit from CSS styling)
- `aria-checked="true"` when on, `"false"` when off
- Visible label via associated `<label>`

---

## Focus management

### Visible focus indicators

All interactive elements have visible focus indicators. We use `outline` (not `box-shadow`) for maximum visibility:

```css
.nf-btn:focus-visible {
  outline: 2px solid var(--nf-color-primary);
  outline-offset: 2px;
}
```

**Never remove focus outlines** — They're essential for keyboard users.

---

### Focus trapping (Modal)

When a modal opens:
1. Focus moves to the first focusable element inside the modal
2. `Tab` and `Shift + Tab` cycle only through modal content
3. Background content is inert (cannot be focused or clicked)
4. On close, focus returns to the element that opened the modal

This is handled automatically by `NF.modal`.

---

### Focus order

Ensure logical tab order by:
1. Using semantic HTML in document order
2. Avoiding positive `tabindex` values (only use `0` or `-1`)
3. Testing with keyboard navigation

---

## ARIA patterns used

NativeFrame follows [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/) patterns.

### Accordion

```html
<div class="nf-accordion">
  <div class="nf-accordion-item">
    <button class="nf-accordion-trigger" aria-expanded="false" aria-controls="panel-1">
      Title
    </button>
    <div class="nf-accordion-panel" id="panel-1" hidden>
      Content
    </div>
  </div>
</div>
```

---

### Tabs

```html
<div class="nf-tabs" role="tablist">
  <button class="nf-tab" role="tab" aria-selected="true" aria-controls="panel-1" tabindex="0">Tab 1</button>
  <button class="nf-tab" role="tab" aria-selected="false" aria-controls="panel-2" tabindex="-1">Tab 2</button>
</div>
<div class="nf-tab-panel" id="panel-1" role="tabpanel">Panel 1</div>
<div class="nf-tab-panel" id="panel-2" role="tabpanel" hidden>Panel 2</div>
```

---

### Modal

```html
<div class="nf-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden>
  <div class="nf-modal-overlay"></div>
  <div class="nf-modal-content">
    <div class="nf-modal-header">
      <h2 id="modal-title" class="nf-modal-title">Title</h2>
      <button class="nf-modal-close" aria-label="Close modal">&times;</button>
    </div>
    <div class="nf-modal-body">Content</div>
  </div>
</div>
```

---

### Toast

```html
<div class="nf-toast-region" aria-live="polite" aria-atomic="false">
  <div class="nf-toast" role="status">
    <span class="nf-toast-message">Message</span>
    <button class="nf-toast-close" aria-label="Dismiss">&times;</button>
  </div>
</div>
```

- Uses `aria-live="assertive"` for errors (immediate announcement)
- Uses `aria-live="polite"` for success/info (announced after current speech)

---

### Tooltip

```html
<button class="nf-btn" data-tooltip="Helpful text" aria-describedby="tooltip-1">
  Hover me
</button>

<!-- Generated by JS -->
<div id="tooltip-1" role="tooltip">Helpful text</div>
```

---

## Color contrast

All default color combinations meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text).

### Default text colors

- Text on light background: `#0f172a` on `#ffffff` (16.1:1) ✓
- Muted text on light: `#64748b` on `#ffffff` (5.3:1) ✓
- Text on dark background: `#f1f5f9` on `#0f172a` (14.4:1) ✓
- Primary button: `#ffffff` on `#6366f1` (6.2:1) ✓

### Test your custom colors

When customizing tokens, always verify contrast ratios:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessible Colors](https://accessible-colors.com/)

---

## Motion sensitivity

NativeFrame respects the `prefers-reduced-motion` media query for users sensitive to motion.

```css
@media (prefers-reduced-motion: reduce) {
  .nf-skeleton {
    animation: none; /* Disable shimmer animation */
  }
  
  .nf-modal-content {
    animation: none; /* Disable scale animation */
  }
}
```

Affected components:
- Skeleton loaders (no shimmer)
- Modal (no scale-in animation)
- Toast (no slide-in animation)
- Transitions (reduced duration)

---

## Screen reader support

### Labels

Always provide labels for form inputs:

```html
<!-- Good -->
<label class="nf-label" for="email">Email</label>
<input type="email" class="nf-input" id="email">

<!-- Bad -->
<input type="email" class="nf-input" placeholder="Email">
```

Placeholders are not labels — they disappear on input and are not reliably announced.

---

### Icon-only buttons

Always provide accessible labels for icon-only buttons:

```html
<!-- Good -->
<button class="nf-btn nf-btn-icon" aria-label="Close">
  &times;
</button>

<!-- Bad -->
<button class="nf-btn nf-btn-icon">
  &times;
</button>
```

---

### Error messages

Associate error messages with inputs using `aria-describedby`:

```html
<label class="nf-label" for="email">Email</label>
<input 
  type="email" 
  class="nf-input nf-input-error" 
  id="email"
  aria-describedby="email-error"
  aria-invalid="true"
>
<span class="nf-error-text" id="email-error">Please enter a valid email.</span>
```

---

## Testing accessibility

### Automated testing

Use [axe-core](https://github.com/dequelabs/axe-core) or [axe DevTools](https://www.deque.com/axe/devtools/) to catch common issues:

```bash
npm run audit
```

This runs the included `tests/accessibility/axe-audit.js` script.

---

### Manual testing

1. **Keyboard navigation** — Can you reach every interactive element with `Tab`?
2. **Focus visibility** — Is the focused element clearly visible?
3. **Screen reader** — Test with VoiceOver (macOS), NVDA (Windows), or JAWS
4. **Color blindness** — Use [Chrome DevTools color vision deficiency simulation](https://developer.chrome.com/docs/devtools/accessibility/reference/#emulate-vision-deficiencies)
5. **Zoom** — Test at 200% zoom (WCAG requirement)

---

## Common mistakes to avoid

❌ **Don't remove focus outlines**

```css
/* Bad */
button:focus {
  outline: none;
}
```

✅ **Do enhance them**

```css
/* Good */
button:focus-visible {
  outline: 2px solid var(--nf-color-primary);
  outline-offset: 2px;
}
```

---

❌ **Don't use `<div>` as a button**

```html
<!-- Bad -->
<div class="nf-btn" onclick="...">Click me</div>
```

✅ **Do use semantic `<button>`**

```html
<!-- Good -->
<button class="nf-btn">Click me</button>
```

---

❌ **Don't rely on color alone**

```html
<!-- Bad -->
<span style="color: red;">Error</span>
```

✅ **Do combine color with text or icon**

```html
<!-- Good -->
<span class="nf-error-text">
  <strong>Error:</strong> Please fix the following issues.
</span>
```

---

## Resources

- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Accessibility Guides](https://webaim.org/resources/)
- [MDN Accessibility Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Next steps

- [Components](./components/button.md) — Browse component documentation
- [JavaScript API](./javascript-api.md) — Learn the interactive component API
