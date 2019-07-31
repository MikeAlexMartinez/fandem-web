module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    "jest/globals": true
  },
  extends: "airbnb",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "jest"],
  rules: {
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    "react/prop-types": [2, { ignore: ['children', 'render'] }],
  }
};
