# Modal

Modals (dialogs) display content in a layer above the page, requiring user interaction before continuing.

---

## Preview

```html
<button class="nf-btn nf-btn-primary" data-modal-open="demo-modal">Open Modal</button>

<div class="nf-modal" id="demo-modal" hidden>
  <div class="nf-modal-overlay"></div>
  <div class="nf-modal-content">
    <div class="nf-modal-header">
      <h2 class="nf-modal-title">Modal Title</h2>
      <button class="nf-modal-close" aria-label="Close">&times;</button>
    </div>
    <div class="nf-modal-body">
      <p>Modal content goes here.</p>
    </div>
    <div class="nf-modal-footer">
      <button class="nf-btn nf-btn-secondary" data-modal-close>Cancel</button>
      <button class="nf-btn nf-btn-primary" data-modal-close>Confirm</button>
    </div>
  </div>
</div>
```

---

## Basic usage

### HTML structure

```html
<div class="nf-modal" id="my-modal" role="dialog" aria-modal="true" aria-labelledby="my-modal-title" hidden>
  <div class="nf-modal-overlay"></div>
  <div class="nf-modal-content">
    <div class="nf-modal-header">
      <h2 id="my-modal-title" class="nf-modal-title">Title</h2>
      <button class="nf-modal-close" aria-label="Close modal">&times;</button>
    </div>
    <div class="nf-modal-body">
      Content
    </div>
    <div class="nf-modal-footer">
      <button class="nf-btn nf-btn-secondary" data-modal-close>Cancel</button>
      <button class="nf-btn nf-btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

---

## Opening modals

### With data attribute (no JavaScript)

```html
<button data-modal-open="my-modal">Open</button>
```

### With JavaScript API

```javascript
NF.modal.open('#my-modal');
```

---

## Closing modals

Modals close via:
1. **Escape key**
2. **Clicking the overlay**
3. **Close button** (`.nf-modal-close`)
4. **Data attribute**: `data-modal-close`
5. **JavaScript API**: `NF.modal.close('#my-modal')`

```html
<!-- Close button -->
<button class="nf-modal-close" aria-label="Close">&times;</button>

<!-- Data attribute (any element) -->
<button data-modal-close>Cancel</button>
```

---

## Sizes

### Default

No modifier needed.

### Small

```html
<div class="nf-modal-content nf-modal-sm">
  <!-- ... -->
</div>
```

### Large

```html
<div class="nf-modal-content nf-modal-lg">
  <!-- ... -->
</div>
```

### Full screen

```html
<div class="nf-modal-content nf-modal-full">
  <!-- ... -->
</div>
```

---

## Without header/footer

```html
<div class="nf-modal" id="simple-modal" hidden>
  <div class="nf-modal-overlay"></div>
  <div class="nf-modal-content">
    <div class="nf-modal-body">
      <p>Simple modal with just body content.</p>
      <button class="nf-btn nf-btn-primary" data-modal-close>Close</button>
    </div>
  </div>
</div>
```

---

## JavaScript API

### Open

```javascript
NF.modal.open('#my-modal');
```

### Close

```javascript
NF.modal.close('#my-modal');
```

### Events

```javascript
const modal = document.getElementById('my-modal');

modal.addEventListener('nf:modal-open', () => {
  console.log('Modal opened');
});

modal.addEventListener('nf:modal-close', () => {
  console.log('Modal closed');
});
```

---

## CSS variables

| Variable | Default | Usage |
|----------|---------|-------|
| `--nf-z-modal` | `1200` | Modal z-index |
| `--nf-color-bg` | `#ffffff` | Modal background |
| `--nf-radius-lg` | `12px` | Modal border radius |
| `--nf-shadow-xl` | `0 20px 25px...` | Modal shadow |

---

## Accessibility

- Uses `role="dialog"` and `aria-modal="true"`
- Focus moves to first focusable element on open
- Focus trapped inside modal (Tab cycles within modal only)
- Escape key closes modal
- Focus returns to trigger element on close
- Background content is inert (cannot be clicked or focused)
- Always provide `aria-labelledby` pointing to modal title

### Keyboard navigation

| Key | Action |
|-----|--------|
| `Escape` | Close modal |
| `Tab` | Move to next element inside modal |
| `Shift + Tab` | Move to previous element inside modal |

---

## Best practices

✅ **Do:**
- Use for content that requires immediate attention
- Always provide a way to close (X button, Cancel, Escape)
- Keep content focused and concise
- Use for confirmations before destructive actions

❌ **Don't:**
- Use for complex multi-step forms (use multiple pages instead)
- Nest modals inside modals
- Auto-open modals on page load (poor UX)
- Use for non-critical content (use a tooltip or popover instead)

---

## Common patterns

### Confirmation dialog

```html
<button id="delete-btn" class="nf-btn nf-btn-danger">Delete Item</button>

<div class="nf-modal" id="confirm-delete" hidden>
  <div class="nf-modal-overlay"></div>
  <div class="nf-modal-content nf-modal-sm">
    <div class="nf-modal-header">
      <h2 class="nf-modal-title">Confirm Delete</h2>
      <button class="nf-modal-close" aria-label="Close">&times;</button>
    </div>
    <div class="nf-modal-body">
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    </div>
    <div class="nf-modal-footer">
      <button class="nf-btn nf-btn-secondary" data-modal-close>Cancel</button>
      <button class="nf-btn nf-btn-danger" id="confirm-delete-btn">Delete</button>
    </div>
  </div>
</div>

<script>
  document.getElementById('delete-btn').addEventListener('click', () => {
    NF.modal.open('#confirm-delete');
  });
  
  document.getElementById('confirm-delete-btn').addEventListener('click', () => {
    // Perform delete
    console.log('Item deleted');
    NF.modal.close('#confirm-delete');
    NF.toast.show('Item deleted', { type: 'success' });
  });
</script>
```

### Form in modal

```html
<div class="nf-modal" id="form-modal" hidden>
  <div class="nf-modal-overlay"></div>
  <div class="nf-modal-content">
    <div class="nf-modal-header">
      <h2 class="nf-modal-title">Add New Item</h2>
      <button class="nf-modal-close" aria-label="Close">&times;</button>
    </div>
    <form id="modal-form">
      <div class="nf-modal-body">
        <div style="margin-bottom: 1rem;">
          <label class="nf-label" for="item-name">Item Name</label>
          <input type="text" class="nf-input" id="item-name" required>
        </div>
      </div>
      <div class="nf-modal-footer">
        <button type="button" class="nf-btn nf-btn-secondary" data-modal-close>Cancel</button>
        <button type="submit" class="nf-btn nf-btn-primary">Save</button>
      </div>
    </form>
  </div>
</div>
```

---

## Related components

- [Toast](./toast.md) — For non-blocking notifications
- [Button](./button.md) — Triggers and actions in modals
- [Card](./card.md) — Similar container styling
