# Term, Class, and Plan configuration (Admin)

Status: ready-for-agent

## Parent

[Academy Portal PRD](../PRD.md)

## What to build

Admin configuration of a Term's offering — the catalogue everything downstream reads. End-to-end from Admin forms to persisted Terms, Classes, Plans, and their generated Sessions.

- Create a Term (date range aligned to a school term).
- Create Classes: Audience, Level, weekly day + 2-hour time block, invite-only flag.
- Generate the Term's weekly Sessions from each Class's schedule.
- Create Plans: price, Lesson quota, weekly frequency, and flags (invite_only, makeups_allowed, voucher_eligible).
- Admin-only access.

## Acceptance criteria

- [ ] An Admin can create a Term and Classes, and the Term's weekly Sessions are generated across the Term's dates.
- [ ] An Admin can create Plans with price, quota, frequency, and the three flags.
- [ ] Non-Admins cannot access configuration.
- [ ] The real example catalogue (Starter/Foundation/Advanced Squad/Development/Performance/Elite; Term 13 Jul–20 Sep 2026) can be represented.
- [ ] Integration test covers Term + Class creation and Session generation.

## Blocked by

- [01 Walking skeleton](./01-walking-skeleton.md)
