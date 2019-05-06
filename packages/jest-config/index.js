module.exports = {
  rootDir: ".",
  modulePaths: ["<rootDir>"],
  testMatch: ["<rootDir>/**/*.spec.js?(x)", "<rootDir>**/*.steps.js"],
  verbose: true,
  moduleNameMapper: {
    "\\.(css|scss)$": "empty/object",
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "json"],
  testPathIgnorePatterns: ["<rootDir>/(build|docs|node_modules)/"],
  setupFiles: ["<rootDir>/testSetup.js"],
};
