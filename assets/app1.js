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
  if (currentSettings.audio) {sfx.startContinueFinish.play();}
  currentSettings.active = true;
  disableEnable(); // Disable workout selection controls
  pauseBtn.classList.remove('hide');
  startBtn.classList.add('hide');
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

circuitsInput.addEventListener('keyup', setCircuits); // For keyboard
circuitsInput.addEventListener('change', setCircuits); // For clicks on arrow keys


const currentSettings = {
  active: false,
  audio: true,
  bonus: false,
  breaks: breakDropdown.options[breakDropdown.selectedIndex].value,
  circuitsRemaining: parseInt(circuitsInput.value),
  difficulty: 1,
  i: 0,
  p: 0,
  transition: true,
  timerValue: 0,
  totalTimeRemaining: 0
}

let originalSettings = {}; // Some currentSettings get saved here every time a new workout begins.

breakDropdown.addEventListener('change', function() {
  sfx.clickBtn.play();
  currentSettings.breaks = breakDropdown.options[breakDropdown.selectedIndex].value;
  createWorkout();
});


const sfx = {
  startContinueFinish: document.querySelector('.audio-start-continue-finish'),
  clickBtn: document.querySelector('.audio-ui-click'),
  warning: document.querySelector('.audio-warning'),
  next: document.querySelector('.audio-next')
}

const difficultyButtons = document.querySelectorAll('.settings-difficulty__btn');
function setDifficulty(e) {
  if (currentSettings.audio) {sfx.clickBtn.play();}
  currentSettings.difficulty = parseInt(e.target.value);
  createWorkout();
}
difficultyButtons.forEach(function(difficultyButton) {
  difficultyButton.addEventListener('click', setDifficulty);
});

const bonusCheckbox = document.querySelector('.settings-bonus__checkbox');
function setBonus(e) {
  if (currentSettings.audio) {sfx.clickBtn.play();}
  currentSettings.bonus = (e.target.checked) ? true : false;
  createWorkout();
}
bonusCheckbox.addEventListener('click', setBonus);

// Create nodelist(s) of all exercises to be included.
// Invoke estimateWorkoutTime() and textUI().
function createWorkout() {
  // if (currentSettings.audio) {sfx.clickBtn.play();}
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
  currentCircuitUI.innerText = `Circuit ${originalSettings.circuitsRemaining - currentSettings.circuitsRemaining + 1} of ${originalSettings.circuitsRemaining}`;
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
  console.log(`setTimerValue() invoked.`);
  if (currentSettings.i < workout.length) {
    console.log(`setTimerValue(): The last exercise has not been completed yet.`); // This is getting logged twice in a row.
    // Add border to current exercise card:
    if (currentExerciseCard) {currentExerciseCard.classList.remove('thick-border');}
    currentExerciseCard = exercisesList.querySelector(`[data-exercise-title="${workout[currentSettings.i].title}"]`);
    currentExerciseCard.classList.add('thick-border');

    // Play transition once at the beginning, then loop through the poses:
    if (currentSettings.transition) {
      currentSettings.timerValue = workout[currentSettings.i].transition;
      currentExerciseUI.innerText = `Transition to ${workout[currentSettings.i].title}`;
    } else {
      currentExerciseUI.innerText = `${workout[currentSettings.i].title}`;
      if (currentSettings.p < workout[currentSettings.i].poses.length) {
        currentSettings.timerValue = workout[currentSettings.i].poses[currentSettings.p].duration;
        console.log(`"${workout[currentSettings.i].title}" ${workout[currentSettings.i].poses[currentSettings.p].desc} of ${workout[currentSettings.i].poses.length}: ${currentSettings.timerValue} seconds`);
      }
    }
    // Prevent firing if workout is simply being reset:
    if (currentSettings.active) {
      console.log(`setTimerValue(): Invoke runCountdownTimer().`);
      runCountdownTimer();}
  } else {
    // If circuit is finished:
    console.log(`setTimerValue(): The last exercise in the circuit has been completed.`);
    // Advance to next circuit:
    if (currentSettings.circuitsRemaining > 1) {
      console.log(`setTimerValue(): There are still circuits remaining.`);
      // Prevent firing if workout is simply being reset:
      if (currentSettings.active) {
        console.log(`setTimerValue(): The workout is still active. Initializing runCountdownTimer() again.`);
        runCountdownTimer();
      }
    } else {
      console.log(`setTimerValue(): There are no circuits remaining. The workout is done. Resetting now.`);
      // Just fire startOver().  Move the rest into that function with conditionals:
      // If "finished," do these actions. Else, do the actions that are already in the startOver() function.
      startOver();
      currentExerciseUI.innerText = `Finished!`; // startOver() clears this field.
      startOverBtn.classList.remove('hide'); 
      startBtn.classList.add('hide');
    }
  }
}

