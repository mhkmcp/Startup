$(document).ready(function () {
  $(".js-services").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });
  // MIXITUP PORTFOLIO
  var mixer = mixitup(".portfolio-container");
});
