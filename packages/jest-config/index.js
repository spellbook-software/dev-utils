module.exports = {
  rootDir: "src",
  modulePaths: ["<rootDir>"],
  testMatch: ["<rootDir>/**/*.spec.js?(x)", "<rootDir>**/*.steps.js"],
  verbose: true,
  moduleNameMapper: {
    "\\.(css|scss)$": "empty/object"
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "json"]
  // setupFiles: ["<rootDir>/setup.js"],
};
