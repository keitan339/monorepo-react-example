const productionPlugins = [["babel-plugin-react-remove-properties", { properties: ["data-testid"] }]];

module.exports = function getBabelConfig(api) {
  api.cache(true);

  const modules = process.env.MODULE_TYPE === "cjs" ? "commonjs" : false;

  const presets = [
    [
      "@babel/preset-env",
      {
        bugfixes: true,
        browserslistEnv: process.env.NODE_ENV,
        modules,
      },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],
    ["@babel/preset-typescript", { isTSX: true, allExtensions: true }],
  ];

  const plugins = [
    "babel-plugin-optimize-clsx",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ["@babel/plugin-proposal-object-rest-spread", { loose: true }],
    [
      "babel-plugin-transform-react-remove-prop-types",
      {
        mode: "unsafe-wrap",
      },
    ],
  ];

  if (process.env.NODE_ENV === "production") {
    plugins.push(...productionPlugins);
  }

  return {
    assumptions: {
      noDocumentAll: true,
    },
    presets,
    plugins,
    ignore: [/@babel[\\|/]runtime/, /\.(test|spec)\.(js|ts|tsx)$/, /__tests__/],
    overrides: [
      {
        exclude: /\.(test|spec)\.(js|ts|tsx)$/,
        plugins: ["@babel/plugin-transform-react-constant-elements"],
      },
    ],
  };
};
