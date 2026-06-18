# Project Agent Guide

## Package Manager

Use `pnpm` for this project.

- Run scripts with `pnpm <script>` or `pnpm run <script>`.
- Add dependencies with `pnpm add` and dev dependencies with `pnpm add -D`.
- Do not use `npm`, `yarn`, or `bun` unless the user explicitly asks for it.
- Keep `pnpm-lock.yaml` as the package lock source of truth.

## Component Review Standard

When the user says, "Review this component," review it against the rest of the app before making changes.

- Compare layout, spacing, typography, color use, motion, interaction states, and responsive behavior with nearby components.
- Make the component consistent with the existing design system instead of inventing one-off styles.
- Prefer existing shared components, tokens, utility classes, and interaction patterns.
- Call out any places where the component breaks visual consistency, accessibility, or expected product behavior.

## Product Feel

Design and implementation should feel like a premium big-tech SaaS product.

- Aim for polished, restrained, high-confidence UI that feels like the next big product in its category.
- Keep interfaces clean, modern, and purposeful. Avoid generic templates, noisy decoration, and inconsistent spacing.
- Use strong hierarchy, crisp alignment, thoughtful empty/loading/error states, and accessible contrast.
- Every component should feel production-ready, cohesive with the design system, and worthy of a premium product experience.
