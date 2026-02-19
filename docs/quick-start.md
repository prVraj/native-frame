# Quick Start

Get up and running with NativeFrame in under 60 seconds.

---

## Step 1: Get the files

Clone and build the library:

```bash
git clone https://github.com/prVraj/native-frame.git
cd native-frame
npm install
npm run build
```

Or if you already have the `dist/` files, skip to the next step.

---

## Step 2: Create an HTML file

Create a new file called `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My NativeFrame App</title>
  <link rel="stylesheet" href="dist/nativeframe.min.css">
</head>
<body>

  <div class="nf-container" style="padding: 2rem;">
    <!-- Your content goes here -->
  </div>

  <script src="dist/nativeframe.min.js" defer></script>
</body>
</html>
```

That's it. NativeFrame is ready to use.

---

## Step 3: Add some components

Add a card with a button:

```html
<div class="nf-container" style="padding: 2rem;">

  <h1>Welcome to NativeFrame</h1>
  <p>Building clean interfaces without framework overhead.</p>

  <div class="nf-card" style="max-width: 400px; margin-top: 2rem;">
    <div class="nf-card-header">
      <strong>Getting Started</strong>
    </div>
    <div class="nf-card-body">
      <p>This is a card component. Cards group related content together.</p>
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

## Step 4: Add interactivity (optional)

Make the button show a toast notification:

```html
<script>
  document.getElementById('demo-btn').addEventListener('click', function () {
    NF.toast.show('You clicked the button!', { type: 'success' });
  });
</script>
```

---

## Complete example

Here is the full working page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My NativeFrame App</title>
  <link rel="stylesheet" href="dist/nativeframe.min.css">
</head>
<body>

  <div class="nf-container" style="padding: 2rem;">
    <h1>Welcome to NativeFrame</h1>
    <p>Building clean interfaces without framework overhead.</p>

    <div class="nf-card" style="max-width: 400px; margin-top: 2rem;">
      <div class="nf-card-header">
        <strong>Getting Started</strong>
      </div>
      <div class="nf-card-body">
        <p>This is a card component. Cards group related content together.</p>
      </div>
      <div class="nf-card-footer">
        <button class="nf-btn nf-btn-primary" id="demo-btn">
          Click me
        </button>
      </div>
    </div>
  </div>

  <script src="dist/nativeframe.min.js" defer></script>
  <script>
    document.getElementById('demo-btn').addEventListener('click', function () {
      NF.toast.show('You clicked the button!', { type: 'success' });
    });
  </script>

</body>
</html>
```

Open this in your browser and click the button. A success toast should appear.

---

## Explore components

Browse the full component library:

- [Button](./components/button.md) — Buttons with variants and sizes
- [Card](./components/card.md) — Content containers
- [Modal](./components/modal.md) — Dialogs and popups
- [Toast](./components/toast.md) — Notifications
- [Input](./components/input.md) — Form inputs
- [Tabs](./components/tabs.md) — Tabbed interfaces
- [Accordion](./components/accordion.md) — Collapsible content

## Customize the theme

Change colors, spacing, and more:

- [Theming Guide](./theming.md) — Full token reference

## JavaScript API

If you use interactive components, see the full API reference:

- [JavaScript API](./javascript-api.md)

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
  <div class="nf-card"><div class="nf-card-body">Card 1</div></div>
  <div class="nf-card"><div class="nf-card-body">Card 2</div></div>
  <div class="nf-card"><div class="nf-card-body">Card 3</div></div>
</div>
```

### Modal dialog

```html
<button class="nf-btn nf-btn-primary" data-modal-open="my-modal">
  Open Modal
</button>

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

The modal handles focus trapping, Escape key, overlay click, and return focus automatically.

---

## Tips

1. **Use semantic HTML** — NativeFrame enhances native elements. Start with proper HTML structure.
2. **Mobile-first** — All components are responsive by default.
3. **Dark mode** — Works automatically with `prefers-color-scheme: dark`.
4. **Accessibility** — All interactive components include ARIA attributes and keyboard support.
5. **Progressive enhancement** — Most components work without JavaScript.

---

## Need help?

- Run `npm run serve` and browse the [example pages](../examples/quick-start.html)
- Read the [component docs](./components/button.md)
- Check the [theming guide](./theming.md)
