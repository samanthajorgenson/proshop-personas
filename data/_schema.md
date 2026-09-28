# Connective Layer — field reference (v1)

The connective layer stores **entities and the relationships between them**. It does not store
content. Persona prose lives in PSKB and is reached through `canonical_url`.

## The rule this schema enforces

> **Reference, never copy.** An entity holds an `id`, a `label`, a `canonical_url`, enum fields,
> and relationships as arrays of ids. It never holds a second copy of persona, module or buyer
> content. **A copied field is a bug, not a feature.**

Concretely, these are deliberately **absent** and must stay absent: "What this role owns",
"Jobs to be done", "How they think", background, work style, communication style, core beliefs,
"Learn it", open questions, internal notes. A validation check in `_extraction_log.md` greps for
them on every run.

KPI and dashboard **names** are the sanctioned exception: they are short join keys, not prose.

## Conventions

- `id` is permanent once anything references it. Labels, links and relationships may change freely.
- Ids are `type.slug` — lowercase, hyphenated, `&` becomes `and`.
- Relationships are **arrays of id strings**, never nested objects, so the files stay diffable.
- Inverse relationships (`personas`, `used_by_personas`) are derived and validated both ways.
- Access and entitlement data is out of scope and must never enter these files.

## `personas.json` — 32 entities

| Field | Type | Notes |
|---|---|---|
| `id` | string | `persona.<slug>` |
| `label` | string | Role name, page title minus the "— Persona Profile" suffix |
| `canonical_url` | string | The PSKB page. The reference |
| `source_page_id` | string | Stable Confluence id |
| `department` | id | → `departments.json` |
| `role_group` | enum\|null | Shop Floor · Production Support (QA) · Overhead Support · Overhead Leadership. `null` on the IT persona, which the source leaves unassigned |
| `also_known_as` | string\|null | Short alias |
| `product_archetype` | id\|null | `archetype.<slug>`, e.g. `archetype.qa-quinn`. The join key used by the functional-group bridge |
| `seniority` | string\|null | Stored **verbatim**; the source uses more values than the spec's four |
| `modules` | id[] | → `modules.json` |
| `dashboards` | string[] | Short names |
| `kpis` | string[] | KPI **name** only, never its description |
| `external_tools` | string[] | Short names; `[]` where the source says none |
| `upstream` / `downstream` | id[] | Personas named in the workflow prose. See the log: the source is narrative, so this under-reports rather than invents |
| `lifecycle` · `pub_status` · `review_status` | string | Mirrors CX's status verbatim |

## `departments.json` — 12 entities

`id` · `label` · `canonical_url` · `source_page_id` · `type` (Production \| Support) ·
`personas` (id[], derived inverse).

## `modules.json` — 31 entities

`id` · `label` · `canonical_url` · `source_page_id` · `used_by_personas` (id[], derived inverse).
Deduplicated by module page id: a module is referenced once and related many times.

## `functional_groups.json` — 9 entities · **the layer Product Ops owns**

Not in PSKB. This is the bridge from your functional groups to the canonical personas.

| Field | Type | Notes |
|---|---|---|
| `id` · `label` | string | `group.<slug>` |
| `workflow_stage` | id | → `workflow_stages.json` |
| `personas` | id[] | **Evidence-backed** mappings only |
| `matched_via` | string\|null | How each was established, e.g. `product_archetype:archetype.qa-quinn` |
| `candidate_personas` | id[] | Proposed, **not** asserted. Awaiting Samantha's ruling |
| `rich_content_ref` | string | Pointer into the hub's persona kit |
| `note` | string\|null | Why a group has no confirmed mapping |

## `workflow_stages.json` — 5 entities

`id` · `label` (Win/Plan/Build/Learn) · `alt_label` (Pre-Production/Procurement/Production/
Post-Production) · `order`.

## Keeping it true

Per the governance recommendation: the canonical source always wins. If a file here disagrees with
a PSKB page, this file is stale. Re-run extraction when CX adds, renames or retires a persona, and
reconcile quarterly.
