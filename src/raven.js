import { init, captureException } from '@sentry/browser';

const ERROR_SIGNATURE = new RegExp('(Liquid|RenderFormTag|QueryGraphTag) Error');

init({
  dsn: 'https://7c0394dd2d324d6cae3cc42900ee1119@sentry.io/1303430',
  environment: window.__CONTEXT__.environment,
  captureUnhandledRejections: false,
  ignoreErrors: ['Script error.', /Blocked a frame with origin/],
  ignoreUrls: [
    /^chrome:\/\//i, // Chrome extensions
    /^resource:\/\//i // Firefox extensions
  ]
});

document.addEventListener('DOMContentLoaded', () => {
  const bodyText = document.body.textContent;

  if (ERROR_SIGNATURE.test(bodyText)) {
    captureException(new Error('Liquid/Form/GraphQL error found on the page', location.href));
  }
});
