# Attendance and Lesson quota

Status: ready-for-agent

## Parent

[Academy Portal PRD](../PRD.md)

## What to build

Courtside attendance and the quota accounting it drives. A Lesson is consumed only when a Student attends; unattended Lessons expire at Term end.

- Coach opens today's Session on a phone and sees its assigned roster.
- Coach marks each Student present or absent.
- Remaining quota is derived (plan quota − attended Sessions this Term), never a mutable counter; unattended Lessons expire at Term end.
- Makeups: a makeup-permitting Plan can be assigned a catch-up Session beyond its normal weekly frequency to use an otherwise-expiring Lesson; the Starter Plan cannot (regular cadence only).
- Account Holders can see Lessons used and remaining per Student.
- Derivation and makeup-eligibility are pure modules with unit tests.

## Acceptance criteria

- [ ] A Coach can mark present/absent on mobile for a Session's roster.
- [ ] Attending decrements remaining quota; a no-show does not consume a Lesson at that time.
- [ ] Unattended Lessons no longer count once the Term ends.
- [ ] A makeup-permitting Plan can receive an extra catch-up Assignment; Starter cannot exceed its frequency.
- [ ] Account Holders see accurate used/remaining counts.
- [ ] Unit tests cover quota derivation with term-end expiry and makeup eligibility.

## Blocked by

- [07 Weekly assignment planner](./07-weekly-assignment-planner.md)
