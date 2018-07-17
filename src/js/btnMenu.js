const btnMenu = () => {
  $(".btn-menu").on("click", function(e) {
    e.preventDefault();

    $(this).toggleClass("active");

    $(".nav").slideToggle();
  });
};

export default btnMenu;
