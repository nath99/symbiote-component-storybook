const path = require("path");
const webpack = require('webpack');
const HookShellScriptPlugin = require('hook-shell-script-webpack-plugin');

/**
 * Disables Webpack from splitting the code into chunks
 * @param config - The webpack config to update
 */
function disableChunkSplitting(config) {
  config.optimization = { splitChunks: { chunks: 'async' } };
  config.output = { ...config.output, chunkFilename: '[chunkhash].chunk.js', };
  config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1, }));

  return config;
}

module.exports = {
  stories: ["../stories/**/*.stories.@(tsx|mdx)"],

  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: ['@storybook/addon-docs', '@storybook/addon-essentials', '@storybook/preset-scss', '@storybook/addon-a11y'],

  managerWebpack: async (config) => {
    return disableChunkSplitting(config);
  },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname)
    });

    config.module.rules.push({
      test: /\.(svg|png|jpg|jpeg|gif)$/i,
      loader: 'file-loader'
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    });

    // Post emit plugin which fixes paths to static media files and iframe.htm when doing build
    config.plugins.push(new HookShellScriptPlugin({
      afterEmit: ['sed -i -e "s#static/media/#.storybook/static/media/#g;s#iframe.html#.storybook/iframe.html#g" storybook-static/main.*.manager.bundle.js']
    }))

    config.resolve.extensions.push(".ts", ".tsx");

    return disableChunkSplitting(config);
  },
};