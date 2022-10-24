import './app.css';

import { $q } from './js/helpers/dom';
import './js/externalLinks';

import(/* webpackChunkName: "search" */ './js/search');

import(/* webpackChunkName: "contentPages" */ './js/sidebarMenu');
import(/* webpackChunkName: "contentPages" */ './js/deepLinks');
import(/* webpackChunkName: "contentPages" */ './js/autosteps'); // this HAS to be after deepLinks
import(/* webpackChunkName: "contentPages" */ './js/toc');
import(/* webpackChunkName: "contentPages" */ './js/feedback');


if ($q('code[class*="language-"]')) {
  import(/* webpackChunkName: "syntaxHighlighting" */ './js/syntaxHighlighting');
}

if ($q('.graphql-navigation')) {
  import(/* webpackChunkName: "graphqlNavigation" */ './js/graphqlNavigation');
}
