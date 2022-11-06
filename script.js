const button = document.querySelectorAll("button");
let h = document.querySelector(".hour");
let m = document.querySelector(".minute");
let s = document.querySelector(".second");
let hour = 0;
let minute = 0;
let second = 0;

const timerInterval = () => setInterval(startTimer, 1000);

function startTimer() {
  console.log("startTimer");
  if (second < 60) {
    second++;
    s.textContent = `${second}`;
  } else if (second > 59 && minute < 60) {
    minute++;
    m.textContent = minute;
    second = 0;
  } else if (minute > 59 && hour < 24) {
    hour++;
    minute = 0;
    h.textContent = hour;
  } else if (hour > 24) {
    hour = 0;
    minute = 0;
    second = 0;
    s.textContent = `${second}`;
    m.textContent = minute;
    h.textContent = hour;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  console.log("resetTimer");
}

console.log(button[0]);
button[0].addEventListener("click", timerInterval);
button[1].addEventListener("click", resetTimer);
button[2].addEventListener("click", timerInterval);
