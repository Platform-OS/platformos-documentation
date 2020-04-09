import(/* webpackChunkName: "search" */ 'docsearch.js/dist/cdn/docsearch.css');
import(/* webpackChunkName: "search" */ '../css/overrides/docsearch.css');

import docsearch from 'docsearch.js';

docsearch({
  apiKey: '76cf08e1e1a7015f417f8a3e86b70c8f',
  indexName: 'platformos',
  inputSelector: '.search--input',
  algoliaOptions: {
    hitsPerPage: 8,
  },
  debug: false
});
