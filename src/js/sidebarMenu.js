import MetisMenu from 'metismenujs';

document.addEventListener("turbolinks:load", () => {
  if (document.querySelector('.sidebar-menu') ) {
    new MetisMenu('.sidebar-menu');
  }
});
