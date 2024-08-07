const timerMilliseconds = document.querySelector(".timer__milliseconds");
const timerSeconds = document.querySelector(".timer__seconds");
const timerMinutes = document.querySelector(".timer__minutes");

let start;
let stopTimers = (document.querySelector(".stopwatch__stop").disabled = true);

let cancelId;
let startTime;
let savedTime = 0;

function startTimer() {
  startTime = Date.now();
  console.log(startTime);
  cancelId = requestAnimationFrame(updateTimer);
  start = (document.querySelector(".stopwatch__start").disabled = true);
  stopTimers = (document.querySelector(".stopwatch__stop").disabled = false);
}

function stopTimer() {
  savedTime += Date.now() - startTime;
  console.log(savedTime);
  cancelAnimationFrame(cancelId);
  start = (document.querySelector(".stopwatch__start").disabled = false);
  stopTimers = (document.querySelector(".stopwatch__stop").disabled = true);;
}

function resetTimer() {
  timerMilliseconds.innerHTML = "000";
  timerSeconds.innerHTML = "00";
  timerMinutes.innerHTML = "00";
  savedTime = 0;
  startTime = Date.now();
}

function updateTimer() {
  let millisElapsed = savedTime + (Date.now() - startTime);
  let millisecondsText = millisElapsed % 1000;
  if (millisecondsText.toString().length < 3) {
    millisecondsText = millisecondsText.toString().padStart(3, "0");
  }
  timerMilliseconds.innerHTML = millisecondsText; //to get the last 3 digits

  let secondsElapsed = millisElapsed / 1000;
  let secondsText = Math.trunc(secondsElapsed % 60);
  if (secondsText.toString().length === 1) {
    secondsText = "0" + secondsText;
  }
  timerSeconds.innerHTML = secondsText;

  let minutesElapsed = secondsElapsed / 60;
  let minutesText = Math.trunc(minutesElapsed);
  if (minutesText.toString().length === 1) {
    minutesText = "0" + minutesText;
  }
  timerMinutes.innerHTML = minutesText;

  cancelId = requestAnimationFrame(updateTimer);
}
