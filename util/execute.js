/* eslint-disable no-console */
const util = require("util");
const exec = util.promisify(require("child_process").exec);

module.exports = async (cmd, cwd) => {
  const { stdout, stderr } = await exec(cmd, { cwd });
  console.log("stdout:", stdout);
  console.log("stderr:", stderr);
};
