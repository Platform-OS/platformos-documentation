import { init, captureException } from "@sentry/browser";

init({
  dsn: "https://7c0394dd2d324d6cae3cc42900ee1119@sentry.io/1303430",
  environment: window.__CONTEXT__.environment,
  captureUnhandledRejections: false,
  ignoreErrors: ["Script error.", /Blocked a frame with origin/],
  ignoreUrls: [
    /^chrome:\/\//i, // Chrome extensions
    /^resource:\/\//i // Firefox extensions
  ]
});

document.addEventListener("DOMContentLoaded", () => {
  if (document.body.innerHTML.indexOf("Liquid Error") > -1) {
    captureException(new Error("Liquid Error found on the page", location.href));
  }
});
