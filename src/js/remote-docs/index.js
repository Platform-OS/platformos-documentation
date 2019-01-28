import templates from './templates';

const appVersion = () => document.querySelector('body').dataset.version;

const VERSION_URL = `https://deidcfp1yn7c2.cloudfront.net/platform_docs/${appVersion()}`;

const docsTypes = {
  portal: 'https://portal.apps.near-me.com/api_doc.json',
  filters: `${VERSION_URL}/filters.json`,
  tags: `${VERSION_URL}/tags.json`,
  'graphql-queries': `${VERSION_URL}/graphql/operations.json`,
  'graphql-mutations': `${VERSION_URL}/graphql/mutations.json`,
  'graphql-objects': `${VERSION_URL}/graphql/objects.json`,
  'graphql-scalars': `${VERSION_URL}/graphql/scalars.json`,
  'graphql-interfaces': `${VERSION_URL}/graphql/interfaces.json`,
  'graphql-enums': `${VERSION_URL}/graphql/enums.json`,
  'graphql-inputs': `${VERSION_URL}/graphql/inputs.json`
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
