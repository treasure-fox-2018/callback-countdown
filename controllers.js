const { displayCountdown } = require("./views");

const timer = seconds => {
  let countDown = setInterval(function(){
    if (seconds > 0){
      displayCountdown(converter(seconds));
      seconds --;
    } else {
      clearInterval(countDown);
    }
  }, 1000)
};

const converter = seconds => {
  let hour = ('0' + String(Math.floor(seconds / 60)));
  var minute = (String(seconds % 60));
  return `${hour}:${minute}`
};

module.exports = {
  timer
};
