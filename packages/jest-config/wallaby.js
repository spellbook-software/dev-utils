module.exports = wallaby => {
  return {
    files: [
      { pattern: "**/*.js?(x)", instrument: true, load: true, ignore: false },
      {
        pattern: "**/*.spec.js?(x)",
        instrument: true,
        load: true,
        ignore: true,
      },
      {
        pattern: "./node_modules/**/*.*",
        instrument: false,
        load: false,
        ignore: true,
      },
      {
        pattern: "./**/node_modules/**/*.*",
        instrument: false,
        load: false,
        ignore: true,
      },
    ],
    tests: [
      "**/*.spec.js?(x)",
      {
        pattern: "./node_modules/**/*.*",
        instrument: false,
        load: false,
        ignore: true,
      },
      {
        pattern: "./**/node_modules/**/*.*",
        instrument: false,
        load: false,
        ignore: true,
      },
    ],
    env: {
      type: "node",
      runner: "node",
    },
    compilers: {
      "**/*.js?(x)": wallaby.compilers.babel(),
    },
    testFramework: "jest",
    debug: true,
  };
};
