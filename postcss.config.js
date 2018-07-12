const mqpacker = require("css-mqpacker");
const fixes = require("postcss-fixes");
const focus = require("postcss-focus");
const calc = require("postcss-calc");
const pseudoelements = require("postcss-pseudoelements");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");

module.exports = ({ env }) => {
  if (!env) {
    return {};
  }

  return {
    plugins: [
      mqpacker(),
      fixes(),
      focus(),
      calc(),
      pseudoelements(),
      autoprefixer(),
      csso({ restructure: false })
    ]
  };
};
