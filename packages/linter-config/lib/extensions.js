/* eslint-disable no-param-reassign */
const addIndustryStandards = config => {
  config.plugins = config.plugins || [];
  config.extends = config.extends || [];
  config.plugins = config.plugins.concat([
    "standard",
    // https://github.com/sindresorhus/eslint-plugin-unicorn#rules
    "unicorn",
  ]);
  config.extends = config.extends.concat([
    "standard",
    "airbnb",
    "plugin:unicorn/recommended",
  ]);
};

const addReact = config => {
  config.plugins = config.plugins || [];
  config.extends = config.extends || [];
  config.plugins = config.plugins.concat(["react"]);
  config.extends = config.extends.concat(["plugin:react/recommended"]);
};

const addFlow = config => {
  config.plugins = config.plugins || [];
  config.extends = config.extends || [];
  config.plugins = config.plugins.concat(["flowtype"]);
  config.extends = config.extends.concat(["plugin:flowtype/recommended"]);
};

const addTypescript = config => {
  config.plugins = config.plugins || [];
  config.extends = config.extends || [];
  config.plugins = config.plugins.concat(["@typescript-eslint"]);
  config.extends = config.extends.concat([
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended",
  ]);
};

const addBabelExperimentals = config => {
  config.plugins = config.plugins || [];
  config.plugins = config.plugins.concat(["babel"]);
};

const addPrettier = config => {
  config.plugins = config.plugins || [];
  config.extends = config.extends || [];
  const integrations = [
    ["plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint"],
    ["plugin:flowtype/recommended", "prettier/flowtype"],
    [config.plugins.includes("babel"), "prettier/babel"],
    ["plugin:react/recommended", "prettier/react"],
    ["standard", "prettier/standard"],
    ["plugin:unicorn/recommended", "prettier/unicorn"],
  ];
  config.plugins = config.plugins.concat(["prettier"]);
  config.extends = config.extends.concat(["prettier"]);
  integrations.forEach(pair => {
    if (pair[0] === true || config.extends.includes(pair[0])) {
      config.extends.push(pair[1]);
    }
  });
};

const addImportSupport = (
  config,
  {
    jsExtensions = [".js"],
    tsExtensions = [".ts"],
    rootPaths = ["src"],
    alias = {
      cc: "companion-components",
    },
  } = {}
) => {
  config.plugins = config.plugins || [];
  config.extends = config.extends || [];
  config.settings = config.settings || {};
  config.plugins = config.plugins.concat(["import"]);
  config.extends = config.extends.concat([
    "plugin:import/errors",
    "plugin:import/warnings",
  ]);
  config.settings["import/resolver"] = {
    node: {
      paths: rootPaths,
      alias,
    },
  };
  config.settings["import/extensions"] = jsExtensions;
  config.settings["import/core-modules"] = ["electron"];
  if (config.extends.includes("plugin:@typescript-eslint/recommended")) {
    config.extends.push("plugin:import/typescript");
    config.settings["import/extensions"].concat(tsExtensions);
  }
};

module.exports = {
  addImportSupport,
  addIndustryStandards,
  addReact,
  addBabelExperimentals,
  addFlow,
  addTypescript,
  addPrettier,
};
