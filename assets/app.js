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
startBtn.addEventListener('click', startNewWorkout);

function startNewWorkout() {
  sfx.startContinueFinish.play();
  persistentSettings.active = true;
  pauseBtn.classList.remove('hideBtn');
  startBtn.classList.add('hideBtn');
  setTimerValue();
}

const timerDisplay = document.querySelector('.timer');
const totalDurationUI = document.querySelector('.totalDurationUI');
let workout;
const difficultyUI = document.querySelector('.settings-difficulty__name');
let difficultyText;
let bonusExercises = [];
const circuitsInput = document.querySelector('.settings-circuits__value');
function setCircuits(e) {
  // Value must be greater than 0, and keyup must be a number key.
  // Have to use NOT so that clicks on the arrow keys don't get excluded.
  // Convert to regex later.
  if (
    (circuitsInput.value > 0) &&
    (
      (
        !(e.keyCode <= 48) &&
        !(e.keyCode >= 57)
      ) ||
      (
        !(e.keyCode <= 96) &&
        !(e.keyCode >= 105)
      )
    )
  ) {
    persistentSettings.circuitsRemaining = parseInt(circuitsInput.value);
    console.log(`Circuits Set To: ${persistentSettings.circuitsRemaining}`);
    createWorkout();
  }
}

circuitsInput.addEventListener('keyup', setCircuits); // For typing into the field
circuitsInput.addEventListener('change', setCircuits); // For input arrow keys


//let intervals = 0; // default = nonstop.  User can override this via UI. CONVERT TO PERSISTENTSETTINGS OBJECT.
// Pull intervals value from the UI
const persistentSettings = {
  active: false,
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

let startingSettings = {}; // persistentSettings to be copied here.


breakDropdown.addEventListener('change', function() {
  persistentSettings.breaks = breakDropdown.options[breakDropdown.selectedIndex].value;
});


// Refactor:
const sfx = {
  startContinueFinish: document.querySelector('.audio-start-continue-finish'),
  clickBtn: document.querySelector('.audio-ui-click'),
  warning: document.querySelector('.audio-warning'),
  next: document.querySelector('.audio-next')
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
  sfx.clickBtn.play();
  workout = exercises.filter(function(exercise) {
    return (persistentSettings.bonus) ? (exercise.difficulty <= persistentSettings.difficulty) : ((exercise.difficulty > 0) && (exercise.difficulty <= persistentSettings.difficulty));
  });
  estimateWorkoutTime();
  textUI();
  // Store starting settings for retrieval if workout is reset later:
  startingSettings = {
    bonus: persistentSettings.bonus,
    circuitsRemaining: persistentSettings.circuitsRemaining,
    difficulty: persistentSettings.difficulty,
    breaks: persistentSettings.breaks,
    totalTimeRemaining: persistentSettings.totalTimeRemaining
  };
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
    exerciseCard.setAttribute('data-exercise-title', exercise.title);
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
const currentCircuitUI = document.querySelector('.current-circuit');
let currentExerciseCard;
function setTimerValue() {
  if (persistentSettings.i < workout.length) {
    currentCircuitUI.innerText = `Circuit ${startingSettings.circuitsRemaining - persistentSettings.circuitsRemaining + 1} of ${startingSettings.circuitsRemaining}`;
    // Add border to current exercise card:
    if (currentExerciseCard) {currentExerciseCard.classList.remove('thick-border');}
    currentExerciseCard = exercisesList.querySelector(`[data-exercise-title="${workout[persistentSettings.i].title}"]`);
    currentExerciseCard.classList.add('thick-border');
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
    // Prevent firing if workout is simply being reset:
    if (persistentSettings.active) {
      runCountdownTimer();
    }
  } else {
    // If circuit is finished:
    // Advance to next circuit:
    if (persistentSettings.circuitsRemaining > 1) {
      // Add condition:
      // if (breaks === nonstop), do nothing -- continue on to fire runCountdownTimer.
      // if (breaks === circuit), fire the pause function.
      // if (breaks === exercises), I think the pause might have happened at the end of the last exercise, before reaching this point. Be careful how this is handled -- maybe it can skate right past as if it were set to nonstop?
      // Prevent firing if workout is simply being reset:
      if (persistentSettings.active) {
        runCountdownTimer();
      }
    } else {
      // Should these be moved to runCountdownTimer or not?
      startOver();
      currentExerciseUI.innerText = `Finished!`; // startOver() clears this field.
      startOverBtn.classList.remove('hideBtn'); 
      startBtn.classList.add('hideBtn');
    }
  }
}

let timer;
function runCountdownTimer() {
  pauseBtn.classList.remove('hideBtn');
  startBtn.classList.add('hideBtn');
  timerUI();
  timer = setInterval(function() {
    if (persistentSettings.i < workout.length) {
      if (persistentSettings.timerValue > 0) {
        persistentSettings.timerValue--;
        timerUI();
        if (
          (persistentSettings.transition === false)
          && (persistentSettings.timerValue <= 5)
          && (persistentSettings.timerValue > 0)
        ) {
          sfx.warning.play();
        }
        else if (persistentSettings.timerValue === 0) {
          sfx.next.play();
        }
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
        persistentSettings.i = 0; // Reset to first exercise
        persistentSettings.p = 0; // Reset to first pose
        persistentSettings.transition = true; // Reset transition
        clearInterval(timer);
        setTimerValue();
      }
    }
  }, 1000);
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


// UI:
// Displays current circuit number.
// Displays remaining number of circuits.
// Displays total remaining time.

const pauseBtn = document.querySelector('.pause-btn');
const continueBtn = document.querySelector('.continue-btn');
const startOverBtn = document.querySelector('.start-over-btn');

pauseBtn.addEventListener('click', pause);
function pause() {
  sfx.clickBtn.play();
  clearInterval(timer);
  pauseBtn.classList.add('hideBtn');
  continueBtn.classList.remove('hideBtn');
  startOverBtn.classList.remove('hideBtn');
}

continueBtn.addEventListener('click', continueWorkout);
function continueWorkout() {
  sfx.startContinueFinish.play();
  runCountdownTimer();
  pauseBtn.classList.remove('hideBtn');
  continueBtn.classList.add('hideBtn');
  startOverBtn.classList.add('hideBtn');
}

startOverBtn.addEventListener('click', function() {
  // If startOver();
  // else startNewWorkout();
});

function startOver() {
  sfx.clickBtn.play();
  pauseBtn.classList.add('hideBtn');
  continueBtn.classList.add('hideBtn');
  startOverBtn.classList.add('hideBtn'); 
  startBtn.classList.remove('hideBtn');
  // NOTE: WILL I NEED TO UPDATE UI TO MATCH THE FOLLOWING? PROBABLY NOT -- IT SHOULD HAVE BEEN LOCKED IN PLACE WHEN THE WORKOUT BEGAN.
  persistentSettings.active = false;
  persistentSettings.bonus = startingSettings.bonus;
  persistentSettings.circuitsRemaining = startingSettings.circuitsRemaining;
  persistentSettings.difficulty = startingSettings.difficulty;
  persistentSettings.breaks = startingSettings.breaks;
  persistentSettings.transition = true;
  persistentSettings.timerValue = 0;
  persistentSettings.totalTimeRemaining = startingSettings.totalTimeRemaining;
  timerUI();
  currentExerciseUI.innerText = ``; // Clear UI.
  currentCircuitUI.innerText = ``; // Clear UI
  currentExerciseCard.classList.remove('thick-border');
}

createWorkout(); // Create default workout when page loads.