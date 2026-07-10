# Weekly assignment planner

Status: ready-for-agent

## Parent

[Academy Portal PRD](../PRD.md)

## What to build

The Head Coach's core weekly tool: assign enrolled Students to Sessions for a given week, then publish and notify. This is coach-driven placement, not student self-booking.

- For a chosen week, list enrolled Students with remaining Lesson quota and their Availability (standing default plus any per-week exceptions).
- Assign Students to specific Sessions; only Students eligible (Audience + Level) and available for a Session can be assigned to it.
- Edit Assignments freely week to week.
- Account Holders can post a one-off "away this week" exception that removes a Student from that week's available pool.
- Publish the week; email each affected Student/Account Holder their assigned Sessions, and email on subsequent changes.

## Acceptance criteria

- [ ] The Head Coach sees eligible, available Students with remaining quota for a week and can assign them to Sessions.
- [ ] A Student cannot be assigned to a Session they are ineligible or unavailable for.
- [ ] Publishing emails each Student their Sessions; changing a published Assignment emails the affected Student.
- [ ] An Account Holder's "away this week" exception removes the Student from that week.
- [ ] Integration test covers assign → publish → email and a change → email.

## Blocked by

- [04 Enroll and pay (upfront card)](./04-enroll-and-pay-upfront.md)
