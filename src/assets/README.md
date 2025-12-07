This folder is for module-imported assets (e.g., images you `import` in components).

- Use when you want bundling benefits (hashing, tree-shaking).
- Example: `import banner from './research-banner.svg'`.

Navbar logo now uses the `public/` folder to avoid build-time errors if the file is missing. Put your logo at `public/academix-logo.png`. You can switch back to an imported asset later if desired.


