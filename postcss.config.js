module.exports = () => {

  return {
    plugins: [
      require('postcss-import')(),
      require('autoprefixer')(),
      require('tailwindcss')()
    ]
  };
};
