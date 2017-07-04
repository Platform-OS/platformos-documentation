module.exports.closest = function(
  el: HTMLElement,
  selector: string,
  andSelf: boolean = true
): HTMLElement {
  let matchesSelector =
    el.matches ||
    el.webkitMatchesSelector ||
    el.mozMatchesSelector ||
    el.msMatchesSelector;

  if (andSelf && matchesSelector.call(el, selector)) {
    return el;
  }

  while (el) {
    if (matchesSelector.call(el, selector)) {
      break;
    }
    el = el.parentElement;
  }
  return el;
};

module.exports.findButton = function(
  selector: string,
  context: Document | HTMLElement = document
): HTMLButtonElement {
  let el = context.querySelector(selector);
  if (!(el instanceof HTMLButtonElement)) {
    throw new Error(`Unable to locate ${selector}`);
  }
  return el;
};

module.exports.findElement = function(
  selector: string,
  context: Document | HTMLElement = document
): HTMLElement {
  let el = context.querySelector(selector);
  if (!(el instanceof HTMLElement)) {
    throw new Error(`Unable to locate ${selector}`);
  }
  return el;
};

module.exports.findInput = function(
  selector: string,
  context: Document | HTMLElement = document
): HTMLInputElement {
  let el = context.querySelector(selector);
  if (!(el instanceof HTMLInputElement)) {
    throw new Error(`Unable to locate ${selector}`);
  }
  return el;
};

module.exports.findSelect = function(
  selector: string,
  context: Document | HTMLElement = document
): HTMLSelectElement {
  let el = context.querySelector(selector);
  if (!(el instanceof HTMLSelectElement)) {
    throw new Error(`Unable to locate ${selector}`);
  }
  return el;
};

module.exports.findTextArea = function(
  selector: string,
  context: Document | HTMLElement = document
): HTMLTextAreaElement {
  let el = context.querySelector(selector);
  if (!(el instanceof HTMLTextAreaElement)) {
    throw new Error(`Unable to locate ${selector}`);
  }
  return el;
};

module.exports.findForm = function(
  selector: string,
  context: Document | HTMLElement = document
): HTMLFormElement {
  let el = context.querySelector(selector);
  if (!(el instanceof HTMLFormElement)) {
    throw new Error(`Unable to locate ${selector}`);
  }
  return el;
};

module.exports.findMeta = function(
  selector: string,
  context: Document | HTMLElement = document
): HTMLMetaElement {
  let el = context.querySelector(selector);
  if (!(el instanceof HTMLMetaElement)) {
    throw new Error(`Unable to locate ${selector}`);
  }
  return el;
};
