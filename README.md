# ProShop Personas — Interactive Teaching Tool

An onboarding tool for the ProShop Product & Design team: an interactive tour of the
people who use ProShop, plus downloadable print-ready persona PDFs.

**Authored and updated 8/27/2026 by Samantha Jorgenson, Product Operations Manager.**

## What's in here

```
index.html          ← the interactive teaching tool (open this)
pdfs/               ← all 11 print-ready PDF documents the page links to
```

## Viewing it locally

Because the page loads PDF files next to it, you can't reliably just double-click
`index.html` from your file explorer (some browsers block local file access). The reliable
way to preview locally is to run a tiny web server from this folder:

```
# from inside this folder, in a terminal:
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Hosting

This is a static site — no build step, no server code. It works on GitHub Pages,
Netlify, or any static host. See `DEPLOY_TO_GITHUB.md` for a full first-timer walkthrough.

## Editing later

The PDFs and the page are generated from source (persona data files + HTML templates).
If you need to change a persona, update the source, re-export the PDF, and replace the
file in `pdfs/`. The page links to PDFs by filename, so keeping filenames stable keeps
the links working.
