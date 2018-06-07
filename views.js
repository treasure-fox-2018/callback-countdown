const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  
  console.log(chalk.red(figlet.textSync("Hello World")));
  // Your code here...
  
  console.log(chalk.cyan(figlet.textSync(seconds)));

};
// console.log(chalk.red(figlet.textSync("Hello World!")));

module.exports = { displayCountdown };
