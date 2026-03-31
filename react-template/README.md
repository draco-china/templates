# React Template

基于 Vite + React 19 的项目模板，内置 TanStack Router/Query、Paraglide i18n、Tailwind CSS、PWA 与 OpenAPI 类型生成。

## 快速开始

要求：Bun >= 1.3.0（以 [package.json](package.json) 为准）

```bash
bun install
cp .env.example .env
bun run openapi:generate
bun run dev
```

## 环境变量

在 .env 中设置（参考 .env.example）：

- VITE_API_BASE_URL：运行时 API 基础地址
- OPENAPI_SCHEMA_URL：OpenAPI Schema 地址

## 常用脚本

- 开发：bun run dev
- 构建：bun run build
- 预览：bun run preview
- 单测：bun run test
- 类型检查：bun run tsc
- 代码检查：bun run check
- 代码修复：bun run fix
- OpenAPI 类型生成：bun run openapi:generate
- PWA 资源：bun run pwa:prepare

## 技术栈

- Vite + React 19 + TypeScript
- TanStack Router / Query / Store
- Paraglide i18n（本地化路由）
- Tailwind CSS + shadcn/ui 组件基础
- Vitest + Testing Library
- Ultracite + Biome 代码质量

## 路由与 i18n

- 路由基于文件：src/routes
- 多语言文案：project.inlang/messages
- 生成产物：src/paraglide（不要手改）

## 目录规范

详见 [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md)。

## Demo 文件

以 demo.* 命名的文件仅用于示例，项目稳定后可删除。

## 贡献与安全

- 贡献指南：[docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)
- 安全策略：[docs/SECURITY.md](docs/SECURITY.md)
