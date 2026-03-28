# Plantr Agent Notes

This app is a simple marketing website for Plantr, a Brisbane-based rare plant brand focused on collecting email waitlist demand for limited rare and variegated plant releases.

Use the product and marketing specification here before making content, design, SEO, or conversion changes:

- [MARKETING_SITE_SPEC.md](C:/dev/personal/monorepo-clients/apps/plantr/MARKETING_SITE_SPEC.md)

Implementation guidance:

- prioritize a waitlist-first landing page, not a store
- keep messaging community-first, local, and trust-oriented
- avoid overpromising plant availability, timelines, or compliance claims
- treat Instagram as the main proof and acquisition channel

## Local setup

Run the app from the monorepo root with:

- `pnpm --filter plantr dev`

## Resend setup

The waitlist flow uses Resend and expects these environment variables in `.env`:

- `RESEND_API_KEY`
- `RESEND_SEGMENT_ID`
- `RESEND_FROM_EMAIL`
- `WAITLIST_NOTIFICATION_EMAIL` optional

Setup steps:

1. Create or use a verified sender/domain in Resend for `RESEND_FROM_EMAIL`.
2. Create a segment in Resend for the Plantr waitlist.
3. Copy that segment ID into `RESEND_SEGMENT_ID`.
4. Add the values to `apps/plantr/.env`.

The current waitlist flow:

- creates a Resend contact
- adds the contact to the configured segment
- sends an automatic welcome email
- optionally sends an internal notification email
