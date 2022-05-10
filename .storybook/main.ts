const TsconfigPathsPlugin  = require('tsconfig-paths-webpack-plugin')
// @ts-ignore
module.exports = {
  stories: [
    '../src/**/*.stories.(js|jsx|ts|tsx|mdx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
  framework: '@storybook/react',
};
