# Edouard Ferragu — Personal Website

A single-page personal site (inspired by the layout of mayanigrin.com), adapted for a pianist.

## Structure
```
website/
├── index.html          # the page (all sections)
├── css/style.css       # styling (colors/fonts in :root at the top)
├── js/main.js          # nav, mobile menu, scroll reveal
├── images/
│   ├── hero.jpg         # hero photo (Apex Competition, Steinway)
│   └── hero-mobile.jpg  # smaller hero for phones
└── cv/
    ├── cv-source.html          # editable CV source
    └── Edouard-Ferragu-CV.pdf  # generated CV (linked by "Download CV")
```

## Preview locally
```
cd website
python3 -m http.server 4599
# open http://localhost:4599
```

## Still to fill in (placeholders in index.html)
1. **Additional social links** — LinkedIn is included. Add TikTok, Instagram, or YouTube
   to the `#social` block when those accounts are ready to share.
2. **Project photos** — the two `.card__thumb` divs say "Photo coming soon". Replace each with
   `<img src="images/YOUR-PHOTO.jpg" alt="...">` once you have images of the baton instrument
   and the AI music tool.
3. **Performance videos** (optional) — there's a commented placeholder under the Performances
   section to embed YouTube/Vimeo clips.

## Regenerate the CV PDF after editing cv-source.html
```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="cv/Edouard-Ferragu-CV.pdf" \
  "file://$(pwd)/cv/cv-source.html"
```

## Hosting later
The site is fully static (no build step), so it can go on GitHub Pages, Netlify, or Cloudflare
Pages for free. Just upload the contents of this `website/` folder.
