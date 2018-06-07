const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var set = setInterval (function() {
    if (seconds === 0){
      clearInterval(set)
    } else {
      seconds--
      displayCountdown(seconds)
    }
  }, 200)
};

module.exports = {
  timer
};
