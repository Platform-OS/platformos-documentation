const path = require('path');
const glob = require('glob-all');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackRequireFrom = require('webpack-require-from');
const TerserPlugin = require('terser-webpack-plugin');

// Todo: Investigate DropCSS (maybe write postcss-plugin)
// https://github.com/leeoniya/dropcss
const PurgecssPlugin = require('purgecss-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].css'
  }),
  new WebpackRequireFrom({
    variableName: 'window.__CONTEXT__.cdnUrl'
  }),
  new PurgecssPlugin({
    paths: glob.sync(['app/views/**/*.liquid', 'src/js/**/*.js'], { nodir: true }),
    only: ['app.css'],
    whitelistPatternsChildren: [/^feedback/],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  })
];

const config = {
  entry: {
    app: './src/app'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:3].js',
    publicPath: '',
    path: path.resolve('app/assets')
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
        test: /(\.css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?url=false',
          'postcss-loader'
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
      new TerserPlugin({ parallel: true, cache: true })
    ],
    splitChunks: {
      cacheGroups: {
        vendors: false // Do not emit vendors~* files that are almost empty in this setup
      }
    }
  },
  plugins: plugins,
  mode: production ? 'production' : 'development'
};

module.exports = config;
