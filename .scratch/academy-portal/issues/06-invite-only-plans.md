# Invite-only Plans

Status: ready-for-agent

## Parent

[Academy Portal PRD](../PRD.md)

## What to build

Gating for invite-only Plans (Advanced Squad, Elite): hidden until the Head Coach invites a specific Student, then purchasable by that Student's Account through the normal checkout.

- Head Coach (Admin) can invite a specific Student to an invite-only Plan.
- The invite-only Plan is not visible or selectable for any Student without an invite.
- Once invited, the Plan appears for that Student and flows through the existing checkout (upfront/BNPL/voucher).

## Acceptance criteria

- [ ] An invite-only Plan is not offered to a Student with no invite.
- [ ] An Admin can invite a Student; the Plan then becomes purchasable for that Student only.
- [ ] Purchasing an invited Plan uses the existing checkout and activation flow.
- [ ] Integration test covers hidden-without-invite and visible-after-invite.

## Blocked by

- [04 Enroll and pay (upfront card)](./04-enroll-and-pay-upfront.md)
