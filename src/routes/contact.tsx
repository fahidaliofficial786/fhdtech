import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import {
  Mail,
  MessageCircle,
  CalendarCheck,
  Globe,
  CheckCircle2,
  Clock,
  Shield,
  ChevronRight,
} from "lucide-react";
import { BUSINESS, SOCIALS } from "../lib/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact FHDTech — Book a Free Consultation with Fahid Ali" },
      {
        name: "description",
        content:
          "Talk to Fahid Ali directly. Book a free 30-minute consultation on Calendly, send a message, or reach out on WhatsApp for GoHighLevel, WordPress, or automation help.",
      },
      { property: "og:title", content: "Contact FHDTech | Fahid Ali" },
      {
        property: "og:description",
        content:
          "Book a free 30-minute call or chat on WhatsApp with Fahid Ali, founder of FHDTech.",
      },
      { property: "og:url", content: "https://fhdtech.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://fhdtech.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact FHDTech",
            url: "https://fhdtech.com/contact",
            description:
              "Contact Fahid Ali of FHDTech for GoHighLevel and AI automation consulting.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://fhdtech.com/" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Contact",
                  item: "https://fhdtech.com/contact",
                },
              ],
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "FHDTech",
            image: "https://fhdtech.com/favicon.svg",
            url: "https://fhdtech.com",
            telephone: "+923484103239",
            email: "Fahaidaliofficial@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressCountry: "PK",
              addressLocality: "Lahore",
              addressRegion: "Punjab",
            },
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Canada" },
              { "@type": "Country", name: "Australia" },
              { "@type": "Country", name: "Pakistan" },
            ],
            priceRange: "$$",
          },
        ]),
      },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().min(1, "Pick a subject"),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

const SUBJECTS = [
  "GoHighLevel / Automation",
  "WordPress Development",
  "Emergency: Malware / Hack Removal",
  "AI Automation & Chatbots",
  "SEO / Google Business Profile",
  "Other Inquiry",
];

const FAQS = [
  {
    q: "How fast will I hear back?",
    a: "Most messages are answered the same business day. For urgent WordPress hack cleanup, WhatsApp is the fastest channel.",
  },
  {
    q: "What does the free consultation include?",
    a: "A 30-minute call to review your current setup, pinpoint bottlenecks, and outline the fastest path forward — no obligation to hire.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. FHDTech is remote-first and works with clients worldwide via Zoom, Google Meet, and WhatsApp.",
  },
  {
    q: "Do you offer emergency support?",
    a: "Yes — malware cleanup, blacklist recovery, and broken automations are handled on a rush basis. Reach out on WhatsApp for immediate response.",
  },
];

function ContactPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: SUBJECTS[0],
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const map: Record<string, string> = {};
      parsed.error.issues.forEach((iss) => {
        map[String(iss.path[0])] = iss.message;
      });
      setErrors(map);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      const res = await fetch(BUSINESS.contactForm, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Send failed");
      setSent(true);
    } catch {
      setError("Could not send. Please try WhatsApp or email instead.");
    } finally {
      setSending(false);
    }
  };

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
          <li className="font-medium text-brand-primary">Contact</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="px-6 pt-10 pb-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-accent">
            Contact
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary md:text-6xl">
            Book a free consultation with Fahid.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            Have a project in mind, or need emergency help with a hacked WordPress site? Pick the
            channel that suits you &mdash; every message reaches Fahid Ali directly.
          </p>
        </div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="px-6 pb-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {[
            {
              icon: CalendarCheck,
              title: "Book a 30-min call",
              desc: "Free strategy session — embedded calendar",
              href: "/book-consultation",
              cta: "Book consultation",
              accent: true,
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              desc: BUSINESS.whatsappNumber + " · fastest response",
              href: BUSINESS.whatsapp,
              cta: "Chat now",
            },
            {
              icon: Mail,
              title: "Email",
              desc: BUSINESS.email,
              href: `mailto:${BUSINESS.email}`,
              cta: "Send email",
            },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-2xl border p-6 transition-all hover:-translate-y-1 ${
                  c.accent
                    ? "border-brand-accent/30 bg-brand-accent/5"
                    : "border-slate-100 bg-white hover:border-brand-accent/30"
                }`}
              >
                <span className="mb-4 grid size-11 place-items-center rounded-xl bg-brand-accent/10 text-brand-accent">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-brand-primary">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{c.desc}</p>
                <p className="mt-4 text-sm font-semibold text-brand-accent">{c.cta} &rarr;</p>
              </a>
            );
          })}
        </div>
      </section>

      {/* FORM + CALENDLY */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_1fr]">
          {/* Form */}
          <div id="form" className="rounded-3xl border border-slate-100 bg-white p-8 md:p-10">
            <h2 className="font-display text-2xl font-bold text-brand-primary">Send a message</h2>
            <p className="mt-1 text-sm text-slate-500">
              Delivered via Formspree straight to Fahid&rsquo;s inbox.
            </p>

            {sent ? (
              <div className="mt-8 flex flex-col items-center gap-4 py-10 text-center">
                <span className="grid size-14 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="size-7" />
                </span>
                <h3 className="font-display text-xl font-bold text-brand-primary">
                  Message received, {data.name.split(" ")[0]}.
                </h3>
                <p className="max-w-sm text-slate-500">
                  Fahid will reply within one business day. For urgent issues, ping the WhatsApp
                  number above.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-6 space-y-5">
                <Field label="Full name" error={errors.name}>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="input"
                    placeholder="Jane Cooper"
                    maxLength={100}
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className="input"
                    placeholder="you@company.com"
                    maxLength={255}
                  />
                </Field>
                <Field label="Subject" error={errors.subject}>
                  <select
                    value={data.subject}
                    onChange={(e) => setData({ ...data, subject: e.target.value })}
                    className="input"
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Message" error={errors.message}>
                  <textarea
                    value={data.message}
                    onChange={(e) => setData({ ...data, message: e.target.value })}
                    className="input min-h-36"
                    placeholder="Tell me about your project, current stack, and biggest bottleneck."
                    maxLength={2000}
                  />
                </Field>

                {error ? <p className="text-sm font-medium text-red-500">{error}</p> : null}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-xl bg-brand-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-accent/20 transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>

          {/* Right column: booking + trust */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
              <h3 className="font-display text-xl font-bold text-brand-primary">
                Prefer to just book a time?
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Grab a 30-minute discovery slot directly on Fahid&rsquo;s Calendly &mdash; no forms,
                no wait.
              </p>
              <a
                href="/book-consultation"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-primary px-6 py-3.5 text-sm font-bold text-white hover:bg-brand-accent"
              >
                <CalendarCheck className="size-4" /> Schedule discovery call
              </a>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-8">
              <h3 className="font-display text-lg font-bold text-brand-primary">What to expect</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                  Response within one business day
                </li>
                <li className="flex gap-3">
                  <Globe className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                  Remote-first &mdash; clients served worldwide
                </li>
                <li className="flex gap-3">
                  <Shield className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                  Your details are never shared or resold
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-8">
              <h3 className="font-display text-lg font-bold text-brand-primary">
                Elsewhere on the web
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-brand-accent/40 hover:text-brand-primary"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP & LOCATION INFO */}
      <section className="border-t border-slate-100 bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex w-fit rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent">
                Service Area
              </span>
              <h2 className="font-display text-3xl font-bold text-brand-primary">
                Serving Clients Globally from Lahore, Pakistan
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                FHDTech operates as a remote-first systems agency, allowing us to build, deploy, and
                support GoHighLevel CRM workflows and AI voice agents for clients across the United
                States, United Kingdom, Canada, Australia, and worldwide.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <p>
                  <strong>Agency Name:</strong> FHDTech
                </p>
                <p>
                  <strong>Founder:</strong> Fahid Ali
                </p>
                <p>
                  <strong>Primary Support Office:</strong> Lahore, Punjab, Pakistan
                </p>
                <p>
                  <strong>WhatsApp Support:</strong> +92 348 4103239
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-100 h-80 shadow-sm relative">
              <iframe
                title="FHDTech Service Location - Lahore, Pakistan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27209.68962295627!2d74.33146497746401!3d31.520369584617565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a281185aa%3A0x29af0774a3f12465!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1716382103491!5m2!1sen!2s"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-100 bg-slate-50/60 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-brand-accent">
            FAQ
          </p>
          <h2 className="text-center font-display text-3xl font-bold text-brand-primary md:text-4xl">
            Quick answers before you reach out.
          </h2>
          <div className="mt-10 space-y-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-slate-100 bg-white p-5 open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-brand-primary">
                  {f.q}
                  <span className="ml-4 text-brand-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-500">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgb(226 232 240);
          background: white;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #0f172a;
          outline: none;
        }
        .input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }
      `}</style>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-brand-primary">{label}</span>
      {children}
      {error ? (
        <span className="mt-1.5 block text-xs font-medium text-red-500">{error}</span>
      ) : null}
    </label>
  );
}
