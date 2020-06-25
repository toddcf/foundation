const exercises = [
  {
    title: 'The Founder',
    level: 'Basic',
    levelNumber: 1,
    transition: 5000,
    poses: [
      {
        desc: 'Pose 1',
        duration: 15000,
        img: ''
      },
      {
        desc: 'Pose 2',
        duration: 15000,
        img: ''
      },
      {
        desc: 'Pose 3',
        duration: 15000,
        img: ''
      },
      {
        desc: 'Pose 4',
        duration: 6000,
        img: ''
      },
      {
        desc: 'Pose 4',
        duration: 15000,
        img: ''
      },
      {
        desc: 'Pose 5',
        duration: 15000,
        img: ''
      },
      {
        desc: 'Pose 6',
        duration: 20000,
        img: ''
      }
    ]
  },
  {
    title: 'Foundation Squat',
    level: 'Moderate',
    levelNumber: 2,
    transition: 3000,
    poses: [
      {
        desc: 'Pose 1',
        duration: 50000,
        img: ''
      }
    ]
  },
  {
    title: 'Good Morning',
    level: 'Intense',
    levelNumber: 3,
    transition: 3000,
    poses: [
      {
        desc: 'Pose 1',
        duration: 42000,
        img: ''
      }
    ]
  },
  {
    title: 'Windmill',
    level: 'Intense',
    levelNumber: 3,
    transition: 3000,
    poses: [
      {
        desc: 'Pose 1',
        duration: 15000,
        img: ''
      },
      {
        desc: 'Pose 2',
        duration: 30000,
        img: ''
      },
      {
        desc: 'Pose 3',
        duration: 30000,
        img: ''
      }
    ]
  },
  {
    title: 'Woodpecker',
    level: 'Moderate',
    levelNumber: 2,
    transition: 5000,
    poses: [
      {
        desc: 'Pose 1',
        duration: 5000,
        img: ''
      },
      {
        desc: 'Pose 2',
        duration: 5000,
        img: ''
      },
      {
        desc: 'Pose 3',
        duration: 20000,
        img: ''
      },
      {
        desc: 'Pose 4',
        duration: 3000,
        img: ''
      },
      {
        desc: 'Pose 5',
        duration: 15000,
        img: ''
      }
    ]
  },
  {
    title: 'Back Extension',
    level: 'Basic',
    levelNumber: 1,
    transition: 10000,
    poses: [
      {
        desc: 'Pose 1',
        duration: 30000,
        img: ''
      }
    ]
  },
  {
    title: 'Foundation Plank',
    level: 'Intense',
    levelNumber: 3,
    transition: 5000,
    poses: [
      {
        desc: 'Pose 1',
        duration: 10000,
        img: ''
      },
      {
        desc: 'Pose 2',
        duration: 30000,
        img: ''
      },
      {
        desc: 'Pose 3',
        duration: 10000,
        img: ''
      }
    ]
  },
  {
    title: 'Adductor-Assisted Back Extension',
    level: 'Basic',
    levelNumber: 1,
    transition: 5000,
    poses: [
      {
        desc: 'Pose 1',
        duration: 20000,
        img: ''
      }
    ]
  },
  {
    title: 'Child\'s Pose / Kneeling Founder',
    level: 'Basic',
    levelNumber: 1,
    transition: 3000,
    poses: [
      {
        desc: 'Pose 1',
        duration: 30000,
        img: ''
      },
      {
        desc: 'Pose 2',
        duration: 15000,
        img: ''
      },
      {
        desc: 'Pose 3',
        duration: 10000,
        img: ''
      }
    ]
  },
  {
    title: 'Lunge Stretch',
    level: 'Basic',
    levelNumber: 1,
    transition: 10000,
    poses: [
      {
        desc: 'Pose 1',
        duration: 20000,
        img: ''
      },
      {
        // Can this shift get rolled into the next pose so that that image can be displayed?
        desc: 'Shift Position',
        duration: 5000
      },
      {
        desc: 'Pose 2',
        duration: 20000,
        img: ''
      }
    ]
  },
  {
    title: 'Crossover',
    level: 'Bonus',
    levelNumber: 4,
    transition: 10000,
    poses: [
      {
        desc: 'Pose 1',
        duration: 15000,
        img: ''
      },
      {
        desc: 'Pose 2',
        duration: 15000,
        img: ''
      },
      {
        desc: 'Pose 3',
        duration: 15000,
        img: ''
      },
      {
        desc: 'Pose 4',
        duration: 15000,
        img: ''
      }
    ]
  },
  {
    title: "Cross Under",
    level: 'Bonus',
    levelNumber: 4,
    transition: 5000,
    poses: [
      {
        desc: 'Pose 1',
        duration: 2000,
        img: ''
      },
      {
        desc: 'Pose 2',
        duration: 2000,
        img: ''
      },
      {
        desc: 'Pose 3',
        duration: 20000,
        img: ''
      },
      {
        desc: 'Pose 4',
        duration: 2000,
        img: ''
      },
      {
        desc: 'Pose 5',
        duration: 2000,
        img: ''
      },
      {
        desc: 'Pose 6',
        duration: 20000,
        img: ''
      }
    ]
  }
]

