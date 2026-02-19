# Installation

NativeFrame can be installed in three ways: via CDN, direct download, or npm. Choose the method that works best for your project.

---

## Option 1: CDN (Recommended for prototypes)

The fastest way to get started. Just add these two lines to your HTML `<head>`:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nativeframe@0.1/dist/nativeframe.min.css">

<!-- JavaScript (optional, for interactive components) -->
<script src="https://cdn.jsdelivr.net/npm/nativeframe@0.1/dist/nativeframe.min.js" defer></script>
```

**Pros:**
- Zero setup, works immediately
- Cached across sites for faster load times
- Great for prototypes and demos

**Cons:**
- Requires an internet connection
- Less control over versioning

---

## Option 2: Download ZIP

Download the latest release from [GitHub](https://github.com/yourusername/nativeframe/releases) and include the files in your project.

After extracting, you'll have this structure:

```
nativeframe/
├── dist/
│   ├── nativeframe.css
│   ├── nativeframe.min.css
│   ├── nativeframe.js
│   └── nativeframe.min.js
├── README.md
└── LICENSE
```

Link to the files in your HTML:

```html
<!-- CSS -->
<link rel="stylesheet" href="path/to/nativeframe/dist/nativeframe.min.css">

<!-- JavaScript (optional) -->
<script src="path/to/nativeframe/dist/nativeframe.min.js" defer></script>
```

**Pros:**
- Complete control over file location
- Works offline
- No external dependencies

**Cons:**
- Manual updates required
- Must manage files yourself

---

## Option 3: npm (Recommended for production)

Install via npm and import into your build pipeline:

```bash
npm install nativeframe
```

### Import in your CSS:

```css
@import 'nativeframe/dist/nativeframe.css';
```

Or link directly in HTML:

```html
<link rel="stylesheet" href="node_modules/nativeframe/dist/nativeframe.min.css">
```

### Import in your JavaScript:

```javascript
import NF from 'nativeframe';

// Use the API
NF.toast.show('Hello from NativeFrame!', { type: 'success' });
```

Or include as a script tag:

```html
<script src="node_modules/nativeframe/dist/nativeframe.min.js"></script>
<script>
  // NF is available globally
  NF.toast.show('Hello!', { type: 'success' });
</script>
```

**Pros:**
- Integrates with your build process
- Version control via `package.json`
- Easy updates with `npm update`

**Cons:**
- Requires npm and a build step (optional)
- Slightly more setup than CDN

---

## What's included?

Regardless of installation method, you get:

### CSS (`nativeframe.css` or `.min.css`)
- Design tokens (CSS custom properties)
- Minimal reset
- Base element styles
- All 15+ components
- Layout utilities

### JavaScript (`nativeframe.js` or `.min.js`)
- Global `NF` object
- Interactive component APIs:
  - `NF.modal`
  - `NF.toast`
  - `NF.accordion`
  - `NF.tabs`
  - `NF.tooltip`

---

## Verify installation

Create a simple HTML file to test:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NativeFrame Test</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nativeframe@0.1/dist/nativeframe.min.css">
</head>
<body>
  <div class="nf-container" style="padding: 2rem;">
    <h1>Hello, NativeFrame!</h1>
    <button class="nf-btn nf-btn-primary">Click me</button>
  </div>
  
  <script src="https://cdn.jsdelivr.net/npm/nativeframe@0.1/dist/nativeframe.min.js"></script>
  <script>
    document.querySelector('.nf-btn').addEventListener('click', () => {
      NF.toast.show('It works!', { type: 'success' });
    });
  </script>
</body>
</html>
```

Open this file in your browser. If you see a styled button and clicking it shows a toast, you're all set!

---

## Next steps

- [Quick Start](./quick-start.md) — Build your first page
- [Theming](./theming.md) — Customize colors and tokens
- [Components](./components/button.md) — Browse all components
