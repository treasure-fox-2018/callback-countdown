const { displayCountdown } = require("./views");

const timer = seconds => {
  let count = setInterval(function() {
    seconds--
    displayCountdown(convertTime(seconds))
    if (seconds === 0) {
      clearInterval(count)
    }
  }, 1000)
};

const convertTime = seconds => {
  let getMinutes = Math.floor(seconds / 60)
  let getSecond = Math.floor(seconds % 60)

  if (getMinutes < 10) {
    var minutes = "0" + getMinutes
  } else {
    minutes = getMinutes
  }

  if (getSecond < 10) {
    var seconds = "0" + getSecond
  } else {
    seconds = getSecond
  } 

  return `${minutes} : ${seconds}`
}

module.exports = {
  timer
};

