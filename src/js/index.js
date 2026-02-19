// NativeFrame JS Entry

// The build script concatenates all JS files into an IIFE.
// Each module above defines its functions and assigns to a local variable.
// This file assembles the NF global and auto-inits all components.

const NF = { accordion, tabs, tooltip, modal, toast };

document.addEventListener('DOMContentLoaded', function () {
  NF.accordion.init();
  NF.tabs.init();
  NF.tooltip.init();
  NF.modal.init();
});

window.NF = NF;
