# Connective Layer v1 — Extraction Log

**Run:** 2026-09-28 · **Source:** ProShop Confluence, PSKB space · **Rule:** reference, never copy

Extracted by Claude Code per `HANDOFF_connective_layer_extraction.md`. Data only: no hub, dashboard or site change.


## Counts

| Entity | Count | Expected |
|---|---|---|
| Personas | **32** | 32 ✅ |
| Departments | **12** | 12 ✅ |
| Modules (deduped) | **31** | not specified |
| Functional groups | **9** | ~10 |
| Workflow stages | **5** | 5 ✅ |

The source index lists 36 pages matching "Persona Profile"; four are not profiles (the template, the `kb-persona-profile` skill spec, and the two older v0.1 / Figma-supplement source docs). Excluding those gives exactly 32.


## Validation

**14/14 checks pass.**

- [x] persona count == 32
- [x] every persona department exists
- [x] every persona module exists
- [x] persona ids unique
- [x] persona ids slug-valid
- [x] department inverse consistent
- [x] module inverse consistent
- [x] all canonical_urls are real PSKB links
- [x] canonical_url page id matches source_page_id
- [x] no persona prose copied (no long strings)
- [x] no JTBD/beliefs/voice fields present
- [x] group stages valid
- [x] group persona refs valid
- [x] candidate refs valid

## Decisions taken (and why)

**1. `upstream` / `downstream` are prose in the source, not role lists.** The spec assumed short lists resolvable to persona ids. In every profile these are narrative paragraphs. Copying them would breach the golden rule, so they were resolved by matching *named personas* mentioned in the text against the 32 labels; the narrative itself stays in PSKB. Where a paragraph names a department or a generic function rather than a persona, nothing is stored. This means the graph under-reports hand-offs rather than inventing them.

**2. The functional-group bridge was built on Product archetypes, not the Nesting Map.** `Persona_Nesting_Map.md` was not available (see Missing inputs). Rather than guess, the bridge joins on a key both datasets genuinely share: the Product persona card each references (`Estimator Eddie`, `QA Quinn`, `Machinist Michael`, …). Every mapping in `personas` carries `matched_via` recording that evidence. Anything the archetype join could not settle is in `candidate_personas` for your ruling — it is **not** asserted as a mapping.

**3. Enum drift recorded verbatim.** The spec lists seniority as IC / Lead / Manager / Leadership. The source actually uses: *Individual contributor*, *Individual contributor (seasoned)*, *Individual contributor / Lead*, *Individual contributor / Coordinator*, *Lead / Supervisor*, *Manager*, *Leadership*, and one null. Values are stored exactly as written rather than forced into the spec's four buckets.


## ⚠️ Needs your ruling

**The functional-group layer covers 15 of the 32 canonical personas.** 17 have no group. That is the single biggest finding here: the hub's nine groups were built from the older 14-persona CX list and do not span the 32-profile set.


### Personas with no functional group

- `persona.account-manager` — Account Manager
- `persona.accountant` — Accountant
- `persona.assembly-technician` — Assembly Technician
- `persona.bookkeeper` — Bookkeeper
- `persona.cnc-programmer` — CNC Programmer
- `persona.facilities-maintenance-maintenance-technician` — Facilities Maintenance / Maintenance Technician
- `persona.general-manager` — General Manager
- `persona.human-resources` — Human Resources
- `persona.it-manager-erp-administrator-compliance-officer` — IT Manager / ERP Administrator / Compliance Officer
- `persona.manufacturing-engineer` — Manufacturing Engineer
- `persona.operations-manager` — Operations Manager
- `persona.production-controller-expeditor` — Production Controller / Expeditor
- `persona.quality-engineer` — Quality Engineer
- `persona.sales-manager` — Sales Manager
- `persona.scheduler` — Scheduler
- `persona.shop-supervisor` — Shop Supervisor
- `persona.tool-crib-attendant-tooling-manager` — Tool Crib Attendant / Tooling Manager

### Candidate mappings awaiting your decision

