const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackRequireFrom = require('webpack-require-from');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].css'
  }),
  new WebpackRequireFrom({
    variableName: 'window.__CONTEXT__.cdnUrl'
  })
];

const config = {
  entry: {
    redesign: './src/redesign'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:3].js',
    publicPath: '',
    path: path.resolve('marketplace_builder/assets')
  },
  bail: true,
  stats: {
    modules: false,
    hash: false,
    assetsSort: '!size',
    children: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader?retainLines=true&cacheDirectory'
      },
      {
        test: /(\.css|\.scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?url=false',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.gif$/,
        use: ['file-loader?name=[name].gif']
      },
      {
        test: /\.(eot|ttf|otf|svg|woff(2))?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({ parallel: true, cache: true })
    ]
  },
  plugins: plugins,
  mode: production ? 'production' : 'development'
};

module.exports = config;
