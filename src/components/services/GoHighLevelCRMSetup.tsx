import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Target,
  Workflow,
  Rocket,
  Database,
  ShieldCheck,
  BarChart3,
  Users,
  Clock,
  Calendar,
  AlertTriangle,
  HelpCircle,
  MessageSquare,
  PlayCircle,
  RefreshCw,
  Layers,
} from "lucide-react";

export default function GoHighLevelCRMSetup() {
  const [calculatorLeads, setCalculatorLeads] = useState(100);
  const [calculatorCloseRate, setCalculatorCloseRate] = useState(20);
  const [activeFeatureTab, setActiveFeatureTab] = useState("pipelines");

  // ROI Calculator Calculations
  const averageLeadValue = 350;
  const typicalMissedLeads = 0.62; // 62% leads missed without automation
  const leadLossValue = Math.round(
    calculatorLeads * typicalMissedLeads * (calculatorCloseRate / 100) * averageLeadValue,
  );
  const savingsWithFHD = Math.round(leadLossValue * 0.8); // recover 80% of missed leads

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent mb-6">
            <Sparkles className="size-3.5" /> Premium CRM Implementation
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
            GoHighLevel CRM Setup <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-emerald-400">
              Engineered to Drive Sales
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
            Stop losing leads to slow follow-ups. We build a high-performance GoHighLevel CRM
            database with automated workflows, pipelines, and calendars in just 14 days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-8 py-4 font-bold text-white shadow-xl shadow-brand-accent/20 hover:bg-brand-accent/90 transition-transform hover:-translate-y-0.5"
            >
              Get Your Custom Blueprint <ArrowRight className="size-5" />
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-slate-200 hover:bg-white/10 transition-colors"
            >
              Calculate Missed Revenue
            </a>
          </div>
        </div>
      </section>

      {/* 2. TRUST / METRIC GRID */}
      <section className="bg-slate-900 border-y border-white/10 py-10 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-brand-accent">
              14 Days
            </div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Delivery Time
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white">99%</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              A2P Deliverability
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white">100%</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Custom Snapshots
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400">
              30 Days
            </div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Post-Launch Support
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM / PAIN POINTS */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 flex justify-center items-center gap-1">
              <AlertTriangle className="size-4" /> The Cost of Chaos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
              Are you bleeding leads every single day?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                t: "Scattered Databases",
                d: "Leads sit in Facebook Ads manager, email inbox, sticky notes, and SMS. Nothing syncs, causing team confusion.",
              },
              {
                t: "Slow Speed-to-Lead",
                d: "If it takes you over 5 minutes to reply to an inquiry, the chance of conversion drops by 391%. Most staff call back next day.",
              },
              {
                t: "Twilio A2P Restrictions",
                d: "Carrier compliance blocks unregistered phone numbers. Your SMS campaigns are silently flagged and deleted.",
              },
              {
                t: "No Tracking / Reports",
                d: "You have no idea which marketing campaign generated the customer or which sales rep is underperforming.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-red-100 text-red-600 text-sm font-bold">
                  0{i + 1}
                </span>
                <div>
                  <h4 className="font-display text-base font-bold text-slate-900 mb-1">{p.t}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE REVENUE LOSS CALCULATOR */}
      <section id="calculator" className="py-20 px-6 bg-slate-900 text-white relative">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Calculator
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">Leakage Estimator</h2>
            <p className="text-slate-400 text-sm mt-2">
              See how much revenue is slipping away from unregistered and slow follow-ups.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 bg-slate-950 p-8 rounded-3xl border border-white/5 shadow-2xl">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Monthly Leads: {calculatorLeads}
                </label>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={calculatorLeads}
                  onChange={(e) => setCalculatorLeads(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Current Conversion Rate: {calculatorCloseRate}%
                </label>
                <input
                  type="range"
                  min="5"
                  max="80"
                  step="5"
                  value={calculatorCloseRate}
                  onChange={(e) => setCalculatorCloseRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400 leading-relaxed">
                *Calculations based on average CRM lead loss rate of 62% and a baseline contract
                value of ${averageLeadValue} per lead.
              </div>
            </div>
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-white/5 text-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                  Estimated Monthly Lead Waste
                </span>
                <div className="font-display text-4xl sm:text-5xl font-black text-red-500 mt-2">
                  ${leadLossValue.toLocaleString()}
                </div>
              </div>
              <div className="my-6 border-t border-white/10 pt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Recoverable Revenue (FHDTech setup)
                </span>
                <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400 mt-1">
                  ${savingsWithFHD.toLocaleString()}
                </div>
              </div>
              <a
                href="/book-consultation"
                className="w-full py-3.5 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold rounded-xl text-sm transition-transform hover:-translate-y-0.5 shadow-xl shadow-brand-accent/20"
              >
                Fix My Lead Pipeline Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS & PILLARS */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Our Solution
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              The FHDTech CRM Blueprint
            </h2>
          </div>
          <div className="grid gap-6">
            {[
              {
                icon: Database,
                t: "Unified Opportunity Pipelines",
                d: "One inbox for SMS, email, Facebook, Instagram, Google, and WhatsApp. Reps manage conversations from a single dashboard.",
              },
              {
                icon: ShieldCheck,
                t: "Strict Compliance Hardening",
                d: "Verify domain MX, DKIM, SPF, and DMARC settings. Rebuild and register Twilio sub-accounts to bypass carrier filters.",
              },
              {
                icon: BarChart3,
                t: "Visual Revenue Dashboards",
                d: "Real-time metrics tracking opportunity values, ROI calculations, and sales reps' conversion cycles.",
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="flex gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-accent/10 text-brand-accent">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{p.t}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{p.d}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. WHAT'S INCLUDED - FEATURES GRID */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Features
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Enterprise GHL Build Components
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Sales Pipeline Architecture (up to 5 pipelines)",
              "Custom Fields & Dynamic Contact Tagging",
              "Multi-step Lead Capture Forms & Questionnaires",
              "Team Calendars with Round-Robin Allocation",
              "Conversations Inbox (SMS, Email, Social)",
              "Automated Opportunity Pipeline Movements",
              "Twilio, Mailgun, Stripe & API Integrations",
              "Role-based CRM User Permission Sets",
              "Loom Training SOP Libraries for Sales Reps",
            ].map((f, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3"
              >
                <CheckCircle2 className="size-5 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE FEATURE DEEP-DIVE TABS */}
      <section className="py-20 px-6 bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              System Dashboard
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">
              Interactive Blueprint View
            </h2>
          </div>
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {["pipelines", "compliance", "automation"].map((t) => (
              <button
                key={t}
                onClick={() => setActiveFeatureTab(t)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                  activeFeatureTab === t
                    ? "bg-brand-accent text-white"
                    : "bg-white/5 text-slate-400 hover:bg-white/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 min-h-[220px] flex flex-col justify-between">
            {activeFeatureTab === "pipelines" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Deal Flow Pipeline Tracking
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Custom columns mapped to represent: New Lead, Contacted, Booking Requested,
                  Booking Scheduled, Proposal Sent, and Deal Won. If a deal sits in one stage for
                  too long, triggers flag the rep.
                </p>
                <div className="flex items-center gap-2 text-xs text-brand-accent font-bold">
                  <Layers className="size-4" /> 5 Custom Pipelines Configured
                </div>
              </div>
            )}
            {activeFeatureTab === "compliance" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  A2P 10DLC Carrier Shield
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  We submit legal registration documentation directly inside Twilio and GHL trust
                  portals, set up custom STOP/HELP conversational blocks, and guarantee
                  deliverability rates of over 95%.
                </p>
                <div className="flex items-center gap-2 text-xs text-brand-accent font-bold">
                  <ShieldCheck className="size-4" /> 10DLC Compliance Approval Guaranteed
                </div>
              </div>
            )}
            {activeFeatureTab === "automation" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Speed-to-Lead Workflows
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Immediate SMS notifications sent in less than 45 seconds. Automated calendars
                  check rep availability, allocate bookings, and run confirmation templates to
                  reduce no-shows.
                </p>
                <div className="flex items-center gap-2 text-xs text-brand-accent font-bold">
                  <Zap className="size-4" /> Real-time SMS & Calendar Triggers
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE TIMELINE ROADMAP */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Implementation
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Our 14-Day Delivery Timeline
            </h2>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-100">
            {[
              {
                d: "Day 1 - 3",
                t: "Domain, DNS & LC Email Setup",
                desc: "CNAME routing, domain verification, DKIM/SPF setup for optimal email deliverability.",
              },
              {
                d: "Day 4 - 7",
                t: "Pipeline & Field Customizations",
                desc: "Snapshot deployment and custom database layouts mapping contact details.",
              },
              {
                d: "Day 8 - 10",
                t: "A2P SMS Registration",
                desc: "Twilio/LeadConnector compliance registration forms submitted.",
              },
              {
                d: "Day 11 - 12",
                t: "Calendar & Payment Integrations",
                desc: "Sync Google/Outlook calendars, Stripe setups, and client schedulers.",
              },
              {
                d: "Day 13 - 14",
                t: "Handover & Live Training",
                desc: "1-hour recorded staff training walkthrough and SOP dashboard delivery.",
              },
            ].map((step, i) => (
              <div key={i} className="relative pl-10">
                <span className="absolute left-1.5 top-1.5 size-5 rounded-full bg-brand-accent border-4 border-white shadow" />
                <span className="inline-flex rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-bold text-brand-accent mb-2">
                  {step.d}
                </span>
                <h4 className="font-display text-base font-bold text-slate-900">{step.t}</h4>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BEFORE vs. AFTER MATRIX */}
      <section className="py-20 px-6 bg-slate-900 text-white border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Operational Efficiency
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">
              Before vs. After FHDTech
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-8 rounded-3xl bg-red-950/20 border border-red-500/20">
              <h3 className="font-display text-lg font-bold text-red-400 mb-4">
                Without Custom GHL CRM
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>❌ Leads scattered across 4 different platforms.</li>
                <li>❌ Average speed-to-lead response: 2 hours.</li>
                <li>❌ Missed calls go unanswered, losing leads to competitors.</li>
                <li>❌ Sales team manually updates status columns.</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/20">
              <h3 className="font-display text-lg font-bold text-emerald-400 mb-4">
                With FHDtech GHL Setup
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>✅ All channels consolidated into 1 conversations dashboard.</li>
                <li>✅ Response triggered inside 45 seconds.</li>
                <li>✅ Missed calls trigger missed-call text-back scripts.</li>
                <li>✅ Opportunities automatically move based on user clicks.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CASE STUDIES / TESTIMONIALS */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Success Stories
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Real Results Delivered
            </h2>
          </div>
          <div className="bg-white rounded-3xl border border-slate-100 p-8 md:p-10 shadow-sm relative">
            <p className="text-slate-600 italic text-base md:text-lg leading-relaxed">
              "Fahid Ali redesigned our CRM workflows in less than two weeks. We converted from
              active HubSpot spreadsheets to GoHighLevel. Our speed-to-lead dropped to under 1
              minute, and our sales team closed $14,000 more in contract values within the first
              month."
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
              <div>
                <div className="font-display text-sm font-bold text-slate-900">John Miller</div>
                <div className="text-xs text-slate-400">Founder, Miller Home Services</div>
              </div>
              <div className="font-display text-2xl font-bold text-brand-accent">
                +40% Booking Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. INTEGRATIONS STACK */}
      <section className="py-16 px-6 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            Integrations
          </span>
          <h2 className="font-display text-2xl font-bold text-slate-900 mt-1 mb-10">
            Connects With Your Existing Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-slate-500">
            {[
              "Zapier",
              "Make",
              "Twilio",
              "Stripe",
              "Gmail",
              "Outlook",
              "WordPress",
              "Facebook Ads",
              "Google Sheets",
            ].map((stack) => (
              <span
                key={stack}
                className="px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQS */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              FAQ
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Do I need to purchase a GoHighLevel subscription?",
                a: "Yes, you need an active GoHighLevel subscription. Starter ($97/mo) or Unlimited ($297/mo) works perfectly depending on your staff size.",
              },
              {
                q: "Will I lose my existing CRM contact history?",
                a: "No. We export contacts, custom fields, and pipelines from systems like HubSpot or Pipedrive, and remap them cleanly during migration.",
              },
              {
                q: "Is Twilio SMS carrier registration included?",
                a: "Yes. Twilio A2P 10DLC brand and campaign submissions are handled entirely by FHDTech to ensure maximum SMS deliverability.",
              },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100">
                <h4 className="font-display text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="size-4 text-brand-accent shrink-0" /> {faq.q}
                </h4>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. SLA GUARANTEE */}
      <section className="py-16 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <ShieldCheck className="size-12 text-brand-accent mx-auto mb-4" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Our 60-Day Database SLA Guarantee
          </h2>
          <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            If any automation breaks, a pipeline fails, or carrier registration is flagged within
            the first 60 days post-launch, we fix it in less than 24 hours at zero cost.
          </p>
        </div>
      </section>

      {/* 14. PERSONAL LETTER FROM FOUNDER */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-3xl border border-slate-100 bg-slate-50/50 rounded-3xl p-8 md:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="grid size-12 place-items-center rounded-full bg-brand-primary text-white font-bold">
              FA
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-slate-900">
                A Message From Fahid Ali
              </h4>
              <p className="text-xs text-slate-400">Founder & CRM Architect</p>
            </div>
          </div>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              "Most agencies sell Snapshots that they never support. At FHDTech, we understand that
              every service business has unique workflows. We don't just dump a snapshot and run."
            </p>
            <p>
              "We take the time to interview your sales team, clean your historical data, configure
              carrier compliance profiles, and stay with you for 30 days after launch to make sure
              the CRM is working for you."
            </p>
          </div>
        </div>
      </section>

      {/* 15. INDUSTRIES SERVED GRID */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Industries
            </span>
            <h2 className="font-display text-2xl font-bold text-slate-900 mt-1">
              Built For Service Verticals
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "HVAC",
              "Roofing",
              "Plumbing",
              "Law Firms",
              "Medical Clinics",
              "Real Estate",
              "Insurance",
              "Home Services",
            ].map((ind) => (
              <span
                key={ind}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-semibold"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 16. FINAL CTA & BOOKING FORM */}
      <section className="py-20 px-6 bg-slate-900 text-white relative">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold text-white">
            Ready to Claim Your 14-Day Setup?
          </h2>
          <p className="text-slate-300 text-sm mt-3 max-w-md mx-auto mb-8">
            Schedule a free 30-minute database consultation. We will draft your pipeline design
            blueprint live on the call.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-8 py-4 font-bold text-white shadow-xl shadow-brand-accent/20 hover:bg-brand-accent/90 transition-transform hover:-translate-y-0.5"
            >
              Book My Free CRM Consultation
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-slate-200 hover:bg-white/10"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
