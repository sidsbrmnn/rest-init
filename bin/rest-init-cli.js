#!/usr/bin/env node

const program = require("commander");
const { newApp } = require("../index");

program
  .version("1.0.0")
  .description(
    "A lightweight CLI that saves your time by installing all the essential dependencies and structuring it for your RESTful API."
  );

program
  .command("new")
  .alias("n")
  .description("Create a new API")
  .action(() => newApp());

program.parse(process.argv);
