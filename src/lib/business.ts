// Real business details for FHDTech (Fahid Ali).
// Verified from https://portfolio.fhdtech.com/ and the founder's public profiles.

export const BUSINESS = {
  name: "FHDTech",
  founder: "Fahid Ali",
  tagline: "Build, Automate & Secure Your Business",
  email: "Fahaidaliofficial@gmail.com",
  whatsapp: "https://wa.me/+923484103239?text=Hello-I-Need-Help",
  whatsappNumber: "+92 348 4103239",
  calendly: "https://calendly.com/fahidaliofficial/30min?back=1",
  contactForm: "https://formspree.io/f/xeorkqnk",
  portfolio: "https://portfolio.fhdtech.com/",
  fiverr: "https://www.fiverr.com/fahidaliofficia",
  officeHours: [
    { days: "Mon – Fri", hours: "9:00 AM – 8:00 PM (GMT+5)" },
    { days: "Saturday", hours: "10:00 AM – 4:00 PM (GMT+5)" },
    { days: "Sunday", hours: "Closed · WhatsApp available" },
  ],
} as const;

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/fahidaliofficial" },
  { label: "GitHub", href: "https://github.com/fahidaliofficial" },
  { label: "YouTube", href: "https://youtube.com/@FHDtech" },
  { label: "Instagram", href: "https://www.instagram.com/fahidaliofficial" },
  { label: "Facebook", href: "https://facebook.com/fahidaliofficial" },
  { label: "X (Twitter)", href: "https://twitter.com/fahidali0" },
  { label: "TikTok", href: "https://vm.tiktok.com/fahidaliofficial" },
  { label: "Telegram", href: "https://t.me/Fahidaliofficial" },
  { label: "Fiverr", href: BUSINESS.fiverr },
] as const;

// Real, published portfolio metrics.
export const METRICS = [
  { end: 30, suffix: "%+", label: "Lead conversion increase" },
  { end: 15, suffix: "hrs", label: "Saved per week" },
  { end: 130, suffix: "+", label: "Projects completed" },
  { end: 4.9, suffix: "★", label: "Average client rating", decimals: 1 },
] as const;

// Verified technical stack from the portfolio's "Technical Arsenal".
export const TECH_STACK = [
  "GoHighLevel (GHL)",
  "WordPress Setup & Dev",
  "WP Malware Removal",
  "Security Hardening",
  "Zapier / Make.com",
  "API Integration",
  "CRM Management",
  "Sales Funnels",
  "HTML5 & CSS3",
  "JavaScript",
  "PHP & MySQL",
  "Server Configuration",
] as const;