const workout = [];
let bonusExercises = [];
let circuits = 3; // default, but user can type in any whole number above 0.
let currentCircuit = 0;
let estimatedTime = 0; // default
const sfx = {
  begin: '',
  penultimate: '',
  nextPose: '',
  done: '',
  finale: ''
}
let bonus = false; // default
let pauses = 0; // default
// 0 = automatic - none
// 1 = manual - between circuits
// 2 = manual - between each exercise

// Level Selection:
// Loop over the exercises object and store any that match the chosen level (and below) in the workout array:
// If level = Basic, then workout = [exercises.level === 'Basic'];
// If level = Moderate, then workout = [exercises.level === 'Basic' || 'Moderate'];
// If level = Intense, then workout = [exercises.level === 'Basic' || 'Moderate' || 'Intense'];
// If bonus = true, then after the workout is done, the bonus exercises will begin.  QUESTION: ARE THESE SUPPOSED TO BE ADDED TO THE END OF EACH CIRCUIT (PUSHED TO THE ARRAY), OR ADDED TO THE END OF THE ENTIRE WORKOUT (A SEPARATE ARRAY THAT RUNS AFTERWARD)?  For now, let's say it's the latter.
// Calculates the total estimated workout time (total array time multiplied by number of circuits) and displays on the page.

// Instead of converting from a string to a level number, pull the number from a data attribute in the UI.
let level = 'Intense';
let levelNumber = 1; // Default
switch (level) {
  case 'Basic':
    levelNumber = 1;
    break;
  case 'Moderate':
    levelNumber = 2;
    break;
  case 'Intense':
    levelNumber = 3;
    break;
  default:
    levelNumber = 1;
}
console.log(`Level Number: ${levelNumber}`);

const program = exercises.filter(function(exercise) {
  return exercise.levelNumber <= levelNumber;
});
console.log(program);


// Estimate Total Workout Time:
// Sum of all transitions and pose durations:
program.forEach(function(exercise) {
  estimatedTime += exercise.transition;
  return exercise.poses.forEach(function(pose) {
    estimatedTime += pose.duration;
  });
});
console.log(`Estimated Time per Circuit: ${estimatedTime}`);

estimatedTime *= circuits;
console.log(`Estimated Total Workout Time: ${estimatedTime}`);

// Add Bonus if applicable.
// Since these are always separate (I think), maybe they should just be in their own array to begin with, and not have to be filtered.
if (bonus) {
  bonusExercises = exercises.filter(function(exercise) {
    return exercise.levelNumber === 4;
  });
  bonusExercises.forEach(function(bonusExercise) {
    estimatedTime += bonusExercise.transition;
    return bonusExercise.poses.forEach(function(pose) {
      estimatedTime += pose.duration;
    });
  });
  console.log(`Estimated Time Including Bonus Exercises: ${estimatedTime}`);
}

// Convert Time Units
var minutes = Math.floor(estimatedTime / 1000 / 60);
var seconds = estimatedTime / 1000 % 60;

console.log(`Estimated Workout Time: ${minutes}:${(seconds < 10) ? '0' + seconds : seconds}`); // Add a 0 before seconds if under 10.


// Initiate Workout:
// Take the first object in the workout array.  Use a promise chain: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
let rootTimer = program[0].transition;
let displayTimer = rootTimer / 1000;
console.log(`-${displayTimer}`);
let firstTransition = setInterval(function() {
  if (displayTimer > 0) {
    displayTimer--;
    console.log((displayTimer > 0) ? `-${displayTimer}` : `${displayTimer}`);
  } else {
    clearInterval(firstTransition);
  }
}, 1000);
// Display its title in the UI.
// Display its image in the UI.
// Countdown its transition in the UI. (Negative numbers.)
// When the countdown reaches zero, play sfx.begin.
// Then count up its first pose duration in the UI. Play sfx.penultimate for each of the last five seconds. When time limit is reached, play sfx.nextPose (unless it is the last pose in the object).
// Repeat this process for each pose OR SHIFT in this object. (NOTE: A shift should be added to some objects.)
// When all the poses are done, play sfx.done, move on to the next object in the array, and repeat the steps above.
// When all exercises are done, if bonus === false, then play sfx.finale. If bonus === true, initiate bonus workout.


// Bonus Workout:
// Run the same procedure listed above for exercises.crossover and exercises.crossUnder.
// When complete, play sfx.finale.


// UX:
// User can pause workout.
// User can choose "one exercise at a time," "one circuit at a time," or "nonstop."


// UI:
// Displays current circuit number.
// Displays remaining number of circuits.