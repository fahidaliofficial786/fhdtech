import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Globe, Network, Sparkles } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/services";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "HTML Sitemap — Explore FHDTech Services & Pages" },
      {
        name: "description",
        content:
          "HTML Sitemap for FHDTech website. Find all pages, resources, and our comprehensive list of 38+ GoHighLevel CRM, AI automation, WordPress, and SEO service landing pages.",
      },
      { property: "og:title", content: "HTML Sitemap | FHDTech" },
      {
        property: "og:description",
        content: "Complete navigation index for all FHDTech services, industries, and articles.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sitemap" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sitemap" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Sitemap",
          url: "https://fhdtech.com/sitemap",
          description:
            "Complete navigation index for all FHDTech services, industries, and articles.",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://fhdtech.com/" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Sitemap",
                item: "https://fhdtech.com/sitemap",
              },
            ],
          },
        }),
      },
    ],
  }),
  component: SitemapPage,
});

function SitemapPage() {
  const mainPages = [
    { label: "Home Page", path: "/" },
    { label: "About Fahid & FHDTech", path: "/about" },
    { label: "All Services Catalog", path: "/services" },
    { label: "Industries Served", path: "/industries" },
    { label: "Client Case Studies", path: "/portfolio" },
    { label: "Guides & Blog", path: "/blog" },
    { label: "Contact Fahid Ali", path: "/contact" },
    { label: "Book Consultation", path: "/book-consultation" },
    { label: "XML Sitemap", path: "/sitemap.xml" },
    { label: "AI Config (llms.txt)", path: "/llms.txt" },
    { label: "AI Scraping Rules (ai.txt)", path: "/ai.txt" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-6 pt-8 text-xs text-slate-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link to="/" className="hover:text-brand-accent">
              Home
            </Link>
          </li>
          <ChevronRight className="size-3" />
          <li className="font-medium text-brand-primary">Sitemap</li>
        </ol>
      </nav>

      <section className="px-6 pt-10 pb-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-accent">
            <Sparkles className="mr-1 inline size-3.5" /> Navigation
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-5xl">
            Website Index
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            A comprehensive list of all pages, articles, and specialized services on FHDTech.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-3">
          {/* Main Pages */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
            <h2 className="font-display text-xl font-bold text-brand-primary mb-4 flex items-center gap-2">
              <Globe className="size-5 text-brand-accent" /> Primary Pages
            </h2>
            <ul className="space-y-2 text-sm">
              {mainPages.map((page) => (
                <li key={page.path}>
                  {page.path.startsWith("/") ? (
                    <Link
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      to={page.path as any}
                      className="text-slate-600 hover:text-brand-accent transition-colors font-medium flex items-center gap-1"
                    >
                      <ChevronRight className="size-3.5 opacity-60" />
                      {page.label}
                    </Link>
                  ) : (
                    <a
                      href={page.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-brand-accent transition-colors font-medium flex items-center gap-1"
                    >
                      <ChevronRight className="size-3.5 opacity-60" />
                      {page.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Pages */}
          <div className="md:col-span-2 rounded-2xl border border-slate-100 bg-white p-6">
            <h2 className="font-display text-xl font-bold text-brand-primary mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Network className="size-5 text-brand-accent" /> Services Catalog (
              {SERVICE_CATEGORIES.reduce((n, c) => n + c.services.length, 0)} pages)
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {SERVICE_CATEGORIES.map((cat) => (
                <div key={cat.category} className="space-y-3">
                  <h3 className="font-display text-sm font-bold text-slate-400 uppercase tracking-widest">
                    {cat.category}
                  </h3>
                  <ul className="space-y-1.5 text-xs">
                    {cat.services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="text-slate-600 hover:text-brand-accent transition-colors font-medium flex items-start gap-1"
                        >
                          <ChevronRight className="size-3 shrink-0 mt-0.5 opacity-60" />
                          <span>{s.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
