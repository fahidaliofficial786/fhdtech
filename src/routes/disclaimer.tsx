import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | FHDTech" },
      {
        name: "description",
        content:
          "Legal disclaimers for FHDTech. Understand our policies regarding earnings, client results, external links, and professional advice.",
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

      <div className="prose prose-slate mt-10 max-w-none text-slate-600 space-y-6">
        <p className="lead text-lg text-slate-500 font-medium">
          The information provided on fhdtech.com (“Website”) and through our CRM, AI, web
          development, and marketing consultation services is for general informational and
          operational purposes only. Please read this Disclaimer carefully before utilizing our
          services.
        </p>

        <hr className="border-slate-100 my-8" />

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            1. No Professional Advice
          </h2>
          <p>
            FHDTech, founded by Fahid Ali, is a technical systems configuration and custom
            development studio. We build GoHighLevel databases, configure Twilio connections, write
            automation code, and clean WordPress directories. We are not lawyers, certified public
            accountants (CPAs), financial planners, or compliance officers. Any information or
            templates we provide regarding carrier regulations (A2P 10DLC compliance), database
            privacy (HIPAA configs), or terms of service does not constitute formal legal or tax
            advice. You are advised to consult with certified professionals before implementing
            custom legal configurations.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            2. Earnings and Results Disclaimer
          </h2>
          <p>
            Throughout our Website, case studies, and blog posts, we showcase client success
            metrics, such as:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>"+$50K new revenue"</li>
            <li>"+287% booked installs"</li>
            <li>"15+ hours saved per week"</li>
            <li>"Cost per lead reduced by 63%"</li>
          </ul>
          <p className="mt-3">
            These statistics are historical results verified from actual engagements. However, these
            outcomes represent exceptional performance and are not a promise, warranty, or guarantee
            of similar results for your business. Your success using GoHighLevel CRM workflows, AI
            voice agents, Google/Facebook ads, or SEO strategies depends on factors outside our
            control, including your market competition, sales representative skill levels, customer
            service quality, pricing, and general economic conditions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            3. Third-Party Links & Integrations Disclaimer
          </h2>
          <p>
            Our Website and configured services may contain links or dependencies to external
            third-party software, including GoHighLevel, Twilio, Mailgun, Zapier, Make, OpenAI, and
            WordPress hosting providers. We have no control over the uptime, API changes, security
            breaches, terms updates, or data practices of these external services. You engage with
            these platforms at your own risk and are bound by their respective policies.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            4. Reviews & Testimonials
          </h2>
          <p>
            Testimonials appearing on our site are received via text, WhatsApp, or public Fiverr
            reviews. They represent real-life experiences of individual clients who have utilized
            our services. However, individual results vary and we do not claim that they are typical
            of what every client will experience.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            5. "As-Is" Website Use
          </h2>
          <p>
            This Website and its contents are provided on an "as-is" basis. We make no
            representations or warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, or availability of the Website, its templates, or graphics. Any
            reliance you place on such information is strictly at your own risk.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-brand-primary mt-6 mb-3">
            6. Contact Info
          </h2>
          <p>If you have any questions about this Disclaimer, please contact us at:</p>
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
