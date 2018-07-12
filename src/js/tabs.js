const tabs = () => {
  var activeTabClass = "current";

  $(".tabs__nav label").on("click", function(event) {
    event.preventDefault();

    var $tabLink = $(this);
    var $targetTab = $($tabLink.attr("data-href"));

    $tabLink.parents(".tabs").addClass("voted");

    $tabLink
      .parent()
      .parent()
      .add($targetTab)
      .addClass(activeTabClass)
      .siblings()
      .removeClass(activeTabClass);
  });
};

export default tabs;
