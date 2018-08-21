const breakpointsSizes = {
  0: "xs",
  576: "sm",
  768: "md",
  992: "lg",
  1200: "xl"
};

document.addEventListener("turbolinks:load", () => {
  const breakpoint = Object.keys(breakpointsSizes)
    .filter(breakpointWidth => window.innerWidth > Number(breakpointWidth))
    .pop();

  const currentBreakpoint = breakpointsSizes[breakpoint];

  if (document.body.dataset.viewportSize != currentBreakpoint) {
    document.body.dataset.viewportSize = currentBreakpoint;
  }
});
