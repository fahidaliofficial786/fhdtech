import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy | FHDTech" },
      {
        name: "description",
        content:
          "Understand FHDTech's billing milestones, project refund rules, retainer cancellations, and WordPress malware removal refund guarantees.",
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

      <div className="prose prose-slate mt-10 max-w-none text-slate-600 space-y-6">
        <p className="lead text-lg text-slate-500 font-medium">
          Thank you for choosing FHDTech (“FHDTech”, “we”, “us”, “our”), led by Fahid Ali. Because
          we provide customized, technical, and service-based solutions (CRM configuration, custom
          coding, API setup, malware cleanup, and local SEO), our refund and cancellation policies
          reflect the manual labor and time invested in each engagement.
        </p>

        <hr className="border-slate-100 my-8" />

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            1. Custom Projects & CRM Setups
          </h2>
          <p>
            For custom development projects, such as our GoHighLevel CRM setup sprint or custom
            Zapier/Make integrations:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Deposits:</strong> A 50% deposit (or initial milestone fee) is required to
              secure calendar slots and initiate strategy scoping. Once discovery sessions are
              conducted and scoping sheets are created, the deposit becomes non-refundable.
            </li>
            <li>
              <strong>Sign-off Milestones:</strong> Once a project phase or final deliverable is
              built in our staging environment, reviewed by your team, and signed off, the
              associated fee is non-refundable.
            </li>
            <li>
              <strong>Unearned Fees:</strong> If a project is cancelled mid-development by the
              client, we stop all work immediately. You will be invoiced for the hours logged up to
              the cancellation time, and any remaining balance from your deposit will be refunded.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            2. Retainer & Support Services
          </h2>
          <p>For monthly CRM optimization and technical support retainers:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Cancellation Notice:</strong> You may cancel your monthly retainer at any time
              with a **14-day written notice** prior to your next billing cycle. Notice must be sent
              via email to{" "}
              <a href="mailto:Fahaidaliofficial@gmail.com">Fahaidaliofficial@gmail.com</a>.
            </li>
            <li>
              <strong>Billing Cycles:</strong> We do not offer partial refunds or pro-rated credits
              for billing cycles already completed or active. Service continues until the end of the
              paid cycle.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            3. WordPress Malware Removal Money-Back Guarantee
          </h2>
          <p>
            Emergency malware cleanup and Google blacklist recovery services are backed by a **100%
            Money-Back Guarantee**:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              We guarantee to clean your site, delete backdoor scripts, and request Google blacklist
              removal within 24 to 72 hours.
            </li>
            <li>
              If your site cannot be successfully cleaned due to hosting limitations, absolute
              database corruption, or server constraints preventing recovery, we will issue a **full
              100% refund** of the malware removal service fee.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            4. Twilio, Mailgun, and Third-Party Costs
          </h2>
          <p>
            FHDTech does not control or handle third-party carrier fees. All fees charged by Twilio
            (telephony usage, registration costs, A2P 10DLC brand/campaign registration), Mailgun
            (sending volume), Zapier, Make.com, domain registrars, or web hosts are 100%
            non-refundable under any circumstances. These are billed directly to your payment cards
            by the respective service providers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            5. Requesting a Refund
          </h2>
          <p>
            To request a refund review under the terms outlined above, contact us with your project
            details:
          </p>
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
