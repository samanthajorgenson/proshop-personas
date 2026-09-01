# PROJECT_STRUCTURE.md

> **Purpose of this file.** This is the single source of truth for how this project is
> organized. It exists so that anyone — a teammate, or Claude in a chat/design session —
> can get oriented in 60 seconds without digging through the whole repo.
>
> **Keep it current.** Whenever the structure changes (a folder added, a file renamed, a new
> content type introduced), update this file in the same commit. A stale map is worse than no map.
>
> **How to use it with Claude in chat.** When starting a design or planning conversation in the
> Claude chat app, paste this file in as the first message. It instantly gives Claude an accurate
> picture of the current project and prevents it from reasoning about an outdated version.

---

## What this project is

The **ProShop Personas & Context** project — an internal knowledge base for the ProShop
Product & Design team. It started as a set of user personas and is growing into a broader
collection of ProShop context (workflows, ICP, glossary, module maps, and more) intended to
serve as a shared foundation for projects across the company.

**Live site:** https://samanthajorgenson.github.io/proshop-personas/
**Hosting:** GitHub Pages, served from the `main` branch, root folder.
**Owner:** Samantha Jorgenson, Product Operations Manager.

---

## The mental model (read this first)

This project is **generated, not hand-written** — but the generator itself isn't in this repo.
Content lives as structured data; templates turn that data into HTML pages and print-ready PDFs,
in a separate working environment. This repo holds the **published outputs only**. This means:

- To change a persona's *content*, you edit its data file in the source environment — not the
  HTML or PDF in this repo directly.
- To change how *all* personas *look*, you edit the template/generator there — one change flows
  to all — then re-export and copy the results here.
- The files in `pdfs/` are **build outputs** — regenerate them from source, don't edit them.

```
   data files  ─►  generator + template  ─►  HTML pages  ─►  PDFs
  (the content)     (the look, one place)    (the site)     (downloads)
   \_____________________ separate working environment _____________________/  \_ this repo _/
```

> ### ⚠️ `index.html` is no longer a disposable build output
>
> As of 2026-08-31 `index.html` carries hand-authored work that does **not** exist in the
> generator source: the `nav_areas` data, the "Navigation Areas" panel section, and the
> full web-native redesign (journey stage grouping, scroll effects, button/accessibility
> treatment, responsive rules).
>
> **Re-running `build_interactive.py` would overwrite all of it.** Before regenerating,
> either port these changes into the generator/template first, or diff the generated file
> against this one and merge. Treat this repo's `index.html` as the current source of truth
> for the web tool until the generator catches up.

---

## Folder & file map

```
proshop-personas/                 (repo root — served by GitHub Pages)
│
├── index.html                    Published interactive teaching tool (BUILD OUTPUT)
├── README.md                     Repo overview, local preview + hosting notes
├── CHANGELOG.md                  What's shipped, by date
├── PROJECT_STRUCTURE.md          ← this file
├── .gitignore                    Excludes macOS .DS_Store
│
└── pdfs/                         Published PDFs the site links to (BUILD OUTPUTS)
    ├── Persona_00_Start_Here.pdf
    ├── Persona_01_Estimator.pdf
    ├── Persona_02_Order_Entry.pdf
    ├── Persona_03_Planner_PM.pdf
    ├── Persona_04_Buyer_Receiver.pdf
    ├── Persona_05_Operator_Tool_Crib.pdf
    ├── Persona_06_Inventory_Shipping.pdf
    ├── Persona_07_Functional_QA.pdf
    ├── Persona_08_Accounting.pdf
    ├── Persona_09_Cross_Persona_Summary.pdf
    └── Persona_ShopOwner.pdf
```

There is **no `src/` folder in this repo.** The generator source (persona data files,
`gen_persona.py`-style templates, PDF render scripts) lives in Samantha's separate working
environment and has not been checked into this repository. If that source ever moves into this
repo, update this map to match.

