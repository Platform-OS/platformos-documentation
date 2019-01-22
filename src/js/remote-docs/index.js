import templates from './templates';

const appVersion = () => document.querySelector('body').dataset.version;

const ROOT_URL = 'https://deidcfp1yn7c2.cloudfront.net/platform_docs';

const docsTypes = {
  portal: 'https://portal.apps.near-me.com/api_doc.json',
  filters: `${ROOT_URL}/${appVersion()}/filters.json`,
  tags: `${ROOT_URL}/${appVersion()}/tags.json`
};

import(/* webpackChunkName: "vendor" */ 'ejs/ejs.min').then(ejs => {
  const container = () => document.querySelector('[data-remote-docs-content]');
  if (!container()) {
    return false;
  }

  const docsType = container().dataset.remoteDocsContent;
  const url = docsTypes[docsType];
  const template = templates[docsType];

  const initialize = () => {
    fetch(url)
      .then(res => res.json())
      .then(items => ejs.render(template, { items }))
      .then(html => (container().innerHTML = html))
      .then(() => document.dispatchEvent(new CustomEvent('prism:reinitialize')))
      .then(() => document.dispatchEvent(new CustomEvent('deeplinks:reinitialize')))
      .catch(console.log);
  };

  document.addEventListener('turbolinks:load', initialize);
  initialize();
});
