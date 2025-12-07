# Academix Hub — React + Vite + Tailwind Landing

A responsive single-page landing site for Academix Hub (education + innovation platform).

## Tech
- React 18 with Vite
- Tailwind CSS 3
- framer-motion, lucide-react, react-hook-form

## Quick start
```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Notes
- Place your logo at `public/academix-logo.png` (navbar references `/academix-logo.png` to avoid build errors if missing).
- Colors are defined in Tailwind theme: `navy`, `yellow`, `green`, `blue`, `red`, `offwhite`.
- Smooth scrolling enabled via CSS.
- Use `src/assets/` for images you import into components (bundled assets). Use `public/` for static files referenced by path.


