const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var interval = setInterval(function(){
    var menit = Math.floor(seconds/60)
    var detik = seconds%60

    var viewMenit = ''
    var viewDetik = ''
    
    if(menit>=10){
      viewMenit += menit
    }else{viewMenit = `0${menit}`}
    if(detik>=10){
      viewDetik += detik
    }else{viewDetik = `0${detik}`}

    displayCountdown(`${viewMenit}:${viewDetik}`)

    seconds -= 1

    if(seconds<0){
      clearInterval(interval)
    }
  },1000)
  
};

module.exports = {
  timer
};