| Group | Candidate | Why it is only a candidate |
|---|---|---|
| `group.planner-pm` | Manufacturing Engineer | Planning & Engineering peer of the Planner; no archetype. |
| `group.planner-pm` | Scheduler | Adjacent to Planner/PM; no archetype. |
| `group.operator-tool-crib` | Assembly Technician | You nested Talented Assembly Technician here on 2026-09-14; the profile has no archetype to confirm it. |
| `group.operator-tool-crib` | CNC Programmer | You nested Programming Powerhouse here; the profile sits in Planning & Engineering, not Manufacturing. |
| `group.operator-tool-crib` | Shop Supervisor | Supervises the group's roles; may belong above it rather than inside it. |
| `group.operator-tool-crib` | Tool Crib Attendant / Tooling Manager | Same function as the group's Tool Crib Captain, but the profile carries no Product archetype to join on. |
| `group.functional-qa` | Quality Engineer | Matches the group's Quirky Quality Engineer by name, but is archetype-less and sits in Planning & Engineering. |
| `group.accounting` | Accountant | Accounting group has no archetype; department match only. |
| `group.accounting` | Bookkeeper | Matches the group's Busy Bookkeeper by name, but no archetype exists on either side. |
| `group.accounting` | Controller / Owner / Senior Management | Also archetype-matched to The Shop Owner (Owner Owen) — it cannot sit in both without a ruling. |
| `group.shop-owner` | General Manager | Leadership role adjacent to the owner persona; no archetype. |

### Other open items

- **`persona.controller-owner-senior-management` is claimed twice** — archetype-matched into `group.shop-owner` (Owner Owen) and a department candidate for `group.accounting`. Pick one, or let the graph carry it in both.

- **The IT persona is the thinnest source entry of the 32.** It has *no* role group, seniority, dashboards or external tools, and its two modules are marked inferred on the page itself. Those fields are stored as `null` / empty rather than guessed. The profile flags this itself and asks whether it should be one persona or two.

- **`group.accounting` matched nothing by archetype** — neither it nor the Finance personas carry a Product card. All three associations are candidates.


## Missing inputs

Two of the three prerequisites named in the hand-off were not on disk:

- `Connective_Layer_Entity_Model.md` — the target schema. Worked from the field tables in the hand-off itself (Steps 2–4); `_schema.md` records what was actually built.

- `Persona_Nesting_Map.md` — the group→persona bridge. Substituted the archetype join above plus the groupings you confirmed directly on 2026-09-14 (now in `personas.js`). **If the Nesting Map surfaces, diff it against `functional_groups.json`.**


## id ↔ source_page_id map

Recorded so re-runs are stable and ids never drift.

| id | Confluence page | Label |
|---|---|---|
| `persona.account-manager` | 2633171172 | Account Manager |
| `persona.accountant` | 2633072781 | Accountant |
| `persona.assembly-technician` | 2633269524 | Assembly Technician |
| `persona.bookkeeper` | 2632712446 | Bookkeeper |
| `persona.cnc-programmer` | 2632974523 | CNC Programmer |
| `persona.calibration-technician` | 2633498908 | Calibration Technician |
| `persona.controller-owner-senior-management` | 2633269553 | Controller / Owner / Senior Management |
| `persona.customer-service-representative` | 2633040045 | Customer Service Representative |
| `persona.estimator` | 2633269333 | Estimator |
| `persona.facilities-maintenance-maintenance-technician` | 2633203898 | Facilities Maintenance / Maintenance Technician |
| `persona.general-manager` | 2633138301 | General Manager |
| `persona.human-resources` | 2632679517 | Human Resources |
| `persona.it-manager-erp-administrator-compliance-officer` | 2709159959 | IT Manager / ERP Administrator / Compliance Officer |
| `persona.manufacturing-engineer` | 2632581291 | Manufacturing Engineer |
| `persona.operations-manager` | 2633400493 | Operations Manager |
| `persona.planner` | 2632712403 | Planner |
| `persona.production-controller-expeditor` | 2632777909 | Production Controller / Expeditor |
| `persona.production-machinist-cnc-operator` | 2632909002 | Production Machinist / CNC Operator |
| `persona.project-manager` | 2632843373 | Project Manager |
| `persona.purchasing-agent-buyer` | 2632712368 | Purchasing Agent / Buyer |
| `persona.purchasing-manager` | 2632712329 | Purchasing Manager |
| `persona.qms-coordinator` | 2632876211 | QMS Coordinator |
| `persona.quality-engineer` | 2632745089 | Quality Engineer |
| `persona.quality-inspector` | 2633498877 | Quality Inspector |
| `persona.quality-manager` | 2633072736 | Quality Manager |
| `persona.quality-supervisor-lead-inspector` | 2633007308 | Quality Supervisor / Lead Inspector |
| `persona.sales-manager` | 2633269489 | Sales Manager |
| `persona.scheduler` | 2633236649 | Scheduler |
| `persona.setup-machinist` | 2632941654 | Setup Machinist |
| `persona.shipping-and-receiving-clerk-logistics-coordinator` | 2633302143 | Shipping and Receiving Clerk / Logistics Coordinator |
| `persona.shop-supervisor` | 2632974473 | Shop Supervisor |
| `persona.tool-crib-attendant-tooling-manager` | 2633564229 | Tool Crib Attendant / Tooling Manager |

