import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, ArrowRight, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "FHDTech Blog — GoHighLevel CRM, AI & Growth Guides" },
      {
        name: "description",
        content:
          "Expert playbooks and step-by-step guides on GoHighLevel setups, Twilio A2P compliance, AI agents, local map rankings, and CRM pipelines.",
      },
      { property: "og:title", content: "FHDTech Growth Blog" },
      {
        property: "og:description",
        content:
          "CRM configurations, automation tips, and WordPress security guides from Fahid Ali.",
      },
      { property: "og:url", content: "https://fhdtech.com/blog" },
    ],
    links: [{ rel: "canonical", href: "https://fhdtech.com/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "FHDTech Growth Blog",
            url: "https://fhdtech.com/blog",
            description:
              "Practical automation, CRM configuration, and local SEO guides for service agencies.",
            publisher: {
              "@type": "Organization",
              name: "FHDTech",
              logo: {
                "@type": "ImageObject",
                url: "https://fhdtech.com/favicon.svg",
              },
            },
            blogPost: [
              {
                "@type": "BlogPosting",
                headline: "The 14-day GoHighLevel deployment playbook we use for every client",
                description:
                  "The exact sequence, snapshots, and integrations that let us launch a full CRM inside two weeks.",
                url: "https://fhdtech.com/blog",
                author: { "@type": "Person", name: "Fahid Ali" },
              },
              {
                "@type": "BlogPosting",
                headline: "AI voice agents vs. human answering services: the honest ROI breakdown",
                description:
                  "Real numbers from four service businesses that swapped a $6k/mo call center for AI agents.",
                url: "https://fhdtech.com/blog",
                author: { "@type": "Person", name: "Fahid Ali" },
              },
              {
                "@type": "BlogPosting",
                headline:
                  "LLM SEO: how to rank inside ChatGPT, Perplexity, and Google AI Overviews",
                description:
                  "The new citation-ready content structure our clients use to appear in AI answers.",
                url: "https://fhdtech.com/blog",
                author: { "@type": "Person", name: "Fahid Ali" },
              },
            ],
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://fhdtech.com/" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://fhdtech.com/blog",
                },
              ],
            },
          },
        ]),
      },
    ],
  }),
  component: BlogPage,
});

const CATEGORIES = [
  "GoHighLevel",
  "CRM",
  "Automation",
  "AI",
  "SEO",
  "Google Ads",
  "Facebook Ads",
  "Google Business Profile",
  "Lead Generation",
  "Business Growth",
];

const POSTS = [
  {
    cat: "GoHighLevel",
    title: "The 14-day GoHighLevel deployment playbook we use for every client",
    excerpt:
      "The exact sequence, snapshots, and integrations that let us launch a full CRM inside two weeks — without breaking existing data.",
    read: "9 min",
  },
  {
    cat: "AI Automation",
    title: "AI voice agents vs. human answering services: the honest ROI breakdown",
    excerpt:
      "Real numbers from four service businesses that swapped a $6k/mo call center for AI agents. What worked, what didn't.",
    read: "7 min",
  },
  {
    cat: "SEO",
    title: "LLM SEO: how to rank inside ChatGPT, Perplexity, and Google AI Overviews",
    excerpt:
      "The new citation-ready content structure our clients use to appear in AI answers — and how it also boosts classic SEO.",
    read: "12 min",
  },
  {
    cat: "Google Business Profile",
    title: "GBP ranking factors in 2026: what actually moves the map pack",
    excerpt:
      "Behavior signals, review velocity, geo relevance — and the myths that waste your time. Based on 50+ live rankings.",
    read: "10 min",
  },
  {
    cat: "Lead Generation",
    title: "Missed-call text back is still the highest-ROI automation you can install today",
    excerpt:
      "Setup guide, message templates, and the compliance rules to stay above 95% deliverability.",
    read: "6 min",
  },
  {
    cat: "CRM",
    title: "Pipeline design for service businesses: 7 stages, 3 automations, zero leaks",
    excerpt:
      "The pipeline architecture we deploy across HVAC, roofing, and home services — with the exact automations at every stage.",
    read: "11 min",
  },
];

function BlogPage() {
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
          <li className="font-medium text-brand-primary">Blog</li>
        </ol>
      </nav>

      <section className="px-6 pt-10 pb-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-accent">
            Resources
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-6xl">
            Playbooks for the modern service business.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-500">
            Deep guides on GoHighLevel, AI, SEO, and lead generation — written by the team that
            deploys them every day.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 hover:border-brand-accent hover:text-brand-accent"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <article
              key={i}
              className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-brand-accent/5"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-brand-accent/10 px-3 py-1 font-bold uppercase tracking-wider text-brand-accent">
                  {p.cat}
                </span>
                <span className="inline-flex items-center gap-1 text-slate-500">
                  <Clock className="size-3.5" /> {p.read}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug text-brand-primary group-hover:text-brand-accent">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-slate-500">{p.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-accent">
                Read guide <ArrowRight className="size-4" />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-50 p-12 text-center md:p-16">
          <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl">
            Get the growth stack playbook.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-500">
            One email a week with the exact automations, snapshots, and ad angles our clients use —
            no fluff.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-brand-primary placeholder:text-muted-foreground focus:border-brand-accent focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-accent"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
