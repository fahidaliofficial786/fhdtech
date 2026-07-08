import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  CalendarCheck,
  Target,
  Bot,
  Users,
  Search,
  Globe,
  MapPin,
  Zap,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Award,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Clock,
  Video,
  DollarSign,
  ClipboardList,
  Home,
  Wrench,
  Building2,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { BUSINESS, METRICS } from "@/lib/business";
import { FaqAccordion } from "@/components/site/FaqAccordion";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book a Free Strategy Call — FHDTech CRM & AI Consultation" },
      {
        name: "description",
        content:
          "Schedule a free 30-minute growth strategy call with Fahid Ali of FHDTech. Get a custom roadmap for GoHighLevel setups, AI chatbots, and lead conversion.",
      },
      { property: "og:title", content: "Book a Free Consultation | FHDTech" },
      {
        property: "og:description",
        content: "Book a free 30-minute CRM, AI, and growth strategy call with Fahid Ali.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://fhdtech.com/book-consultation" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Book a Free Consultation | FHDTech" },
      {
        name: "twitter:description",
        content: "Free 30-minute strategy call with Fahid Ali. Get a custom CRM & AI roadmap.",
      },
    ],
    links: [{ rel: "canonical", href: "https://fhdtech.com/book-consultation" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Book Consultation",
            url: "https://fhdtech.com/book-consultation",
            description: "Schedule a free 30-minute strategy session with FHDTech.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://fhdtech.com/" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Book Consultation",
                  item: "https://fhdtech.com/book-consultation",
                },
              ],
            },
          },
        ]),
      },
    ],
  }),
  component: BookConsultationPage,
});

const DISCUSSION_ITEMS = [
  {
    icon: Target,
    title: "Business Goals",
    desc: "Where you want revenue, bookings, and team capacity in the next 90 days.",
  },
  {
    icon: Users,
    title: "CRM Strategy",
    desc: "How to structure your pipeline in GoHighLevel so no lead falls through cracks.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Which workflows an AI employee can run for you 24/7 — chat, voice, follow-up.",
  },
  {
    icon: Zap,
    title: "Lead Generation",
    desc: "Which channels will produce booked calls fastest for your industry.",
  },
  {
    icon: Globe,
    title: "Website Improvements",
    desc: "What's costing you conversions on your current site and how to fix it.",
  },
  {
    icon: Search,
    title: "SEO Strategy",
    desc: "The keywords, content, and technical fixes that will rank you locally.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    desc: "How to dominate the map pack and turn reviews into a growth engine.",
  },
  {
    icon: MessageCircle,
    title: "Q&A Session",
    desc: "Bring your hardest questions — you leave with a clear next step.",
  },
];

const WHY_US = [
  {
    icon: Award,
    title: "130+ Projects Delivered",
    desc: "Real production systems for agencies and service businesses worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Deep Technical Expertise",
    desc: "GoHighLevel, WordPress, APIs, AI voice, and workflow automation under one roof.",
  },
  {
    icon: Sparkles,
    title: "Personalized Strategy",
    desc: "No cookie-cutter deck. Recommendations are built for your business, budget, and stack.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused",
    desc: "Every recommendation ties back to booked calls, closed deals, and hours saved.",
  },
];

const AUDIENCE = [
  { icon: Home, label: "Real Estate" },
  { icon: Wrench, label: "HVAC & Home Services" },
  { icon: Building2, label: "Local Businesses" },
  { icon: Rocket, label: "Marketing Agencies" },
  { icon: Users, label: "Small Businesses" },
  { icon: TrendingUp, label: "Growing Companies" },
];

const PROCESS = [
  {
    step: "01",
    title: "Book Your Time",
    desc: "Pick a 30-minute slot below that fits your schedule. Instant confirmation.",
  },
  {
    step: "02",
    title: "Receive Confirmation",
    desc: "Get a Google Meet link, prep checklist, and calendar invite in your inbox.",
  },
  {
    step: "03",
    title: "Strategy Call",
    desc: "We audit your funnel, CRM, and automations live — you ask anything.",
  },
  {
    step: "04",
    title: "Custom Growth Plan",
    desc: "Leave with a written 90-day roadmap. No hard sell, no obligation.",
  },
];

const FAQS = [
  {
    q: "How long is the consultation?",
    a: "The call is 30 minutes — enough to audit your setup, share strategy, and answer your top questions. If we go deeper, we'll book a follow-up.",
  },
  {
    q: "Is it really free?",
    a: "Yes. There's no cost, no credit card, and no sales pitch. You get value whether or not you decide to work with FHDTech.",
  },
  {
    q: "How should I prepare?",
    a: "Come with your top 2–3 business goals, your current tools (CRM, website, ads), and any bottleneck that's slowing growth. That's it.",
  },
  {
    q: "What platform is the meeting on?",
    a: "Google Meet by default — the link arrives in your confirmation email. Zoom is available on request.",
  },
  {
    q: "What's your availability?",
    a: "Multiple slots are open Monday–Saturday across GMT+5 timezones. Pick anything in the calendar below that works for you.",
  },
  {
    q: "What happens after the call?",
    a: "You receive a written summary and a proposed roadmap within 48 hours. If it's a fit, we scope a project. If not, the plan is yours to keep.",
  },
];

