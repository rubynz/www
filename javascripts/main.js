/*global $*/

$(document).ready(function () {
  mobileNav();
});

function mobileNav () {
  var $sidebar = $('aside.sidebar');

  $('.mobile-menu').click(function () {
    $sidebar.addClass('active');
    $sidebar.show(500);
  });

  $('.inner-container').click(function (event) {
    if (!$sidebar.hasClass('active')) { return; }
    if ($(event.target).is('.menu') || $(event.target).parent().is('.menu')) { return; }

    $('aside.sidebar').hide(500);
    $('aside.sidebar').removeClass('active');
  });
}
