import MetisMenu from 'metismenujs';
import getParentsUntil from './helpers/getParentsUntil';

const getActiveLink = ({ menu, path }) => menu.querySelector(`a[href="${path}"]`);

const markActiveLink = ({ menu, path }) => {
  const link = getActiveLink({ menu, path });

  link.closest('li').classList.add('last-level-nested', 'active');
};

const markActiveParents = ({ menu, path }) => {
  const link = getActiveLink({ menu, path });

  getParentsUntil(link, '.sidebar-menu')
    .filter(el => el.matches('.sub-menu'))
    .map(el => el.classList.add('in'));

  getParentsUntil(link, '.sidebar-menu')
    .filter(el => el.matches('.has-submenu'))
    .map(el => el.classList.add('active'));
};

const initialize = () => {
  const menu = document.querySelector('.sidebar-menu');
  const path = location.pathname;

  if (!menu) {
    return;
  }

  markActiveParents({ menu, path });
  markActiveLink({ menu, path });
  new MetisMenu('.sidebar-menu');
};

document.addEventListener('turbolinks:load', initialize);
