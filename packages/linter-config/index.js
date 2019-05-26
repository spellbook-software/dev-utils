/* eslint-disable @typescript-eslint/no-var-requires */
const { addTypescriptParser } = require("./lib/parsers");
const {
  addIndustryStandards,
  addTypescript,
  addReact,
  addPrettier,
  addImportSupport,
} = require("./lib/extensions");
const { addJestOverrides } = require("./lib/overrides");

const config = {};

config.env = {
  es6: true,
  browser: true,
  node: true,
};

addTypescriptParser(config);
addIndustryStandards(config);
addTypescript(config);
addReact(config);
addImportSupport(config);
addPrettier(config);
addJestOverrides(config);

config.rules = {
  "no-console": "off",
  "react/jsx-filename-extension": [1, { extensions: [".js", ".ts"] }],
  // https://github.com/facebook/react/blob/v15.4.0-rc.3/docs/docs/02.3-jsx-gotchas.md#html-entities
  "react/jsx-curly-brace-presence": [
    "warn",
    { props: "always", children: "ignore" },
  ],
  "no-underscore-dangle": ["error", { allowAfterThis: true }],
  "unicorn/prevent-abbreviations": [
    "error",
    {
      extendDefaultReplacements: false,
      replacements: {
        /* eslint-disable unicorn/prevent-abbreviations */
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md#replacements
        // add any repeatedly bad named variables here
        str: {
          output: true,
          value: true,
        },
        /* eslint-enable unicorn/prevent-abbreviations */
      },
    },
  ],
};

module.exports = config;
