const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackRequireFrom = require('webpack-require-from');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const production = process.env.NODE_ENV === 'production';

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].css',
  }),
  new WebpackRequireFrom({
    variableName: 'window.__CONTEXT__.cdnUrl',
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  })
];

const config = {
  entry: {
    app: './src/app',
    graphql: './modules/graphql/public/assets/graphql',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:3].js',
    publicPath: '',
    path: path.resolve('app/assets'),
  },
  bail: true,
  stats: {
    modules: false,
    hash: false,
    assetsSort: '!size',
    children: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          retainLines: true,
          cacheDirectory: true,
        },
      },
      {
        test: /(\.css)$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { url: false } }, 'postcss-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: true,
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendors: false, // Do not emit vendors~* files that are almost empty in this setup
      },
    },
  },
  plugins: plugins,
  mode: production ? 'production' : 'development',
};

module.exports = config;
