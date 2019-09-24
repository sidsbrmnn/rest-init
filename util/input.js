const { createInterface } = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = str => {
  return new Promise(resolve => {
    rl.question(str, answer => {
      resolve(answer);
    });
  });
};
