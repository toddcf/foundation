const exercises = {
  founder: {
    title: 'The Founder',
    level: 'Basic',
    transition: 5000,
    pose1: 15000,
    pose2: 15000,
    pose3: 15000,
    pose4: 6000,
    pose5: 15000,
    pose6: 15000,
    pose7: 20000
  },
  foundationSquat: {
    title: 'Foundation Squat',
    level: 'Moderate',
    transition: 3000,
    pose1: 50000
  },
  goodMorning: {
    title: 'Good Morning',
    level: 'Intense',
    transition: 3000,
    pose1: 42000
  },
  windmill: {
    title: 'Windmill',
    level: 'Intense',
    transition: 3000,
    pose1: 15000,
    pose2: 30000,
    pse3: 30000
  }
  woodpecker: {
    title: 'Woodpecker',
    level: 'Moderate',
    transition: 5000,
    pose1: 5000,
    pose2: 5000,
    pose3: 20000,
    pose4: 3000,
    pose5: 15000
  },
  backExt: {
    title: 'Back Extension',
    level: 'Basic',
    transition: 10000,
    pose1: 30000
  },
  foundationPlank: {
    title: 'Foundation Plank',
    level: 'Intense',
    transition: 5000,
    pose1: 10000,
    pose2: 30000,
    pose3: 10000
  }
  addAssBackExt: {
    title: 'Adductor-Assisted Back Extension',
    level: 'Basic',
    transition: 5000,
    pose1: 20000
  },
  childPoseKneeling: {
    title: 'Child\'s Pose / Kneeling Founder',
    level: 'Basic',
    transition: 3000
    pose1: 30000,
    pose2: 15000,
    pose3: 10000
  },
  lungeStretch: {
    title: 'Lunge Stretch',
    level: 'Basic',
    transition: 10000,
    pose1: 20000,
    shift: 5000,
    pose2: 20000
  },
  crossover: {
    title: 'Crossover',
    level: 'Bonus',
    transition: 10000,
    pose1: 15000,
    pose2: 15000,
    pose3: 15000,
    pose4: 15000
  },
  crossunder: {
    title: "Cross Under",
    level: 'Bonus',
    transition: 5000,
    pose1: 2000,
    pose2: 2000,
    pose3: 20000,
    pose4: 2000,
    pose5: 2000,
    pose6: 20000
  }
}

const workout = [];
let level;
let circuits = 3; // default, but user can type in any whole number above 0.
const sfx = {
  begin: '',
  penultimate: '',
  nextPose: '',
  done: '',
  finale: ''
}
let bonus = false; // default

// Level Selection:
// Loop over the exercises object and store any that match the chosen level (and below) in the workout array:
// If level = Basic, then workout = [exercises.level === 'Basic'];
// If level = Moderate, then workout = [exercises.level === 'Basic' || 'Moderate'];
// If level = Intense, then workout = [exercises.level === 'Basic' || 'Moderate' || 'Intense'];
// If bonus = true, then after the workout is done, the bonus exercises will begin.


// Initiate Workout:
// Take the first object in the workout array.
// Display its title in the UI.
// Display its image in the UI.
// Countdown its transition in the UI. (Negative numbers.)
// When the countdown reaches zero, play sfx.begin.
// Then count up its first pose duration in the UI. Play sfx.penultimate for each of the last five seconds. When time limit is reached, play sfx.nextPose (unless it is the last pose in the object).
// Repeat this process for each pose in this object.
// When all the poses are done, play sfx.done, move on to the next object in the array, and repeat the steps above.
// When all exercises are done, if bonus === false, then play sfx.finale. If bonus === true, initiate bonus workout.


// Bonus Workout:
// Run the same procedure listed above for exercises.crossover and exercises.crossUnder.
// When complete, play sfx.finale.