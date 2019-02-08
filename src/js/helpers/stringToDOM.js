const stringToDOM = s => {
  const el = document.createElement('div');
  el.innerHTML = s;
  return el.firstChild;
};

export { stringToDOM };
