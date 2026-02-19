# JavaScript API

NativeFrame provides a simple, imperative JavaScript API for interactive components. All APIs are namespaced under the global `NF` object.

---

## Global object

When you include `nativeframe.js`, a global `NF` object becomes available:

```javascript
window.NF
// {
//   modal: { ... },
//   toast: { ... },
//   accordion: { ... },
//   tabs: { ... },
//   tooltip: { ... }
// }
```

---

## Auto-initialization

Most interactive components auto-initialize on `DOMContentLoaded` if they use data attributes. For example:

```html
<button data-modal-open="my-modal">Open Modal</button>
```

No JavaScript needed — the modal opens automatically when clicked.

---

## Manual API

You can also control components programmatically using the `NF` API.

---

## Modal API

### `NF.modal.open(target)`

Opens a modal.

**Parameters:**
- `target` (string | HTMLElement) — CSS selector or modal element

**Returns:** `void`

**Example:**

```javascript
// By selector
NF.modal.open('#my-modal');

// By element
const modal = document.getElementById('my-modal');
NF.modal.open(modal);
```

**Behavior:**
- Removes `hidden` attribute
- Adds `body` class to prevent scrolling
- Moves focus to first focusable element inside modal
- Traps focus inside modal
- Dispatches `nf:modal-open` custom event

---

### `NF.modal.close(target)`

Closes a modal.

**Parameters:**
- `target` (string | HTMLElement) — CSS selector or modal element

**Returns:** `void`

**Example:**

```javascript
NF.modal.close('#my-modal');
```

**Behavior:**
- Adds `hidden` attribute
- Removes body scroll lock
- Returns focus to element that opened the modal
- Dispatches `nf:modal-close` custom event

---

### Modal events

Listen for modal lifecycle events:

```javascript
const modal = document.getElementById('my-modal');

modal.addEventListener('nf:modal-open', (event) => {
  console.log('Modal opened:', event.target);
});

modal.addEventListener('nf:modal-close', (event) => {
  console.log('Modal closed:', event.target);
});
```

---

## Toast API

### `NF.toast.show(message, options)`

Shows a toast notification.

**Parameters:**
- `message` (string) — Toast message text
- `options` (object, optional):
  - `type` (string) — `'success'`, `'error'`, `'warning'`, `'info'` (default: `'info'`)
  - `duration` (number) — Auto-dismiss time in ms (default: `4000`, use `0` for persistent)
  - `dismissible` (boolean) — Show close button (default: `true`)
  - `position` (string) — `'bottom-right'`, `'bottom-left'`, `'top-right'`, `'top-left'` (default: `'bottom-right'`)

**Returns:** `HTMLElement` — The toast element

**Example:**

```javascript
// Simple success toast
NF.toast.show('Saved successfully!', { type: 'success' });

// Error toast with custom duration
NF.toast.show('Failed to save', { 
  type: 'error',
  duration: 6000 
});

// Persistent toast (must be manually dismissed)
NF.toast.show('New update available', { 
  type: 'info',
  duration: 0 
});

// Custom position
NF.toast.show('Welcome!', { 
  type: 'success',
  position: 'top-right' 
});
```

