# To Do


## First Iteration

- BUG: At the end of the workout, UI displays "0-1". (I don't think startOver() got invoked at the end.)
- BUG: Why is the first click sfx quiet and the rest louder? Is it getting fired once the first time, and multiple times simultaneously on subsequent clicks?
- BUG: Don't play SFX for countdown during lunge stretch shift (from left to right) or similar shifts in other exercises.
- Convert `setCircuits` function to regex for numerical keyups.
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