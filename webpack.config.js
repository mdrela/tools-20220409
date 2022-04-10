const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLIntWebpackPlugin = require('eslint-webpack-plugin');


module.exports = {
  entry: ['./src/main.ts', './src/style.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
      },
      {
        test: /.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
  plugins: [
	new HTMLWebpackPlugin({template: './src/index.html'}),
  new MiniCssExtractPlugin(),
  new ESLIntWebpackPlugin(),
  ]
};
