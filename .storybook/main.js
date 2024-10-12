const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
    'storybook-addon-themes',
    'storybook-addon-pseudo-states',
    'addon-screen-reader',
    'storybook-addon-react-router-v6',
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    return config
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  framework: '@storybook/react',
}
