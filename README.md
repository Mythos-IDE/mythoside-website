<div align="center">
  <img src="assets/readme/hero.svg" alt="MythosIDE Website — the product site for the world development environment" width="100%" />
</div>

# MythosIDE Website (`mythoside-website`)

[![License: MIT](https://img.shields.io/badge/license-MIT-C9A24B)](./LICENSE)

<p align="center">English · <a href="./README.TR.md">Türkçe</a></p>

<p align="center">
  <a href="https://github.com/Mythos-IDE">Ecosystem</a>
  &nbsp;·&nbsp;
  <a href="https://github.com/Mythos-IDE/mythoside-core">Core engine</a>
  &nbsp;·&nbsp;
  <a href="https://github.com/Mythos-IDE/mythoside-ts">Desktop app</a>
</p>

The official landing page for **MythosIDE** — the local-first world development environment for novelists. It tells the product story: reading a whole series the way a compiler reads a codebase, so continuity errors surface before a reader finds them.

Built as a single-page React app with the same editorial identity as the product itself — ink-and-gold, a serif display face over a monospace UI, English and Turkish content, and light and dark themes.

## Stack

| Layer | Tooling |
| --- | --- |
| Build | Vite |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4 with custom design tokens |
| i18n | Built-in EN / TR toggle (no runtime dependency) |
| Theme | Light + dark, follows system preference, persists choice |

## Run locally

```bash
git clone https://github.com/Mythos-IDE/mythoside-website.git
cd mythoside-website
npm install
npm run dev
```

Vite serves the site at `http://localhost:5173`. Build for production with `npm run build`.

## Project layout

```text
src/index.css              design tokens (ink-and-gold), light/dark themes
src/i18n.tsx               EN / TR dictionary and language toggle
src/theme.tsx              theme context and toggle
src/components/sections/   Hero, Problem, Model, Engine, Ethos, Pricing, Footer
src/components/ui/         shared primitives (FadeIn, Logo)
```

## License

MIT — see [LICENSE](./LICENSE). (The `mythoside-core` engine and `mythoside-ts` app are under FSL-1.1; the website is MIT.)
