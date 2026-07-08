import { useState } from "react";
import {
  Target,
  TrendingUp,
  ArrowRight,
  HelpCircle,
  CheckCircle,
  ShieldCheck,
  Sparkles,
  BarChart3,
  Settings,
  MessageSquare,
  PlayCircle,
  Users,
  Percent,
} from "lucide-react";

export default function PaidAdsManagement() {
  const [adSpend, setAdSpend] = useState(1500);
  const [cpcCost, setCpcCost] = useState(2.5);
  const [activeTab, setActiveTab] = useState("google");

  // Calculations
  const clicksCount = Math.round(adSpend / cpcCost);
  const typicalConversionRate = 0.08; // 8% conversion rate with clean landing pages
  const leadsGenerated = Math.round(clicksCount * typicalConversionRate);
  const costPerLead = Math.round(adSpend / (leadsGenerated || 1));

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-950 text-white pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-6">
            <Target className="size-3.5" /> High-Performance Paid Advertising
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
            Paid Ads Management &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              High-ROAS PPC Sprints
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
            Stop burning money on bad search keywords. We build high-converting Google Search
            campaigns, Facebook CAPI tracking setups, and custom landing pages that convert clicks
            to calls.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-8 py-4 font-bold text-white shadow-xl shadow-emerald-600/20 transition-transform hover:-translate-y-0.5"
            >
              Get Free Paid Ads Audit <ArrowRight className="size-5" />
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-slate-200 hover:bg-white/10 transition-colors"
            >
              Calculate Lead Costs
            </a>
          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="bg-slate-900 border-y border-white/10 py-10 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400">
              3x to 5x
            </div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Avg. Return on Ad Spend (ROAS)
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white">&lt; 8%</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Average Conversion Rate
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white">100%</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              CAPI Integration Rates
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400">Zero</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Wasted Keyword Spend
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE AD CHALLENGES */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 flex justify-center items-center gap-1">
              <Percent className="size-4" /> PPC Gaps
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-2">
              Why Most Paid Ad Campaigns Burn Budget
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Poor Keyword Selection",
                d: "Targeting broad queries rather than search terms with buying intent leads to heavy clicks that do not convert.",
              },
              {
                t: "Missing Conversion Pixels",
                d: "iOS privacy rules block standard cookies. Without Facebook Conversations API (CAPI), algorithms bid blindly.",
              },
              {
                t: "Generic Landing Pages",
                d: "Sending paid traffic directly to your website home page destroys conversion rates, losing leads to competitors.",
              },
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700 mb-4">
                  Challenge 0{i + 1}
                </span>
                <h4 className="font-display text-base font-bold text-slate-900 mb-1">{p.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE LEAD ACQUISITION CALCULATOR */}
      <section id="calculator" className="py-20 px-6 bg-slate-900 text-white relative">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              PPC Estimations
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">
              Lead Cost Projection Tool
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 bg-slate-950 p-8 rounded-3xl border border-white/5">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Monthly Ad Spend: ${adSpend.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Cost-Per-Click (CPC): ${cpcCost.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0.50"
                  max="15.00"
                  step="0.25"
                  value={cpcCost}
                  onChange={(e) => setCpcCost(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900 border border-white/10 text-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Estimated Monthly Clicks
                </span>
                <div className="font-display text-4xl sm:text-5xl font-black text-white mt-2">
                  {clicksCount} Clicks
                </div>
              </div>
              <div className="my-6 border-t border-white/10 pt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Estimated Cost Per Lead
                </span>
                <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400 mt-1">
                  ${costPerLead} <span className="text-xs text-slate-400">/ lead</span>
                </div>
                <p className="text-slate-400 text-[10px] mt-2">
                  Assumes 8% lead conversion rate with optimized GHL landing pages.
                </p>
              </div>
              <a
                href="/book-consultation"
                className="w-full py-3 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold rounded-xl text-sm transition-transform hover:-translate-y-0.5"
              >
                Set Up Clean Lead Funnel
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
              The High-ROAS Ad Strategy
            </h2>
          </div>
          <div className="grid gap-6">
            {[
              {
                icon: Target,
                t: "Buyer Intent Google Search",
                d: "We skip broad terms and bid strictly on 'buyer intent' search keywords, preventing budget waste on informational queries.",
              },
              {
                icon: Settings,
                t: "Server-Side Pixel Tracking (CAPI)",
                d: "Deploy Meta Conversions API (CAPI) via cloud servers. Feeds accurate purchase metrics to algorithms, lowering your acquisition costs.",
              },
              {
                icon: BarChart3,
                t: "Dedicated Landing Page Sprints",
                d: "Every ad campaign maps to a custom, high-speed GoHighLevel landing page designed strictly to drive phone calls and form bookings.",
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="flex gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 shrink-0">
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

      {/* 6. FEATURES CHECKLIST */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Features
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Enterprise Ads Management Stack
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Audit of Historical Ad Account Data",
              "Google Search Keyword Strategy (Negative Lists)",
              "Meta Conversions API (CAPI) Cloud setups",
              "Interactive Ad Copywriting & Creative Designs",
              "High-Conversion Landing Page Builds",
              "Integration of UTM Tracking & Lead Source Tags",
              "Weekly Bid Adjustments & Budget Controls",
              "Competitor Search Auction Share Audits",
              "Monthly Performance & ROAS Reports",
            ].map((f, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3"
              >
                <CheckCircle className="size-5 text-emerald-500 shrink-0 mt-0.5" />
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
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Ad Networks
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">
              Deep-Dive Into Ad Configurations
            </h2>
          </div>
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {["google", "meta", "retargeting"].map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                  activeTab === t
                    ? "bg-emerald-600 text-white"
                    : "bg-white/5 text-slate-400 hover:bg-white/10"
                }`}
              >
                {t === "google" ? "Google Search" : t === "meta" ? "Meta CAPI" : "Retargeting"}
              </button>
            ))}
          </div>
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 min-h-[220px] flex flex-col justify-between">
            {activeTab === "google" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Google Search &amp; PPC
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Build clean campaigns mapping phrase and exact matches. Setup strict negative
                  keyword lists to prevent click wastes on junk queries (e.g. 'free', 'jobs').
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
                  <BarChart3 className="size-4" /> Average ROAS: 3.5x+
                </div>
              </div>
            )}
            {activeTab === "meta" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Meta Conversions API (CAPI)
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  We deploy server-side pixel tracking to bypass browser blockers. Feeds clean
                  signals to Facebook algorithms to target high-intent buying audiences.
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
                  <Settings className="size-4" /> Bypasses Apple iOS Cookie restrictions
                </div>
              </div>
            )}
            {activeTab === "retargeting" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Multi-Channel Retargeting Pipelines
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Show targeted testimonial videos and project images to users who visited your
                  landing page but did not book a call. Keeps your business top-of-mind.
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
                  <Users className="size-4" /> Recovers 15-25% of abandoned landing page visits
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. BEFORE vs. AFTER CAMPAIGNS */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Performance
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Ad Campaigns Comparison
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-8 rounded-3xl bg-red-100/30 border border-red-200/50">
              <h3 className="font-display text-lg font-bold text-red-800 mb-4">
                Standard PPC setups
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>❌ Bid on broad keywords, waste budget on informational terms.</li>
                <li>❌ Clicks routed to home pages. Lead conversion: ~2%.</li>
                <li>❌ Pixel data blocks lead to high cost-per-lead spikes.</li>
                <li>❌ No follow-up emails or retargeting templates.</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-emerald-100/30 border border-emerald-200/50">
              <h3 className="font-display text-lg font-bold text-emerald-800 mb-4">
                FHDTech Managed Sprints
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>✅ Phrase/Exact matches. Wasted spend: under 5%.</li>
                <li>✅ Clicks routed to high-speed GHL landing pages. Conversions: ~8-12%.</li>
                <li>✅ Server-side CAPI feeds clean data to algorithms.</li>
                <li>✅ Testimonial retargeting + SMS follow-up setups.</li>
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
              Our PPC Deployment Roadmap
            </h2>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-100">
            {[
              {
                d: "Day 1 - 3",
                t: "Ad Account Audit & Keywords Strategy",
                desc: "Scan historical metrics, trace competitor share metrics, compile target keyword lists.",
              },
              {
                d: "Day 4 - 7",
                t: "Landing Pages & CAPI setups",
                desc: "Build high-speed landing pages and deploy server-side pixel tracking.",
              },
              {
                d: "Day 8 - 10",
                t: "Ad Copies & Creative Designs",
                desc: "Draft ad copies, design graphic creatives, set negative lists.",
              },
              {
                d: "Day 11 - 12",
                t: "Campaign Launches & Bid Settings",
                desc: "Upload ad structures to Google/Meta platforms, configure bid maximums.",
              },
              {
                d: "Day 13 - 14",
                t: "Optimization & Initial Reports",
                desc: "Monitor search queries live, trim broad queries, deliver initial dashboard links.",
              },
            ].map((step, i) => (
              <div key={i} className="relative pl-10">
                <span className="absolute left-1.5 top-1.5 size-5 rounded-full bg-emerald-600 border-4 border-white shadow" />
                <span className="inline-flex rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-bold text-emerald-600 mb-2">
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
              PPC Campaign ROAS
            </h2>
          </div>
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <p className="text-slate-600 italic text-base leading-relaxed">
              "Fahid took over our Google Ads. Our cost per lead dropped from $68 to $22 because of
              his landing page setups and keyword negative exclusions. We spent the same budget but
              generated 3x more bookings."
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
              <div>
                <div className="font-display text-sm font-bold text-slate-900">Sandra Cole</div>
                <div className="text-xs text-slate-400">Marketing Director, Peak Health Group</div>
              </div>
              <div className="font-display text-xl font-bold text-emerald-600">
                300% Lead Growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. PLATFORMS SUPPORTED */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            Platforms
          </span>
          <h2 className="font-display text-2xl font-bold text-slate-900 mt-1 mb-10">
            We Manage Multi-Channel Campaigns
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-500">
            {[
              "Google Search Ads",
              "Meta Facebook Ads",
              "Instagram Ads",
              "Google Display Ads",
              "YouTube Video Ads",
            ].map((plat) => (
              <span
                key={plat}
                className="px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm"
              >
                {plat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 12. PPC FAQS */}
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
                q: "What is your minimum managed ad spend?",
                a: "We manage budgets starting at $1,000/month. This guarantees enough click data to optimize campaigns effectively.",
              },
              {
                q: "Do you build the landing pages separately?",
                a: "No. Landing page design and builds inside GoHighLevel or WordPress are included in our setup scope at no extra cost.",
              },
              {
                q: "Is the ad budget billed separately?",
                a: "Yes. You pay Google or Meta directly for click spends. FHDTech's fee is strictly for setup and monthly optimization management.",
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

      {/* 13. SLA SHIELD */}
      <section className="py-16 px-6 bg-slate-950 text-white text-center">
        <ShieldCheck className="size-12 text-emerald-400 mx-auto mb-4 animate-pulse" />
        <h2 className="font-display text-2xl sm:text-3xl font-bold">
          60-Day Ad Tracking Guarantee
        </h2>
        <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
          We guarantee pixel tracking setups and UTM tag links. If any API update breaks your
          campaign pixel registrations within 60 days post-launch, we resolve it at zero cost.
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
              <p className="text-xs text-slate-400">Founder &amp; Ad Architect</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed italic">
            "Running ads without high-converting landing pages is throwing money away. At FHDTech,
            we match the ad keyword directly to a specific headline on a 1-second loading page,
            stopping click wastes."
          </p>
        </div>
      </section>

      {/* 15. INDUSTRIES SERVED */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="font-display text-lg font-bold text-slate-950 mb-6">
            Verticals with Active Ad Setups
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Home Services",
              "HVAC Repair Bids",
              "Law Firm Leads",
              "WooCommerce E-commerce Storefronts",
              "SaaS Signups",
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

      {/* 16. FINAL PPC CTA */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <h2 className="font-display text-3xl font-bold">Ready to Scale Your Ad Campaigns?</h2>
        <p className="text-slate-300 text-sm mt-3 max-w-md mx-auto mb-8">
          Schedule a free 30-minute ad review call. We will audit your active campaigns live.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/book-consultation"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-8 py-4 font-bold text-white shadow-xl shadow-emerald-600/20 transition-transform hover:-translate-y-0.5"
          >
            Start Ads Optimization Sprints
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-slate-200 hover:bg-white/10"
          >
            Request Custom quote
          </a>
        </div>
      </section>
    </div>
  );
}
