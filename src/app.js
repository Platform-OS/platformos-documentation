import './app.css';

import { $q } from './js/helpers/dom';

import './js/sidebarMenu';
import './js/deepLinks';
import './js/autosteps'; // this HAS to be after deepLinks
import './js/toc';
import './js/externalLinks';
import './js/feedback';

import(/* webpackChunkName: "search" */ './js/search');

if ($q('code[class*="language-"]')) {
  import(/* webpackChunkName: "syntaxHighlighting" */ './js/syntaxHighlighting');
}

