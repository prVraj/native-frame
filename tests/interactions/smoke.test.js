/**
 * Smoke Tests for Interactive Components
 *
 * Tests basic functionality of all interactive components:
 * - Modal: open, close, focus trap, keyboard navigation
 * - Toast: show, auto-dismiss, manual dismiss
 * - Accordion: expand/collapse, aria attributes
 * - Tabs: select, keyboard navigation
 * - Tooltip: show on hover
 */

const { chromium } = require('playwright');
const path = require('path');
const http = require('http');
const fs = require('fs');

const PORT = 9876;
const PROJECT_ROOT = path.resolve(__dirname, '../..');

function startServer() {
  return new Promise((resolve) => {
    const mimeTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
    };

    const server = http.createServer((req, res) => {
      const filePath = path.join(PROJECT_ROOT, req.url === '/' ? '/examples/quick-start.html' : req.url);
      const ext = path.extname(filePath);
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end('Not found');
          return;
        }
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
        res.end(data);
      });
    });

    server.listen(PORT, '127.0.0.1', () => resolve(server));
  });
}

async function runTests() {
  console.log('Running interaction smoke tests...\n');

  const server = await startServer();
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(`http://127.0.0.1:${PORT}/examples/quick-start.html`, {
    waitUntil: 'domcontentloaded',
  });
  await page.waitForTimeout(500);

  let passed = 0;
  let failed = 0;

  // Show a specific component section (all others are hidden by default on load)
  async function showSection(componentId) {
    await page.evaluate((id) => {
      document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
      const section = document.getElementById(`${id}-section`);
      if (section) section.classList.remove('hidden');
    }, componentId);
    await page.waitForTimeout(100);
  }

  function logTest(name, success, error) {
    if (success) {
      console.log('  PASS: ' + name);
      passed++;
    } else {
      console.error('  FAIL: ' + name);
      if (error) console.error('     Error: ' + error.message);
      failed++;
    }
  }

  // ── Modal Tests ──

  console.log('Modal Tests:');

  try {
    await showSection('modal');
    const modalTrigger = await page.$('[data-modal-open="demo-modal"]');
    await modalTrigger.click();
    await page.waitForTimeout(300);

    const modal = await page.$('#demo-modal');
    const isModalVisible = await modal.evaluate(el => !el.hasAttribute('hidden'));
    logTest('Modal opens via data-modal-open', isModalVisible);

    const focusedElement = await page.evaluate(() => {
      return document.activeElement.closest('.nf-modal-content') !== null;
    });
    logTest('Focus moves into modal content', focusedElement);

    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    const isModalHidden = await modal.evaluate(el => el.hasAttribute('hidden'));
    logTest('Modal closes via Escape key', isModalHidden);

    const focusReturnedToTrigger = await page.evaluate(() => {
      return document.activeElement === document.querySelector('[data-modal-open="demo-modal"]');
    });
    logTest('Focus returns to trigger after close', focusReturnedToTrigger);
  } catch (error) {
    logTest('Modal tests', false, error);
  }

  console.log('');

  // ── Toast Tests ──

  console.log('Toast Tests:');

  try {
    await showSection('toast');
    await page.evaluate(() => NF.toast.dismissAll());
    await page.waitForTimeout(300);

    await page.evaluate(() => {
      NF.toast.show('Test toast message', { type: 'success', duration: 3000 });
    });
    await page.waitForTimeout(400);

    const toastExists = await page.$('.nf-toast');
    logTest('Toast appears in DOM', toastExists !== null);

    if (toastExists) {
      const hasSuccessClass = await toastExists.evaluate(el =>
        el.classList.contains('nf-toast-success')
      );
      logTest('Toast has correct type class', hasSuccessClass);

      await page.waitForTimeout(3500);
      const toastGone = await page.$('.nf-toast:not(.is-dismissing)');
      logTest('Toast auto-dismisses after duration', toastGone === null);
    }

    await page.evaluate(() => NF.toast.dismissAll());
    await page.waitForTimeout(300);

    await page.evaluate(() => {
      NF.toast.show('Dismiss test', { type: 'info', duration: 0 });
    });
    await page.waitForTimeout(400);

    const closeBtn = await page.$('.nf-toast-close');
    if (closeBtn) {
      await closeBtn.click();
      await page.waitForTimeout(400);
      const dismissed = await page.$('.nf-toast:not(.is-dismissing)');
      logTest('Toast can be manually dismissed', dismissed === null);
    }
  } catch (error) {
    logTest('Toast tests', false, error);
  }

  console.log('');

  // ── Accordion Tests ──

  console.log('Accordion Tests:');

  try {
    await showSection('accordion');
    const accordionTrigger = await page.$('.nf-accordion-trigger');

    const initialExpanded = await accordionTrigger.getAttribute('aria-expanded');
    logTest('Accordion starts with aria-expanded="false"', initialExpanded === 'false');

    await accordionTrigger.click();
    await page.waitForTimeout(300);
    const expandedAfterClick = await accordionTrigger.getAttribute('aria-expanded');
    logTest('Accordion expands on click', expandedAfterClick === 'true');

    const panelVisible = await page.evaluate(() => {
      const panel = document.querySelector('.nf-accordion-panel');
      return !panel.hasAttribute('hidden');
    });
    logTest('Accordion panel is visible when expanded', panelVisible);

    await accordionTrigger.click();
    await page.waitForTimeout(300);
    const collapsedAfterSecondClick = await accordionTrigger.getAttribute('aria-expanded');
    logTest('Accordion collapses on second click', collapsedAfterSecondClick === 'false');
  } catch (error) {
    logTest('Accordion tests', false, error);
  }

  console.log('');

  // ── Tabs Tests ──

  console.log('Tabs Tests:');

  try {
    await showSection('tabs');
    const firstTab = await page.$('.nf-tab[aria-selected="true"]');
    const secondTab = await page.$('.nf-tab[aria-selected="false"]');

    const firstSelected = await firstTab.getAttribute('aria-selected');
    logTest('First tab is selected by default', firstSelected === 'true');

    const firstPanelId = await firstTab.getAttribute('aria-controls');
    const firstPanelVisible = await page.evaluate((id) => {
      const panel = document.getElementById(id);
      return panel && !panel.hasAttribute('hidden');
    }, firstPanelId);
    logTest('First tab panel is visible', firstPanelVisible);

    await secondTab.click();
    await page.waitForTimeout(200);
    const secondSelected = await secondTab.getAttribute('aria-selected');
    logTest('Second tab becomes selected on click', secondSelected === 'true');

    const firstDeselected = await firstTab.getAttribute('aria-selected');
    logTest('First tab is deselected', firstDeselected === 'false');

    const secondPanelId = await secondTab.getAttribute('aria-controls');
    const panelsCorrect = await page.evaluate((first, second) => {
      const firstPanel = document.getElementById(first);
      const secondPanel = document.getElementById(second);
      return firstPanel.hasAttribute('hidden') && !secondPanel.hasAttribute('hidden');
    }, firstPanelId, secondPanelId);
    logTest('Panel visibility switches correctly', panelsCorrect);
  } catch (error) {
    logTest('Tabs tests', false, error);
  }

  console.log('');

  // ── Tooltip Tests ──

  console.log('Tooltip Tests:');

  try {
    await showSection('tooltip');
    const tooltipTrigger = await page.$('[data-tooltip]');

    await tooltipTrigger.hover();
    await page.waitForTimeout(300);

    const tooltip = await page.$('[role="tooltip"]');
    logTest('Tooltip appears on hover', tooltip !== null);

    if (tooltip) {
      const role = await tooltip.getAttribute('role');
      logTest('Tooltip has role="tooltip"', role === 'tooltip');
    }

    await page.mouse.move(0, 0);
    await page.waitForTimeout(300);
    const tooltipGone = await page.$('[role="tooltip"]');
    logTest('Tooltip disappears on mouseout', tooltipGone === null);
  } catch (error) {
    logTest('Tooltip tests', false, error);
  }

  await browser.close();
  server.close();

  // ── Summary ──

  console.log('');
  console.log('---');
  console.log('Passed: ' + passed);
  console.log('Failed: ' + failed);
  console.log('---');
  console.log('');

  if (failed > 0) {
    console.error('Some tests failed');
    process.exit(1);
  } else {
    console.log('All tests passed!');
    process.exit(0);
  }
}

runTests().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
