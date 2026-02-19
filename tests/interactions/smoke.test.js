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

async function runTests() {
  console.log('🧪 Running interaction smoke tests...\n');
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const testFile = path.resolve(__dirname, '../../examples/quick-start.html');
  const fileUrl = `file://${testFile}`;
  
  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  
  let passed = 0;
  let failed = 0;
  
  // Helper function to log test results
  function logTest(name, success, error = null) {
    if (success) {
      console.log(`  ✅ ${name}`);
      passed++;
    } else {
      console.error(`  ❌ ${name}`);
      if (error) console.error(`     Error: ${error.message}`);
      failed++;
    }
  }
  
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Modal Tests
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  console.log('Modal Tests:');
  
  try {
    // Test: Modal opens via data attribute
    const modalTrigger = await page.$('[data-modal-open="demo-modal"]');
    await modalTrigger.click();
    await page.waitForTimeout(200);
    
    const modal = await page.$('#demo-modal');
    const isModalVisible = await modal.evaluate(el => !el.hasAttribute('hidden'));
    logTest('Modal opens via data-modal-open', isModalVisible);
    
    // Test: Modal has correct aria-modal attribute
    const ariaModal = await modal.getAttribute('aria-modal');
    logTest('Modal has aria-modal="true"', ariaModal === 'true');
    
    // Test: Focus moves into modal
    const focusedElement = await page.evaluate(() => {
      return document.activeElement.closest('.nf-modal-content') !== null;
    });
    logTest('Focus moves into modal content', focusedElement);
    
    // Test: Close via Escape key
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);
    const isModalHidden = await modal.evaluate(el => el.hasAttribute('hidden'));
    logTest('Modal closes via Escape key', isModalHidden);
    
    // Test: Focus returns to trigger
    const focusReturnedToTrigger = await page.evaluate(() => {
      return document.activeElement === document.querySelector('[data-modal-open="demo-modal"]');
    });
    logTest('Focus returns to trigger after close', focusReturnedToTrigger);
    
  } catch (error) {
    logTest('Modal tests', false, error);
  }
  
  console.log('');
  
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Toast Tests
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  console.log('Toast Tests:');
  
  try {
    // Test: Toast shows via JS API
    const toastBtn = await page.$('#toast-success');
    await toastBtn.click();
    await page.waitForTimeout(300);
    
    const toastExists = await page.$('.nf-toast');
    logTest('Toast appears in DOM', toastExists !== null);
    
    // Test: Toast has correct type class
    if (toastExists) {
      const hasSuccessClass = await toastExists.evaluate(el => 
        el.classList.contains('nf-toast-success')
      );
      logTest('Toast has correct type class', hasSuccessClass);
      
      // Test: Toast auto-dismisses
      await page.waitForTimeout(4500); // Default duration is 4000ms + buffer
      const toastGone = await page.$('.nf-toast');
      logTest('Toast auto-dismisses after duration', toastGone === null);
    }
    
    // Test: Toast can be manually dismissed
    await toastBtn.click();
    await page.waitForTimeout(300);
    const closeBtn = await page.$('.nf-toast-close');
    if (closeBtn) {
      await closeBtn.click();
      await page.waitForTimeout(500);
      const dismissed = await page.$('.nf-toast');
      logTest('Toast can be manually dismissed', dismissed === null);
    }
    
  } catch (error) {
    logTest('Toast tests', false, error);
  }
  
  console.log('');
  
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Accordion Tests
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  console.log('Accordion Tests:');
  
  try {
    const accordionTrigger = await page.$('.nf-accordion-trigger');
    
    // Test: Accordion trigger starts collapsed
    const initialExpanded = await accordionTrigger.getAttribute('aria-expanded');
    logTest('Accordion starts with aria-expanded="false"', initialExpanded === 'false');
    
    // Test: Clicking trigger expands panel
    await accordionTrigger.click();
    await page.waitForTimeout(200);
    const expandedAfterClick = await accordionTrigger.getAttribute('aria-expanded');
    logTest('Accordion expands on click (aria-expanded="true")', expandedAfterClick === 'true');
    
    // Test: Panel is visible
    const panelVisible = await page.evaluate(() => {
      const panel = document.querySelector('.nf-accordion-panel');
      return !panel.hasAttribute('hidden');
    });
    logTest('Accordion panel is visible when expanded', panelVisible);
    
    // Test: Clicking again collapses
    await accordionTrigger.click();
    await page.waitForTimeout(200);
    const collapsedAfterSecondClick = await accordionTrigger.getAttribute('aria-expanded');
    logTest('Accordion collapses on second click', collapsedAfterSecondClick === 'false');
    
  } catch (error) {
    logTest('Accordion tests', false, error);
  }
  
  console.log('');
  
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Tabs Tests
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  console.log('Tabs Tests:');
  
  try {
    const firstTab = await page.$('.nf-tab[aria-selected="true"]');
    const secondTab = await page.$('.nf-tab[aria-selected="false"]');
    
    // Test: First tab is selected by default
    const firstSelected = await firstTab.getAttribute('aria-selected');
    logTest('First tab is selected by default', firstSelected === 'true');
    
    // Test: First panel is visible
    const firstPanelId = await firstTab.getAttribute('aria-controls');
    const firstPanelVisible = await page.evaluate((id) => {
      const panel = document.getElementById(id);
      return !panel.hasAttribute('hidden');
    }, firstPanelId);
    logTest('First tab panel is visible', firstPanelVisible);
    
    // Test: Clicking second tab switches selection
    await secondTab.click();
    await page.waitForTimeout(200);
    const secondSelected = await secondTab.getAttribute('aria-selected');
    logTest('Second tab becomes selected on click', secondSelected === 'true');
    
    // Test: First tab is deselected
    const firstDeselected = await firstTab.getAttribute('aria-selected');
    logTest('First tab is deselected', firstDeselected === 'false');
    
    // Test: Second panel is visible, first is hidden
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
  
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Tooltip Tests
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  console.log('Tooltip Tests:');
  
  try {
    const tooltipTrigger = await page.$('[data-tooltip]');
    
    // Test: Tooltip appears on hover
    await tooltipTrigger.hover();
    await page.waitForTimeout(300);
    
    const tooltip = await page.$('[role="tooltip"]');
    logTest('Tooltip appears on hover', tooltip !== null);
    
    // Test: Tooltip has correct role
    if (tooltip) {
      const role = await tooltip.getAttribute('role');
      logTest('Tooltip has role="tooltip"', role === 'tooltip');
    }
    
    // Test: Tooltip disappears on mouseout
    await page.mouse.move(0, 0);
    await page.waitForTimeout(300);
    const tooltipGone = await page.$('[role="tooltip"]');
    logTest('Tooltip disappears on mouseout', tooltipGone === null);
    
  } catch (error) {
    logTest('Tooltip tests', false, error);
  }
  
  await browser.close();
  
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Summary
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  console.log('');
  console.log('━'.repeat(60));
  console.log('Summary:');
  console.log('━'.repeat(60));
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log('━'.repeat(60));
  console.log('');
  
  if (failed > 0) {
    console.error('❌ Some tests failed\n');
    process.exit(1);
  } else {
    console.log('✅ All tests passed!\n');
    process.exit(0);
  }
}

// Run the tests
runTests().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
