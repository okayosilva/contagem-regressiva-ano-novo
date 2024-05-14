const secondsContainer = document.querySelector("#seconds");
const minutesContainer = document.querySelector("#minutes");
const hoursContainer = document.querySelector("#hours");
const daysContainer = document.querySelector("#days");
const nexYearContainer = document.querySelector("#year");
const spinnerLoading = document.querySelector("#loading");
const countdownContainer = document.querySelector("#countdown");

const nexYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 1, ${nexYear} 00:00:00`);

nexYearContainer.textContent = nexYear;

const getTimeUnit = (unit) => (unit < 10 ? "0" + unit : unit);

const insertCountdownValues = ({ seconds, minutes, hours, days }) => {
  secondsContainer.textContent = getTimeUnit(seconds);
  minutesContainer.textContent = getTimeUnit(minutes);
  hoursContainer.textContent = getTimeUnit(hours);
  daysContainer.textContent = getTimeUnit(days);
};

const updateCountdown = () => {
  const currentTime = new Date();
  const difference = newYearTime - currentTime;

  const days = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const seconds = Math.floor(difference / 1000) % 60;

  insertCountdownValues({ seconds, minutes, hours, days });
};

const handleCountdownDisplay = () => {
  spinnerLoading.remove();
  countdown.style.display = "flex";
};

setTimeout(handleCountdownDisplay, 1000);

setInterval(updateCountdown, 1000);
