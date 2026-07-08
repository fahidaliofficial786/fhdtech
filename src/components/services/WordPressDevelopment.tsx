import { useState } from "react";
import {
  Globe,
  Sparkles,
  ArrowRight,
  HelpCircle,
  CheckCircle,
  ShieldCheck,
  Cpu,
  Layout,
  Settings,
  Database,
  Code2,
  PlayCircle,
  Star,
} from "lucide-react";

export default function WordPressDevelopment() {
  const [speedScore, setSpeedScore] = useState(45);
  const [trafficCount, setTrafficCount] = useState(5000);
  const [activeTab, setActiveTab] = useState("blocks");

  // Calculations: Google says bounce rate increases by 32% if page speed goes from 1s to 3s, and 90% if it goes to 5s.
  // We model bounce loss:
  const baselineConversion = 0.03; // 3% conversion rate
  const leadValue = 350;
  const wastedTrafficPercentage = speedScore < 50 ? 0.4 : speedScore < 80 ? 0.15 : 0.02;
  const lostLeads = Math.round(trafficCount * wastedTrafficPercentage * baselineConversion);
  const lostRevenue = lostLeads * leadValue;

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent mb-6">
            <Globe className="size-3.5" /> High-Performance WordPress Engineering
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
            Custom WordPress Development <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-emerald-400">
              Clean Blocks &amp; Fast Code
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
            Ditch bloated page builders that slow your site down. We build clean, lightweight
            Gutenberg blocks, custom PHP themes, and high-speed WooCommerce architectures.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-8 py-4 font-bold text-white shadow-xl shadow-brand-accent/20 hover:bg-brand-accent/90 transition-transform hover:-translate-y-0.5"
            >
              Request Custom WP Quote <ArrowRight className="size-5" />
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-slate-200 hover:bg-white/10 transition-colors"
            >
              Analyze My Speed Loss
            </a>
          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="bg-slate-900 border-y border-white/10 py-10 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-brand-accent">90+</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Target Mobile Speed Score
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white">&lt; 1.2s</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Average Page Load Time
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white">100%</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Custom Blocks (No Elementor)
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400">Zero</div>
            <div className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
              Bloated Builder Code
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE DEVELOPMENTS PROBLEMS */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 flex justify-center items-center gap-1">
              <Code2 className="size-4" /> Code Bloat
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-2">
              Why Standard WordPress Sites Feel Slow &amp; Bloated
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Bloated Builders",
                d: "Using builders like Elementor or Divi injects massive nested CSS and JS nodes, destroying your mobile page speed scores.",
              },
              {
                t: "Security Vulnerabilities",
                d: "Installing 30+ plugins to cover basic configurations creates backdoor loops that botnets target.",
              },
              {
                t: "Messy Admin Dashboards",
                d: "Messy custom fields force marketing reps to edit raw HTML modules, risking site breaks.",
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

      {/* 4. SPEED BOUNCE CALCULATOR */}
      <section id="calculator" className="py-20 px-6 bg-slate-900 text-white relative">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Speed Audit
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">
              Bounce Revenue Loss Estimator
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 bg-slate-950 p-8 rounded-3xl border border-white/5">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Current Mobile Speed Score: {speedScore}
                </label>
                <input
                  type="range"
                  min="10"
                  max="95"
                  step="5"
                  value={speedScore}
                  onChange={(e) => setSpeedScore(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Monthly Website Visitors: {trafficCount.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={trafficCount}
                  onChange={(e) => setTrafficCount(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900 border border-white/10 text-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                  Estimated Lost Conversions
                </span>
                <div className="font-display text-4xl sm:text-5xl font-black text-white mt-2">
                  {lostLeads} Leads
                </div>
              </div>
              <div className="my-6 border-t border-white/10 pt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Estimated Wasted Revenue
                </span>
                <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400 mt-1">
                  ${lostRevenue.toLocaleString()}{" "}
                  <span className="text-xs text-slate-400">/ month</span>
                </div>
                <p className="text-slate-400 text-[10px] mt-2">
                  Calculations assume average lead value of ${leadValue} and traffic bounce loss
                  from lags.
                </p>
              </div>
              <a
                href="/book-consultation"
                className="w-full py-3 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold rounded-xl text-sm transition-transform hover:-translate-y-0.5"
              >
                Clean My WordPress Code
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
              Lightweight Gutenberg Frameworks
            </h2>
          </div>
          <div className="grid gap-6">
            {[
              {
                icon: Layout,
                t: "Zero-Bloat Custom Gutenberg Blocks",
                d: "We build layouts strictly using native WordPress block models. Your code stays clean, modular, and extremely fast on mobile devices.",
              },
              {
                icon: Cpu,
                t: "Advanced Custom Fields (ACF Pro) mapping",
                d: "Marketers edit pages through structured, intuitive fields without touching raw HTML blocks, preventing layout breaks.",
              },
              {
                icon: Settings,
                t: "Core Web Vitals Speed Optimizations",
                d: "Deploy webp image conversions, CSS/JS minification runs, lazy loadings, and Cloudflare WAF caching configurations.",
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
              Enterprise WordPress Sprints
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Custom Gutenberg Block Theme Design",
              "ACF Pro Schema Field Mappings",
              "Clean PHP templates (Zero builder dependencies)",
              "Mobile-responsive CSS structures",
              "WooCommerce Core Optimizations",
              "Custom REST API integrations",
              "WP Security Shield Login Hardening",
              "Domain migration & DB search-replaces",
              "60-Day Post-Launch Speed Support",
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
              Technology
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">
              Modern WordPress Stack
            </h2>
          </div>
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {["blocks", "woocommerce", "hardening"].map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                  activeTab === t
                    ? "bg-brand-accent text-white"
                    : "bg-white/5 text-slate-400 hover:bg-white/10"
                }`}
              >
                {t === "blocks"
                  ? "Native Blocks"
                  : t === "woocommerce"
                    ? "WooCommerce"
                    : "Security Shield"}
              </button>
            ))}
          </div>
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 min-h-[220px] flex flex-col justify-between">
            {activeTab === "blocks" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Native Gutenberg Block Builds
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Custom blocks built strictly on WordPress native hooks. Renders clean code loops,
                  loads in milliseconds, and provides marketers with structured dashboards.
                </p>
                <div className="flex items-center gap-2 text-xs text-brand-accent font-bold">
                  <Code2 className="size-4" /> Native Blocks, Zero Bloat
                </div>
              </div>
            )}
            {activeTab === "woocommerce" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  High-Speed WooCommerce
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Optimization of database tables, disabling unused script lines, and caching
                  product queries to reduce checkout load times, preventing customer drop-offs.
                </p>
                <div className="flex items-center gap-2 text-xs text-brand-accent font-bold">
                  <Database className="size-4" /> optimized SQL product loops
                </div>
              </div>
            )}
            {activeTab === "hardening" && (
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Security Hardening Sprints
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Changing system database prefixes, setting up custom admin logins, disabling
                  standard PHP script execution in upload folders, and installing Cloudflare
                  firewall.
                </p>
                <div className="flex items-center gap-2 text-xs text-brand-accent font-bold">
                  <ShieldCheck className="size-4" /> Anti-Brute Force Protection Enabled
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. BEFORE vs. AFTER SPEED CODES */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Speed Delta
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Bloated Builders vs. Native Code
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-8 rounded-3xl bg-red-100/30 border border-red-200/50">
              <h3 className="font-display text-lg font-bold text-red-800 mb-4">
                Builder Page (Elementor/Divi)
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>❌ Heavy nested DIV elements slow down page load times.</li>
                <li>❌ 40+ plugins loaded to configure simple functions.</li>
                <li>❌ Mobile speed scores frequently fall between 30 to 50.</li>
                <li>❌ Vulnerable login directories invite botnet scripts.</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-emerald-100/30 border border-emerald-200/50">
              <h3 className="font-display text-lg font-bold text-emerald-800 mb-4">
                Native Gutenberg Build
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>✅ Native clean code loops. Average load: under 1.5 seconds.</li>
                <li>✅ Minimal plugin stack. Most features coded natively.</li>
                <li>✅ Mobile Core Web Vitals speed scores target 90+.</li>
                <li>✅ Hardened database prefixes and custom login parameters.</li>
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
              Our WP Development Roadmap
            </h2>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-100">
            {[
              {
                d: "Day 1 - 3",
                t: "Sitemap & Layout Designs",
                desc: "Design page structures, content layouts, sitemaps, and custom ACF data fields.",
              },
              {
                d: "Day 4 - 7",
                t: "Custom Block Development",
                desc: "Code custom PHP Gutenberg block layouts with CSS, avoiding heavy themes.",
              },
              {
                d: "Day 8 - 10",
                t: "ACF Fields & Page setups",
                desc: "Integrate Advanced Custom Fields (ACF) to build marketing dashboards.",
              },
              {
                d: "Day 11 - 12",
                t: "Integrations & Speed Sprints",
                desc: "Sync contact forms, stripe processors, set webp images, configure caching.",
              },
              {
                d: "Day 13 - 14",
                t: "Migration & Live Training",
                desc: "Deploy files to production servers, test speeds, training walkthrough calls.",
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
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              WordPress Page Speed ROI
            </h2>
          </div>
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <p className="text-slate-600 italic text-base leading-relaxed">
              "Our Elementor site was crawling on mobile, causing visitors to bounce. FHDTech
              rebuilt the design into native Gutenberg blocks. Our mobile speed score jumped from 38
              to 95, and we saw a 40% rise in conversion inquiries."
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
              <div>
                <div className="font-display text-sm font-bold text-slate-900">Eric Hansen</div>
                <div className="text-xs text-slate-400">CEO, Hansen Real Estate Group</div>
              </div>
              <div className="font-display text-xl font-bold text-emerald-500 flex items-center gap-1">
                <Star className="size-4 fill-current animate-pulse" /> Mobile Speed: 95
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. TECHNOLOGIES */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            Tech Stack
          </span>
          <h2 className="font-display text-2xl font-bold text-slate-900 mt-1 mb-10">
            We Code with Best Practices
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-500">
            {[
              "PHP Theme Engineering",
              "Tailwind CSS",
              "Vite JS Compiler",
              "ACF Pro Fields",
              "WooCommerce Engine",
              "WP-CLI SSH Terminal",
              "MySQL DB Scrubbing",
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

      {/* 12. WP FAQS */}
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
                q: "Why native Gutenberg blocks over Elementor?",
                a: "Elementor loads large stylesheet weights even for simple text layouts. Native Gutenberg blocks are compiled with lightweight, clean code outputs, ensuring fast mobile loading speeds.",
              },
              {
                q: "Will I be able to edit page contents easily?",
                a: "Yes. Using Advanced Custom Fields (ACF), we build structured dashboard inputs. You just fill out text fields, and the design updates automatically, avoiding breaks.",
              },
              {
                q: "Do you offer web maintenance packages post-launch?",
                a: "Yes. We offer WordPress security and speed maintenance packages starting at monthly retainers, covering core updates, file checks, and backups.",
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

      {/* 13. PERFORMANCE SLA GUARANTEE */}
      <section className="py-16 px-6 bg-slate-950 text-white text-center">
        <ShieldCheck className="size-12 text-brand-accent mx-auto mb-4 animate-pulse" />
        <h2 className="font-display text-2xl sm:text-3xl font-bold">
          90+ Mobile Speed Score SLA Guarantee
        </h2>
        <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
          We guarantee page speeds. If your custom WordPress site mobile score drops below 90 on
          Google PageSpeed Insights within the first 60 days, we optimize it at zero cost.
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
              <p className="text-xs text-slate-400">Founder &amp; WordPress Architect</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed italic">
            "Page speed is one of the most critical search ranking factors. A site that takes 4
            seconds to load loses half its traffic. We write clean, lightweight code to keep your
            WordPress speed fast, secure, and ready to convert."
          </p>
        </div>
      </section>

      {/* 15. INDUSTRIES SERVED */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="font-display text-lg font-bold text-slate-950 mb-6">
            Active Industry WordPress Setups
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "High-speed WooCommerce Shops",
              "Real Estate Listing Catalogs",
              "HVAC / Plumbing Service bookings",
              "Professional Law Firm blogs",
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

      {/* 16. FINAL WP CTA */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <h2 className="font-display text-3xl font-bold">
          Ready for a High-Speed Custom WordPress Site?
        </h2>
        <p className="text-slate-300 text-sm mt-3 max-w-md mx-auto mb-8">
          Schedule a free 30-minute web development call. We will review your current speed
          bottlenecks live.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/book-consultation"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-8 py-4 font-bold text-white shadow-xl shadow-brand-accent/20 hover:bg-brand-accent/90 transition-transform hover:-translate-y-0.5"
          >
            Start My WordPress Build
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-slate-200 hover:bg-white/10"
          >
            Request Custom Mockup
          </a>
        </div>
      </section>
    </div>
  );
}
