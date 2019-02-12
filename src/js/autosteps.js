import { getHeadings, parseHeadings } from './helpers/headings';

const getContainer = () => document.querySelector('[data-autosteps]');

const generateSteps = headings => {
  return headings
    .map(h => {
      return `<li>
        <a href="${h.href}" data-turbolinks="false">${h.text}</a>
      </li>`;
    })
    .join('');
};

const initialize = () => {
  const container = getContainer();
  const stepsHeadings = getHeadings().filter(heading => /^Step \d+:/.test(heading.textContent));

  if (!container || stepsHeadings.length < 2) {
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

document.addEventListener('turbolinks:load', initialize);
document.addEventListener('autosteps:reinitialize', initialize);
