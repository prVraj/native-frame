// Tooltip

const tooltipMap = new WeakMap();
let idCounter = 0;

function getOppositePos(pos) {
  const opposites = { top: "bottom", bottom: "top", left: "right", right: "left" };
  return opposites[pos] || "bottom";
}

function positionTooltip(tooltipEl, triggerEl, desiredPos) {
  const gap = 8;
  const triggerRect = triggerEl.getBoundingClientRect();
  const tooltipRect = tooltipEl.getBoundingClientRect();
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  const winW = window.innerWidth;
  const winH = window.innerHeight;

  let pos = desiredPos;
  let top, left;

  // Calculate position and check if it fits, flip if needed
  if (pos === "top") {
    top = triggerRect.top - tooltipRect.height - gap;
    if (top < 0) pos = "bottom";
  } else if (pos === "bottom") {
    top = triggerRect.bottom + gap;
    if (top + tooltipRect.height > winH) pos = "top";
  } else if (pos === "left") {
    left = triggerRect.left - tooltipRect.width - gap;
    if (left < 0) pos = "right";
  } else if (pos === "right") {
    left = triggerRect.right + gap;
    if (left + tooltipRect.width > winW) pos = "left";
  }

  // Final position calculation after potential flip
  switch (pos) {
    case "top":
      top = triggerRect.top - tooltipRect.height - gap;
      left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
      break;
    case "bottom":
      top = triggerRect.bottom + gap;
      left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
      break;
    case "left":
      top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
      left = triggerRect.left - tooltipRect.width - gap;
      break;
    case "right":
      top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
      left = triggerRect.right + gap;
      break;
  }

  // Clamp to viewport edges
  left = Math.max(0, Math.min(left, winW - tooltipRect.width));
  top = Math.max(0, Math.min(top, winH - tooltipRect.height));

  tooltipEl.style.top = (top + scrollY) + "px";
  tooltipEl.style.left = (left + scrollX) + "px";
  tooltipEl.setAttribute("data-pos", pos);
}

function show(triggerEl) {
  if (tooltipMap.has(triggerEl)) return;

  const text = triggerEl.getAttribute("data-tooltip");
  if (!text) return;

  const desiredPos = triggerEl.getAttribute("data-tooltip-pos") || "top";

  const tooltipEl = document.createElement("div");
  tooltipEl.className = "nf-tooltip";
  tooltipEl.textContent = text;
  tooltipEl.setAttribute("role", "tooltip");

  const id = "nf-tooltip-" + (++idCounter);
  tooltipEl.id = id;
  triggerEl.setAttribute("aria-describedby", id);

  document.body.appendChild(tooltipEl);
  tooltipMap.set(triggerEl, tooltipEl);

  positionTooltip(tooltipEl, triggerEl, desiredPos);

  requestAnimationFrame(function () {
    tooltipEl.classList.add("is-visible");
  });
}

function hide(triggerEl) {
  const tooltipEl = tooltipMap.get(triggerEl);
  if (!tooltipEl) return;

  tooltipEl.classList.remove("is-visible");
  triggerEl.removeAttribute("aria-describedby");

  setTimeout(function () {
    if (tooltipEl.parentNode) {
      tooltipEl.parentNode.removeChild(tooltipEl);
    }
    tooltipMap.delete(triggerEl);
  }, 150);
}

function init() {
  const triggers = document.querySelectorAll("[data-tooltip]");

  triggers.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      show(el);
    });

    el.addEventListener("focus", function () {
      show(el);
    });

    el.addEventListener("mouseleave", function () {
      hide(el);
    });

    el.addEventListener("blur", function () {
      hide(el);
    });
  });
}

export const tooltip = { init, show, hide };
