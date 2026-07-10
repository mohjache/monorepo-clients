# Government vouchers and invite-only plans

**Vouchers (PlayOn / FairPlay).** On voucher-eligible Plans, a family may enter a voucher code at checkout, which reduces the Stripe amount by the voucher's fixed value (possibly to $0). The Enrollment is flagged "voucher pending redemption" and lands in an admin queue; the academy verifies the code and claims reimbursement from the government externally, then marks it reconciled. There is no public API to validate codes, so redemption is inherently a manual back-office step — the system records and reconciles, it does not integrate with the government portal.

**Invite-only Plans (Advanced Squad, Elite).** These are not self-serve. The Head Coach invites a specific Student, after which the invite-only Plan becomes purchasable for that account through the normal Stripe checkout. The Plan is hidden from everyone else. This keeps the "advanced players only" gate real without a separate manual enrollment path that would live outside reporting.
