const controllers = require("./controllers");

const main = () => {
  let timer = controllers[0];
  let time = controllers[1];
  const seconds = parseInt(process.argv[2]) || 10;
  timer(seconds);
};

main();
