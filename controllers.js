const {
  displayCountdown
} = require("./views")

const timer = seconds => {
  // Your code here...
  let interval = setInterval(function () {
    seconds -= 1;
    displayCountdown(seconds);

    if (seconds === 0) {
      clearInterval(interval);
    }

  }, 1000)



};

module.exports = {
  timer
};
