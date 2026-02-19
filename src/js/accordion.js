// Accordion

function getPanel(trigger) {
  const panelId = trigger.getAttribute("aria-controls");
  if (panelId) {
    return document.getElementById(panelId);
  }
  // Fallback: next sibling element with .nf-accordion-panel
  return trigger.parentElement.querySelector(".nf-accordion-panel");
}

function getItem(trigger) {
  return trigger.closest(".nf-accordion-item");
}

function getAccordion(trigger) {
  return trigger.closest(".nf-accordion");
}

function isSingleMode(accordionEl) {
  return accordionEl && accordionEl.dataset.accordionSingle === "true";
}

function closeOthers(accordionEl, currentTrigger) {
  const triggers = accordionEl.querySelectorAll(".nf-accordion-trigger");
  triggers.forEach((t) => {
    if (t !== currentTrigger && t.getAttribute("aria-expanded") === "true") {
      close(t);
    }
  });
}

function open(trigger) {
  const panel = getPanel(trigger);
  const item = getItem(trigger);
  const accordionEl = getAccordion(trigger);

  if (!panel) return;

  // In single mode, close others first
  if (isSingleMode(accordionEl)) {
    closeOthers(accordionEl, trigger);
  }

  trigger.setAttribute("aria-expanded", "true");
  panel.removeAttribute("hidden");

  if (item) {
    item.classList.add("is-open");
  }

  // Force reflow so the browser registers the change from hidden
  // before we set max-height for the transition
  panel.offsetHeight; // eslint-disable-line no-unused-expressions

  panel.style.maxHeight = panel.scrollHeight + "px";
}

function close(trigger) {
  const panel = getPanel(trigger);
  const item = getItem(trigger);

  if (!panel) return;

  trigger.setAttribute("aria-expanded", "false");

  if (item) {
    item.classList.remove("is-open");
  }

  // Set max-height to current scrollHeight first so the transition has
  // a starting value, then on the next frame collapse to 0
  panel.style.maxHeight = panel.scrollHeight + "px";

  // Force reflow
  panel.offsetHeight; // eslint-disable-line no-unused-expressions

  panel.style.maxHeight = "0";

  const onTransitionEnd = (e) => {
    if (e.propertyName !== "max-height") return;
    panel.removeEventListener("transitionend", onTransitionEnd);

    // Only add hidden if still collapsed (hasn't been re-opened during transition)
    if (trigger.getAttribute("aria-expanded") === "false") {
      panel.setAttribute("hidden", "");
    }
  };

  panel.addEventListener("transitionend", onTransitionEnd);
}

function toggle(trigger) {
  const expanded = trigger.getAttribute("aria-expanded") === "true";
  if (expanded) {
    close(trigger);
  } else {
    open(trigger);
  }
}

function init() {
  const accordions = document.querySelectorAll(".nf-accordion");

  accordions.forEach((accordionEl) => {
    const triggers = accordionEl.querySelectorAll(".nf-accordion-trigger");

    triggers.forEach((trigger) => {
      // Set initial state: if not already expanded, ensure panel is hidden
      // and max-height is 0
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      const panel = getPanel(trigger);

      if (panel) {
        if (expanded) {
          panel.removeAttribute("hidden");
          panel.style.maxHeight = panel.scrollHeight + "px";
          const item = getItem(trigger);
          if (item) {
            item.classList.add("is-open");
          }
        } else {
          panel.setAttribute("hidden", "");
          panel.style.maxHeight = "0";
        }
      }

      trigger.addEventListener("click", () => {
        toggle(trigger);
      });
    });
  });
}

export const accordion = { init, open, close, toggle };
