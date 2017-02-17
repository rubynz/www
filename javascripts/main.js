$(document).ready(function () {
  smoothScroll();
  mobileNav();
});

function smoothScroll () {
  $('.menu a').click(function (e) {
    e.preventDefault();

    var anchor = $(e.target).attr('href');

    $('html, body').animate({
      scrollTop: $(anchor).offset().top - 20
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
