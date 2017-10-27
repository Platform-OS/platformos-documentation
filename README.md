# Editing

##  Development

    bundle install && npm install
    
    npm start

## Build assets before commit if changed CSS/JS

    npm run build

## Linting 

You can lint your files with three commands. They will eventually become a part of CI

### Running ESLint

Configuration is located in `.eslintrs.json` and `.eslintignore files` . For rules description go to [ESLint documentation](http://eslint.org/docs/rules/)

    npm run lint:js

### Stylelint

Configuration is located in `.stylelintrc`. For rules description go to [Stylelint documentation](https://stylelint.io/user-guide/rules/)

    npm run lint:style

### HTML, links and more

There are several checks done using [HTML Proofer](https://github.com/gjtorikian/html-proofer). Most notable one is the broken links check, which will point out any broken links that may result from changes in URL structure or removing any sites.

    npm run lint:html
