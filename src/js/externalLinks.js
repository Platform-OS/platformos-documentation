import { $qa } from './helpers/dom';

const externalLinks = () => $qa('a[href^="http"]');

if (externalLinks().length > 0) {
  externalLinks().map((link) => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'external noopener');
    link.setAttribute('onclick', 'return confirm("This link will open in new tab.")');
  });
}
