import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ShieldCheck,
  Award,
  Zap,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { BUSINESS, SOCIALS } from "../../lib/business";
import { SOCIAL_ICONS } from "./SocialIcons";

const SERVICE_LINKS = [
  { slug: "gohighlevel-crm-setup", label: "GoHighLevel CRM Setup" },
  { slug: "gohighlevel-workflow-automation", label: "Workflow Automation" },
  { slug: "ai-automation", label: "AI Automation" },
  { slug: "ai-voice-agents", label: "AI Voice Agents" },
  { slug: "ai-chatbots", label: "AI Chatbots" },
  { slug: "wordpress-development", label: "WordPress Development" },
  { slug: "wordpress-malware-removal", label: "Malware Removal" },
  { slug: "seo", label: "SEO" },
  { slug: "google-business-profile-optimization", label: "Google Business Profile" },
  { slug: "paid-ads-management", label: "Paid Ads Management" },
];

const INDUSTRIES = [
  "Real Estate",
  "HVAC",
  "Roofing",
  "Solar",
  "Plumbing",
  "Cleaning",
  "Law Firms",
  "Medical & Dental",
  "Insurance",
  "Marketing Agencies",
];

const RESOURCES = [
  { to: "/portfolio", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About Fahid" },
  { to: "/contact", label: "Contact" },
  { to: "/book-consultation", label: "Book Consultation" },
];

const TRUST_BADGES = [
  { icon: Award, label: "130+ Projects" },
  { icon: ShieldCheck, label: "4.9★ Rating" },
  { icon: Zap, label: "24/7 Automation" },
  { icon: Sparkles, label: "Certified GHL" },
];

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      const res = await fetch(BUSINESS.contactForm, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, subject: "Newsletter subscription" }),
      });
      setStatus(res.ok ? "ok" : "err");
      if (res.ok) setEmail("");
    } catch {
      setStatus("err");
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-slate-950 via-brand-primary to-slate-950 text-slate-300">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%)]"
      />

      {/* CTA banner */}
      <div className="relative mx-auto max-w-7xl px-6 pt-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                Ready to grow?
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
                Automate your business. Book more calls. Sleep better.
              </h3>
              <p className="mt-3 text-sm text-slate-400">
                Free 30-minute consultation. Custom growth plan. No obligation.
              </p>
            </div>
            <Link
              to="/book-consultation"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-accent to-brand-accent/80 px-7 py-4 text-sm font-bold text-white shadow-2xl shadow-brand-accent/40 transition-transform hover:-translate-y-0.5"
            >
              Book Free Consultation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Company intro */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-white"
            >
              FHD<span className="text-brand-accent">TECH</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Premium AI automation, GoHighLevel CRM, and web development — engineered by Fahid Ali
              to help service businesses replace manual work with systems that scale.
            </p>

            {/* Newsletter */}
            <form onSubmit={onSubscribe} className="mt-6">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Newsletter
              </label>
              <div className="mt-2 flex overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur focus-within:border-brand-accent/60">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-1.5 bg-brand-accent px-4 text-sm font-bold text-white transition-colors hover:bg-brand-accent/90 disabled:opacity-60"
                >
                  <Send className="size-3.5" />
                  {status === "sending" ? "…" : "Subscribe"}
                </button>
              </div>
              {status === "ok" && (
                <p className="mt-2 text-xs text-emerald-400">Subscribed — talk soon.</p>
              )}
              {status === "err" && (
                <p className="mt-2 text-xs text-rose-400">Something went wrong. Try again.</p>
              )}
            </form>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {TRUST_BADGES.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-semibold text-slate-300"
                >
                  <b.icon className="size-3 text-brand-accent" />
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
              Services
            </h4>
            <ul className="mt-5 space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent hover:text-white"
                >
                  All services <ArrowRight className="size-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
              Industries
            </h4>
            <ul className="mt-5 space-y-2.5">
              {INDUSTRIES.map((i) => (
                <li key={i}>
                  <Link
                    to="/industries"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {i}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
              Resources
            </h4>
            <ul className="mt-5 space-y-2.5">
              {RESOURCES.map((r) => (
                <li key={r.to}>
                  <Link
                    to={r.to}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mt-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="inline-flex items-start gap-2 hover:text-white"
                >
                  <Mail className="mt-0.5 size-4 text-brand-accent" />
                  <span className="break-all">{BUSINESS.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 hover:text-white"
                >
                  <Phone className="mt-0.5 size-4 text-brand-accent" />
                  {BUSINESS.whatsappNumber}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-brand-accent" />
                Remote · Serving clients worldwide
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <Clock className="mt-0.5 size-4 text-brand-accent" />
                  <div className="space-y-0.5">
                    {BUSINESS.officeHours.map((h) => (
                      <p key={h.days} className="text-xs">
                        <span className="font-semibold text-slate-300">{h.days}:</span> {h.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-2">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.label];
              if (!Icon) return null;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:-translate-y-0.5 hover:border-brand-accent/40 hover:bg-brand-accent/10 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
          <p className="text-xs text-slate-500">
            Follow along for automation playbooks, CRM tutorials, and AI experiments.
          </p>
        </div>

        {/* Legal */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} FHDTech · Founded by Fahid Ali. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
            <a href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </a>
            <a
              href={BUSINESS.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              portfolio.fhdtech.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
