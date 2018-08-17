const externalLinks = [...document.querySelectorAll('a[href^="http"]')];

if (externalLinks.length) {
  externalLinks.map(link => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "external noopener");
  });
}