function BookConsultationPage() {
  useEffect(() => {
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-6 pt-8 text-xs text-slate-500">
        <ol className="flex items-center gap-1.5">
          <li>
            <Link to="/" className="hover:text-brand-accent">
              Home
            </Link>
          </li>
          <ChevronRight className="size-3" />
          <li className="font-medium text-brand-primary">Book Consultation</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-primary via-brand-primary to-slate-900 px-6 pb-20 pt-16 text-white md:pt-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
            <CalendarCheck className="size-3.5" /> Free 30-Minute Strategy Call
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Book a free consultation with Fahid Ali.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Get a custom growth plan for your CRM, AI automations, website, and lead generation —
            engineered for service businesses ready to scale without more manual work.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4 text-brand-accent" /> 30 minutes
            </span>
            <span className="inline-flex items-center gap-2">
              <Video className="size-4 text-brand-accent" /> Google Meet
            </span>
            <span className="inline-flex items-center gap-2">
              <DollarSign className="size-4 text-brand-accent" /> $0 · No obligation
            </span>
            <span className="inline-flex items-center gap-2">
              <ClipboardList className="size-4 text-brand-accent" /> Custom roadmap included
            </span>
          </div>
          <a
            href="#booking"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-brand-accent/40 transition-transform hover:-translate-y-0.5"
          >
            Pick a time below <ArrowRight className="size-4" />
          </a>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur"
              >
                <p className="font-display text-3xl font-bold text-white">
                  {m.end}
                  {m.suffix}
                </p>
                <p className="mt-1 text-xs text-white/60">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We'll Discuss */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              The Agenda
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-primary md:text-4xl">
              What we'll discuss on the call.
            </h2>
            <p className="mt-4 text-slate-500">
              A working session — not a demo. We look at where your business is today, what's
              leaking revenue, and the fastest path to more booked calls.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {DISCUSSION_ITEMS.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-brand-accent/5"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-brand-primary/5 text-brand-primary">
                  <d.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-brand-primary">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With FHDTech */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Why FHDTech
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-primary md:text-4xl">
              You're talking to the person who builds the systems.
            </h2>
            <p className="mt-4 text-slate-500">
              No account managers, no junior team relaying answers. Fahid Ali runs the call and
              designs the plan personally.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((w) => (
              <div key={w.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="grid size-11 place-items-center rounded-xl bg-brand-accent/10 text-brand-accent">
                  <w.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-brand-primary">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Ideal For
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-primary md:text-4xl">
              Built for service-based businesses ready to scale.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {AUDIENCE.map((a) => (
              <div
                key={a.label}
                className="flex flex-col items-start gap-3 rounded-xl border border-slate-100 bg-white p-5"
              >
                <a.icon className="size-6 text-brand-accent" />
                <p className="text-sm font-semibold text-brand-primary">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              How It Works
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-primary md:text-4xl">
              A simple 4-step process.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="font-display text-4xl font-bold text-brand-accent/30">{p.step}</p>
                <h3 className="mt-3 font-display text-lg font-bold text-brand-primary">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Calendly */}
      <section id="booking" className="px-6 py-20 scroll-mt-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Pick Your Time
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-primary md:text-4xl">
              Book your free strategy call.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Choose a slot that works for you. Confirmation lands in your inbox instantly with the
              Google Meet link and prep checklist.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-brand-primary/5">
            <div
              className="calendly-inline-widget"
              data-url={BUSINESS.calendly}
              style={{ minWidth: "320px", height: "760px" }}
            />
            <noscript>
              <div className="p-8 text-center text-sm text-slate-500">
                Enable JavaScript to load the booking calendar, or{" "}
                <a href={BUSINESS.calendly} className="text-brand-accent underline">
                  open it directly
                </a>
                .
              </div>
            </noscript>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-500" /> Free 30 minutes
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-500" /> No credit card
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-500" /> Custom roadmap included
            </span>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">FAQs</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-primary md:text-4xl">
              Common questions about the consultation.
            </h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-brand-primary p-12 text-center text-white md:p-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Ready to build a business that runs itself?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            One 30-minute call could be the shortcut you've been looking for.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-brand-accent/40 transition-transform hover:-translate-y-0.5"
            >
              <CalendarCheck className="size-4" /> Book my free call
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
