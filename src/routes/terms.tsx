import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | FHDTech" },
      { name: "description", content: "Terms of engagement for FHDTech services and website use." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://fhdtech.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-display text-4xl font-bold text-brand-primary">Terms & Conditions</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: 8 July 2026</p>
      <div className="prose prose-slate mt-10 max-w-none text-slate-600">
        <p>
          By using fhdtech.com or engaging FHDTech (“Fahid Ali”, “we”) for services, you agree to
          these terms. Project-specific terms are covered in a separate written agreement or
          proposal.
        </p>
        <h2>Services</h2>
        <p>
          We provide CRM setup, automation, AI, web development, SEO, and related growth services.
          Scope, timeline, and deliverables are defined per engagement.
        </p>
        <h2>Payments</h2>
        <p>
          Fees, milestones, and payment terms are agreed in writing before work begins. Late
          payments may pause active work.
        </p>
        <h2>Intellectual property</h2>
        <p>
          Delivered work becomes yours upon final payment. We retain rights to underlying tools,
          frameworks, and to showcase non-confidential work in our portfolio.
        </p>
        <h2>Warranty & liability</h2>
        <p>
          Services are provided “as is”. We warrant professional execution but disclaim liability
          for indirect or consequential damages beyond fees paid.
        </p>
        <h2>Contact</h2>
        <p>
          Questions? Email{" "}
          <a href="mailto:Fahaidaliofficial@gmail.com">Fahaidaliofficial@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
