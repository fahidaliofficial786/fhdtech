import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Enterprise Legal Disclaimer | FHDTech" },
      {
        name: "description",
        content:
          "Enterprise Legal Disclaimer for FHDTech. Detailed information on professional services, performance results, and compliance disclaimers.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: "https://fhdtech.com/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 bg-white">
      <h1 className="font-display text-4xl font-bold text-brand-primary">Disclaimer</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: 8 July 2026</p>

      <div className="prose prose-slate mt-10 max-w-none text-slate-600 space-y-8">
        <p className="lead text-lg text-slate-500 font-medium border-l-4 border-brand-accent pl-4">
          This Disclaimer document contains critical legal disclosures regarding information
          accuracy, earnings performance, third-party software, and legal compliance.
        </p>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            1. General Informational Purpose
          </h2>
          <p>
            The contents of fhdtech.com are provided for general educational, informational, and
            technical resource purposes only. We do not claim this content constitutes formal
            contract guarantees.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            2. No Professional-Client Relationship
          </h2>
          <p>
            Browsing this Website, reading blog guides, downloading free automation snapshots, or
            filling out consultation forms does not establish a formal developer-client
            relationship.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            3. No Legal or Regulatory Compliance Advice
          </h2>
          <p>
            We configure systems, but we do not provide legal advice regarding privacy frameworks or
            local marketing laws. You are advised to consult with qualified legal counsels.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            4. A2P 10DLC Carrier Registry Disclaimer
          </h2>
          <p>
            FHDTech helps submit business registration details to Twilio for A2P 10DLC compliance.
            However, campaign approval status is decided solely by mobile carriers, not by FHDTech.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            5. Earnings and Revenue Disclosures
          </h2>
          <p>
            Any financial metrics shown on this Website are previous case examples. We make no
            promise or guarantee that your business will generate similar sales volumes or revenues.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            6. Lead Generation & Conversion Disclaimers
          </h2>
          <p>
            FHDTech configures GHL pipelines to track leads. However, actual customer bookings,
            response quality, and pipeline conversions rely heavily on your own sales
            representatives.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            7. Local Maps and Google Search SEO Rankings
          </h2>
          <p>
            We build map configurations for Local SEO. We do not guarantee page-one positioning on
            Google Search, as engine ranking algorithms are proprietary and change frequently.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            8. AI Models & Conversational Voice Bot Failures
          </h2>
          <p>
            AI conversational scripts utilize external LLM APIs (OpenAI, Gemini). We are not liable
            for bot hallucinations, inaccurate responses, or API connection outages.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            9. WordPress Blacklist and Malware Cleaning
          </h2>
          <p>
            Malware cleanups remove malicious scripts. However, we cannot guarantee that your server
            will never be hacked again if your team uses weak credentials or outdated plugins.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            10. External Links & Sub-Processor Websites
          </h2>
          <p>
            We link to third-party services like GHL, Twilio, and Calendly. We are not responsible
            for the contents, privacy frameworks, or security practices of these external websites.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            11. Testimonials & Case Study Accuracy
          </h2>
          <p>
            Client reviews reflect individual client-specific experiences. We do not represent that
            these results are typical or that your business will experience identical metrics.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            12. Affiliate Disclosures & Software Partner Links
          </h2>
          <p>
            FHDTech may display referral links for GoHighLevel or web hosting. If you purchase
            through these links, we may receive commissions, which helps support our free content.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            13. Accuracy and Completeness of Site Content
          </h2>
          <p>
            While we make efforts to keep website tutorials up to date, we do not warrant that
            details are completely accurate, or free from typographical or technical errors.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            14. Server Security and Database Risks
          </h2>
          <p>
            When you share technical logins, we use encrypted vaults. However, we do not assume
            liability for data leaks resulting from pre-existing system vulnerabilities on your
            servers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            15. API Interruptions and Third-Party Downtime
          </h2>
          <p>
            Automations connect multiple APIs. We are not liable for message delivery delays
            resulting from third-party server downtime (e.g. Meta, Twilio, Zapier outages).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            16. Client Action & Operational Implementation
          </h2>
          <p>
            We deliver systems, but operational success requires client execution. If your team does
            not monitor inbound leads, the software will not generate business growth.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            17. Free Snapshot & Template Disclaimers
          </h2>
          <p>
            Free GHL snapshots or CRM scripts are provided "as-is" without support warranties. We do
            not accept liability for workflows overwriting pre-existing data.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            18. Liability Cap on Free Content
          </h2>
          <p>
            For any issues arising from free guides or documentation on fhdtech.com, our total
            liability is capped strictly at $0.00.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            19. Revisions & Errata
          </h2>
          <p>
            We may modify information on the website at any time without notice. We are not
            committed to updating obsolete details on older blog articles.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            20. Contact Information
          </h2>
          <p>
            For queries regarding these legal disclaimers, please contact Fahid Ali at{" "}
            <a
              href="mailto:Fahaidaliofficial@gmail.com"
              className="text-brand-accent font-semibold hover:underline"
            >
              Fahaidaliofficial@gmail.com
            </a>{" "}
            or WhatsApp at +92 348 4103239.
          </p>
        </section>
      </div>
    </div>
  );
}
