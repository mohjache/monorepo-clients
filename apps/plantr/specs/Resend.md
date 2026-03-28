## Resend setup

The waitlist flow uses Resend and expects these environment variables in `.env`:

- `RESEND_API_KEY`
- `RESEND_SEGMENT_ID`
- `RESEND_FROM_EMAIL`
- `WAITLIST_NOTIFICATION_EMAIL` optional

Setup steps:

1. Create or use a verified sender/domain in Resend for `RESEND_FROM_EMAIL`.
2. Create a segment in Resend for the Plantr waitlist.
3. Copy that segment ID into `RESEND_SEGMENT_ID`.
4. Add the values to `apps/plantr/.env`.

The current waitlist flow:

- creates a Resend contact
- adds the contact to the configured segment
- sends an automatic welcome email
- optionally sends an internal notification email
