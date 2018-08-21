document.addEventListener("turbolinks:load", () => {
  const viewportSize = document.body.dataset.viewportSize;
  const content = document.querySelector("section.content");

  if (content.scrollIntoView && (viewportSize === "xs" || viewportSize === "sm")) {
    content.scrollIntoView();
  }
});
