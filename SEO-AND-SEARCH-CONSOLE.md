# Medina Fight Lab — Complete SEO Playbook

Everything you need, in order. Do Part 1 and 2 once. Part 4 is the ongoing routine.
Your setup: static site on **Cloudflare**, domain **medinafightlab.com**, repo on **GitHub**, Google Business Profile in the **OC area (by appointment)**, phone **915-799-1585**.

---

## PART 1 — Google Search Console (get Google to index the site)

Search Console is the free Google tool that confirms your pages are in Google, shows what people search to find you, and lets you submit your sitemap. You have to prove you own the site ("verify") before it works.

### Step 1 — Open Search Console
1. Go to **https://search.google.com/search-console**
2. Sign in with the Google account you want to own the site (use the **same Google account as your Business Profile** so everything lives together).

### Step 2 — Add the property (Domain method)
1. Click **Add property** (top-left dropdown).
2. Choose the **Domain** box on the left (NOT "URL prefix"). Domain covers every version of your site at once — http, https, www, non-www.
3. Type: `medinafightlab.com` → **Continue**.
4. Google shows a **TXT record** — a long line starting with `google-site-verification=...`. Leave this tab open; you'll paste it into Cloudflare.

### Step 3 — Add the TXT record in Cloudflare
1. In a new tab, go to **https://dash.cloudflare.com** and sign in.
2. Click your domain **medinafightlab.com**.
3. Left menu → **DNS** → **Records** → **Add record**.
4. Fill it in:
   - **Type:** `TXT`
   - **Name:** `@`  (this means the root domain)
   - **Content:** paste the whole `google-site-verification=...` value from Google
   - **TTL:** Auto
5. Click **Save**.

### Step 4 — Verify
1. Go back to the Search Console tab → click **Verify**.
2. If it says "not found," wait 5–15 minutes (DNS takes a moment) and click Verify again. It will pass.

> Backup method if DNS gives you trouble: in Search Console choose **URL prefix**, enter `https://medinafightlab.com`, pick the **HTML file** option, download the little `googerxxxx.html` file, drop it in your project's root folder (next to `index.html`), then `git add . && git commit -m "verify" && git push`. Wait a minute for deploy, then click Verify.

### Step 5 — Submit your sitemap
1. In Search Console, left menu → **Sitemaps**.
2. Under "Add a new sitemap," type: `sitemap.xml`
3. Click **Submit**. Within a day the status reads "Success" and Google starts crawling all your pages.

### Step 6 — Push Google to index your newest pages (optional, faster)
1. Paste a URL into the **search bar at the very top** (e.g. `https://medinafightlab.com/blog/recovery.html`).
2. Press Enter → click **Request indexing**. Repeat for your most important pages.

### Step 7 — What to check back on (give it 1–2 weeks)
- **Pages** report → confirms which URLs are indexed.
- **Performance** report → the actual search terms bringing visitors. This is gold for choosing future blog topics.
- **Enhancements** → confirms your Article + LocalBusiness schema is detected.

---

## PART 2 — Google Business Profile (local search + Google Maps)

You created the profile but it's **not verified yet**. Until it's verified it won't show in Maps or local results. Verification proves the business is real.

### Step 1 — Open and start verification
1. Go to **https://business.google.com** → sign in with the **same Google account** as Search Console.
2. Open your **Medina Fight Lab** profile.
3. Look for **"Get verified"** (or a "Verify now" banner) and click it.

### Step 2 — Pick the verification method Google offers you
Google decides which methods you get. Common ones for a service-area business:
- **Video verification (most common now):** you record a short unbroken video showing (a) proof you're at/serve the area, (b) equipment or tools of the business, and (c) yourself with proof you manage it (e.g. signing into the profile). Follow the on-screen prompts. Takes a few minutes; review can take up to a few days.
- **Phone/Text:** Google sends a code to **915-799-1585** — type it in.
- **Postcard:** Google mails a code to an address (slower, ~5–14 days). Only if you listed an address.

Tip for video: film in one take, good lighting, show your training space/equipment and then open the Google Business app showing you're logged in. Don't stop recording mid-way.

