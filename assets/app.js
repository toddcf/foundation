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


const breakDropdown = document.querySelector('.break-dropdown');
const startBtn = document.querySelector('.begin-btn');
startBtn.addEventListener('click', function() {
  pauseBtn.classList.remove('hideBtn');
  pauseBtn.classList.add('showBtn');
  startBtn.classList.remove('showBtn');
  startBtn.classList.add('hideBtn');
  setTimerValue();
});

const timerDisplay = document.querySelector('.timer');
const totalDurationUI = document.querySelector('.totalDurationUI');
let workout;
const difficultyUI = document.querySelector('.settings-difficulty__name');
let difficultyText;
let bonusExercises = [];
const circuitsInput = document.querySelector('.settings-circuits__value');
function setCircuits(e) {
  // Value must be greater than 0, and keyup must be a number key.
  // Convert to regex later.
  if (
    (circuitsInput.value > 0) &&
    (
      (
        (e.keyCode >= 48) &&
        (e.keyCode <= 57)
      ) ||
      (
        (e.keyCode >= 96) &&
        (e.keyCode <= 105)
      )
    )
  ) {
    persistentSettings.circuitsRemaining = parseInt(circuitsInput.value);
    console.log(`Circuits Remaining: ${persistentSettings.circuitsRemaining}`);
    createWorkout();
  }
}

circuitsInput.addEventListener('keyup', setCircuits);
circuitsInput.addEventListener('change', setCircuits);


//let intervals = 0; // default = nonstop.  User can override this via UI. CONVERT TO PERSISTENTSETTINGS OBJECT.
// Pull intervals value from the UI
const persistentSettings = {
  bonus: false,
  circuitsRemaining: parseInt(circuitsInput.value),
  difficulty: 1,
  i: 0,
  breaks: breakDropdown.options[breakDropdown.selectedIndex].value,
  p: 0,
  transition: true,
  timerValue: 0,
  totalTimeRemaining: 0
}


breakDropdown.addEventListener('change', function() {
  persistentSettings.breaks = breakDropdown.options[breakDropdown.selectedIndex].value;
});


const sfx = {
  begin: '',
  penultimate: '',
  nextPose: '',
  done: '',
  finale: ''
}

const difficultyButtons = document.querySelectorAll('.settings-difficulty__btn');
function setDifficulty(e) {
  persistentSettings.difficulty = parseInt(e.target.value);
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
    return (persistentSettings.bonus) ? (exercise.difficulty <= persistentSettings.difficulty) : ((exercise.difficulty > 0) && (exercise.difficulty <= persistentSettings.difficulty));
  });
  estimateWorkoutTime();
  textUI();
}

// Estimate Total Workout Time:
function estimateWorkoutTime() {
  persistentSettings.totalTimeRemaining = 0; // Reset
  // Sum of all transitions and pose durations:
  workout.forEach(function(exercise) {
    persistentSettings.totalTimeRemaining += exercise.transition;
    return exercise.poses.forEach(function(pose) {
      persistentSettings.totalTimeRemaining += pose.duration;
    });
  });

  if (persistentSettings.bonus) {
    bonusExercises.forEach(function(bonusExercise) {
      persistentSettings.totalTimeRemaining += bonusExercise.transition;
      return bonusExercise.poses.forEach(function(pose) {
        persistentSettings.totalTimeRemaining += pose.duration;
      });
    });  
  }

  persistentSettings.totalTimeRemaining *= persistentSettings.circuitsRemaining;

  const minutes = Math.floor(persistentSettings.totalTimeRemaining / 60);
  const seconds = persistentSettings.totalTimeRemaining % 60;
  totalDurationUI.innerText = `${minutes}:${(seconds < 10) ? '0' + seconds : seconds}`;
}



