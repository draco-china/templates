# 贡献指南

感谢你的贡献！请先阅读以下约定与流程。

## 前置条件

- Bun >= 1.3.0

## 本地启动

```bash
bun install
cp .env.example .env
bun run openapi:generate
bun run dev
```

## 质量检查

```bash
bun run check
bun run tsc
bun run test
```

## 提交规范

使用 Conventional Commits，例如：

- feat: add search
- fix: handle null
- chore: update deps

Commitlint 通过 Lefthook 在 commit-msg 阶段校验，请保持提交小而清晰。

## Pull Request

- 提交前确保本地检查通过。
- 描述变更内容与测试情况。
- 避免在同一个 PR 中夹带无关重构。
