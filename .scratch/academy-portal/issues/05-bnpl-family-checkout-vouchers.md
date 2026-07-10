# BNPL, family checkout, and vouchers

Status: ready-for-agent

## Parent

[Academy Portal PRD](../PRD.md)

## What to build

Extend checkout with the three remaining payment paths, all still activating Enrollments only on confirmed, paid-in-full settlement.

- BNPL methods (Afterpay/Zip/Klarna) offered alongside upfront card; academy is paid in full immediately.
- Family checkout: enroll and pay for multiple Students in one transaction.
- Government Voucher (PlayOn/FairPlay) code entry on voucher-eligible Plans, reducing the Stripe amount by the voucher value (possibly to $0).
- Voucher-using Enrollments flagged "voucher pending redemption" and surfaced in an Admin reconciliation queue where they can be marked reconciled.

## Acceptance criteria

- [ ] A family can complete a BNPL checkout; the Enrollment(s) activate on settlement.
- [ ] One checkout can enroll and pay for multiple Students at once.
- [ ] A voucher code reduces the charged amount by the voucher value; a full-cover voucher yields a $0 card charge and still activates.
- [ ] Voucher Enrollments appear in the Admin reconciliation queue and can be marked reconciled.
- [ ] Integration tests cover BNPL, multi-Student, and voucher (including $0) paths.

## Blocked by

- [04 Enroll and pay (upfront card)](./04-enroll-and-pay-upfront.md)
