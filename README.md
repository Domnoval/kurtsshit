# TCCYG — Twin Cities Concrete Yard & Garden

One-page site for TCCYG. Hand-cast concrete monoliths, LED fissures, living gardens.

## What's here

Static files, no build step. Open `index.html` in a browser to run locally.

```
index.html            # entry — sets up the React tree via CDN + inline JSX
hero-styles.css       # hero / above-the-fold styles, lights-on animation, embers
site-styles.css       # Work, Process, Materials, Commission, Footer
tokens.css            # design tokens — color, type, spacing, motion
Wordmark.jsx          # TCCYG mark + wordmark SVG components
HeroScene.jsx         # animated hero (parallax, cursor-tracked lantern, rock ignition)
Sections.jsx          # Work grid, Process timeline, Materials, Commission form, Footer
assets/               # photos and logo PNGs
```

Dependencies are pulled from a CDN (`react@18.3.1`, `@babel/standalone`) so nothing needs to be installed.

## Local dev

Any static server works. Two quick options:

```sh
python3 -m http.server 8000
# or
npx serve .
```

Then open http://localhost:8000.

Edit any `.jsx`, `.css`, or `index.html` — hard refresh to see changes. The Babel standalone script compiles JSX in the browser.

## Hero interaction

Move your cursor over the "1371" carved into the rock — the amber LEDs ignite (ignition flicker → steady burn), the cursor-tracked lantern fades in, embers brighten, the status dot shifts from sage to amber. Leave the zone and it all settles back to dusk. Logic lives in `HeroScene.jsx` (`onMove` handler).

## Copy, photos, and content

- **Hero copy** — edit the `DEFAULTS` object in `index.html`.
- **Hero photo** — change `DEFAULTS.photo`. Available keys are defined in `HeroScene.jsx` (`PHOTOS` map): `rock-1371`, `hero-bg`, `slab`, `landscape`, `river`, `industrial`, `rock-1371-orig`. Add new options by dropping an image into `assets/` and adding a line to `PHOTOS`.
- **Work grid** — `WORK_ITEMS` in `Sections.jsx`. Currently 7 placeholder cards with `span-4/6/8` grid sizes; drop a `photoUrl` field onto an item to swap placeholders for real images (will need a small CSS tweak for `background-image`).
- **Process steps** — `PROCESS_STEPS` in `Sections.jsx`.
- **Materials** — `MATERIALS` in `Sections.jsx`.
- **Studio details / contact** — inline in `SectionCommission` (`Sections.jsx`).

## Deployment

GitHub Pages workflow at `.github/workflows/pages.yml` deploys `main` on every push. No build, no Node. After the first deploy, enable Pages in repo settings under **Settings → Pages → Source: GitHub Actions** (one-time, has to be clicked in the UI).

## Known production notes

- The site ships with unminified CSS and CDN-loaded React — fine for a marketing page, but if traffic matters, pre-compile the JSX with a real bundler (Vite) and host static chunks.
- `Tweaks.jsx` (the in-design editor panel) is intentionally not loaded here — it only runs inside Claude Design's iframe.
