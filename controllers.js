const { displayCountdown } = require("./views");

const timer = seconds => {

  let countdown = setInterval(function() {
    displayCountdown(timeConversion(seconds));
    seconds--;
    if (seconds === -1) {
      clearInterval(countdown);
    } 
  }, 1000);
  
  function timeConversion(seconds) {
    var mins;
    var sec;
    if (seconds >= 60) {
      mins = Math.floor(seconds / 60);
      sec = seconds % 60;

      if (mins < 10) {
        mins = '0' + mins;
      }

    } else {
      sec = seconds;
      mins = '00';
    }
    if (sec < 10) {
      sec = '0' + sec;
    }
    return `${mins} : ${sec}`;
  }
};

module.exports = {
  timer
};
