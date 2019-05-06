module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false
    },
    babelOptions: {
      configFile: ".babelrc"
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  plugins: ["babel", "flowtype", "prettier", "react", "standard", "unicorn"],
  extends: [
    "airbnb",
    "plugin:flowtype/recommended",
    "plugin:react/recommended",
    "plugin:unicorn/recommended",
    "prettier",
    "prettier/babel",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard",
    "prettier/unicorn"
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false
    },
    "import/core-modules": ["electron"],
    "import/resolver": {
      node: {
        paths: ["src"],
        alias: {
          cc: "companion-components"
        }
      }
    }
  },
  rules: {
    "no-console": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-curly-brace-presence": "off",
    "no-underscore-dangle": ["error", { allowAfterThis: true }],
    "unicorn/filename-case": "off",
    "react/prefer-stateless-function": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          dir: {
            directory: false
          },
          env: {
            environment: false
          }
        }
      }
    ]
  },
  overrides: [
    {
      files: ["**/*.spec.js"],
      plugins: ["jest"],
      env: {
        jest: true
      }
    }
  ]
};
