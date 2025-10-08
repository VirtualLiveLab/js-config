# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Repository Overview

A monorepo for unified JavaScript/TypeScript toolchain configurations at VirtualLiveLab. Provides ESLint, Prettier, Stylelint, and TSConfig packages.

## Development Commands

```bash
# Build
pnpm run build                 # Build all packages
pnpm run build:eslint          # Build eslint-config only
pnpm run build:prettier        # Build prettier-config only
pnpm run build:stylelint       # Build stylelint-config only

# Test
pnpm run test                  # Run all tests (Vitest)

# Lint & Format
pnpm run lint                  # Run ESLint
pnpm run format                # Format code with Prettier

# Release Flow
pnpm run changeset             # Create changeset for version bump
pnpm run release               # Build → Test → Publish (requires changeset)
```

## Repository Structure

```
packages/
  ├── eslint-config/          # ESLint configuration
  ├── prettier-config/        # Prettier configuration
  ├── stylelint-config/       # Stylelint configuration
  └── tsconfig/               # TypeScript configuration presets
```

- **Monorepo**: pnpm workspace
- **Versioning**: Automatically managed with changesets
- **Build tool**: tsdown (for each package)
- **Test**: Vitest (snapshot tests)

## Development Flow

1. Fork and create a branch
2. Make code changes
3. Run `pnpm run build` to confirm no build errors
4. Run `pnpm run changeset` to record changes
   - Select the changed package(s)
   - Choose version type (patch/minor/major)
   - Describe the changes
5. Create a PR
6. After merge, GitHub Actions will automatically release

## Technical Constraints

- **Node.js**: >= 20 < 23
- **Package Manager**: pnpm required (v10.18.0)
- **Tool Management**: mise (run `mise setup` to set up environment)
- **Commit Style**: Conventional Commits recommended

## Testing

Each package uses snapshot tests. When changing configurations, run `pnpm run test` to verify snapshots are updated correctly.
