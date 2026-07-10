# Admin reporting, level adjustment, and staff management

Status: ready-for-agent

## Parent

[Academy Portal PRD](../PRD.md)

## What to build

The Admin's running-the-academy surface: oversight reporting, Level correction, and staff role management.

- Manage staff as Coach or Admin; a Coach can only mark attendance and view their own rosters, an Admin can do everything.
- Adjust a Student's Level (correcting a self-declared Level after seeing them play), which updates their eligibility.
- Reporting across enrollments, payments, attendance, and outstanding voucher reconciliations.

## Acceptance criteria

- [ ] An Admin can assign or change a staff member's role between Coach and Admin, enforced server-side.
- [ ] A Coach's access is limited to attendance and their own rosters.
- [ ] An Admin can change a Student's Level and it changes which Classes they are eligible for.
- [ ] Reporting shows current enrollments, payments, attendance, and pending voucher reconciliations.
- [ ] Integration test covers a role change altering access and a Level change altering eligibility.

## Blocked by

- [04 Enroll and pay (upfront card)](./04-enroll-and-pay-upfront.md)
