import instantsearch from 'instantsearch.js';
import docsearch from 'docsearch.js';
import algoliasearch from 'algoliasearch';
import { searchBox, hits, pagination } from 'instantsearch.js/es/widgets';

if(document.querySelector('.search-result-pages-input')) {
  let initialRender = false;

  const search = instantsearch({
    searchClient: algoliasearch(
      'DS6I5IN4HR',
      '2c5cfbdbf85e1dfb7c8d01f1ee6dc5cc',
    ),
    attributesToRetrieve: ['*'],
    indexName: 'platformos',
    urlSync: true
  });

  search.addWidget(
    searchBox({
      container: '#search-page-input-container'
    })
  );

  search.addWidget(
    hits({
      container: '#search-page-hits',
      hitsPerPage: 10,
      templates: {
        item: document.getElementById('search-page-hit-template').innerHTML,
        empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
      }
    })
  );

  search.addWidget(
    pagination({
      container: '#search-page-pagination'
    })
  );

  search.on('render', function() {
    let param = document.querySelector('#search-page-query-parameter').value;

    if(!initialRender) {
      initialRender = true;

      if(param != '') {
        document.querySelector('#search-page-input-container input').value = param;
        search.helper.setQuery(param).search();
        document.querySelector('#search-page-real-hits').classList.remove('hidden');
        document.querySelector('#search-page-pagination').classList.remove('hidden');
      } else {
        document.querySelector('#search-page-real-hits').classList.add('hidden');
        document.querySelector('#search-page-pagination').classList.add('hidden');
      }
    }

    if(initialRender) param = document.querySelector('.ais-SearchBox-input').value;

    document.querySelector('#search-page-real-hits').innerHTML = document.querySelector('#search-page-hits').innerHTML;
  });

  search.start();

  document.querySelector('#search-page-input-container input').addEventListener('keyup', function() {
    if (document.querySelector('#search-page-input-container input').value.length > 0) {
      document.querySelector('#search-page-real-hits').classList.remove('hidden');
      document.querySelector('#search-page-pagination').classList.remove('hidden');
    } else {
      document.querySelector('#search-page-real-hits').classList.add('hidden');
      document.querySelector('#search-page-pagination').classList.add('hidden');
    }
  });
}