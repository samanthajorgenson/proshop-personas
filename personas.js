/* ============================================================================
   ProShop Persona Hub - content data
   ----------------------------------------------------------------------------
   Loaded as a plain script (not fetched JSON) so the hub still opens from the
   filesystem without a web server - fetch() of a local file is blocked by CORS.
   Edit content HERE, not in index.html.

   PERSONAS / PDFS / KEY2PDF / PDF_META / DL_ORDER are carried over verbatim from
   the previous teaching tool and supply the Level-3 "full persona" content.

   HUB adds the hub structure: lenses, stages, functional groups, the canonical
   roles nested inside them, and the position backbone.

   PROVENANCE - every variant's pain points and desired outcomes come from the F2
   CX persona list (see SOURCES_LOG). Each variant carries a "nesting" flag:
     confirmed - the nesting is stated in the hub hand-off spec
     proposed  - content is sourced, but WHICH group it nests in is our proposal
                 and must be confirmed against Persona_Nesting_Map.md
     unnested  - canonical role with no functional group assigned yet
   Nothing here is invented: a persona with no source content is marked
   status:"content_pending" rather than filled in.
   ============================================================================ */

const PERSONAS = [{"series_label": "Buyer / Decision-Maker Persona", "index": "00", "name": "The Shop Owner", "stage": "Decision-Maker", "tagline": "The person who buys ProShop &mdash; a technical founder betting the business (and often their retirement) on getting the shop under control.", "quote": "I can run the machines in my sleep. It's running the <em>business</em> that keeps me up at night.", "who1": "The Shop Owner is usually a technical founder &mdash; a machinist or engineer who was great on the floor and started their own shop. They know the craft cold but were never trained to run a business, and the shop often <em>is</em> their retirement plan. They're the economic buyer for ProShop: skeptical of software promises, protective of hard-won margins, and responsible for every hire, contract, and audit.", "who2": "Many run multi-generation, family-owned shops. They're pragmatic, salt-of-the-earth, and carry a high &lsquo;BS meter&rsquo; &mdash; they've been pitched a lot of tools that didn't deliver. Winning them means proving real ROI, fast, in language that respects their expertise.", "day": [["Floor", "Starts on the floor &mdash; still the best troubleshooter in the building, pulled into every hard setup and quality escape."], ["Fires", "Fields the day's fires: a late job, a sick operator, a customer escalation, a machine down."], ["Quote", "Reviews or writes quotes personally &mdash; pricing is too important to fully delegate."], ["Cash", "Worries about cash flow, payroll, and whether the big customer will pay on time."], ["Grow", "Tries to carve out time for the actual business &mdash; hiring, capacity, the next big contract."], ["Late", "Does the books or the scheduling after hours, because the day never left room for it."]], "snapshot": [["Role type", "Economic buyer"], ["Background", "Technical founder"], ["Company", "Often multi-gen, family"], ["Typical size", "20&ndash;75 employees"], ["The shop is", "Their retirement plan"]], "environment": "Splits their day between the shop floor and a cramped office. Comfortable with machines and CAD, wary of business software that overpromises. Time-starved and interrupt-driven &mdash; evaluates tools by whether they visibly save time or money, not by feature lists. Trust is earned slowly and lost fast.", "meters": [["Manufacturing expertise", "Very high", 97], ["Business / software comfort", "Low&ndash;Medium", 42], ["Skepticism of vendor claims", "Very high", 90]], "inwords": "&ldquo;We existed on tribal knowledge for almost 30 years. We just <em>existed</em> &mdash; but we wanted to thrive. I thought it'd be hard to learn, but this old dog is learning new tricks.&rdquo;", "goals": ["Get the whole business under control &mdash; out of spreadsheets and out of their head.", "Protect margin and cash flow; stop losing money to chaos and rework.", "Capture tribal knowledge before key veterans retire.", "Build something sellable &mdash; a shop that runs without them for the eventual exit."], "frustrations": ["Disconnected systems and paper mean no one has the real picture, including them.", "They're the bottleneck &mdash; too many decisions still route through the owner.", "Every ERP they've seen felt built for big factories, not a 40-person shop.", "Hard to trust a number when the data lives in five places and a whiteboard."], "needs": ["Fast, visible ROI &mdash; proof it saves real hours or dollars in weeks, not years.", "A system a high-schooler or a 30-year machinist can both actually use.", "One source of truth so they can step back without the shop falling over.", "Onboarding and support from people who've actually run a shop, not just sold software."], "kpis": [["Margin", "Are jobs actually profitable &mdash; and which ones aren't?"], ["On-time %", "Delivery performance that keeps demanding customers."], ["Cash flow", "Money in vs. out &mdash; the number that keeps the doors open."], ["Owner load", "How much still depends on them personally to run."]], "modules": [["Company Hub / Dashboards", "home", true], ["Job Costing & Financial Data", "home", true], ["Sales & Work Orders", "reads", false], ["Quality Systems & Inspection", "reads", false], ["Shop Floor & Scheduling", "reads", false]], "upstream": ["Evaluates", "The market", "Weighs ProShop against spreadsheets &amp; rival ERPs"], "in_arrow": "Decides", "flow_self": "Buys, champions &amp; funds ProShop for the whole shop", "out_arrow": "Rolls&nbsp;out", "downstream": ["Enables", "All nine user roles", "Every persona in this set works in what they bought"], "flow_note": "The Shop Owner is the buyer, not a workflow role &mdash; so they sit above the job journey rather than in it. Their decision to adopt ProShop is what puts every other persona into the system. Win the owner with ROI and trust; keep them with a shop that finally runs on data instead of memory.", "footnote": "Buyer / decision-maker persona &mdash; distinct from the nine workflow user personas. Source: ProShop company deck (ICP &amp; shop-owner profile) + customer testimonials. Demographic detail softened toward business-relevant traits for onboarding use.", "nav_areas": ["All areas &mdash; Admin access"], "nav_areas_note": "Full system access as an administrator.", "_key": "00_shopowner"}, {"series_label": "ProShop User Persona", "index": "01", "name": "The Estimator", "stage": "Pre-Production", "tagline": "Turns a customer's request into a priced, winnable quote &mdash; fast enough to beat competitors, accurate enough to protect margin.", "quote": "We sell a service, not just a part &mdash; my job is to know what it will really cost to make it before anyone touches a machine.", "who1": "The Estimator translates drawings, models, and vague verbal requests into a manufacturing plan &mdash; material, operations, machine time, outside processing, and cost. They live at the very front of the shop's workflow, where nothing is billable yet and speed competes directly with accuracy: quote too slowly and a competitor wins the job; quote too cheaply and the shop loses money once it's won.", "who2": "In small shops this is the owner doing it between everything else. In larger shops it's a dedicated seat &mdash; sometimes an entry-level engineer &mdash; who leans heavily on templates and past jobs to move fast.", "day": [["RFQ in", "An RFQ lands by email, customer portal, or automated quoting tool. <b>Logs it in a tracker</b> and makes a bid / no-bid call based on fit and shop capacity."], ["Scope", "Reviews the print and model &mdash; <b>quantity, tolerances, finish, flagged notes</b> like masking or cosmetic class."], ["Build", "Copies a similar past estimate for speed, or builds from scratch &mdash; picks the value stream and <b>lays out the operations</b>."], ["Cost", "Sources material and outside-processing prices, sets <b>setup and cycle-time targets</b>, applies labor, overhead, and markup."], ["Send", "Gut-checks price against the market, routes for a <b>second-person review</b>, then generates the quote PDF and emails it."]], "snapshot": [["Workflow stage", "Pre-production"], ["Also known as", "Sales / Estimator"], ["Reports toward", "Sales / Owner"], ["Speed target", "~2&ndash;3 min / quote*"], ["Work is billable?", "No &mdash; pre-sale"]], "environment": "Desk-based, dual-monitor, mouse-and-keyboard. Fluent in CAD viewers, spreadsheets, and quoting tools. Comfortable with software &mdash; this is a knowledge-worker seat, not a shop-floor one.", "meters": [["Software proficiency", "High", 85], ["Manufacturing depth", "High", 88], ["Tolerance for slow UI", "Low", 22]], "inwords": "&ldquo;If I can copy a template and be done in three minutes instead of twenty, that's the difference between quoting ten jobs today or three.&rdquo;", "goals": ["Quote fast without sacrificing accuracy &mdash; speed wins the job.", "Build the estimate once, well, so planning inherits it with no rework.", "Price to protect margin while staying competitive in the market.", "Reduce reliance on the tribal knowledge of retiring machinists."], "frustrations": ["Incomplete prints force guesswork &mdash; a missing thread call-out can swing cost.", "RFQ intake and quote logging happen <em>outside</em> the system, so there's no audit trail.", "Waiting on vendor pricing for material and outside processing stalls turnaround.", "Quoting isn't billable, so effort must be rationed by how likely the job is to land."], "needs": ["Fast template reuse &mdash; clone a past estimate and adjust, don't rebuild.", "A quoting workspace that keeps the bid/no-bid log <em>inside</em> the system.", "Cost roll-ups that update live as material, OSP, and markup change.", "A clean handoff so a won quote becomes a work order with zero re-entry."], "kpis": [["Win rate", "Per client. Too low means wasted effort; too high can mean under-pricing."], ["Turnaround", "Speed from RFQ received to quote sent &mdash; often the deciding factor."], ["< 30%", "Material + services as a share of part price, kept well controlled."], ["Accuracy", "Estimated cost & time vs. what the job actually takes once it runs."]], "modules": [["Estimating & Quoting", "home", true], ["Sales & Work Orders", "home", true], ["Shop Floor & Scheduling", "reads", false], ["Job Costing & Financial Data", "reads", false], ["Inventory & Material Planning", "reads", false]], "upstream": ["Upstream", "Customer", "Submits an RFQ with prints, models &amp; specs"], "in_arrow": "RFQ", "flow_self": "Scopes, costs &amp; prices the job; sends the quote", "out_arrow": "Won&nbsp;quote", "downstream": ["Downstream", "Order Entry", "Turns the won estimate into a work order"], "flow_note": "The estimate carries directly into the work order &mdash; no re-entry. Every assumption the Estimator makes here becomes a target the Operator is later measured against, and feeds back into future quotes.", "footnote": "*Speed target reflects template-based quoting; from-scratch estimates take substantially longer. Source: ProShop persona sessions + product docs.", "nav_areas": ["Estimates", "Quotes", "RFQs", "Parts", "BOM Master", "COTS", "Vendor POs"], "nav_areas_note": "", "_key": "01_estimator"}, {"series_label": "ProShop User Persona", "index": "02", "name": "Order Entry", "stage": "Pre-Production", "tagline": "Turns an incoming customer PO into a live job inside ProShop &mdash; the first paid step, and the record every other role inherits.", "quote": "Getting the order into ProShop is like getting the keys into the ignition &mdash; it's where the whole shop starts moving.", "who1": "Order Entry (often the same person as Customer Service) transcribes a customer's purchase order into ProShop, verbatim and completely. They surface the terms and quality requirements hidden inside the PO and its linked documents, acknowledge the client, and create the part header and work order so PMs, planners, and buyers can pick it up. This is the first point in the workflow where the shop is actually being paid to work.", "who2": "In small shops this is the owner or ops manager. In larger shops it's a dedicated seat watching email and customer portals all day, entering same-day and confirming within 24&ndash;48 hours.", "day": [["PO in", "Watches email and customer portals (Boeing, Lockheed, Collins) for new orders. Downloads the PO and reads it <b>end to end</b>."], ["Ack", "Sends a &lsquo;received, under review&rsquo; acknowledgement so the client knows the order landed. Logs it same-day."], ["Header", "Transcribes admin block <b>verbatim</b>: bill-to, ship-to, payment, tax, FOB, delivery priority, project code."], ["Lines", "Enters each line &mdash; part #, revision, quantity, price, promise date, order type."], ["Build", "Creates the part header (auto-builds folder, inventory table, rev control) and the work order for planning."], ["Confirm", "After technical review OKs dates &amp; pricing, sends the formal order confirmation back to the client."]], "snapshot": [["Workflow stage", "Pre-production"], ["Also known as", "Customer Service"], ["Reports toward", "Sales / Ops"], ["Entry standard", "Same day"], ["Confirm standard", "24&ndash;48 hours"]], "environment": "Desk-based, email- and portal-heavy, mouse-and-keyboard. Comfortable navigating many customer portals and reading dense contract documents. Values speed and accuracy over exploration &mdash; wants the fewest clicks between PO and work order.", "meters": [["Software proficiency", "High", 82], ["Contract / document literacy", "High", 86], ["Tolerance for repetitive entry", "Low", 25]], "inwords": "&ldquo;Every customer's PO looks different, and half the important stuff isn't even on the PO &mdash; it's buried in the terms they link to.&rdquo;", "goals": ["Get orders in fast and clean so no downstream seat is blocked.", "Surface risky terms early &mdash; DPAS ratings, ITAR, cosmetic class, masking notes.", "Give the client a professional, predictable acknowledgement and confirmation loop.", "Cut the manual click-count between PO, part, and work order."], "frustrations": ["Every customer's PO looks different &mdash; there's no standard template to lean on.", "Key terms live in linked web pages, not on the PO itself.", "Portals must be checked daily; dates can change silently inside them.", "There's no built-in acknowledgement form &mdash; it's done manually by email."], "needs": ["A guided PO-entry flow that flags missing bill-to / ship-to / terms before submit.", "A single view that reconciles PO line items against the original estimate.", "Built-in acknowledgement and confirmation templates, not manual email.", "Portal-change alerts so a silently moved date doesn't slip through."], "kpis": [["Same-day", "Rate of POs entered the day they arrive (order-date vs. entry-date)."], ["24&ndash;48h", "Order-confirmation turnaround back to the customer."], ["Accuracy", "Zero fat-fingered quantity, price, revision, or promise date."], ["Coverage", "No missed orders sitting unseen in a customer portal."]], "modules": [["Sales & Work Orders", "home", true], ["Data Management", "home", true], ["Estimating & Quoting", "reads", false], ["Quality Systems & Inspection", "reads", false], ["Inventory & Material Planning", "reads", false]], "upstream": ["Upstream", "The Estimator", "Hands over the won quote / estimate"], "in_arrow": "Won&nbsp;quote", "flow_self": "Transcribes the PO; creates part header &amp; work order", "out_arrow": "Work&nbsp;order", "downstream": ["Downstream", "Planner / PM", "Picks up the WO and builds the config plan"], "flow_note": "Everything Order Entry enters becomes the audit trail every other seat relies on &mdash; planning inherits it, purchasing inherits it, quality inherits it, accounting inherits it. A missed DPAS or ITAR flag here becomes real legal exposure downstream.", "footnote": "Source: ProShop persona sessions + product docs. Customer names shown are illustrative of the aerospace / defense client base.", "nav_areas": ["Customer POs", "Quotes", "Contacts", "Packing Slips", "Invoices"], "nav_areas_note": "", "_key": "02_orderentry"}, {"series_label": "ProShop User Persona", "index": "03", "name": "Planner / PM", "stage": "Pre-Production", "tagline": "Owns the configuration plan &mdash; turning a customer's requirements into a manufacturable, executable job before parts ever hit a machine.", "quote": "My job as a planner is to get the parts through my own QA first &mdash; the client's inspection is round two.", "who1": "The Planner / Project Manager turns a work order into a complete configuration plan: operations, machines, sequence, work-holding, setup and run targets, material, and outside processing. They serve two customers at once &mdash; their own quality system first, then the client's incoming QA &mdash; and coordinate across scheduling, purchasing, OSP, quality, and programming so every job is finalized, resourced, and ready to run on time.", "who2": "In small shops this is the owner running everything A-to-Z. In larger shops it's a dedicated PM or planner with, as they put it, &lsquo;all the responsibility and none of the authority&rsquo; &mdash; collaboration is the entire job.", "day": [["Notify", "Scrubs the System Agent inbox for new POs and PM alerts &mdash; uses it as a live task list."], ["Prioritize", "Reads the Project Manager dashboard (the &lsquo;thousand-foot view&rsquo;) and cross-checks Customer Service for what ships this week."], ["Digest", "Reads the PO, T&amp;Cs, quality specs, and print revision; works the <b>pre-planning checklist</b> top to bottom."], ["Configure", "Builds the config plan &mdash; operations, machines, targets, work-holding, material spec, OSP flow-down."], ["Schedule", "Sets must-leave-by and must-be-back-on dates; flows demand to Purchasing."], ["Finalize", "Finalizes the WO &mdash; kicks it to the programming queue. <b>If it ain't green, it ain't on the machine.</b>"]], "snapshot": [["Workflow stage", "Pre-production"], ["Serves", "Internal QMS + client QA"], ["Finalize target", "24&ndash;48 hours"], ["Ready-to-run", "By 72 hours"], ["Coordinates with", "5+ departments"]], "environment": "Desk-based but constantly context-switching across dashboards. Power user who lives in red/yellow/green status cues and drills into work orders all day. Wants dense information visible at a glance, and gets frustrated by 'mental gymnastics' to piece a picture together.", "meters": [["Software proficiency", "High", 90], ["Manufacturing depth", "High", 92], ["Tolerance for slow drill-downs", "Low", 20]], "inwords": "&ldquo;The cost of getting this wrong shows up at setup &mdash; the most expensive moment in machining. A missed tool, a wrong material cutoff, and the spindle stops.&rdquo;", "goals": ["Reduce the risk of false starts at setup &mdash; the shop's most expensive moment.", "Get every job through internal QA before customer QA ever sees it.", "Hit 95%+ on-time delivery consistently, by client and by PM.", "Level-load work across the PM team so no one is drowning."], "frustrations": ["Dashboards take &lsquo;mental gymnastics&rsquo; &mdash; there's no dependency / pipeline view.", "The Late dashboard flags what's late but not <em>why</em> &mdash; every WO needs a drill-in.", "The pre-planning checklist wipes clean on finalize &mdash; timestamps are lost.", "Budget arrives already set by the estimate &mdash; variances are hard to unwind mid-job."], "needs": ["A dependency / Gantt view so blockers are visible without drilling into each WO.", "&lsquo;Why is this late&rsquo; surfaced on the Late dashboard, not buried in the record.", "PO due dates on hover, so purchasing status is readable at a glance.", "Preserved checklist history &mdash; keep the timestamps after finalize."], "kpis": [["95% OTD", "On-time delivery to the client; vendors held to a higher 97% bar."], ["Time-to-floor", "Finalize in 24&ndash;48h, ready-to-run by 72h."], ["NCR count", "Did we mitigate risk correctly before the job ran?"], ["Variance", "Estimated vs. actual cost and time, by work order."]], "modules": [["Sales & Work Orders", "home", true], ["Visual Work Instructions", "home", true], ["Shop Floor & Scheduling", "home", true], ["Inventory & Material Planning", "reads", false], ["Job Costing & Financial Data", "reads", false]], "upstream": ["Upstream", "Order Entry", "Hands over the created work order"], "in_arrow": "Work&nbsp;order", "flow_self": "Builds &amp; finalizes the configuration plan", "out_arrow": "Ready&nbsp;WO", "downstream": ["Downstream", "Buyer &amp; Programming", "Receive demand + the finalized job"], "flow_note": "ProShop is a configuration-management platform, and the Planner builds the configuration. Finalizing a WO both queues it for programming and creates the purchasing demand the Buyer sees &mdash; so an empty status-date field means the Buyer never sees the need.", "footnote": "Source: ProShop persona sessions + product docs. On-time-delivery targets are representative benchmarks cited in-session.", "nav_areas": ["Schedule", "Work Orders", "Work Cells", "Parts", "BOM Master", "Part Stock"], "nav_areas_note": "", "_key": "03_planner"}, {"series_label": "ProShop User Persona", "index": "04", "name": "Buyer &amp; Receiver", "stage": "Procurement", "tagline": "The paired supply-chain roles that keep the shop fed &mdash; buying the right material and services at the right time, and verifying every box that arrives.", "quote": "Nothing gets made until the material shows up, the paperwork clears, and the dock says it's good to go.", "who1": "The Buyer works ProShop's demand-based Purchasing dashboard, placing vendor POs for material, tooling, commercial hardware, and outside-processing services at the right time, cost, and lead time. The Receiver works the Receiving dashboard, verifying every box against its PO and packing slip, inspecting quality and documents, and routing material to the work cell or into inventory.", "who2": "In small shops one person does both; in larger shops they're separate desks that lend each other staff on busy weeks and jointly own supplier performance. Notably, in ProShop purchasing and receiving live on the <em>same record</em> &mdash; unusual versus other ERPs.", "day": [["Demand", "Buyer opens the Purchasing dashboard &mdash; four tabs of queued demand: part stock, COTS, tooling, OSP."], ["Quote", "For new items, negotiates ~3 quotes for competitive price and lead time before placing."], ["Order", "Batches lines into carts by vendor; places POs by PDF+email or vendor portal; sets status to Outstanding."], ["Receive", "Receiver starts on the Receiving dashboard &mdash; today's, late, and future POs; verifies against packing slip."], ["Inspect", "Quality-checks each delivery, captures certs and lot numbers; quarantines anything with missing docs."], ["Release", "Records receipt (partial OK); routes part stock to the work cell or COTS to the inventory table."]], "snapshot": [["Workflow stage", "Procurement"], ["Buyer PO types", "4 (stock/COTS/tool/OSP)"], ["Quotes per new item", "~3"], ["Shared record?", "Purchasing = Receiving"], ["Feeds", "Supplier scorecards"]], "environment": "Buyer is desk-based in dashboards and vendor portals; Receiver is on their feet at the dock with a scanner, packing slips, and inspection tools. Between them they span pure knowledge work and physical, glove-on verification &mdash; two quite different UI contexts on one shared record.", "meters": [["Software proficiency", "Medium&ndash;High", 72], ["Manufacturing depth", "Medium", 60], ["Time pressure at the dock", "High", 82]], "inwords": "&ldquo;ProShop is demand-based &mdash; I don't decide what to buy, the shop's work-order load does. My job is to make sure nothing needed gets missed.&rdquo;", "goals": ["Get the right material and services in at the right time, cost, and paperwork.", "Consolidate demand into batched POs to cut vendor noise and shipping fees.", "Get ahead of demand using forecasts &mdash; don't wait for the WO to trigger.", "Hold the line on quality inspection under production pressure."], "frustrations": ["No RFQ module for vendor POs yet &mdash; buyers still work in email and Excel.", "Stale inventory counts erode trust in the on-hand numbers.", "Planners sometimes queue POs with impossible past-due dates.", "Receivers get pressured to skip inspection when production is desperate."], "needs": ["A vendor RFQ workspace inside ProShop, not email + spreadsheets.", "Trustworthy on-hand counts &mdash; a &lsquo;quantity verified&rsquo; freshness signal.", "PO due dates surfaced on the work-order view, not hidden until drill-in.", "A fast, glove-friendly receiving flow that still enforces the cert capture."], "kpis": [["Supplier OTD", "Vendor on-time delivery &mdash; upstream of the shop's 95% to the client."], ["Scorecards", "Quality, packaging, lead time, price, and service, per supplier."], ["3 quotes", "Price competitiveness &mdash; three quotes for every new item."], ["RMA count", "Discrepancies caught at the dock, not on the machine."]], "modules": [["Inventory & Material Planning", "home", true], ["Tool & Fixture Management", "home", true], ["Sales & Work Orders", "reads", false], ["Quality Systems & Inspection", "reads", false], ["Job Costing & Financial Data", "reads", false]], "upstream": ["Upstream", "Planner / PM", "Queues purchasing demand from finalized WOs"], "in_arrow": "Demand", "flow_self": "Buys, receives, inspects &amp; releases material", "out_arrow": "Material", "downstream": ["Downstream", "Tool Crib &amp; Operator", "Get released material at the machine"], "flow_note": "Six demand streams pool into one Purchasing dashboard so nothing needed gets missed. If a planner's status-date field is empty the Buyer never sees the demand &mdash; and the Receiver is the last line of defense before material reaches the floor with bad paperwork.", "footnote": "Source: ProShop persona sessions + product docs. The no-RFQ-module gap was flagged in-session as on the roadmap.", "nav_areas": ["Vendor POs", "Bills", "COTS", "Part Stock", "COTS Inventory", "Part Inventory"], "nav_areas_note": "", "_key": "04_buyer_receiver"}, {"series_label": "ProShop User Persona", "index": "05", "name": "Operator &amp; Tool Crib", "stage": "Production", "tagline": "The people at the machine making parts, and the people who keep them fed &mdash; where every upstream decision becomes a green light or a red flag.", "quote": "Green means go. Anything else means stop and fix something before the first chip flies.", "who1": "The Operator (machinist) checks the schedule, verifies readiness, runs setup, gets the first article inspected and certified, then runs production while doing in-process checks and keeping the time clock honest. The Tool Crib &mdash; a dedicated role in larger shops, absorbed by the operator in smaller ones &mdash; assembles cutting tools, material, and fixtures onto a cart and delivers it machine-side so the operator can start clean.", "who2": "Everything upstream &mdash; estimating, planning, programming, purchasing &mdash; either shows up as green on the work order, or as a red flag the operator has to escalate before running a single part.", "day": [["Kit", "Tool Crib pulls cutting tools per WO sequence, kits a cart (tools + material + fixtures), and delivers it to the bay."], ["Check", "Operator walks up, checks the machine schedule top-down for the next WO, looking for green cues."], ["Verify", "Confirms readiness: material at the machine, tools kitted, <b>pre-plan checklist all green</b> in the operator section."], ["Setup", "Starts the setup clock (60-min target), runs the first part, does the <b>First Article Inspection</b>, certifies to run."], ["Run", "Switches to running mode &mdash; cycle-time clock on, <b>in-process checks</b> per piece, deburr, coolant, chips."], ["Close", "Enters quantity completed &amp; queued to next op, prints traceability labels, checks off teardown."]], "snapshot": [["Workflow stage", "Production"], ["Setup target", "~60 minutes"], ["Time tracking", "Manual play / pause"], ["Gate to run", "First Article + green"], ["Tooling cost", "$100+ per endmill"]], "environment": "This is the shop-floor persona. Operator is standing at a machine, often in gloves, hands dirty, glancing at a shared terminal between cutting cycles &mdash; not seated at a clean desk. Glance-ability, large touch targets, and minimal typing matter enormously. Software comfort varies widely by individual and shift.", "meters": [["Software proficiency", "Mixed", 50], ["Manufacturing depth", "Very high", 96], ["Time free to interact with UI", "Low", 24]], "inwords": "&ldquo;For us machinists, we see green &mdash; that's the whole language. If the work order's green, I can run it. If it's not, I'm not touching the machine.&rdquo;", "goals": ["Hit setup and cycle-time targets, feeding accurate actuals back into costing.", "Never crash the machine &mdash; right speeds &amp; feeds, work-holding, and program.", "Protect tool life &mdash; faster isn't cheaper when endmills cost $100+ each.", "Get the first article approved fast so the machine runs instead of sitting idle."], "frustrations": ["Time tracking is manual &mdash; easy to forget play/pause at lunch or a break.", "The machine sits idle waiting for QA buyoff of the first article.", "Tool wear history isn't shown per-tool &mdash; it's judged by feel and jagged edges.", "The color system takes training &mdash; you must know which role owns each section."], "needs": ["A glance-able, glove-friendly WO view &mdash; big status, minimal typing.", "Frictionless (or automatic) time tracking so actuals stay honest.", "A self-inspect path so the machine doesn't idle waiting for QA.", "Per-tool wear signals so tool changes aren't a guess."], "kpis": [["Setup time", "Actual vs. target &mdash; auto-updates the target for the next run."], ["Runtime", "Cycle time per part (min / pc)."], ["Tool life", "Parts-per-endmill vs. target &mdash; speed traded against wear."], ["Scrap", "Scrap and rework rate; zero safety incidents."]], "modules": [["Shop Floor & Scheduling", "home", true], ["Visual Work Instructions", "home", true], ["Tool & Fixture Management", "home", true], ["Quality Systems & Inspection", "reads", false], ["Job Costing & Financial Data", "feeds", false]], "upstream": ["Upstream", "Buyer &amp; Planner", "Deliver material + the finalized, green WO"], "in_arrow": "Ready&nbsp;WO", "flow_self": "Sets up, cuts, inspects &amp; queues to next op", "out_arrow": "Finished", "downstream": ["Downstream", "QA / Inspection", "Final-inspects the finished parts"], "flow_note": "This is where all the upstream discipline becomes real cost: crash a machine, scrap a first article, or set up on the wrong revision and the shop pays for hours it can't bill. The manual play/pause clock is also the feedback loop into costing &mdash; a forgotten pause quietly corrupts the next estimator's targets.", "footnote": "Source: ProShop persona sessions + product docs. Setup target and tooling cost are representative figures cited in-session.", "nav_areas": ["Work Orders", "RTAs", "Tools", "Fixtures", "Parts"], "nav_areas_note": "", "_key": "05_operator_toolcrib"}, {"series_label": "ProShop User Persona", "index": "06", "name": "Inventory &amp; Shipping", "stage": "Post-Production", "tagline": "The last stops before the customer &mdash; keeping counts trustworthy in the warehouse, and getting every box out the door complete and on time.", "quote": "The stockroom keeps the trust; the shipping dock keeps the promise.", "who1": "The Inventory Manager takes released material and build-to-inventory parts, warehouses them with accurate ProShop locations, and keeps counts trustworthy through cycle counts and &lsquo;quantity verified&rsquo; timestamps. The Shipper is the final stop &mdash; assembling packing slips, certs of conformance, AS9102s, and material certs into the shipped box, and getting it out via the right carrier.", "who2": "Together they own traceability and on-time delivery. Alone, each inherits whatever the upstream teams did or didn't finish &mdash; which is why Shipping is often the &lsquo;Hail Mary&rsquo; department that rarely gets the lead time everyone else had.", "day": [["Put away", "Inventory picks up released COTS and BTI parts; assigns warehouse / rack / shelf / bin and updates ProShop."], ["Verify", "Labels physical material for traceability and ticks <b>quantity verified</b>; runs rotating cycle counts."], ["Queue", "Shipper opens the Shipping dashboard &mdash; both final-inspected and outgoing-inspected (OSP) queues."], ["Pack", "Cycle-counts the physical parts; handles partial shipments, back-orders, or routes extras to inventory."], ["Certify", "Assembles the cert packet (CFC + AS9102 + material certs) via the ProShop PDF generator."], ["Ship", "Picks the carrier, prints the packing slip, uploads the full packet to the customer's portal."]], "snapshot": [["Workflow stage", "Post-production"], ["Inventory streams", "COTS + BTI parts"], ["Trust signal", "&lsquo;Quantity verified&rsquo;"], ["Cert formats", "AS9102 / LM / default"], ["Delivery counts when", "Paperwork clears"]], "environment": "Both roles are on their feet &mdash; Inventory at warehouse racks with a scanner, Shipper at a packing station juggling parts, labels, and printed cert packets. Physical, mobile work with a terminal nearby. UI needs to survive interruption: pick it up, put it down, don't lose your place.", "meters": [["Software proficiency", "Medium", 58], ["Manufacturing depth", "Medium", 55], ["Physical / interrupt-driven work", "High", 85]], "inwords": "&ldquo;Aerospace and medical clients count delivery from the day the paperwork clears &mdash; not the day the box lands on their dock.&rdquo;", "goals": ["Keep inventory numbers accurate enough that purchasing can trust them.", "Optimize warehouse layout for both safety and lookup speed.", "Preserve the traceability chain from vendor cert to shelf to shipped box.", "Every box out the door: right parts, right paperwork, right carrier, on time."], "frustrations": ["No default &lsquo;released, waiting for inventory&rsquo; dashboard &mdash; the team builds a custom query.", "The location field has no history &mdash; moving a rack loses the prior location.", "The cert packet still needs print-to-PDF, save, then attach-to-email.", "Shipping absorbs upstream lead-time slippage &mdash; always the &lsquo;Hail Mary&rsquo; dept."], "needs": ["A first-class &lsquo;waiting for inventory&rsquo; view, not a hand-built query.", "Location history and an overflow / second-location field, not free-text notes.", "One-click cert-packet email straight from the WO, no manual PDF shuffle.", "Standard op numbering surfaced so shippers aren't slowed by inconsistent WOs."], "kpis": [["Inventory turn", "How long parts sit before they're pulled."], ["Accuracy", "Cycle-count discrepancy rate &mdash; is on-hand trustworthy?"], ["OTD", "On-time delivery per customer, verified at ship."], ["Clean ship", "Damaged-shipment and wrong-quantity rate."]], "modules": [["Inventory & Material Planning", "home", true], ["Quality Systems & Inspection", "home", true], ["Sales & Work Orders", "reads", false], ["Data Management", "reads", false], ["Job Costing & Financial Data", "feeds", false]], "upstream": ["Upstream", "QA / Inspection", "Releases final-inspected parts + cert data"], "in_arrow": "Passed", "flow_self": "Warehouses, packs, certifies &amp; ships", "out_arrow": "Shipment", "downstream": ["Downstream", "Customer + Accounting", "Receive the goods; invoice is generated"], "flow_note": "Everything upstream converges here: the certs the Receiver uploaded, the WO history Planning built, the CFC flag Order Entry set. If any piece is missing, the customer's dock closes the box and counts &lsquo;delivery&rsquo; as the day the paperwork finally arrives.", "footnote": "Source: ProShop persona sessions + product docs. Cert-packet email was flagged in-session as on the roadmap.", "nav_areas": ["Part Inventory", "Part Stock", "COTS Inventory", "Packing Slips", "Customer POs"], "nav_areas_note": "", "_key": "06_inventory_shipping"}, {"series_label": "ProShop User Persona", "index": "07", "name": "Functional QA", "stage": "Cross-Cutting", "tagline": "Owns product quality and system quality at once &mdash; proving every part meets its print, and keeping the whole shop certified.", "quote": "If it isn't measured, documented, and cert-packed, it doesn't leave the building.", "who1": "Functionally, QA proves every part meets its print &mdash; approving inspection plans, calibrating equipment, running incoming / in-process / final inspections, generating first-article reports, and assembling the cert packet that ships in the box. Systemically, they own the QMS: the Standard (AS9100 / ISO), Quality Manual, Procedures, Task/Training records, Audit Reports, and controlled Documents that keep the shop certified.", "who2": "In small shops it's one seat wearing both hats. In larger shops it splits into a shop-floor Inspector and a QMS / Compliance Manager working off the same modules. Unlike the other roles, QA cross-cuts every stage rather than sitting in one.", "day": [["Require", "Reviews new POs; flags FAI, CFC, and form format on the <b>Customer Contact page</b> &mdash; requirements flow from here."], ["Plan", "Reviews the planner's dim-tagged inspection plan; confirms each dim has the right equipment assigned."], ["Approve", "Approves the print &mdash; that's what turns the WO banner green so operators can start."], ["Calibrate", "Keeps the Equipment module current &mdash; gauges cycle between in-cal, active, and retired."], ["Inspect", "Works the Inspection dashboard top-down; runs final &amp; FAI, records results, generates the cert packet."], ["Close", "Creates NCRs for out-of-tol dims; dispositions use-as-is / repair / scrap; handles RMAs on returns."]], "snapshot": [["Workflow role", "Cross-cutting"], ["Two jobs", "Parts + the QMS"], ["Gate they own", "Print approval"], ["Standards", "AS9100 / ISO 13485"], ["Reviewed", "Monthly mgmt review"]], "environment": "Split personality by design: an Inspector at a bench with gauges, CMMs, and physical parts, and a Compliance Manager at a desk in documents and audit records. Precision-obsessed, detail-driven, and accountable to external auditors &mdash; correctness always beats speed here.", "meters": [["Software proficiency", "High", 80], ["Compliance / standards depth", "Very high", 95], ["Tolerance for ambiguity", "Very low", 12]], "inwords": "&ldquo;Every requirement in the Standard has to tie to a procedure, to the training that certifies who can do it. The whole chain is the difference between keeping certification and losing the customer.&rdquo;", "goals": ["Zero bad parts shipped, zero missing certs in the packet.", "Every dim traceable to the gauge that measured it and who signed off.", "Pass every external audit clean &mdash; keep AS9100 / ISO current.", "Turn NCRs into procedure updates so the same issue doesn't recur."], "frustrations": ["AS9102 form contents are constantly debated by clients &mdash; what populates where.", "No multi-part FAI: one WO = one FAI, even when a client wants a batch.", "Serial numbers for identified parts don't auto-populate to the AS9102 form.", "The cert-packet PDF combine can fail if the file drive isn't set up."], "needs": ["Configurable AS9102 / CFC field mapping to end the client-by-client debates.", "Multi-part FAI support &mdash; one report across a batch of work orders.", "Auto-populated serial numbers and identified-part fields on the forms.", "A cert-packet generator that never silently fails to assemble."], "kpis": [["OTD", "Date-shipped vs. due-date, measured when the packing slip is created."], ["NCR count", "Out-of-tolerance dims caught &mdash; and how many escaped."], ["RMA rate", "Customer returns and how fast they're dispositioned."], ["Audit findings", "Internal and external &mdash; and corrective-action closure time."]], "modules": [["Quality Systems & Inspection", "home", true], ["Calibration & Preventative", "home", true], ["Sales & Work Orders", "reads", false], ["Visual Work Instructions", "reads", false], ["Data Management", "reads", false]], "upstream": ["Touches all", "Every stage", "Sets requirements, gates the print, checks parts"], "in_arrow": "Specs", "flow_self": "Proves the parts and proves the system", "out_arrow": "Cert&nbsp;packet", "downstream": ["Feeds", "Shipping", "Receives the passed parts + cert packet"], "flow_note": "Functional QA proves the part; the QMS proves the shop. QA is drawn here as cross-cutting because it sets requirements upstream (Contact page), gates production mid-stream (print approval), and closes the loop downstream (cert packet) &mdash; the only persona that touches every stage.", "footnote": "Source: ProShop persona sessions + product docs. Multi-part FAI and form-mapping gaps were raised by clients in-session.", "nav_areas": ["NCRs", "CARs", "RMAs", "Approvals", "Audit Reports", "Training", "Standards", "Documents", "Inspection &amp; Equipment"], "nav_areas_note": "", "_key": "07_qa"}, {"series_label": "ProShop User Persona", "index": "08", "name": "Accounting", "stage": "Post-Production", "tagline": "Closes the financial loop &mdash; turning a shipped job into an invoice, and matching every supplier bill so the shop actually gets paid for the work.", "quote": "The part shipping is only half the job &mdash; it isn't finished until it's invoiced, paid, and reconciled.", "who1": "Accounting sits at the tail of the workflow, converting completed work into money in and money out. They generate customer invoices from packing slips, push them into the accounting package, mark customer PO lines complete, and generate vendor bills in ProShop to match against supplier invoices. They're the bridge between the shop-floor system of record and the financial system of record.", "who2": "In small shops this is the owner or a bookkeeper doing it part-time; in larger shops it's a dedicated finance seat, often working across ProShop and a separate accounting platform like QuickBooks via integration.", "day": [["Invoice", "Generates the customer invoice <b>from the packing slip</b> &mdash; the shipment is the trigger."], ["Sync", "Adds the invoice to the accounting package, via integration or manually."], ["Close", "Checks &lsquo;WO complete&rsquo; on the customer PO line to mark it invoiced and done."], ["Bills", "Generates vendor bills in ProShop to match against incoming supplier invoices."], ["Match", "Reconciles invoices to customer payments and bills to supplier invoices in the accounting software."], ["Report", "Feeds job-cost actuals back so the shop knows which jobs actually made money."]], "snapshot": [["Workflow stage", "Post-production"], ["Invoice trigger", "Packing slip"], ["Works across", "ProShop + accounting SW"], ["Closes", "Customer PO lines"], ["Two-way", "Invoices + vendor bills"]], "environment": "Desk-based, spreadsheet- and finance-software-fluent, mouse-and-keyboard. Lives half in ProShop and half in a dedicated accounting platform, so the quality of the integration between them is a daily reality. Values reconciliation accuracy and a clean audit trail over speed.", "meters": [["Software proficiency", "High", 84], ["Manufacturing depth", "Low&ndash;Medium", 40], ["Tolerance for reconciliation errors", "Very low", 15]], "inwords": "&ldquo;If the invoice doesn't tie cleanly back to the PO line and the packing slip, I'm chasing paper across two systems to figure out what we actually owe or are owed.&rdquo;", "goals": ["Invoice accurately and promptly so cash comes in on time.", "Match every supplier bill to its PO and receipt with no leakage.", "Keep ProShop and the accounting package in clean, reliable sync.", "Give leadership true job-cost actuals &mdash; which work made money."], "frustrations": ["Invoicing spans two systems, so integration gaps mean manual double-entry.", "A WO left un-closed on a PO line quietly stalls the invoice.", "Vendor bills and supplier invoices can drift out of match without a clear flag.", "Job-cost actuals depend on operators tracking time honestly upstream."], "needs": ["A rock-solid accounting integration &mdash; invoices and bills that sync without rekeying.", "A clear queue of shipped-but-not-invoiced jobs so nothing is missed.", "Bill-to-PO-to-receipt three-way matching surfaced inside ProShop.", "Trustworthy job-cost roll-ups that reflect real time and material."], "kpis": [["DSO", "Days sales outstanding \u2014 how fast invoices convert to cash."], ["Match rate", "Supplier bills cleanly matched to POs and receipts."], ["Invoice lag", "Time from shipment to invoice sent."], ["Job margin", "Actual profit per job vs. the original estimate."]], "modules": [["Job Costing & Financial Data", "home", true], ["Sales & Work Orders", "home", true], ["Inventory & Material Planning", "reads", false], ["Integrations", "reads", false], ["Data Management", "reads", false]], "upstream": ["Upstream", "Shipping", "Creates the packing slip that triggers the invoice"], "in_arrow": "Shipment", "flow_self": "Invoices, bills, matches &amp; closes the job", "out_arrow": "Closed", "downstream": ["Downstream", "The Estimator", "Uses real job margins to sharpen future quotes"], "flow_note": "Accounting closes the loop the Estimator opened: real job-cost actuals flow back so the next quote is sharper. This persona is reconstructed from ProShop's HR onboarding deck and product docs rather than a dedicated persona session, so treat its detail as directional pending validation.", "footnote": "Source: ProShop HR onboarding deck + product docs. No dedicated persona session existed for this role &mdash; validate before treating as authoritative.", "_key": "08_accounting"}];
const PDFS = {"Start Here (ProShop 101)": "Persona_00_Start_Here.pdf", "The Shop Owner": "Persona_ShopOwner.pdf", "The Estimator": "Persona_01_Estimator.pdf", "Order Entry": "Persona_02_Order_Entry.pdf", "Planner / PM": "Persona_03_Planner_PM.pdf", "Buyer & Receiver": "Persona_04_Buyer_Receiver.pdf", "Operator & Tool Crib": "Persona_05_Operator_Tool_Crib.pdf", "Inventory & Shipping": "Persona_06_Inventory_Shipping.pdf", "Functional QA": "Persona_07_Functional_QA.pdf", "Accounting": "Persona_08_Accounting.pdf", "Cross-Persona Summary": "Persona_09_Cross_Persona_Summary.pdf"};
const KEY2PDF = {
  '00_shopowner':'The Shop Owner','01_estimator':'The Estimator','02_orderentry':'Order Entry',
  '03_planner':'Planner / PM','04_buyer_receiver':'Buyer & Receiver','05_operator_toolcrib':'Operator & Tool Crib',
  '06_inventory_shipping':'Inventory & Shipping','07_qa':'Functional QA','08_accounting':'Accounting'
};
const PDF_META = {
  'Start Here (ProShop 101)':'3 pages · primer','The Shop Owner':'2 pages · buyer persona',
  'The Estimator':'2 pages','Order Entry':'2 pages','Planner / PM':'2 pages',
  'Buyer & Receiver':'2 pages','Operator & Tool Crib':'2 pages','Inventory & Shipping':'2 pages',
  'Functional QA':'2 pages','Accounting':'2 pages','Cross-Persona Summary':'2 pages · landscape'
};
const DL_ORDER = ['Start Here (ProShop 101)','The Shop Owner','The Estimator','Order Entry','Planner / PM','Buyer & Receiver','Operator & Tool Crib','Inventory & Shipping','Functional QA','Accounting','Cross-Persona Summary'];

