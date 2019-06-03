import AnchorJS from 'anchor-js';

let anchors = new AnchorJS();

anchors.options = {
  visible: 'hover',
  placement: 'left'
}

anchors.add('.content__main h2, .content__main h3');
