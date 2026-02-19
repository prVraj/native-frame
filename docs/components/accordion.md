# Accordion

Accordions show and hide sections of content with collapsible panels.

---

## Preview

```html
<div class="nf-accordion">
  <div class="nf-accordion-item">
    <button class="nf-accordion-trigger" aria-expanded="false">
      What is NativeFrame?
    </button>
    <div class="nf-accordion-panel" hidden>
      <p>NativeFrame is a lightweight UI library...</p>
    </div>
  </div>
</div>
```

---

## Basic usage

```html
<div class="nf-accordion">
  <div class="nf-accordion-item">
    <button class="nf-accordion-trigger" aria-expanded="false" aria-controls="panel-1">
      First Item
    </button>
    <div class="nf-accordion-panel" id="panel-1" hidden>
      <p>Content for first item.</p>
    </div>
  </div>
  
  <div class="nf-accordion-item">
    <button class="nf-accordion-trigger" aria-expanded="false" aria-controls="panel-2">
      Second Item
    </button>
    <div class="nf-accordion-panel" id="panel-2" hidden>
      <p>Content for second item.</p>
    </div>
  </div>
</div>
```

---

## Single-open mode

Only one panel can be open at a time.

```html
<div class="nf-accordion" data-accordion-single="true">
  <!-- accordion items -->
</div>
```

---

## JavaScript API

### Open

```javascript
const item = document.querySelector('.nf-accordion-item');
NF.accordion.open(item);
```

### Close

```javascript
NF.accordion.close(item);
```

### Toggle

```javascript
NF.accordion.toggle(item);
```

---

## CSS variables

| Variable | Default | Usage |
|----------|---------|-------|
| `--nf-color-border` | `#e2e8f0` | Item border |
| `--nf-spacing-4` | `1rem` | Trigger padding |
| `--nf-transition-base` | `150ms ease` | Panel animation |

---

## Accessibility

- Uses `<button>` for triggers
- `aria-expanded="true"` when open, `"false"` when closed
- `aria-controls` links trigger to panel
- `hidden` attribute on closed panels
- Keyboard: Enter/Space toggles, Escape closes

### Keyboard navigation

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Toggle panel |
| `Escape` | Close panel |
| `Tab` | Move to next trigger |

---

## Best practices

✅ **Do:**
- Use for FAQs, documentation sections
- Keep panel content concise
- Use descriptive trigger labels
- Consider single-open mode for long lists

❌ **Don't:**
- Nest accordions inside accordions
- Use for primary navigation
- Hide critical content that users need immediately

---

## Common patterns

### FAQ

```html
<div class="nf-accordion" data-accordion-single="true">
  <div class="nf-accordion-item">
    <button class="nf-accordion-trigger" aria-expanded="false">
      How do I get started?
    </button>
    <div class="nf-accordion-panel" hidden>
      <p>Start by including the CSS and JS files...</p>
    </div>
  </div>
  
  <div class="nf-accordion-item">
    <button class="nf-accordion-trigger" aria-expanded="false">
      Is it free to use?
    </button>
    <div class="nf-accordion-panel" hidden>
      <p>Yes! NativeFrame is open source and MIT licensed.</p>
    </div>
  </div>
</div>
```

---

## Related components

- [Tabs](./tabs.md) — Alternative for organizing content
- [Card](./card.md) — Can contain accordions