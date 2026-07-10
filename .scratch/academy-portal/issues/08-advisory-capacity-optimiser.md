# Advisory capacity optimiser

Status: ready-for-agent

## Parent

[Academy Portal PRD](../PRD.md)

## What to build

Live capacity guidance layered onto the weekly planner, driven by the coaching ratio (~4–6 students per coach). Advisory only — it never moves a Student automatically.

- Show the live coaching ratio for each Session as the Head Coach plans.
- Flag Sessions as crowded (assigned > coaches × ratio ceiling, no coach available) or empty (assigned < coaches × ratio floor).
- Offer one-tap suggestions to move a specific Student who is eligible and available from a crowded Session to an under-filled one.
- Let the Head Coach add or remove Coaches on a Session, updating the ratio.
- The crowded/empty/suggested-move computation is a pure module with exhaustive unit tests.

## Acceptance criteria

- [ ] Each Session shows its current ratio; crowded and empty Sessions are flagged as staffing/assignments change.
- [ ] Suggested moves only ever name Students eligible and available for the target Session.
- [ ] Applying a suggestion is one action and updates both Sessions; no Student is ever moved without the Head Coach acting.
- [ ] Adding/removing a Coach recomputes the ratio and flags.
- [ ] Pure unit tests cover crowded, empty, boundary ratios, and suggestion selection.

## Blocked by

- [07 Weekly assignment planner](./07-weekly-assignment-planner.md)
