// Full service catalog for FHDTech. Every entry powers a dedicated
// SEO landing page at /services/$slug rendered by services.$slug.tsx.
//
// Content is written per-service (no template loops) so each page has
// unique problems, solutions, features, benefits, process, FAQs.

export type ServiceCategory =
  | "GoHighLevel"
  | "AI Automation"
  | "CRM Solutions"
  | "Workflow Automation"
  | "Web Development"
  | "WordPress"
  | "SEO"
  | "Google Business Profile"
  | "Paid Advertising"
  | "Lead Generation"
  | "Booking & Sales Systems";

export interface FaqItem {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  short: string; // 1-line nav label description
  hero: {
    kicker: string;
    headline: string;
    sub: string;
  };
  problems: string[];
  solution: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  process: { step: string; desc: string }[];
  industries: string[];
  faqs: FaqItem[];
  related: string[]; // slugs
  seo: { title: string; description: string };
}

const ALL_INDUSTRIES = [
  "Real Estate",
  "HVAC",
  "Roofing",
  "Plumbing",
  "Solar",
  "Cleaning",
  "Law Firms",
  "Medical Clinics",
  "Dentists",
  "Insurance",
  "Home Services",
  "Marketing Agencies",
];

export const SERVICES: Service[] = [
  // ============================= GOHIGHLEVEL & CRM =============================
  {
    slug: "gohighlevel-crm-setup",
    title: "GoHighLevel CRM Setup",
    category: "GoHighLevel",
    short: "Full white-glove GHL sub-account build in 14 days.",
    hero: {
      kicker: "GoHighLevel Experts",
      headline: "A GoHighLevel CRM engineered around how you actually sell.",
      sub: "We build your entire GHL sub-account — pipelines, calendars, forms, automations, integrations — so your team goes from messy spreadsheets to a single source of truth in two weeks.",
    },
    problems: [
      "Leads are scattered across email, DMs, ad forms, and voicemail — nothing connects.",
      "You bought GoHighLevel but only use 10% of it because setup was overwhelming.",
      "Your team forgets to follow up, so 30-60% of paid leads never get a real conversation.",
      "You can't see which channel, campaign, or salesperson is actually producing revenue.",
    ],
    solution:
      "A complete white-glove GHL build. We map your exact sales motion, then configure every module — pipelines, custom fields, forms, calendars, opportunities, automations, memberships, reporting, and integrations — so the CRM works for your business on day one, not month six.",
    features: [
      "Sales pipeline architecture (up to 5 pipelines)",
      "Custom fields, tags, and lead-source tracking",
      "Forms, surveys, and multi-step questionnaires",
      "Calendars with round-robin and team routing",
      "Conversations inbox (SMS, email, FB, IG, WhatsApp)",
      "Opportunity stages with rot & value tracking",
      "Snapshot import & full sub-account cloning",
      "Twilio, Mailgun, Stripe, and calendar integrations",
      "Role-based user permissions and team onboarding",
      "1-hour team training + Loom SOP library",
    ],
    benefits: [
      {
        title: "Live in 14 days",
        desc: "Two-week sprint from kickoff to a working CRM your team is trained on.",
      },
      {
        title: "Nothing falls through",
        desc: "Every lead lands in a pipeline with an automated first response inside 60 seconds.",
      },
      {
        title: "Actual visibility",
        desc: "Dashboards show pipeline value, conversion rate, and rep performance in real time.",
      },
      {
        title: "Owned by you",
        desc: "It's your sub-account, your data. We hand over full admin access and documentation.",
      },
    ],
    process: [
      {
        step: "Discovery",
        desc: "60-min audit of your current sales motion, tools, and leaky handoffs.",
      },
      {
        step: "Blueprint",
        desc: "We map your pipelines, fields, automations, and integrations before touching GHL.",
      },
      {
        step: "Build",
        desc: "Full CRM configured in a staging sub-account. You review, we refine.",
      },
      {
        step: "Migrate & train",
        desc: "Data imported, team trained on Zoom, SOPs recorded to Loom.",
      },
      {
        step: "30-day tune-up",
        desc: "We watch the system live and tune workflows based on real usage.",
      },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Do I need to buy GoHighLevel separately?",
        a: "Yes — you'll need an active GHL sub-account (Starter is fine to begin). If you don't have one yet, we'll help you pick the right plan on kickoff.",
      },
      {
        q: "Can you migrate from HubSpot or Pipedrive?",
        a: "Yes. We export your contacts, deals, notes, and pipeline history, then remap them cleanly into GHL.",
      },
      {
        q: "What if I need changes after launch?",
        a: "Every build includes a 30-day tune-up window where iterations are included. After that we offer monthly optimization retainers.",
      },
      {
        q: "How much does this cost?",
        a: "GHL setups start at a fixed project fee based on scope. Book a free 30-minute call and we'll scope it live.",
      },
    ],
    related: [
      "gohighlevel-migration",
      "gohighlevel-snapshot-development",
      "gohighlevel-workflow-automation",
      "a2p-10dlc-verification",
    ],
    seo: {
      title: "GoHighLevel CRM Setup Services | FHDTech",
      description:
        "White-glove GoHighLevel CRM setup in 14 days — pipelines, automations, integrations, and team training done for you.",
    },
  },
  {
    slug: "gohighlevel-migration",
    title: "GoHighLevel Migration",
    category: "GoHighLevel",
    short: "Move from HubSpot, Pipedrive, Salesforce, or Keap without losing history.",
    hero: {
      kicker: "Zero-Downtime Migration",
      headline: "Move to GoHighLevel without losing a single contact, deal, or automation.",
      sub: "We migrate your contacts, deals, notes, files, and active sequences from your old CRM into a clean GHL sub-account — with a verification pass so nothing goes missing.",
    },
    problems: [
      "Your old CRM (HubSpot, Pipedrive, Keap, Salesforce, Zoho) costs 3-5x more than GHL.",
      "You're scared to switch because you'll lose deal history and running sequences.",
      "Manual CSV imports break custom fields, activities, and file attachments.",
      "Your team can't work in two systems during a slow migration.",
    ],
    solution:
      "A migration playbook we've run 40+ times. We export everything via API, rebuild your fields and pipelines in GHL, import in the correct dependency order, then reconcile record-by-record so old and new data match.",
    features: [
      "Full contact + company + deal export",
      "Custom field and property remapping",
      "Notes, tasks, and file attachment transfer",
      "Active sequence rebuild in GHL workflows",
      "Deal stage and pipeline history preservation",
      "Post-migration record-count reconciliation",
      "Team retraining on the new GHL layout",
      "Old-system decommission plan and data archive",
    ],
    benefits: [
      {
        title: "Nothing gets lost",
        desc: "Row-by-row reconciliation report proves every record made it across.",
      },
      {
        title: "No downtime",
        desc: "Cutover happens over a weekend; your team logs into GHL Monday morning.",
      },
      {
        title: "Slash your CRM bill",
        desc: "Most clients cut 60-80% off their monthly CRM + tooling stack after migration.",
      },
      {
        title: "Cleaner data than you started with",
        desc: "We de-dupe, standardize, and enrich as part of the move.",
      },
    ],
    process: [
      {
        step: "Audit source CRM",
        desc: "We map every object, field, and automation you actually use.",
      },
      {
        step: "Rebuild schema in GHL",
        desc: "Fresh pipelines, custom fields, and workflows in a staging sub-account.",
      },
      {
        step: "Test import",
        desc: "Migrate 10% of records, verify integrity, fix mapping issues.",
      },
      {
        step: "Full cutover",
        desc: "Weekend migration window. Emails and numbers routed to GHL Monday AM.",
      },
      {
        step: "Reconcile & train",
        desc: "Diff report, remaining data cleanup, and 60-min team walkthrough.",
      },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Which CRMs can you migrate from?",
        a: "HubSpot, Pipedrive, Salesforce, Zoho, Keap/Infusionsoft, ActiveCampaign, Monday CRM, ClickUp CRM, and any system with API or CSV export.",
      },
      {
        q: "Will my running email sequences break?",
        a: "No. We pause them at source, rebuild the equivalent workflow in GHL, and resume contacts at the correct step.",
      },
      {
        q: "How long does a migration take?",
        a: "Small orgs: 1 week. Mid-size (10k+ contacts, complex automations): 2-4 weeks.",
      },
    ],
    related: [
      "gohighlevel-crm-setup",
      "gohighlevel-snapshot-development",
      "gohighlevel-workflow-automation",
    ],
    seo: {
      title: "GoHighLevel Migration Services — HubSpot, Pipedrive, Keap | FHDTech",
      description:
        "Zero-downtime GoHighLevel migration with full contact, deal, and automation transfer. Reconciled row-by-row.",
    },
  },
  {
    slug: "gohighlevel-snapshot-development",
    title: "GoHighLevel Snapshot Development",
    category: "GoHighLevel",
    short: "Custom snapshots you can clone across every client sub-account.",
    hero: {
      kicker: "Agency Snapshots",
      headline: "Custom GoHighLevel snapshots that ship a full client in one click.",
      sub: "We package your entire onboarding — pipelines, workflows, calendars, funnels, forms, triggers — into a reusable GHL snapshot so you can spin up new clients in minutes, not weeks.",
    },
    problems: [
      "Every new client takes 20+ hours of rebuild work that isn't billable.",
      "Your team recreates the same workflows differently every time.",
      "Snapshots you bought from Facebook groups are bloated, buggy, or industry-mismatched.",
      "You can't scale past 20 sub-accounts because setup is manual.",
    ],
    solution:
      "We architect a lean, opinionated snapshot for your exact niche — real estate, HVAC, med spas, agencies — so every deploy is identical, tested, and clean. Includes documentation and a client-onboarding SOP.",
    features: [
      "Niche-specific pipelines (buyer / seller / repeat)",
      "Pre-built workflows for lead capture, follow-up, and reviews",
      "Branded funnels and landing pages",
      "Forms, calendars, and appointment triggers",
      "Membership + client-portal templates",
      "White-label reporting dashboards",
      "Snapshot documentation and change log",
      "Version control and update deploys",
    ],
    benefits: [
      {
        title: "Onboard in 30 minutes",
        desc: "Load the snapshot, swap logos and Twilio numbers, hand over.",
      },
      {
        title: "Consistent quality",
        desc: "Every client gets the same battle-tested build — no rogue variations.",
      },
      {
        title: "Scale to 100+ sub-accounts",
        desc: "Snapshots make you an agency, not a boutique.",
      },
    ],
    process: [
      {
        step: "Niche audit",
        desc: "Interview 3-5 of your best clients to identify the actual workflows that drive results.",
      },
      {
        step: "Snapshot design",
        desc: "Build the master sub-account, tested end-to-end against real data.",
      },
      {
        step: "Package & document",
        desc: "Export the snapshot with onboarding SOP and Loom walkthrough.",
      },
      {
        step: "Deploy & iterate",
        desc: "Run it on 3 live clients, capture edge cases, ship v1.1.",
      },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Do you build snapshots for any niche?",
        a: "Yes. We've shipped snapshots for real estate, HVAC, med spa, dental, coaching, and marketing agency use cases.",
      },
      {
        q: "Do I own the snapshot?",
        a: "100% yours. You can clone it, modify it, resell it as part of your agency service.",
      },
      {
        q: "Can you update an existing snapshot?",
        a: "Yes — snapshot audits and v2 rebuilds are common projects.",
      },
    ],
    related: [
      "gohighlevel-crm-setup",
      "gohighlevel-workflow-automation",
      "gohighlevel-ai-automation",
    ],
    seo: {
      title: "Custom GoHighLevel Snapshot Development for Agencies | FHDTech",
      description:
        "Niche-specific GHL snapshots with pipelines, workflows, funnels, and docs so you can onboard clients in 30 minutes.",
    },
  },
  {
    slug: "gohighlevel-workflow-automation",
    title: "GoHighLevel Workflow Automation",
    category: "GoHighLevel",
    short: "Complex multi-branch workflows that replace manual follow-up.",
    hero: {
      kicker: "Workflow Engineering",
      headline: "Every follow-up, reminder, and handoff — automated inside GoHighLevel.",
      sub: "We design and build the multi-channel, multi-branch workflows GoHighLevel is famous for — so your team stops doing the same 12 tasks per lead by hand.",
    },
    problems: [
      "Reps forget to follow up after day 3, and the lead goes cold.",
      "Missed calls never get a text-back; the prospect calls a competitor.",
      "Review requests aren't sent, so your GBP rating stagnates.",
      "New booked appointments don't trigger any prep, reminder, or intake flow.",
    ],
    solution:
      "We build a workflow library covering every high-leverage moment in your sales cycle: new lead, missed call, appointment booked, appointment no-show, deal won, review request, reactivation, upsell. Multi-channel (SMS + email + voicemail drop + WhatsApp), branching, and fully tracked.",
    features: [
      "New-lead 60-second speed-to-lead sequence",
      "Missed-call text back with AI reply",
      "12-touch long-term nurture with smart pauses",
      "Appointment reminder + confirmation flow",
      "No-show recovery with reschedule link",
      "Review request funnel with negative filter",
      "Reactivation campaign for cold leads",
      "Internal Slack / email notifications for hot signals",
    ],
    benefits: [
      {
        title: "3x reply rate",
        desc: "Multi-channel sequences hit prospects on the channel they actually check.",
      },
      {
        title: "15+ hours saved per week",
        desc: "Reps focus on selling, not typing the same follow-up text.",
      },
      {
        title: "Full audit trail",
        desc: "Every touchpoint logged in the contact record for compliance and coaching.",
      },
    ],
    process: [
      {
        step: "Journey mapping",
        desc: "We map your ideal customer's journey from first click to review request.",
      },
      {
        step: "Copywriting",
        desc: "Conversion-focused SMS and email copy written per touchpoint.",
      },
      {
        step: "Build & QA",
        desc: "Workflows built with sandbox test contacts to verify every branch.",
      },
      {
        step: "Launch & monitor",
        desc: "Go live, watch metrics, iterate weekly for the first month.",
      },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Can workflows send SMS from my number?",
        a: "Yes — we set up your Twilio + A2P 10DLC registration so texts send from a compliant business number.",
      },
      {
        q: "Will this work with my existing GHL sub-account?",
        a: "Yes. We audit what you already have, keep what works, and add the missing pieces.",
      },
    ],
    related: [
      "gohighlevel-crm-setup",
      "gohighlevel-ai-automation",
      "a2p-10dlc-verification",
      "marketing-automation",
    ],
    seo: {
      title: "GoHighLevel Workflow Automation Services | FHDTech",
      description:
        "Multi-channel GHL workflows for speed-to-lead, missed-call text back, reminders, reviews, and reactivation.",
    },
  },
  {
    slug: "gohighlevel-ai-automation",
    title: "GoHighLevel AI Automation",
    category: "GoHighLevel",
    short: "GHL workflows powered by GPT-class AI conversations.",
    hero: {
      kicker: "AI-Powered GHL",
      headline: "Turn GoHighLevel into an AI employee that qualifies, books, and follows up.",
      sub: "We plug GPT-class models into your GHL workflows so every lead gets a human-quality conversation — 24/7, in your brand voice, with the goal of a booked appointment.",
    },
    problems: [
      "Standard drip sequences feel robotic and prospects tune them out.",
      "You want AI, but connecting OpenAI to GHL properly is a nightmare of webhooks.",
      "You need conversations that adapt, not just linear templates.",
    ],
    solution:
      "We wire OpenAI (or Claude / Gemini) into GHL via inbound webhooks and custom actions so your workflows think. AI reads the contact record, generates a personalized SMS or email, waits for a reply, and routes based on intent — all inside the GHL contact timeline.",
    features: [
      "AI-generated first-touch SMS and email",
      "AI reply classification (interested / not / question)",
      "AI appointment-booking conversations",
      "AI intake summarization for reps",
      "Fallback to human when confidence drops",
      "Prompt library maintained per client",
    ],
    benefits: [
      {
        title: "Human-grade replies at 1am",
        desc: "Prospects can't tell the difference from a great SDR.",
      },
      {
        title: "Higher booking rate",
        desc: "Conversations adapt to what the lead actually said, not a script.",
      },
      {
        title: "Reps only touch hot leads",
        desc: "AI filters out tire-kickers and hands over qualified opportunities.",
      },
    ],
    process: [
      {
        step: "Use-case scoping",
        desc: "Pick the 2-3 workflows where AI creates the most leverage.",
      },
      {
        step: "Prompt engineering",
        desc: "Write, test, and version prompts against real lead data.",
      },
      {
        step: "Wire into GHL",
        desc: "Webhooks, custom actions, and fallback branches built and QA'd.",
      },
      {
        step: "Monitor & tune",
        desc: "Weekly review of AI transcripts; prompts refined over 30 days.",
      },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Whose AI does this use?",
        a: "By default OpenAI (GPT-4-class). We can also run Claude or Gemini if your compliance stack requires it.",
      },
      {
        q: "Is it safe for regulated industries?",
        a: "Yes — we build guardrails and human-review branches for medical, legal, and financial use cases.",
      },
    ],
    related: [
      "gohighlevel-workflow-automation",
      "ai-chatbots",
      "ai-voice-agents",
      "ai-appointment-booking",
    ],
    seo: {
      title: "GoHighLevel AI Automation Services | FHDTech",
      description:
        "Plug GPT-class AI into GoHighLevel workflows for personalized SMS, email, and booking conversations that convert.",
    },
  },
  {
    slug: "a2p-10dlc-verification",
    title: "A2P 10DLC Verification",
    category: "GoHighLevel",
    short: "Brand + campaign registration so your SMS actually delivers.",
    hero: {
      kicker: "SMS Compliance",
      headline: "Get your SMS delivered — done-for-you A2P 10DLC registration.",
      sub: "US carriers now block unregistered business SMS. We handle the entire Brand + Campaign registration so your GoHighLevel, Twilio, or Bandwidth texts hit inboxes with high throughput.",
    },
    problems: [
      "Your texts get filtered as spam or throttled to 1 msg/sec.",
      "TCR keeps rejecting your campaign for vague sample messages or missing opt-in language.",
      "You don't have a public privacy policy or terms describing SMS use.",
      "You're bleeding leads because appointment reminders never arrive.",
    ],
    solution:
      "We handle every step of Brand + Campaign registration on The Campaign Registry (TCR) via GHL, Twilio, or Bandwidth. Includes compliance copy, opt-in flow, privacy policy language, and approval troubleshooting until you're live.",
    features: [
      "EIN + business profile submission",
      "Brand registration on TCR",
      "Campaign use-case selection (marketing, mixed, low-volume)",
      "Sample message copywriting compliant with CTIA rules",
      "Opt-in workflow and consent tracking",
      "Privacy policy + terms SMS clause",
      "Rejection appeal handling",
      "Post-approval throughput monitoring",
    ],
    benefits: [
      {
        title: "Higher deliverability",
        desc: "Registered numbers get carrier trust scores and full MPS throughput.",
      },
      {
        title: "No more surprise blocks",
        desc: "You stay compliant with CTIA, TCPA, and carrier guidelines.",
      },
      {
        title: "Done in days, not months",
        desc: "We know exactly what TCR wants; most brands approve in under a week.",
      },
    ],
    process: [
      { step: "Docs collection", desc: "EIN, business profile, sample messages, opt-in URL." },
      { step: "Submission", desc: "Brand + campaign filed on TCR through your carrier." },
      {
        step: "Rejection triage",
        desc: "If TCR pushes back, we rewrite and resubmit — included in fee.",
      },
      {
        step: "Go live",
        desc: "Numbers linked to campaign, throughput verified, monitoring in place.",
      },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Do I need this if I'm outside the US?",
        a: "Only if you send SMS to US recipients. Canada, UK, and AU have separate compliance regimes we can also handle.",
      },
      {
        q: "What if TCR rejects my campaign?",
        a: "Included in our fee. We rewrite sample messages, adjust opt-in language, and resubmit until approved.",
      },
    ],
    related: ["gohighlevel-crm-setup", "gohighlevel-workflow-automation", "marketing-automation"],
    seo: {
      title: "A2P 10DLC Brand & Campaign Registration Services | FHDTech",
      description:
        "Done-for-you A2P 10DLC verification so your GHL and Twilio SMS deliver at full throughput.",
    },
  },
  {
    slug: "real-estate-crm",
    title: "Real Estate CRM Setup",
    category: "CRM Solutions",
    short: "Buyer + seller pipelines, showing automation, drip nurtures.",
    hero: {
      kicker: "For Realtors & Brokerages",
      headline: "A real-estate CRM that keeps every buyer, seller, and past client warm.",
      sub: "Purpose-built GoHighLevel setup for agents and brokerages — separate buyer and seller pipelines, showing reminders, open-house automation, and long-term nurture that generates referrals for years.",
    },
    problems: [
      "You lose deals because Zillow / Realtor.com leads never get a call in 5 minutes.",
      "Past clients forget you exist — no birthday, home-anniversary, or market-update touches.",
      "Showings are managed in text threads and Google Calendar chaos.",
      "You can't tell which lead source is actually producing closings.",
    ],
    solution:
      "A real-estate-specific GHL snapshot: buyer pipeline (new / active / under contract / closed), seller pipeline (lead / listing appointment / listed / sold), showing calendar with automated reminders, and a 3-year past-client nurture with market updates and home-anniversary notes.",
    features: [
      "Buyer + seller pipelines with stage automation",
      "5-minute speed-to-lead SMS + call notification",
      "IDX / Zillow / Facebook lead capture integrations",
      "Showing calendar with pre- and post-visit reminders",
      "Open-house RSVP + follow-up automation",
      "Past-client nurture (birthday, home-anniversary, market update)",
      "Referral request workflow post-close",
      "Team lead routing and round-robin",
    ],
    benefits: [
      {
        title: "More closings from the same lead flow",
        desc: "Speed-to-lead + nurture typically lifts conversion 30-50%.",
      },
      {
        title: "Referral engine on autopilot",
        desc: "Past clients hear from you for 3 years without lifting a finger.",
      },
      {
        title: "Team accountability",
        desc: "Broker sees every rep's pipeline, activity, and closing ratio.",
      },
    ],
    process: [
      {
        step: "Team workflow audit",
        desc: "How you actually work buyers, sellers, and past clients.",
      },
      {
        step: "Snapshot deploy",
        desc: "Real-estate snapshot loaded and branded to your brokerage.",
      },
      {
        step: "Integrations",
        desc: "Zillow, Realtor.com, FB Lead Ads, IDX, and Google Calendar wired up.",
      },
      { step: "Train & launch", desc: "60-min agent training + Loom SOP library." },
    ],
    industries: ["Real Estate"],
    faqs: [
      {
        q: "Does this work for teams and single agents?",
        a: "Both. Solo agents get a simplified version; teams get round-robin routing and broker dashboards.",
      },
      {
        q: "Can you connect to my MLS or IDX?",
        a: "Yes — we integrate with most IDX providers via webhook or Zapier bridge.",
      },
    ],
    related: [
      "gohighlevel-crm-setup",
      "gohighlevel-workflow-automation",
      "lead-generation",
      "appointment-booking",
    ],
    seo: {
      title: "Real Estate CRM Setup — GoHighLevel for Agents | FHDTech",
      description:
        "Buyer + seller pipelines, 5-min speed-to-lead, showing reminders, and 3-year past-client nurture in GoHighLevel.",
    },
  },
  {
    slug: "hvac-crm",
    title: "HVAC CRM Setup",
    category: "CRM Solutions",
    short: "Dispatch, estimates, maintenance memberships, and review automation.",
    hero: {
      kicker: "For HVAC & Home Services",
      headline: "An HVAC CRM that dispatches faster, closes more estimates, and keeps trucks full.",
      sub: "GoHighLevel built for HVAC — estimate follow-up, technician dispatch texts, maintenance-membership renewals, review automation, and every touchpoint a service business needs to grow past the founder's phone.",
    },
    problems: [
      "You send estimates but forget to follow up — 40% get lost to competitors.",
      "Technicians miss appointments because dispatch is in group texts.",
      "Maintenance memberships don't renew because no one calls the customer.",
      "You get 5-star jobs but never ask for the Google review.",
    ],
    solution:
      "HVAC-specific GoHighLevel snapshot: estimate follow-up sequence, technician dispatch workflow, appointment reminders with tech ETA, maintenance-membership renewal automation, and a post-job review-request funnel that filters negative feedback privately.",
    features: [
      "Estimate follow-up (day 1, 3, 7, 14, 30)",
      "Technician dispatch SMS with ETA + job details",
      "Customer 'tech is 15 minutes out' notification",
      "Maintenance membership auto-renewal reminders",
      "Post-job review request funnel with negative filter",
      "Seasonal tune-up campaign (spring AC / fall furnace)",
      "Emergency-call routing after hours",
      "QuickBooks + ServiceTitan integration",
    ],
    benefits: [
      {
        title: "20-40% higher estimate close rate",
        desc: "Automated follow-up recovers deals that would have gone silent.",
      },
      {
        title: "Full trucks year-round",
        desc: "Maintenance renewals and seasonal campaigns smooth out slow months.",
      },
      {
        title: "GBP rating up 0.5-1.0 stars",
        desc: "Systematic review requests dramatically move your local ranking.",
      },
    ],
    process: [
      { step: "Service audit", desc: "How you dispatch, estimate, and follow up today." },
      {
        step: "Snapshot deploy",
        desc: "HVAC snapshot branded to your company, integrated with your field-service tool.",
      },
      { step: "Train dispatch + techs", desc: "Roles set up, mobile app onboarding, Loom SOPs." },
      { step: "Launch + monitor", desc: "First 30 days we watch every workflow live and tune." },
    ],
    industries: ["HVAC", "Roofing", "Plumbing", "Solar", "Home Services", "Cleaning"],
    faqs: [
      {
        q: "Does this replace ServiceTitan / Housecall Pro?",
        a: "No — it complements them. GHL handles marketing, lead follow-up, and reviews; your field-service software still runs dispatch and invoicing.",
      },
      {
        q: "Can you set it up for roofing / plumbing / solar too?",
        a: "Yes. The same architecture adapts to any high-ticket home service.",
      },
    ],
    related: [
      "gohighlevel-crm-setup",
      "gohighlevel-workflow-automation",
      "google-business-profile-review-automation",
      "lead-generation",
    ],
    seo: {
      title: "HVAC CRM Setup — GoHighLevel for HVAC & Home Services | FHDTech",
      description:
        "GHL setup for HVAC, plumbing, roofing, and solar. Estimate follow-up, dispatch, memberships, and review automation.",
    },
  },

  // ============================= AI AUTOMATION =============================
  {
    slug: "ai-automation",
    title: "AI Automation",
    category: "AI Automation",
    short: "Custom AI agents that replace repetitive work end-to-end.",
    hero: {
      kicker: "Custom AI Agents",
      headline: "Autonomous AI agents that run your busywork — 24/7, without complaint.",
      sub: "We design, build, and deploy custom AI automations that qualify leads, answer questions, generate reports, and glue together the tools your team already uses.",
    },
    problems: [
      "Your team spends 20+ hours a week on repetitive tasks that a language model could do.",
      "You've tried off-the-shelf AI tools but they don't know your business.",
      "You want AI leverage without hiring a full engineering team.",
    ],
    solution:
      "We combine LLMs (OpenAI, Claude, Gemini) with your CRM, email, calendar, and internal tools via Zapier, Make.com, and custom APIs. The result: production AI agents that behave predictably, log every action, and hand off to humans when it matters.",
    features: [
      "Custom prompt engineering per workflow",
      "Multi-step agent orchestration",
      "Human-in-the-loop review branches",
      "Retrieval over your knowledge base",
      "Guardrails, logging, and PII scrubbing",
      "Integrations with 5,000+ apps via Zapier/Make",
    ],
    benefits: [
      {
        title: "Reclaim 15+ hours/week",
        desc: "Per team member, on average, once the first three agents are live.",
      },
      {
        title: "Never sleeps",
        desc: "Agents run overnight and on weekends so your pipeline never stops.",
      },
      {
        title: "Predictable behavior",
        desc: "Guardrails and eval tests keep quality consistent as prompts evolve.",
      },
    ],
    process: [
      {
        step: "Opportunity audit",
        desc: "We list every task and score it by hours saved × AI feasibility.",
      },
      {
        step: "Design & prototype",
        desc: "Ship the top 2 agents to a staging environment for testing.",
      },
      {
        step: "Production hardening",
        desc: "Guardrails, logging, cost caps, and human-review flows added.",
      },
      {
        step: "Rollout & training",
        desc: "Team trained on how to supervise and improve each agent.",
      },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "How is this different from ChatGPT?",
        a: "ChatGPT is a chat window. We build autonomous, integrated agents that read your CRM, trigger workflows, and act — not just answer questions.",
      },
      {
        q: "What does it cost to run?",
        a: "LLM cost is typically $10-100/mo per agent depending on volume. We optimize prompts for cost from day one.",
      },
    ],
    related: [
      "ai-chatbots",
      "ai-voice-agents",
      "gohighlevel-ai-automation",
      "marketing-automation",
    ],
    seo: {
      title: "Custom AI Automation Services for Businesses | FHDTech",
      description:
        "Custom AI agents that qualify leads, automate follow-up, and connect the tools your team already uses.",
    },
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    category: "AI Automation",
    short: "Trained on your business — books appointments and qualifies leads.",
    hero: {
      kicker: "AI Chatbots",
      headline: "An AI chatbot that actually books appointments — not another chat widget.",
      sub: "We build website and Messenger chatbots trained on your services, pricing, and FAQs. They qualify visitors, capture contact info, and drop booked calls straight into your CRM.",
    },
    problems: [
      "Most website chatbots ask 'How can I help you?' and go nowhere.",
      "Your team can't answer chat 24/7, so night-time visitors bounce.",
      "Lead capture forms convert at 2-3% because they feel like paperwork.",
    ],
    solution:
      "We build LLM-powered chatbots trained on your service pages, pricing, and knowledge base. The bot answers in your brand voice, asks qualifying questions, and books the visitor into your calendar without ever handing off to a human.",
    features: [
      "Trained on your website, PDFs, and FAQs",
      "Website widget + Facebook Messenger + Instagram DM",
      "Appointment booking inside the chat",
      "Lead qualification with custom logic",
      "CRM push (GHL, HubSpot, Pipedrive)",
      "Human handoff and transcript log",
    ],
    benefits: [
      {
        title: "10-20% chat-to-booking rate",
        desc: "Far better than static forms — the bot handles objections in real time.",
      },
      {
        title: "24/7 coverage",
        desc: "Night, weekends, holidays — every visitor gets a real conversation.",
      },
      {
        title: "Fewer support tickets",
        desc: "The bot answers 60-80% of common questions before they hit your inbox.",
      },
    ],
    process: [
      {
        step: "Knowledge ingest",
        desc: "We crawl your site and structure your FAQs, pricing, and services for the model.",
      },
      {
        step: "Prompt & flow design",
        desc: "Conversation goals, qualification questions, and booking logic defined.",
      },
      {
        step: "Deploy + widget install",
        desc: "Chatbot embedded on your site and connected to CRM + calendar.",
      },
      {
        step: "Weekly tuning",
        desc: "We review transcripts and improve responses over the first 30 days.",
      },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "What LLM do you use?",
        a: "By default OpenAI GPT-4-class. Claude and Gemini available on request.",
      },
      {
        q: "Can the bot hand off to a human?",
        a: "Yes — configurable triggers (low confidence, angry sentiment, specific keywords) hand off with full transcript.",
      },
    ],
    related: ["ai-voice-agents", "ai-appointment-booking", "ai-automation", "lead-generation"],
    seo: {
      title: "AI Chatbot Development — Book Appointments 24/7 | FHDTech",
      description:
        "Custom AI chatbots trained on your business that qualify leads, answer FAQs, and book appointments 24/7.",
    },
  },
  {
    slug: "ai-voice-agents",
    title: "AI Voice Agents",
    category: "AI Automation",
    short: "Inbound + outbound AI phone agents that sound human.",
    hero: {
      kicker: "AI Voice",
      headline:
        "AI phone agents that answer, qualify, and book — indistinguishable from your best receptionist.",
      sub: "We deploy inbound and outbound AI voice agents that handle new-lead calls, appointment scheduling, and follow-up dials at a fraction of the cost of a human team.",
    },
    problems: [
      "You miss 30-50% of inbound calls and lose those leads forever.",
      "A full-time receptionist costs $40k+ and only covers business hours.",
      "Outbound dial teams burn out on rejection and cost more than they close.",
    ],
    solution:
      "We build AI voice agents on Vapi, Retell, or Bland with your knowledge base, calendar, and CRM connected. They pick up on the first ring, ask qualifying questions, and book the appointment — or dial out for reactivation and warm follow-up.",
    features: [
      "Inbound answering with call routing",
      "Outbound dialing for reactivation and follow-up",
      "Calendar integration for live booking",
      "Warm transfer to a human when needed",
      "Custom voice, tone, and script",
      "Full call recording + transcript in CRM",
      "Bilingual support (EN + ES common)",
    ],
    benefits: [
      { title: "Zero missed calls", desc: "Every call answered inside 2 rings, 24/7." },
      {
        title: "$1/call economics",
        desc: "Typical cost is a fraction of a human receptionist per booked appointment.",
      },
      {
        title: "Consistent qualification",
        desc: "Every caller answers the same questions — no more 'depends who picked up.'",
      },
    ],
    process: [
      {
        step: "Script + persona design",
        desc: "We write the agent's greeting, qualification flow, and objection handling.",
      },
      {
        step: "Voice + integrations",
        desc: "Voice tuned to your brand; calendar, CRM, and transfer numbers wired.",
      },
      { step: "Test dial", desc: "You call it 20 times. We tune until it sounds right." },
      {
        step: "Go live + weekly review",
        desc: "We review recordings and improve the agent for the first 30 days.",
      },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Does it sound like a robot?",
        a: "No. Modern voice models (11Labs, Deepgram) sound human. Callers typically don't realize until told.",
      },
      {
        q: "Can it transfer to a real person?",
        a: "Yes — warm transfer with a call summary is standard.",
      },
      {
        q: "What's the monthly cost?",
        a: "Platform fees start around $50/mo plus $0.05-0.15/min. We optimize for your call volume.",
      },
    ],
    related: [
      "ai-chatbots",
      "ai-appointment-booking",
      "gohighlevel-ai-automation",
      "appointment-booking",
    ],
    seo: {
      title: "AI Voice Agent Development — Inbound & Outbound | FHDTech",
      description:
        "Human-sounding AI phone agents that answer, qualify, and book appointments 24/7. Vapi, Retell, and Bland experts.",
    },
  },
  {
    slug: "ai-appointment-booking",
    title: "AI Appointment Booking Systems",
    category: "AI Automation",
    short: "AI that books via chat, voice, SMS, and email — one calendar.",
    hero: {
      kicker: "AI Scheduling",
      headline: "One calendar. Every channel. Booked by AI.",
      sub: "We build unified booking systems where AI handles the scheduling conversation across web chat, SMS, email, and voice — with a single calendar and zero double bookings.",
    },
    problems: [
      "Calendly links convert poorly compared to a real conversation.",
      "Different channels create double bookings and missed slots.",
      "Reps burn hours playing scheduling ping-pong.",
    ],
    solution:
      "AI booking agents that access your live calendar, propose times based on lead priority, handle reschedules, and send confirmation + reminder sequences. Works from your website widget, incoming SMS, email replies, and inbound phone calls.",
    features: [
      "Single availability source across all channels",
      "Conflict-free multi-calendar sync (Google + Outlook)",
      "Timezone detection from IP + area code",
      "Reschedule + cancellation flows",
      "SMS + email reminder sequences",
      "Deposit collection via Stripe (optional)",
    ],
    benefits: [
      {
        title: "2-3x booking rate",
        desc: "Conversational scheduling converts far better than a plain link.",
      },
      {
        title: "Fewer no-shows",
        desc: "Multi-touch reminders + easy reschedule cut no-shows 30-50%.",
      },
      {
        title: "Reps stop scheduling",
        desc: "They only get calendar invites, never negotiation threads.",
      },
    ],
    process: [
      {
        step: "Calendar architecture",
        desc: "Availability rules, buffers, round-robin, and appointment types defined.",
      },
      {
        step: "Multi-channel wiring",
        desc: "Chat, SMS, email, and voice agents share one booking API.",
      },
      {
        step: "Reminders + payments",
        desc: "Confirmation, reminders, reschedule links, and optional deposits set up.",
      },
      {
        step: "Launch + monitor",
        desc: "First 30 days tuned against actual booking + no-show data.",
      },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Does this work with Google Calendar and Outlook?",
        a: "Yes — both, simultaneously, with real-time conflict checks.",
      },
      {
        q: "Can I require a deposit?",
        a: "Yes — Stripe deposits can be required for consult, no-show risk, or high-ticket bookings.",
      },
    ],
    related: [
      "ai-voice-agents",
      "ai-chatbots",
      "appointment-booking",
      "gohighlevel-workflow-automation",
    ],
    seo: {
      title: "AI Appointment Booking Systems | FHDTech",
      description:
        "Unified AI booking across chat, SMS, email, and voice. One calendar. Reminders, reschedules, and Stripe deposits built in.",
    },
  },
  {
    slug: "ai-vibe-coded-websites",
    title: "AI Vibe-Coded Websites",
    category: "Web Development",
    short: "Fast, conversion-first sites built with modern AI dev tooling.",
    hero: {
      kicker: "Modern Web",
      headline: "AI-built websites that ship in days and convert like crazy.",
      sub: "We use the latest AI development platforms (Cursor, v0, Lovable) to ship modern, conversion-focused sites 3-5x faster than a traditional agency — with the same enterprise polish.",
    },
    problems: [
      "Traditional agencies take 3-6 months and $30k+ for a marketing site.",
      "Website builders (Wix, Squarespace) hit a wall as soon as you need something custom.",
      "Your current site loads slow, ranks poorly, and looks like a template.",
    ],
    solution:
      "We combine expert design taste with modern AI dev tools to produce React-based, sub-1s, SEO-optimized sites in 1-2 weeks. Every page has real conversion copy, real animations, and real technical SEO — not template mush.",
    features: [
      "Component-based React + Tailwind builds",
      "Sub-1s LCP and 100 Lighthouse scores",
      "SEO metadata, schema, and sitemap by default",
      "Framer Motion animations and micro-interactions",
      "CMS or headless content (optional)",
      "Analytics + heatmap wiring",
    ],
    benefits: [
      {
        title: "Live in 7-14 days",
        desc: "Design, copy, build, and launch in two weeks for a typical marketing site.",
      },
      {
        title: "Actually fast",
        desc: "100 Lighthouse Performance / SEO / Accessibility scores as the baseline.",
      },
      {
        title: "Not another template",
        desc: "Custom design, custom copy, custom sections — no Wix vibes.",
      },
    ],
    process: [
      { step: "Strategy + wireframe", desc: "Value prop, page map, and conversion goals defined." },
      {
        step: "Design in the browser",
        desc: "We design live in code, no static Figma back-and-forth.",
      },
      { step: "Copy + SEO pass", desc: "Every page written for conversion and search intent." },
      {
        step: "Launch + analytics",
        desc: "Deployed on Vercel / Cloudflare, GA4 + heatmap installed.",
      },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Do you write the copy too?",
        a: "Yes — every service page includes conversion copy tailored to your industry and offer.",
      },
      {
        q: "Can I edit it myself later?",
        a: "Yes. We ship with a simple CMS or in-code content blocks, and hand over a Loom walkthrough.",
      },
    ],
    related: [
      "business-websites",
      "landing-page-development",
      "wordpress-development",
      "technical-seo",
    ],
    seo: {
      title: "AI Vibe-Coded Websites — Custom Modern Web Development | FHDTech",
      description:
        "Modern React websites built with AI dev tooling. Sub-1s, SEO-ready, conversion-focused — shipped in 7-14 days.",
    },
  },

  // ============================= WEB / WORDPRESS =============================
  {
    slug: "business-websites",
    title: "Business Websites",
    category: "Web Development",
    short: "Multi-page marketing sites engineered for organic + paid traffic.",
    hero: {
      kicker: "Business Websites",
      headline: "A business website that pulls its weight — as a salesperson, not a brochure.",
      sub: "We build multi-page marketing websites for service businesses that rank, convert, and integrate directly with your CRM and booking system.",
    },
    problems: [
      "Your current site was built years ago and nobody remembers who has the login.",
      "Contact forms email a Gmail account nobody checks.",
      "You have no idea which pages, if any, are producing leads.",
    ],
    solution:
      "A fresh, opinionated build: strong homepage, dedicated service pages (one per offering for SEO), industry pages, case studies, and a lead-capture flow that pushes straight into GoHighLevel or your CRM of choice.",
    features: [
      "Homepage + service pages + industry pages + case studies",
      "Booking calendar embedded on every page",
      "SEO metadata, schema, and sitemap done right",
      "CRM push (GHL / HubSpot / Pipedrive)",
      "Analytics + conversion tracking",
      "Mobile-first, 100 Lighthouse baseline",
    ],
    benefits: [
      {
        title: "Real lead flow",
        desc: "Every page is a landing page with a clear CTA and CRM handoff.",
      },
      {
        title: "Ranks in months, not years",
        desc: "Correct information architecture and schema from day one.",
      },
      {
        title: "Team can update it",
        desc: "Simple CMS blocks so you're not paying a developer for every text change.",
      },
    ],
    process: [
      {
        step: "Content architecture",
        desc: "Map every service, industry, and location page with search-intent.",
      },
      { step: "Design + build", desc: "Component-based build with your brand, copy, and imagery." },
      {
        step: "SEO + integrations",
        desc: "Schema, sitemap, CRM push, calendar, and analytics wired.",
      },
      { step: "Launch + optimize", desc: "First 30 days we watch heatmaps and refine top pages." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "How is this different from WordPress?",
        a: "This is modern React (Next.js / TanStack) with better speed, SEO, and security. WordPress still makes sense for blog-heavy or WooCommerce sites — see our WP page.",
      },
      {
        q: "Do you write the copy?",
        a: "Yes — every page written for conversion and search intent by us.",
      },
    ],
    related: [
      "ai-vibe-coded-websites",
      "landing-page-development",
      "wordpress-development",
      "technical-seo",
    ],
    seo: {
      title: "Business Website Development | FHDTech",
      description:
        "Multi-page business websites engineered for SEO, speed, and lead generation. Built for service businesses.",
    },
  },
  {
    slug: "wordpress-development",
    title: "WordPress Website Development",
    category: "WordPress",
    short: "Custom WordPress builds — themes, plugins, and performance tuning.",
    hero: {
      kicker: "WordPress Experts",
      headline: "WordPress sites that are fast, secure, and don't fall over.",
      sub: "Custom WordPress development with hand-tuned themes, Elementor Pro / Bricks builds, and the performance and security you don't get from Fiverr.",
    },
    problems: [
      "Your WP site is a plugin graveyard held together by prayer.",
      "PageSpeed score is 30 on mobile and you don't know why.",
      "The last developer disappeared and nothing is documented.",
    ],
    solution:
      "We rebuild or optimize your WordPress site with a lean, opinionated stack — modern PHP, minimal plugins, proper caching, CDN, and hardened security. Fully documented so any developer can take over.",
    features: [
      "Custom themes (block / classic / Elementor / Bricks)",
      "Custom plugin development",
      "WooCommerce builds and migrations",
      "Membership sites (MemberPress, PMP, Restrict Content Pro)",
      "Blog and content architecture",
      "Multilingual with WPML / Polylang",
      "Full performance and security hardening",
    ],
    benefits: [
      { title: "Actually fast WordPress", desc: "Sub-2s LCP on real mobile networks." },
      {
        title: "Nothing weird happening",
        desc: "Minimal plugins, clean database, staging + backups on every change.",
      },
      {
        title: "You own the stack",
        desc: "No proprietary lock-in, full documentation, code in GitHub.",
      },
    ],
    process: [
      { step: "Site audit", desc: "Performance, security, and plugin sanity check." },
      { step: "Design + build", desc: "New theme, page builds, and integrations." },
      {
        step: "Performance + security",
        desc: "Caching, CDN, image opt, WAF, and hardening applied.",
      },
      { step: "Launch + docs", desc: "Deployed with Loom walkthroughs and admin training." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Do you work with Elementor / Bricks / Divi?",
        a: "Yes — we're most efficient in Elementor Pro and Bricks, but we work in Divi and classic themes too.",
      },
      {
        q: "Can you fix a site someone else broke?",
        a: "Yes. Recovery, refactor, and cleanup projects are a big part of what we do.",
      },
    ],
    related: [
      "woocommerce-development",
      "wordpress-security",
      "wordpress-malware-removal",
      "wordpress-speed-optimization",
    ],
    seo: {
      title: "WordPress Website Development Services | FHDTech",
      description:
        "Custom WordPress themes, plugins, WooCommerce, membership sites, and performance tuning by experts.",
    },
  },
  {
    slug: "woocommerce-development",
    title: "WooCommerce Development",
    category: "WordPress",
    short: "Store setup, custom checkout, subscriptions, and speed.",
    hero: {
      kicker: "WooCommerce",
      headline: "WooCommerce stores built to scale past 1,000 orders a month.",
      sub: "Custom WooCommerce builds with fast checkout, subscription support, tax + shipping automation, and the performance tuning most stores desperately need.",
    },
    problems: [
      "Your Woo store crawls once you cross 500 products.",
      "Checkout abandonment is 70%+ because it's slow or clunky.",
      "You want subscriptions or bundles but can't find a plugin combo that works.",
    ],
    solution:
      "We build lean Woo stores with the minimum viable plugin stack, custom checkout, and proper caching — plus subscription, bundle, and B2B features tailored to your model.",
    features: [
      "Custom product types and variations",
      "One-page and express checkout",
      "Woo Subscriptions and memberships",
      "Bundles, upsells, cross-sells",
      "Shipping and tax automation",
      "B2B / wholesale pricing tiers",
      "Cart abandonment automation",
    ],
    benefits: [
      {
        title: "Faster checkout, higher conversion",
        desc: "One-page + Apple/Google Pay typically lift checkout completion 15-30%.",
      },
      {
        title: "Handles real traffic",
        desc: "Redis cache, object cache, and CDN keep the store fast during promos.",
      },
      {
        title: "Recurring revenue built in",
        desc: "Subscriptions + memberships wired to email automation from day one.",
      },
    ],
    process: [
      {
        step: "Store audit / scope",
        desc: "Product types, payment, shipping, and integrations mapped.",
      },
      { step: "Build", desc: "Theme, checkout, and plugin stack implemented." },
      { step: "Performance", desc: "Caching, image opt, CDN, and hosting tuning." },
      {
        step: "Launch + retention automation",
        desc: "Cart abandonment, review requests, and post-purchase flows.",
      },
    ],
    industries: ["Home Services", "Marketing Agencies", "Local Businesses"],
    faqs: [
      {
        q: "Can you migrate from Shopify?",
        a: "Yes — full product, customer, and order migration with URL redirects.",
      },
      {
        q: "Do you handle payment gateway setup?",
        a: "Yes — Stripe, PayPal, Authorize.net, Square, and regional gateways.",
      },
    ],
    related: ["wordpress-development", "wordpress-speed-optimization", "wordpress-security"],
    seo: {
      title: "WooCommerce Development Services | FHDTech",
      description:
        "Custom WooCommerce stores with fast checkout, subscriptions, bundles, and performance tuning.",
    },
  },
  {
    slug: "landing-page-development",
    title: "Landing Page Development",
    category: "Web Development",
    short: "High-converting landers built for paid traffic.",
    hero: {
      kicker: "Landing Pages",
      headline: "Landing pages engineered to convert your paid traffic.",
      sub: "We design and build fast, conversion-focused landing pages for Google Ads, Meta Ads, and cold outreach — with A/B testing and CRM integration baked in.",
    },
    problems: [
      "You're paying $8-30 per click and dumping it on a homepage.",
      "Your form converts at 2% and you don't know why.",
      "Every landing page from your last agency looked the same as the last.",
    ],
    solution:
      "One page. One offer. One CTA. We build focused, benefit-led landing pages with proof, social validation, and objection handling — plus A/B testing on headline, hero image, and CTA.",
    features: [
      "Custom design (no template drag-and-drop)",
      "Sub-1s load on mobile",
      "Sticky CTA + multi-step form",
      "Video, testimonial, and case-study modules",
      "A/B testing setup",
      "Direct CRM push (GHL, HubSpot, ActiveCampaign)",
      "Google + Meta pixel + conversion tracking",
    ],
    benefits: [
      {
        title: "5-15% typical conversion",
        desc: "3-5x better than most homepages for cold paid traffic.",
      },
      {
        title: "Lower CPA",
        desc: "Better landing page = lower cost per booked call, without changing ad spend.",
      },
      { title: "Test-ready", desc: "You can iterate headlines and hero images in an afternoon." },
    ],
    process: [
      { step: "Offer + audience", desc: "Nail the promise, prove it, and choose one CTA." },
      { step: "Wireframe + copy", desc: "Structure and words before design." },
      { step: "Design + build", desc: "Custom design, mobile-first, sub-1s LCP." },
      { step: "Launch + iterate", desc: "First A/B test running within 7 days of go-live." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Do you write the copy?",
        a: "Yes — direct-response copy is included with every landing page project.",
      },
      {
        q: "Can this hook into my ads?",
        a: "Yes — Google Ads, Meta, TikTok, LinkedIn pixels + conversion API wired up.",
      },
    ],
    related: [
      "business-websites",
      "paid-ads-management",
      "facebook-ads-management",
      "lead-generation",
    ],
    seo: {
      title: "Landing Page Development for Paid Traffic | FHDTech",
      description:
        "Custom high-converting landing pages for Google Ads, Meta Ads, and cold outreach. Sub-1s load, CRM-integrated.",
    },
  },
  {
    slug: "wordpress-security",
    title: "WordPress Security",
    category: "WordPress",
    short: "Firewall, hardening, backups, and 24/7 monitoring.",
    hero: {
      kicker: "WP Security",
      headline: "Stop worrying about WordPress getting hacked.",
      sub: "We harden your WordPress site with a real WAF, file-integrity monitoring, hardened logins, off-site backups, and 24/7 uptime + malware scans.",
    },
    problems: [
      "You've been hacked before and don't want it again.",
      "Wordfence emails you 40 alerts a day and you ignore all of them.",
      "There's no backup, or the backup is on the same server that died.",
    ],
    solution:
      "A full security hardening pass plus ongoing monitoring: WAF, 2FA, disabled file editing, forced HTTPS, hardened admin URLs, real-time file integrity, and off-site incremental backups you can actually restore.",
    features: [
      "Web application firewall (Cloudflare / Wordfence / Sucuri)",
      "2FA + hardened login (URL rename, brute-force block)",
      "File integrity monitoring",
      "PHP + WP core + plugin auto-update policy",
      "Off-site incremental backups with restore drill",
      "Malware + uptime monitoring 24/7",
      "Quarterly security audit",
    ],
    benefits: [
      {
        title: "Real protection, not plugin theater",
        desc: "Every setting hand-configured, not left on defaults.",
      },
      {
        title: "Tested backups",
        desc: "We restore your backup once a quarter so you know it actually works.",
      },
      {
        title: "Sleep at night",
        desc: "Alerts routed to us first; you only hear when something matters.",
      },
    ],
    process: [
      { step: "Audit", desc: "Scan for existing malware, weak points, and outdated components." },
      { step: "Harden", desc: "Apply the full checklist — WAF, 2FA, login, file perms, backups." },
      { step: "Monitor", desc: "Uptime, malware, and integrity checks on 24/7 schedule." },
      { step: "Respond", desc: "If something breaks, we're the ones who fix it, not you." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "What if I've already been hacked?",
        a: "Start with WordPress Malware Removal — we clean the site first, then apply hardening.",
      },
      {
        q: "Do I have to change hosts?",
        a: "Not unless yours is genuinely unsafe. Most upgrades happen inside your current host.",
      },
    ],
    related: [
      "wordpress-malware-removal",
      "wordpress-development",
      "website-maintenance",
      "wordpress-speed-optimization",
    ],
    seo: {
      title: "WordPress Security & Hardening Services | FHDTech",
      description:
        "Real WordPress security — WAF, 2FA, hardened logins, file integrity, off-site backups, and 24/7 monitoring.",
    },
  },
  {
    slug: "wordpress-malware-removal",
    title: "WordPress Malware Removal",
    category: "WordPress",
    short: "Emergency malware, hack, and blacklist recovery.",
    hero: {
      kicker: "Emergency Cleanup",
      headline: "Hacked WordPress site? We can clean it today.",
      sub: "Emergency malware removal, blacklist recovery, and post-hack hardening — usually done same-day, and with a hardening pass so it doesn't come back.",
    },
    problems: [
      "Google is flagging your site as 'Deceptive site ahead.'",
      "Your host suspended you for outbound spam.",
      "Redirects to sketchy sites, or a 'This Account Has Been Suspended' page.",
      "Random Japanese SEO spam pages in your search results.",
    ],
    solution:
      "Emergency scan + clean via SSH and manual file audit — not just a plugin scan. Every payload, backdoor, and injected user removed. Then we harden the site (WAF, 2FA, updates, hidden admin) so the same attack vector is closed.",
    features: [
      "Full server-side malware scan (not just WP plugin)",
      "Manual code audit for backdoors",
      "Database cleanup (injected posts, users, options)",
      "Google Safe Browsing + host blacklist removal",
      "Post-cleanup hardening pass",
      "60-day reinfection guarantee",
    ],
    benefits: [
      {
        title: "Same-day cleanup",
        desc: "Most sites are back online and clean in under 24 hours.",
      },
      {
        title: "Blacklist removal handled",
        desc: "We file with Google, McAfee, Norton, and your host on your behalf.",
      },
      {
        title: "Won't come back",
        desc: "We close the actual vulnerability, not just the symptom.",
      },
    ],
    process: [
      { step: "Triage call", desc: "Get access, confirm severity, quote emergency fee." },
      { step: "Clean", desc: "Scan, remove payloads, audit database, reset users." },
      { step: "Harden", desc: "Apply security hardening so the vector is closed." },
      { step: "Delist", desc: "Submit for Google Safe Browsing + host reactivation." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "How much does emergency cleanup cost?",
        a: "Fixed emergency fee based on severity. Most cleanups fall in a predictable range and are quoted upfront on the triage call.",
      },
      { q: "How fast can you start?", a: "Usually within 2-4 hours of confirmation." },
    ],
    related: ["wordpress-security", "wordpress-development", "website-maintenance"],
    seo: {
      title: "WordPress Malware Removal & Hack Recovery | FHDTech",
      description:
        "Emergency WordPress malware removal, blacklist recovery, and hardening. Usually same-day, with a 60-day guarantee.",
    },
  },
  {
    slug: "wordpress-speed-optimization",
    title: "WordPress Speed Optimization",
    category: "WordPress",
    short: "Score 90+ on PageSpeed with real Core Web Vitals gains.",
    hero: {
      kicker: "Speed & Core Web Vitals",
      headline: "Make WordPress genuinely fast — not just a green PageSpeed score.",
      sub: "We optimize WordPress for real-world Core Web Vitals: LCP under 2.0s, CLS under 0.1, and mobile speed that shows up in analytics, not just synthetic tests.",
    },
    problems: [
      "Your PageSpeed is 40 on mobile and Google is downranking you for it.",
      "Cache plugins made things worse or broke your layout.",
      "Images are 3MB each because nobody enforced compression.",
    ],
    solution:
      "A full optimization pass: server + PHP + database + assets. Object cache (Redis), page cache, image conversion to WebP/AVIF, JS defer/critical CSS, unused plugin removal, and hosting-level tuning.",
    features: [
      "Object cache (Redis / Memcached)",
      "Page cache + CDN",
      "WebP / AVIF image conversion",
      "Critical CSS + JS defer",
      "Database optimization",
      "Unused plugin + theme audit",
      "Hosting-level tuning (PHP-FPM, opcache)",
    ],
    benefits: [
      { title: "90+ PageSpeed", desc: "On real mobile networks, not just cached desktop tests." },
      {
        title: "Better SEO rankings",
        desc: "Core Web Vitals are a Google ranking factor. Real gains show up in position.",
      },
      { title: "Higher conversion", desc: "Every 100ms cut typically lifts conversion 1-2%." },
    ],
    process: [
      { step: "Audit", desc: "Real Chrome Web Vitals + Lighthouse + WebPageTest baselines." },
      { step: "Optimize", desc: "Server, assets, database, and plugin cleanup." },
      { step: "Retest", desc: "Verify real-world gains, iterate on remaining bottlenecks." },
      { step: "Monitor", desc: "Ongoing Web Vitals monitoring so regressions get caught." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Will you break my design?",
        a: "No. Every change is on staging first and QA'd against your live site.",
      },
      {
        q: "Do I need a new host?",
        a: "Sometimes. If your host is genuinely slow, we'll say so — otherwise we optimize where you are.",
      },
    ],
    related: [
      "wordpress-development",
      "wordpress-security",
      "technical-seo",
      "website-maintenance",
    ],
    seo: {
      title: "WordPress Speed Optimization Services | FHDTech",
      description:
        "Real WordPress speed optimization for Core Web Vitals. 90+ PageSpeed on mobile with LCP under 2 seconds.",
    },
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    category: "WordPress",
    short: "Monthly updates, backups, monitoring, and fixes.",
    hero: {
      kicker: "Ongoing Care",
      headline: "Someone whose job it is to keep your website working.",
      sub: "Monthly WordPress and web maintenance — updates, backups, uptime + malware monitoring, security patches, and small fixes so your site keeps earning without breaking.",
    },
    problems: [
      "You forgot the login and you're afraid to update anything.",
      "Site broke last time a plugin auto-updated.",
      "No one is watching if the site goes down.",
    ],
    solution:
      "A monthly maintenance plan: staged updates, off-site backups, uptime + malware monitoring, small edit budget, monthly report, and a real human to call when something needs fixing.",
    features: [
      "Weekly WP + plugin updates on staging first",
      "Daily off-site backups with restore drill",
      "24/7 uptime + malware monitoring",
      "Monthly Core Web Vitals report",
      "Monthly small-edit budget (copy, image, section swaps)",
      "Emergency response SLA",
    ],
    benefits: [
      {
        title: "Site never down",
        desc: "Uptime monitoring + fast response keeps outages under 15 minutes.",
      },
      {
        title: "No plugin explosions",
        desc: "Updates tested on staging before touching production.",
      },
      {
        title: "Real human",
        desc: "You get a Slack / WhatsApp thread with someone who knows the site.",
      },
    ],
    process: [
      {
        step: "Onboarding audit",
        desc: "We inventory plugins, users, backups, hosting, and security.",
      },
      { step: "Baseline fixes", desc: "One-time cleanup of neglected updates and issues." },
      { step: "Monthly cadence", desc: "Updates, backups, monitoring, edits, and report." },
      { step: "Emergency response", desc: "Priority hotline for issues outside monthly scope." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Do you work on non-WordPress sites?",
        a: "Yes — Shopify, Webflow, custom React sites; we tailor the plan to the stack.",
      },
      {
        q: "What if I need major changes?",
        a: "Large changes are scoped as separate projects; monthly covers small edits and upkeep.",
      },
    ],
    related: [
      "wordpress-security",
      "wordpress-malware-removal",
      "wordpress-speed-optimization",
      "wordpress-development",
    ],
    seo: {
      title: "Website Maintenance Services — WordPress & Web | FHDTech",
      description:
        "Monthly website maintenance: updates, backups, monitoring, small edits, and emergency response.",
    },
  },

  // ============================= SEO =============================
  {
    slug: "technical-seo",
    title: "Technical SEO",
    category: "SEO",
    short: "Crawl, index, schema, and Core Web Vitals fixes.",
    hero: {
      kicker: "Technical SEO",
      headline: "Fix the technical debt that's holding back every ranking.",
      sub: "A complete technical SEO overhaul — crawl budget, indexation, schema, internal linking, Core Web Vitals — so the content you already have starts ranking.",
    },
    problems: [
      "Google indexes 20% of your pages and you don't know why.",
      "Search Console is a wall of red 'Discovered - not indexed.'",
      "No schema, no sitemap, no canonicals — competitors eat you alive.",
    ],
    solution:
      "Full technical audit + fix pass: robots + sitemap correctness, canonical strategy, redirects, schema (Organization, Service, FAQ, Article, LocalBusiness, Breadcrumb), internal linking architecture, and Core Web Vitals.",
    features: [
      "Crawl audit (Screaming Frog + Ahrefs)",
      "Indexation cleanup and canonical strategy",
      "301 redirect map for legacy URLs",
      "Structured data / schema implementation",
      "Internal linking + topical clustering",
      "Core Web Vitals fixes",
      "Log-file analysis for crawl-budget waste",
    ],
    benefits: [
      {
        title: "More pages indexed",
        desc: "Fix the technical reasons Google ignores your best content.",
      },
      {
        title: "Rich results in SERPs",
        desc: "Schema drives FAQ, review, and breadcrumb rich snippets.",
      },
      {
        title: "Faster ranking on new content",
        desc: "Correct internal linking means new pages get crawled and ranked faster.",
      },
    ],
    process: [
      { step: "Audit", desc: "Crawl, index, schema, redirect, and CWV audit." },
      { step: "Prioritize", desc: "Rank fixes by traffic impact × effort." },
      {
        step: "Implement",
        desc: "We ship the fixes ourselves in your CMS or coordinate with your dev team.",
      },
      { step: "Monitor", desc: "GSC + rank tracking to confirm gains land." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Do you work with any CMS?",
        a: "Yes — WordPress, Webflow, Shopify, Next.js, TanStack, Framer, custom.",
      },
      {
        q: "How long until I see results?",
        a: "Technical wins often show in 30-90 days as Google re-crawls.",
      },
    ],
    related: [
      "on-page-seo",
      "local-seo",
      "wordpress-speed-optimization",
      "google-business-profile-optimization",
    ],
    seo: {
      title: "Technical SEO Services — Crawl, Schema, Core Web Vitals | FHDTech",
      description:
        "Deep technical SEO — indexation, canonicals, schema, internal linking, and Core Web Vitals fixes for real ranking gains.",
    },
  },
  {
    slug: "on-page-seo",
    title: "On-Page SEO",
    category: "SEO",
    short: "Title, meta, headings, entity, and content optimization.",
    hero: {
      kicker: "On-Page SEO",
      headline: "Squeeze the rankings you're leaving on the table.",
      sub: "We optimize every page — title, meta, headings, entities, internal links, media — for search intent and rich results, without breaking your design or brand voice.",
    },
    problems: [
      "Your pages target the wrong keyword — or none at all.",
      "Titles read like 'Home | Company Name.'",
      "No FAQ schema, no internal linking, no entity coverage.",
    ],
    solution:
      "A per-page optimization pass: keyword mapping, title + meta rewrite, heading structure, entity coverage, internal linking, image alt text, and FAQ / How-To / Article schema.",
    features: [
      "Keyword + intent mapping per page",
      "Title + meta description rewrite",
      "H1-H6 structure and semantic HTML",
      "Entity + topical coverage additions",
      "Internal linking with target anchors",
      "Image alt + filename optimization",
      "FAQ / How-To / Article schema",
    ],
    benefits: [
      {
        title: "Ranks you can see",
        desc: "Most pages move 5-15 positions with a proper on-page pass alone.",
      },
      {
        title: "More qualified clicks",
        desc: "Better titles + descriptions lift CTR without changing ranking.",
      },
      {
        title: "Featured snippet eligible",
        desc: "Structured content wins position 0 for question queries.",
      },
    ],
    process: [
      { step: "Keyword map", desc: "Every URL → target keyword + intent." },
      { step: "On-page rewrite", desc: "Title, meta, headings, and content deltas per page." },
      {
        step: "Schema + internal links",
        desc: "Structured data and topical hub-and-spoke linking.",
      },
      { step: "Track", desc: "Rank tracker + GSC monitored for 90 days post-launch." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Do you write content too?",
        a: "Yes — we can rewrite thin pages or expand them into full topical hubs.",
      },
      {
        q: "How is this different from technical SEO?",
        a: "Technical fixes crawl and index. On-page decides which query you rank for and how well.",
      },
    ],
    related: [
      "technical-seo",
      "local-seo",
      "google-business-profile-optimization",
      "landing-page-development",
    ],
    seo: {
      title: "On-Page SEO Services | FHDTech",
      description:
        "Per-page on-page SEO optimization — titles, meta, headings, entities, internal linking, and schema.",
    },
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    category: "SEO",
    short: "Rank in the map pack for your service area.",
    hero: {
      kicker: "Local SEO",
      headline: "Own the map pack for every city you serve.",
      sub: "Local SEO built for service businesses — GBP optimization, location pages, citations, reviews, and geo signals so you rank in the 3-pack across every service area.",
    },
    problems: [
      "You rank in your home city but nowhere else.",
      "Competitors with worse websites outrank you because they have more reviews.",
      "Your Google Business Profile hasn't been touched in years.",
    ],
    solution:
      "A local SEO program that covers all three ranking factors: relevance (GBP + location pages), distance (service-area strategy), and prominence (reviews + citations + backlinks).",
    features: [
      "Full GBP optimization + weekly management",
      "Location and service-area landing pages",
      "Citation building on top 50 local directories",
      "Review acquisition automation",
      "Local schema (LocalBusiness + Service + FAQ)",
      "Geo-tagged content and imagery",
      "Local link building (chambers, news, sponsorships)",
    ],
    benefits: [
      {
        title: "Map pack visibility",
        desc: "Top 3 for your priority terms across every serviced city.",
      },
      {
        title: "More calls from Google",
        desc: "GBP calls typically 2-3x once optimization + reviews are in place.",
      },
      {
        title: "Compounding growth",
        desc: "Reviews + citations + links keep pushing rank month over month.",
      },
    ],
    process: [
      { step: "Audit + strategy", desc: "GBP, citations, reviews, and competitor gap analysis." },
      { step: "GBP + on-site", desc: "Optimize GBP; build or fix location + service pages." },
      {
        step: "Citations + reviews",
        desc: "Fix inconsistent NAP, build new citations, automate review requests.",
      },
      { step: "Ongoing", desc: "Monthly posting, reporting, and iterative rank improvement." },
    ],
    industries: [
      "HVAC",
      "Roofing",
      "Plumbing",
      "Solar",
      "Cleaning",
      "Law Firms",
      "Medical Clinics",
      "Dentists",
      "Insurance",
      "Home Services",
      "Real Estate",
    ],
    faqs: [
      {
        q: "How long does local SEO take?",
        a: "Meaningful map-pack movement typically shows in 60-120 days.",
      },
      {
        q: "Do you guarantee rankings?",
        a: "No ethical SEO does. We do guarantee the work — and rankings follow.",
      },
    ],
    related: [
      "google-business-profile-optimization",
      "google-business-profile-ranking",
      "google-business-profile-review-automation",
      "technical-seo",
    ],
    seo: {
      title: "Local SEO Services — Rank in the Map Pack | FHDTech",
      description:
        "Local SEO for service businesses — GBP, location pages, citations, reviews, and geo signals.",
    },
  },

  // ============================= GOOGLE BUSINESS PROFILE =============================
  {
    slug: "google-business-profile-optimization",
    title: "Google Business Profile Optimization",
    category: "Google Business Profile",
    short: "Full GBP setup, category + service optimization, and photos.",
    hero: {
      kicker: "GBP Optimization",
      headline: "Turn your Google Business Profile into a top-3 lead machine.",
      sub: "A complete GBP overhaul — categories, services, products, photos, Q&A, and posts — so every search in your area shows you first.",
    },
    problems: [
      "You picked the wrong primary category years ago.",
      "You have 4 photos and none are geo-tagged.",
      "Competitors show up in the 3-pack for terms you should own.",
    ],
    solution:
      "We optimize every ranking factor GBP exposes: primary + secondary categories, service items, product listings, geo-tagged photos, service-area map, Q&A seeding, and posts.",
    features: [
      "Primary + secondary category strategy",
      "Full service and product menu build-out",
      "Geo-tagged photo pack (interior, exterior, team, work)",
      "Service-area or storefront optimization",
      "Q&A seeding with target keywords",
      "Attributes, hours, and messaging setup",
      "Baseline post + review workflow",
    ],
    benefits: [
      {
        title: "Higher local ranking",
        desc: "Categories + service items are the #1 relevance signal you can control.",
      },
      {
        title: "Higher click-through",
        desc: "Photos + attributes make your listing outshine competitors.",
      },
      {
        title: "More direct calls",
        desc: "Optimized profiles typically 2x GBP call volume in 60 days.",
      },
    ],
    process: [
      {
        step: "Audit + benchmark",
        desc: "Current profile scored against top-3 local competitors.",
      },
      { step: "Optimize", desc: "Every field, service, photo, and setting improved." },
      { step: "Seed content", desc: "Q&A, posts, and initial review push." },
      { step: "Handover or manage", desc: "You take it from here, or we manage monthly." },
    ],
    industries: [
      "HVAC",
      "Roofing",
      "Plumbing",
      "Solar",
      "Cleaning",
      "Law Firms",
      "Medical Clinics",
      "Dentists",
      "Insurance",
      "Home Services",
      "Real Estate",
    ],
    faqs: [
      {
        q: "Can I optimize my own GBP?",
        a: "Yes, but categories + service items alone take real research. Most owners leave 40-60% of ranking factors unused.",
      },
      { q: "Do you handle suspended profiles?", a: "Yes — reinstatement projects are common." },
    ],
    related: [
      "google-business-profile-ranking",
      "google-business-profile-review-automation",
      "google-business-profile-auto-posting",
      "local-seo",
    ],
    seo: {
      title: "Google Business Profile Optimization Services | FHDTech",
      description:
        "Full GBP optimization — categories, services, photos, Q&A, and posts for map-pack ranking.",
    },
  },
  {
    slug: "google-business-profile-ranking",
    title: "Google Business Profile Ranking",
    category: "Google Business Profile",
    short: "Push into the map pack with reviews, citations, and geo signals.",
    hero: {
      kicker: "GBP Ranking",
      headline: "A GBP ranking program built on the three factors Google actually uses.",
      sub: "Relevance, distance, prominence — we work all three in parallel with reviews, citations, geo content, and behavior signals to push you into the 3-pack.",
    },
    problems: [
      "You've optimized GBP but still sit at position 6-10.",
      "Competitors have hundreds of reviews and you have 30.",
      "Your citations are inconsistent across the web.",
    ],
    solution:
      "A monthly ranking program: review acquisition, citation cleanup + new builds, geo-tagged posts and photos, GBP Q&A, and behavior-signal work (site engagement, driving directions clicks).",
    features: [
      "Automated review requests (SMS + email + QR)",
      "Citation cleanup and 50+ new builds",
      "Weekly geo-tagged posts and photos",
      "Q&A management",
      "Behavior signal work (site engagement, direction clicks)",
      "Competitor gap tracking",
      "Monthly rank + call report",
    ],
    benefits: [
      {
        title: "Map-pack ranking",
        desc: "Consistent movement into top-3 for priority terms over 60-120 days.",
      },
      {
        title: "More reviews than competitors",
        desc: "Automation turns satisfied customers into 5-star reviews at scale.",
      },
      {
        title: "Trackable growth",
        desc: "Rank + call + direction metrics tracked and reported monthly.",
      },
    ],
    process: [
      { step: "Baseline", desc: "Current rank, review count, and citation state benchmarked." },
      { step: "Setup", desc: "Review automation, citation audit, and content calendar." },
      { step: "Monthly execution", desc: "Posts, reviews, citations, Q&A, and behavior work." },
      { step: "Report + iterate", desc: "Monthly rank report; adjust based on movement." },
    ],
    industries: [
      "HVAC",
      "Roofing",
      "Plumbing",
      "Solar",
      "Cleaning",
      "Law Firms",
      "Medical Clinics",
      "Dentists",
      "Insurance",
      "Home Services",
      "Real Estate",
    ],
    faqs: [
      {
        q: "How many reviews do I need?",
        a: "Depends on competition. Usually you need to be within 20-30% of the top competitor's count and rating.",
      },
      {
        q: "Is this different from GBP optimization?",
        a: "Optimization is a one-time build. Ranking is the monthly program that pushes you up and holds you there.",
      },
    ],
    related: [
      "google-business-profile-optimization",
      "google-business-profile-review-automation",
      "google-business-profile-auto-posting",
      "local-seo",
    ],
    seo: {
      title: "Google Business Profile Ranking Services | FHDTech",
      description:
        "Monthly GBP ranking program — reviews, citations, geo signals, and behavior work for map-pack visibility.",
    },
  },
  {
    slug: "google-business-profile-review-automation",
    title: "Google Business Profile Review Automation",
    category: "Google Business Profile",
    short: "Automated review requests via SMS, email, and QR.",
    hero: {
      kicker: "Review Automation",
      headline: "Every happy customer becomes a Google review — automatically.",
      sub: "Automated review requests via SMS, email, and QR — with a smart funnel that routes unhappy customers to private feedback instead of public 1-stars.",
    },
    problems: [
      "You forget to ask for reviews.",
      "The ones you ask, half never leave one.",
      "Occasional bad reviews from difficult customers tank your average.",
    ],
    solution:
      "A review funnel that triggers on job completion or invoice paid, sends a friendly SMS + email with a review link, and (optionally) routes low-star intent to a private feedback form before it hits Google.",
    features: [
      "Trigger on job completion, invoice paid, or manual send",
      "SMS + email + QR card at point of sale",
      "Smart routing (happy → Google, unhappy → private form)",
      "Multi-location support",
      "Reply-to-review workflow with AI drafts",
      "Weekly review report",
    ],
    benefits: [
      {
        title: "10-20x more reviews",
        desc: "Automation typically 10-20x monthly review count vs. manual asks.",
      },
      {
        title: "Better average rating",
        desc: "Private feedback filter cuts public 1-stars in half or more.",
      },
      { title: "Compounding SEO", desc: "Review velocity is a direct GBP ranking factor." },
    ],
    process: [
      { step: "Trigger design", desc: "Where and when the review request fires." },
      { step: "Funnel build", desc: "SMS, email, QR, and routing set up in your CRM or GHL." },
      { step: "Compliance", desc: "Opt-in language and Google TOS-safe funnel." },
      { step: "Monitor", desc: "Weekly review of send volume, click rate, and star distribution." },
    ],
    industries: [
      "HVAC",
      "Roofing",
      "Plumbing",
      "Solar",
      "Cleaning",
      "Law Firms",
      "Medical Clinics",
      "Dentists",
      "Insurance",
      "Home Services",
      "Real Estate",
    ],
    faqs: [
      {
        q: "Is review gating allowed?",
        a: "Not on Google. Our funnel doesn't gate — it just gives an alternative feedback channel for anyone who wants to complain privately first.",
      },
      {
        q: "Does this work without GHL?",
        a: "Yes — we build it in GHL, HubSpot, ActiveCampaign, or as a standalone Zapier flow.",
      },
    ],
    related: [
      "google-business-profile-optimization",
      "google-business-profile-ranking",
      "google-business-profile-auto-posting",
      "gohighlevel-workflow-automation",
    ],
    seo: {
      title: "Google Review Automation — GBP Review Requests | FHDTech",
      description:
        "Automated Google review requests via SMS, email, and QR. Smart funnel filters unhappy reviews privately.",
    },
  },
  {
    slug: "google-business-profile-auto-posting",
    title: "Google Business Profile Auto Posting",
    category: "Google Business Profile",
    short: "Weekly AI-generated GBP posts, offers, and events.",
    hero: {
      kicker: "GBP Posts",
      headline: "Weekly Google Business Profile posts, on autopilot.",
      sub: "AI-generated, geo-relevant GBP posts — updates, offers, events, and products — published weekly to keep your profile active and boost local ranking.",
    },
    problems: [
      "Your GBP hasn't had a new post in 6 months.",
      "You know posts help ranking but you don't have time.",
      "Manually writing weekly local content is a chore no one owns.",
    ],
    solution:
      "We generate 4 weekly posts using AI trained on your services, seasonal offers, and local landmarks — then schedule and publish them to GBP with optimized images and CTAs.",
    features: [
      "4 posts per week (updates, offers, events, products)",
      "AI generation trained on your brand + services",
      "Geo-relevant seasonal content",
      "Custom branded images (Canva templates)",
      "CTA buttons (Call, Book, Learn More)",
      "Multi-location scheduling",
      "Monthly post-performance report",
    ],
    benefits: [
      { title: "Active profile = higher rank", desc: "Google rewards fresh, consistent posting." },
      { title: "Zero time from you", desc: "Approve in 5 minutes/week, we handle the rest." },
      { title: "Real click-throughs", desc: "Post CTAs drive booked calls and offer redemptions." },
    ],
    process: [
      {
        step: "Brand + offer intake",
        desc: "Services, seasonal offers, and local hooks captured.",
      },
      { step: "Content calendar", desc: "Monthly calendar approved in one 15-min review." },
      { step: "Publish weekly", desc: "4 posts a week, scheduled and published to GBP." },
      { step: "Report", desc: "Views, clicks, and calls from posts reported monthly." },
    ],
    industries: [
      "HVAC",
      "Roofing",
      "Plumbing",
      "Solar",
      "Cleaning",
      "Law Firms",
      "Medical Clinics",
      "Dentists",
      "Insurance",
      "Home Services",
      "Real Estate",
    ],
    faqs: [
      {
        q: "How many locations do you support?",
        a: "1 to 500+. Enterprise plans available for franchise / multi-location brands.",
      },
      {
        q: "Do I have to approve every post?",
        a: "No — monthly calendar approval is standard. Individual approval available if preferred.",
      },
    ],
    related: [
      "google-business-profile-optimization",
      "google-business-profile-ranking",
      "google-business-profile-review-automation",
      "local-seo",
    ],
    seo: {
      title: "Google Business Profile Auto Posting Service | FHDTech",
      description:
        "Weekly AI-generated GBP posts for higher local ranking, more calls, and zero time from you.",
    },
  },

  // ============================= PAID ADS / LEAD GEN =============================
  {
    slug: "paid-ads-management",
    title: "Paid Ads Management",
    category: "Paid Advertising",
    short: "Search, LSA, and Performance Max campaigns that book calls.",
    hero: {
      kicker: "Google Ads",
      headline: "Google Ads that book calls, not just clicks.",
      sub: "Search, Local Services Ads, and Performance Max campaigns built and managed for one metric: cost per booked appointment.",
    },
    problems: [
      "You're spending on Google Ads but can't tell if it's making money.",
      "Every click costs $20 and lands on a homepage.",
      "You've never tried LSA even though it's cheaper for local services.",
    ],
    solution:
      "Full-funnel Google Ads: keyword and negative research, tightly-themed ad groups, RSAs and extensions, LSA setup where eligible, and Performance Max as a scaling layer — all pointed at real landing pages and CRM tracking.",
    features: [
      "Keyword + negative research",
      "Ad group + RSA structure",
      "Local Services Ads setup and management",
      "Performance Max as scaling layer",
      "Conversion tracking (GA4 + Google Ads + offline conversions)",
      "Landing page + CRM integration",
      "Weekly optimization + monthly report",
    ],
    benefits: [
      {
        title: "Lower CPA",
        desc: "Tight structure + better landing pages typically cut CPA 30-50%.",
      },
      { title: "LSA leverage", desc: "Where eligible, LSA can be 40-60% cheaper than Search." },
      { title: "Real reporting", desc: "You see booked calls, not just clicks and impressions." },
    ],
    process: [
      {
        step: "Audit + strategy",
        desc: "Current account audit, competitor gap, and offer positioning.",
      },
      { step: "Build", desc: "Campaigns, ad groups, RSAs, extensions, and tracking." },
      { step: "Launch + optimize", desc: "Daily bid + negative work in the first 30 days." },
      { step: "Scale", desc: "Add Performance Max and LSA as data supports it." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "What's the minimum ad spend?",
        a: "We recommend $1.5k+/mo in ad spend for meaningful data velocity.",
      },
      {
        q: "Do you handle Google Merchant / Shopping?",
        a: "Yes — Shopping and Performance Max for e-commerce included.",
      },
    ],
    related: [
      "landing-page-development",
      "facebook-ads-management",
      "lead-generation",
      "instagram-ads-management",
    ],
    seo: {
      title: "Google Ads Management for Service Businesses | FHDTech",
      description:
        "Google Search, LSA, and Performance Max management. Built for cost per booked appointment, not just clicks.",
    },
  },
  {
    slug: "facebook-ads-management",
    title: "Facebook Ads Management",
    category: "Paid Advertising",
    short: "Meta lead ads, retargeting, and creative that actually books.",
    hero: {
      kicker: "Meta Ads",
      headline: "Facebook + Instagram ads that book real appointments.",
      sub: "Meta ad management with a creative-first approach — direct-response video, lead forms, retargeting, and CRM integration built for calendar bookings, not vanity metrics.",
    },
    problems: [
      "Your last agency ran 'engagement' campaigns and delivered zero calls.",
      "Facebook leads are junk because there's no qualification.",
      "You have no retargeting or lookalike strategy.",
    ],
    solution:
      "Direct-response Meta ads: lead-form + Click-to-Messenger + traffic to landing pages, backed by proper Meta pixel + CAPI tracking, lookalikes, retargeting, and CRM integration for automatic follow-up.",
    features: [
      "Meta pixel + Conversion API server-side tracking",
      "Lead form and Click-to-Messenger ads",
      "Direct-response video and static creative",
      "Retargeting + lookalike audiences",
      "Automatic CRM push with instant SMS follow-up",
      "Weekly optimization + monthly report",
    ],
    benefits: [
      {
        title: "Qualified leads, not junk",
        desc: "Custom lead-form questions + AI qualifier weed out tire-kickers.",
      },
      {
        title: "Lower cost per lead",
        desc: "Proper tracking + retargeting stack drops CPL 30-50%.",
      },
      {
        title: "Speed-to-lead built in",
        desc: "Every lead gets an SMS in 60 seconds of submission.",
      },
    ],
    process: [
      { step: "Offer + creative", desc: "Position the offer and script 3-5 pieces of creative." },
      { step: "Tracking build", desc: "Pixel, CAPI, and CRM push tested and verified." },
      { step: "Launch", desc: "Test budgets across audiences and creative, then scale winners." },
      {
        step: "Scale + iterate",
        desc: "New creative every 2 weeks; audience expansion as data allows.",
      },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "What's the minimum ad spend?",
        a: "We recommend $1.5k+/mo for solid Meta data velocity.",
      },
      {
        q: "Do you produce the creative?",
        a: "We script and edit; we can either use your footage or coordinate a creator.",
      },
    ],
    related: [
      "instagram-ads-management",
      "paid-ads-management",
      "landing-page-development",
      "lead-generation",
    ],
    seo: {
      title: "Facebook Ads Management for Service Businesses | FHDTech",
      description:
        "Meta ad management for real bookings — direct-response creative, CAPI tracking, retargeting, and CRM integration.",
    },
  },
  {
    slug: "instagram-ads-management",
    title: "Instagram Ads Management",
    category: "Paid Advertising",
    short: "Reels-first Meta campaigns for younger, mobile-first audiences.",
    hero: {
      kicker: "Instagram Ads",
      headline: "Instagram ads that convert scroll into bookings.",
      sub: "Reels-first Instagram campaigns tuned for the mobile-native buyer — with the same tracking, retargeting, and CRM integration as our Facebook work.",
    },
    problems: [
      "You post Reels but never boost them strategically.",
      "Static Instagram ads don't stop the scroll anymore.",
      "You have no Instagram-specific retargeting funnel.",
    ],
    solution:
      "Reels-first creative strategy plus static and carousel placements, story ads, and DM-based lead capture — all pointing to the same tracked CRM flow.",
    features: [
      "Reels-first creative + editing",
      "Story and static ad placements",
      "Click-to-DM campaigns with AI-agent handoff",
      "Retargeting from Reel views + profile visits",
      "Lookalike audiences based on high-intent viewers",
      "Full CAPI tracking + CRM integration",
    ],
    benefits: [
      {
        title: "Reach the right buyers",
        desc: "Mobile-first, visual-first audiences convert best on IG placements.",
      },
      {
        title: "DM-first funnel",
        desc: "Click-to-DM + AI agent typically converts 2-3x better than lead forms for consumer services.",
      },
      {
        title: "Compounding organic lift",
        desc: "Boosted Reels lift organic reach for weeks after.",
      },
    ],
    process: [
      { step: "Content audit", desc: "Which of your existing Reels have signal we can amplify." },
      { step: "Creative production", desc: "3-5 new Reels + statics per launch." },
      { step: "Launch + track", desc: "Testing structure across audiences and placements." },
      { step: "Scale + retarget", desc: "Retarget engagement + expand lookalikes." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Do I need to be on camera?",
        a: "No — many campaigns run on b-roll, animation, and UGC-style creator footage.",
      },
      {
        q: "Can this drive appointments for a local service?",
        a: "Yes — service businesses (med spa, dental, real estate) do especially well on IG when creative is strong.",
      },
    ],
    related: [
      "facebook-ads-management",
      "paid-ads-management",
      "landing-page-development",
      "ai-chatbots",
    ],
    seo: {
      title: "Instagram Ads Management for Bookings | FHDTech",
      description:
        "Reels-first Instagram ad management with DM-based lead capture, retargeting, and CRM integration.",
    },
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    category: "Lead Generation",
    short: "Multi-channel lead engine — ads, funnels, follow-up.",
    hero: {
      kicker: "Lead Generation",
      headline: "A predictable lead engine — not another one-off campaign.",
      sub: "We build multi-channel lead generation systems: paid ads, landing pages, qualifier flows, and CRM follow-up — so booked calls become a monthly output you can forecast.",
    },
    problems: [
      "Lead flow is a rollercoaster — feast one month, famine the next.",
      "Ads produce leads but nothing books.",
      "You have no way to forecast next quarter's pipeline.",
    ],
    solution:
      "A full lead-gen stack: Google + Meta ads, landing pages, qualifier form or AI chat, instant follow-up, and CRM handoff — measured on cost per booked appointment, not just cost per lead.",
    features: [
      "Multi-channel paid ads (Google, Meta, IG, LinkedIn as fit)",
      "Custom landing pages and funnels",
      "AI qualifier chat or form",
      "60-second speed-to-lead automation",
      "12-touch nurture for slow-cook leads",
      "Booked-appointment reporting dashboard",
    ],
    benefits: [
      { title: "Predictable pipeline", desc: "Monthly booked-call forecast within +/- 10-15%." },
      {
        title: "Lower cost per booking",
        desc: "Multi-channel + follow-up drops CPBA 30-60% vs. ads alone.",
      },
      { title: "Owned system", desc: "All assets — ads, landers, funnels, sequences — are yours." },
    ],
    process: [
      { step: "Offer + funnel design", desc: "Position the offer and design the end-to-end flow." },
      {
        step: "Build",
        desc: "Ads, landing pages, forms, and CRM automations shipped in parallel.",
      },
      {
        step: "Launch + optimize",
        desc: "First 30 days daily tuning on creative, audience, and follow-up.",
      },
      { step: "Scale", desc: "Add channels and creative as CPBA holds." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "How fast do you launch?",
        a: "Typical build is 2-3 weeks from kickoff to first live campaign.",
      },
      {
        q: "Do you guarantee leads?",
        a: "We guarantee the build and the process. Volume depends on offer, market, and spend.",
      },
    ],
    related: [
      "paid-ads-management",
      "facebook-ads-management",
      "landing-page-development",
      "lead-management",
    ],
    seo: {
      title: "Lead Generation Services for Service Businesses | FHDTech",
      description:
        "Multi-channel lead generation — paid ads, landing pages, AI qualifiers, and CRM follow-up.",
    },
  },
  {
    slug: "lead-management",
    title: "Lead Management",
    category: "Lead Generation",
    short: "Routing, scoring, and pipeline discipline across the team.",
    hero: {
      kicker: "Lead Management",
      headline: "Stop losing leads inside your own team.",
      sub: "We build lead management systems — routing, scoring, SLAs, and dashboards — so every lead gets touched fast and no rep sits on hot pipeline.",
    },
    problems: [
      "Leads go to a shared inbox that nobody owns.",
      "Reps cherry-pick easy leads and neglect the rest.",
      "You have no idea which rep is actually converting.",
    ],
    solution:
      "Round-robin routing with SLAs, lead scoring (source × behavior × form data), rep dashboards, and manager visibility so every lead is owned, touched fast, and moved through pipeline.",
    features: [
      "Round-robin or weighted lead routing",
      "SLA timers with escalation",
      "Lead scoring rules",
      "Rep dashboards + activity tracking",
      "Manager pipeline dashboard",
      "Automated stale-lead re-routing",
    ],
    benefits: [
      { title: "Every lead owned", desc: "No more leads rotting in a shared inbox." },
      {
        title: "Faster first touch",
        desc: "SLA + escalation typically drop time-to-first-contact from hours to under 5 minutes.",
      },
      { title: "Coachable team", desc: "Dashboards give managers real data to run 1:1s on." },
    ],
    process: [
      { step: "Sales-motion mapping", desc: "How leads should flow and who owns each stage." },
      { step: "CRM build", desc: "Routing, scoring, SLAs, and dashboards configured." },
      { step: "Train + roll out", desc: "Reps and managers trained on the new workflow." },
      { step: "Coach", desc: "First 30 days we watch adoption and refine." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Does this need a specific CRM?",
        a: "Works best in GHL or HubSpot; also implementable in Pipedrive, Salesforce, and Close.",
      },
    ],
    related: [
      "gohighlevel-crm-setup",
      "lead-generation",
      "sales-funnel-development",
      "marketing-automation",
    ],
    seo: {
      title: "Lead Management Systems — Routing, Scoring, SLAs | FHDTech",
      description:
        "Lead management setup — round-robin routing, scoring, SLAs, and rep + manager dashboards.",
    },
  },
  {
    slug: "crm-automation",
    title: "CRM Automation",
    category: "Workflow Automation",
    short: "Cross-CRM automations for HubSpot, GHL, Pipedrive, and more.",
    hero: {
      kicker: "CRM Automation",
      headline: "Automate every stage of your pipeline — in the CRM you already own.",
      sub: "We design and build automations inside HubSpot, GoHighLevel, Pipedrive, Salesforce, and Close so your reps focus on selling, not admin.",
    },
    problems: [
      "Reps waste 30% of their day on data entry and follow-up copy-paste.",
      "Deals rot in stages because nobody triggers the next step.",
      "Reports are always a week behind reality.",
    ],
    solution:
      "Automate stage-progression triggers, task creation, follow-up emails/SMS, deal rot alerts, and Slack notifications — inside your existing CRM. No forklift replacement.",
    features: [
      "Stage-based task and email/SMS triggers",
      "Deal rot alerts and re-assignment",
      "Slack / Teams notifications on hot signals",
      "Data enrichment via Clearbit, Apollo, ZoomInfo",
      "Cross-tool sync via Zapier / Make",
      "Automated deal reporting",
    ],
    benefits: [
      { title: "More selling time", desc: "Automations reclaim 5-10 hours/week per rep." },
      { title: "Nothing rots", desc: "Every stale deal is surfaced automatically." },
      {
        title: "Real-time reports",
        desc: "Managers see live pipeline movement, not weekly rollups.",
      },
    ],
    process: [
      { step: "Sales-motion audit", desc: "Map every stage, task, and handoff." },
      { step: "Automation build", desc: "Ship the top 10 highest-leverage automations." },
      { step: "Train + iterate", desc: "Reps trained; automations refined over first 30 days." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      { q: "Which CRMs?", a: "GHL, HubSpot, Pipedrive, Salesforce, Close, Zoho, ActiveCampaign." },
    ],
    related: [
      "gohighlevel-workflow-automation",
      "marketing-automation",
      "lead-management",
      "business-process-automation",
    ],
    seo: {
      title: "CRM Automation Services — HubSpot, GHL, Pipedrive | FHDTech",
      description:
        "Cross-CRM automation for HubSpot, GoHighLevel, Pipedrive, and Salesforce. Task, follow-up, and reporting automations.",
    },
  },
  {
    slug: "sales-funnel-development",
    title: "Sales Funnel Development",
    category: "Booking & Sales Systems",
    short: "End-to-end funnels from ad click to closed deal.",
    hero: {
      kicker: "Sales Funnels",
      headline: "Sales funnels engineered from ad click to closed deal.",
      sub: "We design and build multi-step sales funnels — landing page, VSL, application, qualifier, booking, follow-up, and pipeline — so every lead moves through a proven sequence.",
    },
    problems: [
      "You have leads but no repeatable sales process.",
      "Reps sell differently on every call, so results are unpredictable.",
      "Deals stall because nobody built the right follow-up.",
    ],
    solution:
      "A conversion-optimized funnel: opt-in → VSL / application → automated qualifier → booking → pre-call nurture → sales call → close sequence → onboarding. Built in GHL, ClickFunnels, or React.",
    features: [
      "Landing page + VSL",
      "Multi-step application with logic",
      "Automated qualifier (AI or rule-based)",
      "Calendar with reminders + Stripe deposit",
      "Pre-call nurture (video, case studies, testimonials)",
      "Post-call close sequence",
      "Onboarding automation",
    ],
    benefits: [
      {
        title: "Predictable close rate",
        desc: "Same funnel, same conversion percentage every month.",
      },
      { title: "Higher show rate", desc: "Pre-call nurture + deposits push show rate above 80%." },
      {
        title: "Repeatable sales motion",
        desc: "New reps ramp faster because the process is codified.",
      },
    ],
    process: [
      {
        step: "Offer + funnel design",
        desc: "Position the offer, sketch the funnel, script the VSL.",
      },
      { step: "Build", desc: "All assets — pages, forms, automations — shipped in 2-3 weeks." },
      { step: "Launch", desc: "First traffic through the funnel; daily monitoring." },
      { step: "Optimize", desc: "Ongoing A/B tests on VSL, application, and follow-up." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Do you build in GHL or ClickFunnels?",
        a: "Both. GHL is our default because it includes CRM + automation; ClickFunnels or custom React on request.",
      },
    ],
    related: [
      "landing-page-development",
      "gohighlevel-crm-setup",
      "lead-generation",
      "marketing-automation",
    ],
    seo: {
      title: "Sales Funnel Development Services | FHDTech",
      description:
        "End-to-end sales funnels — landing pages, VSL, applications, qualifiers, booking, and follow-up automation.",
    },
  },
  {
    slug: "appointment-booking",
    title: "Appointment Booking Systems",
    category: "Booking & Sales Systems",
    short: "Calendars, reminders, reschedules, and deposits — set up right.",
    hero: {
      kicker: "Booking Systems",
      headline: "Booking systems that don't make prospects work for the appointment.",
      sub: "Frictionless online booking with calendar sync, SMS + email reminders, rescheduling, cancellation, and optional Stripe deposits — built in GHL, Calendly, Cal.com, or Acuity.",
    },
    problems: [
      "Your Calendly link converts poorly because of timezone friction.",
      "No-show rate is 30%+ because you have no reminder sequence.",
      "Rescheduling requires an email exchange nobody wants.",
    ],
    solution:
      "Booking flow with timezone auto-detect, multi-touch reminders (email + SMS 24hr and 1hr), one-click reschedule, cancellation feedback capture, and optional Stripe deposit for no-show protection.",
    features: [
      "Google + Outlook calendar sync",
      "Round-robin and team calendars",
      "Timezone detection",
      "Multi-touch SMS + email reminders",
      "One-click reschedule and cancel",
      "Stripe deposit for no-show protection",
      "Post-appointment feedback capture",
    ],
    benefits: [
      {
        title: "Higher show rate",
        desc: "Multi-touch reminders + deposits typically 20-30% lift.",
      },
      { title: "Fewer scheduling emails", desc: "Reps stop playing calendar tag entirely." },
      { title: "Better data", desc: "Every no-show and cancel captured for follow-up." },
    ],
    process: [
      { step: "Availability design", desc: "Rules, buffers, and appointment types defined." },
      { step: "Build", desc: "Calendar, forms, reminders, and payment wired." },
      { step: "Test", desc: "20 test bookings across timezones and edge cases." },
      { step: "Launch + monitor", desc: "Show-rate tracked and tuned over first 30 days." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Which booking tool do you recommend?",
        a: "GHL for CRM-integrated flows; Cal.com or Acuity for standalone booking; Calendly if the team already uses it.",
      },
    ],
    related: ["ai-appointment-booking", "gohighlevel-crm-setup", "sales-funnel-development"],
    seo: {
      title: "Appointment Booking Systems | FHDTech",
      description:
        "Frictionless booking systems with calendar sync, reminders, reschedules, and Stripe deposits.",
    },
  },
  {
    slug: "business-process-automation",
    title: "Business Process Automation",
    category: "Workflow Automation",
    short: "Zapier + Make + custom API glue across your entire stack.",
    hero: {
      kicker: "Ops Automation",
      headline: "Automate the ops work that eats your team's week.",
      sub: "We design and build business process automations across Zapier, Make.com, n8n, and custom APIs — from client onboarding to invoicing to internal reporting.",
    },
    problems: [
      "Your ops team spends hours moving data between tools.",
      "Onboarding a new client takes 3 days of manual work.",
      "Reports get built by hand every Monday morning.",
    ],
    solution:
      "We identify the top 5-10 processes eating team time, then design and build the automations to eliminate them — with error handling, logging, and monitoring so they don't silently break.",
    features: [
      "Zapier / Make.com / n8n workflows",
      "Custom API integrations",
      "Client onboarding automation",
      "Invoicing and payment reconciliation",
      "Report generation and distribution",
      "Slack / Teams internal notifications",
      "Error monitoring and alerting",
    ],
    benefits: [
      { title: "20-40 hours/week saved", desc: "Across a typical 5-person ops team." },
      {
        title: "Consistent quality",
        desc: "Automations do the same thing the same way every time.",
      },
      { title: "Scalable ops", desc: "Add clients without adding headcount." },
    ],
    process: [
      { step: "Process audit", desc: "Every recurring workflow scored by hours × automatable." },
      { step: "Design + build", desc: "Top 5 automations shipped in first sprint." },
      { step: "Monitor + iterate", desc: "Error alerting; monthly reviews add new automations." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Zapier or Make?",
        a: "Depends on complexity + cost. Make is cheaper at scale; Zapier is faster to build simple flows.",
      },
    ],
    related: [
      "crm-automation",
      "marketing-automation",
      "ai-automation",
      "gohighlevel-workflow-automation",
    ],
    seo: {
      title: "Business Process Automation Services | FHDTech",
      description:
        "Business process automation across Zapier, Make, n8n, and custom APIs. Onboarding, invoicing, reporting, and more.",
    },
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    category: "Workflow Automation",
    short: "Nurture sequences, segmentation, and lifecycle marketing.",
    hero: {
      kicker: "Marketing Automation",
      headline: "Marketing that runs itself — and outperforms your best campaigns.",
      sub: "We build lifecycle marketing automations: welcome sequences, lead nurture, cart abandonment, reactivation, win-back, and referral — across email, SMS, and WhatsApp.",
    },
    problems: [
      "You collect emails but never send anything to them.",
      "Cart abandoners don't get a follow-up.",
      "Cold leads never get reactivated.",
    ],
    solution:
      "A full lifecycle marketing stack: segmented nurture based on source + behavior + purchase history, cart abandonment, win-back, referral requests, and reactivation — with copy that sounds like your brand, not spam.",
    features: [
      "Welcome + nurture sequences",
      "Behavioral segmentation",
      "Cart abandonment (Woo / Shopify)",
      "Win-back and reactivation",
      "Referral request workflows",
      "Multi-channel (email + SMS + WhatsApp)",
      "A/B testing and monthly reporting",
    ],
    benefits: [
      {
        title: "More revenue per lead",
        desc: "Nurtured leads typically 2-3x conversion of un-nurtured.",
      },
      {
        title: "Recover 15-30% of abandons",
        desc: "Cart abandonment sequences pay for the whole engagement.",
      },
      {
        title: "Compounding list value",
        desc: "Reactivation and referral flows keep old contacts productive.",
      },
    ],
    process: [
      { step: "Lifecycle map", desc: "Every stage from subscriber to advocate defined." },
      { step: "Copy + design", desc: "Sequences written and designed for each stage." },
      { step: "Build + integrate", desc: "Automations shipped in your ESP + CRM + store." },
      { step: "Optimize", desc: "Monthly reporting + A/B testing." },
    ],
    industries: ALL_INDUSTRIES,
    faqs: [
      {
        q: "Which platforms?",
        a: "GHL, HubSpot, ActiveCampaign, Klaviyo, Mailchimp, ConvertKit, Customer.io.",
      },
    ],
    related: [
      "crm-automation",
      "gohighlevel-workflow-automation",
      "lead-generation",
      "sales-funnel-development",
    ],
    seo: {
      title: "Marketing Automation Services | FHDTech",
      description:
        "Lifecycle marketing automation — welcome, nurture, cart abandonment, win-back, and referral flows across email + SMS.",
    },
  },
];

const SERVICE_ALIASES: Record<string, string> = {
  "real-estate-crm-setup": "real-estate-crm",
  "hvac-crm-setup": "hvac-crm",
  "wordpress-website-development": "wordpress-development",
  "appointment-booking-systems": "appointment-booking",
  "google-ads-management": "paid-ads-management",
};

export const SERVICE_MAP = {
  ...Object.fromEntries(SERVICES.map((s) => [s.slug, s])),
  ...Object.fromEntries(
    Object.entries(SERVICE_ALIASES).map(([alias, slug]) => [
      alias,
      SERVICES.find((s) => s.slug === slug),
    ]),
  ),
} as Record<string, Service | undefined>;

export const SERVICE_CATEGORIES: {
  category: ServiceCategory;
  services: Service[];
}[] = (Array.from(new Set(SERVICES.map((s) => s.category))) as ServiceCategory[]).map(
  (category) => ({
    category,
    services: SERVICES.filter((s) => s.category === category),
  }),
);
