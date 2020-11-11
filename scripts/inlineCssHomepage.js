#!/usr/bin/env node

const { writeFileSync, readFileSync } = require('fs');

const css = readFileSync('../app/assets/app.css').toString();
const fileContent = css.replace(/\.\/fonts\/Gotham/g, '/assets/fonts/Gotham');
writeFileSync('../app/views/partials/layouts/head/inline-css.liquid', fileContent);

console.log('CSS inlined into inline-css.liquid');