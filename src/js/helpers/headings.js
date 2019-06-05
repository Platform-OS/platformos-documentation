import { $qa } from '../helpers/dom';

const parseHeadings = headings => {
  return headings.map(heading => {
    return {
      href: `#${heading.id}`,
      text: heading.textContent.trim()
    };
  });
};

const getHeadings = () => $qa('.content__main h2[id]');

export { parseHeadings, getHeadings };