const HUB = {
 "lenses": [
  {
   "id": "buyer",
   "label": "Buyer",
   "who": "Sales / Marketing",
   "desc": "The decision-makers who buy ProShop, and the shops they run.",
   "state": "partial",
   "owner": "PMM (Marketing)",
   "blurb": "Who signs, who champions, and the shops they run."
  },
  {
   "id": "user",
   "label": "User",
   "who": "Product / Design",
   "desc": "The daily practitioners who live in the product.",
   "state": "built",
   "owner": "Product Ops",
   "blurb": "The people in the product every day, at three levels of depth."
  },
  {
   "id": "role",
   "label": "Role",
   "who": "CX / Implementation",
   "desc": "The full job taxonomy used to scope implementation and training.",
   "state": "partial",
   "owner": "CX Enablement",
   "blurb": "How CX scopes implementation and training around roles."
  }
 ],
 "stages": [
  {
   "id": "win",
   "label": "Win",
   "alt": "Pre-Production"
  },
  {
   "id": "plan",
   "label": "Plan",
   "alt": "Procurement"
  },
  {
   "id": "build",
   "label": "Build",
   "alt": "Production"
  },
  {
   "id": "learn",
   "label": "Learn",
   "alt": "Post-Production"
  }
 ],
 "groups": [
  {
   "id": "estimator",
   "lens": "user",
   "name": "The Estimator",
   "stage": "win",
   "summary": "Turns a customer's request into a priced, winnable quote &mdash; fast enough to beat competitors, accurate enough to protect margin.",
   "short": "Scopes, costs &amp; prices the job; sends the quote",
   "home_modules": [
    "Estimating & Quoting",
    "Sales & Work Orders"
   ],
   "positions": [],
   "persona_key": "01_estimator",
   "variants": [
    {
     "name": "The Sales Superstar",
     "subtitle": "Turns RFQs into won work",
     "pain": [
      "Lack of visibility on outstanding RFQ's",
      "Unable to review job performance history",
      "Clunky handbuilt estimating tools"
     ],
     "outcomes": [
      "Decrease response time to RFQ's",
      "Increase win-rate of quoted projects",
      "Evaluate previous project performance",
      "Increase quantity of quotes sent"
     ],
     "positions": [],
     "cross_lens": null,
     "source": "F2 User Personas (CX Enablement) - User Personas for Target Audience",
     "nesting": "confirmed",
     "status": "ok"
    }
   ],
   "notes": []
  },
  {
   "id": "orderentry",
   "lens": "user",
   "name": "Order Entry",
   "stage": "win",
   "summary": "Turns an incoming customer PO into a live job inside ProShop &mdash; the first paid step, and the record every other role inherits.",
   "short": "Transcribes the PO; creates part header &amp; work order",
   "home_modules": [
    "Sales & Work Orders",
    "Data Management"
   ],
   "positions": [],
   "persona_key": "02_orderentry",
   "variants": [
    {
     "name": "The Customer Relationship Manager",
     "subtitle": "Owns the customer's order and its status",
     "pain": [
      "Managing customer orders through email",
      "Chasing paper travelers to status jobs",
      "No real-time data to reference",
      "Lack of schedule visibility"
     ],
     "outcomes": [
      "Intake customer orders and supporting documentation",
      "Communicate client expectations and priorities",
      "Monitor and report job progress to clients"
     ],
     "positions": [],
     "cross_lens": null,
     "source": "F2 User Personas (CX Enablement) - User Personas for Target Audience",
     "nesting": "confirmed",
     "status": "ok"
    }
   ],
   "notes": []
  },
  {
   "id": "planner",
   "lens": "user",
   "name": "Planner / PM",
   "stage": "win",
   "summary": "Owns the configuration plan &mdash; turning a customer's requirements into a manufacturable, executable job before parts ever hit a machine.",
   "short": "Builds &amp; finalizes the configuration plan",
   "home_modules": [
    "Sales & Work Orders",
    "Visual Work Instructions",
    "Shop Floor & Scheduling"
   ],
   "positions": [],
   "persona_key": "03_planner",
   "variants": [
    {
     "name": "The Meticulous Manufacturing Planner",
     "subtitle": "Builds and schedules the manufacturing plan",
     "pain": [
      "Manual data entry",
      "Unable to quickly update WIP jobs",
      "Unable to find/view previous job data",
      "Holder of the Tribal Knowledge (constant questions)"
     ],
     "outcomes": [
      "Establish high level manufacturing workflows",
      "Set and manage project schedules",
      "Improve efficiency on repeat production",
      "Lead Kaizen and Lean shop activities"
     ],
     "positions": [],
     "cross_lens": null,
     "source": "F2 User Personas (CX Enablement) - User Personas for Target Audience",
     "nesting": "confirmed",
     "status": "ok"
    }
   ],
   "notes": []
  },
  {
   "id": "buyer_receiver",
   "lens": "user",
   "name": "Buyer &amp; Receiver",
   "stage": "plan",
   "summary": "The paired supply-chain roles that keep the shop fed &mdash; buying the right material and services at the right time, and verifying every box that arrives.",
   "short": "Buys, receives, inspects &amp; releases material",
   "home_modules": [
    "Inventory & Material Planning",
    "Tool & Fixture Management"
   ],
   "positions": [],
   "persona_key": "04_buyer_receiver",
   "variants": [
    {
     "name": "The Supply Chain Connoisseur",
     "subtitle": "Keeps material and vendors ahead of demand",
     "pain": [
      "Lack of visibility to upcoming demand",
      "Paper based inventory systems",
      "Lack of vendor traceability and accountability"
     ],
     "outcomes": [
      "Send and receive RFQ's to suppliers",
      "Ensure OTD of necessary materials and hardware",
      "Maintain inventory and safety stock levels",
      "Manage supplier performance"
     ],
     "positions": [],
     "cross_lens": null,
     "source": "F2 User Personas (CX Enablement) - User Personas for Target Audience",
     "nesting": "confirmed",
     "status": "ok"
    }
   ],
   "notes": []
  },
  {
   "id": "operator_toolcrib",
   "lens": "user",
   "name": "Operator &amp; Tool Crib",
   "stage": "build",
   "summary": "The people at the machine making parts, and the people who keep them fed &mdash; where every upstream decision becomes a green light or a red flag.",
   "short": "Sets up, cuts, inspects &amp; queues to next op",
   "home_modules": [
    "Shop Floor & Scheduling",
    "Visual Work Instructions",
    "Tool & Fixture Management"
   ],
   "positions": [],
   "persona_key": "05_operator_toolcrib",
   "variants": [
    {
     "name": "The Modern Machinist",
     "subtitle": "Runs the parts at the machine",
     "pain": [
      "Work instructions unclear or “tribal knowledge”",
      "Lack of schedule or work queue for forward planning",
      "Physical documentation of all transactions"
     ],
     "outcomes": [
      "Monitor and meet schedule deadlines",
      "Execute manufacturing plan to produce high quality components",
      "Document accurate, real-time data for job costing and profit analysis"
     ],
     "positions": [],
     "cross_lens": null,
     "source": "F2 User Personas (CX Enablement) - User Personas for Target Audience",
     "nesting": "confirmed",
     "status": "ok"
    },
    {
     "name": "The Tool Crib Captain",
     "subtitle": "Kits tooling before the job runs",
     "pain": [
      "Lack of organization wastes time finding tools",
      "No visibility of tool inventory",
      "Lack of foresight on tooling needs leads to tool shortages and delays"
     ],
     "outcomes": [
      "Pre-process tooling for upcoming jobs",
      "Manage tooling inventory and organization",
      "Monitor shop supplies inventory"
     ],
     "positions": [],
     "cross_lens": null,
     "source": "F2 User Personas (CX Enablement) - User Personas for Target Audience",
     "nesting": "confirmed",
     "status": "ok"
    },
    {
     "name": "The Programming Powerhouse",
     "subtitle": "Programs the job and owns setup documentation",
     "pain": [
      "Lack of schedule clarity leads to constant re-prioritization",
      "Unable to find/view previous job data",
      "Holder of the Tribal Knowledge (constant questions)"
     ],
     "outcomes": [
      "Generate and provide G-Code",
      "Maintain tooling and fixture catalog",
      "Establish and document setup sheets, tool lists, and work instructions",
      "Identify continuous improvement opportunities"
     ],
     "positions": [],
     "cross_lens": null,
     "source": "F2 User Personas (CX Enablement) - User Personas for Target Audience",
     "nesting": "confirmed",
     "status": "ok"
    },
    {
     "name": "The Talented Assembly Technician",
     "subtitle": "Assembles and verifies complex builds",
     "pain": [
      "Unable to locate BOM requirements and inventory",
      "Work instructions unclear or “tribal knowledge”",
      "Lack of schedule or work queue for forward planning"
     ],
     "outcomes": [
      "Manage BOM allocations and inventory transactions",
      "Document work instructions and necessary tooling",
      "Complete assembly of complex components",
      "Record inspection and test results"
     ],
     "positions": [],
     "cross_lens": null,
     "source": "F2 User Personas (CX Enablement) - User Personas for Target Audience",
     "nesting": "confirmed",
     "status": "ok"
    }
   ],
   "notes": []
  },
  {
   "id": "inventory_shipping",
   "lens": "user",
   "name": "Inventory &amp; Shipping",
   "stage": "learn",
   "summary": "The last stops before the customer &mdash; keeping counts trustworthy in the warehouse, and getting every box out the door complete and on time.",
   "short": "Warehouses, packs, certifies &amp; ships",
   "home_modules": [
    "Inventory & Material Planning",
    "Quality Systems & Inspection"
   ],
   "positions": [],
   "persona_key": "06_inventory_shipping",
   "variants": [],
   "notes": [
    "Canonical role pending (CX) - no canonical persona has been nested here yet."
   ]
  },
  {
   "id": "functional_qa",
   "lens": "user",
   "name": "Functional QA",
   "stage": "cross",
   "summary": "Owns product quality and system quality at once &mdash; proving every part meets its print, and keeping the whole shop certified.",
   "short": "Proves the parts and proves the system",
   "home_modules": [
    "Quality Systems & Inspection",
    "Calibration & Preventative"
   ],
   "positions": [
    "QA Inspector/Technician",
    "QA/MFG/DSG Engineer"
   ],
   "persona_key": "07_qa",
   "variants": [
    {
     "name": "The Quirky Quality Engineer",
     "subtitle": "Plans quality before parts run",
     "pain": [
      "Maintaining paper based calibration records",
      "Lack of visibility to previous NCR, RMA, CAR, PAR data",
      "Manual creation and management of paper-based inspection plans"
     ],
     "outcomes": [
      "Document requirements from client's quality codes",
      "Establish inspection plan",
      "Maintain QMS and regulatory compliance"
     ],
     "positions": [
      "QA/MFG/DSG Engineer"
     ],
     "cross_lens": null,
     "source": "F2 User Personas (CX Enablement) - User Personas for Target Audience",
     "nesting": "confirmed",
     "status": "ok"
    },
    {
     "name": "The Quality Management Professional",
     "subtitle": "Owns the QMS and compliance",
     "pain": [
      "Inability to manage compliance (e.g., AS9100)",
      "Difficulty navigating and completing quality audits",
      "Lack of organization and process control leads to chaos"
     ],
     "outcomes": [
      "Curate and maintain the QMS",
      "Ensure systems and processes comply with applicable quality standards",
      "Improve First-Pass Quality Yield",
      "Increase Customer Satisfaction"
     ],
     "positions": [
      "QA/MFG/DSG Engineer"
     ],
     "cross_lens": "buyer",
     "source": "F2 User Personas (CX Enablement) - User Personas for Target Audience",
     "nesting": "confirmed",
     "status": "ok"
    },
    {
     "name": "The Tactful Quality Technician",
     "subtitle": "Executes inspections and documentation",
     "pain": [
      "Cumbersome inspection data entry",
      "Lack of traceability",
      "Difficulty generating quality documentation"
     ],
     "outcomes": [
      "Quickly document and validate inspection results for compliance",
      "Reduce Scrap & Re-work %",
      "Create quality documentation package for customer deliveries"
     ],
     "positions": [
      "QA Inspector/Technician"
     ],
     "cross_lens": null,
     "source": "F2 User Personas (CX Enablement) - User Personas for Target Audience",
     "nesting": "confirmed",
     "status": "ok"
    }
   ],
   "notes": []
  },
  {
   "id": "accounting",
   "lens": "user",
   "name": "Accounting",
   "stage": "cross",
   "summary": "Closes the financial loop &mdash; turning a shipped job into an invoice, and matching every supplier bill so the shop actually gets paid for the work.",
   "short": "Invoices, bills, matches &amp; closes the job",
   "home_modules": [
    "Job Costing & Financial Data",
    "Sales & Work Orders"
   ],
   "positions": [],
   "persona_key": "08_accounting",
   "variants": [
    {
     "name": "The Busy Bookkeeper",
     "subtitle": "Closes the financial loop",
     "pain": [],
     "outcomes": [],
     "positions": [],
     "cross_lens": null,
     "source": "F2 User Personas (CX Enablement) - User Personas for Target Audience",
     "nesting": "confirmed",
     "status": "content_pending"
    }
   ],
   "notes": [
    "Placed as cross-cutting per the hub spec; the persona sheet itself labels this role Post-Production."
   ]
  },
  {
   "id": "shopowner",
   "lens": "buyer",
   "name": "The Shop Owner",
   "stage": "na",
   "summary": "The person who buys ProShop &mdash; a technical founder betting the business (and often their retirement) on getting the shop under control.",
   "short": "Buys, champions &amp; funds ProShop for the whole shop",
   "home_modules": [
    "Company Hub / Dashboards",
    "Job Costing & Financial Data"
   ],
   "positions": [],
   "persona_key": "00_shopowner",
   "variants": [
    {
     "name": "The Visionary Owner",
     "subtitle": "Owns the business outcome",
     "pain": [
      "Lack of organization",
      "Inefficient workflow",
      "Poor record-keeping",
      "Inaccurate quoting and scheduling"
     ],
     "outcomes": [
      "Increase Profit Margin",
      "Grow Sales",
      "Improve Customer Retention Rates",
      "Increase On-Time Delivery Rates"
     ],
     "positions": [],
     "cross_lens": null,
     "source": "F2 User Personas (CX Enablement) - User Personas for Target Audience",
     "nesting": "confirmed",
     "status": "ok"
    },
    {
     "name": "The Shop Boss",
     "subtitle": "Runs the floor day to day",
     "pain": [
      "Ineffective scheduling",
      "Manual work order tracking",
      "Difficulty managing vendor POs and materials"
     ],
     "outcomes": [
      "Increased On-Time Delivery Rates",
      "Improved Capacity Utilization",
      "Reduce order lead and setup times"
     ],
     "positions": [],
     "cross_lens": null,
     "source": "F2 User Personas (CX Enablement) - User Personas for Target Audience",
     "nesting": "confirmed",
     "status": "ok"
    }
   ],
   "notes": [
    "Buyer-lens decision-maker. The broader canonical buyer set is owned by PMM and is still pending."
   ]
  },
  {
   "id": "qmp_buyer",
   "lens": "buyer",
   "name": "The Quality Management Professional",
   "stage": "na",
   "summary": "Listed in the canonical buyer / decision-maker set alongside The Visionary Owner and The Shop Boss. The full persona depth for this role lives in the User lens, under Functional QA.",
   "short": "Buys for compliance and audit survival",
   "home_modules": [],
   "positions": [
    "QA/MFG/DSG Engineer"
   ],
   "persona_key": null,
   "variants": [
    {
     "name": "The Quality Management Professional",
     "subtitle": "Owns the QMS and compliance",
     "pain": [
      "Inability to manage compliance (e.g., AS9100)",
      "Difficulty navigating and completing quality audits",
      "Lack of organization and process control leads to chaos"
     ],
     "outcomes": [
      "Curate and maintain the QMS",
      "Ensure systems and processes comply with applicable quality standards",
      "Improve First-Pass Quality Yield",
      "Increase Customer Satisfaction"
     ],
     "positions": [
      "QA/MFG/DSG Engineer"
     ],
     "cross_lens": "user",
     "source": "F2 User Personas (CX Enablement) - User Personas for Target Audience",
     "nesting": "confirmed",
     "status": "ok"
    }
   ],
   "notes": [
    "This role is dual-lens: a daily user inside Functional QA and a decision-maker here. Only one set of canonical content exists for it - this is the same content viewed from the buyer side."
   ]
  }
 ],
 "unnested": [],
 "sources": {
  "f2": "F2 User Personas (CX Enablement) - User Personas for Target Audience",
  "positions": "ProShop access model (Editor + A-Seat CSVs), via the hub hand-off spec SS6"
 },
 "icp": {
  "definition": "ProShop's ideal customer is the small-to-mid-market precision machine shop of 20-75+ employees serving defense, medical and aerospace in North America - where compliance, traceability and execution accuracy are non-negotiable.",
  "conditions": [
   "Documentation errors are as costly as part defects",
   "Audits, certifications and customer mandates directly impact revenue",
   "Manual systems - paper, spreadsheets, tribal knowledge - actively limit growth"
  ],
  "lens": "ProShop defines its ICP with a regulatory-first lens: the higher the regulatory burden and process complexity, the more differentiated ProShop becomes.",
  "grades": [
   {
    "grade": "Grade A",
    "label": "Bullseye",
    "tone": "a",
    "rows": [
     [
      "Industry",
      "Aerospace, Defense, Medical"
     ],
     [
      "Size",
      "20&ndash;75 employees"
     ],
     [
      "Compliance",
      "AS9100, ITAR, CMMC, ISO 13485 (mandatory)"
     ],
     [
      "Pain",
      "&ldquo;We lose contracts if we fail audits.&rdquo;"
     ],
     [
      "Buys because",
      "Risk mitigation &amp; survival"
     ]
    ]
   },
   {
    "grade": "Grade B",
    "label": "Strong Fit",
    "tone": "b",
    "rows": [
     [
      "Industry",
      "Industrial, Auto, Robotics, Energy, Oil &amp; Gas"
     ],
     [
      "Size",
      "10&ndash;19 or 76&ndash;150 employees"
     ],
     [
      "Compliance",
      "ISO 9001, or aspiring to bullseye certs"
     ],
     [
      "Pain",
      "&ldquo;Manual errors are killing our margin.&rdquo;"
     ],
     [
      "Buys because",
      "Scaling &amp; professionalization"
     ]
    ]
   },
   {
    "grade": "Grade C",
    "label": "Lower Fit",
    "tone": "c",
    "rows": [
     [
      "Industry",
      "General mfg: Commercial, Ag, Mining, Consumer Goods"
     ],
     [
      "Size",
      "Under 10 or 200+ employees"
     ],
     [
      "Compliance",
      "Minimal or no formal QMS requirements"
     ],
     [
      "Pain",
      "&ldquo;We need better inventory tracking.&rdquo;"
     ],
     [
      "Buys because",
      "Modernization &amp; cleanup"
     ]
    ]
   }
  ],
  "tiers": [
   {
    "name": "P1 &mdash; Regulated industries",
    "def": "Legally required documentation, traceability and audit readiness.",
    "buy": "Compliance failure means lost contracts or licence risk.",
    "examples": "Aerospace, Defense, Medical, Space"
   },
   {
    "name": "P2 &mdash; Complex manufacturing",
    "def": "High workflow complexity with less mandated oversight.",
    "buy": "Tribal knowledge, scheduling issues and margin erosion.",
    "examples": "Automotive, Robotics, Semiconductor, Energy, Industrial Automation"
   }
  ],
  "decision_makers": [
   {
    "name": "The Visionary Owner",
    "pain": "Inaccurate quoting, poor scheduling, weak records",
    "outcome": "Higher margins, predictable delivery"
   },
   {
    "name": "The Quality Management Professional",
    "pain": "Audit chaos, compliance risk",
    "outcome": "100% audit readiness and improved first-pass yield"
   },
   {
    "name": "The Shop Boss",
    "pain": "Manual scheduling, no real-time visibility",
    "outcome": "Better capacity utilisation, shorter lead times"
   }
  ],
  "value_bridge": [
   {
    "t": "Regulated components",
    "d": "Purpose-built for discrete precision components with complex processes."
   },
   {
    "t": "Paperless shop floor",
    "d": "Replaces paper travelers and manual inspection plans with real-time digital documentation."
   },
   {
    "t": "Tribal-knowledge capture",
    "d": "Centralises G-code, setup sheets and work instructions so the shop doesn't stop if one person leaves."
   }
  ],
  "source": "Ideal Customer Profile - Marketing / GTM Hub (Confluence 2058911745), last modified 3/6/2026"
 },
 "role": {
  "purpose": "The Role lens is the full job taxonomy CX uses to scope implementation and training. The canonical role definitions are owned by CX Enablement and are still being authored. What is shown here is how CX applies roles today, plus the structure every finished role definition has to fill.",
  "journey": [
   {
    "stage": "Crawl",
    "name": "Implementation clients",
    "d": "Guided through their education journey by an Implementation Specialist, with ProShop Academy delivering the content. Each milestone focuses on one ProShop workflow, and clients are advised to involve every relevant user before that milestone's training begins."
   },
   {
    "stage": "Walk &amp; Run",
    "name": "Continuous-education clients",
    "d": "After go-live, clients self-serve through ProShop Academy and the Knowledge Base, with Customer Success Managers monitoring for training needs and opportunities."
   }
  ],
  "delivery": [
   {
    "t": "ProShop Academy courses",
    "d": "Structured, multi-format courses with assessments, designed around the common workflows and roles that align with the ICP."
   },
   {
    "t": "Live training",
    "d": "Deep-dive conversations, complex workflows and relationship building with an expert trainer."
   },
   {
    "t": "In-app guidance",
    "d": "Contextual tooltips, checklists and walkthroughs for short workflows, plus help icons on unique attributes."
   },
   {
    "t": "Knowledge base",
    "d": "How-tos, FAQs and best practice - text-first, supplemented with screenshots and short clips."
   }
  ],
  "outcomes": [
   "Gain real-time business analytics",
   "Maintain regulatory compliance",
   "Improve on-time delivery",
   "Increase throughput",
   "Increase profitability and job-costing accuracy",
   "Reduce non-conforming product and escapes (NCRs &amp; RMAs)",
   "Optimise inventory and streamline purchasing",
   "Reduce tribal knowledge"
  ],
  "definition_fields": [
   [
    "Role in the shop",
    "What the person actually does day to day - the decisions they make and the processes they own."
   ],
   [
    "ProShop modules they use",
    "Split into daily and occasional use, which drives learning paths and article tagging."
   ],
   [
    "Technical comfort level",
    "High, medium or low - prior exposure to ERP and digital tools, not capability."
   ],
   [
    "Jobs to be done",
    "Written as &ldquo;when I &hellip;, I want to &hellip;, so I can &hellip;&rdquo;, in the user's language."
   ],
   [
    "Primary pain points",
    "Friction before ProShop and friction still inside it."
   ],
   [
    "What success looks like",
    "Concrete and observable, not &ldquo;more productive&rdquo;."
   ],
   [
    "Common questions they ask",
    "Verbatim questions from onboarding, tickets and training."
   ],
   [
    "Content preferences",
    "Length, depth, format, and where they look when stuck."
   ]
  ],
  "sources": [
   "ProShop's Customer Education Strategy - CX Enablement (Confluence 1833959429)",
   "F2 - User Persona Definitions template - CX Enablement (Confluence 2357100644)"
  ]
 },
 "links": {
  "note": "ProShop Confluence — sign-in required. These pages are the maintained source of truth; the hub deliberately does not copy them.",
  "buyer": [
   {
    "t": "Ideal Customer Profile",
    "d": "Grading, priority tiers, the value bridge, TAM and the anti-ICP.",
    "u": "https://adionsystems.atlassian.net/wiki/spaces/MT/pages/2058911745/Ideal+Customer+Profile"
   },
   {
    "t": "GTM Hub",
    "d": "Launch briefs, positioning and messaging, pricing and packaging, competitive battlecards, enablement.",
    "u": "https://adionsystems.atlassian.net/wiki/spaces/MT/pages/2046427406/GTM+Hub"
   },
   {
    "t": "F3 — Buyer Persona Definitions",
    "d": "The PMM-owned template these personas will eventually be authored into.",
    "u": "https://adionsystems.atlassian.net/wiki/spaces/MT/pages/2358804498/F3+Buyer+Persona+Definitions"
   }
  ],
  "role": [
   {
    "t": "ProShop's Customer Education Strategy",
    "d": "Delivery methods, metrics, resourcing and the continuous-improvement loop.",
    "u": "https://adionsystems.atlassian.net/wiki/spaces/ProShopOnlineTraining/pages/1833959429/ProShop+s+Customer+Education+Strategy"
   },
   {
    "t": "F2 — User Persona Definitions",
    "d": "The CX-owned template every canonical role definition fills.",
    "u": "https://adionsystems.atlassian.net/wiki/spaces/MT/pages/2357100644/F2+User+Persona+Definitions"
   },
   {
    "t": "User Personas for Target Audience",
    "d": "The canonical CX persona list this hub's nested roles come from.",
    "u": "https://adionsystems.atlassian.net/wiki/spaces/ProShopOnlineTraining/pages/1834090502"
   }
  ]
 }
};
