# PRD: Academy Portal

Status: ready-for-agent

A standalone portal for the Badminton Brisbane academy that replaces the Google Form with in-app registration, payment, attendance, and weekly capacity planning. Vocabulary follows [CONTEXT.md](../../apps/test-brisbane-badminton/CONTEXT.md); all decisions respect [ADRs 0001–0009](../../apps/test-brisbane-badminton/docs/adr).

## Problem Statement

The academy currently registers students through a linked Google Form. The form only collects sign-up details — it does not take payment, does not know which Sessions a Student attends, and gives the Head Coach no help keeping Classes near the 4–6 student-to-coach ratio. Payment, attendance, and weekly slotting all happen manually and off-system. As enrollment grows, the Head Coach cannot see ahead of time which Sessions are becoming too crowded or too empty, and families have no single place to register, pay, and see when their child is training.

## Solution

A standalone web portal (linked from the marketing site's "Register" button, replacing the Google Form) where:

- A family creates a passwordless **Account**, adds one or more **Students** (kids or adults), chooses a **Plan** for the **Term**, sets standing **Availability**, and pays — full upfront or via BNPL — in one seamless flow.
- The **Head Coach** plans each week by assigning enrolled Students to **Sessions**, with live coaching-ratio feedback and advisory suggestions that flag crowded and empty Sessions and propose eligible, available Students to move.
- **Coaches** mark attendance courtside on a phone, which is what consumes a Student's **Lesson** quota.
- The system emails Students their weekly Sessions and any changes, handles government **Vouchers** and invite-only Plans, and converts unattended Lessons to **Credit** when a Student withdraws.

## User Stories

### Accounts & Students

1. As a new family, I want to create an Account with just my email (passwordless magic link), so that I can get started without inventing a password.
2. As an Account Holder, I want to add one or more Students to my Account, so that I can register my children and/or myself in one place.
3. As an Account Holder registering a child, I want to record the child's date of birth, so that the system knows they are a kid and shows kid-appropriate Classes.
4. As an adult who plays, I want to be my own Student under my own Account, so that I can enroll myself the same way a parent enrolls a child.
5. As an Account Holder, I want to provide an emergency contact for each Student, so that the academy can reach someone if there is an incident.
6. As a parent of a minor, I want to accept a medical/liability consent waiver at registration, so that my child can train and the academy is covered.
7. As an Account Holder, I want to declare each Student's Level at registration, so that they are matched to Classes of the right standard.
8. As a returning family, I want to log back in and see my Students, past Enrollments, and Credit, so that I don't re-enter everything each Term.

### Registration, Plans & Eligibility

9. As an Account Holder, I want to see the Plans available for the upcoming Term with their price, Lesson quota, and weekly frequency, so that I can choose the right one.
10. As an Account Holder, I want to pick a Plan for a Student for a Term, so that I can enroll them.
11. As an Account Holder, I want to set each Student's standing weekly Availability across eligible slots, so that the Head Coach can assign them.
12. As an Account Holder, I want to only be offered Classes my Student is eligible for (by Audience and Level), so that I don't pick a Session they can't attend.
13. As an advanced player, I want invite-only Plans (Advanced Squad, Elite) to appear only after the Head Coach invites me, so that these tiers stay gated.
14. As the Head Coach, I want to invite a specific Student to an invite-only Plan, so that they can then purchase it themselves.

### Payment

15. As an Account Holder, I want to pay the full Plan price upfront by card, so that my Student's Enrollment is active immediately.
16. As an Account Holder, I want the option to spread the cost via BNPL (Afterpay/Zip/Klarna), so that a large Plan is more affordable — while the academy is still paid in full.
17. As an Account Holder with multiple Students, I want to pay for all of them in one checkout, so that I make a single payment for the household.
18. As an Account Holder, I want an Enrollment to activate only once payment succeeds, so that there is no ambiguity about whether my Student is in.
19. As an Account Holder, I want an email receipt after paying, so that I have a record.
20. As an Account Holder on an eligible Plan, I want to enter a government Voucher (PlayOn/FairPlay) code at checkout, so that my card amount is reduced by the voucher value (possibly to $0).
21. As an Admin, I want voucher-using Enrollments to land in a reconciliation queue marked "voucher pending redemption," so that I can claim reimbursement from the government and mark them reconciled.

### Weekly Assignment & Availability

22. As the Head Coach, I want to see all enrolled Students with remaining Lesson quota and their Availability for a given week, so that I can build that week's rosters.
23. As the Head Coach, I want to assign Students to specific Sessions for the week, so that each Session has a roster.
24. As the Head Coach, I want to change Assignments week to week as Coach and slot availability change, so that the roster reflects reality.
25. As a Student/Account Holder, I want to receive an email with my assigned Sessions for the week, so that I know when to turn up.
26. As a Student/Account Holder, I want to be emailed when my Assignment changes, so that I'm not caught out.
27. As an Account Holder, I want to post a one-off "away this week" exception, so that the Head Coach doesn't assign my Student when they can't come.

### Capacity Optimisation

28. As the Head Coach, I want to see the live coaching ratio for each Session as I plan, so that I can keep Sessions near 4–6 students per Coach.
29. As the Head Coach, I want Sessions flagged when they are crowded (over ratio, no Coach to add), so that I can act before the Session runs.
30. As the Head Coach, I want Sessions flagged when they are empty (a Coach is underused), so that I can consolidate or free a Coach.
31. As the Head Coach, I want one-tap suggestions to move a specific eligible, available Student from a crowded Session to an under-filled one, so that rebalancing is fast.
32. As the Head Coach, I want the system to never move a Student automatically, so that I keep control over who trains where.
33. As the Head Coach, I want to add or remove Coaches on a Session, so that the ratio reflects real staffing.

### Attendance & Quota

34. As a Coach, I want to open today's Session on my phone and see its assigned roster, so that I can take attendance courtside.
35. As a Coach, I want to mark each Student present or absent, so that attendance is recorded.
36. As a Student, I want a Lesson consumed from my quota only when I actually attend, so that no-shows don't cost me a Lesson at that moment.
37. As a Student on a makeup-permitting Plan, I want to be assigned a catch-up Session beyond my normal weekly frequency, so that I can use a Lesson I would otherwise lose.
38. As a Starter-Plan Student, I want the system to hold me to my regular cadence with no makeups, so that the Plan behaves as advertised.
39. As a Student, I want any unattended Lessons to expire at Term end, so that quota accounting is clear.
40. As an Account Holder, I want to see how many Lessons my Student has used and has remaining, so that I can track value.

### Withdrawals & Credit

41. As an Account Holder, I want to withdraw a Student mid-Term and receive Account Credit for their unattended Lessons, so that I don't lose the value.
42. As an Account Holder, I want to redeem Credit against a future Term's Enrollment, so that the value carries forward.
43. As an Admin, I want to approve exceptional cash refunds (e.g. injury), so that genuine hardship cases are handled.

### Staff, Admin & Configuration

44. As an Admin, I want to configure Terms, Classes, and Plans, so that each Term's offering is set up.
45. As an Admin, I want to manage staff as Coaches or Admins, so that attendance-marking is separated from billing and configuration.
46. As a Coach, I want access only to marking attendance and viewing my rosters, so that I can't touch money or configuration.
47. As an Admin, I want to adjust a Student's Level, so that I can correct a self-declared Level after seeing them play.
48. As an Admin, I want reporting on enrollments, payments, attendance, and outstanding voucher reconciliations, so that I can run the academy.

### Term Rollover

49. As an Account Holder, I want a reminder email when re-enrollment for the next Term opens, so that I don't miss it.
50. As a returning family, I want my standing Availability carried into the next Term as a starting point, so that re-enrolling is quick.

## Implementation Decisions

- **Standalone portal.** Built as the `test-brisbane-badminton` Next.js 16 (App Router) app. Marketing site is out of scope; integration is a single inbound link (ADR 0007).
- **Stack.** WorkOS AuthKit (passwordless auth + Coach/Admin roles), Neon Postgres + Drizzle ORM, Stripe (payments + BNPL), Resend (email), Vercel hosting (ADR 0008, 0001).
- **Core schema (Drizzle).** `accounts`, `students` (belongs to account; audience derived from DOB; self-declared level), `terms`, `classes` (audience, level, weekly day/time, invite-only flag), `sessions` (dated occurrence of a class; assigned coaches), `plans` (price, lesson quota, weekly frequency, flags: invite_only, makeups_allowed, voucher_eligible), `enrollments` (student + plan + term; status driven by payment; remaining quota derived from attendance), `assignments` (student → session for a week), `attendance` (present/absent per assignment; the event that consumes a Lesson), `availability` (standing default + per-week exceptions), `vouchers` (code, value, reconciliation status), `credits` (account-level stored value), `invites` (student → invite-only plan).
- **Enrollment activation.** An Enrollment activates only on a confirmed Stripe payment; a Stripe webhook is the source of truth, not the client redirect (ADR 0003).
- **Lesson quota is derived, not stored as a mutable counter.** Remaining Lessons = plan quota − attended Sessions this Term; unattended Lessons expire at Term end (ADR 0005). Avoids drift.
- **Assignment is coach-driven.** No student self-booking. The weekly planner reads eligible + available Students with remaining quota and lets the Head Coach place them (ADR 0002).
- **Capacity is a pure computation over a Session's assignments and coaches.** Crowded = assigned > coaches × ratio-ceiling (no coach available); empty = assigned < coaches × ratio-floor. The optimiser suggests eligible, available moves but never applies them (ADR 0006). This logic is a deep, independently testable module.
- **Vouchers reduce the Stripe amount and flag reconciliation.** No government API; the Admin reconciles manually (ADR 0004).
- **Invite-only Plans** are hidden until an `invites` row exists for that Student, after which normal checkout applies (ADR 0004).
- **Withdrawals produce Credit, not cash.** Unattended Lessons convert to Account Credit; cash refunds are an Admin-only exception (ADR 0009).
- **Notifications are email-only** via Resend for launch (weekly assignment, assignment change, receipts, voucher reconciled, rollover reminder). SMS is a deliberate later upgrade.
- **Roles.** WorkOS-backed Coach (attendance + own rosters) and Admin (everything). The Head Coach is an Admin.

## Testing Decisions

- **Primary seam: the server boundary (route handlers / server actions).** Prefer one seam. Integration tests drive the portal through its own server API against a real ephemeral Postgres, with Stripe, WorkOS, and Resend faked behind thin adapters at the network boundary. This is the highest seam that still exercises schema + logic + wiring end-to-end.
- **A good test asserts external behavior, not implementation.** e.g. "after a successful payment webhook, the Enrollment is active and a receipt email was queued" — not "function X called function Y." Tests should survive refactors of the internals.
- **Pure-domain unit tests** for the decision-rich modules that are pulled out as deep functions: capacity/ratio computation (crowded/empty/suggested moves), remaining-quota derivation with term-end expiry, eligibility matching, and credit calculation on withdrawal. These need no DB or network and should be exhaustive on edge cases.
- **Fakes over mocks for external providers.** A fake Stripe that can emit webhook events, a fake WorkOS session, and a fake email sink you can assert against — so payment, auth, and notification paths are testable without live services.
- **Prior art:** none in this greenfield app; establish the integration-test harness (ephemeral Postgres + provider fakes) as the first slice's prefactor so later slices plug into it.

## Out of Scope

- The marketing website (badmintonbrisbane.com.au) — not owned; only linked from.
- SMS / push notifications (email only at launch).
- Academy-financed installment plans (BNPL only).
- Automated rebalancing / auto-assignment of Students (advisory only).
- Integration with the government voucher portal (manual reconciliation).
- Native mobile apps (responsive web; coach attendance is mobile web).

## Further Notes

- "Seamless" is a branding/UX goal: the portal should visually resemble the marketing site and hand off cleanly from the Register link.
- Registration fields (recommended, confirm before build): account holder name/email/phone; per Student — name, DOB, self-declared Level, emergency contact; minors — medical/liability waiver acceptance; optional media/photo consent.
- Term dates and Plan catalogue are Admin-configured per Term (real example: Term 13 Jul – 20 Sep 2026; Plans Starter $200 / Foundation $425 / Advanced Squad $525 / Development $750 / Performance $950 / Elite $1,100).
