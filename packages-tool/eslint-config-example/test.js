"use strict";

module.exports = {
  plugins: ["jest", "testing-library"],
  extends: ["plugin:jest/recommended"],
  settings: {
    jest: { version: 27 },
  },
  rules: {
    "jest/no-conditional-expect": "off",
  },
};
