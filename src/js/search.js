import 'docsearch.js/dist/cdn/docsearch.css';
import '../css/overrides/docsearch.css';
import docsearch from 'docsearch.js';

if(document.querySelector('.search--input')) {
  docsearch({
    appId: 'DS6I5IN4HR',
    apiKey: '2c5cfbdbf85e1dfb7c8d01f1ee6dc5cc',
    indexName: 'platformos',
    inputSelector: '.search--input',
    algoliaOptions: {
      hitsPerPage: 8,
    },
    debug: false,
    handleSelected: function (input, event, suggestion, datasetNumber, context) {
      if(context.selectionMethod == 'enterKey') {
        const allElements = document.querySelectorAll('.ds-dataset-1 .ds-suggestion');
        let index = 0;
        for(let i = 0; i < allElements.length; i++) {
          if(allElements[i].hasAttribute("aria-selected")) {
            index = i;
            break;
          }
        }
        if(index == 0) {
          location.href = '/search?query=' + document.querySelector('.search--input').value;
        } else {
          location.href = suggestion.url;
        }
      } else if(context.selectionMethod == 'click') {
        location.href = suggestion.url;
      }
    },
  });
}