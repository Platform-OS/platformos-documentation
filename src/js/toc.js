import { getHeadings, parseHeadings } from './helpers/headings';
import { stringToHtml } from './helpers/stringTohtml';

const getContent = () => document.querySelector('.content');
const getTocContainer = () => getContent().querySelector('.content__toc');
const getList = () => (getTocContainer() ? getTocContainer().querySelector('.content__toc-list') : false);
const emptyList = () => (getList() ? (getList().innerHTML = '') : false);

const generateTOCList = headings => {
  return headings
    .map(h => {
      return `<li class="heading-${h.type}">
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
  const container = getTocContainer();
  emptyList();

  if (container) {
    container.querySelector('.content__toc--list').innerHTML = tocHTML;
  } else {
    const tocDOM = stringToHtml(`<div class="content__toc">
      <h4>Table of contents</h4>
      <ul class="content__toc--list">
        ${tocHTML}
      </ul>
    </div>`);

    getContent().prepend(tocDOM);
  }
};

document.addEventListener('turbolinks:load', initialize);
document.addEventListener('toc:reinitialize', initialize);