### Departments

| id | page | label |
|---|---|---|
| `dept.equipment-maintenance-and-calibration` | 2628354131 | Equipment Maintenance & Calibration |
| `dept.finance-and-accounting` | 2628321460 | Finance & Accounting |
| `dept.human-resource-management` | 2628091958 | Human Resource Management |
| `dept.information-technology-and-cybersecurity` | 2709618721 | Information Technology & Cybersecurity |
| `dept.manufacturing-and-production` | 2627633227 | Manufacturing & Production |
| `dept.planning-and-engineering` | 2628452396 | Planning & Engineering |
| `dept.purchasing-and-supply-chain` | 2628288516 | Purchasing & Supply Chain |
| `dept.quality-assurance` | 2628321429 | Quality Assurance |
| `dept.quality-management-and-compliance` | 2627862623 | Quality Management & Compliance |
| `dept.sales-and-estimating` | 2610692115 | Sales & Estimating |
| `dept.scheduling-and-production-control` | 2628354081 | Scheduling & Production Control |
| `dept.shipping-and-receiving` | 2627829846 | Shipping & Receiving |

### Modules

| id | page | label | used by |
|---|---|---|---|
| `module.approvals` | 2286714929 | Approvals | 1 |
| `module.audit-reports` | 2287337492 | Audit Reports | 2 |
| `module.bills` | 2287173635 | Bills | 3 |
| `module.cots` | 2287108195 | COTS | 7 |
| `module.company-positions` | 2286682120 | Company Positions | 1 |
| `module.contacts` | 2287075413 | Contacts | 5 |
| `module.corrective-action-requests` | 2286747729 | Corrective Action Requests | 3 |
| `module.customer-pos` | 2287075394 | Customer POs | 5 |
| `module.documents` | 2287173673 | Documents | 1 |
| `module.equipment` | 2287272133 | Equipment | 11 |
| `module.estimates` | 2287140928 | Estimates | 3 |
| `module.fixtures` | 2286747691 | Fixtures | 4 |
| `module.invoices` | 2287272076 | Invoices | 3 |
| `module.non-conformance-reports` | 2286780482 | Non-Conformance Reports | 3 |
| `module.packing-slips` | 2286747672 | Packing Slips | 3 |
| `module.parts` | 2287108138 | Parts | 9 |
| `module.preventative-action-requests` | 2287239209 | Preventative Action Requests | 3 |
| `module.quality-manual` | 2287272152 | Quality Manual | 1 |
| `module.quality-procedures` | 2286747710 | Quality Procedures | 4 |
| `module.quotes` | 2287304744 | Quotes | 3 |
| `module.rtas` | 2287108176 | RTAs | 4 |
| `module.return-material-authorizations` | 2286714948 | Return Material Authorizations | 2 |
| `module.schedule` | 2287140966 | Schedule | 7 |
| `module.standards` | 2286977109 | Standards | 2 |
| `module.tasks` | 2287042942 | Tasks | 4 |
| `module.tools` | 2287140947 | Tools | 8 |
| `module.training` | 2287075432 | Training | 2 |
| `module.users` | 2287370241 | Users | 3 |
| `module.vendor-pos` | 2287272095 | Vendor POs | 5 |
| `module.work-cells` | 2287173654 | Work Cells | 6 |
| `module.work-orders` | 2286780462 | Work Orders | 22 |
