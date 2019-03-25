const scrollToElement = element => (element ? element.scrollIntoView() : undefined);

module.exports = (delay = 400) => {
  if (location.hash.indexOf('#') === -1) {
    return false;
  }

  const element = document.getElementById(decodeURIComponent(location.hash.substr(1)));

  setTimeout(() => {
    scrollToElement(element);
  }, delay);
};
