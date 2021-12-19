const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.webpack.json",
        },
      },
    ],
  });

  config.resolve.plugins.push(new TsconfigPathsPlugin({ configFile: "./tsconfig.json" }));

  config.resolve.plugins = config.resolve.plugins.filter((plugin) => !(plugin instanceof ModuleScopePlugin));

  return config;
};
