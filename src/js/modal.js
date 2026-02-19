// Modal

const FOCUSABLE_SELECTOR =
  'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';

const TRANSITION_DURATION = 250;

const state = new WeakMap();

function getModal(selectorOrEl) {
  if (typeof selectorOrEl === 'string') {
    const id = selectorOrEl.replace(/^#/, '');
    return document.getElementById(id) || document.querySelector(selectorOrEl);
  }
  return selectorOrEl;
}

function getFocusableElements(modalEl) {
  const content = modalEl.querySelector('.nf-modal-content');
  if (!content) return [];
  return Array.from(content.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
    (el) => el.offsetParent !== null
  );
}

function trapFocus(e, modalEl) {
  if (e.key !== 'Tab') return;

  const focusable = getFocusableElements(modalEl);
  if (focusable.length === 0) {
    e.preventDefault();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  } else {
    if (document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}

function onKeydown(e, modalEl) {
  if (e.key === 'Escape') {
    close(modalEl);
    return;
  }
  trapFocus(e, modalEl);
}

function onOverlayClick(e, modalEl) {
  if (e.target.classList.contains('nf-modal-overlay')) {
    close(modalEl);
  }
}

function open(selectorOrEl) {
  const modalEl = getModal(selectorOrEl);
  if (!modalEl) return;

  const triggerEl = document.activeElement;

  const keydownHandler = (e) => onKeydown(e, modalEl);
  const overlayHandler = (e) => onOverlayClick(e, modalEl);

  state.set(modalEl, {
    triggerEl,
    keydownHandler,
    overlayHandler,
  });

  modalEl.removeAttribute('hidden');

  requestAnimationFrame(() => {
    modalEl.classList.add('is-open');
  });

  document.body.classList.add('nf-modal-open');

  const focusable = getFocusableElements(modalEl);
  if (focusable.length > 0) {
    requestAnimationFrame(() => {
      focusable[0].focus();
    });
  }

  document.addEventListener('keydown', keydownHandler);
  modalEl.addEventListener('click', overlayHandler);

  modalEl.dispatchEvent(
    new CustomEvent('nf:modal-open', { bubbles: true })
  );
}

function close(selectorOrEl) {
  const modalEl = getModal(selectorOrEl);
  if (!modalEl) return;

  const modalState = state.get(modalEl);

  modalEl.classList.remove('is-open');

  setTimeout(() => {
    modalEl.setAttribute('hidden', '');
    document.body.classList.remove('nf-modal-open');
  }, TRANSITION_DURATION);

  if (modalState) {
    if (modalState.triggerEl && typeof modalState.triggerEl.focus === 'function') {
      modalState.triggerEl.focus();
    }

    document.removeEventListener('keydown', modalState.keydownHandler);
    modalEl.removeEventListener('click', modalState.overlayHandler);

    state.delete(modalEl);
  }

  modalEl.dispatchEvent(
    new CustomEvent('nf:modal-close', { bubbles: true })
  );
}

function init() {
  document.querySelectorAll('[data-modal-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-modal-open');
      open(targetId);
    });
  });

  document.querySelectorAll('[data-modal-close]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-modal-close');
      if (targetId) {
        close(targetId);
      } else {
        const modalEl = btn.closest('.nf-modal');
        if (modalEl) close(modalEl);
      }
    });
  });

  document.querySelectorAll('.nf-modal-close').forEach((btn) => {
    btn.addEventListener('click', () => {
      const modalEl = btn.closest('.nf-modal');
      if (modalEl) close(modalEl);
    });
  });
}

export const modal = { init, open, close };
