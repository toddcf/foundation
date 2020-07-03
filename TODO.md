# To Do


## First Iteration

- BUG: There seems to be an extra one-second pause right before each Transition begins.
- At the end of each circuit:
  - If circuits remain:
    - If breaks are set to "circuit," pause.
    - Else ("nonstop" or "exercise"), run the next circuit without stopping. (If "exercise," it will have already paused at the end of the last exercise.)
  - Else:
    - DONE: Reset to the starting settings. (Calls the same function as the "Reset" button that will display while paused.)
- BUG: Disable or hide workout settings buttons while the workout is ACTIVE. Re-enable them if workout is INACTIVE.
- Circuits:
  - Convert `setCircuits` function to regex for numerical keyups.
- Find sfx and add them to the project:
  - Make workout selections:
    - THELIBRARYBYMTC UI TINY CLICK 28
  - Start / Next pose || exercise || circuit || workout.
    - ALERT 30 (or finish?)
  - Last 5 seconds of pose. (One beep per second except for zero.)
    - MODULAR UI FM SOLO BLEEPS 039
    - MODULAR UI SOLO BLEEPS 011 ?
    - MODULAR UI SOLO BLEEPS 033 ?
  - Finish .
    - ALERT 30 (or start?)
  - User option to turn sound on or off.
- Convert everything to arrow functions.
- Convert everything possible to object literal.
- Create detailed README.
- Unused SFX:
  - MODULAR UI FM SOLO BLEEPS 001
  - MODULAR UI CONFIRM TONEFM 014
  - MODULAR UI CONFIRM TONEFM 062


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