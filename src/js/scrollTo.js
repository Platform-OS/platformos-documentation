const scrollTo = () => {
  $(".js-scroll").on("click", function(e) {
    e.preventDefault();

    var section = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section).offset().top
      },
      2000
    );
  });
};

export default scrollTo;
