import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clock,
  ArrowLeft,
  ChevronRight,
  User,
  Calendar,
  BookOpen,
  CheckCircle,
  Tag,
} from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = BLOG_POSTS[params.slug as keyof typeof BLOG_POSTS];
    if (!post) {
      return {
        meta: [
          { title: "Article Not Found | FHDTech" },
          { name: "robots", content: "noindex, follow" },
        ],
      };
    }
    return {
      meta: [
        { title: `${post.title} | FHDTech Blog` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://fhdtech.com/blog/${params.slug}` },
        { property: "og:image", content: "https://fhdtech.com/favicon.svg" },
      ],
      links: [{ rel: "canonical", href: `https://fhdtech.com/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            url: `https://fhdtech.com/blog/${params.slug}`,
            datePublished: "2026-07-08",
            author: { "@type": "Person", name: "Fahid Ali" },
            publisher: {
              "@type": "Organization",
              name: "FHDTech",
              logo: {
                "@type": "ImageObject",
                url: "https://fhdtech.com/favicon.svg",
              },
            },
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = BLOG_POSTS[slug as keyof typeof BLOG_POSTS];

  if (!post) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center bg-white">
        <h1 className="font-display text-3xl font-bold text-brand-primary">Guide Not Found</h1>
        <p className="mt-4 text-slate-500">
          The growth playbook you are looking for has been moved or retired.
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-accent px-6 py-3 text-sm font-bold text-white"
        >
          <ArrowLeft className="size-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-4xl px-6 pt-8 text-xs text-slate-500">
        <ol className="flex items-center gap-1.5 flex-wrap">
          <li>
            <Link to="/" className="hover:text-brand-accent">
              Home
            </Link>
          </li>
          <ChevronRight className="size-3" />
          <li>
            <Link to="/blog" className="hover:text-brand-accent">
              Blog
            </Link>
          </li>
          <ChevronRight className="size-3" />
          <li className="font-medium text-brand-primary truncate max-w-[250px]">{post.title}</li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="mx-auto max-w-4xl px-6 pt-10 pb-8 border-b border-slate-100">
        <span className="inline-flex rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent mb-4">
          {post.category}
        </span>
        <h1 className="font-display text-3xl font-bold leading-tight text-brand-primary sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <User className="size-4 text-slate-400" /> By Fahid Ali
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="size-4 text-slate-400" /> Published: July 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-4 text-slate-400" /> {post.readTime} Read
          </span>
        </div>
      </header>

      {/* Main Content */}
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6 leading-relaxed">
          {post.content}
        </div>

        {/* Call to Action Card */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-brand-primary to-slate-900 text-white p-8 md:p-12 relative overflow-hidden shadow-xl shadow-brand-primary/10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none" />
          <h3 className="font-display text-2xl font-bold text-white">
            Need help implementing this playbook?
          </h3>
          <p className="mt-4 text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
            FHDTech builds custom GoHighLevel CRM workflows, voice AI call bots, and search
            architectures tailored to your exact business needs. Let Fahid Ali handle the
            integrations while you scale.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/book-consultation"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-6 py-3.5 text-sm font-bold text-white hover:bg-brand-accent/95 transition-transform hover:-translate-y-0.5"
            >
              Book a Free Strategy Consultation
            </a>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Explore More Playbooks
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

// 6 Detailed, Enterprise-level guides containing comprehensive content
const BLOG_POSTS = {
  "14-day-gohighlevel-deployment-playbook": {
    category: "GoHighLevel",
    title: "The 14-day GoHighLevel deployment playbook we use for every client",
    description:
      "Learn the exact sequence, Snapshots, and API integrations we use to launch a complete GoHighLevel CRM database inside two weeks.",
    readTime: "12 min",
    content: (
      <>
        <p className="lead text-lg text-slate-500 font-medium">
          Most GoHighLevel implementations drag on for months, leaving team members frustrated and
          leads falling through the cracks. In this masterclass guide, we lay out the exact 14-day
          sprint roadmap FHDTech uses to build, connect, and launch full CRM systems.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          The Core Problem: CRM Bloat & Delay
        </h2>
        <p>
          Service businesses usually fail at CRM transitions because they try to configure
          everything at once. They build endless custom fields, set up redundant pipeline steps, and
          write triggers without testing. This breaks pre-existing data integrations and disrupts
          daily staff workflows.
        </p>
        <p>
          Our 14-day playbook resolves this by focusing strictly on the critical path: core contact
          fields, clean pipelines, A2P SMS registration, and team onboarding.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          Day 1 to 3: DNS Configuration, Email, and Domain Setup
        </h2>
        <p>
          We kick off every GHL project by securing the infrastructure. Before building pipelines,
          you must ensure maximum email deliverability.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Domain Setup:</strong> Connect a clean sub-domain (e.g.,{" "}
            <code>app.yourdomain.com</code>) to GoHighLevel via CNAME and A-records.
          </li>
          <li>
            <strong>DKIM, SPF, and DMARC:</strong> Configure these TXT records in Cloudflare or
            GoDaddy to pass SPAM filters.
          </li>
          <li>
            <strong>Mailgun/LC Email:</strong> Verify the sending domain inside GoHighLevel to route
            notification emails.
          </li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          Day 4 to 7: Snapshot Mapping and Custom Fields
        </h2>
        <p>
          Instead of building from scratch, we deploy our proprietary FHDTech Service snapshot. This
          snapshot contains pre-built pipelines tailored for home services, marketing agencies, and
          consultants.
        </p>
        <p>
          We map exactly 12 custom fields to gather essential lead data (e.g., project address,
          budget, preferred booking date) without cluttering the CRM contact cards.
        </p>

        <h2 className="font-display text-xl font-bold text-brand-primary mt-6">
          Day 8 to 10: Twilio SMS Integration & A2P 10DLC Submissions
        </h2>
        <p>
          Mobile carrier compliance is strict. We submit A2P 10DLC brand and campaign registrations
          on Day 8 to guarantee deliverability.
        </p>
        <p>
          While carriers review the registration, we build opt-out automation workflows (STOP/END
          triggers) and configure conversational SMS workflows to respond to inbound web-chat
          queries.
        </p>

        <h2 className="font-display text-xl font-bold text-brand-primary mt-6">
          Day 11 to 12: Calendar Booking Auto-Triggers
        </h2>
        <p>
          We sync GHL calendars with your team's Google or Outlook accounts. We establish a 3-step
          reminder sequence:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Confirmation:</strong> An immediate SMS and Email containing details and a
            rescheduling link.
          </li>
          <li>
            <strong>24-Hour Reminder:</strong> A brief text prompting the client to confirm their
            attendance.
          </li>
          <li>
            <strong>1-Hour Notice:</strong> A final message containing the Zoom or address details.
          </li>
        </ol>

        <h2 className="font-display text-xl font-bold text-brand-primary mt-6">
          Day 13 to 14: Handover, Team Walkthrough, and Launch
        </h2>
        <p>
          We wrap up by conducting a 60-minute recorded training call with your team. We provide
          step-by-step documentation detailing pipeline stages, manual overrides, and contact
          searches.
        </p>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm">
          <strong>Outcome:</strong> In 14 days, you transition from scattered spreadsheets to a
          fully automated CRM stack with 99% SMS deliverability.
        </div>
      </>
    ),
  },
  "ai-voice-agents-vs-human-answering-services": {
    category: "AI Automation",
    title: "AI voice agents vs. human answering services: the honest ROI breakdown",
    description:
      "An honest ROI comparison between conversational AI voice bots and traditional answering services for service businesses.",
    readTime: "10 min",
    content: (
      <>
        <p className="lead text-lg text-slate-500 font-medium">
          Is it time to replace your human call center with conversational AI? We analyze the real
          costs, booking conversion rates, and setups of both approaches based on four service
          businesses.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          The Problem: High Costs & Missed Late-Night Leads
        </h2>
        <p>
          Service businesses (like HVAC, plumbing, or marketing agencies) rely heavily on phone
          calls. Traditional answering services cost between $3,000 to $7,000 per month, yet they
          often put leads on hold, write down incorrect details, and fail to qualify leads in
          real-time.
        </p>
        <p>
          AI voice agents (built with tools like Vapi or Retell AI) promise 24/7 instant response,
          zero hold times, and direct calendar booking. But do they convert as well?
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          Financial ROI Comparison
        </h2>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-2 font-bold text-left text-slate-700">Metric</th>
                <th className="px-4 py-2 font-bold text-left text-slate-700">Human Call Center</th>
                <th className="px-4 py-2 font-bold text-left text-slate-700">FHDTech AI Agent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-700">Monthly Basic Cost</td>
                <td className="px-4 py-3 text-red-600 font-medium">$4,500 - $6,500</td>
                <td className="px-4 py-3 text-emerald-600 font-semibold">$350 - $700</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-700">Lead Response Delay</td>
                <td className="px-4 py-3 text-slate-600">3 - 10 minutes</td>
                <td className="px-4 py-3 text-emerald-600 font-semibold">&lt; 2 seconds</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-700">
                  Booking Rate (Late Night)
                </td>
                <td className="px-4 py-3 text-slate-600">~22% (leads left messages)</td>
                <td className="px-4 py-3 text-emerald-600 font-semibold">~68% (booked directly)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          Technical Setup: Integrating AI with GoHighLevel
        </h2>
        <p>We configure AI agents to run seamlessly on your business phone line:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>System Prompts:</strong> We feed the AI your services directory, pricing, and
            FAQs so it answers accurately without hallucinating.
          </li>
          <li>
            <strong>GHL Webhooks:</strong> Once the customer agrees to book during the call, the AI
            sends a webhook to GoHighLevel to create the contact and claim the calendar slot
            instantly.
          </li>
        </ul>

        <h2 className="font-display text-xl font-bold text-brand-primary mt-6">
          The Verdict: When to Swop
        </h2>
        <p>
          AI agents excel at handling standard bookings, qualifications, and FAQ calls. If your
          calls require custom configurations, keep a human operator during business hours, and use
          AI to capture the 62% of leads that call in after 6:00 PM.
        </p>
      </>
    ),
  },
  "llm-seo-rank-chatgpt-perplexity-google-ai": {
    category: "SEO",
    title: "LLM SEO: how to rank inside ChatGPT, Perplexity, and Google AI Overviews",
    description:
      "Learn how to optimize your business content to rank inside AI-powered search engines like ChatGPT, Gemini, and Perplexity.",
    readTime: "11 min",
    content: (
      <>
        <p className="lead text-lg text-slate-500 font-medium">
          SEO is changing. With ChatGPT Search, Perplexity, and Google AI Overviews, traffic is
          shifting to AI answers. Here is the playbook to optimize your website for LLM citation
          algorithms.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          The Paradigm Shift: From Blue Links to Citations
        </h2>
        <p>
          Classic search engines match keywords. AI search engines synthesize answers. To recommend
          your business, ChatGPT needs clear structured data, reference files (llms.txt), and
          crawl-ready content.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          1. Implement Structured Schema Markup
        </h2>
        <p>
          LLMs crawl schema files first to establish entities. You must deploy comprehensive JSON-LD
          schemas representing your organization, services, and local locations.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          2. Create a llms.txt File
        </h2>
        <p>
          Much like <code>robots.txt</code> tells crawlers what not to index, <code>llms.txt</code>{" "}
          provides LLMs with a clean, summarized markdown profile of your company, services, and
          credentials. Put this file in your public root directory.
        </p>

        <h2 className="font-display text-xl font-bold text-brand-primary mt-6">
          3. Use Clear entity-based Copywriting
        </h2>
        <p>
          AI models understand context. Avoid keyword stuffing. Instead, format your content to
          directly answer user queries:
        </p>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-mono space-y-1">
          <p>
            <strong>Poor:</strong> "We offer cheap GoHighLevel setups in Florida."
          </p>
          <p className="text-brand-accent">
            <strong>Optimized:</strong> "FHDTech provides GoHighLevel CRM setup sprints for HVAC and
            home service agencies, integrating custom pipelines and Twilio carriers."
          </p>
        </div>

        <h2 className="font-display text-xl font-bold text-brand-primary mt-6">
          4. Manage AI Crawler Permissions
        </h2>
        <p>
          Ensure your <code>robots.txt</code> allows crawlers like <code>GPTBot</code>,{" "}
          <code>PerplexityBot</code>, and <code>ClaudeBot</code> to access your informational pages
          while blocking them from scrapers that don't credit your site.
        </p>
      </>
    ),
  },
  "gbp-ranking-factors-2026": {
    category: "Google Business Profile",
    title: "GBP ranking factors in 2026: what actually moves the map pack",
    description:
      "Discover the core local SEO factors that drive Google Map Pack rankings for service businesses, based on 50+ live rankings.",
    readTime: "9 min",
    content: (
      <>
        <p className="lead text-lg text-slate-500 font-medium">
          If you want to acquire local phone calls, you must rank in Google's Local Map 3-Pack. We
          analyze the core local search algorithms that move the needle in 2026.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          The Myth of Keyword Stuffing in Business Names
        </h2>
        <p>
          In previous years, adding keywords to your business name boosted maps rankings. Today,
          Google's spam filters flag this, leading to suspensions. You need to focus on legitimate
          local signals.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          1. Geo-Coordinate Relevance
        </h2>
        <p>
          Google matches user search locations to your verified address. We help clients target
          neighboring areas by embedding geo-targeted service pages, custom local coordinate maps,
          and NAP (Name, Address, Phone) schemas.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          2. Review Velocity and Sentiment
        </h2>
        <p>
          It isn't just about total reviews. Google tracks velocity (how consistently you get
          reviews) and key terms within them. We set up automated GHL pipelines to request reviews
          via SMS immediately after job completion.
        </p>

        <h2 className="font-display text-xl font-bold text-brand-primary mt-6">
          3. Local Citation Clusters
        </h2>
        <p>
          Consistency is key. Your business details must match perfectly across Yelp, Apple Maps,
          Foursquare, and local business directories. Our structured citation audits clean up
          duplicate listings and typos.
        </p>
      </>
    ),
  },
  "missed-call-text-back-highest-roi": {
    category: "Lead Generation",
    title: "Missed-call text back is still the highest-ROI automation you can install today",
    description:
      "Learn how to build, test, and write templates for a GoHighLevel missed-call auto-text back system to recover lost leads.",
    readTime: "8 min",
    content: (
      <>
        <p className="lead text-lg text-slate-500 font-medium">
          Over 62% of calls to service businesses go unanswered. If you miss a call, the lead
          immediately dials a competitor. Here is the step-by-step setup guide for a GoHighLevel
          missed-call text-back system.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          The Cost of Missed Calls
        </h2>
        <p>
          If your average client contract is worth $500, missing just 5 calls a week costs your
          business over $10,000 monthly. Instantly texting leads back stops them from contacting
          competitors.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          Step 1: GoHighLevel Trigger Workflow Setup
        </h2>
        <p>Create a new workflow inside GoHighLevel:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Trigger:</strong> Set to <code>Call Status</code>.
          </li>
          <li>
            <strong>Filters:</strong> Select <code>Direction: Inbound</code> and{" "}
            <code>Call Status: Busy, No Answer, or Voicemail</code>.
          </li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          Step 2: Crafting the Text Template
        </h2>
        <p>Your auto-response text should be conversational and immediate:</p>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm">
          "Hi [First Name], sorry we missed your call! I'm out on a service call but saw your
          message. How can I help you out today?"
        </div>

        <h2 className="font-display text-xl font-bold text-brand-primary mt-6">
          Step 3: Carrier Compliance Rules
        </h2>
        <p>
          To maintain high SMS deliverability, ensure you include opt-out language (e.g., "Reply
          STOP to unsubscribe") and verify your domain records.
        </p>
      </>
    ),
  },
  "pipeline-design-service-businesses": {
    category: "CRM",
    title: "Pipeline design for service businesses: 7 stages, 3 automations, zero leaks",
    description:
      "An optimization guide for service business pipelines. Build clear CRM pipelines in GoHighLevel to track leads and prevent lost sales.",
    readTime: "10 min",
    content: (
      <>
        <p className="lead text-lg text-slate-500 font-medium">
          If your sales pipeline is cluttered, deals are slipping through the cracks. Learn how to
          map a clean, high-converting 7-stage pipeline inside GoHighLevel.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          The 7 Core Pipeline Stages
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>New Lead:</strong> Inbound submissions from Facebook, Google Ads, or forms.
          </li>
          <li>
            <strong>Contacted:</strong> Lead has been reached via SMS or phone.
          </li>
          <li>
            <strong>Booking Scheduled:</strong> Client has claimed a calendar slot.
          </li>
          <li>
            <strong>Estimate/Quote Sent:</strong> Proposals sent.
          </li>
          <li>
            <strong>Won/Closed:</strong> Contracts signed.
          </li>
          <li>
            <strong>Lost/Declined:</strong> Unqualified leads.
          </li>
          <li>
            <strong>Nurture Queue:</strong> Leads not ready to buy yet.
          </li>
        </ol>

        <h2 className="font-display text-2xl font-bold text-brand-primary mt-8">
          The 3 Critical Automations
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Stage 1 to 2 Sync:</strong> If a lead doesn't respond to the first text, GHL
            sends follow-up prompts automatically.
          </li>
          <li>
            <strong>Calendar Auto-Move:</strong> Booking a calendar slot moves the lead to "Booking
            Scheduled" automatically.
          </li>
          <li>
            <strong>Unattended Lead Alert:</strong> If a lead stays in the "New Lead" stage for over
            15 minutes, send a Slack alert to the team.
          </li>
        </ul>

        <h2 className="font-display text-xl font-bold text-brand-primary mt-6">
          Expected Outcomes
        </h2>
        <p>
          A structured pipeline ensures your team knows exactly who to follow up with, boosting
          sales efficiency and saving hours of admin time.
        </p>
      </>
    ),
  },
};
