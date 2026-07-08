import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home,
  Wrench,
  Building2,
  Sun,
  Stethoscope,
  Scale,
  Shield,
  Sparkles,
  Briefcase,
  HeartPulse,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — FHDTech AI & CRM Automation" },
      {
        name: "description",
        content:
          "Specialized AI automation, CRM, and lead-generation solutions for real estate, HVAC, roofing, medical, dental, legal, insurance, solar, and home service businesses.",
      },
      { property: "og:title", content: "Industries We Serve | FHDTech" },
      {
        property: "og:description",
        content: "Industry-tailored CRM and AI systems for service and local businesses.",
      },
      { property: "og:url", content: "https://fhdtech.com/industries" },
    ],
    links: [{ rel: "canonical", href: "https://fhdtech.com/industries" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Industries We Serve",
            url: "https://fhdtech.com/industries",
            description:
              "Explore the service industries FHDTech builds automated CRM and AI booking agents for.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://fhdtech.com/" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Industries",
                  item: "https://fhdtech.com/industries",
                },
              ],
            },
          },
        ]),
      },
    ],
  }),
  component: IndustriesPage,
});

const INDUSTRIES = [
  {
    icon: Home,
    name: "Real Estate",
    desc: "Buyer & seller pipelines, showing reminders, open-house automation, agent assignment, and lead routing built for high-volume brokerages.",
    wins: ["24/7 lead capture", "AI qualification", "Automated showings"],
  },
  {
    icon: Wrench,
    name: "HVAC",
    desc: "Estimate automation, technician dispatch, maintenance-membership sequences, and review requests that grow ticket size and retention.",
    wins: ["Missed-call text back", "Auto invoicing", "Membership growth"],
  },
  {
    icon: Building2,
    name: "Roofing",
    desc: "Storm-response campaigns, insurance-claim workflows, and appointment-setter AI that keeps crews booked through every season.",
    wins: ["Storm alerts", "Claims workflow", "Route optimization"],
  },
  {
    icon: Wrench,
    name: "Plumbing",
    desc: "Emergency response automation, appointment routing, and reputation systems that grow 5-star reviews on every completed job.",
    wins: ["Emergency routing", "Instant quotes", "5-star pipeline"],
  },
  {
    icon: Sun,
    name: "Solar",
    desc: "Long-cycle nurture sequences, proposal follow-ups, and financing-qualification bots for high-consideration solar sales.",
    wins: ["Long-cycle nurture", "Financing bots", "Sit-rate boost"],
  },
  {
    icon: Sparkles,
    name: "Cleaning Companies",
    desc: "Recurring-service automation, upsell campaigns, and same-day booking flows for residential and commercial cleaning.",
    wins: ["Recurring auto-book", "Team dispatch", "Upsell sequences"],
  },
  {
    icon: Scale,
    name: "Law Firms",
    desc: "Intake automation, case-qualification AI, and conflict-check workflows that respect compliance while cutting response time.",
    wins: ["Intake bot", "Case qualification", "Conflict checks"],
  },
  {
    icon: Stethoscope,
    name: "Medical Clinics",
    desc: "HIPAA-aware intake, patient reminders, no-show reduction, and reactivation campaigns for private-practice growth.",
    wins: ["Patient reminders", "No-show reduction", "Reactivation"],
  },
  {
    icon: HeartPulse,
    name: "Dentists",
    desc: "New-patient funnels, hygiene-recall automation, and treatment-plan follow-up sequences that fill hygiene chairs.",
    wins: ["Recall automation", "New-patient funnel", "Treatment follow-up"],
  },
  {
    icon: Shield,
    name: "Insurance",
    desc: "Quote-follow-up automation, cross-sell nurture, and renewal reminder systems purpose-built for indie agencies.",
    wins: ["Quote follow-up", "Renewal alerts", "Cross-sell"],
  },
  {
    icon: Briefcase,
    name: "Marketing Agencies",
    desc: "White-label GHL snapshots, sub-account architecture, and reporting automation for agencies scaling to 100+ accounts.",
    wins: ["White label", "Sub-account snapshot", "Auto reporting"],
  },
  {
    icon: Home,
    name: "Home Services",
    desc: "One growth stack for handymen, landscapers, painters, and pest control — with dispatch, billing, and review flows out of the box.",
    wins: ["Dispatch", "Billing sync", "Review growth"],
  },
];

function IndustriesPage() {
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
          <li className="font-medium text-brand-primary">Industries</li>
        </ol>
      </nav>

      <section className="px-6 pt-10 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-accent">
            Industries
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-6xl">
            Built for the industries that keep the world running.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-500">
            Every FHDTech deployment is tuned to your industry's real workflows, compliance needs,
            and buying cycles — not generic templates.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-brand-accent/5"
              >
                <div className="mb-5 grid size-12 place-items-center rounded-xl bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-white">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-primary">{ind.name}</h3>
                <p className="mt-3 flex-1 text-sm text-slate-500">{ind.desc}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {ind.wins.map((w) => (
                    <li
                      key={w}
                      className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500"
                    >
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-brand-primary p-12 text-center text-white md:p-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Don't see your industry?</h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-300">
            If you run a service business, we can build for you. Book a call and we'll map the
            automation opportunities.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-accent px-8 py-4 font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            Book a call <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
