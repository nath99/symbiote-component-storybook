const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.@(tsx|mdx)"],

  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: ['@storybook/addon-essentials', '@storybook/preset-scss', '@storybook/addon-docs', '@storybook/addon-a11y'],

  scripts: {
    "start-storybook": "start-storybook -s ../public -p 9001"
  },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
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

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  }
};