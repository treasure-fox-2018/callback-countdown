'use strict'

const displayCountdown = require("./views");

const timer = (seconds) => {
  let countingdown = setInterval(function(){
    let minute = Math.floor(seconds/ 60)
    
    let second = seconds%60
    if(minute < 10){
      minute = `0${minute}`
    } 
    if(second < 10){
      second = `0${second}`
    }
    displayCountdown(`${minute}:${second}`)
    seconds--
    if(seconds === 0){
      clearInterval(countingdown)
    }

  }, 1000)
};

console.log(timer(10))

module.exports = 
  timer

