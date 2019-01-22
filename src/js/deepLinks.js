import AnchorJS from 'anchor-js';
import scrollToHash from './scrollToHash';

let anchors;
const isMobile = document.body.dataset.viewportSize === 'xs';

const initializeDeepLinks = () => {
  anchors = new AnchorJS();
  anchors.options = {
    visible: isMobile ? 'always' : 'hover',
    placement: isMobile ? 'right' : 'left'
  };

  anchors.add('.content h2, .content h3');

  scrollToHash();
};

document.addEventListener('turbolinks:load', initializeDeepLinks);
document.addEventListener('deeplinks:reinitialize', initializeDeepLinks);
