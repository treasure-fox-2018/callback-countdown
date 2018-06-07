const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  setInterval(function () {
    if (seconds > 0) {
      seconds -= 1

      let _minute = Math.floor(seconds / 60) % 10
      let _second = Math.floor(seconds % 60) / 10
      let time = `${_minute} : ${_second}`

      displayCountdown(time)
    }
    else {
      clearInterval(seconds)
    }
  }, 1000);

}


module.exports = {
  timer
};


