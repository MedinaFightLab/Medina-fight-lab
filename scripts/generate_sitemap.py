#!/usr/bin/env python3
"""Regenerate sitemap.xml from the actual HTML files in the project.
Runs automatically via the git pre-commit hook, or manually:
    python3 scripts/generate_sitemap.py
Add a new page or blog post and it is included automatically — no manual editing."""
import os, glob, datetime

BASE = "https://medinafightlab.com"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EXCLUDE = {"404.html"}  # error pages should not be in the sitemap

# priority + changefreq by filename; sensible defaults for anything new
META = {
    "index.html":        ("1.0", "monthly"),
    "services.html":     ("0.9", "monthly"),
    "work-with-me.html": ("0.9", "monthly"),
    "about.html":        ("0.8", "monthly"),
    "blog.html":         ("0.8", "weekly"),
    "free.html":         ("0.8", "monthly"),
    "contact.html":      ("0.7", "yearly"),
}
DEFAULT_PAGE = ("0.7", "monthly")   # any new top-level page
DEFAULT_POST = ("0.7", "monthly")   # any blog/*.html post

def loc(relpath):
    # index.html -> root; everything else -> /relpath
    if relpath == "index.html":
        return BASE + "/"
    return BASE + "/" + relpath.replace(os.sep, "/")

urls = []
# top-level pages
for f in sorted(glob.glob(os.path.join(ROOT, "*.html"))):
    name = os.path.basename(f)
    if name in EXCLUDE:
        continue
    pr, cf = META.get(name, DEFAULT_PAGE)
    urls.append((loc(name), cf, pr))
# blog posts
for f in sorted(glob.glob(os.path.join(ROOT, "blog", "*.html"))):
    rel = os.path.relpath(f, ROOT)
    pr, cf = DEFAULT_POST
    urls.append((loc(rel), cf, pr))

# keep home first, then by descending priority, then alpha
urls.sort(key=lambda u: (u[0] != BASE + "/", -float(u[2]), u[0]))

lines = ['<?xml version="1.0" encoding="UTF-8"?>',
         '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for url, cf, pr in urls:
    lines.append(f'  <url><loc>{url}</loc><changefreq>{cf}</changefreq><priority>{pr}</priority></url>')
lines.append('</urlset>')

out = os.path.join(ROOT, "sitemap.xml")
with open(out, "w", encoding="utf-8") as fh:
    fh.write("\n".join(lines) + "\n")
print(f"sitemap.xml regenerated — {len(urls)} URLs")
