import Turbolinks from 'turbolinks';
import './app.scss';

import './js/sidebarMenu';
import './js/syntaxHighlighting';
import './js/externalLinks';
import './js/viewportClasses';
import './js/deepLinks';
import './js/scrollToContent';
import './js/feedback';
import './js/remote-docs';
import './js/toc';
import './js/autosteps';

document.addEventListener('turbolinks:request-start', e => {
  let xhr = e.data.xhr;
  // This makes server set context.is_xhr to true
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
});

Turbolinks.start();
