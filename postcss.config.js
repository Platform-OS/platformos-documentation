// Todo: Investigate DropCSS (maybe write postcss-plugin)
// https://github.com/leeoniya/dropcss
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['app/views/**/*.liquid', 'src/js/**/*.js'],
  css: ['app/assets/**/app.css'],
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
      require('autoprefixer'),
      require('tailwindcss'),
      prod ? purgecss : undefined,
      prod ? csso : undefined // keep csso after purgecss, or it will break
    ]
  };
};
