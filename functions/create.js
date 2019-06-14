/* eslint-disable no-console */
const fs = require("fs");
const index = require("../templates/index");
const package = require("../templates/package");

const DIRNAME = process.cwd() + "/";

const directory = ({ name }) => {
  try {
    fs.mkdirSync(DIRNAME + name);
    console.log("Created directory: " + name);
    fs.mkdirSync(DIRNAME + name + "/config");
    console.log("Created directory: " + name + "/config");
    fs.mkdirSync(DIRNAME + name + "/middleware");
    console.log("Created directory: " + name + "/middleware");
    fs.mkdirSync(DIRNAME + name + "/model");
    console.log("Created directory: " + name + "/model");
    fs.mkdirSync(DIRNAME + name + "/routes");
    console.log("Created directory: " + name + "/routes");
  } catch (ex) {
    throw new Error(ex);
  }
};

const indexJs = app => {
  try {
    fs.writeFileSync(DIRNAME + app.name + "index.js", index(app));
    console.log("Created file: index.js");
  } catch (ex) {
    throw new Error(ex);
  }
};

const packageJson = app => {
  try {
    fs.writeFileSync(DIRNAME + app.name + "package.json", package(app));
    console.log("Created file: package.json");
  } catch (ex) {
    throw new Error(ex);
  }
};

const routes = ({ name }, routes) => {};

module.exports = { directory, indexJs, packageJson, routes };
