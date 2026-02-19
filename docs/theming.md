# Theming

NativeFrame uses CSS custom properties (variables) for all design tokens. This makes theming simple: override a handful of variables to completely transform the look and feel.

---

## Design tokens overview

All design tokens are prefixed with `--nf-` and defined on the `:root` element. This means they're available everywhere in your CSS.

### Token categories

- **Colors** — Background, text, border, and semantic colors
- **Typography** — Font families, sizes, weights, and line heights
- **Spacing** — Consistent spacing scale for padding and margins
- **Border radius** — Consistent corner rounding
- **Shadows** — Elevation and depth
- **Transitions** — Animation timing
- **Z-index** — Layering and stacking order

---

## Complete token reference

### Colors — Background & Text

```css
--nf-color-bg: #ffffff;
--nf-color-bg-subtle: #f8fafc;
--nf-color-bg-muted: #f1f5f9;
--nf-color-text: #0f172a;
--nf-color-text-muted: #64748b;
--nf-color-text-inverse: #ffffff;
--nf-color-border: #e2e8f0;
--nf-color-border-strong: #cbd5e1;
```

### Colors — Primary

```css
--nf-color-primary: #0088FF;
--nf-color-primary-hover: #0070D6;
--nf-color-primary-active: #005BB0;
--nf-color-primary-subtle: #E5F3FF;
```

### Colors — Semantic

```css
--nf-color-success: #16a34a;
--nf-color-success-subtle: #dcfce7;

--nf-color-warning: #d97706;
--nf-color-warning-subtle: #fef3c7;

--nf-color-danger: #dc2626;
--nf-color-danger-subtle: #fee2e2;

--nf-color-info: #0284c7;
--nf-color-info-subtle: #e0f2fe;
```

### Typography

```css
--nf-font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
--nf-font-family-mono: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, monospace;

--nf-font-size-xs: 0.75rem;    /* 12px */
--nf-font-size-sm: 0.875rem;   /* 14px */
--nf-font-size-base: 1rem;     /* 16px */
--nf-font-size-lg: 1.125rem;   /* 18px */
--nf-font-size-xl: 1.25rem;    /* 20px */

--nf-font-weight-normal: 400;
--nf-font-weight-medium: 500;
--nf-font-weight-semibold: 600;
--nf-font-weight-bold: 700;

--nf-line-height-tight: 1.25;
--nf-line-height-base: 1.5;
```

### Spacing

```css
--nf-spacing-1: 0.25rem;   /* 4px */
--nf-spacing-2: 0.5rem;    /* 8px */
--nf-spacing-3: 0.75rem;   /* 12px */
--nf-spacing-4: 1rem;      /* 16px */
--nf-spacing-5: 1.25rem;   /* 20px */
--nf-spacing-6: 1.5rem;    /* 24px */
--nf-spacing-8: 2rem;      /* 32px */
--nf-spacing-10: 2.5rem;   /* 40px */
--nf-spacing-12: 3rem;     /* 48px */
```

### Border Radius

```css
--nf-radius-sm: 4px;
--nf-radius-md: 8px;
--nf-radius-lg: 12px;
--nf-radius-xl: 16px;
--nf-radius-full: 9999px;
```

### Shadows

```css
--nf-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--nf-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--nf-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--nf-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
```

### Transitions

```css
--nf-transition-fast: 100ms ease;
--nf-transition-base: 150ms ease;
--nf-transition-slow: 250ms ease;
```

### Z-index

```css
--nf-z-dropdown: 1000;
--nf-z-sticky: 1100;
--nf-z-modal: 1200;
--nf-z-tooltip: 1300;
--nf-z-toast: 1400;
```

---

## Customizing tokens globally

Override tokens on the `:root` element to apply changes across your entire site.

### Example: Change the primary color

The default primary is `#0088FF`. To use a different brand color, override all four tokens:

```html
<style>
  :root {
    --nf-color-primary: #ec4899;        /* pink-500 */
    --nf-color-primary-hover: #db2777;  /* pink-600 */
    --nf-color-primary-active: #be185d; /* pink-700 */
    --nf-color-primary-subtle: #fce7f3; /* pink-50 */
  }
</style>
```

Now all buttons, links, and primary-colored components use your custom pink palette.

### Example: Use a custom font

```html
<style>
  :root {
    --nf-font-family: 'Inter', system-ui, sans-serif;
  }
</style>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Example: Increase all spacing

```html
<style>
  :root {
    --nf-spacing-1: 0.375rem;
    --nf-spacing-2: 0.75rem;
    --nf-spacing-3: 1rem;
    --nf-spacing-4: 1.5rem;
    --nf-spacing-5: 2rem;
    --nf-spacing-6: 2.5rem;
    --nf-spacing-8: 3rem;
    --nf-spacing-10: 4rem;
    --nf-spacing-12: 5rem;
  }
