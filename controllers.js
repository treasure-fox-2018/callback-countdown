const { displayCountdown } = require("./views");
const timer = seconds => {
  // Your code here...
    // setInterval(function(){
    // // let countdown = seconds;
    //   if (seconds > 0) {
    //     console.log(seconds);
    //     seconds--
    //   }else{
    //     clearInterval(seconds)
    //   }
    // },100)
  var hitungWaktu = setInterval(function(){
    if (seconds > 0) {
      displayCountdown(seconds)
      seconds--
    } if(seconds <= 0){
      clearInterval(hitungWaktu)
    }
  },1000)
};

module.exports = {
  timer
};
