import { useState } from "react";
import {
  TrendingUp,
  Sparkles,
  ArrowRight,
  HelpCircle,
  CheckCircle,
  ShieldCheck,
  Search,
  BarChart3,
  Settings,
  Database,
  Code2,
  PlayCircle,
  HeartHandshake,
  Percent,
  DollarSign,
} from "lucide-react";

export default function SEO() {
  const [traffic, setTraffic] = useState(1500);
  const [conversionRate, setConversionRate] = useState(2); // 2% conversion rate
  const [dealValue, setDealValue] = useState(500);
  const [activeTab, setActiveTab] = useState("crawl");

  // Calculations
  const currentLeads = Math.round(traffic * (conversionRate / 100));
  const currentRevenue = currentLeads * dealValue;

  // Future estimations (3x Traffic Growth)
  const estimatedTraffic = traffic * 3;
  const estimatedLeads = Math.round(estimatedTraffic * (conversionRate / 100));
  const estimatedRevenue = estimatedLeads * dealValue;
  const netLift = estimatedRevenue - currentRevenue;

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent mb-6">
            <Search className="size-3.5" /> High-Performance Organic Search
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
            Search Engine Optimization <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-emerald-400">
              (SEO) Growth Sprints
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
            Stop guessing what keywords Google wants. We run technical audits, rebuild indexation
            architectures, configure local map pack citations, and write search-optimized schemas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-8 py-4 font-bold text-white shadow-xl shadow-brand-accent/20 hover:bg-brand-accent/90 transition-transform hover:-translate-y-0.5"
            >
              Get Free SEO Site Crawl <ArrowRight className="size-5" />
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-slate-200 hover:bg-white/10 transition-colors"
            >
              Estimate My Organic Revenue
            </a>
          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="bg-slate-900 border-y border-white/10 py-10 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-brand-accent">
              3x to 5x
            </div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Average Organic Traffic Lift
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white">&lt; 1.5s</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Mobile Load Target
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white">100%</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Schema Indexation Rate
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400">Zero</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Black-Hat Link Schemes
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SEO CHALLENGES */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 flex justify-center items-center gap-1">
              <TrendingUp className="size-4" /> SEO Leakage
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-2">
              Why Your Website Isn't Ranking in Search Results
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Crawl Budget Waste",
                d: "Google crawl bots get stuck on redirect loops or duplicate parameter paths, leaving your high-value pages unindexed.",
              },
              {
                t: "Local Map Invisibility",
                d: "Inconsistent NAP (Name, Address, Phone) citation profiles across directory sitemaps block you from Google's Local 3-Pack.",
              },
              {
                t: "Weak Schema Graphs",
                d: "Without proper JSON-LD structured schemas, Google cannot map your services, pricing, or FAQ content accurately.",
              },
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700 mb-4">
                  SEO Gap 0{i + 1}
                </span>
                <h4 className="font-display text-base font-bold text-slate-900 mb-1">{p.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRAFFIC VALUATION CALCULATOR */}
      <section id="calculator" className="py-20 px-6 bg-slate-900 text-white relative">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Valuation
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">
              Organic Traffic Valuation Tool
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              See how much revenue you are leaving on the table compared to a 3x traffic boost.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 bg-slate-950 p-8 rounded-3xl border border-white/5">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Monthly Organic Visits: {traffic.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="500"
                  value={traffic}
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Inbound Conversion Rate: {conversionRate}%
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="5.0"
                  step="0.25"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Average Customer Value: ${dealValue.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900 border border-white/10 text-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Current Monthly Revenue
                </span>
                <div className="font-display text-3xl font-bold text-white mt-1">
                  ${currentRevenue.toLocaleString()}
                </div>
              </div>
              <div className="my-6 border-t border-white/10 pt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Projected 3x Traffic Lift Revenue
                </span>
                <div className="font-display text-4xl font-black text-emerald-400 mt-2">
                  ${estimatedRevenue.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  Net Monthly Increase: +${netLift.toLocaleString()}
                </div>
              </div>
              <a
                href="/book-consultation"
                className="w-full py-3 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold rounded-xl text-sm transition-transform hover:-translate-y-0.5"
              >
                Audit My Search Opportunities
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
              Our Strategy
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Our 4-Pillar Organic Engine
            </h2>
          </div>
          <div className="grid gap-6">
            {[
              {
                icon: Search,
                t: "Intent Keyword Mapping",
                d: "We target commercial queries (e.g. 'AC repair near me') rather than informational words, capturing buyers with active purchasing intent.",
              },
              {
                icon: Code2,
                t: "Semantic HTML & JSON-LD Schemas",
                d: "Deploy structured graphs directly to code. Helps Google crawl bots parse service boundaries, lists, FAQs, and reviews instantly.",
              },
              {
                icon: Settings,
                t: "Core Web Vitals Page Speed Tuning",
                d: "Optimizing CSS parameters, script loads, and images. Fast pages improve rank scores and lower bounce risks.",
              },
              {
                icon: Database,
                t: "Local Citations Syncing Sprints",
                d: "Match Name, Address, and Phone data across 60+ online directories, building Google Business Profile proximity.",
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
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

      {/* 6. FEATURES CHECKLIST */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Included
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              SEO Audits &amp; Optimization Stack
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Screaming Frog Crawler Technical Scan",
              "Competitor Search Auction Share Audits",
              "On-page Title & Meta Tag Rebuilds",
              "Google Search Console Indexing Setup",
              "Google Analytics 4 (GA4) Goal Mapping",
              "JSON-LD LocalBusiness & FAQ Schema Graphs",
              "Citation Consistency Alignment Checks",
              "Monthly Rank Position Audit Reports",
              "60-Day Target Indexation SLA Support",
            ].map((f, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3"
              >
                <CheckCircle className="size-5 text-brand-accent shrink-0 mt-0.5" />
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
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Crawl Diagnostics
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">
              SEO Sprints Configurations
            </h2>
          </div>
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {["crawl", "maps", "schemas"].map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                  activeTab === t
                    ? "bg-brand-accent text-white"
                    : "bg-white/5 text-slate-400 hover:bg-white/10"
                }`}
              >
                {t === "crawl" ? "Crawl Audit" : t === "maps" ? "Local Map pack" : "Schema Graphs"}
              </button>
            ))}
          </div>
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 min-h-[220px] flex flex-col justify-between">
            {activeTab === "crawl" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Technical Crawl Diagnostics
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  We resolve crawl errors (404s, 500s), duplicate canonical settings, and correct
                  robots.txt configurations to clear indexing channels.
                </p>
                <div className="flex items-center gap-2 text-xs text-brand-accent font-bold">
                  <BarChart3 className="size-4" /> Bypasses crawler loops
                </div>
              </div>
            )}
            {activeTab === "maps" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Local Map Pack Citations Sync
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Locking listing consistency across Google Business Profile, Apple Maps, Bing
                  Places, and citation sitemaps to expand your neighborhood proximity index.
                </p>
                <div className="flex items-center gap-2 text-xs text-brand-accent font-bold">
                  <TrendingUp className="size-4" /> Expands local pack search radius
                </div>
              </div>
            )}
            {activeTab === "schemas" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  JSON-LD Schema Graph Overhauls
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Build structured graph codes linking Organization, LocalBusiness, FAQ, and Service
                  data arrays so search engines index rich review snippet cards.
                </p>
                <div className="flex items-center gap-2 text-xs text-brand-accent font-bold">
                  <Code2 className="size-4" /> Injects Rich Google Snippets
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. COMPARISON MATRIX */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Contrast
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              How FHDTech Differs From Standard Agencies
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-8 rounded-3xl bg-red-100/30 border border-red-200/50">
              <h3 className="font-display text-lg font-bold text-red-800 mb-4">
                Standard SEO Agencies
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>❌ Focus on vanity traffic rankings rather than commercial conversions.</li>
                <li>❌ Write generic blog content that targets zero buyer intent.</li>
                <li>❌ Ignore Core Web Vitals speed scores and technical debt errors.</li>
                <li>❌ Deliver bloated, confusing 50-page reports without action steps.</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-emerald-100/30 border border-emerald-200/50">
              <h3 className="font-display text-lg font-bold text-emerald-800 mb-4">
                FHDTech direct-response SEO
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>✅ Focus strictly on rankings that drive calls and form bookings.</li>
                <li>✅ Target buying intent commercial search queries.</li>
                <li>✅ Clean up code parameters to target mobile Core Web Vitals scores.</li>
                <li>✅ Setup clean, interactive ranking dashboards in GA4.</li>
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
              Timeline
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Our Organic SEO Roadmap
            </h2>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-100">
            {[
              {
                d: "Month 1",
                t: "Technical Audit & Crawl Cleanup",
                desc: "Scan sitemaps, repair duplicate canonical paths, and fix redirect errors.",
              },
              {
                d: "Month 2",
                t: "On-Page Optimization & Schema Graphs",
                desc: "Build heading hierarchies, write optimized meta description tags, and inject schema codes.",
              },
              {
                d: "Month 3",
                t: "Local Citations Sync & Map Pack setup",
                desc: "Map Name, Address, and Phone data across major directory portals, raising review velocities.",
              },
              {
                d: "Month 4 & Beyond",
                t: "Authority Scaling & Rank Tracking",
                desc: "Launch ranking tracking dashboards in GA4, monitor search trends, scale content.",
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

      {/* 10. SUCCESS STORY */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Success Stories
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">SEO Ranking ROI</h2>
          </div>
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <p className="text-slate-600 italic text-base leading-relaxed">
              "FHDTech did a complete technical cleanup on our plumbing site and structured our
              service sitemaps. Within 60 days, our organic phone calls went from 15 to 75 per
              month. Our search positions stayed locked even after Google core updates."
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
              <div>
                <div className="font-display text-sm font-bold text-slate-900">Mark Miller</div>
                <div className="text-xs text-slate-400">CEO, Miller Plumbing &amp; Drain</div>
              </div>
              <div className="font-display text-xl font-bold text-brand-accent flex items-center gap-1">
                <Percent className="size-4 text-brand-accent fill-current" /> 400% Lead Expansion
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SEO TOOLS */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            Tools Stack
          </span>
          <h2 className="font-display text-2xl font-bold text-slate-900 mt-1 mb-10">
            We Optimize Using Industry Standards
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-500">
            {[
              "Ahrefs Authority Scanner",
              "Semrush Keyword Mapping",
              "Screaming Frog Crawler",
              "Local Falcon Geogrid Audit",
              "Google Search Console",
              "Google Analytics 4",
            ].map((tool) => (
              <span
                key={tool}
                className="px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 12. SEO FAQS */}
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
                q: "How long does it take to rank on Google?",
                a: "SEO is a progressive strategy. While technical crawler diagnostics and on-page tag fixes show indexation benefits in 2-4 weeks, competitive keyword ranking improvements typically take 3-6 months.",
              },
              {
                q: "Do you build backlinks?",
                a: "We focus on clean, white-hat citation buildings and directory listings that naturally improve domain authority scores without violating Google webmaster policies.",
              },
              {
                q: "How do you track conversions?",
                a: "We install Google Analytics 4 (GA4) event trackers that register phone calls, contact form submits, and calendar bookings, delivering clean ROI metrics.",
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
        <ShieldCheck className="size-12 text-brand-accent mx-auto mb-4 animate-pulse" />
        <h2 className="font-display text-2xl sm:text-3xl font-bold">
          60-Day Indexation SLA Guarantee
        </h2>
        <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
          We guarantee indexation fixes. If any technical sitemap crawl errors prevent Google from
          indexing your clean core service pages within 60 days post-launch, we resolve it at zero
          cost.
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
              <p className="text-xs text-slate-400">Founder &amp; SEO Architect</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed italic">
            "Vanity rankings that generate traffic but zero phone calls are useless. At FHDTech, we
            match the keywords directly to your core commercial offerings, making sure your organic
            SEO setup translates into booked sales call opportunities."
          </p>
        </div>
      </section>

      {/* 15. INDUSTRIES SERVED */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="font-display text-lg font-bold text-slate-950 mb-6">
            Active Industry SEO Rankings
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Emergency Plumbing",
              "HVAC Repair City Terms",
              "Dental & Orthodontics Listings",
              "E-commerce Product pages",
              "B2B SaaS Offerings",
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

      {/* 16. FINAL SEO CTA */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <h2 className="font-display text-3xl font-bold">Ready to Dominate Search Rankings?</h2>
        <p className="text-slate-300 text-sm mt-3 max-w-md mx-auto mb-8">
          Schedule a free 30-minute search strategy audit. We will scan your competitor keywords
          live.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/book-consultation"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-8 py-4 font-bold text-white shadow-xl shadow-brand-accent/20 hover:bg-brand-accent/90 transition-transform hover:-translate-y-0.5"
          >
            Start SEO Optimization Sprint
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-slate-200 hover:bg-white/10"
          >
            Request custom Quote
          </a>
        </div>
      </section>
    </div>
  );
}
