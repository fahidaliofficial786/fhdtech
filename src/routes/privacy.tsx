import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Enterprise Privacy Policy | FHDTech" },
      {
        name: "description",
        content:
          "Detailed Enterprise Privacy Policy for FHDTech. GDPR, CCPA, Twilio SMS compliant data handling guidelines.",
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

      <div className="prose prose-slate mt-10 max-w-none text-slate-600 space-y-8">
        <p className="lead text-lg text-slate-500 font-medium border-l-4 border-brand-accent pl-4">
          FHDTech (“FHDTech”, “we”, “us”, “our”), founded and operated by Fahid Ali, operates
          fhdtech.com. This Enterprise Privacy Policy describes our commitment to protection of
          personal data and detail how we collect, store, process, share, and protect your
          information.
        </p>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            1. Scope of This Policy
          </h2>
          <p>
            This policy applies to all visitors of fhdtech.com, clients who utilize our CRM setup
            services, subscribers to our tutorials, and users who input information into our forms
            or book consultation calls.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            2. Who We Are (Data Controller)
          </h2>
          <p>
            FHDTech acts as the primary data controller for the information you submit directly to
            our website. For CRM configurations where we set up databases on your behalf, we act as
            a data processor under your instructions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            3. Legal Basis for Processing Data (GDPR)
          </h2>
          <p>
            We process personal data based on the performance of our contract with you, your
            explicit consent, compliance with our legal and carrier obligations, and our legitimate
            interests in protecting website integrity.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            4. Information You Directly Provide to Us
          </h2>
          <p>
            We collect names, email addresses, phone numbers, WhatsApp contact credentials, business
            names, project budgets, and technical requirements that you submit voluntarily via form
            components.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            5. Technical Information Collected Automatically
          </h2>
          <p>
            Our servers log system metadata, including your IP address, browser user-agent string,
            operating system version, referring URLs, screen resolution, and behavioral logs
            concerning pages visited.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            6. Information We Obtain From Third Parties
          </h2>
          <p>
            We may receive professional profile information, company directories, and public
            business data from platforms like LinkedIn, Google My Business, or freelance
            marketplaces (Fiverr) to verify your account registration.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            7. How We Utilize Your Data
          </h2>
          <p>
            We use your data to configure CRM pipelines, set up AI models, dispatch billing invoices
            via Stripe, send WhatsApp consultation reminders, and perform localized SEO audit scans
            for your business.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            8. GoHighLevel CRM Processing Rules
          </h2>
          <p>
            All leads, customer profiles, booking calendars, and automation pipelines designed
            during project sprints are hosted on secure GoHighLevel server structures, adhering to
            their data security policies.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            9. Twilio & Carrier A2P 10DLC compliance
          </h2>
          <p>
            We enforce strict carrier compliance. Phone numbers, customer records, and opt-in
            databases collected for SMS workflows are kept isolated and are never shared with third
            parties for affiliate marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            10. Subprocessors and Service Providers
          </h2>
          <p>
            We share necessary data with trusted subprocessors to perform core business functions,
            including Calendly (scheduling), Stripe (invoicing), Formspree (forms), and Microsoft
            Clarity (analytics).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            11. International Data Transfers
          </h2>
          <p>
            Your information may be transferred and stored on servers located outside your home
            country, including the United States. We implement Standard Contractual Clauses (SCCs)
            to guarantee secure transfers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            12. Data Encryption and Hashing Security
          </h2>
          <p>
            All database accesses, credentials, and API tokens shared with us during project
            implementations are handled via encrypted password managers. We use HTTPS encryption
            across all pages.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            13. Data Retention Specifications
          </h2>
          <p>
            We retain client contact metadata for up to 3 years post-contract termination to comply
            with audit requirements. Basic website traffic logs are deleted automatically after 90
            days.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            14. Cookie Consent & Analytics Settings
          </h2>
          <p>
            We use functional and analytical cookies to track user interactions. You can decline
            optional cookie configurations through our user-facing Cookie Consent Banner without
            losing page access.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            15. Your Rights Under GDPR (EEA/UK Residents)
          </h2>
          <p>
            EU and UK residents have the right to access their data, correct inaccuracies, request
            complete deletion, restrict processing, and export data in structured, machine-readable
            formats.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            16. Your Rights Under CCPA/CPRA (California Residents)
          </h2>
          <p>
            California consumers have the right to know what personal data we collect, opt out of
            the sale or sharing of personal data, and request complete erasure of their stored
            records.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            17. Twilio Opt-Out & Opt-In Rules
          </h2>
          <p>
            All automated text messages configured by FHDTech contain opt-out capabilities.
            Recipients can opt out of SMS flows by texting "STOP", "END", or "QUIT" at any point.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            18. Children’s Online Privacy Protection (COPPA)
          </h2>
          <p>
            Our website and CRM services are designed strictly for business entities and adults. We
            do not knowingly collect or target information from children under the age of 13.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            19. Updates to this Privacy Document
          </h2>
          <p>
            We reserve the right to modify this policy as regulatory frameworks change. Significant
            updates will be highlighted via a notification banner or emailed directly to registered
            clients.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            20. Contacting Our Data Protection Officer
          </h2>
          <p>
            For questions, data access requests, or deletion queries, please contact Fahid Ali at{" "}
            <a
              href="mailto:Fahaidaliofficial@gmail.com"
              className="text-brand-accent font-semibold hover:underline"
            >
              Fahaidaliofficial@gmail.com
            </a>{" "}
            or message on WhatsApp at +92 348 4103239.
          </p>
        </section>
      </div>
    </div>
  );
}
