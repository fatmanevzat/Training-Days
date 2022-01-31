const random = Math.floor(Math.random() *3); // Create random number
const athlete = "Nala";
const getRandEvent = () => {
  // return 'Marathon' or 'Triathlon' or 'Pentathlon' randomly;
  if (random === 0) {
    return "marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else {
    return "Pentathlon";
  }
};

console.log(getRandEvent());

// The scope of `trainingDays` is too tight
const getTrainingDays = (activity) => {
  // decide the day according to the activity, write a activityal;

  let trainingDays;

  if (activity === "marathon") {
    trainingDays = 50;
  } else if (activity === "Triathlon") {
    trainingDays = 75;
  } else {
    trainingDays = 100;
  }
  return trainingDays;
};


const logEvent = (ath,activity) => {
  console.log(`${ath}'s activity is: ${activity}`);
};

const logTime = (ath,days) => {
  console.log(`${ath}'s time to train is: ${days} days`);
};

const sport = getRandEvent();
const days = getTrainingDays(sport);

logEvent("Ahmet",sport);
logTime("Ahmet",days);

logEvent(athlete,sport);
logTime(athlete,days);