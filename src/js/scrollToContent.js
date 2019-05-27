const initialize = () => {
  if (location.hash.indexOf('#') !== -1) {
    return false; // let deep links do its thing
  }

  const viewportSize = document.body.dataset.viewportSize;
  const content = document.querySelector('section.content');

  if (content && content.scrollIntoView && (viewportSize === 'xs' || viewportSize === 'sm')) {
    content.scrollIntoView();
  }
};

initialize();
document.addEventListener('turbolinks:load', initialize);
