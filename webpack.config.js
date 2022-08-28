const path = require("path");

module.exports = {
  mode: 'development',
  devtool: 'cheap-source-map',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    port: 8080,
    hot: true,
  },
};
