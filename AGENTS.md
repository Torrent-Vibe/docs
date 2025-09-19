# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js documentation website built with Fumadocs, a modern documentation framework. It uses the App Router architecture with TypeScript and supports MDX content.

## Essential Commands

```bash
# Development
pnpm dev              # Start development server with Turbo (http://localhost:3000)
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint

# MDX Processing
pnpm postinstall      # Process MDX files (runs automatically after pnpm install)
```

## Architecture

**Content Flow**: MDX files in `content/docs/` → Fumadocs processing → TypeScript source files in `.source/` → Next.js rendering

**Key Files**:

- `src/lib/source.ts:5` - Content source configuration, defines `/docs` base URL
- `src/lib/layout.shared.tsx` - Shared layout configurations for documentation
- `source.config.ts:10` - MDX and frontmatter schema configuration
- `src/app/docs/[[...slug]]/page.tsx` - Dynamic documentation page renderer

**Route Structure**:

- `/` - Landing page (home route group)
- `/docs/*` - Documentation pages with dynamic routing
- `/api/search` - Search functionality

**TypeScript Path Aliases**:

- `@/*` → `src/*`
- `@/.source` → `.source/*`

## Development Notes

- Uses pnpm as package manager (v10.15.1)
- No testing framework is currently configured
- Content is processed from MDX files in `content/docs/` directory
- Generated TypeScript files are in `.source/` (do not edit manually)
- Tailwind CSS v4 is configured for styling
- Strict TypeScript mode is enabled