let titles = [];
const exercisesList = document.querySelector('.list-of-exercises');
const qtyExercises = document.querySelector('.qty-Exercises');
function textUI() {
  if (persistentSettings.difficulty === 1) {
    difficultyUI.innerText = (persistentSettings.bonus) ? 'Basic + Bonus' : 'Basic';
  } else if (persistentSettings.difficulty === 2) {
    difficultyUI.innerText = (persistentSettings.bonus) ? 'Moderate + Bonus' : 'Moderate';
  } else if (persistentSettings.difficulty === 3) {
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

const currentExerciseUI = document.querySelector('.current-exercise');
function setTimerValue() {
  if (persistentSettings.i < workout.length) {
    if (persistentSettings.transition) {
      persistentSettings.timerValue = workout[persistentSettings.i].transition;
      currentExerciseUI.innerText = `Transition to ${workout[persistentSettings.i].title}`;
      console.log(`Transition to "${workout[persistentSettings.i].title}": ${workout[persistentSettings.i].transition} seconds`);
    } else {
      currentExerciseUI.innerText = `${workout[persistentSettings.i].title}`;
      if (persistentSettings.p < workout[persistentSettings.i].poses.length) {
        persistentSettings.timerValue = workout[persistentSettings.i].poses[persistentSettings.p].duration;
        console.log(`"${workout[persistentSettings.i].title}" ${workout[persistentSettings.i].poses[persistentSettings.p].desc} of ${workout[persistentSettings.i].poses.length}: ${persistentSettings.timerValue} seconds`);
      }
    }
    runCountdownTimer();
  } else {
    // If circuit is finished:
    // Advance to next circuit:
    if (persistentSettings.circuitsRemaining > 1) {
      // Add condition:
      // if (breaks === nonstop), do nothing -- continue on to fire runCountdownTimer.
      // if (breaks === circuit), fire the pause function.
      // if (breaks === exercises), I think the pause might have happened at the end of the last exercise, before reaching this point. Be careful how this is handled -- maybe it can skate right past as if it were set to nonstop?
      runCountdownTimer();
    } else {
      // Should these be moved to runCountdownTimer or not?
      currentExerciseUI.innerText = `Finished!`;
      pauseBtn.classList.remove('showBtn');
      pauseBtn.classList.add('hideBtn');
      resumeBtn.classList.remove('showBtn'); // Probably unnecessary
      resumeBtn.classList.add('hideBtn'); // Probably unnecessary
      resetBtn.classList.remove('hideBtn');
      resetBtn.classList.add('showBtn');

      // Reset:
      // Put original workout settings back into the object.
      // For this to happen, when the "Begin Workout" button is clicked, the first thing that should happen is the persistentSettings object should get copied into another object and saved. Then it can get copied back into the persistentSettings object at this point.
      createWorkout();
    }
  }
}

let timer;
function runCountdownTimer() {
  pauseBtn.classList.remove('hideBtn');
  pauseBtn.classList.add('showBtn');
  startBtn.classList.remove('showBtn');
  startBtn.classList.add('hideBtn');
  timerUI();
  timer = setInterval(function() {
    if (persistentSettings.i < workout.length) {
      if (persistentSettings.timerValue > 0) {
        persistentSettings.timerValue--;
        timerUI();
      } else {
        if (persistentSettings.transition) {
          persistentSettings.transition = false;
        } else {
          if (persistentSettings.p < workout[persistentSettings.i].poses.length) {
            persistentSettings.p++;
          } else {
            console.log(`Advance to next exercise.`);
            persistentSettings.i++; // Advance to next exercise
            persistentSettings.p = 0; // Reset to first pose
            persistentSettings.transition = true; // Reset transition
          }
        }
        clearInterval(timer);
        setTimerValue();
      }
    } else {
      // Advance to next circuit:
      if (persistentSettings.circuitsRemaining > 1) {
        persistentSettings.circuitsRemaining--;
        console.log(`Circuits remaining: ${persistentSettings.circuitsRemaining}`);
        persistentSettings.i = 0; // Reset to first exercise
        persistentSettings.p = 0; // Reset to first pose
        persistentSettings.transition = true; // Reset transition
        clearInterval(timer);
        setTimerValue();
      }
    }
  }, 1);
}

function timerUI() {
  if (persistentSettings.timerValue > 9) {
    // Set color back to default if it's not already.
    timerDisplay.innerText = persistentSettings.timerValue;
  } else {
    // Make 5 thru 1 red and add beeps and pulsations.
    // Make 0 green and add a finish sound. (Do not collide with any starting SFX of the next pose or exercise.)
    timerDisplay.innerText = `0${persistentSettings.timerValue}`;
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

const pauseBtn = document.querySelector('.pause-btn');
const resumeBtn = document.querySelector('.resume-btn');
const resetBtn = document.querySelector('.reset-btn');

pauseBtn.addEventListener('click', pause);
function pause() {
  clearInterval(timer);
  pauseBtn.classList.remove('showBtn');
  pauseBtn.classList.add('hideBtn');
  resumeBtn.classList.remove('hideBtn');
  resumeBtn.classList.add('showBtn');
  resetBtn.classList.remove('hideBtn');
  resetBtn.classList.add('showBtn');
}

resumeBtn.addEventListener('click', resume);
function resume() {
  runCountdownTimer();
  pauseBtn.classList.remove('hideBtn');
  pauseBtn.classList.add('showBtn');
  resumeBtn.classList.remove('showBtn');
  resumeBtn.classList.add('hideBtn');
}

resetBtn.addEventListener('click', reset);
function reset() {
  // Pull everything from the savedSettings into the persistent settings.
  setTimerValue();
}

createWorkout(); // Create default workout when page loads.