/* eslint-disable prettier/prettier */
/* eslint-disable global-require */
/* eslint-disable no-undef */
const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|jpg|png|mp4)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]'
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/svg/[name][ext]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext]',
        },
      },
    ],
  },
  stats: {
    errorDetails: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'index.[contenthash].js',
    path: path.resolve(__dirname, '../virtKey-gh-pages/VirtualKeyboard/dist'),
  },
  plugins: [new CleanWebpackPlugin()],
};

module.exports = ({ mode }) => {
  const isProductionMode = mode === 'prod';
  const envConfig = isProductionMode
    ? require('./webpack.prod.config')
    : require('./webpack.dev.config');

  return merge(baseConfig, envConfig);
};
