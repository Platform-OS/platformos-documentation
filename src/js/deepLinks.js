import AnchorJS from "anchor-js";

document.addEventListener("turbolinks:load", () => {
  const anchors = new AnchorJS();

  anchors.options = {
    visible: "hover",
    placement: "right"
  };
  anchors.add(".content > h2, .content > h3");
});
