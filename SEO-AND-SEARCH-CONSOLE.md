# SEO Notes & Google Search Console Setup — Medina Fight Lab

## What changed in this update
- **New blog post:** `blog/recovery.html` — "Post-Fight & Post-Training Recovery for Combat Athletes." Card added to `blog.html`, URL added to `sitemap.xml`.
- **Canonical tags** added to all 10 pages. This tells Google `medinafightlab.com` is the real address and stops your backup `…workers.dev` URL from competing as duplicate content.
- **`og:url`** added to every page (cleaner link previews when shared).
- **Twitter Card** tags on the new post (rich preview on X).
- **JSON-LD structured data:** Article schema on all 5 blog posts + Organization schema on the homepage. Makes pages eligible for Google rich results.

Push these live with your normal routine (`git pull` → `git add .` → `git commit` → `git push`).

---

## Google Search Console — step by step

### 1. Open Search Console
Go to https://search.google.com/search-console and sign in with the Google account you want to own the site.

### 2. Add your property (use the Domain method)
- Click **Add property** → choose the **Domain** option (left box), not URL prefix.
- Enter: `medinafightlab.com`
- Google gives you a **TXT record** to prove ownership.

### 3. Verify via Cloudflare (you already use it for DNS)
- Copy the TXT record value Google shows you.
- In **Cloudflare → your domain → DNS → Records → Add record**:
  - Type: `TXT`
  - Name: `@`
  - Content: paste the value from Google
  - Save.
- Back in Search Console, click **Verify**. (DNS can take a few minutes; if it fails, wait 10–15 min and retry.)

> Tip: Cloudflare also offers a one-click Search Console integration under the Cloudflare dashboard, but the manual TXT record above always works.

### 4. Submit your sitemap
- In Search Console left menu → **Sitemaps**.
- Under "Add a new sitemap," enter: `sitemap.xml`
- Click **Submit**. Status should move to "Success" within a day.

### 5. Ask Google to crawl key pages (optional, speeds things up)
- Use the **URL Inspection** bar at the top, paste a page URL (e.g. `https://medinafightlab.com/blog/recovery.html`), press Enter, then **Request indexing**.

### 6. What to check back on
- **Coverage / Pages** report: confirms which pages are indexed.
- **Performance** report (after ~1–2 weeks): shows the search terms bringing people in — gold for picking future blog topics.
- **Enhancements / rich results:** confirms your new Article + Organization schema is detected.

---

## Quick wins still worth doing later
- **Bing Webmaster Tools** (https://www.bing.com/webmasters) — same idea, free, can import directly from Search Console. Covers Bing + ChatGPT search.
- **Google Business Profile** — if you ever take local/in-person clients, a free profile gets you on Maps and local search.
- **Compress** `downloads/lean-and-lethal-6-day-muay-thai.pdf` (~9 MB) — faster downloads, minor speed/SEO benefit.
- **Keep publishing** — the schema and sitemap are wired up, so every new post in `blog/` just needs its card + sitemap line and it's indexable.
