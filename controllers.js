const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var counting = setInterval(function () {
    // console.log(seconds);
    
    var formatTime = convert(seconds)
    var displayTime = formatTime

    displayCountdown(displayTime)
    seconds--
    if (seconds < 0) {
      clearInterval(counting)
    }
  }, 1000)  
};

function convert(seconds) {
  var jam = Math.floor(seconds / 60)
  var menit = seconds % 60

  jam = jam.toString()
  menit = menit.toString()

  if (jam.length == 1 || jam == '0') {
    jam = `0${jam}`
  }else
  if (menit.length == 1 || menit == '0') {
    menit = `0${menit}`
  }
  return `${jam} : ${menit}`
  
  
}




module.exports = {
  timer
};
