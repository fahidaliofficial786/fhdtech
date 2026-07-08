import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Enterprise Terms & Conditions | FHDTech" },
      {
        name: "description",
        content:
          "Enterprise Terms of Service for FHDTech. Detailed terms on project milestones, payments, liability, and governance.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: "https://fhdtech.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 bg-white">
      <h1 className="font-display text-4xl font-bold text-brand-primary">Terms & Conditions</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: 8 July 2026</p>

      <div className="prose prose-slate mt-10 max-w-none text-slate-600 space-y-8">
        <p className="lead text-lg text-slate-500 font-medium border-l-4 border-brand-accent pl-4">
          These Terms & Conditions (“Terms”) govern your relationship with FHDTech (“FHDTech”, “we”,
          “us”, “our”) and define the rules for using our services, snapshots, custom codes, and
          consulting integrations.
        </p>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By browsing our website or signing our work estimates, you confirm that you accept these
            Terms and agree to be bound by them. If you disagree with any section, you must cease
            website access immediately.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            2. Description of Technical Services
          </h2>
          <p>
            FHDTech offers GoHighLevel (GHL) CRM design, custom API integrations via Make/Zapier, AI
            conversational chatbots, local maps ranking, WordPress recovery, and specialized website
            malware extraction.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            3. Eligibility and Business Status
          </h2>
          <p>
            Our solutions are structured for business owners and professional entities. By engaging
            our services, you warrant that you possess the legal authority to enter into financial
            and operational contracts.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            4. Account Registration and Access Details
          </h2>
          <p>
            To implement GHL snapshots or WP cleanups, you may be required to share technical
            access. You agree to generate secure credentials and restrict access to unauthorized
            team members.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            5. Client Cooperation Commitments
          </h2>
          <p>
            Our delivery timelines rely on client cooperation. You agree to submit design assets,
            SMS copywriting, forms details, and domain DNS access within 5 business days of request.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            6. Third-Party Account & Software Responsibilities
          </h2>
          <p>
            Clients are solely responsible for their billing accounts with third-party vendors. You
            must maintain active credit cards on GoHighLevel, Twilio, Mailgun, and web hosting
            profiles to prevent connection drops.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            7. Project Milestones and Handover Sprints
          </h2>
          <p>
            All larger projects are split into milestones. Upon completing a milestone, we provide a
            preview link. You are required to submit revision requests within a 7-day review window.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            8. Invoicing, Payments, and Billing Cycles
          </h2>
          <p>
            One-off project milestones are invoiced with a 50% deposit and 50% due on deployment.
            Monthly CRM maintenance retainers are invoiced 5 days prior to the start of the billing
            month.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            9. Late Payments, Suspensions, and Recovery Fees
          </h2>
          <p>
            Invoices unpaid past 10 calendar days will trigger an automated pause on your CRM
            integrations, custom code servers, and support availability. A reactivation fee may
            apply.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            10. Client Data and Opt-In Integrity
          </h2>
          <p>
            You warrant that all phone numbers and email contacts imported into pipelines built by
            FHDTech were legally acquired. We are not liable for legal actions resulting from spam
            messaging.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            11. Intellectual Property Ownership Rules
          </h2>
          <p>
            Upon receipt of your final milestone payment, ownership of custom configured assets
            transfers to you. We retain ownership of our core SNAPSHOT skeletons and pre-engineered
            templates.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            12. Prohibited Activities on Website
          </h2>
          <p>
            You may not hack, crawl, scrape, mirror, or inject scripts into fhdtech.com. You are
            forbidden from reverse-engineering our codebases or reselling our customized developer
            Snapshots without consent.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            13. Service Warranty and Workmanship Quality
          </h2>
          <p>
            We warrant that our solutions are implemented using standard frameworks. We offer a
            30-day post-handover support window to fix configuration errors without extra fees.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            14. Disclaimer of Warranties
          </h2>
          <p>
            Our tools are provided on an "as-is" basis. We make no warranty that your custom
            integrations will run without downtime, due to reliance on external SaaS API systems.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            15. Indemnification
          </h2>
          <p>
            You agree to indemnify, defend, and hold harmless FHDTech and Fahid Ali from any claims,
            losses, or legal costs arising from your configuration choices or data breaches.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            16. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted under law, our aggregate liability for any claims
            arising under our contract is limited strictly to the amount paid to us for the specific
            disputed project milestone.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            17. Force Majeure
          </h2>
          <p>
            FHDTech shall not be held liable for delivery delays or failures caused by natural
            disasters, telecommunications outages, global server failures, or carrier registry
            blocks.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            18. Dispute Resolution and Arbitration
          </h2>
          <p>
            Any disputes arising out of your contract will first be addressed via friendly
            negotiations. If unresolved after 30 days, the dispute shall be resolved through
            arbitration.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            19. Governing Law and Jurisdiction
          </h2>
          <p>
            These terms and all project agreements shall be governed by and interpreted in
            accordance with the laws of Pakistan. The courts of Lahore hold exclusive jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            20. Contact Information
          </h2>
          <p>
            For questions or formal contract communications, please email us at{" "}
            <a
              href="mailto:Fahaidaliofficial@gmail.com"
              className="text-brand-accent font-semibold hover:underline"
            >
              Fahaidaliofficial@gmail.com
            </a>{" "}
            or reach out on WhatsApp at +92 348 4103239.
          </p>
        </section>
      </div>
    </div>
  );
}
