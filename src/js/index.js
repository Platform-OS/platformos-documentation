import '../scss/app.scss';

/* Navigation */
(function() {
  let nav = document.querySelector('select.navigation-select');
  if (!nav) {
    return;
  }

  nav.addEventListener('change', () => {
    window.location = nav.value;
  });
})();
