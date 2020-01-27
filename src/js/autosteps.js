import { $q, $qa } from './helpers/dom';
import { parseHeadings } from './helpers/headings';

const isStep = h => /^Step \d+:/.test(h.textContent);
const getContainer = () => $q('[data-autosteps]');
const getSteps = () => {
  const headings = $qa('.content h3 span');
  return headings.filter(isStep);
};

const generateSteps = headings => {
  return headings
    .map(h => {
      return `<li>
        <a href="${h.href}">${h.text}</a>
      </li>`;
    })
    .join('');
};

const initialize = () => {
  const container = getContainer();
  const stepsHeadings = getSteps();

  if (!container || stepsHeadings.length < 1) {
    return;
  }

  const stepsList = generateSteps(parseHeadings(stepsHeadings));
  const stepsHtml = `
    <ul class="content__autosteps">
      ${stepsList}
    </ul>
  `;

  container.innerHTML = stepsHtml;
};

initialize();