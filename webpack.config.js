const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackRequireFrom = require("webpack-require-from");

const BUILD_DIR = path.join(
  __dirname,
  process.env.npm_package_config_build_dir
);

const isProduction = process.env.NODE_ENV === "production";

module.exports = () => {
  return {
    entry: {
      app: "./src/app",
      vendor: "./src/vendor"
    },
    output: {
      filename: "[name].js",
      chunkFilename: "[name].[chunkhash:3].js",
      publicPath: "",
      path: BUILD_DIR
    },
    devtool: false,
    bail: true,
    stats: {
      modules: false,
      hash: false,
      assetsSort: "!size",
      children: false
    },
    externals: {
      jquery: "window.jQuery",
      $: "window.jQuery"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader?retainLines=true&cacheDirectory"
        },
        {
          test: /(\.css|\.scss)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.gif$/,
          use: ["file-loader?name=[name].gif"]
        },
        {
          test: /\.(eot|ttf|otf|svg|woff(2))?$/,
          loader: "file-loader?name=fonts/[name].[ext]"
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[name].css"
      }),
      new WebpackRequireFrom({
        methodName: "__cdnUrl"
      })
    ],
    mode: isProduction ? "production" : "development"
  };
};
