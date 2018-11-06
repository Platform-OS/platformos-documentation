import template from './template';

import(/* webpackChunkName: "vendor" */ 'ejs/ejs.min').then(() => {
  const DOCS_URL = location.search.split('=')[1] || 'https://portal.apps.near-me.com/api_doc.json';
  const placeholder = () => document.querySelector('[data-portal-api-docs="content"]');

  const initialize = () => {
    if (!placeholder()) {
      return false;
    }

    fetch(DOCS_URL)
      .then(res => res.json())
      .then(endpoints => ejs.render(template, { endpoints }))
      .then(html => (placeholder().innerHTML = html))
      .then(() => document.dispatchEvent(new CustomEvent('prism:reinitialize')))
      .catch(err => console.log);
  };

  document.addEventListener('turbolinks:load', initialize);
  initialize();
});
