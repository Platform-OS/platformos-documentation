import './redesign.scss';

import { $q } from './js/helpers/dom';

import './js/redesign/sidebarMenu';

if ($q('code[class*="language-"]')) {
  import(/* webpackChunkName: "syntaxHighlighting" */ './js/syntaxHighlighting').then(m => m.default());
}

// import './js/externalLinks';
// import './js/toc';
// import './js/autosteps';
