import { $qa } from './helpers/dom';

const externalLinks = () => $qa('a[href^="http"]');

document.addEventListener('load', () => {
  if (externalLinks().length) {
    externalLinks().map(link => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'external noopener');
    });
  }
});
