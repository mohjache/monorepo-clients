# Enroll and pay (upfront card)

Status: ready-for-agent

## Parent

[Academy Portal PRD](../PRD.md)

## What to build

The core tracer bullet through payment: a family enrolls a Student on a Plan for a Term and pays the full price upfront by card, and the Enrollment activates only on confirmed payment.

- Show Plans available for the upcoming Term with price, quota, and frequency.
- Choose a Plan for a Student; only offer Classes the Student is eligible for (Audience + Level).
- Set the Student's standing weekly Availability across eligible slots.
- Stripe upfront card checkout (with Apple/Google Pay).
- A Stripe webhook — not the client redirect — is the source of truth: on payment success the Enrollment becomes active.
- Email receipt via Resend.

## Acceptance criteria

- [ ] A family can select a Plan, set Availability, and complete a card payment; the Enrollment activates.
- [ ] Enrollment activation is driven by the payment webhook; an abandoned/failed payment leaves no active Enrollment.
- [ ] Only eligible Classes are offered for the Student.
- [ ] A receipt email is sent on success.
- [ ] Integration test drives checkout via the Stripe fake, emits the webhook, and asserts activation + queued receipt.

## Blocked by

- [02 Accounts and Students](./02-accounts-and-students.md)
- [03 Term, Class, and Plan configuration](./03-term-class-plan-config.md)