> Note: `README.md` currently references a `DEPLOY_TO_GITHUB.md` walkthrough — that file doesn't
> exist in the repo yet. Either write it or remove the reference.

---

## The build flow

This repo only receives **finished outputs**, so "building" here just means publishing:

1. In the separate source environment: edit persona data / templates, regenerate the changed
   HTML and re-render the changed PDF(s).
2. Copy the regenerated file(s) into this repo — `index.html` and/or the relevant PDF(s) in
   `pdfs/`. Keep PDF filenames stable; `index.html` links to them by name.
3. Commit and push to `main`. GitHub Pages redeploys automatically — no build step runs in the
   repo itself.

> Bringing the generator source into this repo (as a `src/` folder, with a single script or
> Makefile that runs the whole pipeline) would make the process reproducible in one place —
> worth doing if this project keeps growing.

---

## Design system (locked)

- **Brand colors:** orange `#FF4F00` (flame), near-black `#0B061C` (ink), warm off-white washes.
- **Fonts:** Helvetica / Arial system stack.
- **Persona sheets:** 2 pages, portrait (US Letter). Fixed layout — pages must measure exactly
  one sheet each; the generator was tuned so nothing overflows.
- **Primer:** 3 pages, portrait. **Cross-summary:** 2 pages, landscape.
- **Footer credit** on every document and the site:
  *"Authored and updated 8/27/2026 by Samantha Jorgenson, Product Operations Manager."*
  Update the date when content is meaningfully revised.

---

## Content inventory (what exists today)

**Primer (1):** ProShop 101 — what ProShop is (ERP/MES/QMS), who it's for, the 4-stage job
journey, glossary, module map, company history/mission, ICP (Bullseye vs Strong Fit).

**Personas (12 roles across 9 sheets):**
- Buyer persona: **The Shop Owner** (decision-maker; sits above the workflow)
- Workflow users: **Estimator, Order Entry, Planner/PM, Buyer & Receiver, Operator & Tool Crib,
  Inventory & Shipping** (paired roles share a sheet)
- Cross-cutting: **Functional QA**
- **Accounting** — reconstructed from the HR deck, not a dedicated session; validate before relying on it.

**Cross-persona summary (1):** how the roles relate — journey map, QA cross-cut, and four shared
threads (Customer Contact page, cert packet, on-time-delivery cascade, and the nine dashboards).

**Navigation Areas (web tool only, added 2026-08-31):** each persona's `nav_areas` array in the
`PERSONAS` data embedded in `index.html` — the official product screens/modules for that role,
sourced from the design team's persona doc, rendered as a distinct section in the slide-in panel
alongside (not replacing) the existing inferred "modules they live in" section. The Shop Owner
carries a single summary entry (`nav_areas_note` explains it's full admin access); Accounting has
no `nav_areas` at all, since the design team has no separate Accounting persona to source from.
**This has not yet been ported into the PDFs or `gen_persona.py`** — that requires the generator
source, which isn't in this repo (see "The mental model" above). Until that happens, the PDFs and
the web tool are out of sync on this one field.

---

## Known gaps & open questions

The authoritative list of unresolved items lives in a **private** doc kept OUTSIDE this repo
(`OPEN_QUESTIONS_private.md`), since it's Samantha's working tracker, not published content.
Highlights: validate the Accounting persona, decide whether Scheduler is its own persona,
confirm the 9-vs-25 dashboard count, and validate the inferred proficiency meters / KPIs.

---

## Roadmap direction

Growing from "personas" into a broader **ProShop context knowledge base**. Likely future
sections: end-to-end workflows, the module map as its own reference, competitive landscape,
compliance/standards primers, and onboarding paths by role. When adding a new content *type*,
follow the same pattern: **structured data → shared template → HTML + PDF outputs**, and update
this file's map.

> If the project outgrows the `proshop-personas` name, consider a broader repo name later
> (e.g. `proshop-knowledge-base`) — but note that renaming changes the live GitHub Pages URL,
> so weigh that against links already shared.
