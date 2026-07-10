# Passwordless Accounts that own Students

We model identity as an **Account** (one adult, passwordless magic-link/email-code login) that owns one or more **Students** (child or adult attendees), rather than as stateless per-semester registrations keyed by email.

Accounts give us a durable identity to attach attendance history, re-enrollment, and capacity notifications to, and de-duplicate families across semesters. We accept the extra build cost over stateless registration because attendance and capacity optimisation — core goals of this system — are impractical without it. Passwordless login keeps the "seamless and easy" requirement intact by removing password friction.

Hard to reverse: enrollment, payment, and attendance records will all reference Account and Student identifiers.
