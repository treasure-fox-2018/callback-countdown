const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 200;
  timer(seconds);
};

main();
