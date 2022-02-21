module.exports = () => {
  const prod = process.env.NODE_ENV === 'production';

  return {
    plugins: [
      require('postcss-import')(),
      require('autoprefixer')(),
      require('tailwindcss')()
    ]
  };
};
