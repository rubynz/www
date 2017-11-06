/*global $*/

$(document).ready(function () {
  smoothScroll();
  mobileNav();
});

function smoothScroll () {
  var anchorPattern = /^#/;

  $('.menu a').click(function (e) {
    var href = $(e.target).attr('href');

    // Don't try and smooth scroll external links
    if (!anchorPattern.test(href)) {
      return true;
    }

    e.preventDefault();

    $('html, body').animate({
      scrollTop: $(href).offset().top - 20
    }, 300);
  });
}

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