**Behavior:**
- Creates toast element dynamically
- Appends to `.nf-toast-region` (creates if doesn't exist)
- Auto-dismisses after `duration` ms
- Uses `aria-live="assertive"` for errors, `"polite"` for others
- Dispatches `nf:toast-shown` custom event

---

### `NF.toast.dismiss(toastElement)`

Manually dismisses a toast.

**Parameters:**
- `toastElement` (HTMLElement) — The toast element to dismiss

**Returns:** `void`

**Example:**

```javascript
const toast = NF.toast.show('Processing...', { duration: 0 });

// Later, dismiss it
setTimeout(() => {
  NF.toast.dismiss(toast);
}, 3000);
```

**Behavior:**
- Plays slide-out animation
- Removes element from DOM after animation
- Dispatches `nf:toast-dismissed` custom event

---

### `NF.toast.dismissAll()`

Dismisses all active toasts.

**Returns:** `void`

**Example:**

```javascript
NF.toast.dismissAll();
```

---

### Toast events

```javascript
document.addEventListener('nf:toast-shown', (event) => {
  console.log('Toast shown:', event.detail.message);
});

document.addEventListener('nf:toast-dismissed', (event) => {
  console.log('Toast dismissed:', event.target);
});
```

---

## Accordion API

### `NF.accordion.open(element)`

Opens an accordion panel.

**Parameters:**
- `element` (HTMLElement) — The `.nf-accordion-item` or `.nf-accordion-trigger` element

**Returns:** `void`

**Example:**

```javascript
const item = document.querySelector('.nf-accordion-item');
NF.accordion.open(item);
```

**Behavior:**
- Sets `aria-expanded="true"` on trigger
- Removes `hidden` from panel
- Adds `.is-open` class to item

---

### `NF.accordion.close(element)`

Closes an accordion panel.

**Parameters:**
- `element` (HTMLElement) — The `.nf-accordion-item` or `.nf-accordion-trigger` element

**Returns:** `void`

**Example:**

```javascript
NF.accordion.close(item);
```

---

### `NF.accordion.toggle(element)`

Toggles an accordion panel open/closed.

**Parameters:**
- `element` (HTMLElement) — The `.nf-accordion-item` or `.nf-accordion-trigger` element

**Returns:** `void`

**Example:**

```javascript
NF.accordion.toggle(item);
```

---

## Tabs API

### `NF.tabs.select(tabElement)`

Selects a tab and shows its associated panel.

**Parameters:**
- `tabElement` (HTMLElement) — The `.nf-tab` button element

**Returns:** `void`

**Example:**

```javascript
const tab = document.querySelector('.nf-tab[aria-controls="tab-2"]');
NF.tabs.select(tab);
```

**Behavior:**
- Sets `aria-selected="true"` on target tab, `"false"` on others
- Sets `tabindex="0"` on target tab, `"-1"` on others
- Shows target panel, hides others
- Moves focus to selected tab

---

## Tooltip API

### `NF.tooltip.show(element)`

Shows a tooltip for an element.

**Parameters:**
- `element` (HTMLElement) — The element with `data-tooltip` attribute

**Returns:** `void`

**Example:**

```javascript
const button = document.querySelector('[data-tooltip]');
NF.tooltip.show(button);
```

---

### `NF.tooltip.hide(element)`

Hides a tooltip for an element.

**Parameters:**
- `element` (HTMLElement) — The element with `data-tooltip` attribute

**Returns:** `void`

**Example:**

```javascript
NF.tooltip.hide(button);
```

---

## Data attribute API

Many components can be fully controlled via HTML data attributes without writing any JavaScript.

### Modal

```html
<!-- Open modal -->
<button data-modal-open="my-modal">Open</button>

<!-- Close modal -->
<button data-modal-close>Close</button>
```

### Accordion

```html
<!-- Single-open behavior (only one panel open at a time) -->
<div class="nf-accordion" data-accordion-single="true">
  <!-- ... -->
</div>
```

### Tooltip

```html
<!-- Tooltip content and position -->
<button data-tooltip="Helpful text" data-tooltip-pos="top">
  Hover me
</button>
```

---

## Custom events reference

All custom events are dispatched on the target element and bubble up the DOM.

| Event | Target | Detail | Description |
|-------|--------|--------|-------------|
| `nf:modal-open` | Modal element | `{}` | Modal opened |
| `nf:modal-close` | Modal element | `{}` | Modal closed |
| `nf:toast-shown` | Toast element | `{ message, type, duration }` | Toast shown |
| `nf:toast-dismissed` | Toast element | `{}` | Toast dismissed |

---

## Example: Form submission with toast feedback

```html
<form id="my-form">
  <input type="email" class="nf-input" name="email" required>
  <button type="submit" class="nf-btn nf-btn-primary">Submit</button>
</form>

<script>
  document.getElementById('my-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        NF.toast.show('Submitted successfully!', { type: 'success' });
        e.target.reset();
      } else {
        NF.toast.show('Failed to submit. Please try again.', { type: 'error' });
      }
    } catch (error) {
      NF.toast.show('Network error. Check your connection.', { type: 'error' });
    }
  });
</script>
```

---

## Example: Confirm action with modal

```html
<button id="delete-btn" class="nf-btn nf-btn-danger">Delete</button>

<div class="nf-modal" id="confirm-modal" hidden>
  <div class="nf-modal-overlay"></div>
  <div class="nf-modal-content">
    <div class="nf-modal-header">
      <h2 class="nf-modal-title">Confirm Delete</h2>
      <button class="nf-modal-close">&times;</button>
    </div>
    <div class="nf-modal-body">
      <p>Are you sure you want to delete this item?</p>
    </div>
    <div class="nf-modal-footer">
      <button class="nf-btn nf-btn-secondary" data-modal-close>Cancel</button>
      <button class="nf-btn nf-btn-danger" id="confirm-btn">Delete</button>
    </div>
  </div>
</div>

<script>
  document.getElementById('delete-btn').addEventListener('click', () => {
    NF.modal.open('#confirm-modal');
  });
  
  document.getElementById('confirm-btn').addEventListener('click', () => {
    // Perform delete action
    console.log('Item deleted');
    
    NF.modal.close('#confirm-modal');
    NF.toast.show('Item deleted', { type: 'success' });
  });
</script>
```

---

## Browser compatibility

The JavaScript API uses modern browser features:
- ES6+ syntax
- `CustomEvent`
- `IntersectionObserver` (for tooltips)
- `aria-*` attributes

Supports Chrome/Edge 90+, Firefox 88+, Safari 14+.

---

## Next steps

- [Accessibility](./accessibility.md) — Learn about keyboard navigation and ARIA patterns
- [Components](./components/button.md) — Browse component documentation
