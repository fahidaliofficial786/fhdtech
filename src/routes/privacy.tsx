import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | FHDTech" },
      {
        name: "description",
        content: "How FHDTech collects, uses, and protects your information.",
      },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://fhdtech.com/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-display text-4xl font-bold text-brand-primary">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: 8 July 2026</p>
      <div className="prose prose-slate mt-10 max-w-none text-slate-600">
        <p>
          FHDTech (“we”, “us”, “our”) respects your privacy. This policy explains what information
          we collect when you interact with fhdtech.com, how we use it, and the choices you have.
        </p>
        <h2>Information we collect</h2>
        <p>
          We collect information you voluntarily submit through contact forms, newsletter
          subscriptions, and booking requests — typically your name, email, company, and message. We
          also collect basic analytics (pages viewed, referrer, device type).
        </p>
        <h2>How we use it</h2>
        <p>
          To respond to your request, deliver services you engage us for, send occasional updates
          you've opted into, and improve the website. We never sell your data.
        </p>
        <h2>Third-party services</h2>
        <p>
          We use Calendly (bookings), Formspree (contact form), and standard analytics providers.
          Each has its own privacy policy.
        </p>
        <h2>Your rights</h2>
        <p>
          You can request access, correction, or deletion of your data at any time by emailing{" "}
          <a href="mailto:Fahaidaliofficial@gmail.com">Fahaidaliofficial@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
