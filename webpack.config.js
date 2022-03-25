const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackRequireFrom = require('webpack-require-from');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

const production = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: './src/app',
    graphql: './modules/graphql/public/assets/graphql',
  },
  output: {
    chunkFilename: '[name].[chunkhash:3].js',
    publicPath: '',
    path: path.resolve('app/assets'),
    filename: '[name].js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        css: true
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[chunkhash:3].css',
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 10000,
    }),
    new WebpackRequireFrom({
      methodName: 'window.__CONTEXT__.cdnUrl',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    })
  ],
  mode: production ? 'production' : 'development',
};
