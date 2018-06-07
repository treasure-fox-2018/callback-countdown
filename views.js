const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();

  console.log(chalk.cyan(figlet.textSync('Count Down App')));
  
  let minute = Math.trunc(seconds/60)
  let sec = seconds % 60

  if (sec < 10) {
    sec = '0' + sec
  }

  if(minute < 10) {
    minute = '0'+ minute
  }
  
  console.log(chalk.cyan(figlet.textSync(`${minute} : ${sec}`)));

};

module.exports = { displayCountdown };
