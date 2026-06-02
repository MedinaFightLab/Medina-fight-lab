# Medina Fight Lab — Project Handoff (paste into a new chat)

I have an existing website for my business, Medina Fight Lab. Below is everything about it and exactly how I update it. Please read this, then help me with my request.

## What the site is
- A live website at **https://medinafightlab.com** (backup URL: https://medina-fight-lab.medina-physio.workers.dev).
- Plain **HTML / CSS / JS** — no framework, no build step. Static site.
- Project folder on my computer: **~/Desktop/medina-fight-lab**

## Hosting & accounts
- **GitHub** repo (code + deploy trigger): github.com/MedinaFightLab/medina-fight-lab
- **Cloudflare** Workers & Pages project `medina-fight-lab` hosts it. Every push to GitHub `main` auto-deploys in ~1 minute.
- **Namecheap** = domain registrar. Domain's nameservers point to Cloudflare (already done).
- **Formspree** powers the contact form (form ID `xqejrbwe`).

## File structure
```
index.html  about.html  services.html  blog.html  contact.html  404.html
blog/        → shoulder-protocols.html, periodization.html, energy-systems.html, rotational-power.html
css/styles.css   → full design system (all colors/fonts as variables at top)
js/main.js       → mobile menu
public/          → logo.jpg, dylan-headshot.jpg
downloads/       → the-gladiators-shoulder.pdf, lean-and-lethal-6-day-muay-thai.pdf (free lead magnets)
robots.txt  sitemap.xml
```

## Design system
- Fonts: **Anton** (headings, all-caps) + **Barlow** (body), loaded from Google Fonts.
- Colors: black `#0a0a0a`, charcoal `#111111`, gray `#1c1c1c`, crimson `#C8102E`, off-white `#F7F7F7`.
- All colors/spacing are CSS variables at the top of `css/styles.css` — edit once, applies everywhere.
- Match this style for anything new (sharp edges/no border-radius on cards, crimson accents, condensed all-caps headings).

## HOW I UPDATE THE SITE (the routine)
In Terminal, always do this:
```
cd ~/Desktop/medina-fight-lab
git pull                      # FIRST — pulls any change Cloudflare made, avoids errors
# (make edits here, or have the assistant edit the files)
git add .
git commit -m "describe the change"
git push                      # auto-deploys to medinafightlab.com in ~1 min
```

### If `git push` is REJECTED ("remote contains work…")
```
git pull --no-edit
git push
```
(If a text editor with `~` lines opens, type `:q` then Enter, and push again.)

## How to add common things
- **Photos:** drop the image in `public/`, reference it as `/public/filename.jpg`, then push.
- **A new free download (PDF):** put it in `downloads/`, add a button on the Home "Free Training Resources" section linking to `/downloads/filename.pdf` with the `download` attribute.
- **A new blog post:** copy an existing file in `blog/`, swap the content, add a card to `blog.html`.
- **Reviews/testimonials, pricing, new pages:** build in the existing black/red style and add a nav link in every page's navbar + footer.

## What's already done
Full 5-page site + 4 blog posts + 404, SEO meta/Open Graph on every page, sitemap + robots, working Formspree contact form, mobile menu, two branded PDF lead magnets ("The Gladiator's Shoulder" and "Lean & Lethal"), live on the custom domain with SSL.

## Still open / nice-to-do
- Set up **Google Search Console** + submit the sitemap (helps Google index the site).
- Optionally compress `lean-and-lethal-6-day-muay-thai.pdf` (~9 MB) for faster download.

---
MY REQUEST: <type what you want here>
