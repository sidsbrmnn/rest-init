/* eslint-disable no-console */
const execute = require("../util/execute");

const DIRNAME = process.cwd() + "/";

const dependencies = ({ name }) => {
  const cmd = "npm i express mongoose config cors morgan";
  console.log("Installing dependencies");
  execute(cmd, DIRNAME + name);
};

module.exports = { dependencies };
