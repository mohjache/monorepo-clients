# Advisory capacity optimiser driven by the coaching ratio

Capacity is expressed through the **coaching ratio** (target ~4–6 Students per Coach), not a hard per-Class cap. For a given Session:

- **Crowded** — assigned Students exceed (Coaches × ratio ceiling) with no further Coach available.
- **Empty** — assigned Students fall below (Coaches × ratio floor), so a Coach is underused and the Session could be consolidated or a Coach released.

The optimiser is **advisory only**. While the Head Coach drafts the week it shows live per-Session ratio, flags crowded and empty Sessions, and proposes concrete one-tap moves — but only ever suggests moving a Student to a Session they are eligible for (audience/level) and marked available for. It never reassigns a Student automatically.

We rejected automated rebalancing: coaches hold context the system can't model (training pairings, squad assessment), and silently moving people would erode trust in the tool. The system proposes; the Head Coach disposes. This is a deliberate product stance, not a missing feature — do not add auto-assignment without revisiting this.
