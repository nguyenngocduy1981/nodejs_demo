const path = require('path');

const loadConfig = function () {
  const configFilePath = path.join(__dirname, `app.dev.json`);
  const config = require(configFilePath);
  return config;
};

module.exports['APP'] = loadConfig();
