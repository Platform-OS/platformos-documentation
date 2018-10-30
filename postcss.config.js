module.exports = ({ env }) => {
  return {
    plugins: [
      require("css-mqpacker"),
      require("postcss-focus"),
      require("postcss-calc"),
      require("postcss-pseudoelements"),
      require("autoprefixer"),
      require("postcss-fixes"),
      env === "production" ? require("postcss-csso")({ restructure: false }) : undefined
    ]
  };
};
