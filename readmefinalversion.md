# Landing Page — Electronics Storefront Demo

**A React single-page storefront experience with curated sections, catalog browsing, and a persistent cart.**

---

## Overview

This project is a marketing-style landing page for an electronics retailer. It combines a hero showcase, feature highlights, shoppable product categories (laptops, mobile, tablets, audio & visuals, storage), testimonials, and a dedicated cart route. Catalog data is loaded from the [DummyJSON](https://dummyjson.com/) API for laptop search results and from static JSON files in `public/` for other categories; the app caches fetched payloads in the browser so repeat visits skip unnecessary network calls.

*(Assumption: The site is positioned as a portfolio or learning demo storefront rather than a production e-commerce backend, since cart and inventory are entirely client-side.)*

---

## Features

- **Multi-section landing layout** — Home hero with rotating product visuals, features, category grid, testimonials, and footer with in-page anchors.
- **Product catalog** — Merged inventory across laptops (API), mobiles, tablets, audio/visuals, and storage (local JSON).
- **Shopping cart** — Add items, adjust quantities, remove lines, clear cart; state persisted via `localStorage`.
- **Theming** — Light / dark mode toggled globally (`data-theme` on the document root).
- **Routing** — `react-router-dom` with a main landing route (`/`) and cart page (`/cart`).
- **Normalized catalog** — `DataContext` merges all category arrays into `allProducts` and maps each row through `normalize()` so every item exposes a single `image` field (`image` → `images[0]` → `thumbnail` fallback).
- **Recommendations** — `getRecommendations(anchorProduct, allProducts, cart)` on `/cart` uses the **first** cart line as the anchor, scores others by category (+3), brand (+2), and shared title words, returns up to four picks, **skips products already in the cart**, dedupes by `id`, and requires a truthy `image` on candidates.
- **Resilient data loading** — Initial load skips refetch when all categories are already restored from `localStorage`.

---

## Data layer (how catalogs and cart line up)

| Concern | Where it lives |
|--------|----------------|
| Fetch + cache five category arrays | `App.js` + `hooks/useLocalStorage.js` |
| Single merged list for recommendations | `context/DataContext.js` → `allProducts` (concatenation + `normalize()` per row) |
| Cart read/write | `DataContext` — `localStorage` key `cart` (separate from the hook-based catalog keys) |
| Featured search grid | `components/features.jsx` merges the same slices locally for filtering (variable name `allProducts` there is **only** the sliced view for the grid, not the context value) |

---

## Tech Stack

| Area | Technologies |
|------|----------------|
| UI | React 19, JSX |
| Routing | React Router 7 (`react-router`, `react-router-dom`) |
| Styling | CSS, SCSS modules (`.module.scss` / `.module.css`), global styles |
| Icons / UX | `react-icons`, `react-scroll` |
| Tooling | Create React App (`react-scripts` 5), ESLint (`react-app` preset) |
| Testing | Jest via CRA, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event` |
| Data | Fetch API, `localStorage` (custom hook + cart persistence) |

---

## Prerequisites

- **Node.js** (LTS recommended).  
  *(Assumption: Node 18+ is sufficient for React 19 and CRA 5; the repo does not declare an `engines` field.)*
- **npm** (bundled with Node).

---

## Installation

1. **Clone the repository** (or unzip the project folder).

   ```bash
   git clone <your-repo-url>
   cd landingpage
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment (optional)**

   Copy or create a `.env` file in the project root if yours is missing. The repository may include `.env` with CRA-specific variables (see below).

---

## Running Locally

| Command | Description |
|---------|-------------|
| `npm start` | Dev server at [http://localhost:3000](http://localhost:3000) with hot reload. |
| `npm run build` | Production build output in `build/`. |
| `npm test` | Jest test runner in interactive watch mode. |
| `npm test -- --watchAll=false` | Run tests once and exit. |

**First-load behavior:** Until product data finishes loading, the app shows a short “Loading Products…” message. Laptops require network access to `https://dummyjson.com/...`; static JSON is served from `public/`.

---

## Usage Examples

- **Navigate the landing page** — Use the navbar (and `react-scroll`–style anchors) to jump to Home, Features, Products, Testimonials, and Footer sections on `/`.
- **Browse categories** — Use **Featured Products** (search + expandable descriptions) and **Shop By Category** tabs in `ProductCategory`; **Add to cart** goes through `DataContext.addToCart` (duplicate `id` lines merge quantities).
- **Manage cart** — Go to **`/cart`** to change quantities (minus is disabled at quantity 1), remove lines, or clear the cart; navbar shows a cart count when items exist. **You may also like** uses the recommender above; **Check out** is a UI placeholder (no handler).
- **Toggle theme** — Use the theme control exposed in the navbar *(dark mode defaults to `true` in `App.js`)*.

---

## Configuration & Environment Variables

Create a `.env` file in the project root (CRA reads variables prefixed with `REACT_APP_` for client exposure; general tooling vars are also supported):

| Variable | Purpose |
|----------|---------|
| `DISABLE_ESLINT_PLUGIN=true` | Disables the ESLint webpack plugin during `npm start` / build for faster iteration. **Present in this repo’s `.env` when checked out.**

**Security note:** Do not commit secrets in `.env`. This project’s `.gitignore` already ignores `.env.local` variants. Root `.env` may be tracked in your fork—prefer `.env.example` with placeholders if you publish publicly *(recommendation, not enforced in codebase)*.

**Browser storage keys** *(for debugging)*: `products`, `mobileData`, `audioData`, `tabletData`, `storageData` (catalog cache via `useLocalStorage`), and `cart` (managed in `DataContext`).

---

## Project Structure *(high level)*

```text
landingpage/
├── public/                 # Static assets, SPA shell, catalog JSON mocks
├── src/
│   ├── components/         # Navbar, Home, Features, ProductCategory, Testimonials, Footer, ...
│   ├── context/           # DataContext — merge + normalize → allProducts, cart, getRecommendations
│   ├── hooks/             # useLocalStorage
│   ├── pages/             # Cart page
│   ├── styles/            # Module SCSS/CSS per feature area
│   ├── App.js             # Router, providers, data bootstrap, loading gate
│   └── index.js           # Entry
├── package.json
├── TESTING-GUIDE.md       # Detailed test commands and file map
└── readmefinalversion.md # This document
```

---

## Testing

Automated tests live alongside components (e.g. `home.test.js`, `footer.test.js`, `datacontext.test.js`). For patterns and CLI options, see [`TESTING-GUIDE.md`](./TESTING-GUIDE.md).

```bash
npm test
npm test -- --coverage
```

*(Assumption: The testing guide mentions additional test files such as `App.test.js`; the current repo may contain a subset—the guide is still useful for command-line usage.)*

---

## Contributing

1. Fork the repository and create a branch from `main` (or the default branch).
2. Keep changes focused; match existing naming, JSX style, and module CSS/SCSS patterns.
3. Run `npm test` before opening a PR; fix regressions introduced by your change.
4. Describe motivation and behavior in your PR description; link issues if applicable.

Maintainers may iterate on conventions; when in doubt, follow patterns in `App.js` and `DataContext`.

---

## License

**Not specified** — No `LICENSE` file was found in the repository. Add one (for example MIT) if you intend to clarify terms for redistribution.

---

## Acknowledgments

- Laptop product data sourced from **DummyJSON** (`https://dummyjson.com/products/search?q=laptop`).
- Bootstrapped with **Create React App**.
