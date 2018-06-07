const { displayCountdown } = require("./views");

const timer = seconds => {
  let interval = setInterval(function(){
    let sec = seconds
    let minutes = 0
    let timeFormat = ""
    while(sec >= 60){
      minutes += 1
      sec -= 60
    }
    if(sec < 10){
      sec = `0${sec}`
    }
    if(minutes < 10){
      minutes = `0${minutes}`
    }
    if(minutes < 60){
      minutes = `${minutes}`
    }
    
    timeFormat = `${minutes}:${sec}` 
    displayCountdown(timeFormat)
    if(seconds === 0){
      clearInterval(interval)
    }
    seconds--
  }, 1000)
}

module.exports = {
  timer
};
