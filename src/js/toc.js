import { $q } from './helpers/dom';
import { parseHeadings, getHeadings } from './helpers/headings';

// TODO: Extract getHeadings to helpers/headings

const getContainer = () => $q('[data-autotoc]');

const generateTOCList = headings => {
  return headings
    .map(h => {
      return `<li>
        <a href="${h.href}">${h.text}</a>
      </li>`;
    })
    .join('');
};

const initialize = () => {
  const container = getContainer();
  const headings = getHeadings();

  if (!container || headings.length < 3) {
    return;
  }

  const tocHTML = generateTOCList(parseHeadings(headings));

  const tocDOM = `<div class="content__aside hidden md:block">
      <h4>On this page</h4>
      <ul>${tocHTML}</ul>
    </div>`;

  container.innerHTML = tocDOM;
};

initialize();
