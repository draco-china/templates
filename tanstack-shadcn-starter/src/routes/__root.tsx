import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { NavigationProgress } from "#/components/base/navigation-progress";
import { Toaster } from "#/components/ui/sonner";
import { TooltipProvider } from "#/components/ui/tooltip";
import { DirectionProvider } from "#/context/direction-provider";
import { FontProvider } from "#/context/font-provider";
import { ThemeProvider } from "#/context/theme-provider";
import { GeneralError } from "#/features/errors/general-error";
import { NotFoundError } from "#/features/errors/not-found-error";
import appCss from "../styles/index.css?url";

interface MyRouterContext {
  queryClient: QueryClient;
}

const THEME_INIT_SCRIPT = `(function(){try{var m=document.cookie.match(/(?:^|; )theme=([^;]*)/);var s=m?decodeURIComponent(m[1]):null;var mode=(s==='light'||s==='dark'||s==='system')?s:'system';var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var r=mode==='system'?(d?'dark':'light'):mode;var root=document.documentElement;root.setAttribute('data-mode',r);root.style.colorScheme=r}catch(e){}})();`;

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Shadcn Starter",
      },
      {
        name: "description",
        content:
          "A modern full-stack web starter template built with React 19, TanStack Start, TanStack Router, TanStack Query, shadcn/ui, Tailwind CSS v4, and Cloudflare Workers.",
      },
      {
        name: "keywords",
        content:
          "react, tanstack, tanstack-start, tanstack-router, shadcn, tailwindcss, cloudflare-workers, vite, typescript, starter, template",
      },
      {
        name: "author",
        content: "TanStack Shadcn Starter",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "TanStack Shadcn Starter",
      },
      {
        property: "og:url",
        content: "https://tanstack-shadcn-starter.pages.dev",
      },
      {
        property: "og:title",
        content: "TanStack Shadcn Starter",
      },
      {
        property: "og:description",
        content:
          "A modern full-stack web starter template built with React 19, TanStack Start, TanStack Router, TanStack Query, shadcn/ui, Tailwind CSS v4, and Cloudflare Workers.",
      },
      {
        property: "og:image",
        content: "https://tanstack-shadcn-starter.pages.dev/og-image.png",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:locale",
        content: "en_US",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:site",
        content: "@your_handle",
      },
      {
        name: "twitter:title",
        content: "TanStack Shadcn Starter",
      },
      {
        name: "twitter:description",
        content:
          "A modern full-stack web starter template built with React 19, TanStack Start, TanStack Router, TanStack Query, shadcn/ui, Tailwind CSS v4, and Cloudflare Workers.",
      },
      {
        name: "twitter:image",
        content: "https://tanstack-shadcn-starter.pages.dev/og-image.png",
      },
      {
        name: "theme-color",
        content: "#ffffff",
        media: "(prefers-color-scheme: light)",
      },
      {
        name: "theme-color",
        content: "#000000",
        media: "(prefers-color-scheme: dark)",
      },
      {
        name: "mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "default",
      },
      {
        name: "apple-mobile-web-app-title",
        content: "TSS",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-96x96.png",
        sizes: "96x96",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
      {
        rel: "shortcut icon",
        href: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
      {
        rel: "canonical",
        href: "https://tanstack-shadcn-starter.pages.dev",
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   reportWebVitals((metric) => {
  //     console.log(metric);
  //   });
  // }, []);
  return (
    <html
      data-mode="light"
      lang="zh"
      prefix="og: https://ogp.me/ns#"
      suppressHydrationWarning
    >
      <head>
        {/** biome-ignore lint/security/noDangerouslySetInnerHtml: This is necessary to set the theme before React hydration, preventing a flash of incorrect theme */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="wrap-anywhere antialiased selection:bg-[rgba(79,184,178,0.24)]">
        <NavigationProgress />
        <ThemeProvider>
          <FontProvider>
            <DirectionProvider>
              <TooltipProvider>{children}</TooltipProvider>
            </DirectionProvider>
          </FontProvider>
        </ThemeProvider>
        <Toaster duration={5000} />
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
            {
              name: "Tanstack Query",
              render: <ReactQueryDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
