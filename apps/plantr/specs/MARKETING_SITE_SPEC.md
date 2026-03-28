# Plantr Marketing Site Specification

## Goal

Create a minimal marketing site for Plantr by Mingie that captures email interest from people who want to follow the journey of growing rare alocasias.

## Current Product Direction

The homepage is intentionally stripped down.

Public-facing content should be limited to:

- the brand header
- the primary CTA
- the email field
- footer with links to instagram and privacy page

The page should not read like a store, a launch page, or a content-heavy landing page.

## CTA

Primary CTA:

- `Follow the journey`

Supporting behavior:

- visitor enters email
- visitor submits form
- visitor receives a welcome email

## UX Rules

- keep the homepage minimal and calm
- avoid persuasive sales copy
- avoid long explanations
- avoid sections, feature grids, FAQs, or trust blocks on the homepage
- preserve the header with `Plantr by Mingie` and the Instagram link

## Design Rules

- use shared `@repo/ui` components everywhere possible
- conform to the shared theming system from `packages/ui`
- avoid bespoke page components unless absolutely necessary
- keep app-local CSS minimal and only for truly app-specific background or font concerns

## Messaging Rules

Public-facing copy should center on:

- updates
- progress
- the journey

Avoid public-facing language centered on:

- sales
- releases
- scarcity
- technical operations

## Implementation Notes

- internal code and automation may still use `waitlist` terminology
- public-facing copy should prefer `Follow the journey`
- the homepage should remain intentionally sparse even if more content exists in the broader brand strategy

## SEO Notes

- canonical domain: `https://plantr-mingie.com`
- metadata should stay aligned with the stripped-down positioning
- avoid stuffing homepage copy for SEO if it compromises the minimal surface
