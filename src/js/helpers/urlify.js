/*
  Tuned https://github.com/bryanbraun/anchorjs/blob/master/anchor.js#L236-L258
*/
const urlify = text => {
  // Regex for finding the non-safe URL characters (many need escaping): & +$,:;=?@"#{}|^~[`%!'<>]./()*\ (newlines, tabs, backspace, & vertical tabs)
  var nonsafeChars = /[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g,
    urlText;

  // Example string:              // " ⚡⚡ Don't forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
  urlText = text
    .trim()                       // "⚡⚡ Don't forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
    .replace(/\'/gi, '')          // "⚡⚡ Dont forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
    .replace(nonsafeChars, '-')   // "⚡⚡-Dont-forget--URL-fragments-should-be-i18n-friendly--hyphenated--short--and-clean-"
    .replace(/-{2,}/g, '-')       // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated-short-and-clean-"
    .replace(/^-+|-+$/gm, '')     // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated-short-and-clean"
    .toLowerCase();               // "⚡⚡-dont-forget-url-fragments-should-be-i18n-friendly-hyphenated-short-and-clean"

  return urlText;
};

export default urlify;
