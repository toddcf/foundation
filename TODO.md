# To Do


## First Iteration

- Have "Breaks" dropdown trigger `createWorkout()`.
- `startOver()` conditions need to be set in the function.
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
- SFX
  - Download SFX:
    - Make workout selections (including Pause and Clear Workout):
      - THELIBRARYBYMTC UI TINY CLICK 28 [DOWNLOADED]
    - Start || Continue || Finish Workout.
      - ALERT 30 [DOWNLOADED]
    - Last 5 seconds of pose ("Warning"). (One beep per second except for zero.)
      - MODULAR UI FM SOLO BLEEPS 039 [DOWNLOADED]
      - AIRY ECHO METALLIC ALERT
      - MODULAR UI CONFIRM TONEFM 056
    - Finish ("Next") transition || pose || exercise || circuit. 
      - MODULAR UI FM SOLO BLEEPS 001 [DOWNLOADED]
    - User SFX Options
      - Turn all sound on or off.
      - Turn individual sounds on or off.
    - Equalize the volume of each SFX in ACID if necessary.
    - Set SFX to trigger at the appropriate times.
- Convert everything to arrow functions.
- Convert everything possible to object literal.
- Create detailed README.
- Unused SFX:
  - ALERT ASTERISK 1
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