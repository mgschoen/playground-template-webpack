const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {};
try {
  config = require('./config.json');
} catch (_) {}

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    static: {
      directory: './dist'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.siteName || 'Playground',
      template: 'index.html',
    }),
  ],
  output: {
      filename: '[name].[fullhash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
  },
}
