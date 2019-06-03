import templates from './templates';

const container = () => document.querySelector('[data-remote-docs-content]');

import(/* webpackChunkName: "vendor" */ 'ejs/ejs.min').then(ejs => {
  const initialize = () => {
    if (!container()) {
      return false;
    }

    const docsType = container().dataset.remoteDocsContent;
    const url = container().dataset.remoteDocsUrl;
    const template = templates[docsType];

    fetch(url)
      .then(res => res.json())
      .then(items => ejs.render(template, { items })) // experiment with async: true
      .then(html => (container().innerHTML = html))
      .catch(console.log);
  };

  initialize();
});
