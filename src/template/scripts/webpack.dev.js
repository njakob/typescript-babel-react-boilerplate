import path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { getBuildInfo } from 'template/scripts/getBuildInfo';

const sourcesPath = path.join(process.cwd(), 'src');
const buildPath = path.join(process.cwd(), 'build');

export default {
  target: 'web',
  devtool: 'sourcemap',
  mode: 'development',

  devServer: {
    contentBase: buildPath,
    compress: true,
    port: 9000,
  },

  entry: [
    path.join(sourcesPath, 'template', 'application'),
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [
      'node_modules',
    ],
  },

  output: {
    path: buildPath,
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[hash].[ext]',
            limit: 10000,
          },
        },
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ title: 'react-typescript-babel-boilerplate' }),
    new webpack.DefinePlugin({
      __DEV__: true,
      __BUILD_INFO__: JSON.stringify(getBuildInfo()),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
