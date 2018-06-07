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
    
    
    if(seconds < 0){
      clearInterval(0)
    }else{
      var menit = Math.floor(seconds/60)
      var detik = seconds%60
      // var result;
      if(menit < 10){
        menit = "0"+menit;
      }
      if(detik < 10){
        detik = "0"+detik
      }
      // result  = `${menit}:${detik}`
      displayCountdown(`${menit}:${detik}`);
      seconds--;
    }
  },1000)


};

module.exports = {
  timer: timer
};
