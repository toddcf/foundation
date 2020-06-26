const exercises = [
  {
    title: 'The Founder',
    level: 'Basic',
    difficulty: 1,
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
    difficulty: 2,
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
    difficulty: 3,
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
    difficulty: 3,
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
    difficulty: 2,
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
    difficulty: 1,
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
    difficulty: 3,
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
    difficulty: 1,
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
    difficulty: 1,
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
    difficulty: 1,
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
    difficulty: 4,
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
    difficulty: 4,
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

const totalDurationUI = document.querySelector('.totalDurationUI');
let estimatedTime = 0; // default
let bonus = true; // default = false
let workout;
let difficulty = 1;
const difficultyUI = document.querySelector('.settings-difficulty__name');
let difficultyText;
let bonusExercises = [];
let circuits;
const circuitsInput = document.querySelector('.settings-circuits__value');
function setCircuits() {
  if (circuitsInput.value > 0) {
    circuits = circuitsInput.value;
    console.log(`Circuits: ${circuits}`);
    createWorkout();
  }
}
setCircuits();
circuitsInput.addEventListener('keyup', setCircuits);
let currentCircuit = 0;

const sfx = {
  begin: '',
  penultimate: '',
  nextPose: '',
  done: '',
  finale: ''
}

let intervals = 0; // default = nonstop
// User can choose intervals:
  // A) One exercise at a time.  (You're still learning and need to look up each exercise before you begin.)
  // B) One circuit at a time.  (You know the workout, but want to rest in between circuits.)
  // C) Nonstop.  (You know the workout by heart, want to get the maximum physical benefit from it, and want to finish in less amount of time.)


// If bonus = true, then after the workout is done, the bonus exercises will begin.  QUESTION: ARE THESE SUPPOSED TO BE ADDED TO THE END OF EACH CIRCUIT (PUSHED TO THE ARRAY), OR ADDED TO THE END OF THE ENTIRE WORKOUT (A SEPARATE ARRAY THAT RUNS AFTERWARD)?  For now, let's say it's the latter.
// Calculates the total estimated workout time (total array time multiplied by number of circuits) and displays on the page.

// Difficulty will be set by the user in the UI.
  // 1 = 'Basic'
  // 2 = 'Moderate'
  // 3 = 'Intense'

const difficultyButtons = document.querySelectorAll('.settings-difficulty__btn');
function setDifficulty(e) {
  difficulty = parseInt(e.target.value);
  createWorkout();
}
difficultyButtons.forEach(function() {
  addEventListener('click', setDifficulty);
});

const bonusCheckbox = document.querySelector('.settings-bonus__checkbox');
function setBonus(e) {
  if (e.target.checked) {
    bonus = true;
  } else {
    bonus = false;
  }
  console.log(`Bonus Checked: ${bonus}`);
  createWorkout();
}
bonusCheckbox.addEventListener('click', setBonus);

function createWorkout() {
  
  console.log(`createWorkout fired.`);

  workout = exercises.filter(function(exercise) {
    return exercise.difficulty <= difficulty;
  });
  console.log(workout);
  // Add Bonus if applicable.
  // Since these are always separate (I think), maybe they should just be in their own array to begin with, and not have to be filtered.
  // Gets invoked each time "Bonus" checkbox is checked or unchecked.
  if (bonus) {
    console.log(`Bonus: Yes`);
    bonusExercises = exercises.filter(function(exercise) {
      return exercise.difficulty === 4;
    });
  } else {
    console.log(`Bonus: No`);
  }
  estimateWorkoutTime();
  textUI();
}

createWorkout(); // Create default when page loads.

// Estimate Total Workout Time:
function estimateWorkoutTime() {
  estimatedTime = 0; // Reset
  // Sum of all transitions and pose durations:
  workout.forEach(function(exercise) {
    estimatedTime += exercise.transition;
    return exercise.poses.forEach(function(pose) {
      estimatedTime += pose.duration;
    });
  });
  console.log(`Estimated Time per Circuit: ${estimatedTime}`);

  estimatedTime *= circuits;
  console.log(`Estimated Total Workout Time: ${estimatedTime}`);

  if (bonus) {
    bonusExercises.forEach(function(bonusExercise) {
      estimatedTime += bonusExercise.transition;
      return bonusExercise.poses.forEach(function(pose) {
        estimatedTime += pose.duration;
      });
    });
    console.log(`Estimated Time Including Bonus Exercises: ${estimatedTime}`);
  }
}



// Convert Time Units
var minutes = Math.floor(estimatedTime / 1000 / 60);
var seconds = estimatedTime / 1000 % 60;

console.log(`Estimated Workout Time: ${minutes}:${(seconds < 10) ? '0' + seconds : seconds}`); // Add a 0 before seconds if under 10.

function textUI() {
  if (difficulty === 1) {
    difficultyUI.innerText = 'Basic';
  } else if (difficulty === 2) {
    difficultyUI.innerText = 'Moderate';
  } else if (difficulty === 3) {
    difficultyUI.innerText = 'Intense';
  }
}



// Initiate Workout:
// Take the first object in the workout array.  Use a promise chain: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
let timerValue;

function initWorkout() {
  timerValue = workout[0].poses[0].duration / 1000;
  timerUI();
  countdownTimer();
}
//initWorkout();

function countdownTimer() {
  const timer = setInterval(function() {
    if (timerValue > 0) {
      timerValue--;
      timerUI();
    } else {
      clearInterval(timer);
      // Potentialy invoke this function on the next object in the array here, if one exists.
    }
  }, 1000);
}

// Display its title in the UI.
// Display its image in the UI.
// Countdown its transition in the UI. (Negative numbers.)
function timerUI() {
  let display;
  if (timerValue > 9) {
    // Set color back to default if it's not already.
    display = `${timerValue}`;
  } else {
    // Make 5 thru 1 red and add beeps and pulsations.
    // Make 0 green and add a finish sound. (Do not collide with any starting SFX of the next pose or exercise.)
    display = `0${timerValue}`;
  }
  console.log(display);
}
// When the countdown reaches zero, play sfx.begin.
// Then count down its first pose duration in the UI. Play sfx.penultimate for each of the last five seconds. When time limit is reached, play sfx.nextPose (unless it is the last pose in the object).

// Repeat this process for each pose OR SHIFT in this object. (NOTE: A shift should be added to some objects.)
// When all the poses are done, play sfx.done, move on to the next object in the array, and repeat the steps above.
// When all exercises are done, if bonus === false, then play sfx.finale. If bonus === true, initiate bonus workout.


// Bonus Workout:
// Run the same procedure listed above for exercises.crossover and exercises.crossUnder.
// When complete, play sfx.finale.


// UX:
// User can pause, resume, reset, or clear workout.


// UI:
// Displays current circuit number.
// Displays remaining number of circuits.