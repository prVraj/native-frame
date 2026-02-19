# Toast

Toast notifications provide brief, non-blocking feedback messages that appear temporarily and dismiss automatically.

---

## Preview

```javascript
NF.toast.show('Success!', { type: 'success' });
```

---

## Basic usage

Toasts are created via JavaScript only (no HTML markup needed).

```javascript
NF.toast.show('Your changes have been saved');
```

---

## Types

### Success

```javascript
NF.toast.show('Saved successfully!', { type: 'success' });
```

### Error

```javascript
NF.toast.show('Something went wrong', { type: 'error' });
```

### Warning

```javascript
NF.toast.show('Please check your input', { type: 'warning' });
```

### Info (default)

```javascript
NF.toast.show('Here is some information', { type: 'info' });
```

---

## Options

### Duration

Auto-dismiss time in milliseconds (default: `6000`).

```javascript
// Dismiss after 6 seconds
NF.toast.show('Long message...', { duration: 6000 });

// Persistent (must be manually dismissed)
NF.toast.show('Important!', { duration: 0 });
```

---

### Position

Choose where toasts appear (default: `'bottom-right'`).

```javascript
NF.toast.show('Top right!', { position: 'top-right' });
NF.toast.show('Top left!', { position: 'top-left' });
NF.toast.show('Bottom right!', { position: 'bottom-right' });
NF.toast.show('Bottom left!', { position: 'bottom-left' });
```

---

### Dismissible

Show or hide close button (default: `true`).

```javascript
// Without close button
NF.toast.show('Auto-dismiss only', { dismissible: false, duration: 3000 });
```

---

## JavaScript API

### Show

```javascript
const toast = NF.toast.show(message, options);
```

**Parameters:**
- `message` (string) — Toast message
- `options` (object):
  - `type`: `'success'`, `'error'`, `'warning'`, `'info'`
  - `duration`: Auto-dismiss time in ms (`0` = persistent)
  - `dismissible`: Show close button
  - `position`: Where toast appears

**Returns:** `HTMLElement` — The toast element

---

### Dismiss

```javascript
const toast = NF.toast.show('Processing...', { duration: 0 });

// Later, dismiss manually
NF.toast.dismiss(toast);
```

---

### Dismiss all

```javascript
NF.toast.dismissAll();
```

---

## Events

```javascript
document.addEventListener('nf:toast-shown', (event) => {
  console.log('Toast shown:', event.target);
});

document.addEventListener('nf:toast-dismissed', (event) => {
  console.log('Toast dismissed:', event.target);
});
```

---

## CSS variables

| Variable | Default | Usage |
|----------|---------|-------|
| `--nf-z-toast` | `1400` | Toast z-index |
| `--nf-color-bg` | `#ffffff` | Toast background |
| `--nf-radius-md` | `8px` | Toast border radius |
| `--nf-shadow-lg` | `0 10px 15px...` | Toast shadow |

---

## Accessibility

- Uses `role="status"` for non-errors, `role="alert"` for errors
- Uses `aria-live="polite"` for info/success/warning
- Uses `aria-live="assertive"` for errors (announced immediately)
- Screen readers announce message automatically
- Focus does not move (non-blocking)
- Dismissible via close button or automatically

---

## Best practices

✅ **Do:**
- Keep messages short and actionable
- Use appropriate type (success for success, error for errors)
- Use for temporary feedback, not critical info
- Allow users to dismiss manually

❌ **Don't:**
- Show too many toasts at once (max 3-4 recommended)
- Use for error messages that require user action (use modal instead)
- Auto-dismiss error messages too quickly
- Use long or complex messages

---

## Common patterns

### Form submission feedback

```javascript
document.getElementById('my-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  try {
    await submitForm();
    NF.toast.show('Saved successfully!', { type: 'success' });
  } catch (error) {
    NF.toast.show('Failed to save. Please try again.', { type: 'error' });
  }
});
```

### Undo action

```javascript
let undoTimeout;

function deleteItem(id) {
  const item = getItem(id);
  removeItem(id);
  
  const toast = NF.toast.show('Item deleted', {
    type: 'info',
    duration: 5000
  });
  
  // Add undo button (requires modifying toast element)
  const undoBtn = document.createElement('button');
  undoBtn.textContent = 'Undo';
  undoBtn.className = 'nf-btn nf-btn-sm nf-btn-ghost';
  undoBtn.onclick = () => {
    restoreItem(item);
    NF.toast.dismiss(toast);
    NF.toast.show('Restored', { type: 'success' });
  };
  toast.querySelector('.nf-toast-message').appendChild(undoBtn);
}
```

---

## Related components

- [Modal](./modal.md) — For blocking confirmations
- [Badge](./badge.md) — For persistent status indicators