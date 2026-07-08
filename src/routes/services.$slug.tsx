import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Zap,
  Target,
  Workflow,
  Rocket,
  ShieldCheck,
  Clock,
  Database,
  TrendingUp,
  AlertTriangle,
  HelpCircle,
  MessageSquare,
  Star,
  Layers,
  Code2,
} from "lucide-react";
import { SERVICE_MAP, SERVICES, type Service } from "@/lib/services";
import { BUSINESS } from "@/lib/business";
import { FaqAccordion } from "@/components/site/FaqAccordion";

// Custom premium service page overrides
import GoHighLevelCRMSetup from "@/components/services/GoHighLevelCRMSetup";
import WordPressMalwareRemoval from "@/components/services/WordPressMalwareRemoval";
import AIAutomation from "@/components/services/AIAutomation";
import GoogleBusinessProfile from "@/components/services/GoogleBusinessProfile";
import PaidAdsManagement from "@/components/services/PaidAdsManagement";
import WordPressDevelopment from "@/components/services/WordPressDevelopment";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICE_MAP[params.slug];
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found — FHDTech" }, { name: "robots", content: "noindex" }],
      };
    }
    const s = loaderData.service;
    const absolutePath = `https://fhdtech.com/services/${params.slug}`;
    return {
      meta: [
        { title: s.seo.title },
        { name: "description", content: s.seo.description },
        { property: "og:title", content: s.seo.title },
        { property: "og:description", content: s.seo.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: absolutePath },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: s.seo.title },
        { name: "twitter:description", content: s.seo.description },
      ],
      links: [{ rel: "canonical", href: absolutePath }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: s.title,
                serviceType: s.category,
                description: s.seo.description,
                provider: {
                  "@type": "Organization",
                  name: BUSINESS.name,
                  url: "https://fhdtech.com",
                },
                areaServed: [
                  { "@type": "Country", name: "United States" },
                  { "@type": "Country", name: "United Kingdom" },
                  { "@type": "Country", name: "Canada" },
                  { "@type": "Country", name: "Australia" },
                  { "@type": "Country", name: "Pakistan" },
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://fhdtech.com/" },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://fhdtech.com/services",
                  },
                  { "@type": "ListItem", position: 3, name: s.title, item: absolutePath },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: s.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        },
      ],
    };
  },
  component: ServiceDetailPage,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-bold text-brand-primary">Service not found</h1>
      <p className="mt-4 text-slate-500">We couldn't find that service. Browse the full catalog.</p>
      <Link
        to="/services"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white"
      >
        View all services <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}

