# To Do


## First Iteration

- At the end of each circuit:
  - If circuits remain:
    - If breaks are set to "circuit," pause.
    - Else ("nonstop" or "exercise"), run the next circuit without stopping. (If "exercise," it will have already paused at the end of the last exercise.)
- BUG: There seems to be an extra one-second pause right before each Transition begins.
- BUG: Disable or hide workout settings buttons while the workout is ACTIVE. Re-enable them if workout is INACTIVE.
- Convert `setCircuits` function to regex for numerical keyups.
- SFX
  - Equalize the volume of each SFX in ACID if necessary.
  - BUG: Don't play SFX for countdown during lunge stretch shift (from left to right).
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

- Whenever workout is paused, run a small count-UP timer that shows how long you've been taking a break.
- A bar at the bottom that visually shows the percentage of your workout that's done. Increments every second.
- Also display total remaining time countdown (smaller).