import { $qa } from './helpers/dom';
import urlify from './helpers/urlify';

const alreadyLinked = el => el.querySelectorAll('a.anchorjs-link').length > 0;

const generateAnchor = href => {
  let anchor = document.createElement('a');

  anchor.innerHTML = '<svg width="16" height="16"><use xlink:href="#link"></use></svg>';
  anchor.className = 'anchorjs-link';
  anchor.href = `#${href}`;
  return anchor;
};

const generateDeepLinks = ({ elements }) => {
  for (let el of elements) {
    // Avoid empty elements - markdown sometimes creates them
    // Avoid elements with IDs already in place. Lets not override those
    // If there is already anchorjs inside of it, lets not interfere
    if (!el.textContent.trim() || el.id || alreadyLinked(el)) {
      continue;
    }

    const tidyID = urlify(el.textContent);
    const anchor = generateAnchor(tidyID);

    el.id = tidyID;
    el.classList.add('anchorjs-element');
    el.insertBefore(anchor, el.firstChild);
  }
};

const initialize = () => {
  const headings = $qa('.content__main h2, .content__main h3');

  generateDeepLinks({ elements: headings });
};

initialize();
