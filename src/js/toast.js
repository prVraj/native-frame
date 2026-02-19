// Toast — 4-row list + Sonner-style overflow stack

const regions = new Map();
const MAX_VISIBLE = 4;
const ROW_GAP = 14;
const PEEK_GAP = 10;
const SCALE_STEP = 0.05;
const OPACITY_STEP = 0.15;
const MAX_OVERFLOW_VISIBLE = 3;
const DISMISS_MS = 200;
const toastTimers = new WeakMap();

function getRegion(position, ariaLive) {
  if (regions.has(position)) {
    var r = regions.get(position);
    r.setAttribute('aria-live', ariaLive);
    return r;
  }

  var r = document.createElement('div');
  r.className = 'nf-toast-region';
  r.setAttribute('data-position', position);
  r.setAttribute('aria-live', ariaLive);
  document.body.appendChild(r);
  regions.set(position, r);
  return r;
}

// Layout engine: 4 visible rows + perspective overflow behind the last row.
function layoutRegion(region) {
  var position = region.getAttribute('data-position') || 'bottom-right';
  var isTop = position.startsWith('top');
  var dir = isTop ? 1 : -1;

  var all = Array.from(region.querySelectorAll('.nf-toast:not(.is-dismissing)'));

  var offset = 0;
  var anchorOffset = 0;

  for (var i = 0; i < all.length; i++) {
    var el = all[i];

    if (i < MAX_VISIBLE) {
      // Visible row — full size, spaced by measured height
      el.style.setProperty('--_y', (offset * dir) + 'px');
      el.style.setProperty('--_scale', '1');
      el.style.setProperty('--_opacity', '1');
      el.style.zIndex = String(200 - i);
      el.removeAttribute('data-stacked');

      anchorOffset = offset;
      offset += el.offsetHeight + ROW_GAP;
    } else {
      // Overflow: stack behind the oldest visible row (index MAX_VISIBLE-1)
      var depth = i - MAX_VISIBLE + 1;
      var peekY = anchorOffset + depth * PEEK_GAP;
      var scale = 1 - depth * SCALE_STEP;
      var opacity = depth <= MAX_OVERFLOW_VISIBLE
        ? Math.max(1 - depth * OPACITY_STEP, 0.3)
        : 0;

      el.style.setProperty('--_y', (peekY * dir) + 'px');
      el.style.setProperty('--_scale', String(Math.max(scale, 0.85)));
      el.style.setProperty('--_opacity', String(opacity));
      el.style.zIndex = String(Math.max(0, 200 - MAX_VISIBLE - depth));
      el.setAttribute('data-stacked', depth > MAX_OVERFLOW_VISIBLE ? 'hidden' : 'overflow');
    }
  }
}

function show(message, options) {
  if (!options) options = {};

  var VALID_TYPES = { info: 1, success: 1, warning: 1, error: 1 };
  var VALID_POSITIONS = { 'top-left': 1, 'top-right': 1, 'bottom-left': 1, 'bottom-right': 1 };
  var type = VALID_TYPES[options.type] ? options.type : 'info';
  var duration = options.duration !== undefined ? options.duration : 6000;
  var dismissible = options.dismissible !== undefined ? options.dismissible : true;
  var position = VALID_POSITIONS[options.position] ? options.position : 'bottom-right';

  var ariaLive = type === 'error' ? 'assertive' : 'polite';
  var region = getRegion(position, ariaLive);

  var el = document.createElement('div');
  el.className = 'nf-toast nf-toast-' + type;
  el.setAttribute('role', 'status');

  if (duration > 0) {
    var prog = document.createElement('div');
    prog.className = 'nf-toast-progress';
    prog.setAttribute('aria-hidden', 'true');
    prog.style.animationDuration = duration + 'ms';
    el.appendChild(prog);
  }

  var msg = document.createElement('span');
  msg.className = 'nf-toast-message';
  msg.textContent = message;
  el.appendChild(msg);

  if (dismissible) {
    var btn = document.createElement('button');
    btn.className = 'nf-toast-close';
    btn.setAttribute('aria-label', 'Dismiss');
    btn.textContent = '\u00d7';
    btn.addEventListener('click', function () { dismiss(el); });
    el.appendChild(btn);
  }

  // Entry state: offset below (bottom regions) or above (top regions), invisible
  var isTop = position.startsWith('top');
  el.style.setProperty('--_y', (isTop ? '-20' : '20') + 'px');
  el.style.setProperty('--_scale', '1');
  el.style.setProperty('--_opacity', '0');

  // Newest first (prepend) so index 0 = newest = bottom row
  region.prepend(el);

  // Force reflow so the browser registers the entry state
  el.getBoundingClientRect();

  // Set target positions for every toast (transition animates the change)
  layoutRegion(region);

  if (duration > 0) {
    var tid = setTimeout(function () { dismiss(el); }, duration);
    toastTimers.set(el, tid);
  }

  el.dispatchEvent(new CustomEvent('nf:toast-shown', { bubbles: true }));
  return el;
}

function dismiss(el, opts) {
  if (!el || !el.parentNode) return;
  if (!opts) opts = {};

  var tid = toastTimers.get(el);
  if (tid) {
    clearTimeout(tid);
    toastTimers.delete(el);
  }

  var region = el.closest('.nf-toast-region');

  if (opts.immediate) {
    el.dispatchEvent(new CustomEvent('nf:toast-dismissed', { bubbles: true }));
    el.remove();
    if (region && !opts.skipLayout) layoutRegion(region);
    return;
  }

  el.classList.add('is-dismissing');

  setTimeout(function () {
    el.dispatchEvent(new CustomEvent('nf:toast-dismissed', { bubbles: true }));
    el.remove();
    if (region) layoutRegion(region);
  }, DISMISS_MS);
}

function dismissAll() {
  document.querySelectorAll('.nf-toast').forEach(function (el) {
    dismiss(el, { immediate: true });
  });
}

export const toast = { show, dismiss, dismissAll };
