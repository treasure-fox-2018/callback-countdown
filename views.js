const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.magenta(figlet.textSync("Countdown App")));
  // Your code here...
  console.log(chalk.magenta(figlet.textSync(seconds)));
};
module.exports = { displayCountdown };
