const path = require('path');

module.exports = {
  entry: ["./src/index.js"],
  mode: "production",
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
      }
    ],
  },
  devServer: {
    port: 3000,
  }
};
