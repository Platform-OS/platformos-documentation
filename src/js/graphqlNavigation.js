import { $q, $qa } from './helpers/dom';

const sections = $qa('.graphql-navigation');

sections.forEach(section => {

  section.addEventListener('click', (e) => {
    if (!e.target.matches('button')) {
      return;
    }

    e.target.parentElement.classList.toggle('active');

    const span = $q('span', e.target);

    if (span.textContent === '+') {
      span.textContent = '–';
    } else {
      span.textContent = '+';
    }
  });

});