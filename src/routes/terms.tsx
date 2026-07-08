import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | FHDTech" },
      {
        name: "description",
        content:
          "Terms of engagement for FHDTech services, project agreements, billing milestones, and user responsibilities.",
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

      <div className="prose prose-slate mt-10 max-w-none text-slate-600 space-y-6">
        <p className="lead text-lg text-slate-500 font-medium">
          Welcome to fhdtech.com. These Terms & Conditions (“Terms”) govern your access to and use
          of our website and our services, including GoHighLevel CRM setup, AI automation systems,
          WordPress development, and security services provided by FHDTech (“FHDTech”, “we”, “us”,
          “our”), led by Fahid Ali.
        </p>

        <hr className="border-slate-100 my-8" />

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            1. Engagement and Service Scope
          </h2>
          <p>
            We provide custom systems integration, GoHighLevel sub-account builds, custom workflow
            triggers, AI chatbots, local search marketing (SEO), and WordPress malware cleaning
            services. Each client engagement is defined by a separate written proposal, estimate, or
            contract (the "Agreement") outlining:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Specific deliverables, scope of configurations, and timelines.</li>
            <li>API credentials requirements, server accesses, and client inputs.</li>
            <li>Retainer parameters or one-off project milestones.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            2. Client Obligations and Access
          </h2>
          <p>
            To successfully deliver builds within agreed timelines (such as our 14-day GHL CRM setup
            sprint), you agree to provide:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              Timely access to GoHighLevel accounts, Twilio credentials, domain registrars, hosting
              panels, and API keys.
            </li>
            <li>
              Required assets including copy, logo vectors, contact databases, pipeline criteria,
              and review links.
            </li>
            <li>
              Clear feedback during design validation steps. We are not responsible for delays
              caused by missing client-side approvals or carrier registry bottlenecks (e.g. A2P
              10DLC trust score approvals).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            3. Fees, Payments, & Milestone Invoicing
          </h2>
          <p>Payment criteria are determined before commencing work:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Milestone Payments:</strong> Standard projects are billed in milestones (e.g.
              50% deposit, 50% upon delivery/handover) via Stripe invoice or through third-party
              platforms (Fiverr).
            </li>
            <li>
              <strong>Retainers:</strong> Ongoing optimization retainers are billed monthly in
              advance and must be cleared within 5 business days of the invoice date to avoid
              support suspensions.
            </li>
            <li>
              <strong>Third-Party Costs:</strong> You are directly responsible for your own
              subscription costs for GoHighLevel, Twilio usage, Mailgun volume, Zapier/Make tasks,
              hosting fees, and domains.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            4. Intellectual Property
          </h2>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Client Ownership:</strong> Upon full and final payment of all outstanding
              invoices, you own the customized layouts, content copy, database records, and
              workflows built specifically for your sub-account.
            </li>
            <li>
              <strong>FHDTech Property:</strong> We retain all rights, title, and ownership of our
              proprietary GoHighLevel SaaS Snapshots, pre-engineered custom scripts, database
              schemas, and developer templates built prior to or independently of this engagement.
              We retain the right to showcase screenshots of non-confidential layouts in our
              portfolio.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            5. Warranties & Service Disclaimer
          </h2>
          <p>
            We warrant that our services will be performed with professional workmanship in
            accordance with industry standards. However, services are provided on an "as is" and "as
            available" basis. We do not warrant that integrations will be completely uninterrupted
            or error-free due to dependency on external API changes (e.g., GHL, Twilio, OpenAI,
            Meta). We are not responsible for changes made by your team after the 30-day tune-up
            handover window.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            6. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, FHDTech and Fahid Ali shall not be liable for
            any indirect, incidental, special, consequential, or punitive damages, or any loss of
            profits or revenues (whether incurred directly or indirectly), or any loss of data, use,
            goodwill, or other intangible losses resulting from:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Your use of or inability to access our services or website.</li>
            <li>System hacks, WP website database breaches, or API connection issues.</li>
            <li>SMS delivery failures due to carrier registration delays.</li>
          </ul>
          <p className="mt-2">
            In no event shall our total aggregate liability exceed the total fees paid by you to
            FHDTech for the specific service under dispute.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            7. Termination
          </h2>
          <p>
            Either party may terminate an ongoing retainer or project agreement with 14 days written
            notice if the other party breaches any material term of these Terms. Upon termination,
            you remain liable for all work performed and costs incurred up to the date of
            termination.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            8. Governing Law & Jurisdiction
          </h2>
          <p>
            These Terms and any dispute arising out of or related to them shall be governed by and
            construed in accordance with the laws of Pakistan, without regard to its conflict of law
            principles. Any legal action or proceeding shall be brought exclusively in the courts of
            Lahore, Punjab, Pakistan.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            9. Contact
          </h2>
          <p>Questions or requests regarding these Terms & Conditions should be directed to:</p>
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
