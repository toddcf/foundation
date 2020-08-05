# To Do


## First Iteration

- BUG: Remove the extra one-second pause right before each Transition begins (after the first exercise).
  - Refactor `setTimerValue()` to check conditions "from big, down," meaning first check circuits, then check exercises.  And after all that, flow back into one code block that checks if the workout is still active, and if so, fires `runCountdownTimer()`.  (I have moved some of this code around accordingly, but have not tested yet.)
  - The only thing `setTimerValue()` should have to do is determine which value to set it to, set it, and then fire `runCountdownTimer()`.  The only times it is fired is at the beginning of the workout (when all the settings are going to evaluate to a value for the timer), and when `runCountdownTimer()` or the "unpause" functions fire it -- and the logic in those will mean that it doesn't even get fired if it's unnecessary, so we don't need to worry about much logic inside `setTimerValue()`.
  - Create logic flowcharts for `runCountdownTimer()` and `setTimerValue()`.
    - Create drafts that highlight each use case path and test them -- but do these one at a time because you might have to make changes to the flowchart as you discover mistakes!
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