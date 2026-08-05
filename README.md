# HARI — pre-launch website

Static landing page for HARI, hosted free on GitHub Pages. No backend, no build
step required to deploy — the compiled CSS is committed.

---

## Before you go live

### 1. Live URL — done

The site is deployed at
<https://skypixeldigitals-max.github.io/hari-website/> and all canonical,
Open Graph, Twitter and JSON-LD URLs point at it.

### 2. Contact email — still open

The footer carries WhatsApp only. No email address was supplied, so the
"Email us" link was removed rather than shipping a dead `mailto:`.

### 3. The signup forms (Firebase)

All three forms write into the `waitlist` collection of your existing Firebase
project (`hari-192a3`). Until this is done the forms show an honest "signups
open shortly" message instead of faking success.

Two steps, both in the Firebase console:

**a. Register a web app.** Project settings -> Your apps -> Web. The mobile app
is registered as Android only and its API key is Android-restricted, so the
browser cannot reuse it. Copy the new web app's `apiKey` into
`FIREBASE_API_KEY` at the top of `assets/js/site.js`.

**b. Add this Firestore rule** (Firestore -> Rules). Create-only, size-capped,
and unreadable from the browser -- you read the list in the console:

```
match /databases/{database}/documents {
  match /waitlist/{doc} {
    allow create: if request.resource.data.keys().hasOnly(
                    ['email','town','kind','createdAt'])
                  && request.resource.data.email is string
                  && request.resource.data.email.size() < 200;
    allow read, update, delete: if false;
  }
}
```

Each document carries `email`, `kind` (`client` / `pro` / `area`), `town` where
given, and `createdAt`.

### 4. Analytics (optional, off by default)

`ANALYTICS_CF_TOKEN` in `assets/js/site.js` is empty, so no analytics load and
`privacy.html` truthfully says the site runs none.

To switch it on: create a free Cloudflare Web Analytics site, paste the beacon
token into that constant, **and in the same commit** replace the Cookies
paragraph in `privacy.html` with:

> This site uses Cloudflare Web Analytics to count page views. It sets no
> cookies, does not track you across sites, and collects no personal
> information. Your language choice is stored in your own browser and never
> leaves your device.

Do not ship the token without that wording change -- the current page promises
no analytics.

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

- **Devangi's headshot is 200×200** (`team-1.jpg`), shown in a 128px circle —
  acceptable but not crisp on retina. A larger original would help.
- **Confirm the photo-to-name mapping** in the team section before launch.
- **Real privacy policy and terms** before App Store / Play submission.
  `privacy.html` and `terms.html` are honest interim pages, not legal documents.
- **Real photography** of actual verified providers, replacing the AI imagery.
