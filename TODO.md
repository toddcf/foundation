# To Do


## First Iteration

- BUG: There is an extra one-second pause right before each Transition begins (after the first exercise).
- BUG: Disable or hide workout settings buttons while the workout is ACTIVE. Re-enable them if workout is INACTIVE.
- Convert `setCircuits` function to regex for numerical keyups.
- BUG: Don't play SFX for countdown during lunge stretch shift (from left to right) or similar shifts in other exercises.
- BUG: Get rid of console error for blocked sfx play: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes.
- Convert everything to arrow functions.
- Convert everything possible to object literal.
- Create detailed README.


## Second Iteration

- Style UI.
  - Adobe XD.
  - Change color of countdown timer depending how much time is left.
  - Create separate "instructions" page that explains how to use the timer.
- Refactor code.
  - Use proper accessibility protocols.
  - Use BEM.


## Third Iteration

- A bar at the bottom that visually shows the percentage of your workout that's done. Increments every second.  (Pauses if workout is paused.)
- Also display total remaining time countdown (smaller).  (Pauses if workout is paused.)