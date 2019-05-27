import AnchorJS from 'anchor-js';
import scrollToHash from './scrollToHash';

let anchors;
const isMobile = document.body.dataset.viewportSize === 'xs';

const initialize = () => {
  anchors = new AnchorJS();
  anchors.options = {
    visible: isMobile ? 'always' : 'hover',
    placement: isMobile ? 'right' : 'left'
  };

  anchors.add('.content__main h2, .content__main h3');

  scrollToHash();
};


initialize();
document.addEventListener('turbolinks:load', initialize);
document.addEventListener('deeplinks:reinitialize', initialize);
