// Query find - find selector in parent, return element
const $q = (s, p = document) => p.querySelector(s);

// Query all in parent, return array
const $qa = (s, p = document) => Array.from(p.querySelectorAll(s));

export { $q, $qa };