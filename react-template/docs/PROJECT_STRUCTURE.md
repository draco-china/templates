# 项目目录规范

本规范用于统一模块划分、命名与职责边界，适用于当前模板（Vite + React + TanStack Router + Paraglide + Tailwind）。

## 总体原则

- **按领域分层**：路由、页面、共享组件、状态、API、国际化分层清晰。
- **就近组织**：功能相关的 UI、状态、校验、测试放在同一特性目录内。
- **避免跨层依赖**：低层（`lib`、`components`）不依赖高层（`routes`、`features`）。
- **命名一致**：文件/目录使用 `kebab-case`，组件用 `PascalCase`。

## 推荐目录结构（建议落地）

```
src/
  assets/                # 静态资源（图标、图片等）
  components/            # 纯展示型组件（无业务）
    ui/                  # 设计系统/基础 UI
  features/              # 业务特性模块（按领域）
    auth/                 # 示例：认证域
      components/         # 业务组件
      hooks/              # 特性 hooks
      api/                # 特性 API 调用封装
      schemas/            # zod 校验/类型
      utils/              # 特性工具
      index.ts            # 特性对外导出
  routes/                # TanStack Router 路由文件
    __root.tsx
    index.tsx
    ...
  stores/                # 全局状态（TanStack Store）
  hooks/                 # 跨特性共享 hooks
  lib/                   # 基础设施层（API client、工具）
    api/
      client.ts
      schema.d.ts
    utils.ts
  data/                  # 静态/Mock 数据
  styles/                # 全局样式与主题
    global.css
  paraglide/             # i18n 产物（自动生成）
  types/                 # 全局类型声明
  main.tsx
```

> 说明：当前模板已有 `components/`、`hooks/`、`lib/`、`routes/` 等结构。可逐步演进为 `features/` 组织方式，不强制一次性调整。

## 路由与页面规范

- 路由文件放在 `src/routes/`。
- 页面级组件优先放在路由文件内，复杂页面拆分后放在对应 `features/<domain>/components`。
- 路由只负责数据加载与布局编排，业务逻辑下沉到 `features`。

## 组件分层

- `components/ui`: 原子/基础组件（Button、Input 等）。
- `components/`: 复用的展示型组件（不绑定业务）。
- `features/*/components`: 仅在该域内使用的业务组件。

## 状态与数据

- 全局状态放 `src/stores/`。
- 特性级状态放 `features/<domain>/` 内。
- API 调用统一通过 `src/lib/api/client.ts`，不要在组件内直接拼接 URL。

## 国际化

- 文案源文件：`project.inlang/messages/`。
- 生成产物：`src/paraglide/`（不手改）。
- 路由多语言策略由 Paraglide 插件处理。

## 样式

- 全局样式集中到 `src/styles/global.css`。
- 组件样式优先使用 Tailwind 实用类。

## 命名与导入

- 目录与文件：`kebab-case`。
- React 组件：`PascalCase`。
- 统一使用 `@/` 别名导入。
- 禁止跨特性直接深层引用（例如 `features/a/...` 直接导入 `features/b/...`）。

## Demo 文件处理

- `demo.*` 仅用于示例，可在项目启动后删除。

