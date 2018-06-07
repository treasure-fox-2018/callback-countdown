const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  setInterval(function(){
    if (seconds > 0) {
      displayCountdown(seconds);
      seconds = seconds - 1;
    } else {
      displayCountdown(seconds);
      clearInterval(this);
    }
  }, 1000)
};

module.exports = {
  timer
};
