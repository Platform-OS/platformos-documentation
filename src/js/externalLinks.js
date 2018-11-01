const externalLinks = () => [...document.querySelectorAll('a[href^="http"]')];

document.addEventListener("turbolinks:load", () => {
  if (externalLinks().length) {
    externalLinks().map(link => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "external noopener");
    });
  }
});
