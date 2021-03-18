const cssnano = require('cssnano')({
  'safe': true,
  'calc': false // calc is no longer necessary, as it is already done by postcss-fixes due to precision rounding reasons
})

module.exports = () => {
  const prod = process.env.NODE_ENV === 'production';

  return {
    plugins: [
      require('postcss-fixes')(),
      require('postcss-import')(),
      require('autoprefixer')(),
      require('@tailwindcss/jit')(),
      prod ? cssnano : undefined
    ]
  };
};
