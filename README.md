# Monorepo

Instructions done:
1. installed globally codex and claude
1. added skills
    ```
    npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
    npx skills add https://github.com/anthropics/skills --skill frontend-design
    npx skills add https://github.com/shadcn/ui --skill shadcn
    ```
1. setup turbo repo
    ```sh
    npx create-turbo@latest
    ```

This Turborepo starter is maintained by the Turborepo core team.
## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `biome.json`: shared [Biome](https://biomejs.dev/) configuration for formatting, linting, and import organization

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome](https://biomejs.dev/) for code linting, formatting, and import organization

## Development

Install dependencies:

```sh
pnpm install
```

Run the monorepo locally:

```sh
pnpm dev
```

Useful commands:

```sh
pnpm lint
pnpm format
pnpm check-types
pnpm build
```

VS Code is configured to use the Biome extension for formatting and code actions on save.

### Build

To build all apps and packages, run the following command:

```sh
pnpm build
```
