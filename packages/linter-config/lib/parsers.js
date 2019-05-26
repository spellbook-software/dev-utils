/* eslint-disable no-param-reassign */
const addBabelParser = config => {
  config.parser = "babel-eslint";
  config.parserOptions = {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
  };
  return config;
};

const addTypescriptParser = config => {
  config.parser = "@typescript-eslint/parser";
  config.parserOptions = {
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2018,
    // Allows for the use of imports
    sourceType: "module",
  };
  return config;
};

module.exports = {
  addBabelParser,
  addTypescriptParser,
};
