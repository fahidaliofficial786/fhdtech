import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Case Studies & Client Results — FHDTech Automation" },
      {
        name: "description",
        content:
          "Real revenue, lead volume, and automation outcomes from FHDTech clients. Read success stories about GHL setups, HIPAA intake, and AI voice agents.",
      },
      { property: "og:title", content: "Case Studies & Success Stories | FHDTech" },
      {
        property: "og:description",
        content:
          "Real results from service businesses running FHDTech's CRM & AI automation stack.",
      },
      { property: "og:url", content: "https://fhdtech.com/portfolio" },
    ],
    links: [{ rel: "canonical", href: "https://fhdtech.com/portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "FHDTech Client Case Studies",
            url: "https://fhdtech.com/portfolio",
            description:
              "Proven client outcomes, lead lifts, and business processes automated by FHDTech.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://fhdtech.com/" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Portfolio",
                  item: "https://fhdtech.com/portfolio",
                },
              ],
            },
          },
        ]),
      },
    ],
  }),
  component: PortfolioPage,
});

const CASES = [
  {
    client: "Peak Performance HVAC",
    industry: "HVAC — Phoenix, AZ",
    headline: "Doubled monthly install revenue with AI voice agents.",
    body: "Replaced a $6k/mo call center with 24/7 AI voice agents plugged into GoHighLevel. Response time dropped from 34 min to 8 seconds; booked installs jumped 287% in 90 days.",
    stats: [
      { k: "+287%", v: "Booked installs" },
      { k: "8 sec", v: "Response time" },
      { k: "-63%", v: "Cost per lead" },
    ],
  },
  {
    client: "Cardinal Realty Group",
    industry: "Real Estate — Austin, TX",
    headline: "Cut cost per qualified buyer by 61%.",
    body: "Rebuilt Facebook & Google campaigns, deployed AI qualification bots on Instagram DMs, and migrated 12k contacts into a custom GHL pipeline with automated showings.",
    stats: [
      { k: "-61%", v: "Cost / qualified buyer" },
      { k: "3.4×", v: "Showings booked" },
      { k: "12k", v: "Contacts migrated" },
    ],
  },
  {
    client: "Sterling & Bruce Law",
    industry: "Personal Injury Law — Miami, FL",
    headline: "Signed 42 new cases in the first 60 days.",
    body: "Deployed intake-qualification AI, conflict-check workflows, and a hyper-local SEO strategy targeting 14 practice-area x city pages. Ranked #1–3 for 22 primary keywords.",
    stats: [
      { k: "42", v: "New cases (60d)" },
      { k: "#1–3", v: "22 keywords" },
      { k: "94%", v: "Intake automated" },
    ],
  },
  {
    client: "BrightSmile Dental",
    industry: "Dental — Denver, CO",
    headline: "Reactivated $184k in dormant patient revenue.",
    body: "Launched hygiene-recall automation, treatment-plan follow-up sequences, and GBP review growth. Reactivated 640 dormant patients in the first quarter live.",
    stats: [
      { k: "$184k", v: "Reactivated revenue" },
      { k: "640", v: "Patients reactivated" },
      { k: "+218", v: "5-star reviews (90d)" },
    ],
  },
];

function PortfolioPage() {
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
          <li className="font-medium text-brand-primary">Case Studies</li>
        </ol>
      </nav>

      <section className="px-6 pt-10 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-accent">
            Case Studies
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-6xl">
            Real results from real service businesses.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-500">
            Every number below came from a client who was drowning in manual work before we deployed
            their FHDTech growth stack.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-8">
          {CASES.map((c, i) => (
            <article
              key={c.client}
              className="grid gap-8 rounded-3xl border border-slate-100 bg-white p-8 md:grid-cols-[1.5fr_1fr] md:p-12"
            >
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent">
                  <TrendingUp className="size-3.5" /> Case #{String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-sm font-semibold text-slate-500">{c.industry}</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-brand-primary md:text-3xl">
                  {c.headline}
                </h2>
                <p className="mt-4 text-slate-500">{c.body}</p>
                <p className="mt-6 text-sm font-semibold text-brand-primary">— {c.client}</p>
              </div>
              <div className="grid content-start gap-4">
                {c.stats.map((s) => (
                  <div key={s.v} className="rounded-2xl bg-slate-50 p-5">
                    <div className="font-display text-3xl font-bold text-brand-accent">{s.k}</div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-widest text-slate-500">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-brand-primary p-12 text-center text-white md:p-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Want your business to be the next case study?
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-accent px-8 py-4 font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            Book a strategy call <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
