# How to Update My Website — Cheat Sheet

Everything you need to change the site after launch. Keep this file in the project folder.

---

## The big picture

- Your site files live on your computer at: `~/Desktop/medina-fight-lab`
- They're backed up on GitHub: https://github.com/MedinaFightLab/medina-fight-lab
- Cloudflare watches GitHub. **Every time you `git push`, the live site auto-updates in ~1 minute.** No clicking around Cloudflare needed.

**Live site:** https://medinafightlab.com (and the backup URL: https://medina-fight-lab.medina-physio.workers.dev)

---

## The update routine (memorize this)

Open **Terminal** and run these, in order, every time you want to make changes:

```
cd ~/Desktop/medina-fight-lab
git pull
```

> `git pull` FIRST — this grabs any changes Cloudflare made, so your push won't get rejected.

Now make your edits (change files, add photos — or just ask Claude to do it).

When done, publish:

```
git add .
git commit -m "Describe what you changed"
git push
```

Wait ~1 minute → refresh medinafightlab.com → done.

---

## Adding photos

1. Drop the image file into the `public/` folder.
2. Reference it in a page as `/public/your-photo.jpg`.
3. Run the publish commands above.

(Tip: keep photos reasonably sized — under ~1MB each — so the site stays fast.)

---

## Common things you'll want to add

- **Reviews / testimonials section** — a new styled block on the Home or a dedicated page.
- **More photos / a gallery** — gym shots, action photos, results.
- **New blog post** — copy an existing file in the `blog/` folder and swap the content.
- **Pricing** — fill in real numbers on the Services page.
- **New page** (e.g. Programs, FAQ) — add the page + a nav link.

**Easiest path:** just tell Claude what you want ("add a reviews section with these 3 quotes," "put these 4 gym photos on the home page") and hand over the text/images. Claude edits the files and gives you the exact push commands. You never have to touch the HTML yourself.

---

## If a push gets REJECTED

You'll see "Updates were rejected because the remote contains work..." — this just means GitHub is ahead of you. Fix:

```
git pull --no-edit
git push
```

If a text editor pops up (screen full of `~`), type `:q` then press Enter, and run `git push` again.

---

## Editing the contact form

The form emails you via Formspree (form ID `xqejrbwe`). To change the destination email or see submissions, log into https://formspree.io.

---

## Design quick-reference (for matching the look)

- Fonts: **Anton** (headings, all-caps) + **Barlow** (body)
- Colors: black `#0a0a0a` · charcoal `#111111` · gray `#1c1c1c` · crimson `#C8102E` · off-white `#F7F7F7`
- All colors/spacing are set once at the top of `css/styles.css` — change there, applies everywhere.

---

## Key accounts

- **GitHub** (code backup + deploy trigger): github.com/MedinaFightLab
- **Cloudflare** (hosting + domain): dash.cloudflare.com → Workers & Pages → medina-fight-lab
- **Namecheap** (domain registrar): namecheap.com
- **Formspree** (contact form): formspree.io

© 2026 Medina Fight Lab | Dylan Medina
