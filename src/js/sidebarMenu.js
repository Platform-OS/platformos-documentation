import MetisMenu from 'metismenujs';
import getParentsUntil from './helpers/getParentsUntil';

const MENU_CLASS = '.sidebar-menu';

const addActiveClasses = link => {
  link.closest('li').classList.add('last-level-nested', 'active');

  getParentsUntil(link, MENU_CLASS)
    .filter(el => el.matches('.sub-menu'))
    .map(el => el.classList.add('in'));

  getParentsUntil(link, MENU_CLASS)
    .filter(el => el.matches('.has-submenu'))
    .map(el => el.classList.add('active'));
};

const initialize = () => {
  const menu = document.querySelector(MENU_CLASS);

  if (!menu) {
    return;
  }

  new MetisMenu(MENU_CLASS);

  const activeLink = menu.querySelector(`a[href="${location.pathname}"]`);

  if (activeLink) {
    addActiveClasses(activeLink);
  }
};

document.addEventListener('turbolinks:load', initialize);
