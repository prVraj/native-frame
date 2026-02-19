// Tabs

function init() {
  const tablists = document.querySelectorAll('.nf-tabs[role="tablist"]');

  tablists.forEach((tablist) => {
    const tabs = tablist.querySelectorAll('.nf-tab[role="tab"]');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        select(tab);
      });
    });

    tablist.addEventListener('keydown', (e) => {
      const currentTab = e.target.closest('.nf-tab[role="tab"]');
      if (!currentTab) return;

      const tabsArray = Array.from(tabs);
      const index = tabsArray.indexOf(currentTab);
      if (index === -1) return;

      let targetTab = null;

      switch (e.key) {
        case 'ArrowRight':
          targetTab = tabsArray[(index + 1) % tabsArray.length];
          break;
        case 'ArrowLeft':
          targetTab = tabsArray[(index - 1 + tabsArray.length) % tabsArray.length];
          break;
        case 'Home':
          targetTab = tabsArray[0];
          break;
        case 'End':
          targetTab = tabsArray[tabsArray.length - 1];
          break;
        default:
          return;
      }

      e.preventDefault();
      targetTab.focus();
    });
  });
}

function select(tabEl) {
  const tablist = tabEl.closest('.nf-tabs[role="tablist"]');
  if (!tablist) return;

  const tabs = tablist.querySelectorAll('.nf-tab[role="tab"]');

  tabs.forEach((tab) => {
    const panelId = tab.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;

    if (tab === tabEl) {
      tab.setAttribute('aria-selected', 'true');
      tab.setAttribute('tabindex', '0');
      if (panel) panel.removeAttribute('hidden');
    } else {
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('tabindex', '-1');
      if (panel) panel.setAttribute('hidden', '');
    }
  });
}

export const tabs = { init, select };
