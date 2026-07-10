# Attendance-driven lesson consumption with term-end expiry

A Lesson is consumed **only when the Student attends** a Session (the Coach marks them present courtside on a phone/tablet against that Session's assigned roster). Assigning a Student to a Session does not spend a Lesson, and a no-show or cancellation costs nothing at the moment it happens.

To keep this consistent with Plans that advertise "no makeup lessons" (Starter), **unattended Lessons expire at Term end**. A **Makeup** is an Assignment beyond the Plan's normal weekly frequency that lets a Student use a Lesson they'd otherwise lose; only makeup-permitting Plans can receive these extra Assignments. Starter gets its regular cadence only, so a missed Starter Lesson is simply lost when the Term closes.

This reconciles the maintainer's chosen "spend on attendance" rule with the advertised makeup/no-makeup distinction. Without the term-end expiry the two contradict — attended-only consumption would otherwise give every plan an implicit makeup. Recorded because the expiry rule is invisible in the data model and a future reader would otherwise "fix" it.
