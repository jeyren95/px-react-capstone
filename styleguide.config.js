const {
    createWebpackDevConfig,
    createWebpackProdConfig,
  } = require("@craco/craco");
  const cracoConfig = require("./craco.config");
  const path = require("path");
  
  /**
   * @type {import('react-styleguidist').StyleguidistConfig}
   */
  module.exports = {
    components: [
      "src/components/**/*.{js,jsx,ts,tsx}", 
      "src/domains/games/components/game.{js,jsx,ts,tsx}",
      "src/domains/bookmarks/components/**/*.{js,jsx,ts,tsx}",
      "src/domains/games/components/search-form.{js,jsx,ts,tsx}"
    ],
    require: [path.resolve(__dirname, "src/index.css")],
    webpackConfig:
      process.env.NODE_ENV === "production"
        ? createWebpackProdConfig(cracoConfig)
        : createWebpackDevConfig(cracoConfig),
  };