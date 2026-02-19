const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const { minify } = require('terser');
const zlib = require('zlib');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SRC = path.join(ROOT, 'src');

// CSS files in import order
const CSS_FILES = [
  'css/_tokens.css',
  'css/_reset.css',
  'css/_base.css',
  'css/components/_button.css',
  'css/components/_input.css',
  'css/components/_select.css',
  'css/components/_checkbox-radio.css',
  'css/components/_toggle.css',
  'css/components/_card.css',
  'css/components/_modal.css',
  'css/components/_tooltip.css',
  'css/components/_toast.css',
  'css/components/_tabs.css',
  'css/components/_accordion.css',
  'css/components/_badge.css',
  'css/components/_avatar.css',
  'css/components/_skeleton.css',
  'css/components/_layout.css',
];

// JS files in import order
const JS_FILES = [
  'js/accordion.js',
  'js/tabs.js',
  'js/tooltip.js',
  'js/modal.js',
  'js/toast.js',
  'js/index.js',
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function gzipSize(content) {
  const buf = typeof content === 'string' ? Buffer.from(content) : content;
  return zlib.gzipSync(buf).length;
}

function formatSize(bytes) {
  return (bytes / 1024).toFixed(2) + ' KB';
}

async function buildCSS() {
  console.log('Building CSS...');

  // Read and concatenate
  let combined = `/* NativeFrame v0.1.0 */\n`;
  for (const file of CSS_FILES) {
    const filePath = path.join(SRC, file);
    const content = fs.readFileSync(filePath, 'utf8');
    combined += `\n/* --- ${file} --- */\n${content}\n`;
  }

  // Write unminified
  const outCSS = path.join(DIST, 'nativeframe.css');
  fs.writeFileSync(outCSS, combined);
  console.log(`  nativeframe.css       ${formatSize(Buffer.byteLength(combined))} (gzip: ${formatSize(gzipSize(combined))})`);

  // Minify
  const minified = new CleanCSS({ level: 2 }).minify(combined);
  if (minified.errors.length > 0) {
    console.error('CSS minification errors:', minified.errors);
    process.exit(1);
  }
  const outMinCSS = path.join(DIST, 'nativeframe.min.css');
  fs.writeFileSync(outMinCSS, minified.styles);
  console.log(`  nativeframe.min.css   ${formatSize(Buffer.byteLength(minified.styles))} (gzip: ${formatSize(gzipSize(minified.styles))})`);
}

async function buildJS() {
  console.log('Building JS...');

  // Read and concatenate — strip ES module export/import statements for IIFE bundle
  // Each module (except index.js) is wrapped in its own scope to prevent name collisions
  let combined = `/* NativeFrame v0.1.0 */\n(function(){\n"use strict";\n`;
  for (const file of JS_FILES) {
    const filePath = path.join(SRC, file);
    let content = fs.readFileSync(filePath, 'utf8');
    // Strip import statements entirely
    content = content.replace(/^import\s+.*;\s*$/gm, '');

    const isIndex = file.endsWith('index.js');

    if (isIndex) {
      // index.js: strip export, keep in outer scope
      content = content.replace(/^export\s+/gm, '');
      combined += `\n/* --- ${file} --- */\n${content}\n`;
    } else {
      // Module files: extract the exported const name, wrap in a scoped IIFE
      // e.g. "export const accordion = { ... };" → wrap everything, return the object
      const exportMatch = content.match(/^export\s+const\s+(\w+)\s*=/m);
      if (exportMatch) {
        const varName = exportMatch[1];
        content = content.replace(/^export\s+const\s+(\w+)/m, 'return {');
        // Find the assignment object and restructure: "return { = { init, ... };" → proper return
        // Simpler: strip export, wrap in IIFE that returns the module object
        // Re-read the original content for a cleaner approach
        let raw = fs.readFileSync(filePath, 'utf8');
        raw = raw.replace(/^import\s+.*;\s*$/gm, '');
        // Replace "export const varName = { ... };" with "return { ... };"
        raw = raw.replace(
          new RegExp(`^export\\s+const\\s+${varName}\\s*=\\s*`, 'm'),
          'return '
        );
        combined += `\n/* --- ${file} --- */\nconst ${varName} = (function(){\n${raw}\n})();\n`;
      } else {
        content = content.replace(/^export\s+/gm, '');
        combined += `\n/* --- ${file} --- */\n${content}\n`;
      }
    }
  }
  combined += `\n})();\n`;

  // Write unminified
  const outJS = path.join(DIST, 'nativeframe.js');
  fs.writeFileSync(outJS, combined);
  console.log(`  nativeframe.js        ${formatSize(Buffer.byteLength(combined))} (gzip: ${formatSize(gzipSize(combined))})`);

  // Minify
  const result = await minify(combined, { compress: true, mangle: true });
  if (result.error) {
    console.error('JS minification error:', result.error);
    process.exit(1);
  }
  const outMinJS = path.join(DIST, 'nativeframe.min.js');
  fs.writeFileSync(outMinJS, result.code);
  console.log(`  nativeframe.min.js    ${formatSize(Buffer.byteLength(result.code))} (gzip: ${formatSize(gzipSize(result.code))})`);
}

async function main() {
  ensureDir(DIST);
  await buildCSS();
  await buildJS();
  console.log('\nBuild complete!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
