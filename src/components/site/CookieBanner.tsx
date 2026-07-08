import { useState, useEffect } from "react";
import { ShieldCheck, X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("fhdtech_cookie_consent");
    if (!consent) {
      // Show banner after a short delay for smooth entry
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("fhdtech_cookie_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("fhdtech_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-xs rounded-2xl border border-slate-100 bg-white p-5 shadow-2xl shadow-brand-primary/10 animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-brand-accent">
          <ShieldCheck className="size-5 shrink-0" />
          <h4 className="font-display text-sm font-bold text-brand-primary">Cookie Preferences</h4>
        </div>
        <button
          onClick={handleDecline}
          aria-label="Close cookie consent"
          className="text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="size-4" />
        </button>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-slate-500">
        We use cookies to analyze web traffic, optimize site performance, and personalize
        GoHighLevel lead capture experiences.
      </p>
      <div className="mt-4 flex flex-col gap-2">
        <button
          onClick={handleAccept}
          className="w-full rounded-xl bg-brand-accent px-4 py-2 text-xs font-bold text-white transition-transform hover:-translate-y-0.5"
        >
          Accept All Cookies
        </button>
        <button
          onClick={handleDecline}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
        >
          Decline Optional
        </button>
      </div>
    </div>
  );
}