</style>
```

This makes everything more spacious while maintaining proportional consistency.

---

## Scoped theming

You can also override tokens for a specific section of your page. Just target a container element instead of `:root`.

### Example: Dark section on a light page

```html
<style>
  .dark-section {
    --nf-color-bg: #0f172a;
    --nf-color-text: #f1f5f9;
    --nf-color-text-muted: #94a3b8;
    --nf-color-border: #334155;
  }
</style>

<div class="dark-section" style="padding: 2rem; background-color: var(--nf-color-bg); color: var(--nf-color-text);">
  <h2>Dark Section</h2>
  <button class="nf-btn nf-btn-primary">Button</button>
</div>
```

All NativeFrame components inside `.dark-section` will use the dark theme tokens.

---

## Dark mode

NativeFrame supports dark mode out of the box via the `prefers-color-scheme` media query.

### Automatic dark mode

By default, NativeFrame automatically switches to dark mode when the user's OS is set to dark mode. No extra work needed.

### Manual dark mode toggle

If you want to let users toggle dark mode manually (regardless of OS preference), use the `.nf-dark` class:

```html
<style>
  /* Override automatic dark mode detection */
  @media (prefers-color-scheme: dark) {
    :root:not(.nf-light) {
      /* Dark mode tokens applied automatically */
    }
  }
  
  /* Manual dark mode class */
  .nf-dark {
    --nf-color-bg: #0f172a;
    --nf-color-bg-subtle: #1e293b;
    --nf-color-bg-muted: #334155;
    --nf-color-text: #f1f5f9;
    --nf-color-text-muted: #94a3b8;
    --nf-color-text-inverse: #0f172a;
    --nf-color-border: #334155;
    --nf-color-border-strong: #475569;
    
    --nf-color-primary-subtle: #0A2540;
    --nf-color-success-subtle: #052e16;
    --nf-color-warning-subtle: #451a03;
    --nf-color-danger-subtle: #450a0a;
    --nf-color-info-subtle: #082f49;
  }
</style>

<script>
  // Toggle dark mode
  function toggleDarkMode() {
    document.documentElement.classList.toggle('nf-dark');
    
    // Save preference
    const isDark = document.documentElement.classList.contains('nf-dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  
  // Restore preference on load
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('nf-dark');
  }
</script>

<button class="nf-btn nf-btn-ghost" onclick="toggleDarkMode()">
  Toggle Dark Mode
</button>
```

---

## Example themes

### Brand theme: Orange

```css
:root {
  --nf-color-primary: #f97316;
  --nf-color-primary-hover: #ea580c;
  --nf-color-primary-active: #c2410c;
  --nf-color-primary-subtle: #ffedd5;
}
```

### Brand theme: Teal

```css
:root {
  --nf-color-primary: #14b8a6;
  --nf-color-primary-hover: #0d9488;
  --nf-color-primary-active: #0f766e;
  --nf-color-primary-subtle: #ccfbf1;
}
```

### High contrast

```css
:root {
  --nf-color-bg: #ffffff;
  --nf-color-text: #000000;
  --nf-color-border: #000000;
  --nf-color-primary: #0000ff;
  --nf-color-primary-hover: #0000cc;
}
```

### Minimalist (less rounded corners)

```css
:root {
  --nf-radius-sm: 2px;
  --nf-radius-md: 4px;
  --nf-radius-lg: 6px;
  --nf-radius-xl: 8px;
}
```

---

## Component-specific customization

Some components expose additional CSS variables for fine-grained control. Check individual component documentation for details.

### Example: Button height

```css
.nf-btn {
  height: 48px; /* Override default */
}
```

### Example: Card shadow

```css
.nf-card {
  box-shadow: var(--nf-shadow-xl); /* Use a larger shadow */
}
```

---

## Best practices

1. **Override sparingly** — The default tokens are designed to work well together. Only override what you need.
2. **Use semantic tokens** — Prefer semantic tokens like `--nf-color-primary` over arbitrary colors.
3. **Test dark mode** — Always test your custom theme in both light and dark modes.
4. **Maintain contrast** — Ensure sufficient color contrast for accessibility (WCAG AA minimum: 4.5:1 for text).
5. **Document your theme** — Keep a reference of your custom tokens for your team.

---

## Tools

- [Contrast Checker](https://webaim.org/resources/contrastchecker/) — Verify color contrast ratios
- [Coolors](https://coolors.co/) — Generate color palettes
- [CSS Variables DevTools](https://chrome.google.com/webstore/detail/css-peeper) — Inspect CSS custom properties in your browser

---

## Next steps

- [JavaScript API](./javascript-api.md) — Learn the interactive component API
- [Accessibility](./accessibility.md) — Accessibility best practices
