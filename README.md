# Templates

[English](README.md) · [简体中文](README.zh-CN.md)

Independent application starters and examples in one repository. Choose a template and copy it into your own project. Each directory keeps its own dependencies, lockfile, configuration, and license; this repository is not a shared package workspace.

## Choose a template

| Directory | Purpose | Package manager |
| --- | --- | --- |
| [next-template](next-template/) | Next.js static export / SSG | pnpm |
| [next-ssr-template](next-ssr-template/) | Next.js server-side rendering / SSR | pnpm |
| [next-with-tauri](next-with-tauri/) | Next.js with Tauri desktop and mobile packaging | pnpm |
| [react-template](react-template/) | React, Vite, PWA, and localization | Bun |
| [shadcn-admin](shadcn-admin/) | React admin dashboard with API and localization tooling | Bun |
| [shadcn-admin-template](shadcn-admin-template/) | React 19 admin starter with TanStack Router | Bun |
| [tanstack-shadcn-starter](tanstack-shadcn-starter/) | TanStack Start full-stack starter with shadcn/ui | Bun |

These are preserved starters, not a guarantee of current dependency versions or production readiness. Read the selected template's README for its runtime and environment requirements. Tauri also needs its platform toolchain.

## Start a project

Clone the collection, then export one directory into a new project:

```bash
git clone https://github.com/draco-china/templates.git
cd templates
mkdir ../my-app
git archive HEAD:react-template | tar -x -C ../my-app
cd ../my-app
git init
bun install
bun run dev
```

For the Next.js templates, replace `react-template` with the chosen directory, then use `pnpm install` and `pnpm dev`. Follow the `packageManager` version declared by that template where present.

Exporting includes dotfiles and the template's license without carrying the collection's Git history into your new app. Initialize the new Git repository before installation so that Husky or Lefthook can configure the project's hooks.

## Workflows and releases

Each template retains its original `.github` files. GitHub does not execute workflows nested inside template directories in this collection. They become available when the selected template is placed at the root of a new repository. Review their repository URLs, branches, deployment targets, permissions, and required secrets before enabling them. Release versions belong to each new project.

## Earlier examples

The original examples remain available for reference; their dependencies and instructions have not been modernized:

[antd-pro-umi-qiankun](antd-pro-umi-qiankun/) · [nestjs-base-instance](nestjs-base-instance/) · [node-ejs-express-mysql-redis](node-ejs-express-mysql-redis/) · [nuxt-express-template](nuxt-express-template/) · [nuxt-plus](nuxt-plus/) · [vue-multi-page](vue-multi-page/) · [webpack-koa2-typescript-mysql-template](webpack-koa2-typescript-mysql-template/)
