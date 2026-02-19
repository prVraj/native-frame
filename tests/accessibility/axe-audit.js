/**
 * Accessibility Audit using axe-core
 * 
 * This script runs axe-core accessibility tests on all example pages
 * and fails if any violations are found.
 */

const { chromium } = require('playwright');
const path = require('path');

const EXAMPLES = [
  'quick-start.html',
  'landing-page.html',
  'simple-app.html'
];

async function runAudit() {
  console.log('🔍 Running accessibility audit with axe-core...\n');
  
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  let totalViolations = 0;
  const results = [];
  
  for (const example of EXAMPLES) {
    const filePath = path.resolve(__dirname, '../../examples', example);
    const fileUrl = `file://${filePath}`;
    
    console.log(`Auditing: ${example}`);
    
    try {
      await page.goto(fileUrl, { waitUntil: 'networkidle' });
      
      // Run axe audit
      const accessibilityScanResults = await page.evaluate(async () => {
        const axe = require('axe-core');
        return await axe.run();
      });
      
      const violations = accessibilityScanResults.violations || [];
      
      if (violations.length === 0) {
        console.log(`  ✅ No violations found\n`);
      } else {
        console.log(`  ❌ Found ${violations.length} violation(s):\n`);
        
        violations.forEach((violation, index) => {
          console.log(`  ${index + 1}. ${violation.id}: ${violation.description}`);
          console.log(`     Impact: ${violation.impact}`);
          console.log(`     Affected nodes: ${violation.nodes.length}`);
          console.log(`     Help: ${violation.helpUrl}\n`);
        });
        
        totalViolations += violations.length;
      }
      
      results.push({
        file: example,
        violations: violations.length,
        issues: violations
      });
      
    } catch (error) {
      console.error(`  ❌ Error auditing ${example}:`, error.message);
      totalViolations++;
    }
  }
  
  await browser.close();
  
  // Summary
  console.log('━'.repeat(60));
  console.log('Summary:');
  console.log('━'.repeat(60));
  results.forEach(result => {
    const status = result.violations === 0 ? '✅' : '❌';
    console.log(`${status} ${result.file}: ${result.violations} violation(s)`);
  });
  console.log('━'.repeat(60));
  
  if (totalViolations > 0) {
    console.error(`\n❌ Accessibility audit failed with ${totalViolations} violation(s)\n`);
    process.exit(1);
  } else {
    console.log('\n✅ All accessibility audits passed!\n');
    process.exit(0);
  }
}

// Alternative implementation using axe-core directly via script injection
async function runAuditDirect() {
  console.log('🔍 Running accessibility audit with axe-core...\n');
  
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Inject axe-core script
  const axeCorePath = require.resolve('axe-core');
  const axeCore = require('fs').readFileSync(axeCorePath, 'utf8');
  
  let totalViolations = 0;
  const results = [];
  
  for (const example of EXAMPLES) {
    const filePath = path.resolve(__dirname, '../../examples', example);
    const fileUrl = `file://${filePath}`;
    
    console.log(`Auditing: ${example}`);
    
    try {
      await page.goto(fileUrl, { waitUntil: 'networkidle' });
      
      // Inject and run axe
      await page.addScriptTag({ content: axeCore });
      
      const accessibilityScanResults = await page.evaluate(() => {
        return axe.run();
      });
      
      const violations = accessibilityScanResults.violations || [];
      
      if (violations.length === 0) {
        console.log(`  ✅ No violations found\n`);
      } else {
        console.log(`  ❌ Found ${violations.length} violation(s):\n`);
        
        violations.forEach((violation, index) => {
          console.log(`  ${index + 1}. ${violation.id}: ${violation.description}`);
          console.log(`     Impact: ${violation.impact}`);
          console.log(`     Affected nodes: ${violation.nodes.length}`);
          console.log(`     Help: ${violation.helpUrl}\n`);
        });
        
        totalViolations += violations.length;
      }
      
      results.push({
        file: example,
        violations: violations.length,
        issues: violations
      });
      
    } catch (error) {
      console.error(`  ❌ Error auditing ${example}:`, error.message);
      console.error(error.stack);
      totalViolations++;
    }
  }
  
  await browser.close();
  
  // Summary
  console.log('━'.repeat(60));
  console.log('Summary:');
  console.log('━'.repeat(60));
  results.forEach(result => {
    const status = result.violations === 0 ? '✅' : '❌';
    console.log(`${status} ${result.file}: ${result.violations} violation(s)`);
  });
  console.log('━'.repeat(60));
  
  if (totalViolations > 0) {
    console.error(`\n❌ Accessibility audit failed with ${totalViolations} violation(s)\n`);
    process.exit(1);
  } else {
    console.log('\n✅ All accessibility audits passed!\n');
    process.exit(0);
  }
}

// Run the audit
runAuditDirect().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
