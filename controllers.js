// const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var counting = setInterval(function () {
    console.log(seconds);
    seconds--
    if (seconds == 0) {
      clearInterval(counting)
    }
  }, 1000)  
};


module.exports = {
  timer
};
