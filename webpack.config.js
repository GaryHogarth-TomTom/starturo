const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { IgnorePlugin } = require('webpack');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  config.plugins = [
    ...config.plugins,
    new IgnorePlugin({
      resourceRegExp: /react-native-google-mobile-ads/,
    }),
  ];
  return config;
};
