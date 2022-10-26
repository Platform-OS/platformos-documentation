import { $qa } from './helpers/dom';

const generateAnchor = ({ id, text }) => {
  let anchor = document.createElement('a');

  anchor.innerHTML = `<span class="screen-reader-text">${text}</span><svg width="16" height="16"><use xlink:href="#link"></use></svg>`;
  anchor.href = `#${id}`;
  anchor.classList.add('permalink');

  return anchor;
};

const generateDeepLinks = ({ elements }) => {
  for (let el of elements) {
    if (el.id){
      const anchor = generateAnchor({ id: el.id, text: el.textContent });

      el.insertBefore(anchor, el.firstChild);
    }
  }
};

const initialize = () => {
  const headings = $qa('.content__main h2, .content__main h3');

  generateDeepLinks({ elements: headings });
};

initialize();
