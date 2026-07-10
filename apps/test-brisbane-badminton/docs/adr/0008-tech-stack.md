# Tech stack

The academy portal is built on:

- **Next.js 16 (App Router) + React 19**, styled with **Tailwind v4**, linted/formatted with **Biome** — the existing scaffold in this app.
- **WorkOS (AuthKit)** for authentication — provides the passwordless login decided in ADR 0001, plus organisation/role support used for the Coach and Admin staff roles.
- **Neon (serverless Postgres) + Drizzle ORM** for application data (Accounts, Students, Enrollments, Assignments, attendance, etc.).
- **Stripe** for payments, including BNPL (ADR 0003).
- **Resend** for transactional email (magic links via WorkOS aside, plus receipts and the email notifications from ADR's notification decision).
- **Vercel** for hosting and deploys.

These are the technology lock-in choices for the portal. Swapping any of WorkOS, Neon, or Stripe later would be a meaningful migration; the rest are comparatively contained.