### Step 3 — While you're in there, optimize the profile (this is real SEO)
- **Name:** exactly `Medina Fight Lab` (must match the website — don't add keywords).
- **Primary category:** `Strength and Conditioning Coach`. Add secondary categories like `Personal Trainer`, `Physical Fitness Program` if offered.
- **Service area:** set to the OC cities you cover (e.g. Irvine, Santa Ana, Anaheim, Costa Mesa…).
- **Phone:** `915-799-1585` (identical to the site).
- **Website:** `https://medinafightlab.com`
- **Hours:** mark **"By appointment"** / set your bookable hours.
- **Services:** list them — Fight Camp Programming, Off-Camp Strength, Virtual Coaching, Injury Resilience, **SOF Selection Prep**.
- **Photos:** add your logo, headshot, and a few training shots. Profiles with photos get far more clicks.
- **Description:** 1 short paragraph; mention combat athletes, virtual coaching, OC area, SOF prep.

> Why this matters: Google checks that the **Name, phone, and area** on your profile match the **LocalBusiness schema** now on your homepage. They match by design — that consistency ("NAP": Name, Address/Area, Phone) is what builds local trust.

### Step 4 — Reviews = your #1 local ranking lever
Once verified, get your review link: in the profile click **"Ask for reviews"** → copy the short link → text it to current/past clients. Even **5–10 honest reviews** noticeably lifts you in the local "map pack." Reply to every review.

---

## PART 3 — On-page SEO already done on your site

You don't need to touch these; here so you know what's handled:
- Unique **title + meta description** on every page.
- **Canonical tags** on all pages (stops the backup `…workers.dev` URL from competing as duplicate content).
- **Open Graph + Twitter Card** tags (clean link previews when shared).
- **JSON-LD structured data:** Article schema on all blog posts, **LocalBusiness schema** on the homepage (matched to your Business Profile).
- **sitemap.xml** and **robots.txt** present and correct.
- One **H1 per page**, descriptive headings, image alt text, mobile-friendly, fast static hosting.

---

## PART 4 — Ongoing SEO (the routine that actually grows traffic)

On-page setup is a one-time thing. Rankings grow from these, done consistently:

### 1. Publish content on what your audience searches
- Aim for **1–2 posts/month**. Each post = a new page Google can rank and a new reason to link to you.
- Pick topics from real searches. Use the Search Console **Performance** report and free tools (Google's "People also ask," autocomplete) to find phrases like *"strength training for muay thai," "how to prep for SOF selection," "recovery between fights."*
- Your blog pipeline is wired: write the post in `blog/`, add a card to `blog.html`, add the URL to `sitemap.xml`, push. (I can do each one for you.)

### 2. Target a clear keyword per page
Each page should answer one search intent. Examples already aligned:
- Home → "strength and conditioning for combat athletes Orange County"
- Services → "fight camp programming," "SOF selection prep coach"
- Posts → one specific topic each.

### 3. Internal links
Link between your own pages (e.g. the recovery post → Services). Helps Google understand and rank the site. You already link posts → "Work With Me."

### 4. Backlinks (other sites linking to you)
The strongest off-page signal. Low-effort sources for you:
- Your gym's / training partners' websites.
- Podcasts or interviews (combat sports + military fitness).
- Guest posts or being quoted by fitness blogs.
- Instagram bio link (you have @medinafightlab) — drives traffic and discovery.

### 5. Reviews + Business Profile activity
Keep collecting Google reviews; post occasional updates/photos to the Business Profile. Active profiles rank better locally.

### 6. Monitor monthly
- Search Console **Performance**: are clicks/impressions trending up? Which queries?
- Fix anything in the **Pages** report marked "not indexed."
- Re-submit sitemap is automatic, but glance that it still says "Success."

---

## PART 5 — Bonus: Bing + other engines (10 minutes, optional)
1. Go to **https://www.bing.com/webmasters**, sign in.
2. **Import from Google Search Console** (one click) — pulls your verified site and sitemap over.
3. Covers Bing **and** ChatGPT/Copilot search. Free reach.

---

## Quick monthly checklist
- [ ] Publish 1–2 blog posts (add card + sitemap line + push)
- [ ] Check Search Console Performance for new keyword ideas
- [ ] Ask 1–2 clients for a Google review; reply to any new ones
- [ ] Post a photo/update to the Business Profile
- [ ] Confirm no errors in the Pages report

## One-time still-to-do
- [ ] Verify Search Console (Part 1)
- [ ] Verify Google Business Profile (Part 2)
- [ ] Submit sitemap (Part 1, Step 5)
- [ ] Set website + matching NAP on the Business Profile
- [ ] (Optional) Import to Bing Webmaster Tools
- [ ] (Optional) Compress `downloads/lean-and-lethal-6-day-muay-thai.pdf` (~9 MB) for faster downloads
