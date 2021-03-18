const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackRequireFrom = require('webpack-require-from');
const webpack = require('webpack');
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
  },
  optimization: {
    minimize: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015'
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /(\.css)$/,
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
        options: {
          target: 'es2015',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[chunkhash:3].css',
    }),
    new WebpackRequireFrom({
      variableName: 'window.__CONTEXT__.cdnUrl',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    })
  ],
  mode: production ? 'production' : 'development',
};
