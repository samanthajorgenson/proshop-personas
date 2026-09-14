# Changelog

## 2026-09-14 — Persona Hub (v1)

`index.html` is now the **Persona Hub**: four lenses onto the same people, with three depth
levels inside the User lens. The previous single-lens teaching tool is preserved at
`teaching-tool.html` and linked from the footer — its persona content is absorbed into the
hub as Level 3, and its primer / company context / downloads are not part of the hub spec,
so the page is kept rather than deleted.

**Built with real content**
- **User lens** — all three depths. Level 1 is a stage board (Win/Plan/Build/Learn) plus a
  cross-cutting band; Level 2 is the nested canonical roles; Level 3 is the full absorbed
  persona (day in the life, snapshot, meters, goals/frustrations/needs, KPIs, modules,
  navigation areas, flow), with the per-persona PDF still downloadable.
- **Position lens** — the canonical position taxonomy by department. Entitlements and access
  levels are deliberately excluded.
- Expand-to-focus interaction: the board recedes, the other groups collapse into a rail that
  switches focus without returning to the board, and Level 3 expands in place (no modal).

**Honest scaffolds — not fabricated**
- Buyer and Role lenses are framed and labelled as pending their owning teams.
- Inventory & Shipping shows "role pending"; The Busy Bookkeeper shows "content pending"
  (blank at source); unplaced canonical roles sit in a visible "not yet nested" tray.

**Structure**
- `design-tokens.css` — every colour/size token, so the pending Figma swap is a one-file change.
- `personas.js` — all content, loaded as a script rather than fetched JSON so the hub still
  opens from the filesystem without a web server.

Known gaps: `Persona_Nesting_Map.md`, the Property Register, the framework model and the
interaction mock were not available, so six nestings are marked **proposed** and need
confirming, and property filtering shows an affordance only. See PROJECT_STRUCTURE.md.

## 2026-08-31 — Web-native redesign of the interactive site

Reworked `index.html` so it reads as a designed web page rather than a document on a
screen. Content is unchanged — all persona data, copy, and PDF links are identical.

**Job journey — restructured**
- Each stage now *owns* its persona cards: one block holds the stage label and the roles
  it covers, so the two can't drift apart. Previously the stage bar and the cards were
  separate containers that only coincidentally lined up, and any reflow broke the
  association — stage labels sat above unrelated roles on tablet and mobile.
- Verified at 16 viewport widths (360–1600px): every stage label sits above its own
  cards, with no cross-stage overlap and no horizontal overflow. This also resolves a
  pre-existing horizontal-overflow bug on small screens.

**Scroll behaviour**
- Reading-progress bar, fade-and-rise reveals on section entry (staggered across grid
  children), sticky translucent nav with scroll-spy, animated hero, scroll cue.
- Scroll-spy derives the active section from scroll position rather than
  IntersectionObserver callbacks, which could land out of order after an anchor jump
  and leave the wrong nav item highlighted.
- All motion is disabled under `prefers-reduced-motion`.

**Clickable affordances**
- Every interactive element is a real `<button>` (previously `<div onclick>`, which was
  unreachable by keyboard and invisible to screen readers), with focus rings, hover
  lift, and a pressed state.
- Journey cards carry a permanent "Open persona →" call-to-action instead of one that
  only appeared on hover. Static cards intentionally have no hover treatment, so
  "clickable" reads unambiguously.

Known gap: the section nav is hidden below 820px (no mobile menu yet) — small screens
scroll rather than jump between sections.

## 2026-08-31 — Navigation Areas (web tool only)

Added an authoritative "Navigation Areas" field to 8 of 9 persona sheets in the interactive
site, sourced from the design team's official persona doc — grounds each role in ProShop's
actual screens/modules, additive to the existing inferred "modules they live in" section.

**`index.html`**
- `nav_areas` (+ optional `nav_areas_note`) added to the `PERSONAS` data for all personas
  except Accounting (no design-team equivalent to source from)
- New "Navigation Areas" section in the slide-in panel, rendered as ink-toned chips distinct
  from the existing orange "modules" chips

**Not yet done:** the PDFs and `gen_persona.py` still lack this field — that requires the
generator source, which isn't in this repo. See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md).
Footer date left at 8/27/2026 rather than bumped, to avoid the web tool and PDFs disagreeing
on the revision date until the PDF side ships too.

## 2026-08-27 — Initial site

Interactive onboarding tool for the ProShop Product & Design team, introducing
the people who use ProShop.

**`index.html`**
- "Who ProShop is for" overview and one-minute product primer
- Interactive journey of a job through ProShop, with persona cards
- "Four things they all share" section on common persona traits
- "By machinists, for machinists" and "Who buys ProShop" sections
- Downloads grid linking to every print-ready persona PDF

**`pdfs/`** — 11 print-ready persona documents:
- Start Here
- Estimator
- Order Entry
- Planner / PM
- Buyer / Receiver
- Operator / Tool Crib
- Inventory & Shipping
- Functional QA
- Accounting
- Cross-Persona Summary
- Shop Owner

**Docs**
- `README.md` with local viewing and hosting instructions
