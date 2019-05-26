/* eslint-disable no-param-reassign */
const addJestOverrides = (config, { files = ["**/*.spec.js"] } = {}) => {
  config.overrides = config.overrides || [];
  config.overrides.push({
    files,
    plugins: ["jest"],
    env: {
      jest: true,
    },
  });
};

module.exports = {
  addJestOverrides,
};
