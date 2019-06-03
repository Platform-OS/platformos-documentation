const parseHeadings = headings => {
  return headings.map(heading => {
    return {
      href: `#${heading.id}`,
      text: heading.textContent.trim()
    };
  });
};

export { parseHeadings };