function ServiceDetailPage() {
  const { service: s } = Route.useLoaderData() as { service: Service };

  if (s.slug === "gohighlevel-crm-setup") {
    return <GoHighLevelCRMSetup />;
  }
  if (s.slug === "wordpress-malware-removal") {
    return <WordPressMalwareRemoval />;
  }
  if (s.slug === "ai-automation") {
    return <AIAutomation />;
  }
  if (s.slug === "google-business-profile-optimization") {
    return <GoogleBusinessProfile />;
  }
  if (s.slug === "paid-ads-management") {
    return <PaidAdsManagement />;
  }
  if (s.slug === "wordpress-development") {
    return <WordPressDevelopment />;
  }

  const related = s.related
    .map((slug) => SERVICE_MAP[slug])
    .filter((r): r is Service => Boolean(r));

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent mb-6">
            <Sparkles className="size-3.5" /> {s.hero.kicker}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
            {s.hero.headline}
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
            {s.hero.sub}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-8 py-4 font-bold text-white shadow-xl shadow-brand-accent/20 hover:bg-brand-accent/90 transition-transform hover:-translate-y-0.5"
            >
              Book a Free Strategy Consultation <ArrowRight className="size-5" />
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-slate-200 hover:bg-white/10 transition-colors"
            >
              Analyze ROI Calculator
            </a>
          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="bg-slate-900 border-y border-white/10 py-10 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-brand-accent">
              14 Days
            </div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Delivery SLA
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white">99%</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Accuracy Standard
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white">100%</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Custom-Built Stack
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400">Zero</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Pre-Made Templates
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PROBLEMS GRID */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 flex justify-center items-center gap-1">
              <AlertTriangle className="size-4" /> Structural Pain
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-2">
              The Specific Operational Gaps This Resolves
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {s.problems.map((p, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-red-100 text-red-600 text-sm font-bold">
                  0{i + 1}
                </span>
                <p className="text-sm font-semibold text-slate-700 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. POLYMORPHIC ROI CALCULATOR */}
      <section id="calculator" className="py-20 px-6 bg-slate-900 text-white relative">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Estimations
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">
              Acquisition &amp; Efficiency Calculator
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Input your business metrics to estimate impact.
            </p>
          </div>
          <PolymorphicCalculator category={s.category} />
        </div>
      </section>

      {/* 5. SOLUTIONS & PILLARS */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Our Framework
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              The FHDTech Integration Blueprint
            </h2>
          </div>
          <div className="grid gap-6">
            {[
              {
                icon: Layers,
                t: "Modular System Architecture",
                d: "We skip boilerplate integrations. Every pipeline, page, and trigger maps directly to your active business metrics.",
              },
              {
                icon: ShieldCheck,
                t: "Compliance & Security Hardening",
                d: "Deploy web application firewalls, register domain SPF/DKIM/DMARC records, and set up strict access privileges.",
              },
              {
                icon: Database,
                t: "Centralized SQL Data Syncs",
                d: "Sync forms and events instantly via API integrations to prevent manual entries and tracking delays.",
              },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="flex gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-accent/10 text-brand-accent shrink-0">
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

      {/* 6. FEATURES GRID */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Features
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              What's Included in Your Build
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {s.features.map((f, i) => (
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

      {/* 7. INTERACTIVE TABS DEEP-DIVE */}
      <section className="py-20 px-6 bg-slate-950 text-white">
        <TabPanel category={s.category} />
      </section>

      {/* 8. BEFORE vs. AFTER OPERATIONS */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Operational Shift
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Manual Setup vs. FHDTech Framework
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-8 rounded-3xl bg-red-100/30 border border-red-200/50">
              <h3 className="font-display text-lg font-bold text-red-800 mb-4">
                Manual Operations
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>❌ Leads waiting in email inbox without alert pings.</li>
                <li>❌ Scattered spreadsheets and double calendar bookings.</li>
                <li>❌ Unregistered Twilio numbers getting blocked by spam filters.</li>
                <li>❌ Inconsistent follow-up with zero retargeting templates.</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-emerald-100/30 border border-emerald-200/50">
              <h3 className="font-display text-lg font-bold text-emerald-800 mb-4">
                FHDTech Automated Build
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>✅ Real-time Slack notifications triggered in 30 seconds.</li>
                <li>✅ Synchronized round-robin calendar booking workflows.</li>
                <li>✅ Registered A2P 10DLC trust compliance configurations.</li>
                <li>✅ 30-day automated SMS/Email nurture campaigns.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TIMELINE ROADMAP */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Roadmap
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Our Delivery Sequence
            </h2>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-100">
            {s.process.map((step, i) => (
              <div key={i} className="relative pl-10">
                <span className="absolute left-1.5 top-1.5 size-5 rounded-full bg-brand-accent border-4 border-white shadow" />
                <span className="inline-flex rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-bold text-brand-accent mb-2">
                  Step {i + 1}
                </span>
                <h4 className="font-display text-base font-bold text-slate-900">{step.step}</h4>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIAL SHOWCASE */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Reviews
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Client Results Delivered
            </h2>
          </div>
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <p className="text-slate-600 italic text-base leading-relaxed">
              "Fahid Ali and the FHDTech team delivered our project exactly as described. We
              completely migrated our scattered data stacks into a clean database, optimized
              integrations, and saw positive lead conversions in the first month."
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
              <div>
                <div className="font-display text-sm font-bold text-slate-900">David Vance</div>
                <div className="text-xs text-slate-400">CEO, Vance &amp; Company</div>
              </div>
              <div className="font-display text-xl font-bold text-brand-accent flex items-center gap-1">
                <Star className="size-4 fill-current text-brand-accent" /> 5-Star Setup
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. TECHNOLOGY STACK */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            Integrations
          </span>
          <h2 className="font-display text-2xl font-bold text-slate-900 mt-1 mb-10">
            We Deploy Custom Systems Integrations
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-500">
            {[
              "GoHighLevel",
              "OpenAI GPT-4",
              "Cloudflare WAF",
              "Make / Zapier",
              "Twilio",
              "Stripe API",
              "Google Search API",
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

      {/* 12. DYNAMIC FAQS */}
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
            {s.faqs.map((faq, i) => (
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

      {/* 13. SLA SECURITY PROMISE */}
      <section className="py-16 px-6 bg-slate-950 text-white text-center">
        <ShieldCheck className="size-12 text-brand-accent mx-auto mb-4 animate-pulse" />
        <h2 className="font-display text-2xl sm:text-3xl font-bold">
          60-Day Rock-Solid SLA Guarantee
        </h2>
        <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
          If any pipeline breaks, or target API integrations require optimization within 60 days
          post-launch, we resolve it within 24 hours at zero cost.
        </p>
      </section>

      {/* 14. FAHID ALI'S PLEDGE */}
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
              <p className="text-xs text-slate-400">Founder &amp; Systems Architect</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed italic">
            "Automated setup snapshots frequently get abandoned because they lack post-launch
            support. At FHDTech, we manually scrub the configurations to make sure the build solves
            your exact business problems, guaranteed."
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
              "Emergency HVAC Services",
              "Roofing Contractors",
              "Law Firms",
              "Medical & Dental Clinics",
              "WooCommerce Stores",
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

      {/* 16. FINAL CTA BOOKING PANEL */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <h2 className="font-display text-3xl font-bold">Ready to Start with {s.title}?</h2>
        <p className="text-slate-300 text-sm mt-3 max-w-md mx-auto mb-8">
          Schedule a free 30-minute consultation call. We will review your current systems
          architecture live.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/book-consultation"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-8 py-4 font-bold text-white shadow-xl shadow-brand-accent/20 hover:bg-brand-accent/90 transition-transform hover:-translate-y-0.5"
          >
            Start My System Optimization Build
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-slate-200 hover:bg-white/10"
          >
            Request Custom Mockup Quote
          </a>
        </div>
      </section>
    </div>
  );
}

// Dynamic Polymorphic Calculator Component based on Category
function PolymorphicCalculator({ category }: { category: string }) {
  const [val1, setVal1] = useState(150);
  const [val2, setVal2] = useState(30);

  if (
    category === "AI Automation" ||
    category === "Workflow Automation" ||
    category === "CRM Solutions" ||
    category === "GoHighLevel"
  ) {
    const hoursSaved = Math.round((val1 * 15) / 60 + val2);
    const savings = hoursSaved * 25;
    return (
      <div className="bg-slate-950 p-8 rounded-3xl border border-white/5 shadow-2xl">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Monthly Leads: {val1}
              </label>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={val1}
                onChange={(e) => setVal1(Number(e.target.value))}
                className="w-full accent-brand-accent bg-slate-800"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Weekly Staff Manual Hours: {val2}
              </label>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={val2}
                onChange={(e) => setVal2(Number(e.target.value))}
                className="w-full accent-brand-accent bg-slate-800"
              />
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 text-center flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Total Monthly Time Saved
            </span>
            <div className="font-display text-3xl font-black text-white mt-1">
              {hoursSaved} Hours
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-semibold">
                Estimated Monthly Savings
              </span>
              <div className="font-display text-4xl font-bold text-emerald-400 mt-1">
                ${savings.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (category === "Web Development" || category === "WordPress") {
    const lostLeads = Math.round(val1 * (val2 < 50 ? 0.35 : val2 < 80 ? 0.12 : 0.02) * 0.03);
    const lostRevenue = lostLeads * 350;
    return (
      <div className="bg-slate-950 p-8 rounded-3xl border border-white/5 shadow-2xl">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Monthly Traffic: {val1.toLocaleString()}
              </label>
              <input
                type="range"
                min="1000"
                max="25000"
                step="1000"
                value={val1}
                onChange={(e) => setVal1(Number(e.target.value))}
                className="w-full accent-brand-accent bg-slate-800"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Mobile Speed Score: {val2}
              </label>
              <input
                type="range"
                min="10"
                max="95"
                step="5"
                value={val2}
                onChange={(e) => setVal2(Number(e.target.value))}
                className="w-full accent-brand-accent bg-slate-800"
              />
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 text-center flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400">
              Estimated Lost Conversions
            </span>
            <div className="font-display text-3xl font-black text-white mt-1">
              {lostLeads} Leads
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 font-semibold">
                Estimated Monthly Revenue Loss
              </span>
              <div className="font-display text-4xl font-bold text-red-500 mt-1">
                ${lostRevenue.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback (Paid Advertising, SEO, Google Business Profile, etc.)
  const leads = Math.round((val1 / (val2 || 1)) * 0.08);
  const costPerLead = Math.round(val1 / (leads || 1));
  return (
    <div className="bg-slate-950 p-8 rounded-3xl border border-white/5 shadow-2xl">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Monthly Ad Budget: ${val1.toLocaleString()}
            </label>
            <input
              type="range"
              min="500"
              max="10000"
              step="250"
              value={val1}
              onChange={(e) => setVal1(Number(e.target.value))}
              className="w-full accent-brand-accent bg-slate-800"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Cost-Per-Click (CPC): ${val2.toFixed(2)}
            </label>
            <input
              type="range"
              min="0.50"
              max="10.00"
              step="0.25"
              value={val2}
              onChange={(e) => setVal2(Number(e.target.value))}
              className="w-full accent-brand-accent bg-slate-800"
            />
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 text-center flex flex-col justify-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            Estimated Leads Generated
          </span>
          <div className="font-display text-3xl font-black text-white mt-1">{leads} Leads</div>
          <div className="mt-4 pt-4 border-t border-white/10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-semibold">
              Estimated Cost Per Lead
            </span>
            <div className="font-display text-4xl font-bold text-emerald-400 mt-1">
              ${costPerLead} <span className="text-xs text-slate-400">/ lead</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive Tab Panel Override Component based on Category
function TabPanel({ category }: { category: string }) {
  const [activeTab, setActiveTab] = useState("first");

  if (category === "AI Automation" || category === "Workflow Automation") {
    return (
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            System Blueprint
          </span>
          <h2 className="font-display text-3xl font-bold text-white mt-1">
            Autonomous Flow Configurations
          </h2>
        </div>
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {["first", "second", "third"].map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                activeTab === t
                  ? "bg-indigo-600 text-white"
                  : "bg-white/5 text-slate-400 hover:bg-white/10"
              }`}
            >
              {t === "first"
                ? "Voice AI Setup"
                : t === "second"
                  ? "Intake Chatbot"
                  : "Database Routing"}
            </button>
          ))}
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 min-h-[200px] flex flex-col justify-between">
          {activeTab === "first" && (
            <div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                Voice AI Twilio Integrations
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Latency adjusted under 1.8 seconds. Systems qualifying scripts book appointments and
                coordinate schedules with GHL calendars in real-time.
              </p>
            </div>
          )}
          {activeTab === "second" && (
            <div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                Vector RAG Information Databases
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Chatbots index terms, FAQs, and price files to safely answer user queries without
                hallucinating.
              </p>
            </div>
          )}
          {activeTab === "third" && (
            <div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                Webhook Data matching
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Triggers parse parameters and map contact details directly into Stripe and Slack
                workspaces without human edits.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Fallback Tab Panel
  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
          Integrations
        </span>
        <h2 className="font-display text-3xl font-bold text-white mt-1">
          Platform Architecture Details
        </h2>
      </div>
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {["first", "second", "third"].map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
              activeTab === t
                ? "bg-brand-accent text-white"
                : "bg-white/5 text-slate-400 hover:bg-white/10"
            }`}
          >
            {t === "first" ? "System Design" : t === "second" ? "API Connections" : "SLA Testing"}
          </button>
        ))}
      </div>
      <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 min-h-[200px] flex flex-col justify-between">
        {activeTab === "first" && (
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-2">
              Modular System Layouts
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              We design components to target speed and conversions. Layout structures are optimized
              for quick loading and responsive styling.
            </p>
          </div>
        )}
        {activeTab === "second" && (
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-2">
              REST API &amp; Webhook Routing
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Webhooks sync parameters from client forms directly into opportunity tracking boards
              to manage leads instantly.
            </p>
          </div>
        )}
        {activeTab === "third" && (
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-2">
              Active Sandboxing &amp; Testing
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Our QA processes run simulations across multiple browsers and speed testing nodes to
              target zero error launches.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
