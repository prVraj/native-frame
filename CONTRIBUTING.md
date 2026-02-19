# Contributing to NativeFrame

Thanks for your interest in contributing! This guide covers how to set up the project, make changes, and submit a pull request.

## Development setup

```bash
git clone https://github.com/prVraj/native-frame.git
cd native-frame
npm install
npm run build
npm run serve
```

The dev server starts at `http://127.0.0.1:4173`. Open it in your browser to preview changes.

## Branching

- `main` is the stable branch. It should always be deployable.
- Name feature branches `feat/description` (e.g., `feat/dropdown-component`).
- Name bug fix branches `fix/description` (e.g., `fix/modal-focus-trap`).

## Commit messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add dropdown component
fix: correct focus trap in modal
docs: update button examples
refactor: simplify accordion state management
```

## Before opening a pull request

1. Run the build and make sure it succeeds:
   ```bash
   npm run build
   ```
2. Run the CSS linter:
   ```bash
   npm run lint:css
   ```
3. Run interaction tests (requires Playwright):
   ```bash
   npm test
   ```
4. Keep each PR focused on one component or one bug fix.
5. Include a short description of what changed and why.

## Code conventions

- CSS class names start with `nf-` (e.g., `nf-btn`, `nf-card-header`).
- CSS custom properties start with `--nf-` (e.g., `--nf-color-primary`).
- JavaScript is exposed under the global `NF` object.
- No runtime dependencies. The library must stay self-contained.
- Each interactive component lives in its own file under `src/js/`.
- Each CSS component lives in its own file under `src/css/components/`.

## Adding a new component

1. Create `src/css/components/_newcomponent.css`.
2. If it needs JavaScript, create `src/js/newcomponent.js`.
3. Add the CSS file to the `CSS_FILES` array in `scripts/build.js`.
4. If there is a JS file, add it to the `JS_FILES` array (before `index.js`).
5. Write documentation in `docs/components/newcomponent.md`.
6. Add an example to `examples/quick-start.html`.
7. Run `npm run build` to confirm everything compiles cleanly.
