import { getHeadings, parseHeadings } from './helpers/headings';

const getContainer = () => document.querySelector('[data-autotoc]');

const generateTOCList = headings => {
  return headings
    .map(h => {
      return `<li>
        <a href="${h.href}" data-turbolinks="false">${h.text}</a>
      </li>`;
    })
    .join('');
};

const initialize = () => {
  const headings = getHeadings();
  if (!headings) {
    return false;
  }

  const tocHTML = generateTOCList(parseHeadings(headings));

  const tocDOM = `<h4>On this page</h4>
    <ul>
      ${tocHTML}
    </ul>`;

  getContainer().innerHTML = tocDOM;
};

document.addEventListener('turbolinks:load', initialize);
document.addEventListener('toc:reinitialize', initialize);
