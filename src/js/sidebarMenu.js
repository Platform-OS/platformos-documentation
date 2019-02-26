import MetisMenu from 'metismenujs';
import getParentsUntil from './helpers/getParentsUntil';

const getActiveLink = menu => menu.querySelector(`a[href="${location.pathname}"]`);

const markActiveLink = activeLink => {
  activeLink.closest('li').classList.add('last-level-nested', 'active');
};

const markActiveParents = activeLink => {
  getParentsUntil(activeLink, '.sidebar-menu')
    .filter(el => el.matches('.sub-menu'))
    .map(el => el.classList.add('in'));

  getParentsUntil(activeLink, '.sidebar-menu')
    .filter(el => el.matches('.has-submenu'))
    .map(el => el.classList.add('active'));
};

const initialize = () => {
  const menu = document.querySelector('.sidebar-menu');

  if (!menu) {
    return;
  }

  new MetisMenu('.sidebar-menu');

  const activeLink = getActiveLink(menu);

  if (activeLink) {
    markActiveParents(activeLink);
    markActiveLink(activeLink);
  }
};

document.addEventListener('turbolinks:load', initialize);
