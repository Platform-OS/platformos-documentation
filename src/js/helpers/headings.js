const getHeadings = () => [...document.querySelectorAll('.content h2[id]')] || [];

const parseHeadings = headings => {
  return headings.map(heading => {
    return {
      href: `#${heading.id}`,
      text: heading.textContent
    };
  });
};

export { getHeadings, parseHeadings };
