module.exports = function getBabelConfig(api) {
  api.cache(true);
  const presets = [
    [
      "@babel/preset-env",
      {
        bugfixes: true,
        browserslistEnv: process.env.NODE_ENV,
        modules: "commonjs",
        targets: {
          node: "current",
        },
      },
    ],
    ["@babel/preset-typescript", { isTSX: true, allExtensions: true }],
  ];

  const plugins = [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ["@babel/plugin-proposal-object-rest-spread", { loose: true }],
  ];

  return {
    assumptions: {
      noDocumentAll: true,
    },
    presets,
    plugins,
    ignore: [/@babel[\\|/]runtime/, /\.(test|spec)\.(js|ts|tsx)$/, /__tests__/],
  };
};
