const tables = () => {
  $(".table").each(function() {
    const $this = $(this);

    if ($this.height() >= 390) {
      $this.addClass("toggled");
    }
  });

  $(".table-code").each(function() {
    const $this = $(this);

    if ($this.height() >= 290) {
      $this.addClass("long");
    }
  });

  $(".js-expand").on("click", function(e) {
    e.preventDefault();

    $(this)
      .parents(".table, .table-code")
      .toggleClass("toggled");
  });
};

export default tables;
