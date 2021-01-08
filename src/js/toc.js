import { $q } from './helpers/dom';
import { parseHeadings, getHeadings } from './helpers/headings';

const getContainer = () => $q('[data-autotoc]');

const generateTOCList = (headings) => {
  return headings
    .map((h) => {
      return `<li>
        <a href="${h.href}">
          ${h.text}
        </a>
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

  const tocDOM = `<div class="hidden p-8 md:block bg-pos-page-bg table-of-content">
      <h4 class="mb-4 text-lg">On this page</h4>
      <ul class="pl-0 list-none">${tocHTML}</ul>
    </div>`;

  container.innerHTML = tocDOM;
};

initialize();
