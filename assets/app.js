const exercises = [
  {
    title: 'The Founder',
    level: 'Basic',
    difficulty: 1,
    transition: 5,
    poses: [
      {
        desc: 'Pose 1',
        duration: 15,
        img: ''
      },
      {
        desc: 'Pose 2',
        duration: 15,
        img: ''
      },
      {
        desc: 'Pose 3',
        duration: 15,
        img: ''
      },
      {
        desc: 'Pose 4',
        duration: 6,
        img: ''
      },
      {
        desc: 'Pose 5',
        duration: 15,
        img: ''
      },
      {
        desc: 'Pose 6',
        duration: 15,
        img: ''
      },
      {
        desc: 'Pose 7',
        duration: 20,
        img: ''
      }
    ]
  },
  {
    title: 'Foundation Squat',
    level: 'Moderate',
    difficulty: 2,
    transition: 3,
    poses: [
      {
        desc: 'Pose 1',
        duration: 50,
        img: ''
      }
    ]
  },
  {
    title: 'Good Morning',
    level: 'Intense',
    difficulty: 3,
    transition: 3,
    poses: [
      {
        desc: 'Pose 1',
        duration: 42,
        img: ''
      }
    ]
  },
  {
    title: 'Windmill',
    level: 'Intense',
    difficulty: 3,
    transition: 3,
    poses: [
      {
        desc: 'Pose 1',
        duration: 15,
        img: ''
      },
      {
        desc: 'Pose 2',
        duration: 30,
        img: ''
      },
      {
        desc: 'Pose 3',
        duration: 30,
        img: ''
      }
    ]
  },
  {
    title: 'Woodpecker',
    level: 'Moderate',
    difficulty: 2,
    transition: 5,
    poses: [
      {
        desc: 'Pose 1',
        duration: 5,
        img: ''
      },
      {
        desc: 'Pose 2',
        duration: 5,
        img: ''
      },
      {
        desc: 'Pose 3',
        duration: 20,
        img: ''
      },
      {
        desc: 'Pose 4',
        duration: 3,
        img: ''
      },
      {
        desc: 'Pose 5',
        duration: 15,
        img: ''
      }
    ]
  },
  {
    title: 'Back Extension',
    level: 'Basic',
    difficulty: 1,
    transition: 10,
    poses: [
      {
        desc: 'Pose 1',
        duration: 30,
        img: ''
      }
    ]
  },
  {
    title: 'Foundation Plank',
    level: 'Intense',
    difficulty: 3,
    transition: 5,
    poses: [
      {
        desc: 'Pose 1',
        duration: 10,
        img: ''
      },
      {
        desc: 'Pose 2',
        duration: 30,
        img: ''
      },
      {
        desc: 'Pose 3',
        duration: 10,
        img: ''
      }
    ]
  },
  {
    title: 'Adductor-Assisted Back Extension',
    level: 'Basic',
    difficulty: 1,
    transition: 5,
    poses: [
      {
        desc: 'Pose 1',
        duration: 20,
        img: ''
      }
    ]
  },
  {
    title: 'Child\'s Pose / Kneeling Founder',
    level: 'Basic',
    difficulty: 1,
    transition: 3,
    poses: [
      {
        desc: 'Pose 1',
        duration: 30,
        img: ''
      },
      {
        desc: 'Pose 2',
        duration: 15,
        img: ''
      },
      {
        desc: 'Pose 3',
        duration: 10,
        img: ''
      }
    ]
  },
  {
    title: 'Lunge Stretch',
    level: 'Basic',
    difficulty: 1,
    transition: 10,
    poses: [
      {
        desc: 'Pose 1',
        duration: 20,
        img: ''
      },
      {
        // Can this shift get rolled into the next pose so that that image can be displayed?
        desc: 'Shift Position',
        duration: 5
      },
      {
        desc: 'Pose 2',
        duration: 20,
        img: ''
      }
    ]
  },
  {
    title: 'Crossover',
    level: 'Bonus',
    difficulty: 0,
    transition: 10,
    poses: [
      {
        desc: 'Pose 1',
        duration: 15,
        img: ''
      },
      {
        desc: 'Pose 2',
        duration: 15,
        img: ''
      },
      {
        desc: 'Pose 3',
        duration: 15,
        img: ''
      },
      {
        desc: 'Pose 4',
        duration: 15,
        img: ''
      }
    ]
  },
  {
    title: "Cross Under",
    level: 'Bonus',
    difficulty: 0,
    transition: 5,
    poses: [
      {
        desc: 'Pose 1',
        duration: 2,
        img: ''
      },
      {
        desc: 'Pose 2',
        duration: 2,
        img: ''
      },
      {
        desc: 'Pose 3',
        duration: 20,
        img: ''
      },
      {
        desc: 'Pose 4',
        duration: 2,
        img: ''
      },
      {
        desc: 'Pose 5',
        duration: 2,
        img: ''
      },
      {
        desc: 'Pose 6',
        duration: 20,
        img: ''
      }
    ]
  }
]

