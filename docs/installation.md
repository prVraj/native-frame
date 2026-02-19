# Installation

You can add NativeFrame to your project in two ways: build from source or copy the dist files directly.

---

## Option 1: Build from source (recommended)

Clone the repository and run the build:

```bash
git clone https://github.com/prVraj/native-frame.git
cd native-frame
npm install
npm run build
```

This generates four files in the `dist/` folder:

```
dist/
├── nativeframe.css         # Full CSS (unminified)
├── nativeframe.min.css     # Minified CSS
├── nativeframe.js          # Full JS (unminified)
└── nativeframe.min.js      # Minified JS
```

Link them in your HTML:

```html
<link rel="stylesheet" href="dist/nativeframe.min.css">
<script src="dist/nativeframe.min.js" defer></script>
```

---

## Option 2: Copy the dist files

If you don't want to clone the full repo, download or copy just the `dist/` files into your project after building:

```html
<link rel="stylesheet" href="path/to/nativeframe.min.css">
<script src="path/to/nativeframe.min.js" defer></script>
```

---

## What's included

### CSS (`nativeframe.css` or `.min.css`)

- Design tokens (CSS custom properties for colors, spacing, typography, etc.)
- Minimal reset
- Base element styles
- All 15 components
- Layout utilities

### JavaScript (`nativeframe.js` or `.min.js`)

- Global `NF` object
- Interactive component APIs:
  - `NF.modal` — open, close
  - `NF.toast` — show, dismiss, dismissAll
  - `NF.accordion` — open, close, toggle
  - `NF.tabs` — select
  - `NF.tooltip` — show, hide
- Auto-initialization on `DOMContentLoaded`

---

## Verify it works

Create a simple HTML file to test:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NativeFrame Test</title>
  <link rel="stylesheet" href="dist/nativeframe.min.css">
</head>
<body>
  <div class="nf-container" style="padding: 2rem;">
    <h1>Hello, NativeFrame!</h1>
    <button class="nf-btn nf-btn-primary" id="test-btn">Click me</button>
  </div>

  <script src="dist/nativeframe.min.js"></script>
  <script>
    document.getElementById('test-btn').addEventListener('click', function () {
      NF.toast.show('It works!', { type: 'success' });
    });
  </script>
</body>
</html>
```

Open this file in your browser. If you see a styled button and clicking it shows a toast notification, you're all set.

---

## Local dev server

NativeFrame includes a built-in dev server for previewing examples and docs:

```bash
npm run serve
```

This starts a server at `http://127.0.0.1:4173` with all examples and documentation available.

---

## Next steps

- [Quick Start](./quick-start.md) — Build your first page
- [Theming](./theming.md) — Customize colors and tokens
- [Components](./components/button.md) — Browse all components
