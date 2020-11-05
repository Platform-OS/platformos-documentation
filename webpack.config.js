const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackRequireFrom = require('webpack-require-from');
const webpack = require('webpack');

const production = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    'app': './src/app',
    'graphql': './modules/graphql/public/assets/graphql',
  },
  output: {
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
        test: /(\.css)$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { url: false } }, 'postcss-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          exclude: /node_modules/,
          plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/transform-object-assign'],
          retainLines: true,
          cacheDirectory: true,
          presets: [
            [
              '@babel/preset-env'
            ]
          ]
        },
      },
    ],
  },
  plugins: [
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
    }),
  ],
  mode: production ? 'production' : 'development',
}