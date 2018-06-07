const controller = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  controller.timer(seconds);
};

main();
