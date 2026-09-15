# Changelog

## 2026-09-14 — Stage subtitles, flow arrows, and a fix for blank lens pages

**Fix: Buyer and Role pages could render blank in production.** `index.html` and `personas.js`
are separately cached files. When new markup was paired with a stale cached `personas.js`,
`HUB.links[lensId]` threw mid-render — and because `swap()` assigned `innerHTML` *after* the
render call, the page kept both its empty body and its `opacity:0` fade class. Result: a blank
page. Three fixes, so the whole class of bug is closed rather than this one instance:

- The script tag is versioned (`personas.js?v=2`, mirrored by `HUB.schema`), so the page and its
  data can no longer be cached out of step. Bump both together when the data shape changes.
- `swap()` now wraps the render: a throw paints a readable "this view failed to render" notice
  and always clears the fade class, so a data problem can never blank a page again.
- `sourceBox()` degrades to nothing when its data is absent instead of throwing.

**User lens board now reads as the process it describes**
- Each stage header carries a one-line subtitle saying what that stage actually is.
- Arrows show the flow: down between roles inside a stage, and left-to-right between stages.
  The between-stage arrow is anchored to the stage header and sits in the grid gap, so it cannot
  drift when columns end up different heights — and it hides once columns reflow below 1000px,
  where left-to-right would be misleading. Verified geometrically at seven widths.

## 2026-09-14 — Buyer persona cards fixed; lens content trimmed to avoid duplicating the GTM Hub

**Fix:** clicking a buyer persona did nothing but bounce you to the "Who buys ProShop" tab.
`renderLensPage()` only looked for a functional group on the User lens, so `#/buyer/shopowner`
fell through to the section resolver, which didn't recognise `shopowner` as a section and
defaulted to the first one. Group lookup now runs for every lens. The sub-nav also no longer
highlights a section while you are inside a persona, and the breadcrumb names the persona.

**Scope:** the GTM Hub and its subpages already own buyer-facing GTM content — launch briefs,
per-launch ICP briefs, positioning and messaging, pricing, competitive battlecards and
enablement — and they are actively maintained. The hub was starting to restate them, so both
lenses were cut back to what only the persona framework can offer:

- **Buyer** keeps *Who buys ProShop* and *The decision-makers*. Priority tiers and the value
  bridge are gone — they are ICP-page content.
- **Role** keeps *The learning journey* and *Definition structure*. Delivery methods and
  education outcomes are gone — they are Customer Education Strategy content.
- Both lenses gained a **"Where the rest lives"** panel linking to the maintained Confluence
  sources instead of copying them.

The removed sections' data is still in `personas.js`; restoring one is a single line in
`SECTIONS`. Retired routes (`#/buyer/tiers`, `#/role/outcomes`) fall back to the first section
rather than breaking.

## 2026-09-14 — Landing page, real URLs, chunked lens pages

The hub now behaves like a site rather than one long document.

- **Landing page at `#/`** — what the hub is, why it exists, who each lens is for, how the
  User lens's three depths work, and what is still being written. Three lens cards lead in.
- **Hash routing.** Every view has a real URL (`#/buyer/tiers`, `#/user/functional_qa`), so the
  back and forward buttons, refresh, bookmarks and shared links all work. Navigation is real
  anchors, so middle-click and open-in-new-tab work too. Unknown routes fall back to the landing.
- **Lens pages are chunked.** Buyer and Role were single long scrolls; each is now four sections
  behind a sub-nav, one at a time. Buyer: who buys / decision-makers / priority tiers / why
  ProShop fits. Role: learning journey / how training lands / what it drives / definition
  structure. The User lens keeps board → focus.
- **Breadcrumb** back to the hub on every lens page, and a skip-to-content link.
- **Position lens removed** from the site — a flat list of job titles was not usable or
  actionable. The taxonomy is preserved as an internal reference at `reference/positions.md`,
  with a note on what it would have to do to earn a place back.
- **ProShop 101 primer link removed** from the footer. `teaching-tool.html` stays in the repo
  but is no longer linked.

## 2026-09-14 — Hub revisions: nesting confirmed, Buyer + Role lenses populated

- **Programming Powerhouse and Talented Assembly Technician** nested under Operator & Tool Crib
  (Build / Production), per Samantha. The "not yet nested" tray is gone — every canonical role
  with content now has a home.
- **Nesting tags removed.** All nestings are confirmed, so the confirmed/proposed badges no
  longer render. Per-role source attribution stays.
- **"I am a…" role-based entry removed** (top-bar selector and first-run picker). The hub opens
  on the User lens for everyone. This drops spec §3 at Samantha's direction.
- **Buyer lens populated from Confluence** (Ideal Customer Profile, page 2058911745): the
  "Who buys ProShop" Bullseye / Strong Fit cards brought over from the primer and extended with
  Grade C, plus the three decision-makers with pain → winning outcome, the P1/P2 industry
  priority tiers, and the value bridge.
- **Role lens populated from Confluence** (Customer Education Strategy 1833959429, F2 template
  2357100644): the crawl/walk/run client journey, how training reaches each role, the outcomes
  training drives, and the field structure every finished role definition must fill.
- Buyer and Role now read "partly built" rather than "scaffold".

**Deliberately withheld from the public site:** the ICP page's TAM/ARR figures and its Anti-ICP
sales prioritisation list, and CX's internal vendor stack. This repo is publicly served by
GitHub Pages, and SOURCES_LOG directs that GTM/CI specifics stay out of the hub.

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
