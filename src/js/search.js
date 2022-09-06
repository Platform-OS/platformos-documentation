import 'docsearch.js/dist/cdn/docsearch.css';
import '../css/overrides/docsearch.css';

import docsearch from 'docsearch.js';

docsearch({
  appId: 'DS6I5IN4HR',
  apiKey: '2c5cfbdbf85e1dfb7c8d01f1ee6dc5cc',
  indexName: 'platformos',
  inputSelector: '.search--input',
  algoliaOptions: {
    hitsPerPage: 8,
  },
  debug: false
});