const parseHeadings = headings => {
  return headings.map(heading => {
    return {
      href: `#${heading.id}`,
      text: heading.childNodes[1].textContent.trim()
    };
  });
};

export { parseHeadings };
