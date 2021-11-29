// const path = require('path');

// module.exports = {
//     entry: './src/index.js',
//     output: {
//       filename: 'main.js',
//       path: path.resolve(__dirname, 'dist'),
//     },
//   };

  const HtmlWebpackPlugin = require("html-webpack-plugin");

  module.exports = {
    plugins: [new HtmlWebpackPlugin({template: "./src/index.html"})]
  }