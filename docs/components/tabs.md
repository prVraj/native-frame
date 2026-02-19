# Tabs

Tabs organize content into multiple panels, showing one at a time.

---

## Preview

```html
<div class="nf-tabs" role="tablist">
  <button class="nf-tab" role="tab" aria-selected="true" aria-controls="panel-1">Tab 1</button>
  <button class="nf-tab" role="tab" aria-selected="false" aria-controls="panel-2">Tab 2</button>
  <button class="nf-tab" role="tab" aria-selected="false" aria-controls="panel-3">Tab 3</button>
</div>
<div class="nf-tab-panel" id="panel-1" role="tabpanel">Content 1</div>
<div class="nf-tab-panel" id="panel-2" role="tabpanel" hidden>Content 2</div>
<div class="nf-tab-panel" id="panel-3" role="tabpanel" hidden>Content 3</div>
```

---

## Basic usage

```html
<div class="nf-tabs" role="tablist">
  <button class="nf-tab" role="tab" aria-selected="true" aria-controls="tab-panel-1" tabindex="0">
    Overview
  </button>
  <button class="nf-tab" role="tab" aria-selected="false" aria-controls="tab-panel-2" tabindex="-1">
    Details
  </button>
</div>

<div class="nf-tab-panel" id="tab-panel-1" role="tabpanel">
  <p>Overview content goes here.</p>
</div>

<div class="nf-tab-panel" id="tab-panel-2" role="tabpanel" hidden>
  <p>Details content goes here.</p>
</div>
```

---

## JavaScript API

### Select a tab

```javascript
const tab = document.querySelector('[aria-controls="panel-2"]');
NF.tabs.select(tab);
```

---

## CSS variables

| Variable | Default | Usage |
|----------|---------|-------|
| `--nf-color-primary` | `#6366f1` | Active tab indicator |
| `--nf-color-border` | `#e2e8f0` | Tab border |
| `--nf-spacing-4` | `1rem` | Tab padding |

---

## Accessibility

- Uses `role="tablist"` on container
- Uses `role="tab"` on buttons
- Uses `role="tabpanel"` on panels
- `aria-selected="true"` on active tab
- `aria-controls` links tab to panel
- `tabindex="0"` on active tab, `"-1"` on inactive tabs (roving tabindex)
- Arrow keys navigate between tabs

### Keyboard navigation

| Key | Action |
|-----|--------|
| `Arrow Left` | Previous tab |
| `Arrow Right` | Next tab |
| `Home` | First tab |
| `End` | Last tab |
| `Enter` / `Space` | Activate focused tab |
| `Tab` | Move out of tab list |

---

## Best practices

✅ **Do:**
- Use for organizing related content
- Keep tab labels short (1-2 words)
- Show 3-7 tabs maximum
- Make the first tab meaningful (Overview, General, etc.)

❌ **Don't:**
- Use for navigation between pages (use links instead)
- Show more than 7 tabs (consider different UI pattern)
- Use long tab labels
- Hide critical content in inactive tabs

---

## Common patterns

### Settings page

```html
<div class="nf-tabs" role="tablist">
  <button class="nf-tab" role="tab" aria-selected="true" aria-controls="general">General</button>
  <button class="nf-tab" role="tab" aria-selected="false" aria-controls="security">Security</button>
  <button class="nf-tab" role="tab" aria-selected="false" aria-controls="notifications">Notifications</button>
</div>

<div class="nf-tab-panel" id="general" role="tabpanel">
  <!-- General settings form -->
</div>

<div class="nf-tab-panel" id="security" role="tabpanel" hidden>
  <!-- Security settings form -->
</div>

<div class="nf-tab-panel" id="notifications" role="tabpanel" hidden>
  <!-- Notification settings form -->
</div>
```

---

## Related components

- [Accordion](./accordion.md) — Alternative for vertical content sections
- [Card](./card.md) — Often contains tab panels