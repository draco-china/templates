# Templates

[English](README.md) · [简体中文](README.zh-CN.md)

集中管理独立的应用模板与示例。选择一个目录，复制为自己的项目；每个模板保留独立的依赖、锁文件、配置和许可证，仓库不使用统一依赖工作区。

## 选择模板

| 目录 | 用途 | 包管理器 |
| --- | --- | --- |
| [next-template](next-template/) | Next.js 静态导出 / SSG | pnpm |
| [next-ssr-template](next-ssr-template/) | Next.js 服务端渲染 / SSR | pnpm |
| [next-with-tauri](next-with-tauri/) | Next.js 与 Tauri 桌面、移动端打包 | pnpm |
| [react-template](react-template/) | React、Vite、PWA 与国际化 | Bun |
| [shadcn-admin](shadcn-admin/) | 包含 API 与国际化工具的 React 后台 | Bun |
| [shadcn-admin-template](shadcn-admin-template/) | React 19 与 TanStack Router 后台模板 | Bun |
| [tanstack-shadcn-starter](tanstack-shadcn-starter/) | TanStack Start 与 shadcn/ui 全栈模板 | Bun |

本次迁移保留模板原状，不代表依赖已更新或已满足生产环境要求。运行环境、环境变量请查看各目录的 README；Tauri 还需要对应平台的工具链。

## 创建项目

克隆合集，再将所选目录导出为独立项目：

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

使用 Next.js 模板时，将 `react-template` 替换为对应目录，并使用 `pnpm install` 和 `pnpm dev`。模板声明了 `packageManager` 时，使用指定版本。

导出会保留隐藏文件与许可证，不会带入合集的 Git 历史。安装前初始化新项目的 Git 仓库，便于 Husky 或 Lefthook 配置钩子。

## 工作流与发布

各模板原有 `.github` 文件完整保留。GitHub 不会在本合集运行嵌套目录内的工作流；复制到新仓库根目录后才可使用。启用前应调整仓库链接、分支、部署目标、权限及所需 secrets。新项目各自管理发布版本。

## 早期示例

原有示例保留供参考，本次没有更新其依赖或运行说明：

[antd-pro-umi-qiankun](antd-pro-umi-qiankun/) · [nestjs-base-instance](nestjs-base-instance/) · [node-ejs-express-mysql-redis](node-ejs-express-mysql-redis/) · [nuxt-express-template](nuxt-express-template/) · [nuxt-plus](nuxt-plus/) · [vue-multi-page](vue-multi-page/) · [webpack-koa2-typescript-mysql-template](webpack-koa2-typescript-mysql-template/)
