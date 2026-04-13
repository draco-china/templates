# Shadcn Admin Template

A modern admin dashboard template built with React 19, TanStack Router, shadcn/ui, and Tailwind CSS 4.

## Tech Stack

- **Framework:** React 19 + Vite 8
- **Routing:** TanStack Router (file-based)
- **UI:** shadcn/ui + Radix UI + Tailwind CSS 4
- **State:** TanStack Store + React Query
- **Form:** TanStack Form + React Hook Form + Zod
- **Table:** TanStack Table
- **i18n:** ParaglideJS (en-US / zh-CN)
- **Charts:** Recharts
- **Linting:** Biome + Ultracite
- **Testing:** Vitest

## Features

- **Dashboard** — Overview page with charts and statistics
- **Users** — User management
- **Tasks** — Task management with data table
- **Chats** — Messaging interface
- **Apps** — Application integrations
- **Settings** — Account, Appearance, Display, Notifications, Profile
- **Auth** — Sign in, Sign up, Forgot password, OTP verification
- **Error Pages** — 404, 500, Unauthorized
- **Layout** — 3 sidebar variants (sidebar / inset / floating), collapsible modes, dark/light/system theme, font & direction switching
- **i18n** — Localized routing with language switcher

## Getting Started

```bash
bun install
bun run dev
```

Dev server runs at http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start dev server |
| `bun run build` | Build for production |
| `bun run preview` | Preview production build |
| `bun run test` | Run tests |
| `bun run check` | Lint & format check |
| `bun run fix` | Auto-fix lint & format |

## Project Structure

```
src/
├── assets/          # Logo, brand icons, custom icons
├── components/
│   ├── base/        # Shared components (command menu, search, dialogs...)
│   ├── data-table/  # Reusable data table components
│   ├── layout/      # App shell, sidebar, header, nav
│   └── ui/          # shadcn/ui primitives
├── config/          # Fonts configuration
├── context/         # Providers (theme, layout, font, direction, search)
├── data/            # Demo/mock data
├── features/        # Feature modules (auth, dashboard, users, tasks, chats...)
├── hooks/           # Custom hooks
├── lib/             # Utilities
├── paraglide/       # Generated i18n files
├── routes/          # File-based routes (TanStack Router)
├── stores/          # Global stores
└── styles/          # Global CSS
```

## Deployment

### Cloudflare

```bash
bunx wrangler deploy
```

Build and deploy via `wrangler.toml` with static assets + SPA fallback.

### Netlify

Push to Git and connect in Netlify dashboard, or:

```bash
bunx netlify-cli deploy --prod
```

## Adding UI Components

```bash
bunx shadcn@latest add <component>
```

## License

MIT
