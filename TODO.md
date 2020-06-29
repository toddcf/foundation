# To Do

- Chain the workout timers to each other.
  - `beginNextExercise();`
    - Write code in this function that iterates over each object in the workout array until it ends, then moves on to the next.
      - Within each of these, it must count down the transition time first.
      - After the transition, within each of these, it must iterate over all the poses.
- Build basic UI in BEM, following proper accessibility protocols. (Functionality only, style later.)
  - Pause button
  - Reset / Cancel button
  - Interval Selections:
    - "One exercise at a time."  (You're still learning and need to look up each exercise before you begin.)
    - "One circuit at a time."  (You know the workout, but want to rest in between circuits.)
    - "Nonstop."  (You know the workout by heart, want to get the maximum physical benefit from it, and want to finish in less amount of time.) DEFAULT
- Find sfx and add them to the project:
  - Start workout.
  - Last 5 seconds of pose. (One beep per second except for zero.)
  - Finish pose || exercise || circuit || workout.
  - User option to turn sound on or off.