const path = require('path');
const glob = require('glob');
const merge = require('webpack-merge');
const parts = require('./_webpack/webpack.parts');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'assets'),
  styles: glob.sync(__dirname, 'src', 'scss', '**/*')
};

const commonConfig = merge([
  {
    entry: {
      app: path.join(PATHS.app, 'js')
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
      publicPath: '/assets/'
    }
  },
  parts.lintJavaScript({ include: path.join(PATHS.app, 'js') }),
  parts.lintCSS({ include: path.join(PATHS.app, 'scss') }),
  parts.createLoadingHTML(),
  parts.extractCSS({
    entry: PATHS.styles,
    use: [
      {
        loader: 'cache-loader'
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      },
      parts.autoprefix(),
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }
    ]
  }),
  parts.loadJavaScript({ include: path.join(PATHS.app, 'js') }),
  parts.copyStaticAssets([
    {
      from: {
        glob: 'images/**/*'
      },
      to: PATHS.build,
      context: PATHS.app
    },
    {
      from: {
        glob: 'fonts/**/*'
      },
      to: PATHS.build,
      context: PATHS.app
    }
  ])
]);

const productionConfig = merge([
  parts.clean(PATHS.build),
  {
    performance: {
      hints: 'warning', // 'error' or false are valid too
      maxEntrypointSize: 100000, // in bytes
      maxAssetSize: 450000 // in bytes
    },
    output: {
      chunkFilename: '[name].[chunkhash:8].js',
      filename: '[name].[chunkhash:8].js'
    },
    plugins: [new webpack.HashedModuleIdsPlugin()]
  },
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      // Run cssnano in safe mode to avoid
      // potentially unsafe transformations.
      safe: true
    }
  }),

  parts.extractBundles([
    {
      name: 'vendor',

      minChunks: ({ resource }) =>
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.js$/)
    }
  ])
]);

const developmentConfig = merge([
  {
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
    }
  }
]);

module.exports = env => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};
