// =======================================================
// 🏃 Training Days 
// Author: Hakeem Khan
// Submitted to: Mr pamir khan
// =======================================================


// =======================================================
// Get Random Event
// =======================================================

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return "Marathon";
  } 
  else if (random === 1) {
    return "Triathlon";
  } 
  else {
    return "Pentathlon";
  }
};


// =======================================================
// Get Training Days
// =======================================================

const getTrainingDays = (event) => {

  let days;

  if (event === "Marathon") {
    days = 50;
  } 
  else if (event === "Triathlon") {
    days = 100;
  } 
  else {
    days = 200;
  }

  return days;
};


// =======================================================
// Main Function (runs on button click)
// =======================================================

function runTraining() {

  const name1 = "hakeem";
  const name2 = "bilal";

  const event1 = getRandEvent();
  const days1 = getTrainingDays(event1);

  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);

  const result = `
    🏃 Athlete 1: ${name1}<br>
    🎯 Event: ${event1}<br>
    📅 Training Days: ${days1} days<br><br>

    🏃 Athlete 2: ${name2}<br>
    🎯 Event: ${event2}<br>
    📅 Training Days: ${days2} days
  `;

  document.getElementById("output").innerHTML = result;
}