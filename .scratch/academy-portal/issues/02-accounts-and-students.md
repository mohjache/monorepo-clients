# Accounts and Students

Status: ready-for-agent

## Parent

[Academy Portal PRD](../PRD.md)

## What to build

The identity layer families interact with: a passwordless Account that owns one or more Students. End-to-end from the registration form through persistence to a view of the Account's Students.

- Create an Account tied to the signed-in WorkOS user (Account Holder).
- Add, edit, and remove Students on the Account. Per Student: name, date of birth (Audience — kid/adult — derived from it), self-declared Level, and an emergency contact.
- For a minor Student, require acceptance of a medical/liability waiver before the Student can be saved. Optional media/photo consent.
- An adult Account Holder may add themselves as a Student.
- View showing all Students on the Account.

## Acceptance criteria

- [ ] An authenticated Account Holder can add a Student with name, DOB, Level, and emergency contact, and see them listed.
- [ ] Audience (kid/adult) is derived from DOB, not entered.
- [ ] Adding a minor Student requires waiver acceptance; the Student cannot be saved without it.
- [ ] An Account can hold multiple Students; each is editable and removable.
- [ ] Integration test covers add-student including the minor-waiver gate.

## Blocked by

- [01 Walking skeleton](./01-walking-skeleton.md)
