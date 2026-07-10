# Stripe with upfront payment plus BNPL, always paid in full

Payment is taken through **Stripe**. The default is full term price upfront by card (with Apple/Google Pay); families who want to spread the cost use a **BNPL** method (Afterpay / Zip / Klarna) offered at the same checkout. In both cases the academy is **paid in full immediately** — the BNPL provider carries the instalment risk — and an Enrollment activates only once Stripe confirms the payment.

We deliberately do **not** build academy-financed instalment plans for launch. That would require overdue tracking, failed-payment retries, and suspending enrollments for non-payment ("attended six lessons but stopped paying"). BNPL satisfies the same "let me pay it off" need without putting the academy in the debt-collection business. A self-financed plan can be added later if a real need appears.

Trade-off accepted: BNPL fees on those transactions, and Stripe as a payment-provider dependency, in exchange for zero dunning logic and guaranteed cash-in-full at enrollment.
