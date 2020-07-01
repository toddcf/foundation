# To Do

- Build UI in BEM, following proper accessibility protocols.
  - Pause / Resume button
    - Transition resume feature is fixed.  Apply a similar fix to the pose countdowns.
  - Reset / Cancel button
- Display the name of the current exercise in the UI.
- Convert `setCircuits` function to regex for numerical keyups.
- Find sfx and add them to the project:
  - Start workout.
  - Last 5 seconds of pose. (One beep per second except for zero.)
  - Finish pose || exercise || circuit || workout.
  - User option to turn sound on or off.
- Do I need to disable the rest of the buttons while a workout is in progress? Otherwise, what happens if the user selects a new workout while the timer is runnig?
- What should the "Begin Workout" button do after the workout has ended? Right now it just prints "Finished!" to the console again. It doesn't reset anything.
  - Maybe every time `createWorkout()` fires, it should save all the starting settings. That way at the end, a function can be invoked that goes back to those settings, even though the timer doesn't begin again unless you click the "Begin Workout" button.