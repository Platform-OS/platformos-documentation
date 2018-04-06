const path = require("path");
const glob = require("glob");
const merge = require("webpack-merge");
const parts = require("./_webpack/webpack.parts");
const webpack = require("webpack");

const PATHS = {
  app: path.join(__dirname, "src"),
  build: path.join(__dirname, "assets"),
  styles: glob.sync(__dirname, "src", "scss", "**/*")
};

const commonConfig = merge([
  {
    entry: {
      app: path.join(PATHS.app, "js")
    },
    output: {
      path: PATHS.build,
      filename: "[name].js",
      publicPath: "/assets/"
    }
  },
  parts.createLoadingHTML(),
  parts.extractCSS({
    entry: PATHS.styles,
    use: [
      "cache-loader",
      "css-loader?minimize=true",
      {
        loader: "postcss-loader",
        options: {
          plugins: [require("autoprefixer")()]
        }
      },
      "sass-loader"
    ]
  }),
  parts.loadJavaScript({ include: path.join(PATHS.app, "js") }),
  parts.minifyJavaScript()
]);

const productionConfig = merge([
  parts.clean(["*.js", "*.css"]),
  {
    output: {
      chunkFilename: "[name].[chunkhash:8].js",
      filename: "[name].[chunkhash:8].js"
    },
    plugins: [new webpack.HashedModuleIdsPlugin()]
  },
  parts.extractBundles([
    {
      name: "vendor",
      minChunks: ({ resource }) => resource && resource.indexOf("node_modules") >= 0 && resource.match(/\.js$/)
    }
  ])
]);

module.exports = env => {
  if (env === "production") {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, {});
};
