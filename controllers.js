const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here..
  let detik = 60 
  let interval = setInterval(function(){
    if (seconds > 0) {
      seconds--
      let minute = Math.ceil((second / detik)%10)
      let second = Math.ceil((second % detik)/10)
      let time = `${minute} : ${second}`
      displayCountdown(time);
    } else {
      clearInterval(interval)
    }
  },1000);

};

module.exports = { timer };

 