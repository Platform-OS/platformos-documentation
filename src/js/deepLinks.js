import AnchorJS from 'anchor-js';
const anchors = new AnchorJS();

const isMobile = document.body.dataset.viewportSize === 'xs';
const scrollToElement = element => (element ? element.scrollIntoView() : undefined);

const scrollToHash = () => {
  if (location.hash.indexOf('#') === -1) {
    return false;
  }

  const element = document.querySelector(location.hash);
  setTimeout(() => {
    scrollToElement(element);
  }, 400);
};

document.addEventListener('turbolinks:load', () => {
  anchors.options = {
    visible: isMobile ? 'always' : 'hover',
    placement: isMobile ? 'right' : 'left'
  };

  anchors.add('.content > h2, .content > h3');
  scrollToHash();
});
