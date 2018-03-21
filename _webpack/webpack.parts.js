const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BabiliPlugin = require("babili-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cssnano = require("cssnano");
const InlineChunkWebpackPlugin = require("html-webpack-inline-chunk-plugin");

exports.createLoadingHTML = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: path.resolve(__dirname, "..", "_layouts", "default.html"),
      template: path.resolve(__dirname, "..", "_webpack", "template.html")
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
});

exports.autoprefix = () => ({
  loader: "postcss-loader",
  options: {
    plugins: () => [require("autoprefixer")()]
  }
});

exports.loadJavaScript = ({ include, exclude }) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        loader: "babel-loader",
        options: {
          // Enable caching for improved performance during
          // development.
          // It uses default OS directory by default. If you need
          // something more custom, pass a path to it.
          // I.e., { cacheDirectory: '<path>' }
          cacheDirectory: true
        }
      }
    ]
  }
});

exports.extractCSS = ({ entry, use }) => {
  // Output extracted CSS to a file
  const plugin = new ExtractTextPlugin({
    filename: "[name].[contenthash:8].css",
    allChunks: true
  });

  return {
    module: {
      rules: [
        {
          include: [entry],
          test: /\.scss$/,

          use: plugin.extract({
            use,
            fallback: {
              loader: "style-loader"
            }
          })
        }
      ]
    },
    plugins: [plugin]
  };
};

exports.createManifest = () => ({
  plugins: [
    new InlineChunkWebpackPlugin({
      inlineChunks: ["manifest"]
    })
  ]
});

exports.extractBundles = bundles => ({
  plugins: bundles.map(bundle => new webpack.optimize.CommonsChunkPlugin(bundle))
});

exports.clean = paths => ({
  plugins: [
    new CleanWebpackPlugin(paths, {
      root: path.resolve(__dirname, "..", "assets")
    })
  ]
});

exports.copyStaticAssets = options => ({
  plugins: [new CopyWebpackPlugin(options)]
});

exports.minifyJavaScript = () => ({
  plugins: [new BabiliPlugin()]
});

exports.minifyCSS = ({ options }) => ({
  plugins: [
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: options,
      canPrint: false
    })
  ]
});
