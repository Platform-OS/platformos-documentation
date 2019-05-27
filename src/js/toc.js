import { $q, $qa } from './helpers/dom';
import { parseHeadings } from './helpers/headings';

// TODO: Extract getHeadings to helpers/headings

const getContainer = () => $q('[data-autotoc]');
const getHeadings = () => $qa('.content__main h2[id]');

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
  const container = getContainer();
  const headings = getHeadings();

  if (!container || headings.length < 2) {
    return;
  }

  const tocHTML = generateTOCList(parseHeadings(headings));

  const tocDOM = `<div class="content__aside">
      <h4>On this page</h4>
      <ul>${tocHTML}</ul>
    </div>`;

  getContainer().innerHTML = tocDOM;
};

initialize();

document.addEventListener('turbolinks:load', initialize);
document.addEventListener('toc:reinitialize', initialize);
