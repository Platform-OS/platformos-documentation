const csso = require('postcss-csso')({ comments: false });

module.exports = () => {
  const prod = process.env.NODE_ENV === 'production';
  return {
    plugins: [
      require('postcss-fixes'),
      require('postcss-import'),
      require('postcss-nested'),
      require('autoprefixer'),
      require('tailwindcss'),
      prod ? csso : undefined // keep csso after purgecss, or it will break
    ]
  };
};
