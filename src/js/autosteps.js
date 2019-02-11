import { getHeadings, parseHeadings } from './helpers/headings';

const getContent = () => document.querySelector('[data-autosteps]');

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
  const container = getContent();
  const stepsHeadings = getHeadings().filter(heading => /^Step \d+:/.test(heading.textContent));

  if (!stepsHeadings || !container) {
    return false;
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
