const widgetNav = () => {
  $(".sub-menu").each(function() {
    $(this)
      .parent()
      .addClass("hasSubmenu")
      .append('<i class="fas fa-chevron-up"></i>');
  });

  $(".widget--nav li").on("click", "a", expandMenu);
};

const expandMenu = function(e) {
  var $menu_el = $(this);
  var $parent = $menu_el.parent();
  var $sub_menu = $parent.children(".sub-menu");

  if ($sub_menu.length && !$sub_menu.is(":visible")) {
    e.preventDefault();

    $parent
      .toggleClass("expanded")
      .children(".sub-menu")
      .slideDown();

    $parent
      .siblings()
      .removeClass("expanded")
      .children(".sub-menu")
      .slideUp();
  }
 }
export default widgetNav;
