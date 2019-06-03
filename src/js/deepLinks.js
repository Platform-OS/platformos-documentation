import AnchorJS from 'anchor-js';

// let anchors;
// const isMobile = document.body.dataset.viewportSize === 'xs';

const initialize = () => {
  let anchors = new AnchorJS();
  // anchors.options = {
  //   visible: isMobile ? 'always' : 'hover',
  //   placement: isMobile ? 'right' : 'left'
  // };

  anchors.options = {
    visible: 'hover',
    placement: 'left'
  }

  anchors.add('.content__main h2, .content__main h3');
};


initialize();
