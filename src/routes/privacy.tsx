import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | FHDTech" },
      {
        name: "description",
        content:
          "FHDTech Privacy Policy. Understand how we collect, process, and protect client and user data, including GoHighLevel integration and Twilio/SMS compliance.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: "https://fhdtech.com/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 bg-white">
      <h1 className="font-display text-4xl font-bold text-brand-primary">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: 8 July 2026</p>

      <div className="prose prose-slate mt-10 max-w-none text-slate-600 space-y-6">
        <p className="lead text-lg text-slate-500 font-medium">
          At FHDTech (“we”, “us”, “our”, “FHDTech”), founded by Fahid Ali, we prioritize the
          protection of personal data. This Privacy Policy details how we collect, handle, process,
          and protect your information when you interact with our website (fhdtech.com), book
          consultations, use our forms, or engage us for GoHighLevel CRM, AI automation, or custom
          development services.
        </p>

        <hr className="border-slate-100 my-8" />

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            1. Information We Collect
          </h2>
          <p>
            We may collect and process several categories of information, depending on how you use
            our website and services:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Personal Contact Data:</strong> Name, business name, physical address, email
              address, WhatsApp number, and telephone numbers submitted via our contact forms,
              newsletter signup, or scheduling tools.
            </li>
            <li>
              <strong>Consultation & Business Data:</strong> Information concerning your current CRM
              platform, sales pipelines, lead generation bottlenecks, website platforms, hosting
              credentials, and business processes shared during strategy scoping.
            </li>
            <li>
              <strong>Usage & Device Information:</strong> Your IP address, browser type, operating
              system, referrer URL, pages visited, date/time stamps, and basic geolocation data
              gathered via standard server logs and cookies.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            2. How We Use Your Information
          </h2>
          <p>We use your information strictly for legitimate business interests, including:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              Providing and managing the services you hire us to perform (e.g., configuring
              GoHighLevel sub-accounts, deploying AI voice agents, custom WordPress setups).
            </li>
            <li>
              Processing form requests, sending proposal PDFs, and executing Calendly meeting
              reminders.
            </li>
            <li>
              Configuring third-party integrations (Twilio, Mailgun, Stripe, Zapier, Make) on your
              behalf as authorized.
            </li>
            <li>
              Complying with legal, carrier, and regulatory frameworks (e.g., verifying business
              registrations for A2P 10DLC compliance).
            </li>
            <li>Improving our website performance, layout, and localized SEO keyword mapping.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            3. GoHighLevel & Third-Party Service Providers
          </h2>
          <p>
            We build on top of industry-leading software. When we configure systems for you, your
            data may be processed by external sub-processors under their respective terms:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>GoHighLevel:</strong> As our primary CRM stack, all contact records, leads,
              pipeline tracking, SMS/Email history, and calendar slots are stored and processed on
              GoHighLevel servers.
            </li>
            <li>
              <strong>Twilio & Mailgun:</strong> Telephony, SMS routing, A2P 10DLC verification
              campaigns, and transaction email delivery run through these carriers. We configure
              these with your direct sub-accounts, ensuring you retain ownership of your data.
            </li>
            <li>
              <strong>Stripe:</strong> Payment processing for project fees and retainers are secured
              directly via Stripe. We do not store credit card credentials on our servers.
            </li>
            <li>
              <strong>Calendly:</strong> Booking scheduling slots for free consultations utilizes
              Calendly API.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            4. Twilio SMS & A2P 10DLC Compliance
          </h2>
          <p>To comply with carrier guidelines in North America (US/Canada):</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              No mobile information will be shared with third parties/affiliates for marketing or
              promotional purposes.
            </li>
            <li>
              All subscription databases and SMS opt-in data are kept strictly confidential and
              isolated within your dedicated CRM sub-account.
            </li>
            <li>
              We configure opt-out keywords (STOP, END, CANCEL) on all workflows to guarantee
              carrier compliance.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            5. Cookies and Consent Tracking
          </h2>
          <p>
            FHDTech uses basic tracking cookies and local storage tokens to optimize website
            experiences, save cookie consent choices (via our vertical Cookie Banner), and track
            standard user flows. You can configure your browser to decline optional cookies, though
            some custom forms or calendar elements may lose functionality.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            6. Data Retention & Security
          </h2>
          <p>
            We implement robust administrative, technical, and physical security measures to
            safeguard your personal data. When providing WP malware removal or GHL setup services,
            we enforce strict password hashing and credentials sharing security rules. We retain
            your information only as long as necessary to fulfill service agreements or comply with
            legal requirements.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            7. Your Rights under GDPR, CCPA, and Global Laws
          </h2>
          <p>
            If you reside in the European Union (EEA), United Kingdom, or certain US states (like
            California), you hold specific privacy rights:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Access & Portability:</strong> The right to request copies of the personal
              data we hold on you.
            </li>
            <li>
              <strong>Rectification:</strong> The right to correct incomplete or inaccurate data.
            </li>
            <li>
              <strong>Erasure (Right to be Forgotten):</strong> The right to request that we delete
              your contact records from our systems, subject to pending financial contracts or legal
              retention duties.
            </li>
            <li>
              <strong>Opt-Out:</strong> The right to opt out of promotional emails or SMS sequences
              at any time.
            </li>
          </ul>
          <p className="mt-2">
            To invoke any of these rights, email us at{" "}
            <a
              href="mailto:Fahaidaliofficial@gmail.com"
              className="text-brand-accent hover:underline"
            >
              Fahaidaliofficial@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            8. Contact Information
          </h2>
          <p>For questions regarding this policy or data processing, please contact us at:</p>
          <address className="not-italic mt-2 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm space-y-1">
            <p>
              <strong>FHDTech</strong> (Fahid Ali)
            </p>
            <p>Lahore, Punjab, Pakistan</p>
            <p>
              Email:{" "}
              <a
                href="mailto:Fahaidaliofficial@gmail.com"
                className="text-brand-accent hover:underline"
              >
                Fahaidaliofficial@gmail.com
              </a>
            </p>
            <p>WhatsApp: +92 348 4103239</p>
          </address>
        </section>
      </div>
    </div>
  );
}
