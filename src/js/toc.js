const stringToHtml = s => {
  const el = document.createElement('div');
  el.innerHTML = s;
  return el.firstChild;
};

const getHeadings = () => [...document.querySelectorAll('.content h2[id], .content h3[id]')] || [];
const getContent = () => document.querySelector('.content');
const getTocContainer = () => getContent().querySelector('.content__toc');
const getList = () => (getTocContainer() ? getTocContainer().querySelector('.content__toc-list') : false);
const emptyList = () => (getList() ? (getList().innerHTML = '') : false);

const parseHeadings = headings => {
  return headings.map(heading => {
    return {
      href: `#${heading.id}`,
      text: heading.textContent,
      type: heading.tagName.toLowerCase()
    };
  });
};

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
