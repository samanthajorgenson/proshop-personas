# Position backbone — internal reference

**Not published on the hub.** The Position lens was removed from the site on 2026-09-14:
a flat taxonomy of job titles is not usable or actionable on its own. It is kept here so it
stays available while we work out what a genuinely useful Position view would do.

**Source:** ProShop's access model — `User Access - Permission options - Editor.csv` and
`PD-18578 (Access Levels for License Types) - A Seat Access.csv`. Verified against both files:
17 positions across 10 departments.

**Entitlements are deliberately excluded.** Positions map to access owned by IT/Admin; that
data is out of scope for the persona framework and must not be published.

| Department | Positions | Licence tier (per source CSV) |
|---|---|---|
| **Manufacturing** | Shop Floor Operator/Technician · Machinist/Setup Machinist · CNC Programmer | A Seat, Editor |
| **Quality** | QA Inspector/Technician | A Seat |
| **Engineering** | QA/MFG/DSG Engineer | Editor |
| **Planning** | Manufacturing Planner · Scheduler | Editor |
| **Sales** | Estimator/Sales Engineer · Sales Representative | Editor |
| **Supply Chain** | Purchaser · Shipping/Receiving Coordinator | A Seat, Editor |
| **Accounting** | Accounting Assistant | Editor |
| **Facilities** | Shop Assistant · Maintenance Technician · Safety Coordinator | A Seat, Editor |
| **IT** | IT Support Specialist | Editor |
| **Company-Wide** | Office Administrative Assistant | Editor |

## Why it was pulled from the site

The list answers "what job titles exist" but not "so what". To earn a place back in the hub it
would need to do something a reader can act on — for example resolve a persona to the positions
that actually hold it, show which positions a given implementation milestone needs in the room,
or show coverage gaps where a position has no persona behind it.

## Open question

The source CSVs carry a licence-tier split (Editor vs A Seat). That is useful context but edges
toward entitlements, which the framework excludes — worth a decision before it is used.
