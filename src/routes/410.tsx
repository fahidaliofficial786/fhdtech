import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HelpCircle, Trash2 } from "lucide-react";

export const Route = createFileRoute("/410")({
  head: () => ({
    meta: [
      { title: "Resource Permanently Removed — 410 | FHDTech" },
      {
        name: "description",
        content: "This page has been permanently removed and is no longer available.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: "/410" }],
  }),
  component: GonePage,
});

function GonePage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <span className="inline-flex size-14 place-items-center justify-center rounded-full bg-red-50 text-red-500 mb-6">
          <Trash2 className="size-7" />
        </span>
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-primary">
          410 — Resource Gone
        </h1>
        <h2 className="mt-3 text-lg font-semibold text-slate-700">
          This link is permanently retired.
        </h2>
        <p className="mt-4 text-sm text-slate-500 leading-relaxed">
          The page or system setup you were trying to access has been deleted and is no longer
          supported on our domain. We apologize for any inconvenience.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            Go to homepage <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-brand-primary hover:bg-slate-50"
          >
            <HelpCircle className="size-4" /> Contact support
          </Link>
        </div>
      </div>
    </div>
  );
}
