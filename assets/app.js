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

const startBtn = document.querySelector('.begin-btn');
startBtn.addEventListener('click', beginNextExercise);
const timerDisplay = document.querySelector('.timer');
const totalDurationUI = document.querySelector('.totalDurationUI');
let estimatedTime = 0; // default
let bonus = false; // default = false
let workout;
let difficulty = 1; // default
const difficultyUI = document.querySelector('.settings-difficulty__name');
let difficultyText;
let bonusExercises = [];
const circuitsInput = document.querySelector('.settings-circuits__value');
let circuits = circuitsInput.value;
console.log(`Default Circuits: ${circuits}`);
function setCircuits() {
  if (circuitsInput.value > 0) {
    circuits = circuitsInput.value;
    console.log(`Circuits: ${circuits}`);
    createWorkout();
  }
}

circuitsInput.addEventListener('keyup', setCircuits);
circuitsInput.addEventListener('change', setCircuits);
let currentCircuit = 0;

const sfx = {
  begin: '',
  penultimate: '',
  nextPose: '',
  done: '',
  finale: ''
}

let intervals = 0; // default = nonstop.  User can override this via UI.

const difficultyButtons = document.querySelectorAll('.settings-difficulty__btn');
function setDifficulty(e) {
  difficulty = parseInt(e.target.value);
  createWorkout();
}
difficultyButtons.forEach(function(difficultyButton) {
  difficultyButton.addEventListener('click', setDifficulty);
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

// Create nodelist(s) of all exercises to be included.
// Invoke estimateWorkoutTime() and textUI().
function createWorkout() {
  
  console.log(`createWorkout fired.`);

  workout = exercises.filter(function(exercise) {
    return exercise.difficulty <= difficulty;
  });
  console.log(workout);
  
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
  }
  const minutes = Math.floor(estimatedTime / 1000 / 60);
  const seconds = estimatedTime / 1000 % 60;
  totalDurationUI.innerText = `${minutes}:${(seconds < 10) ? '0' + seconds : seconds}`;
}



let titles = [];
const exercisesList = document.querySelector('.list-of-exercises');
const bonusExercisesList = document.querySelector('.list-of-bonus-exercises');
function textUI() {
  if (difficulty === 1) {
    difficultyUI.innerText = 'Basic';
  } else if (difficulty === 2) {
    difficultyUI.innerText = 'Moderate';
  } else if (difficulty === 3) {
    difficultyUI.innerText = 'Intense';
  }
   // In the future, generate a card with image and text for each exercise and push that tot he UI instead of just the text.
  titles = workout.map(function(exercise) {
    return exercise.title;
  });
  exercisesList.innerText = titles.join(', ');
  let bonusTitles = [];
  if (bonus) {
    bonusTitles = bonusExercises.map(function(bonusExercise) {
      return bonusExercise.title;
    });
  }
  bonusExercisesList.innerText = bonusTitles.join(', ');
}



// Initiate Workout:
// Take the first object in the workout array.  Use a promise chain:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
  // https://javascript.info/promise-chaining
let timerValue;
let i = 0;

function beginNextExercise() {
  if (i < workout.length) {
    timerValue = workout[i].poses[0].duration / 1000; // Needs to be dynamically coded.
    timerUI(); // This is just going to get fired again in countdownTimer. Can I remove this?
    countdownTimer();
  }
}

function countdownTimer() {
  const timer = setInterval(function() {
    if (timerValue > 0) {
      timerValue--;
      timerUI();
    } else {
      clearInterval(timer);
      // Potentialy invoke this function on the next object in the array here, if one exists.
      i++;
      beginNextExercise();
    }
  }, 1000);
}

function timerUI() {
  // let display;
  if (timerValue > 9) {
    // Set color back to default if it's not already.
    timerDisplay.innerText = timerValue;
    // display = `${timerValue}`;
  } else {
    // Make 5 thru 1 red and add beeps and pulsations.
    // Make 0 green and add a finish sound. (Do not collide with any starting SFX of the next pose or exercise.)
    // display = `0${timerValue}`;
    timerDisplay.innerText = `0${timerValue}`;
  }
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
createWorkout(); // Create default workout when page loads.