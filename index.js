/* eslint-disable no-console */
const create = require("./functions/create");
const install = require("./functions/install");
const input = require("./util/input");

const newApp = async () => {
  let name = await input("Name: ");
  let description = await input("Description: ");
  let author = await input("Author: ");
  let routes = await input("Routes (separate with spaces): ");
  routes = routes.split(" ");

  const app = { name, description, author, routes };

  create.directory(app);
  create.packageJson(app);
  create.indexJs(app);
  create.routes(app);
  install.dependencies(app);
  console.log(`\n\n${app.name} created.`);
  console.log("Happy coding!");
  process.exit(0);
};

module.exports = { newApp };
