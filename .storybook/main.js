module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  staticDirs: ["../static"],
  framework: "@storybook/html",
  webpackFinal: async (config) => {
    config.node = {
      fs: "empty",
    };
    return config;
  },
};
