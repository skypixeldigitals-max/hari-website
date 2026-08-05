# HARI — pre-launch website

Static landing page for HARI, hosted free on GitHub Pages. No backend, no build
step required to deploy — the compiled CSS is committed.

---

## Before you go live — 3 things to fill in

### 1. Your GitHub Pages URL

Search `REPLACE-ME` in `index.html` (4 places: canonical, og:url, og:image,
twitter:image, and the JSON-LD `url`) and swap in your real URL, e.g.
`https://devike.github.io/hari-website/`.

### 2. Your contact email

In `index.html`, search `REPLACE-ME@example.com` in the footer.

### 3. The signup forms (Google Form)

All three forms — homepage waitlist, "not in Colombo", and the professionals
signup — post to one Google Form. Until you set this up, the forms show an
honest "signups open shortly" message rather than faking success.

1. Create a Google Form with three short-answer questions, in this order:
   **Email**, **Town**, **Type**.
2. Click **Send → `<>`** (embed) and copy the form URL. It looks like
   `https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform`.
3. In the form's live page, right-click → **View page source**, then search for
   `entry.` — you'll find three IDs like `entry.1234567890`. They appear in the
   same order as your questions.
4. Open `assets/js/site.js` and fill in the CONFIG block at the top:

```js
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSc.../formResponse";
const FIELD_EMAIL = "entry.1234567890";
const FIELD_TOWN  = "entry.2345678901";
const FIELD_TYPE  = "entry.3456789012";
```

Note the URL ends in **`/formResponse`**, not `/viewform`.

Responses land in the linked Google Sheet. The `Type` column tells you whether a
signup was a `client`, a `pro`, or an `area` request.

---

## Deploying to GitHub Pages

Create a new **public** repo on GitHub (public is required for free Pages), then
from this folder:

```bash
git init && git add . && git commit -m "HARI pre-launch site" && git branch -M main && git remote add origin https://github.com/YOUR-USERNAME/hari-website.git && git push -u origin main
```

Then in the repo on github.com: **Settings → Pages → Source: Deploy from a
branch → Branch: `main` / `(root)` → Save**. The site is live in about a minute
at `https://YOUR-USERNAME.github.io/hari-website/`.

`.nojekyll` is already included so GitHub serves the files as-is.

---

## Editing the site later

Plain HTML — open `index.html` and edit the text. Two rules:

- Copy also lives in `assets/js/site.js` (the `strings` object). If you change a
  sentence in the HTML, change the matching key there too, or the language
  toggle will revert it.
- If you add or change **Tailwind class names**, rebuild the CSS:

```bash
npm install && npm run build
```

`npm run dev` watches for changes while you work. If you only edit text, you
never need to rebuild.

---

## Adding Sinhala and Tamil

`assets/js/site.js` has empty `si: {}` and `ta: {}` objects. Add only the keys
you have translated:

```js
si: {
  hero_title_1: "…",
  hero_title_2: "…"
},
```

Anything missing falls back to English automatically, so a half-finished
translation never shows broken text to a visitor. Have a native speaker write
these — do not machine-translate, especially the founder note.

---

## Still outstanding

- **Devike's headshot is 200×200.** It will look soft in the 192px circle on
  retina screens. Replace `assets/img/team-1.jpg` with a larger original.
- **Confirm the photo-to-name mapping** in the team section before launch.
- **A proper 1200×630 social share image.** `og:image` currently points at the
  hero photo, which crops awkwardly in link previews.
- **Real privacy policy and terms** before App Store / Play submission.
  `privacy.html` and `terms.html` are honest interim pages, not legal documents.
- **Real photography** of actual verified providers, replacing the AI imagery.
