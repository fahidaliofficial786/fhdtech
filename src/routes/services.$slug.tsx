import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Zap,
  Target,
  Workflow,
  Rocket,
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
    <div className="bg-white">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-6 pt-8 text-xs text-slate-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link to="/" className="hover:text-brand-accent">
              Home
            </Link>
          </li>
          <ChevronRight className="size-3" />
          <li>
            <Link to="/services" className="hover:text-brand-accent">
              Services
            </Link>
          </li>
          <ChevronRight className="size-3" />
          <li className="font-medium text-brand-primary">{s.title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-10 pb-16 md:pt-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-accent">
            <Sparkles className="mr-1 inline size-3.5" /> {s.hero.kicker}
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-6xl">
            {s.hero.headline}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-slate-500">{s.hero.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              Book a free consultation <ArrowRight className="size-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition-colors hover:border-brand-accent hover:text-brand-accent"
            >
              Get a proposal
            </Link>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="border-t border-slate-100 bg-slate-50/50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-accent">
            <Target className="mr-1 inline size-3.5" /> Problems we solve
          </p>
          <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl">
            The specific pain this fixes
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {s.problems.map((p) => (
              <li
                key={p}
                className="rounded-2xl border border-slate-100 bg-white p-6 text-slate-600"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution + Features */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-accent">
              <Zap className="mr-1 inline size-3.5" /> Our solution
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-primary">
              How we deliver it
            </h2>
            <p className="mt-6 text-slate-500">{s.solution}</p>
          </div>
          <div className="md:col-span-3">
            <h3 className="font-display text-lg font-bold text-brand-primary">What's included</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-brand-primary px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-accent">
            <Rocket className="mr-1 inline size-3.5" /> Business impact
          </p>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            What this changes for your business
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {s.benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <h3 className="font-display text-xl font-bold text-white">{b.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-accent">
            <Workflow className="mr-1 inline size-3.5" /> Process
          </p>
          <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl">
            How the engagement runs
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {s.process.map((p, i) => (
              <li key={p.step} className="rounded-2xl border border-slate-100 bg-white p-6">
                <div className="mb-3 grid size-9 place-items-center rounded-full bg-brand-accent/10 text-sm font-bold text-brand-accent">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-brand-primary">{p.step}</h3>
                <p className="mt-2 text-sm text-slate-500">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries */}
      <section className="border-t border-slate-100 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold text-brand-primary">
            Industries we serve for this
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {s.industries.map((ind) => (
              <li
                key={ind}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
              >
                {ind}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50/50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl">
            Frequently asked
          </h2>
          <div className="mt-8">
            <FaqAccordion items={s.faqs} />
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-2xl font-bold text-brand-primary">Related services</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/services/$slug"
                  params={{ slug: r.slug }}
                  className="group rounded-2xl border border-slate-100 bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                    {r.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-brand-primary group-hover:text-brand-accent">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">{r.short}</p>
                  <p className="mt-4 text-xs font-bold text-brand-accent">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-brand-primary p-12 text-center text-white md:p-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Ready to start with {s.title}?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-300">
            Book a free 30-minute consultation. We'll scope the project live and give you a fixed
            proposal within 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-8 py-4 font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              Book my consultation <ArrowRight className="size-4" />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white hover:bg-white/10"
            >
              Browse all services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
