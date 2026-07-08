import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Workflow,
  Search,
  Globe,
  Plug,
  Star,
  Home,
  Store,
  Megaphone,
  Briefcase,
  Shield,
  Wrench,
  CheckCircle2,
  MessageCircle,
  CalendarCheck,
  TrendingUp,
  Users,
  DollarSign,
  Sparkles,
  Zap,
} from "lucide-react";
import { AnimatedCounter } from "../components/site/AnimatedCounter";
import { FaqAccordion } from "../components/site/FaqAccordion";
import { BUSINESS, METRICS } from "../lib/business";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FHDTech — GoHighLevel Expert, AI CRM Automation & WordPress Agency" },
      {
        name: "description",
        content:
          "FHDTech builds high-performance GoHighLevel CRM setups, custom AI voice agents, and secures WordPress websites. Hire Fahid Ali, certified GoHighLevel expert, to scale your operations.",
      },
      { property: "og:title", content: "FHDTech — GoHighLevel Expert & AI Automation Agency" },
      {
        property: "og:description",
        content:
          "High-converting GoHighLevel CRM setups, AI customer agents, and custom WordPress development by Fahid Ali. 130+ projects completed with 4.9★ rating.",
      },
      { property: "og:url", content: "https://fhdtech.com" },
      { property: "og:image", content: "https://fhdtech.com/favicon.svg" },
    ],
    links: [{ rel: "canonical", href: "https://fhdtech.com" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "FHDTech",
            image: "https://fhdtech.com/favicon.svg",
            logo: "https://fhdtech.com/favicon.svg",
            founder: {
              "@type": "Person",
              name: "Fahid Ali",
              sameAs: [
                "https://www.linkedin.com/in/fahidaliofficial",
                "https://github.com/fahidaliofficial",
                "https://twitter.com/fahidali0",
              ],
            },
            description:
              "GoHighLevel CRM expert builds, AI booking chatbots, custom WordPress engineering, and malware security solutions.",
            url: "https://fhdtech.com",
            telephone: "+923484103239",
            email: "Fahaidaliofficial@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressCountry: "PK",
              addressLocality: "Lahore",
            },
            sameAs: [
              "https://www.linkedin.com/in/fahidaliofficial",
              "https://github.com/fahidaliofficial",
              "https://youtube.com/@FHDtech",
              "https://www.instagram.com/fahidaliofficial",
              "https://facebook.com/fahidaliofficial",
              "https://twitter.com/fahidali0",
              "https://vm.tiktok.com/fahidaliofficial",
              "https://t.me/Fahidaliofficial",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "130",
            },
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Canada" },
              { "@type": "Country", name: "Australia" },
              { "@type": "Country", name: "Pakistan" },
            ],
            priceRange: "$$",
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "FHDTech",
            url: "https://fhdtech.com",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://fhdtech.com/services?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          },
        ]),
      },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  {
    icon: Bot,
    title: "AI Employee Automations",
    slug: "ai-automation",
    desc: "Trained AI bots that pre-qualify leads, book appointments, and handle customer support 24/7 — inside GoHighLevel or standalone.",
    tags: ["AI Booking", "Lead Qualification", "24/7 Support"],
  },
  {
    icon: Workflow,
    title: "Complex GHL Workflows",
    slug: "gohighlevel-workflow-automation",
    desc: "Automated lead nurturing sequences, dynamic sales pipelines, onboarding flows, and SaaS snapshots inside GoHighLevel.",
    tags: ["Pipelines", "Snapshots", "Nurture Sequences"],
  },
  {
    icon: Plug,
    title: "Zapier, Make & Custom APIs",
    slug: "business-process-automation",
    desc: "Seamlessly connect GoHighLevel to your existing tech stack with Zapier, Make.com, and custom webhooks.",
    tags: ["Zapier", "Make.com", "Webhooks"],
  },
  {
    icon: Globe,
    title: "Custom WordPress Development",
    slug: "wordpress-development",
    desc: "Bespoke themes, plugin development, WooCommerce, and API integrations — built for performance and search.",
    tags: ["WooCommerce", "Custom Plugins", "Elementor"],
  },
  {
    icon: Shield,
    title: "Malware Removal & Recovery",
    slug: "wordpress-malware-removal",
    desc: "Emergency cleanup of hacked sites, backdoor removal, and Google blacklist recovery — most sites restored in 24–72 hours.",
    tags: ["Malware Cleanup", "Blacklist Recovery", "Hardening"],
  },
  {
    icon: Search,
    title: "SEO & Google Business Profile",
    slug: "google-business-profile-optimization",
    desc: "Technical SEO, local ranking strategy, and Google Business Profile optimization for service-based businesses.",
    tags: ["Local SEO", "GBP", "Technical SEO"],
  },
] as const;

