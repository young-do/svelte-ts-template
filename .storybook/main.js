const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
    {
      // https://github.com/storybookjs/addon-postcss#postcss-8
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/svelte',
  core: {
    builder: 'storybook-builder-vite',
  },
  svelteOptions: {
    preprocess: require('../svelte.config.js').preprocess,
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');

    // return the customized config
    return config;
  },
};
