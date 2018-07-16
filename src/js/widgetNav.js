const widgetNav = () => {
  $(".sidebar .sub-menu").each(function() {
    $(this)
      .parent()
      .addClass("hasSubmenu")
      .append('<i class="fas fa-chevron-up"></i>');
  });

  $(".widget--nav li").on("click", "a:first", expandMenu);
};

const expandMenu = function(e) {
  var $menu_el = $(this);
  var $parent = $menu_el.parent();
  var $sub_menu = $parent.children(".sub-menu");


  if ($sub_menu.length) {
    e.preventDefault();

    if ($sub_menu.is(":visible")) {
      $parent
        .removeClass("expanded")
        .children(".sub-menu")
        .slideUp();

     } else {

      $parent
        .addClass("expanded")
        .children(".sub-menu")
        .slideDown();
    }

    $parent
      .siblings()
      .removeClass("expanded")
      .children(".sub-menu")
      .slideUp();
  }
};
export default widgetNav;
