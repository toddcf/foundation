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
  if (currentSettings.audio === 'on') {sfx.startContinueFinish.play();}
  currentSettings.active = true;
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
    currentSettings.circuitsRemaining = parseInt(circuitsInput.value);
    console.log(`Circuits Set To: ${currentSettings.circuitsRemaining}`);
    createWorkout();
  }
}

circuitsInput.addEventListener('keyup', setCircuits); // For typing into the field
circuitsInput.addEventListener('change', setCircuits); // For input arrow keys


const currentSettings = {
  active: false,
  audio: 'on',
  bonus: false,
  breaks: breakDropdown.options[breakDropdown.selectedIndex].value.toString(),
  circuitsRemaining: parseInt(circuitsInput.value),
  difficulty: 1,
  i: 0,
  p: 0,
  transition: true,
  timerValue: 0,
  totalTimeRemaining: 0
}

let originalSettings = {}; // currentSettings to be copied here.


breakDropdown.addEventListener('change', function() {
  currentSettings.breaks = breakDropdown.options[breakDropdown.selectedIndex].value;
  createWorkout();
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
  currentSettings.difficulty = parseInt(e.target.value);
  createWorkout();
}
difficultyButtons.forEach(function(difficultyButton) {
  difficultyButton.addEventListener('click', setDifficulty);
});

const bonusCheckbox = document.querySelector('.settings-bonus__checkbox');
function setBonus(e) {
  currentSettings.bonus = (e.target.checked) ? true : false;
  createWorkout();
}
bonusCheckbox.addEventListener('click', setBonus);

// Create nodelist(s) of all exercises to be included.
// Invoke estimateWorkoutTime() and textUI().
function createWorkout() {
  if (currentSettings.audio === 'on') {sfx.clickBtn.play();}
  workout = exercises.filter(function(exercise) {
    return (currentSettings.bonus) ? (exercise.difficulty <= currentSettings.difficulty) : ((exercise.difficulty > 0) && (exercise.difficulty <= currentSettings.difficulty));
  });
  estimateWorkoutTime();
  textUI();
  // Store starting settings for retrieval if workout is reset later:
  originalSettings = {
    bonus: currentSettings.bonus,
    circuitsRemaining: currentSettings.circuitsRemaining,
    difficulty: currentSettings.difficulty,
    breaks: currentSettings.breaks,
    totalTimeRemaining: currentSettings.totalTimeRemaining
  };
}

// Estimate Total Workout Time:
function estimateWorkoutTime() {
  currentSettings.totalTimeRemaining = 0; // Reset
  // Sum of all transitions and pose durations:
  workout.forEach(function(exercise) {
    currentSettings.totalTimeRemaining += exercise.transition;
    return exercise.poses.forEach(function(pose) {
      currentSettings.totalTimeRemaining += pose.duration;
    });
  });

  if (currentSettings.bonus) {
    bonusExercises.forEach(function(bonusExercise) {
      currentSettings.totalTimeRemaining += bonusExercise.transition;
      return bonusExercise.poses.forEach(function(pose) {
        currentSettings.totalTimeRemaining += pose.duration;
      });
    });  
  }

  currentSettings.totalTimeRemaining *= currentSettings.circuitsRemaining;

  const minutes = Math.floor(currentSettings.totalTimeRemaining / 60);
  const seconds = currentSettings.totalTimeRemaining % 60;
  totalDurationUI.innerText = `${minutes}:${(seconds < 10) ? '0' + seconds : seconds}`;
}



let titles = [];
const exercisesList = document.querySelector('.list-of-exercises');
const qtyExercises = document.querySelector('.qty-Exercises');
function textUI() {
  if (currentSettings.difficulty === 1) {
    difficultyUI.innerText = (currentSettings.bonus) ? 'Basic + Bonus' : 'Basic';
  } else if (currentSettings.difficulty === 2) {
    difficultyUI.innerText = (currentSettings.bonus) ? 'Moderate + Bonus' : 'Moderate';
  } else if (currentSettings.difficulty === 3) {
    difficultyUI.innerText = (currentSettings.bonus) ? 'Intense + Bonus' : 'Intense';
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
  if (currentSettings.i < workout.length) {
    currentCircuitUI.innerText = `Circuit ${originalSettings.circuitsRemaining - currentSettings.circuitsRemaining + 1} of ${originalSettings.circuitsRemaining}`;
    // Add border to current exercise card:
    if (currentExerciseCard) {currentExerciseCard.classList.remove('thick-border');}
    currentExerciseCard = exercisesList.querySelector(`[data-exercise-title="${workout[currentSettings.i].title}"]`);
    currentExerciseCard.classList.add('thick-border');
    if (currentSettings.transition) {
      currentSettings.timerValue = workout[currentSettings.i].transition;
      currentExerciseUI.innerText = `Transition to ${workout[currentSettings.i].title}`;
      console.log(`Transition to "${workout[currentSettings.i].title}": ${workout[currentSettings.i].transition} seconds`);
    } else {
      currentExerciseUI.innerText = `${workout[currentSettings.i].title}`;
      if (currentSettings.p < workout[currentSettings.i].poses.length) {
        currentSettings.timerValue = workout[currentSettings.i].poses[currentSettings.p].duration;
        console.log(`"${workout[currentSettings.i].title}" ${workout[currentSettings.i].poses[currentSettings.p].desc} of ${workout[currentSettings.i].poses.length}: ${currentSettings.timerValue} seconds`);
      }
    }
    // Prevent firing if workout is simply being reset:
    if (currentSettings.active) {
      runCountdownTimer();
    }
  } else {
    // If circuit is finished:
    // Advance to next circuit:
    if (currentSettings.circuitsRemaining > 1) {
      // Add condition:
      // if (breaks === nonstop), do nothing -- continue on to fire runCountdownTimer.
      // if (breaks === circuit), fire the pause function.
      // if (breaks === exercises), I think the pause might have happened at the end of the last exercise, before reaching this point. Be careful how this is handled -- maybe it can skate right past as if it were set to nonstop?
      // Prevent firing if workout is simply being reset:
      if (currentSettings.active) {
        runCountdownTimer();
      }
    } else {
      // Just fire startOver().  Move the rest into that function with conditionals:
      // If "finished," do these actions. Else, do the actions that are already in the startOver() function.
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
    if (currentSettings.i < workout.length) {
      if (currentSettings.timerValue > 0) {
        currentSettings.timerValue--;
        timerUI();
        if (
          (currentSettings.transition === false)
          && (currentSettings.timerValue <= 5)
          && (currentSettings.timerValue > 0)
        ) {
          if (currentSettings.audio === 'on') {sfx.warning.play();}
        }
        else if (currentSettings.timerValue === 0) {
          if (currentSettings.audio === 'on') {sfx.next.play();}
        }
      } else {
        if (currentSettings.transition) {
          currentSettings.transition = false;
        } else {
          if (currentSettings.p < workout[currentSettings.i].poses.length) {
            currentSettings.p++;
          } else {
            console.log(`Advance to next exercise.`);
            currentSettings.i++; // Advance to next exercise
            currentSettings.p = 0; // Reset to first pose
            currentSettings.transition = true; // Reset transition

            // Pause after each exercise, unless it is the final exercise of the final circuit:
            if (
              (currentSettings.breaks === 'exercise')
              && (currentSettings.circuitsRemaining > 0)
              && (currentSettings.i < workout.length)
            ) {
              // Probably add that third condition inside here and use a ternary to handle circuits vs. exercises.
              pause();
              return;
            }
          }
        }
        clearInterval(timer);
        setTimerValue();
      }
    } else {
      // Advance to next circuit:
      if (currentSettings.circuitsRemaining > 1) {
        currentSettings.circuitsRemaining--;
        currentSettings.i = 0; // Reset to first exercise
        currentSettings.p = 0; // Reset to first pose
        currentSettings.transition = true; // Reset transition

        // Pause after each circuit, depending on user settings:
        if (
          (currentSettings.breaks === 'circuit')
          || (currentSettings.breaks === 'exercise')
        ) {
          pause();
          return;
        }

        clearInterval(timer);
        setTimerValue();
      }
    }
  }, 1);
}

function timerUI() {
  if (currentSettings.timerValue > 9) {
    // Set color back to default if it's not already.
    timerDisplay.innerText = currentSettings.timerValue;
  } else {
    // Make 5 thru 1 red and add beeps and pulsations.
    // Make 0 green and add a finish sound. (Do not collide with any starting SFX of the next pose or exercise.)
    timerDisplay.innerText = `0${currentSettings.timerValue}`;
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
  console.log(`pause() invoked.`);
  if (currentSettings.audio === 'on') {sfx.clickBtn.play();}
  clearInterval(timer);
  pauseBtn.classList.add('hideBtn');
  continueBtn.classList.remove('hideBtn');
  startOverBtn.classList.remove('hideBtn');
}

continueBtn.addEventListener('click', continueWorkout);
function continueWorkout() {
  if (currentSettings.audio === 'on') {sfx.startContinueFinish.play();}
  runCountdownTimer();
  pauseBtn.classList.remove('hideBtn');
  continueBtn.classList.add('hideBtn');
  startOverBtn.classList.add('hideBtn');
}

startOverBtn.addEventListener('click', function() {
  // If paused, reset. If finished, restart:
  (currentSettings.active) ? startOver() : startNewWorkout();
});

function startOver() {
  if (currentSettings.audio === 'on') {sfx.clickBtn.play();} // Maybe rely on the other SFX that will play, instead.
  pauseBtn.classList.add('hideBtn');
  continueBtn.classList.add('hideBtn');
  startOverBtn.classList.add('hideBtn'); 
  startBtn.classList.remove('hideBtn');
  // NOTE: WILL I NEED TO UPDATE UI TO MATCH THE FOLLOWING? PROBABLY NOT -- IT SHOULD HAVE BEEN LOCKED IN PLACE WHEN THE WORKOUT BEGAN.
  currentSettings.active = false;
  currentSettings.bonus = originalSettings.bonus;
  currentSettings.breaks = originalSettings.breaks;
  currentSettings.circuitsRemaining = originalSettings.circuitsRemaining;
  currentSettings.difficulty = originalSettings.difficulty;
  currentSettings.i = 0;
  currentSettings.p = 0;
  currentSettings.transition = true;
  currentSettings.timerValue = 0;
  currentSettings.totalTimeRemaining = originalSettings.totalTimeRemaining;
  timerUI();
  currentExerciseUI.innerText = ``; // Clear UI.
  currentCircuitUI.innerText = ``; // Clear UI
  currentExerciseCard.classList.remove('thick-border');
}

const audioBtns = document.querySelectorAll('.audio-btn');
audioBtns.forEach(function(audioBtn) {
  audioBtn.addEventListener('click', setAudio); // Need any other listeners besides 'click'?
});
function setAudio(e) {
  console.log(e.target.value);
  currentSettings.audio = e.target.value;
}

createWorkout(); // Create default workout when page loads.