let countdownTimer;
function runCountdownTimer() {
  console.log(`runCountdownTimer() invoked.`);
  pauseBtn.classList.remove('hide');
  startBtn.classList.add('hide');
  timerUI();
  countdownTimer = setInterval(function() {
    if (currentSettings.i < workout.length) {
      console.log(`runCountdownTimer(): The last exercise has not been completed yet.`);
      if (currentSettings.timerValue > 0) {
        console.log(`runCountdownTimer(): timerValue is greater than zero.`);
        currentSettings.timerValue--;
        timerUI();
        if (
          (currentSettings.transition === false)
          && (currentSettings.timerValue <= 5)
          && (currentSettings.timerValue > 0)
        ) {
          if (currentSettings.audio) {sfx.warning.play();}
        } else if (currentSettings.timerValue === 0) {
          console.log(`runCountdownTimer(): timerValue has now been set to zero.`);
          if (currentSettings.audio) {sfx.next.play();}
        }
      } else {
        console.log(`runCountdownTimer(): timerValue was already zero.`); // I probably need to move this entire ELSE code block into the ELSE IF code block above!
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
        clearInterval(countdownTimer);
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

        currentCircuitUI.innerText = `Circuit ${originalSettings.circuitsRemaining - currentSettings.circuitsRemaining + 1} of ${originalSettings.circuitsRemaining}`;

        clearInterval(countdownTimer);
        setTimerValue();
      }
    }
  }, 1000);
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

// UI:
// Displays total remaining time. (Pauses if workout is paused.)

const pauseBtn = document.querySelector('.pause-btn');
const continueBtn = document.querySelector('.continue-btn');
const startOverBtn = document.querySelector('.start-over-btn');

pauseBtn.addEventListener('click', pause);
function pause() {
  console.log(`pause() invoked.`);
  if (currentSettings.audio) {sfx.clickBtn.play();}
  clearInterval(countdownTimer);
  countupTimer();
  pauseBtn.classList.add('hide');
  continueBtn.classList.remove('hide');
  startOverBtn.classList.remove('hide');
  pauseMsg.classList.remove('hide');
}

continueBtn.addEventListener('click', continueWorkout);
function continueWorkout() {
  if (currentSettings.audio) {sfx.startContinueFinish.play();}
  clearInterval(countupValue); // Stop the pause timer
  pauseClock.innerText = 0; // Reset pause timer UI
  runCountdownTimer();
  pauseBtn.classList.remove('hide');
  continueBtn.classList.add('hide');
  startOverBtn.classList.add('hide');
  pauseMsg.classList.add('hide');
  currentCircuitUI.innerText = `Circuit ${originalSettings.circuitsRemaining - currentSettings.circuitsRemaining + 1} of ${originalSettings.circuitsRemaining}`;
}

startOverBtn.addEventListener('click', function() {
  // If paused, reset. If finished, restart:
  (currentSettings.active) ? startOver() : startNewWorkout();
});

function startOver() {
  if (currentSettings.audio) {sfx.clickBtn.play();} // Maybe rely on the other SFX that will play, instead.
  //clearInterval(countupValue); // Stop the pause timer -- UNLESS IT WASN'T RUNNING?
  pauseBtn.classList.add('hide');
  continueBtn.classList.add('hide');
  startOverBtn.classList.add('hide'); 
  startBtn.classList.remove('hide');
  pauseMsg.classList.add('hide');
  // NOTE: WILL I NEED TO UPDATE UI TO MATCH THE FOLLOWING? PROBABLY NOT -- IT SHOULD HAVE BEEN LOCKED IN PLACE WHEN THE WORKOUT BEGAN.
  currentSettings.active = false;
  disableEnable(); // Disable Workout Settings Controls
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

const audioToggle = document.querySelector('.audio-toggle');
audioToggle.addEventListener('click', setAudio);
function setAudio(e) {
  currentSettings.audio = (e.target.checked) ? true : false;
  if (currentSettings.audio) {sfx.clickBtn.play();}
}

const pauseMsg = document.querySelector('.pause-message');
const pauseClock = document.querySelector('.pause-clock');
let countupValue;
function countupTimer() {
  let ps = 0;
  let pauseMin = 0;
  let pauseSec = 0;
  pauseClock.innerText = `00:00`;
  countupValue = setInterval(function() {
    ps++;
    if (ps < 3600) {
      pauseMin = Math.floor(ps/60);
      pauseSec = ps % 60;
      pauseClock.innerText = `${(pauseMin < 10) ? '0' + pauseMin : pauseMin}:${(pauseSec < 10) ? '0' + pauseSec : pauseSec}`;
    } else {
      clearInterval(countupValue);
      pauseClock.innerText = `You've been taking a "break" for over an hour.`;
    }
  }, 1000);
}

// Disable / Enable Workout Selection Controls:
const shade = document.querySelector('.shaded-overlay');
function disableEnable() {
  if (currentSettings.active) {
    // Disable Controls
    bonusCheckbox.disabled = true;
    breakDropdown.disabled = true;
    circuitsInput.disabled = true;
    difficultyButtons.forEach(function(difficultyButton) {
      difficultyButton.disabled = true;
    });
    shade.classList.remove('hide');
  } else {
    // Ensable Controls
    bonusCheckbox.disabled = false;
    breakDropdown.disabled = false;
    circuitsInput.disabled = false;
    difficultyButtons.forEach(function(difficultyButton) {
      difficultyButton.disabled = false;
    });
    shade.classList.add('hide');
  }
}

createWorkout(); // Create default workout when page loads.