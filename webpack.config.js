// const path = require('path');

// module.exports = {
//     entry: './src/index.js',
//     output: {
//       filename: 'main.js',
//       path: path.resolve(__dirname, 'dist'),
//     },
//   };

  const HtmlWebpackPlugin = require("html-webpack-plugin");
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");

  module.exports = {
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({template: "./src/index.html"})
    
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000,
    },
  }