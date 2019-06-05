module.exports = () => {
  return {
    plugins: [
      require('css-mqpacker'),
      require('autoprefixer'),
      require('postcss-fixes')
    ]
  };
};
