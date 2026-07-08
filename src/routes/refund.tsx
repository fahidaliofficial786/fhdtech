import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Enterprise Refund & Cancellation Policy | FHDTech" },
      {
        name: "description",
        content:
          "Enterprise Refund & Cancellation Policy for FHDTech. Detailed terms on project refunds, retainers, and WP cleanup guarantees.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: "https://fhdtech.com/refund" }],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 bg-white">
      <h1 className="font-display text-4xl font-bold text-brand-primary">
        Refund & Cancellation Policy
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: 8 July 2026</p>

      <div className="prose prose-slate mt-10 max-w-none text-slate-600 space-y-8">
        <p className="lead text-lg text-slate-500 font-medium border-l-4 border-brand-accent pl-4">
          This Refund & Cancellation Policy outlines the financial terms governing our CRM
          development projects, retainer support agreements, and emergency malware cleanups.
        </p>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            1. Service Billing Scopes
          </h2>
          <p>
            FHDTech offers project-based milestone billing and monthly support retainers. Each
            service is subject to distinct refund criteria based on operational costs.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            2. No-Refunds for Completed Configurations
          </h2>
          <p>
            Because technical services (coding, database configurations, pipeline integrations)
            involve manual developer hours, completed milestones are non-refundable.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            3. Blueprint Strategy Scoping Deposits
          </h2>
          <p>
            Project deposits (50% upfront) cover business scoping, wireframes, and database
            planning. Once strategy sessions are conducted, deposits are non-refundable.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            4. Mid-Development Project Cancellations
          </h2>
          <p>
            If a project is cancelled mid-way, you will receive a pro-rated invoice for development
            hours logged up to that point. Any unearned balance from your deposit will be refunded.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            5. Monthly Optimization Retainer Cancellations
          </h2>
          <p>
            You may cancel ongoing monthly optimization retainers at any time. We require a **14-day
            written notice** prior to your next recurring billing date.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            6. Retainer Billing Cycles Rules
          </h2>
          <p>
            We do not issue partial credits or pro-rated refunds for billing months already started.
            Service will remain active until the end of the paid cycle.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            7. Late Cancellations & Support Suspensions
          </h2>
          <p>
            If a cancellation notice is submitted less than 14 days before the billing cycle, the
            next month will be billed, and service will end at the end of that subsequent month.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            8. Unused Retainer Hours Expiration
          </h2>
          <p>
            Unused development hours or technical support credits from a monthly retainer do not
            roll over to the next month. Unused hours expire at the end of each billing cycle.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            9. WordPress Malware Cleaning Refund Guarantee
          </h2>
          <p>
            Emergency malware removal and blacklist recovery services are backed by a **100%
            money-back guarantee** if your site cannot be successfully recovered.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            10. Circumstances Voiding Malware Removal Refund
          </h2>
          <p>
            The cleanup refund guarantee is voided if the client declines to update vulnerable
            plugins, reinstalls compromised backups, or uses weak admin credentials post-cleanup.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            11. Twilio and Carrier Communication Fees
          </h2>
          <p>
            Twilio subscription costs, A2P 10DLC campaign registration fees, and phone numbers are
            billed directly by carriers and are completely non-refundable under any conditions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            12. Mailgun and Email Server Volumes
          </h2>
          <p>
            All fees incurred for email sending volumes on Mailgun, SendGrid, or custom SMTP
            accounts are non-refundable and managed directly by your respective billing platforms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            13. Domain Registration and Web Hosting Costs
          </h2>
          <p>
            Domains, hosting server fees, SSL certifications, and custom server licenses purchased
            during development are non-refundable by FHDTech.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            14. Project Hold, Inactivity, and Delay Fees
          </h2>
          <p>
            If a client fails to provide GHL credentials or details within 30 days, the project is
            put on hold. Reactivating the project may require a re-alignment fee.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            15. Refund Review and Audit Period
          </h2>
          <p>
            All refund requests undergo a technical review. We audit logged hours and server
            configs, and process approved requests within 10 business days.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            16. Refund Payment Transfer Channels
          </h2>
          <p>
            Approved refunds are processed through the same payment gateway used for purchase (e.g.
            Stripe, Fiverr account balance). We do not send refunds to third-party bank accounts.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            17. Dispute & Chargeback Policy
          </h2>
          <p>
            Filing a merchant chargeback without first contacting support will result in immediate
            termination of all active code hosting, snapshots, and support access.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            18. Fiverr & Third-Party Marketplace Cancellations
          </h2>
          <p>
            For contracts started through Fiverr or Upwork, cancellation and refund requests must be
            managed through their official dispute resolution centers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            19. Setup Re-Activation Fees
          </h2>
          <p>
            If a subscription is cancelled and you request to reactivate support after 90 days, a
            setup fee may apply to re-audit connection configurations.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-primary mt-6 mb-3">
            20. Contact Information
          </h2>
          <p>
            For refund requests or billing queries, email Fahid Ali at{" "}
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