const persistentSettings = {
  bonus: false,
  difficulty: 1,
  circuitsRemaining: 3,
  i: 0,
  t: true,
  p: 0,
  timerValue: 0
}



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
let circuits = parseInt(circuitsInput.value);
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
  persistentSettings.bonus = (e.target.checked) ? true : false;
  createWorkout();
}
bonusCheckbox.addEventListener('click', setBonus);

// Create nodelist(s) of all exercises to be included.
// Invoke estimateWorkoutTime() and textUI().
function createWorkout() {
  workout = exercises.filter(function(exercise) {
    return (persistentSettings.bonus) ? (exercise.difficulty <= difficulty) : ((exercise.difficulty > 0) && (exercise.difficulty <= difficulty));
  });
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

  estimatedTime *= circuits;

  if (persistentSettings.bonus) {
    bonusExercises.forEach(function(bonusExercise) {
      estimatedTime += bonusExercise.transition;
      return bonusExercise.poses.forEach(function(pose) {
        estimatedTime += pose.duration;
      });
    });  
  }
  const minutes = Math.floor(estimatedTime / 60);
  const seconds = estimatedTime % 60;
  totalDurationUI.innerText = `${minutes}:${(seconds < 10) ? '0' + seconds : seconds}`;
}



let titles = [];
const exercisesList = document.querySelector('.list-of-exercises');
const qtyExercises = document.querySelector('.qty-Exercises');
function textUI() {
  if (difficulty === 1) {
    difficultyUI.innerText = (persistentSettings.bonus) ? 'Basic + Bonus' : 'Basic';
  } else if (difficulty === 2) {
    difficultyUI.innerText = (persistentSettings.bonus) ? 'Moderate + Bonus' : 'Moderate';
  } else if (difficulty === 3) {
    difficultyUI.innerText = (persistentSettings.bonus) ? 'Intense + Bonus' : 'Intense';
  }
  qtyExercises.innerText = workout.length;

  exercisesList.innerHTML = ''; // Is there a better way than innerHTML?
  workout.forEach(function(exercise) {
    const exerciseCard = document.createElement('div');
    exerciseCard.classList.add('exercise-card');
    const exerciseCardImg = document.createElement('div');
    exerciseCardImg.classList.add('exercise-card-img');
    exerciseCard.appendChild(exerciseCardImg);
    const exerciseTitle = document.createElement('H3');
    exerciseTitle.classList.add('h3');
    exerciseTitle.innerText = exercise.title;
    exerciseCard.appendChild(exerciseTitle);
    exercisesList.appendChild(exerciseCard);
  });
}



// Initiate Workout:
// Take the first object in the workout array.  Use a promise chain:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
  // https://javascript.info/promise-chaining
let timerValue = 0;
let i = 0;
let t = true;
let p = 0;

function beginNextExercise() {
  if (i < workout.length) {
    if (t) {
      console.log(`Transition to "${workout[i].title}": ${workout[i].transition} seconds`);
      timerValue = workout[i].transition;
      t = false;
    } else {
      if (p < workout[i].poses.length) {
        console.log(`"${workout[i].title}" ${workout[i].poses[p].desc} of ${workout[i].poses.length}: ${workout[i].poses[p].duration} seconds`);
        timerValue = workout[i].poses[p].duration;
        p++;
      } else {
        console.log(`Moving on to the next exercise.`);
        i++;
        p = 0;
        t = true;
      }
    }
    countdownTimer();
  } else {
    // Advance to next circuit:
    if (circuits > 1) {
      circuits--;
      console.log(`Circuits remaining: ${circuits}`);
      i = 0;
      p = 0;
      t = true;
      countdownTimer();
    } else {
      console.log('Finished!');
    }
  }
}

function countdownTimer() {
  timerUI();
  const timer = setInterval(function() {
    if (timerValue > 0) {
      timerValue--;
      timerUI();
    } else {
      clearInterval(timer);
      beginNextExercise();
    }
  }, 1000);
}

function timerUI() {
  if (timerValue > 9) {
    // Set color back to default if it's not already.
    timerDisplay.innerText = timerValue;
  } else {
    // Make 5 thru 1 red and add beeps and pulsations.
    // Make 0 green and add a finish sound. (Do not collide with any starting SFX of the next pose or exercise.)
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
// Displays total remaining time.

function saveSettings(bonus, diff, circ, i, t, p, timer) {
  persistentSettings.bonus = bonus;
  persistentSettings.difficulty = diff;
  persistentSettings.circuitsRemaining = circ;
  persistentSettings.i = i;
  persistentSettings.t = t;
  persistentSettings.p = p;
  persistentSettings.timerValue = timer;
  console.log(persistentSettings);
}

function pause() {
  // clearInterval
  saveSettings(bonus, difficulty, circuits, i, t, p, timerValue);
}

function resume() {

}

createWorkout(); // Create default workout when page loads.