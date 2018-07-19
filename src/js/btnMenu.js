const btnMenu = () => {
  $(".btn-menu").on("click", function(e) {
    e.preventDefault();

    $(this).toggleClass("active");

    $(".nav").slideToggle(100);
  });
};

export default btnMenu;
