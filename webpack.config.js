const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/main.js', './src/style.css'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [{
      test: /.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
    ]
  },
  plugins: [
	new HTMLWebpackPlugin({template: './src/index.html'}),
  new MiniCssExtractPlugin(),
  ]
};