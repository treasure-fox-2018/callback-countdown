const { displayCountdown } = require("./views");

const timer = seconds => {

  function sleep (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

  let minutes = 0
  let secondsLeftOver = 0
  minutes = Math.floor(seconds/60)
  secondsLeftOver = seconds%60

  for(let x=seconds; x>0; x--) {
    sleep (1000)
    if(secondsLeftOver>0) {
      secondsLeftOver --
    } else if (secondsLeftOver === 0) {
      minutes --
      secondsLeftOver += 59
    }
    displayCountdown(`${('0'+minutes).slice(-2)}:${('0'+secondsLeftOver).slice(-2)}`)
  }
  
};

module.exports = {
  timer
};
