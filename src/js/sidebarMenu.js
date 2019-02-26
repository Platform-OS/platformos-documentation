import MetisMenu from 'metismenujs';
import getParentsUntil from './helpers/getParentsUntil';

const getActiveLink = ({ menu, path }) => menu.querySelector(`a[href="${path}"]`);

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
  const path = location.pathname;
  const activeLink = getActiveLink({ menu, path });

  new MetisMenu('.sidebar-menu');

  if (!menu || !activeLink) {
    return;
  }

  markActiveParents(activeLink);
  markActiveLink(activeLink);
};

document.addEventListener('turbolinks:load', initialize);
