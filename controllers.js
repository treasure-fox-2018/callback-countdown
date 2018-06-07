const { displayCountdown } = require("./views.js");

const timer = seconds => {  // bikin second itu dimana? sama callbacknya
  // Your code here...
  let minute = Math.floor(seconds / 60) // from node
  if (seconds > 59) {
    seconds = seconds % 60
    minute = 1
  }
  
  var interval = setInterval(function(){ // this methode from js
    if (seconds > 0 && seconds <= 10) {
      seconds -=1
      displayCountdown(`0${minute}:0${seconds}`)
    } else if (seconds > 10) {
      seconds -=1
      displayCountdown(`0${minute}:${seconds}`)
    } else if (minute > 0 && seconds === 0) {
      seconds = 59
      minute = 0
      // seconds
      displayCountdown(`0${minute}:${seconds}`)
    } else if (minute ===0 && seconds ===0) {
      clearInterval(interval) // to clear var interval
    }
  }, 1000)
};

timer(1)
// setInterval

// console.log(timer(5000))
module.exports = {
  timer
};


// // declaration
// function timer(){}

// // expression
// timer = function(seconds){}

// timer = (seconds) => {

// }

// timer = seconds => {

// }