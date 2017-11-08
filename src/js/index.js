import '../scss/app.scss';

import './modules/navigation';

import anchorJS from 'anchor-js';
const anchors = new anchorJS();
anchors.options = {
  placement: 'left',
  icon: '#'
};
anchors.add('main > article > h2');
