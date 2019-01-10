const scrollToElement = element => (element ? element.scrollIntoView() : undefined);

module.exports = (delay = 400) => {
  if (location.hash.indexOf('#') === -1) {
    return false;
  }

  const element = document.querySelector(decodeURIComponent(location.hash));

  setTimeout(() => {
    scrollToElement(element);
  }, delay);
};
