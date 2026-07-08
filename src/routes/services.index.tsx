import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Sparkles, ArrowRight, PhoneCall, Search, X, ChevronRight } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "FHDTech Services — GoHighLevel CRM, AI Automation & Web Agency" },
      {
        name: "description",
        content:
          "Complete index of FHDTech growth services: GoHighLevel CRM setup, CRM migrations, A2P Twilio verification, custom AI voice booking agents, WooCommerce, and WordPress malware cleanup.",
      },
      { property: "og:title", content: "FHDTech Services Catalog" },
      {
        property: "og:description",
        content:
          "High-performance AI automation, CRM setups, ads, local SEO, and custom WordPress services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://fhdtech.com/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://fhdtech.com/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "FHDTech Services Catalog",
            url: "https://fhdtech.com/services",
            description:
              "Explore our catalog of 38+ specialized CRM, AI automation, local SEO, and WordPress security services.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://fhdtech.com/" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://fhdtech.com/services",
                },
              ],
            },
          },
        ]),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [q, setQ] = useState("");
  const [activeCat, setActiveCat] = useState<string>("All");

  const filteredCategories = useMemo(() => {
    const query = q.trim().toLowerCase();
    return SERVICE_CATEGORIES.map((cat) => ({
      ...cat,
      services: cat.services.filter((s) => {
        if (activeCat !== "All" && cat.category !== activeCat) return false;
        if (!query) return true;
        return (
          s.title.toLowerCase().includes(query) ||
          s.short.toLowerCase().includes(query) ||
          cat.category.toLowerCase().includes(query)
        );
      }),
    })).filter((c) => c.services.length > 0);
  }, [q, activeCat]);

  const totalResults = filteredCategories.reduce((n, c) => n + c.services.length, 0);

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
          <li className="font-medium text-brand-primary">Services</li>
        </ol>
      </nav>

      <section className="px-6 pt-10 pb-10 md:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-accent">
            <Sparkles className="mr-1 inline size-3.5" /> Services
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-6xl">
            One partner for your entire growth stack.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-500">
            AI automation, CRM, ads, SEO, and websites — engineered together so every click, call,
            and conversation compounds into booked revenue.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white hover:bg-brand-accent"
            >
              <PhoneCall className="size-4" /> Book a free consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Search & filter */}
      <section className="sticky top-16 z-20 border-b border-slate-100 bg-white/85 px-6 py-4 backdrop-blur-xl lg:top-[72px]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search 40+ services (e.g. GoHighLevel, AI voice, SEO)…"
              className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-11 text-sm placeholder:text-slate-400 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
            />
            {q && (
              <button
                type="button"
                onClick={() => setQ("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2 overflow-x-auto md:flex-nowrap">
            {["All", ...SERVICE_CATEGORIES.map((c) => c.category)].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActiveCat(c)}
                className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  activeCat === c
                    ? "border-brand-primary bg-brand-primary text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-brand-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        {(q || activeCat !== "All") && (
          <p className="mx-auto mt-3 max-w-6xl text-xs text-slate-500">
            {totalResults} service{totalResults === 1 ? "" : "s"} match
            {q && (
              <>
                {" "}
                for “<span className="font-semibold text-brand-primary">{q}</span>”
              </>
            )}
            .
          </p>
        )}
      </section>

      {filteredCategories.length === 0 ? (
        <section className="px-6 py-24 text-center">
          <p className="text-slate-500">No services match your search. Try a different keyword.</p>
        </section>
      ) : (
        filteredCategories.map((cat) => (
          <section key={cat.category} className="px-6 py-10">
            <div className="mx-auto max-w-6xl">
              <div className="mb-6 flex items-end justify-between">
                <h2 className="font-display text-2xl font-bold text-brand-primary md:text-3xl">
                  {cat.category}
                </h2>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                  {cat.services.length} service{cat.services.length === 1 ? "" : "s"}
                </span>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {cat.services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-brand-accent/5"
                  >
                    <h3 className="font-display text-lg font-bold text-brand-primary group-hover:text-brand-accent">
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-slate-500">{s.short}</p>
                    <p className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-accent">
                      Learn more <ArrowRight className="size-3.5" />
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))
      )}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-brand-primary p-12 text-center text-white md:p-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-300">
            Book a free 30-minute growth audit. We'll map what's leaking leads, what to automate
            first, and the ROI you can expect.
          </p>
          <Link
            to="/book-consultation"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-accent px-8 py-4 font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            Book my free audit <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
