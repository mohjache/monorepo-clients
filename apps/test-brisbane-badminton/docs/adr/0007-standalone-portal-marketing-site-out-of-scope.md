# Standalone academy portal; marketing site out of scope

We build a **standalone application** (this monorepo's `test-brisbane-badminton` app) covering registration, payment, and coaching/student management — Accounts, Enrollments, weekly Assignments, attendance, and capacity tools. The public marketing website (badmintonbrisbane.com.au) is owned by a third party and is **out of scope**: we do not modify it or depend on its code.

The only integration is a single outbound link — the marketing site's "Register" button points at our portal, replacing the current Google Form link. "Seamless" is achieved by matching the portal's branding to the marketing site, not by embedding into it.

Consequence: the portal must be self-sufficient (its own domain/subdomain, its own navigation and identity), and we can style it to resemble the marketing site but cannot assume any shared code, auth, or session with it.
