# Quick Start

Get up and running with NativeFrame in under 60 seconds.

---

## Step 1: Create an HTML file

Create a new file called `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My NativeFrame App</title>
  
  <!-- NativeFrame CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nativeframe@0.1/dist/nativeframe.min.css">
</head>
<body>
  
  <div class="nf-container" style="padding: 2rem;">
    <!-- Your content goes here -->
  </div>
  
  <!-- NativeFrame JS (optional, for interactive components) -->
  <script src="https://cdn.jsdelivr.net/npm/nativeframe@0.1/dist/nativeframe.min.js" defer></script>
</body>
</html>
```

That's it! You now have NativeFrame installed.

---

## Step 2: Add some components

Let's add a card with a button:

```html
<div class="nf-container" style="padding: 2rem;">
  
  <h1>Welcome to NativeFrame</h1>
  <p>Building beautiful interfaces has never been easier.</p>
  
  <div class="nf-card" style="max-width: 400px; margin-top: 2rem;">
    <div class="nf-card-header">
      <strong>Getting Started</strong>
    </div>
    <div class="nf-card-body">
      <p>This is a card component. Cards are perfect for grouping related content.</p>
    </div>
    <div class="nf-card-footer">
      <button class="nf-btn nf-btn-primary" id="demo-btn">
        Click me
      </button>
    </div>
  </div>
  
</div>
```

---

## Step 3: Add interactivity (optional)

Let's make the button show a toast notification:

```html
<script>
  document.getElementById('demo-btn').addEventListener('click', function() {
    NF.toast.show('You clicked the button!', { type: 'success' });
  });
</script>
```

---

## Complete example

Here's the full working page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My NativeFrame App</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nativeframe@0.1/dist/nativeframe.min.css">
</head>
<body>
  
  <div class="nf-container" style="padding: 2rem;">
    <h1>Welcome to NativeFrame</h1>
    <p>Building beautiful interfaces has never been easier.</p>
    
    <div class="nf-card" style="max-width: 400px; margin-top: 2rem;">
      <div class="nf-card-header">
        <strong>Getting Started</strong>
      </div>
      <div class="nf-card-body">
        <p>This is a card component. Cards are perfect for grouping related content.</p>
      </div>
      <div class="nf-card-footer">
        <button class="nf-btn nf-btn-primary" id="demo-btn">
          Click me
        </button>
      </div>
    </div>
  </div>
  
  <script src="https://cdn.jsdelivr.net/npm/nativeframe@0.1/dist/nativeframe.min.js" defer></script>
  <script>
    document.getElementById('demo-btn').addEventListener('click', function() {
      NF.toast.show('You clicked the button!', { type: 'success' });
    });
  </script>
  
</body>
</html>
```

Open this in your browser and click the button. You should see a success toast appear!

---

## Next steps

### Explore components

Browse the full component library to see what's available:

- [Button](./components/button.md) — Buttons with variants and sizes
- [Card](./components/card.md) — Content containers
- [Modal](./components/modal.md) — Dialogs and popups
- [Toast](./components/toast.md) — Notifications
- [Input](./components/input.md) — Form inputs
- [Tabs](./components/tabs.md) — Tabbed interfaces
- [Accordion](./components/accordion.md) — Collapsible content
- [All Components →](./components/button.md)

### Customize the theme

Learn how to customize colors, spacing, and more:

- [Theming Guide](./theming.md) — Customize design tokens

### Learn the JavaScript API

If you're using interactive components, explore the full API:

- [JavaScript API](./javascript-api.md) — Complete API reference

---

## Common patterns

### Form with validation

```html
<form style="max-width: 400px;">
  <div style="margin-bottom: 1rem;">
    <label class="nf-label" for="email">Email</label>
    <input type="email" class="nf-input" id="email" placeholder="you@example.com">
  </div>
  
  <div style="margin-bottom: 1rem;">
    <label class="nf-label" for="password">Password</label>
    <input type="password" class="nf-input" id="password">
    <span class="nf-help-text">Must be at least 8 characters</span>
  </div>
  
  <button type="submit" class="nf-btn nf-btn-primary nf-btn-full">
    Sign in
  </button>
</form>
```

### Grid layout

```html
<div class="nf-grid nf-md-grid-cols-3">
  <div class="nf-card">Card 1</div>
  <div class="nf-card">Card 2</div>
  <div class="nf-card">Card 3</div>
</div>
```

### Modal dialog

```html
<!-- Trigger button -->
<button class="nf-btn nf-btn-primary" data-modal-open="my-modal">
  Open Modal
</button>

<!-- Modal -->
<div class="nf-modal" id="my-modal" hidden>
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

The modal automatically handles:
- Focus trapping
- Escape key to close
- Click overlay to close
- Return focus to trigger on close

---

## Tips

1. **Use semantic HTML** — NativeFrame enhances native elements, so start with proper HTML structure
2. **Mobile-first** — All components are responsive by default
3. **Dark mode** — Works automatically with `prefers-color-scheme: dark`
4. **Accessibility** — All interactive components include ARIA attributes and keyboard support
5. **Progressive enhancement** — Most components work without JavaScript

---

## Need help?

- View the [examples](../examples/quick-start.html) for complete working demos
- Read the [component docs](./components/button.md) for detailed usage
- Check the [theming guide](./theming.md) for customization options
