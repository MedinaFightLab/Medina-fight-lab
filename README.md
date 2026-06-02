# Medina Fight Lab — Website

Static website for **Medina Fight Lab** (Dylan Medina). Plain HTML/CSS/JS — no build step, no dependencies beyond Google Fonts. Designed for one-click deployment on **Cloudflare Pages**.

## Pages

- `index.html` — Home (hero, three pillars, about teaser, latest posts, CTA)
- `about.html` — About Dylan + credentials bar
- `services.html` — Four service cards + pricing note
- `blog.html` — Blog index (4 post cards)
- `blog/shoulder-protocols.html`
- `blog/periodization.html`
- `blog/energy-systems.html`
- `blog/rotational-power.html`
- `contact.html` — Contact form (Formspree) + Instagram
- `404.html` — Not-found page

```
medina-fight-lab/
├── index.html  about.html  services.html  blog.html  contact.html  404.html
├── blog/            (4 article pages)
├── css/styles.css   (full design system)
├── js/main.js       (mobile menu)
└── public/          (logo.jpg + dylan-headshot.jpg — YOU ADD THESE)
```

---

## ⚠️ STEP 1 — Add your two images (required)

The site references two image files that aren't included yet. Put them in the `public/` folder with these **exact names**:

| Your file | Rename to | Goes in |
|---|---|---|
| `Muay_Thai_fighter_logo_design_2.jpg` | `logo.jpg` | `public/logo.jpg` |
| `9F1851C6-7BD9-4675-A9AF-A85F66516C48.jpg` (headshot) | `dylan-headshot.jpg` | `public/dylan-headshot.jpg` |

No code changes are needed — the filenames are already wired into every page. (See `public/README-IMAGES.txt`.)

---

## STEP 2 — Set up the contact form (Formspree)

1. Create a free account at https://formspree.io and add a new form.
2. Copy your form ID (looks like `xayzwabc`).
3. In `contact.html`, find this line and replace `YOUR_FORMSPREE_ID`:

   ```html
   <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
   ```

   → e.g. `https://formspree.io/f/xayzwabc`

That's it — submissions will be emailed to you. No backend required.

---

## STEP 3 — Preview locally (optional)

The site uses root-relative links (`/about.html`), so run a tiny local server rather than double-clicking the files:

```bash
cd medina-fight-lab
python3 -m http.server 8080
# open http://localhost:8080
```

---

## STEP 4 — Push to GitHub

```bash
cd medina-fight-lab
git init
git add .
git commit -m "Initial commit: Medina Fight Lab website"
git branch -M main
git remote add origin https://github.com/<your-username>/medina-fight-lab.git
git push -u origin main
```

(Create the empty `medina-fight-lab` repo on github.com first, without a README so the push isn't rejected.)

---

## STEP 5 — Deploy on Cloudflare Pages

1. Go to the **Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git**.
2. Authorize GitHub and select your `medina-fight-lab` repository.
3. Build settings:
   - **Framework preset:** `None`
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/` (root)
4. Click **Save and Deploy**. Your site goes live at `https://medina-fight-lab.pages.dev`.

Every future `git push` to `main` auto-deploys.

> Note: Cloudflare Pages serves `about.html` at both `/about.html` and `/about`, so clean URLs work automatically.

---

## STEP 6 — Connect your custom domain

If your domain is already in your Cloudflare account:

1. In your Pages project → **Custom domains → Set up a custom domain**.
2. Enter your domain (e.g. `medinafightlab.com`) and confirm.
3. Cloudflare adds the DNS records automatically (a `CNAME`/`A` record pointing to Pages). Add `www` the same way if you want it.
4. SSL provisions automatically — give it a few minutes.

If your domain's nameservers aren't on Cloudflare yet, first add the domain under **Websites → Add a site** and update the nameservers at your registrar, then repeat the steps above.

---

## Design system reference

- **Fonts:** Anton (display, all-caps headings) + Barlow (body)
- **Colors:** black `#0a0a0a` / charcoal `#111111` / gray `#1c1c1c` / crimson `#C8102E` / off-white `#F7F7F7`
- All colors and spacing are CSS variables at the top of `css/styles.css` — edit once, applies everywhere.

© 2026 Medina Fight Lab | Dylan Medina
