import { useState } from "react";
import {
  Cpu,
  Sparkles,
  ArrowRight,
  Zap,
  Target,
  HelpCircle,
  Star,
  ShieldCheck,
  MessageSquare,
  PlayCircle,
  Clock,
  Database,
  CheckCircle,
} from "lucide-react";

export default function AIAutomation() {
  const [calculatorLeads, setCalculatorLeads] = useState(150);
  const [calculatorRepHours, setCalculatorRepHours] = useState(40);
  const [activeTab, setActiveTab] = useState("voice");

  // Calculations
  const repHourlyRate = 25;
  const manualFollowUpMinutes = 15;
  const timeSavedHours = Math.round(
    (calculatorLeads * manualFollowUpMinutes) / 60 + calculatorRepHours,
  );
  const monthlySavings = timeSavedHours * repHourlyRate;

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 text-white pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-6">
            <Cpu className="size-3.5" /> Conversational AI agency
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
            Custom AI Automations &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Autonomous Agent Workflows
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
            Stop wasting hours on manual copy-pasting and missed calls. We engineer custom voice AI
            agents, GPT-4 assistants, and Make/Zapier database integrations to run your business
            24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-8 py-4 font-bold text-white shadow-xl shadow-indigo-600/20 transition-transform hover:-translate-y-0.5"
            >
              Book Free AI Strategy Call <ArrowRight className="size-5" />
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-slate-200 hover:bg-white/10 transition-colors"
            >
              Calculate AI Savings
            </a>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED / PERFORMANCE STATS */}
      <section className="bg-slate-900 border-y border-white/10 py-10 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-indigo-400">80%</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Admin Tasks Automated
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white">&lt; 2s</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              AI Response Latency
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white">40+ Hours</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Weekly Time Saved
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400">Zero</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Manual Data Entry
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS CHALLENGES */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 flex justify-center items-center gap-1">
              <Target className="size-4" /> Operations Pain
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-2">
              The Cost of Manual Workflows
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Late-Night Lead Loss",
                d: "Customers query your services after hours, but your team is offline. Leads drop off and call competitors.",
              },
              {
                t: "Copy-Paste Burnout",
                d: "Reps spend hours copying data from ad platforms into CRMs, Stripe, and spreadsheets.",
              },
              {
                t: "High Staff Costs",
                d: "Hiring humans to handle repetitive qualifying, intake, and booking forms costs thousands a month.",
              },
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700 mb-4">
                  Symptom 0{i + 1}
                </span>
                <h4 className="font-display text-base font-bold text-slate-900 mb-1">{p.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SAVINGS CALCULATOR */}
      <section id="calculator" className="py-20 px-6 bg-slate-900 text-white relative">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
              ROI Calculator
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">
              Calculate Your Automations Savings
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 bg-slate-950 p-8 rounded-3xl border border-white/5">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Monthly Incoming Leads: {calculatorLeads}
                </label>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={calculatorLeads}
                  onChange={(e) => setCalculatorLeads(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Weekly Staff Manual Hours: {calculatorRepHours}
                </label>
                <input
                  type="range"
                  min="10"
                  max="120"
                  step="5"
                  value={calculatorRepHours}
                  onChange={(e) => setCalculatorRepHours(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900 border border-white/10 text-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                  Total Monthly Time Saved
                </span>
                <div className="font-display text-4xl sm:text-5xl font-black text-white mt-2">
                  {timeSavedHours} Hours
                </div>
              </div>
              <div className="my-6 border-t border-white/10 pt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Estimated Monthly Savings
                </span>
                <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400 mt-1">
                  ${monthlySavings.toLocaleString()}
                </div>
              </div>
              <a
                href="/book-consultation"
                className="w-full py-3 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold rounded-xl text-sm transition-transform hover:-translate-y-0.5"
              >
                Build My AI Workflows
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS & PILLARS */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Implementation
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Our AI Automation Framework
            </h2>
          </div>
          <div className="grid gap-6">
            {[
              {
                icon: Cpu,
                t: "Conversational Voice AI Agents",
                d: "Interactive voice systems built on Vapi or Retell AI. Speaks to inbound calls in less than 2 seconds, qualifies leads, and books them to calendars.",
              },
              {
                icon: MessageSquare,
                t: "Autonomous AI Chatbots",
                d: "Scrapes your services catalog, policies, and pricing to answer user queries on Web Chat, WhatsApp, or Facebook Messenger.",
              },
              {
                icon: Database,
                t: "Data Sync Pipelines (Make/Zapier)",
                d: "Eliminate manual data entries. Sync forms directly into GoHighLevel, Stripe, Slack, and Google Sheets instantly.",
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="flex gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 shrink-0">
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

      {/* 6. AI CAPABILITIES CHECKLIST */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Capabilities
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Autonomous Systems Components
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Twilio Outbound/Inbound Phone Routing Setup",
              "Vapi / Retell AI Agent Training Prompts",
              "Structured Database Integrations via Webhooks",
              "GPT-4 System Custom Instruction Engineering",
              "Slack & Discord Automated Alert Webhooks",
              "Lead Qualifying Score Automation",
              "SMS / Email Booking Reminder Flow Triggers",
              "Stripe Invoicing & Payment Webhooks Setup",
              "Document Parsing with AI OCR Integrations",
            ].map((f, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3"
              >
                <CheckCircle className="size-5 text-indigo-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE TABS DEEP-DIVE */}
      <section className="py-20 px-6 bg-slate-950 text-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
              Agent Details
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">
              Inside the AI Configurations
            </h2>
          </div>
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {["voice", "chatbots", "integrations"].map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                  activeTab === t
                    ? "bg-indigo-600 text-white"
                    : "bg-white/5 text-slate-400 hover:bg-white/10"
                }`}
              >
                {t === "voice" ? "Voice AI" : t === "chatbots" ? "AI Chatbot" : "Make Pipeline"}
              </button>
            ))}
          </div>
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 min-h-[220px] flex flex-col justify-between">
            {activeTab === "voice" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Vapi / Retell Answering Agent
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  We program conversational latency down to &lt;1.8 seconds. The voice agent is fed
                  with your services guide and calendar APIs to book client appointments live over
                  Twilio phones.
                </p>
                <div className="flex items-center gap-2 text-xs text-indigo-400 font-bold">
                  <Clock className="size-4" /> &lt;2s Conversation Latency
                </div>
              </div>
            )}
            {activeTab === "chatbots" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  RAG-Powered Chatbot
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Retrieval-Augmented Generation (RAG) lets the chatbot scan your business terms
                  sheet, FAQs, and pricing models to address complex customer questions without
                  hallucinating.
                </p>
                <div className="flex items-center gap-2 text-xs text-indigo-400 font-bold">
                  <MessageSquare className="size-4" /> Multi-Channel Sync (Web, WhatsApp)
                </div>
              </div>
            )}
            {activeTab === "integrations" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Autonomous Make/Zapier Sprints
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  We wire clean triggers: when a lead enters the pipeline, webhooks query the
                  database, parse contact coordinates, update Stripe invoices, and ping sales reps
                  on Slack.
                </p>
                <div className="flex items-center gap-2 text-xs text-indigo-400 font-bold">
                  <Database className="size-4" /> Zero Manual Syncs Required
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. BEFORE vs. AFTER OPERATIONS */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Workflow Delta
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Manual vs. Automated Workflows
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-8 rounded-3xl bg-red-100/30 border border-red-200/50">
              <h3 className="font-display text-lg font-bold text-red-800 mb-4">Manual Setup</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>❌ Leads wait hours for reps to get back to office.</li>
                <li>❌ Staff manually types invoices into Stripe and QuickBooks.</li>
                <li>❌ No follow-up if lead does not answer first call.</li>
                <li>❌ Double bookings due to calendar syncing lags.</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-emerald-100/30 border border-emerald-200/50">
              <h3 className="font-display text-lg font-bold text-emerald-800 mb-4">
                Automated AI Setup
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>✅ AI responds and qualifies lead in under 60 seconds, 24/7.</li>
                <li>✅ Data synced instantly via API webhooks.</li>
                <li>✅ 30-day automated SMS nurture sequences trigger.</li>
                <li>✅ Live round-robin calendar bookings with confirmation rules.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. AI SPRINT ROADMAP */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Roadmap
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Our 14-Day AI Deployment Timeline
            </h2>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-100">
            {[
              {
                d: "Day 1 - 3",
                t: "Workflow Mapping & Architecture",
                desc: "Audit manual operations bottlenecks and map webhook connections.",
              },
              {
                d: "Day 4 - 7",
                t: "AI Model Fine-Tuning & Prompting",
                desc: "Custom instruction prompts written for Vapi/Retell AI and GPT-4 to guarantee hallucination-free replies.",
              },
              {
                d: "Day 8 - 10",
                t: "Make/Zapier Integrations Build",
                desc: "Build webhook routing layers linking CRM databases, Stripe, and Slack.",
              },
              {
                d: "Day 11 - 12",
                t: "Live Sandbox Testing & Refinement",
                desc: "Run call and database sync simulation testing to trace errors.",
              },
              {
                d: "Day 13 - 14",
                t: "Production Cutover & Training",
                desc: "Handover keys, deploy live AI numbers, and zoom-train your staff.",
              },
            ].map((step, i) => (
              <div key={i} className="relative pl-10">
                <span className="absolute left-1.5 top-1.5 size-5 rounded-full bg-indigo-600 border-4 border-white shadow" />
                <span className="inline-flex rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-bold text-indigo-600 mb-2">
                  {step.d}
                </span>
                <h4 className="font-display text-base font-bold text-slate-900">{step.t}</h4>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SUCCESS STORY */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Case Study
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              AI Voice Agent Success
            </h2>
          </div>
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <p className="text-slate-600 italic text-base leading-relaxed">
              "We deployed an inbound voice agent to handle HVAC emergency calls overnight. The AI
              qualified the location, confirmed the diagnostic fee, and booked the appointment in
              under two minutes. Our late-night booking rate rose from 20% to 68%!"
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
              <div>
                <div className="font-display text-sm font-bold text-slate-900">David Kelly</div>
                <div className="text-xs text-slate-400">
                  Operations Manager, Kelly Heating &amp; Cooling
                </div>
              </div>
              <div className="font-display text-xl font-bold text-indigo-600">68% Booking Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. AI TECH STACK */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            Integrations
          </span>
          <h2 className="font-display text-2xl font-bold text-slate-900 mt-1 mb-10">
            We Deploy on Leading Platforms
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-500">
            {[
              "OpenAI GPT-4",
              "Claude 3.5 Sonnet",
              "Vapi AI",
              "Retell AI",
              "Make.com",
              "Zapier",
              "Pinecone DB",
              "GoHighLevel API",
            ].map((tech) => (
              <span
                key={tech}
                className="px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 12. AI FAQS */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
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
                q: "Do the voice agents sound human?",
                a: "Yes. Using advanced text-to-speech engines like ElevenLabs, our voice agents replicate natural breathing, pauses, and speech patterns, keeping callers engaged.",
              },
              {
                q: "How do you prevent the AI from hallucinating?",
                a: "We hardcode system constraints and feed the models structured company guidelines (RAG databases). If a customer asks a question outside this schema, the agent is trained to route the call to a human rep.",
              },
              {
                q: "Is the platform usage billing included?",
                a: "No. You pay directly for OpenAI, Vapi, or Make.com API usage costs. These costs are minimal (average call costs ~$0.15/minute compared to $2.00/minute for humans).",
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

      {/* 13. SLA SHIELD GUARANTEE */}
      <section className="py-16 px-6 bg-slate-950 text-white text-center">
        <ShieldCheck className="size-12 text-indigo-400 mx-auto mb-4 animate-pulse" />
        <h2 className="font-display text-2xl sm:text-3xl font-bold">
          60-Day Automated SLA Guarantee
        </h2>
        <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
          If any API update breaks your Make modules, or custom prompts require tuning within the
          first 60 days post-launch, we resolve it within 24 hours at zero cost.
        </p>
      </section>

      {/* 14. FAHID ALI'S AI LETTER */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-3xl border border-slate-100 bg-slate-50/50 rounded-3xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="grid size-12 place-items-center rounded-full bg-brand-primary text-white font-bold">
              FA
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-slate-900">
                A Message From Fahid Ali
              </h4>
              <p className="text-xs text-slate-400">AI Architect</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed italic">
            "AI is only as good as the system integrations. A chatbot that cannot write to your CRM
            database is just a toy. At FHDTech, we focus strictly on building workflows that solve
            problems — booking appointments, routing calls, and saving hours of admin labor."
          </p>
        </div>
      </section>

      {/* 15. INDUSTRIES SERVED */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="font-display text-lg font-bold text-slate-950 mb-6">
            Active Industry Implementations
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Real Estate Listings",
              "HVAC Dispatching",
              "Law Firm Lead Intake",
              "SaaS Customer Support",
              "E-commerce Abandoned Cart Recoveries",
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

      {/* 16. FINAL AI CTA */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <h2 className="font-display text-3xl font-bold">
          Ready to Put Your Operations on Autopilot?
        </h2>
        <p className="text-slate-300 text-sm mt-3 max-w-md mx-auto mb-8">
          Schedule a free 30-minute AI strategy call. We will diagram your custom automated pipeline
          live.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/book-consultation"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-8 py-4 font-bold text-white shadow-xl shadow-indigo-600/20 transition-transform hover:-translate-y-0.5"
          >
            Start My AI Sprints
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-slate-200 hover:bg-white/10"
          >
            Request Custom Build Proposal
          </a>
        </div>
      </section>
    </div>
  );
}
