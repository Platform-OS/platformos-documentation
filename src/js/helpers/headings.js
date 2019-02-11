const getHeadings = () => [...document.querySelectorAll('.content h2[id], .content h3[id]')] || [];

const parseHeadings = headings => {
  return headings.map(heading => {
    return {
      href: `#${heading.id}`,
      text: heading.textContent,
      type: heading.tagName.toLowerCase()
    };
  });
};

export { getHeadings, parseHeadings };
