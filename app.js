const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 100;
  timer(seconds);
};

main();
