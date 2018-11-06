const scrollToContent = () => {
  if (location.hash.indexOf('#') !== -1) {
    return false; // let deep links do its thing
  }

  const viewportSize = document.body.dataset.viewportSize;
  const content = document.querySelector('section.content');

  if (content.scrollIntoView && (viewportSize === 'xs' || viewportSize === 'sm')) {
    content.scrollIntoView();
  }
};

document.addEventListener('turbolinks:load', scrollToContent);

scrollToContent();
