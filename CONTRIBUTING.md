# Contributing to NativeFrame

Thank you for your interest in contributing!

## Branch Strategy

- `main` is the stable branch — always deployable
- Feature branches are named `feat/component-name`
- Bug fix branches are named `fix/description`

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat: add toggle component`
- `fix: correct focus trap in modal`
- `docs: update button examples`
- `refactor: simplify accordion state management`

## Pull Request Rules

- One component or bug fix per PR
- All interactive components must include accessibility tests
- Run `npm run build`, `npm run test`, and `npm run lint:css` before submitting
- Include a brief description of changes and any relevant screenshots

## Development Setup

```bash
git clone https://github.com/your-org/nativeframe.git
cd nativeframe
npm install
npm run build
npm run serve
```

## Code Style

- All CSS class names are prefixed `nf-`
- CSS custom properties are prefixed `--nf-`
- JS global namespace: `NF`
- No external runtime dependencies
