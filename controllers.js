const { displayCountdown } = require("./views");

const timer = (seconds) => {
  // Your code here...
  let countingDown = setInterval(function() {
    var minute = Math.floor(seconds/60)
    var second = seconds % 60;
  
    if (minute < 10) {
      minute = `0${minute}`;
    }
    if (second < 10) {
      second = `0${second}`
    }
    displayCountdown (`${minute}:${second}`)
    seconds--;
    if (second === 0) {
      clearInterval(countingDown)
    }
  }, 1000)
  

};

module.exports = {
  timer
};

