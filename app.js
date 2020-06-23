const exercises = {
  founder: {
    title: 'The Founder',
    level: 'Basic',
    transition: 5000,
    pose1: {
      duration: 15000,
      img: ''
    },
    pose2: {
      duration: 15000,
      img: ''
    },
    pose3: {
      duration: 15000,
      img: ''
    },
    pose4: {
      duration: 6000,
      img: ''
    },
    pose5: {
      duration: 15000,
      img: ''
    },
    pose6: {
      duration: 15000,
      img: ''
    },
    pose7: {
      duration: 20000,
      img: ''
    }
  },
  foundationSquat: {
    title: 'Foundation Squat',
    level: 'Moderate',
    transition: 3000,
    pose1: {
      duration: 50000,
      img: ''
    }
  },
  goodMorning: {
    title: 'Good Morning',
    level: 'Intense',
    transition: 3000,
    pose1: {
      duration: 42000,
      img: ''
    }
  },
  windmill: {
    title: 'Windmill',
    level: 'Intense',
    transition: 3000,
    pose1: {
      duration: 15000,
      img: ''
    },
    pose2: {
      duration: 30000,
      img: ''
    },
    pse3: {
      duration: 30000,
      img: ''
    },
  },
  woodpecker: {
    title: 'Woodpecker',
    level: 'Moderate',
    transition: 5000,
    pose1: {
      duration: 5000,
      img: ''
    },
    pose2: {
      duration: 5000,
      img: ''
    },
    pose3: {
      duration: 20000,
      img: ''
    },
    pose4: {
      duration: 3000,
      img: ''
    },
    pose5: {
      duration: 15000,
      img: ''
    }
  },
  backExt: {
    title: 'Back Extension',
    level: 'Basic',
    transition: 10000,
    pose1: {
      duration: 30000,
      img: ''
    }
  },
  foundationPlank: {
    title: 'Foundation Plank',
    level: 'Intense',
    transition: 5000,
    pose1: {
      duration: 10000,
      img: ''
    },
    pose2: {
      duration: 30000,
      img: ''
    },
    pose3: {
      duration: 10000,
      img: ''
    }
  },
  addAssBackExt: {
    title: 'Adductor-Assisted Back Extension',
    level: 'Basic',
    transition: 5000,
    pose1: {
      duration: 20000,
      img: ''
    }
  },
  childPoseKneeling: {
    title: 'Child\'s Pose / Kneeling Founder',
    level: 'Basic',
    transition: 3000,
    pose1: {
      duration: 30000,
      img: ''
    },
    pose2: {
      duration: 15000,
      img: ''
    },
    pose3: {
      duration: 10000,
      img: ''
    }
  },
  lungeStretch: {
    title: 'Lunge Stretch',
    level: 'Basic',
    transition: 10000,
    pose1: {
      duration: 20000,
      img: ''
    },
    shift: 5000,
    pose2: {
      duration: 20000,
      img: ''
    }
  },
  crossover: {
    title: 'Crossover',
    level: 'Bonus',
    transition: 10000,
    pose1: {
      duration: 15000,
      img: ''
    },
    pose2: {
      duration: 15000,
      img: ''
    },
    pose3: {
      duration: 15000,
      img: ''
    },
    pose4: {
      duration: 15000,
      img: ''
    }
  },
  crossunder: {
    title: "Cross Under",
    level: 'Bonus',
    transition: 5000,
    pose1: {
      duration: 2000,
      img: ''
    },
    pose2: {
      duration: 2000,
      img: ''
    },
    pose3: {
      duration: 20000,
      img: ''
    },
    pose4: {
      duration: 2000,
      img: ''
    },
    pose5: {
      duration: 2000,
      img: ''
    }
    pose6: {
      duration: 20000,
      img: ''
    }
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
// Repeat this process for each pose OR SHIFT in this object. (NOTE: A shift should be added to some objects.)
// When all the poses are done, play sfx.done, move on to the next object in the array, and repeat the steps above.
// When all exercises are done, if bonus === false, then play sfx.finale. If bonus === true, initiate bonus workout.


// Bonus Workout:
// Run the same procedure listed above for exercises.crossover and exercises.crossUnder.
// When complete, play sfx.finale.