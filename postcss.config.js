const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./app/views/**/*.liquid', './src/**/*.js'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const csso = require('postcss-csso')({ comments: false });

module.exports = () => {
  const prod = process.env.NODE_ENV === 'production';
  return {
    plugins: [
      require('postcss-fixes'),
      require('postcss-import'),
      require('postcss-nested'),
      require('tailwindcss'),
      require('autoprefixer'),
      prod ? purgecss : undefined,
      prod ? csso : undefined // keep csso after purgecss, or it will break
    ]
  };
};
