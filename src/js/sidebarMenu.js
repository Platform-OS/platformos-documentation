import { $qa, $q } from './helpers/dom';

const currentPath = location.pathname;

// Mark currently visited page
$qa(`.nav-sidebar a[href="${currentPath}"]`).map(a => a.classList.add('active'));

// Add "New!" to categories that have recently updated articles inside
const firstLevel = $qa('.nav-sidebar > ul > li:not(.topic-group):not(.active)');

for (let index in firstLevel) {
  const item = firstLevel[index];
  const newIndicator = $q('.new', item);
  const hasNew = $q('.submenu', item) && !!newIndicator;

  if (hasNew) {
    $q('a', item).appendChild(newIndicator.cloneNode(true));
    continue;
  }
}