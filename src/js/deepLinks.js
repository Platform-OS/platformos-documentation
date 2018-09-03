import AnchorJS from "anchor-js";
const anchors = new AnchorJS();

const isMobile = document.body.dataset.viewportSize === "xs";
const scrollToElement = element => (element ? element.scrollIntoView() : undefined);

const scrollToHash = () => {
  if (location.hash.indexOf("#") === -1) {
    return false;
  }

  try {
    const element = document.querySelector(location.hash);

    // ugly, but anchor-js doesn't expose any info about when its initialized.
    // So: polling for anchors.elements array vs this.
    setTimeout(() => {
      scrollToElement(element);
    }, 400);
  } catch (e) {
    // location.reload();
    // TODO: Customize yard generated titles to not include weirdness or else its throwing erors
  }
};

document.addEventListener("turbolinks:load", () => {
  anchors.options = {
    visible: isMobile ? "always" : "hover",
    placement: isMobile ? "right" : "left"
  };

  anchors.add(".content > h2, .content > h3");
  scrollToHash();
});
