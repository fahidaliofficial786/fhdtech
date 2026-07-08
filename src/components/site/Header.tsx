import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Bot,
  Users,
  Zap,
  Globe,
  Layers,
  Search,
  MapPin,
  Megaphone,
  Target,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { FhdLogo } from "./Logo";
import { SERVICE_CATEGORIES } from "@/lib/services";

const NAV = [
  { to: "/industries", label: "Industries" },
  { to: "/portfolio", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const CATEGORY_ICONS: Record<string, typeof Sparkles> = {
  GoHighLevel: Layers,
  "AI Automation": Bot,
  "CRM Solutions": Users,
  "Workflow Automation": Zap,
  "Web Development": Globe,
  WordPress: Globe,
  SEO: Search,
  "Google Business Profile": MapPin,
  "Paid Advertising": Megaphone,
  "Lead Generation": Target,
  "Booking & Sales Systems": CalendarCheck,
};

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const close = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest("[data-services-menu]")) setServicesOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [servicesOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/80 shadow-[0_1px_0_rgba(15,23,42,0.04),0_10px_30px_-15px_rgba(15,23,42,0.15)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/50 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6 lg:h-[72px]">
        <FhdLogo />

        <nav className="hidden items-center gap-1 lg:flex">
          <div className="relative" data-services-menu>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                servicesOpen
                  ? "bg-slate-900/5 text-brand-primary"
                  : "text-slate-600 hover:bg-slate-900/5 hover:text-brand-primary"
              }`}
            >
              Services
              <ChevronDown
                className={`size-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[min(1180px,calc(100vw-3rem))] -translate-x-1/2 pt-3">
                <div className="max-h-[calc(100vh-6rem)] overflow-y-auto rounded-3xl border border-slate-100 bg-white/95 p-6 shadow-2xl shadow-brand-primary/15 backdrop-blur-xl">
                  <div className="mb-5 flex items-start justify-between gap-6 border-b border-slate-100 pb-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">
                        Services
                      </p>
                      <p className="mt-1 font-display text-lg font-bold text-brand-primary">
                        One partner for your entire growth stack.
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Dedicated pages for every automation, CRM, website, SEO, ads, and lead
                        system.
                      </p>
                    </div>
                    <Link
                      to="/services"
                      onClick={() => setServicesOpen(false)}
                      className="hidden shrink-0 items-center gap-1.5 rounded-full bg-brand-primary px-4 py-2 text-xs font-bold text-white hover:bg-brand-accent md:inline-flex"
                    >
                      Browse all services <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                  <div className="grid gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {SERVICE_CATEGORIES.map((cat) => {
                      const Icon = CATEGORY_ICONS[cat.category] ?? Sparkles;
                      return (
                        <div key={cat.category}>
                          <div className="mb-3 flex items-center gap-2">
                            <span className="grid size-7 place-items-center rounded-lg bg-brand-primary/5 text-brand-primary">
                              <Icon className="size-3.5" />
                            </span>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-primary">
                              {cat.category}
                            </p>
                          </div>
                          <ul className="space-y-0.5">
                            {cat.services.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  to="/services/$slug"
                                  params={{ slug: s.slug }}
                                  onClick={() => setServicesOpen(false)}
                                  className="group block rounded-lg px-2 py-1.5 text-[13px] leading-snug text-slate-600 transition-colors hover:bg-slate-50 hover:text-brand-accent"
                                >
                                  {s.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-900/5 hover:text-brand-primary"
              activeProps={{ className: "bg-slate-900/5 text-brand-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/book-consultation"
            className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-primary/20 transition-all hover:shadow-xl hover:shadow-brand-accent/30 hover:-translate-y-0.5 lg:inline-flex"
          >
            <CalendarCheck className="size-4" />
            Book a Call
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid size-10 place-items-center rounded-full text-brand-primary hover:bg-slate-900/5 lg:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden">
          <nav className="mx-auto flex max-h-[80vh] max-w-7xl flex-col gap-1 overflow-y-auto border-t border-slate-100 bg-white px-6 py-4">
            <Link
              to="/book-consultation"
              onClick={() => setMobileOpen(false)}
              className="mb-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent px-5 py-3 text-sm font-semibold text-white"
            >
              <CalendarCheck className="size-4" /> Book a Free Consultation
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-semibold text-brand-primary"
            >
              All Services →
            </Link>
            {SERVICE_CATEGORIES.map((cat) => (
              <details key={cat.category} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2 text-[11px] font-bold uppercase tracking-widest text-brand-accent [&::-webkit-details-marker]:hidden">
                  {cat.category}
                  <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                </summary>
                <ul className="mb-1">
                  {cat.services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-md px-5 py-1.5 text-sm text-slate-600 hover:bg-slate-50"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            <div className="my-3 border-t border-slate-100" />
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
