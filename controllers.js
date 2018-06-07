const displayCountdown = require("./views");

const timer = seconds => {
  // Your code here...
  displayCountdown(seconds)
  // var myVar = setInterval(timer,1000)

  // function time(){
  //   if(seconds === 0){
  //     clearInterval(0)
  //   }else{
  //     seconds--;
  //     displayCountdown(seconds)
  //   }
  // }

  var time = setInterval(function(){
    if(seconds === 0){
      clearInterval(0)
    }else{
      seconds--;
      displayCountdown(seconds);
    }
  },1000)


};

module.exports = {
  timer: timer
};
