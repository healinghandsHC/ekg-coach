# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Applications

### EKG Trainer (artifacts/ekg-trainer)
- **Type**: React + Vite frontend-only app
- **Purpose**: Interactive EKG/ECG interpretation learning tool
- **Features**: 
  - Learning Center with 12 EKG rhythms across 5 categories
  - SVG-rendered EKG strips on pink grid paper backgrounds
  - Interactive practice quiz with 15 randomized questions
  - Quick reference cheat sheet with filtering
  - Animated waveform drawing
- **Tech**: React, Vite, Tailwind CSS, Framer Motion, Wouter routing, shadcn/ui components
- **Data**: All content hardcoded in client (no backend needed)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
