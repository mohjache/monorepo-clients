# Withdrawals and Credit

Status: ready-for-agent

## Parent

[Academy Portal PRD](../PRD.md)

## What to build

Mid-Term withdrawal handling that turns unused value into Account Credit rather than cash.

- An Account Holder (or Admin) can withdraw a Student from an Enrollment mid-Term.
- On withdrawal, the Student's unattended Lessons convert to Credit on the Account.
- Credit can be redeemed against a future Term's Enrollment at checkout.
- An Admin can approve an exceptional cash refund (e.g. injury) instead of Credit.
- Credit calculation is a pure module with unit tests.

## Acceptance criteria

- [ ] Withdrawing a Student mid-Term creates Account Credit equal to the value of their unattended Lessons.
- [ ] Credit reduces the amount due on a future Enrollment at checkout.
- [ ] Credit is never paid out as cash except via an explicit Admin-approved refund.
- [ ] Unit tests cover credit calculation from unattended Lessons.
- [ ] Integration test covers withdraw → credit → redeem on next Enrollment.

## Blocked by

- [09 Attendance and Lesson quota](./09-attendance-and-quota.md)
