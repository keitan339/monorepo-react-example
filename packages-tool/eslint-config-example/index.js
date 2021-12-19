"use strict";

module.exports = {
  env: { node: true, es6: true },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json", ".d.ts", ".ts", ".tsx"],
      },
      typescript: {},
    },
    "import/internal-regex": "^@example/",
  },
  rules: {
    "sort-imports": "off",
    "import/order": ["warn", { groups: ["external", "internal", "builtin"], alphabetize: { order: "asc" } }],
    "import/named": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/ban-types": "off",
  },
};
