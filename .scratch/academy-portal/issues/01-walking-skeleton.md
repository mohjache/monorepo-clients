# Walking skeleton: auth, data, and test harness

Status: ready-for-agent

## Parent

[Academy Portal PRD](../PRD.md)

## What to build

The foundation every other slice plugs into. A deployable Next.js app shell with passwordless authentication, the database layer, staff roles, and an integration-test harness — proven end-to-end by a single authenticated page that reads the signed-in user.

- WorkOS AuthKit passwordless sign-in/sign-out, session available server-side.
- Coach and Admin roles modelled and enforced by a server-side authorization check.
- Neon Postgres wired via Drizzle, with migrations runnable locally and in CI.
- Integration-test harness: an ephemeral Postgres per run and thin fakes for Stripe, WorkOS, and Resend that later slices assert against.
- Portal styled to resemble the marketing site (shared branding shell, nav).

## Acceptance criteria

- [ ] A user can request a magic link / code, sign in, and land on an authenticated page showing their identity; sign-out works.
- [ ] A route restricted to Admin rejects a Coach and allows an Admin, verified server-side.
- [ ] Drizzle migrations create the schema against a fresh Neon/Postgres database.
- [ ] An integration test boots the app against an ephemeral Postgres, signs in via the WorkOS fake, and asserts the authenticated page — with Stripe and Resend fakes available.
- [ ] The app deploys to Vercel.

## Blocked by

None - can start immediately.
