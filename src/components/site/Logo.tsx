import { Link } from "@tanstack/react-router";

/**
 * FHDTech logo — SVG monogram + wordmark.
 * - Works on light and dark surfaces (wordmark inherits `currentColor`).
 * - Mark uses a fixed brand gradient with a cyan "signal" node,
 *   evoking AI, automation, and connected systems.
 */
export function FhdMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fhd-mark-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1E3A8A" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#fhd-mark-g)" />
      <path d="M18 46V18h28v7H26v6h16v7H26v8z" fill="#fff" />
      <circle cx="48" cy="46" r="4" fill="#22D3EE" />
    </svg>
  );
}

export function FhdLogo({
  className = "",
  wordmarkClassName = "text-brand-primary",
}: {
  className?: string;
  wordmarkClassName?: string;
}) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="FHDTech — Home"
    >
      <FhdMark className="size-9" />
      <span className={`font-display text-xl font-extrabold tracking-tight ${wordmarkClassName}`}>
        FHD<span className="text-brand-accent">Tech</span>
      </span>
    </Link>
  );
}
