# To Do


## First Iteration

- Add a thick border to the exercise card for the current exercise.
- Reset button
  - Every time `createWorkout()` fires, it should save all the starting settings. That way at the end, a function can be invoked that goes back to those settings, even though the timer doesn't begin again unless you click the "Begin Workout" button.
  - LOOK UP "UNDERSTANDING THE WEIRD PARTS" IN REGARD TO COPYING OBJECTS.
- BUG: There seems to be an extra one-second pause right before each Transition begins.
- At the end of each circuit:
  - If circuits remain:
    - If breaks are set to "circuit," pause.
    - Else ("nonstop" or "exercise"), run the next circuit without stopping. (If "exercise," it will have already paused at the end of the last exercise.)
  - Else:
    - Reset to the starting settings. (Calls the same function as the "Reset" button that will display while paused.)
- BUG: Disable or hide certain buttons while the timer is already running.
- Circuits:
  - Display remaining circuits in the UI.
  - Convert `setCircuits` function to regex for numerical keyups.
  - Circuits input: Make sure everything still updates when up and down arrows are clicked. That functionality was lost when the `keyup` condition was added.
- Find sfx and add them to the project:
  - Start workout.
  - Last 5 seconds of pose. (One beep per second except for zero.)
  - Finish pose || exercise || circuit || workout.
  - User option to turn sound on or off.
- Convert everything to arrow functions.
- Convert everything possible to object literal.


## Second Iteration

- Style UI.
  - Adobe XD.
  - Change color of countdown timer depending how much time is left.
- Refactor code.
  - Use proper accessibility protocols.
  - Use BEM.


## Third Iteration

- Whenever workout is paused, run a small count-UP timer that shows how long you've been taking a break.
- A bar at the bottom that visually shows the percentage of your workout that's done. Increments every second.
- Also display total remaining time countdown (smaller).