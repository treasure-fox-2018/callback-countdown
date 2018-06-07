const { displayCountdown } = require("./views");

const timer = seconds => {
  let countingTimer = setInterval(function () {
    displayCountdown(convertTime(seconds));
    seconds--;
    if (seconds < 0) {
      clearInterval(countingTimer);
    }
  }, 1000);
};

function convertTime (seconds) {
  let minute= String(Math.floor(seconds / 60));
  let second = String(seconds % 60);
  if (minute.length === 1) {
    minute ="0"+minute;
  }
  if (second.length === 1) {
    second ="0"+second;
  }
  let time = `${minute}:${second}`
  return time;
}


module.exports = {
  timer
};
