# Academy

The domain of the Badminton Brisbane academy: how people register for semester-based coaching programs, pay for them, have their attendance marked, and how classes are kept from becoming too crowded or too empty.

## Language

### Identity

**Account**:
The login-owning entity, held by a single adult and accessed passwordlessly (magic link / email code). Owns one or more Students and is the party that pays. An adult who plays and a parent registering children both hold one Account.
_Avoid_: User, login, profile

**Student**:
A person who attends sessions — a child or an adult. Every Student belongs to exactly one Account. An adult player is a Student under their own Account.
_Avoid_: Player, member, participant, attendee

**Account Holder**:
The adult who owns an Account and is responsible for its Students and payments. For a child Student, the Account Holder is their guardian.
_Avoid_: Guardian, parent, owner (when the person, not the role, is meant)

### The offering

**Term**:
A fixed date range aligned to a Queensland school term (~10 weeks; e.g. 13 Jul – 20 Sep 2026). All Classes run weekly within a Term, and Plans are sold per Term.
_Avoid_: Semester, season

**Class**:
A recurring weekly training slot with an audience (kids or adult), a level (e.g. beginner, intermediate, advanced, multi-level), a day and 2-hour time block, and one or more coaches. The Class is the thing that becomes "too crowded" or "too empty". Example: "Adult — Wednesday 7–9pm (New to Beginner)".
_Avoid_: Group, squad (except the proper noun "Advanced Squad"), timeslot

**Session**:
A single dated occurrence of a Class within a Term (e.g. Wed 15 Jul, 7–9pm). Attendance is marked per Session. Marketing counts these as "lessons".
_Avoid_: Lesson (as the scheduled event), class (as an occurrence)

**Lesson**:
The quota unit a Plan is counted in ("10 lessons per term"). A Lesson is consumed only when the Student **attends** a Session; an assigned-but-unattended Lesson is not consumed. Unattended Lessons **expire at Term end**.
_Avoid_: Credit, session (when the quota, not the event, is meant)

**Plan**:
The product a Student buys for a Term. A named tier (Starter, Foundation, Advanced Squad, Development, Performance, Elite) that fixes a price, a per-Term Lesson quota, and a weekly frequency. A Plan may be invite-only, may allow or forbid Makeups, and may accept a Voucher.
_Avoid_: Package, tier, membership, subscription

**Enrollment**:
A Student placed on a Plan for a Term. Grants that Plan's Lesson quota and is the thing that gets paid for. An Enrollment is not bound to fixed Classes; the Student's Lessons are spent via weekly Assignments (see ADR 0002).
_Avoid_: Registration (the act) vs Enrollment (the resulting record) — keep them distinct; sign-up, booking

**Assignment**:
A Student placed into a specific Session for a given week by the Head Coach. Consumes one Lesson of the Enrollment's quota when the Student attends. Assignments are redrawn each week and can change with coach and slot availability.
_Avoid_: Booking, reservation, roster entry

**Availability**:
The Sessions or weekly slots a Student (or Coach) can attend, used as the input the Head Coach assigns against. May be a standing default set at Enrollment and overridden per week.
_Avoid_: Preference (when a hard constraint is meant), schedule

### Roles

**Coach**:
Staff who run Sessions; each Coach present counts toward the coaching ratio for that Session.
_Avoid_: Trainer, instructor

**Head Coach**:
The person who plans each week's Session rosters (Assignments) and manages Coach and slot availability. The primary user of the capacity-planning tools.
_Avoid_: Manager, admin (the Head Coach is a distinct role from a billing/admin operator)

### Eligibility

**Audience**:
Whether a Student is a kid or an adult, derived from date of birth. Classes serve one Audience. The primary split in the weekly schedule ("Kids Group Training" vs "Adult Group Training").
_Avoid_: Age group, category

**Level**:
A Student's playing standard (e.g. beginner, intermediate, advanced, multi-level), self-declared at registration and adjustable by the Head Coach. Adult Classes are Level-labeled; it filters which Classes a Student is eligible for.
_Avoid_: Grade, skill, rating

**Eligibility**:
Whether a Student may be assigned to a given Session, determined by matching Audience and Level and by any invite gating (Advanced Squad and Elite require an invite). The optimiser only ever suggests moves a Student is eligible and available for.
_Avoid_: Qualification, permission

### Capacity & payment

**Coaching ratio**:
The target of roughly 4–6 Students per coach in a Session, maintained "where possible" by assigning more coaches rather than hard-capping a Class. Drives when a Session is "too crowded" (ratio too high with no coach to add) or "too empty" (a coach is underused).
_Avoid_: Capacity, class size, cap

**Makeup**:
An Assignment into a catch-up Session **beyond the Plan's normal weekly frequency**, so a Student can use a Lesson they would otherwise lose before Term end. Only Plans that permit makeups can be given these extra Assignments; the Starter Plan cannot (regular cadence only).
_Avoid_: Reschedule, credit refund

**Voucher**:
A government activity voucher (e.g. Queensland FairPlay / "PlayOn") applied during payment to reduce the amount due on eligible Plans.
_Avoid_: Coupon, discount code, gift card

**Credit**:
Stored value on an Account created from unattended Lessons when a Student withdraws mid-Term, redeemable against a future Term's Enrollment. Never refundable to cash.
_Avoid_: Refund, balance, wallet
