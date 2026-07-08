import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-slate-200">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="py-2">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-brand-primary md:text-lg">{it.q}</span>
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-accent/10 text-brand-accent">
                {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
            {isOpen ? (
              <p className="pb-6 pr-12 text-sm leading-relaxed text-slate-600 md:text-base">
                {it.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
