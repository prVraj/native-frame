#!/usr/bin/env node

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const url = require('node:url');

const projectRoot = path.resolve(__dirname, '..');
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || '127.0.0.1';

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon'
};

function resolveSafePath(requestUrlPathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(requestUrlPathname);
  } catch {
    return null; // Malformed percent-encoding → reject
  }

  // Block null bytes (used in path truncation attacks)
  if (decoded.includes('\0')) return null;

  const requested = decoded === '/' ? '/examples/quick-start.html' : decoded;
  const absolutePath = path.resolve(projectRoot, `.${requested}`);

  // Resolve symlinks so startsWith cannot be bypassed
  try {
    const realRoot = fs.realpathSync(projectRoot);
    const realPath = fs.realpathSync(absolutePath);
    return realPath.startsWith(realRoot) ? realPath : null;
  } catch {
    // File doesn't exist yet → fall back to string check
    return absolutePath.startsWith(projectRoot) ? absolutePath : null;
  }
}

function serveFile(filePath, res) {
  fs.stat(filePath, (statErr, stats) => {
    if (statErr) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const finalPath = stats.isDirectory() ? path.join(filePath, 'index.html') : filePath;
    fs.readFile(finalPath, (readErr, content) => {
      if (readErr) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found');
        return;
      }

      const ext = path.extname(finalPath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, {
        'Content-Type': contentType,
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
      });
      res.end(content);
    });
  });
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url || '/');
  const safePath = resolveSafePath(parsed.pathname || '/');

  if (!safePath) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  serveFile(safePath, res);
});

server.listen(port, host, () => {
  const baseUrl = `http://${host}:${port}`;
  console.log(`NativeFrame dev server running at ${baseUrl}`);
  console.log('Open these pages in your browser:');
  console.log(`- ${baseUrl}/examples/quick-start.html`);
  console.log(`- ${baseUrl}/examples/landing-page.html`);
  console.log(`- ${baseUrl}/examples/simple-app.html`);
  console.log(`- ${baseUrl}/docs/index.html`);
});
