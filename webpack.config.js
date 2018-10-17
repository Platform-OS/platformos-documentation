const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackRequireFrom = require("webpack-require-from");

const BUILD_DIR = path.join(__dirname, process.env.npm_package_config_build_dir);

const production = process.env.NODE_ENV === "production";

const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[name].css"
  }),
  new WebpackRequireFrom({
    variableName: "window.__CONTEXT__.cdnUrl"
  })
];

if (production) {
  plugins.push(
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
      include: ["app.js"]
    })
  );
}

const config = {
  entry: {
    app: "./src/app",
    raven: "./src/raven",
    webfonts: "./src/webfonts"
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].[chunkhash:3].js",
    publicPath: "",
    path: BUILD_DIR
  },
  bail: true,
  stats: {
    modules: false,
    hash: false,
    assetsSort: "!size",
    children: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader?retainLines=true&cacheDirectory"
      },
      {
        test: /(\.css|\.scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader?url=false", "postcss-loader", "sass-loader"]
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
  plugins: plugins,
  mode: production ? "production" : "development"
};

module.exports = config;
