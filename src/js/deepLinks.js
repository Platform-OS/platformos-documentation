import AnchorJS from "anchor-js";
const anchors = new AnchorJS();

anchors.options = {
  visible: "hover",
  placement: "right"
};

const scrollToHash = () => {
  if (location.hash.indexOf("#") === -1) {
    return false;
  }

  const element = document.querySelector(location.hash);

  // ugly, but anchor-js doesn't expose any info about when its initialized.
  // So: polling for anchors.elements array vs this.
  setTimeout(() => {
    element.scrollIntoView();
  }, 200);
};

document.addEventListener("turbolinks:load", scrollToHash);
document.addEventListener("DOMContentLoaded", () => {
  anchors.add(".content > h2, .content > h3");
});
