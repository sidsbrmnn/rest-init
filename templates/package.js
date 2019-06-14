module.exports = app => {
  return `{
  "name": "${app.name}",
  "version": "1.0.0",
  "description": "${app.description}",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo 'Error: no test specified' && exit 1"
  },
  "author": "${app.author}",
  "license": "MIT"
}`;
};
