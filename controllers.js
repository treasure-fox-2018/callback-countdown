const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let countdown = setInterval(function(){
    seconds--
    displayCountdown(seconds)
    if(seconds == 0){
      clearInterval(countdown)
    }
  },1000)


};

module.exports = {
  timer
};
