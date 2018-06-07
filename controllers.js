// import { clearInterval } from "timers";

const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  // let min = Math.trunc(seconds/60)
  let sec = seconds 
  var secConvert = 0
  let countDown = setInterval(function(){
    if(sec === 0){
      clearInterval(countDown)
    }else{
      sec--
      displayCountdown(convert(sec))
    }
    }, 500);

  };

  function convert(sec){
    let minute= Math.floor(sec / 60);
    let second = sec % 60;
    if (minute > 9) {
      minute ="0"+minute;
    }
    if (second <= 9) {
      second ="0"+second;
    }
    var hasilConvert = `${minute}:${second}`
    return hasilConvert;
  }



module.exports = {
  timer
};
