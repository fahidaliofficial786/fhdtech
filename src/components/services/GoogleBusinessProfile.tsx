import { useState } from "react";
import {
  MapPin,
  Star,
  ArrowRight,
  HelpCircle,
  CheckCircle,
  ShieldCheck,
  Sparkles,
  Map,
  MessageSquare,
  PhoneCall,
  TrendingUp,
  AlertTriangle,
  Eye,
  Target,
} from "lucide-react";

export default function GoogleBusinessProfile() {
  const [missingNAP, setMissingNAP] = useState(false);
  const [lowReviews, setLowReviews] = useState(false);
  const [spamCategories, setSpamCategories] = useState(false);
  const [activeTab, setActiveTab] = useState("citations");

  const hasIssues = missingNAP || lowReviews || spamCategories;

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-950 to-slate-950 text-white pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-400 mb-6">
            <MapPin className="size-3.5" /> Google Business Profile Experts
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
            Google Business Profile <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">
              Optimization & Map Pack Rankings
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
            Own the local Map 3-Pack. We clean duplicate citations, optimize geo-coordinate
            coordinates, and setup review automations to generate direct inbound phone calls.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-8 py-4 font-bold text-white shadow-xl shadow-blue-600/20 transition-transform hover:-translate-y-0.5"
            >
              Get Free GBP Audit <ArrowRight className="size-5" />
            </a>
            <a
              href="#audit-tool"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-slate-200 hover:bg-white/10 transition-colors"
            >
              Run Diagnostic Check
            </a>
          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="bg-slate-900 border-y border-white/10 py-10 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-blue-400">56%</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Actions are Web Visits
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white">+45%</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Avg. Inbound Call Growth
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white">100%</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              NAP Consistency Target
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400">Zero</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Spam Stuffing Risk
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE GBP CHALLENGES */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 flex justify-center items-center gap-1">
              <AlertTriangle className="size-4" /> Visibility Leaks
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-2">
              Why Your Business is Hidden on Google Maps
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Inconsistent NAP Details",
                d: "Spelling address typos or using different phone numbers across directory listings flags you as untrustworthy in Google algorithms.",
              },
              {
                t: "Low Review Velocity",
                d: "If you only get 1 review a month while competitors get 5 a week, Google ranks them higher in proximity sweeps.",
              },
              {
                t: "Spam suspensions",
                d: "Stuffing keywords in your business name triggers sudden algorithmic suspensions, dropping you from search listings.",
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

      {/* 4. INTERACTIVE AUDIT DIAGNOSTIC TOOL */}
      <section id="audit-tool" className="py-20 px-6 bg-slate-900 text-white relative">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Diagnostic
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">
              Local SEO Risk Check
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Select the options below to see if your GBP profile has critical warnings.
            </p>
          </div>
          <div className="bg-slate-950 border border-white/5 rounded-3xl p-8 shadow-2xl">
            <div className="grid gap-4 md:grid-cols-3 mb-8">
              <button
                onClick={() => setMissingNAP(!missingNAP)}
                className={`p-4 rounded-xl border text-center font-bold text-xs transition-all ${
                  missingNAP
                    ? "bg-red-500/20 border-red-500 text-red-400"
                    : "bg-white/5 border-white/10 text-slate-400"
                }`}
              >
                Inconsistent NAP Listings
              </button>
              <button
                onClick={() => setLowReviews(!lowReviews)}
                className={`p-4 rounded-xl border text-center font-bold text-xs transition-all ${
                  lowReviews
                    ? "bg-red-500/20 border-red-500 text-red-400"
                    : "bg-white/5 border-white/10 text-slate-400"
                }`}
              >
                Zero Review Velocity
              </button>
              <button
                onClick={() => setSpamCategories(!spamCategories)}
                className={`p-4 rounded-xl border text-center font-bold text-xs transition-all ${
                  spamCategories
                    ? "bg-red-500/20 border-red-500 text-red-400"
                    : "bg-white/5 border-white/10 text-slate-400"
                }`}
              >
                Incorrect/Spam Categories
              </button>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 text-center">
              {hasIssues ? (
                <div>
                  <p className="text-red-400 font-bold text-sm">
                    ⚠️ CRITICAL RANKING BLOCKS DETECTED
                  </p>
                  <p className="text-slate-300 text-xs mt-2 leading-relaxed max-w-md mx-auto">
                    NAP discrepancies and category issues prevent you from appearing in local search
                    grids outside of your office street.
                  </p>
                </div>
              ) : (
                <p className="text-emerald-400 font-bold text-sm">
                  ✅ SELECT DISCREPANCIES ABOVE TO RUN AUDIT
                </p>
              )}
              <a
                href="/book-consultation"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-6 py-3 text-xs font-bold text-white"
              >
                Request Free Manual GBP Audit <ArrowRight className="size-4" />
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
              Our Framework
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              The Local Map Pack Blueprint
            </h2>
          </div>
          <div className="grid gap-6">
            {[
              {
                icon: Map,
                t: "Geo-Proximity Area Coverage",
                d: "We generate geo-targeted local pages with custom coordinate metadata, extending your maps ranking radius beyond your physical office address.",
              },
              {
                icon: PhoneCall,
                t: "Inbound Phone Lead Capture",
                d: "Setup GoHighLevel call tracking lines, missed-call auto-text back workflows, and call-action parameters to turn views into prospects.",
              },
              {
                icon: MessageSquare,
                t: "Review Velocity Engines",
                d: "Auto-trigger review requests via SMS right after a sales ticket closes, raising your rankings by building positive sentiment metrics.",
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="flex gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 shrink-0">
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
              Included
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Complete GBP Ranking Optimization Stack
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Audit & Clean Duplicate Citations",
              "Primary & Secondary Category Structuring",
              "NAP Details Alignments Across Yelp & Apple Maps",
              "Geo-Coordinate Coordinates & Pin Mapping",
              "Geotagged Service Images Uploads",
              "Integration of Automated GHL Review Campaigns",
              "Google Maps Coordinate Schema Configurations",
              "Keyword Search optimization for Service Descriptions",
              "Monthly Citations & Map Pack Progress Reports",
            ].map((f, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3"
              >
                <CheckCircle className="size-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE TABS */}
      <section className="py-20 px-6 bg-slate-950 text-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Methods
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">
              Deep-Dive Into Map Rankings
            </h2>
          </div>
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {["citations", "geotargeting", "reviews"].map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                  activeTab === t
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 text-slate-400 hover:bg-white/10"
                }`}
              >
                {t === "citations"
                  ? "NAP Citations"
                  : t === "geotargeting"
                    ? "Geo Pages"
                    : "Review Velocity"}
              </button>
            ))}
          </div>
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 min-h-[220px] flex flex-col justify-between">
            {activeTab === "citations" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  NAP Citations Scrubbing
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  We check 50+ local business directories including Foursquare, Yelp, YellowPages,
                  and Apple Maps to rewrite inconsistent Name, Address, and Phone listings,
                  resolving trust signals.
                </p>
                <div className="flex items-center gap-2 text-xs text-blue-400 font-bold">
                  <TrendingUp className="size-4" /> Cleans Inconsistent listings in 10 Days
                </div>
              </div>
            )}
            {activeTab === "geotargeting" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Geo-Targeted service pages
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  We write coordinate coordinates, maps embeds, and local NAP schema structures
                  directly into your service landing pages, signaling target location coordinates to
                  search crawlers.
                </p>
                <div className="flex items-center gap-2 text-xs text-blue-400 font-bold">
                  <Map className="size-4" /> Extends maps rank radius by 5-15 miles
                </div>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  SMS/Email Review automation
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Integrate review request workflows inside your GoHighLevel sub-accounts to send
                  immediate text prompts right when customers make payments.
                </p>
                <div className="flex items-center gap-2 text-xs text-blue-400 font-bold">
                  <Star className="size-4 text-amber-400 fill-current" /> Drives review volume and
                  sentiment metrics
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. BEFORE vs. AFTER MAPS */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Rank Changes
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Before vs. After Map pack Optimizations
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-8 rounded-3xl bg-red-100/30 border border-red-200/50">
              <h3 className="font-display text-lg font-bold text-red-800 mb-4">
                Unoptimized Profile
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>❌ Only rank in immediate 1-mile radius around office.</li>
                <li>❌ 3-4 spam categories flag local trust signals.</li>
                <li>❌ 1 review every few months. Velocity score: low.</li>
                <li>❌ Duplicate maps pages split review authority.</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-emerald-100/30 border border-emerald-200/50">
              <h3 className="font-display text-lg font-bold text-emerald-800 mb-4">
                FHDTech Optimized Profile
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>✅ Ranks in top Local 3-Pack in 10-mile radius.</li>
                <li>✅ 1 clean Primary category, 3 secondary categories configured.</li>
                <li>✅ Automated review collection increases velocity.</li>
                <li>✅ Clean citations list verifies domain authority.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TIMELINE */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Process
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Our Maps Sprint Timeline
            </h2>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-100">
            {[
              {
                d: "Day 1 - 3",
                t: "Citation & NAP Audit",
                desc: "Scan 50+ listing sites to identify inconsistencies, typos, and duplicate maps entries.",
              },
              {
                d: "Day 4 - 7",
                t: "GBP categories & Geotagging",
                desc: "Set primary classifications, rewrite descriptions, and upload geotagged images.",
              },
              {
                d: "Day 8 - 10",
                t: "Citation cleanups & Local Schema",
                desc: "Submit correction requests to directories and generate map coordinate schemas.",
              },
              {
                d: "Day 11 - 12",
                t: "Review campaign setups",
                desc: "Integrate automatic review collection workflows inside GoHighLevel.",
              },
              {
                d: "Day 13 - 14",
                t: "Report delivery & Handover",
                desc: "Send initial tracking reports showing baseline rankings and next action guidelines.",
              },
            ].map((step, i) => (
              <div key={i} className="relative pl-10">
                <span className="absolute left-1.5 top-1.5 size-5 rounded-full bg-blue-600 border-4 border-white shadow" />
                <span className="inline-flex rounded-full bg-blue-600/10 px-3 py-1 text-xs font-bold text-blue-600 mb-2">
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
              Success Stories
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Local Maps ROI Results
            </h2>
          </div>
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <p className="text-slate-600 italic text-base leading-relaxed">
              "Our plumbing business was invisible outside our immediate street. FHDTech cleaned our
              directory citations and built localized coordinate pages on our website. Within 30
              days, we ranked in the top 3-pack for three neighboring cities, doubling our inbound
              call volumes."
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
              <div>
                <div className="font-display text-sm font-bold text-slate-900">Mark Thompson</div>
                <div className="text-xs text-slate-400">
                  Founder, Thompson Plumbing &amp; Rooter
                </div>
              </div>
              <div className="font-display text-xl font-bold text-blue-600">+115% Maps Calls</div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. LOCAL DIRECTORIES SUPPORTED */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            Networks
          </span>
          <h2 className="font-display text-2xl font-bold text-slate-900 mt-1 mb-10">
            We Sync Your NAP Across Key Directories
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-500">
            {[
              "Google Maps",
              "Apple Maps",
              "Yelp",
              "Bing Places",
              "Foursquare",
              "YellowPages",
              "Factual",
              "TripAdvisor",
            ].map((net) => (
              <span
                key={net}
                className="px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm"
              >
                {net}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 12. GBP FAQS */}
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
                q: "Will keyword stuffing my name help me rank?",
                a: "No. While it worked in previous years, Google's spam filters now flag listings that use keywords instead of their real legal name. This frequently triggers suspensions.",
              },
              {
                q: "What is NAP consistency?",
                a: "NAP stands for Name, Address, and Phone. Google compares this data across directories like Yelp and Apple Maps. Perfect spelling consistency signals authority and reliability.",
              },
              {
                q: "How long does it take to see local maps ranking changes?",
                a: "NAP updates take between 2 to 4 weeks to propagate. You will usually see local maps visibility improvements within 30 to 45 days after cleanup.",
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

      {/* 13. LOCAL SEO SLA SHIELD */}
      <section className="py-16 px-6 bg-slate-950 text-white text-center">
        <ShieldCheck className="size-12 text-blue-400 mx-auto mb-4 animate-pulse" />
        <h2 className="font-display text-2xl sm:text-3xl font-bold">
          60-Day Map Pack SLA Guarantee
        </h2>
        <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
          We guarantee citation cleanup completions and localized coordinate schema submissions. If
          any citation directory breaks within the first 60 days, we fix it at zero cost.
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
              <p className="text-xs text-slate-400">Founder &amp; Local SEO Lead</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed italic">
            "Google Maps algorithms weigh NAP consistency and review velocity over raw backlink
            volumes. At FHDTech, we manually scrub the listings to make sure Google has 100%
            confidence in your business location details, helping you rank in target search packs."
          </p>
        </div>
      </section>

      {/* 15. INDUSTRIES SERVED */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="font-display text-lg font-bold text-slate-950 mb-6">
            Verticals Dominating the Map Pack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Emergency HVAC Services",
              "Roofing Contractors",
              "Local Plumbing Companies",
              "Dental Clinics",
              "Personal Injury Law Firms",
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

      {/* 16. FINAL GBP CTA */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <h2 className="font-display text-3xl font-bold">
          Ready to Rank in Google's Local Map 3-Pack?
        </h2>
        <p className="text-slate-300 text-sm mt-3 max-w-md mx-auto mb-8">
          Schedule a free 30-minute map strategy call. We will review your current citation gaps
          live.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/book-consultation"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-8 py-4 font-bold text-white shadow-xl shadow-blue-600/20 transition-transform hover:-translate-y-0.5"
          >
            Start Local SEO Optimization
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-slate-200 hover:bg-white/10"
          >
            Request Custom citation Audit
          </a>
        </div>
      </section>
    </div>
  );
}
