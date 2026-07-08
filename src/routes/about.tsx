import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Handshake,
  Bot,
  Workflow,
  Globe,
  Search,
  Plug,
  ChevronRight,
} from "lucide-react";
import { BUSINESS, SOCIALS, TECH_STACK } from "../lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About FHDTech — Meet Fahid Ali, Founder & Automation Engineer" },
      {
        name: "description",
        content:
          "FHDTech is founded and led by Fahid Ali — a GoHighLevel automation specialist and WordPress security expert helping agencies and service businesses scale.",
      },
      { property: "og:title", content: "About FHDTech — Meet Fahid Ali" },
      {
        property: "og:description",
        content:
          "GoHighLevel, AI automation, WordPress development & malware security by Fahid Ali, founder of FHDTech.",
      },
      { property: "og:url", content: "https://fhdtech.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://fhdtech.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About FHDTech",
            url: "https://fhdtech.com/about",
            description: "Learn about FHDTech's mission, values, and founder Fahid Ali.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://fhdtech.com/" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: "https://fhdtech.com/about",
                },
              ],
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Fahid Ali",
            jobTitle: "Founder & Lead Automation Engineer",
            worksFor: {
              "@type": "Organization",
              name: "FHDTech",
              url: "https://fhdtech.com",
            },
            sameAs: [
              "https://www.linkedin.com/in/fahidaliofficial",
              "https://github.com/fahidaliofficial",
              "https://youtube.com/@FHDtech",
              "https://www.instagram.com/fahidaliofficial",
              "https://facebook.com/fahidaliofficial",
              "https://twitter.com/fahidali0",
            ],
          },
        ]),
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Target,
    title: "Outcomes over deliverables",
    desc: "Every build is judged by the revenue it generates and the hours it reclaims — not the tools it uses.",
  },
  {
    icon: Zap,
    title: "Speed with precision",
    desc: "Most GoHighLevel automations ship in 48–72 hours. Complex, multi-system builds get the extra time they deserve.",
  },
  {
    icon: Shield,
    title: "Security-first engineering",
    desc: "From malware-recovered WordPress sites to hardened APIs — nothing ships without production-grade security.",
  },
  {
    icon: Handshake,
    title: "Ongoing partnership",
    desc: "Support does not end at delivery. Continuous optimization keeps every workflow and website running smoothly.",
  },
];

const EXPERTISE = [
  { icon: Workflow, label: "GoHighLevel automation & CRM builds" },
  { icon: Bot, label: "AI employee bots for lead qualification" },
  { icon: Plug, label: "Zapier, Make.com & custom API integrations" },
  { icon: Globe, label: "WordPress development & WooCommerce" },
  { icon: Shield, label: "Malware removal & security hardening" },
  { icon: Search, label: "Technical SEO & Google Business Profile" },
];

function AboutPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-6 pt-8 text-xs text-slate-500">
        <ol className="flex items-center gap-1.5">
          <li>
            <Link to="/" className="hover:text-brand-accent">
              Home
            </Link>
          </li>
          <ChevronRight className="size-3" />
          <li className="font-medium text-brand-primary">About</li>
        </ol>
      </nav>
      {/* HERO */}
      <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-accent">
            About FHDTech
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-6xl">
            Automation, AI, and security &mdash; built by one specialist you can actually talk to.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-500">
            FHDTech is the studio of <strong>Fahid Ali</strong> &mdash; a GoHighLevel automation
            engineer and WordPress security specialist helping marketing agencies, e-commerce
            brands, and service businesses replace manual work with reliable systems.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-6 py-3 font-semibold text-white hover:-translate-y-0.5"
            >
              Book a free consultation <ArrowRight className="size-4" />
            </a>
            <a
              href={BUSINESS.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3 font-semibold text-brand-primary hover:bg-slate-50"
            >
              View live portfolio
            </a>
          </div>
        </div>
      </section>

      {/* MEET THE FOUNDER */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-accent">
            Meet the founder
          </p>
          <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl">
            Fahid Ali &mdash; founder, automation engineer, security specialist.
          </h2>
          <div className="mt-8 space-y-5 text-slate-600 md:text-lg">
            <p>
              I started FHDTech to solve a single, expensive problem I kept seeing: businesses
              paying for tools they never fully used, losing leads inside broken CRMs, and running
              websites that were one exploit away from disaster.
            </p>
            <p>
              Today I build sophisticated <strong>GoHighLevel</strong> automations &mdash; AI
              booking agents, multi-channel nurture sequences, SaaS snapshots, and pipeline systems
              that keep agencies and service businesses running while their teams sleep. On the
              other side of the business, I develop and rescue <strong>WordPress</strong> sites:
              custom themes and plugins, WooCommerce, malware cleanup, and Google-blacklist
              recovery.
            </p>
            <p>
              Every project on this site is real work delivered for real clients. You can review the
              portfolio, browse 130+ verified reviews on Fiverr, or book a free 30-minute call to
              talk through your own project.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-600 hover:border-brand-accent/40 hover:text-brand-primary"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent">
              <Compass className="size-3.5" /> Mission
            </div>
            <h2 className="font-display text-3xl font-bold text-brand-primary">
              Replace manual work with systems that pay for themselves.
            </h2>
            <p className="mt-6 text-slate-500">
              Every automation FHDTech ships is measured against a simple bar: does it save the
              client meaningful hours, recover missed revenue, or protect them from a real risk? If
              it does not, it does not ship.
            </p>
          </div>
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent">
              <TrendingUp className="size-3.5" /> Vision
            </div>
            <h2 className="font-display text-3xl font-bold text-brand-primary">
              A world where small teams operate like enterprise ones.
            </h2>
            <p className="mt-6 text-slate-500">
              AI, CRM automation, and modern web tooling have collapsed the gap between a two-person
              business and a Fortune 500 stack. FHDTech exists to hand that leverage to the people
              who need it most.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-accent">
              Core expertise
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl">
              What I build, ship, and support.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {EXPERTISE.map((e) => {
              const Icon = e.icon;
              return (
                <div
                  key={e.label}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Icon className="size-5" />
                  </span>
                  <p className="font-semibold text-brand-primary">{e.label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-100 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Technical arsenal
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {TECH_STACK.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-accent">
              How I work
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl">
              The principles behind every build.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl border border-slate-100 bg-white p-8">
                  <div className="mb-5 grid size-12 place-items-center rounded-xl bg-brand-accent/10 text-brand-accent">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-primary">{v.title}</h3>
                  <p className="mt-3 text-slate-500">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-brand-primary p-12 text-center text-white md:p-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Let&rsquo;s talk about your project.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-300">
            Book a free 30-minute consultation. We&rsquo;ll review your current setup and map the
            fastest path to automation, security, or growth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-8 py-4 font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              Book on Calendly <ArrowRight className="size-4" />
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-bold text-white hover:bg-white/5"
            >
              WhatsApp Fahid
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
