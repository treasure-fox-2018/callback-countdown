const figlet = require('figlet')
const chalk = require('chalk')

figlet('Ari Supriatna', function(err, data) {
  if (err) {
    console.log('something went wrong')
    console.dir(err)
    return;
  }
  console.log(chalk.blue(data))
})