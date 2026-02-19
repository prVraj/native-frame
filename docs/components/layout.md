# Layout

Layout utilities for containers, grids, flexbox, and spacing.

---

## Container

Centered container with max-width.

```html
<div class="nf-container">
  <!-- Content here -->
</div>
```

---

## Grid

CSS Grid wrapper with responsive columns.

### Basic grid

```html
<div class="nf-grid nf-md-grid-cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Column variants

```html
<!-- 2 columns -->
<div class="nf-grid nf-md-grid-cols-2">...</div>

<!-- 3 columns -->
<div class="nf-grid nf-md-grid-cols-3">...</div>

<!-- 4 columns -->
<div class="nf-grid nf-md-grid-cols-4">...</div>
```

**Note:** Grid columns are responsive — single column on mobile, multiple on desktop (`md` breakpoint and above).

---

## Flex

Flexbox wrapper with gap.

```html
<div class="nf-flex" style="gap: 1rem;">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

## Stack

Vertical flex stack.

```html
<div class="nf-stack">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## Cluster

Horizontal flex wrap.

```html
<div class="nf-cluster">
  <button class="nf-btn nf-btn-primary">Button 1</button>
  <button class="nf-btn nf-btn-secondary">Button 2</button>
  <button class="nf-btn nf-btn-outline">Button 3</button>
</div>
```

---

## Divider

Horizontal rule with proper spacing.

```html
<hr class="nf-divider">
```

---

## Spacer

Blank vertical space using spacing tokens.

```html
<div class="nf-spacer-4"></div>  <!-- 1rem / 16px -->
<div class="nf-spacer-6"></div>  <!-- 1.5rem / 24px -->
<div class="nf-spacer-8"></div>  <!-- 2rem / 32px -->
<div class="nf-spacer-12"></div> <!-- 3rem / 48px -->
```

---

## Responsive breakpoints

| Breakpoint | Min width | Usage |
|------------|-----------|-------|
| `sm` | `640px` | Small tablets and up |
| `md` | `768px` | Tablets and up |
| `lg` | `1024px` | Laptops and up |
| `xl` | `1280px` | Desktops and up |

---

## Utility classes

### Text alignment

```html
<div class="nf-text-center">Centered text</div>
<div class="nf-text-left">Left-aligned text</div>
<div class="nf-text-right">Right-aligned text</div>
```

---

## CSS variables

| Variable | Default | Usage |
|----------|---------|-------|
| `--nf-spacing-*` | Various | Spacing scale |
| `--nf-color-border` | `#e2e8f0` | Divider color |

---

## Best practices

✅ **Do:**
- Use `.nf-container` for page-width content
- Use `.nf-grid` for card layouts
- Use `.nf-stack` for form fields
- Use `.nf-cluster` for button groups

❌ **Don't:**
- Nest containers inside containers
- Use inline styles for spacing (use spacer classes)

---

## Common patterns

### Page layout

```html
<div class="nf-container" style="padding: 2rem 1rem;">
  <h1>Page Title</h1>
  <hr class="nf-divider">
  <div class="nf-grid nf-md-grid-cols-3">
    <div class="nf-card">Card 1</div>
    <div class="nf-card">Card 2</div>
    <div class="nf-card">Card 3</div>
  </div>
</div>
```

### Form layout

```html
<form class="nf-stack" style="max-width: 400px;">
  <div>
    <label class="nf-label" for="name">Name</label>
    <input type="text" class="nf-input" id="name">
  </div>
  
  <div>
    <label class="nf-label" for="email">Email</label>
    <input type="email" class="nf-input" id="email">
  </div>
  
  <button type="submit" class="nf-btn nf-btn-primary">Submit</button>
</form>
```

### Card grid

```html
<div class="nf-container">
  <div class="nf-grid nf-md-grid-cols-3">
    <div class="nf-card">
      <div class="nf-card-body">Content 1</div>
    </div>
    <div class="nf-card">
      <div class="nf-card-body">Content 2</div>
    </div>
    <div class="nf-card">
      <div class="nf-card-body">Content 3</div>
    </div>
  </div>
</div>
```

---

## Related components

- [Card](./card.md) — Often used in grids
- [Button](./button.md) — Often used in clusters