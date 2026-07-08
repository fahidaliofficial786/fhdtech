import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site/Header";
import { SiteFooter } from "../components/site/Footer";
import { FloatingCTA } from "../components/site/FloatingCTA";
import { CookieBanner } from "../components/site/CookieBanner";

const SITE_NAME = "FHDTech";
const SITE_DESC =
  "FHDTech is the AI automation, CRM, and lead-generation agency for service businesses — GoHighLevel builds, AI voice agents, SEO, and websites that book more revenue.";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "FHDTech — AI Automation, CRM & Lead Generation for Service Businesses",
      },
      { name: "description", content: SITE_DESC },
      { name: "author", content: SITE_NAME },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "FHDTech — Automate. Convert. Scale.",
      },
      { property: "og:description", content: SITE_DESC },
      { property: "og:image", content: "https://fhdtech.com/favicon.svg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FHDTech — Automate. Convert. Scale." },
      { name: "twitter:description", content: SITE_DESC },
      { name: "twitter:image", content: "https://fhdtech.com/favicon.svg" },
      { name: "robots", content: "index, follow" },
      { name: "google-site-verification", content: "TIduYcPBN-HzvBfSB3Ndy4UAF7Qv07xPvdNrnxpJiRU" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lexend:wght@300;400;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "FHDTech",
          url: "https://fhdtech.com",
          logo: "https://fhdtech.com/favicon.svg",
          description: SITE_DESC,
          founder: {
            "@type": "Person",
            name: "Fahid Ali",
          },
          sameAs: [
            "https://www.linkedin.com/in/fahidaliofficial",
            "https://github.com/fahidaliofficial",
            "https://youtube.com/@FHDtech",
            "https://www.instagram.com/fahidaliofficial",
            "https://facebook.com/fahidaliofficial",
            "https://twitter.com/fahidali0",
            "https://vm.tiktok.com/fahidaliofficial",
            "https://t.me/Fahidaliofficial",
          ],
        }),
      },
      {
        type: "text/javascript",
        children: `(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "xjetlhjxwq");`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-white text-brand-primary">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <FloatingCTA />
        <CookieBanner />
      </div>
    </QueryClientProvider>
  );
}
