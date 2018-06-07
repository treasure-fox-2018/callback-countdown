const { displayCountdown } = require("./views");

const timer = seconds => {
  let display = "";
  if (seconds >= 60) {
    let minuteDisplay = seconds / 60;
    let strSecondsDisplay = null;
    let strMinuteDisplay = Math.trunc(minuteDisplay).toString();
    let secondsDisplay = seconds % 60;
    if (secondsDisplay === 0) {
      strSecondsDisplay = "00";
    } else {
      strSecondsDisplay = secondsDisplay.toString();
    }
    display = strMinuteDisplay + ":" + strSecondsDisplay;
  } else {
    let secondsDisplay = seconds.toString();
    if (secondsDisplay.length === 1) {
      display = "00:0" + secondsDisplay
    } else {
      display = "00:" + secondsDisplay
    }
  }
  displayCountdown(display)
  let countdown = setInterval(function() {
    seconds --;
    let display = "";
    if (seconds >= 60) {
      let minuteDisplay = seconds / 60;
      let strSecondsDisplay = null;
      let strMinuteDisplay = Math.trunc(minuteDisplay).toString();
      let secondsDisplay = seconds % 60;
      if (secondsDisplay === 0) {
        strSecondsDisplay = "00";
      } else {
        strSecondsDisplay = secondsDisplay.toString();
      }
      display = strMinuteDisplay + ":" + strSecondsDisplay;
    } else {
      let secondsDisplay = seconds.toString();
      if (secondsDisplay.length === 1) {
        display = "00:0" + secondsDisplay
      } else {
        display = "00:" + secondsDisplay
      }
    }
    displayCountdown(display)
    if (seconds === 0) {
      clearInterval(countdown);
    }
  }, 1000)
};

module.exports = {
  timer
};
