module.exports = ({ env }) => {
  return {
    plugins: [
      require('css-mqpacker'),
      require('postcss-focus'),
      require('postcss-calc'),
      require('postcss-pseudoelements'),
      require('autoprefixer'),
      require('postcss-fixes'),
      require('postcss-font-display')({ display: 'swap', replace: false }),
      env === 'production' ? require('postcss-csso')({ restructure: false }) : undefined
    ]
  };
};