const PROCESS = [
  {
    n: "01",
    title: "Discovery & Strategy",
    desc: "A deep dive into your business goals, current workflows, and pain points — mapping the ideal solution before a single line of code.",
  },
  {
    n: "02",
    title: "Design & Build",
    desc: "Custom workflows, integrations, or security hardening — engineered around your brand and stack, not off-the-shelf templates.",
  },
  {
    n: "03",
    title: "Testing & Refinement",
    desc: "Rigorous testing in staging environments. Everything is refined until it works flawlessly before going live.",
  },
  {
    n: "04",
    title: "Launch & Support",
    desc: "Smooth deployment, team training, documentation, and ongoing support to keep every system running long-term.",
  },
];

const INDUSTRIES = [
  { icon: Home, label: "Real Estate" },
  { icon: Store, label: "E-commerce" },
  { icon: Megaphone, label: "Marketing Agencies" },
  { icon: Briefcase, label: "Coaches & Consultants" },
  { icon: Wrench, label: "Home Services" },
  { icon: Shield, label: "Local Businesses" },
];

const FAQS = [
  {
    q: "How long does an automation build take?",
    a: "Most standard GoHighLevel setups are completed within 48–72 hours. For complex, multi-system automations it can take a bit longer, but efficiency is always prioritized.",
  },
  {
    q: "How do I know if my WordPress site is hacked?",
    a: "Common signs include unusual traffic spikes, defaced homepages, unwanted pop-ups, redirects to malicious sites, and warnings from Google or your hosting provider. If you suspect anything, get a professional scan immediately.",
  },
  {
    q: "Will you get my site off Google's blacklist?",
    a: "Yes. After cleaning the site, a review request is submitted to Google and other blacklisting authorities. This process typically takes 24–72 hours for the site to be reviewed and delisted.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes — I don't disappear after delivery. Continuous support, optimization, and updates keep all your systems and websites running smoothly.",
  },
  {
    q: "Can you migrate me from another CRM into GoHighLevel?",
    a: "Yes. Migrations from HubSpot, Pipedrive, ActiveCampaign, and other CRMs are handled end-to-end, including contact data, pipelines, and existing automations.",
  },
];

// Verified from portfolio.fhdtech.com — real client success stories.
const CASE_STUDIES = [
  {
    industry: "Marketing Agency",
    title: "SaaS Platform Setup",
    quote:
      "Fahid transformed our agency by setting up a complete GHL SaaS platform. We can now white-label and sell to our clients, creating a new revenue stream. The setup was flawless and he trained our entire team.",
    stat: "+$50K",
    statLabel: "New revenue",
  },
  {
    industry: "E-commerce Brand",
    title: "Cart Recovery System",
    quote:
      "The abandoned cart recovery automation Fahid built increased our revenue by 18% in the first month. Multi-channel follow-ups (Email, SMS, Voice) recovered carts we were losing. ROI was immediate.",
    stat: "+18%",
    statLabel: "Revenue lift",
  },
];

