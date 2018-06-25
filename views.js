const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");
const controllers = require("./controllers.js")

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  let MM = Math.floor(seconds/60)
  let second = seconds%60

  let SS = null;
  if (second < 10) {
    SS = `0${second}`
  }
  else SS = second; 
  console.log(chalk.green.bold(figlet.textSync(`${MM} : ${SS}`)))

};

module.exports = { displayCountdown };