function HomePage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[700px] max-w-6xl bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.18),_transparent_60%)] blur-2xl"
        />
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand-accent" />
            </span>
            Growth Systems for Service Businesses
          </div>
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-primary sm:text-5xl md:text-7xl">
            Get more leads. Close more sales.{" "}
            <span className="italic text-brand-accent">Scale faster.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base text-slate-500 md:text-lg">
            FHDTech helps service businesses generate a predictable flow of leads, automate sales
            &amp; follow-ups, and grow revenue — without hiring a bigger team. One partner for your{" "}
            <strong>CRM, AI, ads, SEO, and website</strong>.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/book-consultation"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-accent to-brand-accent/85 px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-accent/30 transition-transform hover:-translate-y-0.5 md:text-lg"
            >
              <CalendarCheck className="size-5" />
              Book Free Growth Strategy Call
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-bold text-brand-primary transition-colors hover:bg-slate-50 md:text-lg"
            >
              See Case Studies
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-brand-accent" /> 30% average lead lift
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-brand-accent" /> 15+ hrs/week saved
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-brand-accent" /> 130+ businesses served
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-brand-accent" /> 4.9★ average rating
            </span>
          </div>
        </div>

        <GrowthDashboardHero />
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">
            Tools &amp; platforms I build on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-slate-500">
            {[
              "GoHighLevel",
              "WordPress",
              "WooCommerce",
              "Zapier",
              "Make.com",
              "ChatGPT",
              "Twilio",
              "Elementor",
            ].map((n) => (
              <span
                key={n}
                className="font-display text-lg font-semibold tracking-tight opacity-70 grayscale transition-opacity hover:opacity-100"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-accent">
                Core capabilities
              </p>
              <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl">
                Automation, integrations, websites, and security &mdash; one specialist.
              </h2>
              <p className="mt-4 text-slate-500">
                Every service on this list is delivered personally by Fahid &mdash; not outsourced,
                not templated.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-b-2 border-brand-accent/30 pb-1 font-semibold text-brand-accent hover:border-brand-accent"
            >
              Explore all services <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-brand-accent/5"
                >
                  <div className="mb-6 grid size-12 place-items-center rounded-xl bg-brand-accent/10 text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-white">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-primary">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-accent">
                    Learn more <ArrowRight className="size-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* METRICS — verified from portfolio.fhdtech.com */}
      <section className="bg-brand-primary py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-10 text-center text-xs font-bold uppercase tracking-widest text-slate-400">
            Proven impact &amp; results
          </p>
          <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label}>
                <div className="font-display text-4xl font-bold text-white md:text-5xl">
                  <AnimatedCounter
                    end={m.end}
                    suffix={m.suffix}
                    decimals={"decimals" in m ? m.decimals : 0}
                  />
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-widest text-slate-400 md:text-sm">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-accent">
              How I work
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl">
              A systematic approach that delivers maximum value.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              Every project runs through the same four phases &mdash; so nothing gets missed and
              every deliverable meets your exact requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div
                key={p.n}
                className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8"
              >
                <div className="pointer-events-none absolute top-4 right-6 font-display text-6xl font-black text-brand-accent/10">
                  {p.n}
                </div>
                <h4 className="font-display text-lg font-bold text-brand-primary">{p.title}</h4>
                <p className="mt-3 text-sm text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-accent">
              Who I work with
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl">
              Built for agencies, e-commerce, and service businesses.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {INDUSTRIES.map((i) => {
              const Icon = i.icon;
              return (
                <Link
                  key={i.label}
                  to="/industries"
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white p-5 text-center transition-colors hover:border-brand-accent/30 hover:bg-slate-50"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-semibold text-brand-primary">{i.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASE STUDIES — real testimonials from portfolio */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-accent">
              Client success stories
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl">
              Real projects. Real revenue.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {CASE_STUDIES.map((c) => (
              <article key={c.title} className="rounded-3xl border border-slate-100 bg-white p-10">
                <div className="mb-4 flex gap-1 text-brand-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {c.industry}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-brand-primary">
                  {c.title}
                </h3>
                <blockquote className="mt-5 text-slate-600">&ldquo;{c.quote}&rdquo;</blockquote>
                <div className="mt-8 flex items-end justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-3xl font-bold text-brand-primary">
                      {c.stat}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-widest text-slate-500">
                      {c.statLabel}
                    </div>
                  </div>
                  <Link
                    to="/portfolio"
                    className="text-sm font-semibold text-brand-accent hover:underline"
                  >
                    More case studies &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Prefer to see raw reviews?{" "}
            <a
              href={BUSINESS.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-accent hover:underline"
            >
              Browse 130+ Fiverr reviews &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-accent">
              FAQ
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl">
              Frequently asked questions.
            </h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-brand-primary">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-brand-accent/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-brand-accent/20 blur-3xl"
          />
          <div className="relative z-10 px-8 py-20 text-center md:px-16">
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold text-white md:text-5xl">
              Ready to elevate your business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-slate-300 md:text-lg">
              Have a project in mind or need emergency help? Send a message or book a free 30-minute
              consultation call directly with Fahid.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/book-consultation"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-brand-primary shadow-2xl shadow-black/20 transition-colors hover:bg-brand-accent hover:text-white"
              >
                <CalendarCheck className="size-5" /> Book on Calendly
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-10 py-5 text-lg font-bold text-white hover:bg-white/5"
              >
                <MessageCircle className="size-5" /> WhatsApp chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function GrowthDashboardHero() {
  const bars = [38, 52, 44, 68, 61, 82, 74, 96];
  return (
    <div className="relative mx-auto mt-16 max-w-6xl md:mt-20">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-brand-accent/25 via-brand-primary/10 to-transparent blur-2xl"
      />
      <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/80 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-red-400/70" />
            <span className="size-2.5 rounded-full bg-yellow-400/70" />
            <span className="size-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold text-slate-400 sm:flex">
            <Shield className="size-3 text-emerald-500" />
            app.fhdtech.com / growth
          </div>
          <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-emerald-500">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
            Live
          </div>
        </div>

        <div className="grid gap-4 p-4 sm:p-5 md:grid-cols-12 md:gap-5">
          {/* KPI row */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                {
                  icon: Users,
                  label: "New leads",
                  value: "1,284",
                  trend: "+32%",
                  tint: "text-brand-accent",
                },
                {
                  icon: CalendarCheck,
                  label: "Bookings",
                  value: "312",
                  trend: "+41%",
                  tint: "text-emerald-500",
                },
                {
                  icon: DollarSign,
                  label: "Revenue",
                  value: "$184K",
                  trend: "+27%",
                  tint: "text-brand-primary",
                },
                {
                  icon: Star,
                  label: "Reviews",
                  value: "4.9★",
                  trend: "+87",
                  tint: "text-amber-500",
                },
              ].map((k) => (
                <div
                  key={k.label}
                  className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <k.icon className={`size-4 ${k.tint}`} />
                    <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600">
                      <ArrowUpRight className="size-2.5" />
                      {k.trend}
                    </span>
                  </div>
                  <p className="mt-3 font-display text-xl font-bold text-brand-primary">
                    {k.value}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    {k.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Revenue chart */}
            <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Revenue growth
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-brand-primary">
                    $184,320 <span className="text-sm font-semibold text-emerald-500">▲ 27%</span>
                  </p>
                </div>
                <div className="hidden gap-1 sm:flex">
                  {["7D", "30D", "90D"].map((r, i) => (
                    <span
                      key={r}
                      className={`rounded-md px-2 py-1 text-[10px] font-bold ${
                        i === 1 ? "bg-brand-primary text-white" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 h-32">
                <svg viewBox="0 0 320 120" className="h-full w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="rev" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.62 0.19 256)" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="oklch(0.62 0.19 256)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,90 C40,80 60,70 90,60 C120,50 140,45 170,35 C200,25 230,20 260,15 C280,12 300,10 320,8 L320,120 L0,120 Z"
                    fill="url(#rev)"
                  />
                  <path
                    d="M0,90 C40,80 60,70 90,60 C120,50 140,45 170,35 C200,25 230,20 260,15 C280,12 300,10 320,8"
                    fill="none"
                    stroke="oklch(0.62 0.19 256)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="mt-1 flex justify-between text-[10px] font-semibold text-slate-400">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Pipeline + Reviews + Ads */}
          <div className="space-y-4 md:col-span-4">
            {/* CRM Pipeline */}
            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  CRM Pipeline
                </p>
                <span className="text-[10px] font-semibold text-brand-accent">GoHighLevel</span>
              </div>
              <div className="mt-3 space-y-2">
                {[
                  { stage: "New Leads", count: 128, w: "w-full", color: "bg-brand-accent" },
                  { stage: "Qualified", count: 74, w: "w-3/4", color: "bg-brand-primary" },
                  { stage: "Booked Calls", count: 41, w: "w-1/2", color: "bg-emerald-500" },
                  { stage: "Closed Won", count: 22, w: "w-1/3", color: "bg-amber-500" },
                ].map((s) => (
                  <div key={s.stage}>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-slate-600">{s.stage}</span>
                      <span className="font-bold text-brand-primary">{s.count}</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <div className={`h-full ${s.w} ${s.color} rounded-full`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Workflow */}
            <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-brand-primary to-slate-900 p-4 text-white shadow-sm">
              <div className="flex items-center gap-2">
                <div className="grid size-7 place-items-center rounded-lg bg-white/10">
                  <Bot className="size-3.5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                    AI Employee
                  </p>
                  <p className="text-xs font-semibold">Running 24/7</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                  <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Active
                </span>
              </div>
              <div className="mt-3 space-y-1.5 text-[11px]">
                {[
                  { i: Zap, t: "Lead captured → SMS in 6s" },
                  { i: MessageCircle, t: "Qualified via AI chat" },
                  { i: CalendarCheck, t: "Booked appointment" },
                  { i: Sparkles, t: "5-star review requested" },
                ].map((r, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-lg bg-white/5 px-2 py-1.5"
                  >
                    <r.i className="size-3 text-brand-accent" />
                    <span className="text-white/85">{r.t}</span>
                    <CheckCircle2 className="ml-auto size-3 text-emerald-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row: Ads + Leads chart */}
          <div className="md:col-span-8">
            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Leads by channel
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">Last 30 days</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-500">
                  <TrendingUp className="size-3.5" /> +38%
                </span>
              </div>
              <div className="mt-4 flex h-24 items-end gap-2">
                {bars.map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-brand-accent/70 to-brand-accent"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[9px] font-semibold text-slate-400">W{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Google Ads
                </p>
                <span className="text-[10px] font-bold text-emerald-500">ROAS 6.4x</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                <div className="rounded-lg bg-slate-50 p-2">
                  <p className="font-display text-lg font-bold text-brand-primary">$2.14</p>
                  <p className="text-[9px] font-semibold uppercase tracking-widest text-slate-400">
                    Cost/lead
                  </p>
                </div>
                <div className="rounded-lg bg-slate-50 p-2">
                  <p className="font-display text-lg font-bold text-brand-primary">8.7%</p>
                  <p className="text-[9px] font-semibold uppercase tracking-widest text-slate-400">
                    CTR
                  </p>
                </div>
                <div className="col-span-2 flex items-center gap-2 rounded-lg bg-amber-50 p-2 text-left">
                  <Star className="size-4 fill-amber-400 text-amber-400" />
                  <div>
                    <p className="text-xs font-bold text-brand-primary">+87 new reviews</p>
                    <p className="text-[10px] text-slate-500">Auto-requested via workflow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
