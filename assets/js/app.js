$(function () {
  $('.o-menu').on('click', function() {
    $(this).toggleClass('is-active');
    $('.menu-link').toggleClass('is-active');
    $('body').addClass('no_scroll');
  });


  $('.c-menu').on('click', function() {
    $(this).toggleClass('is-active');
    $('.menu-link').toggleClass('is-active');
    $('body').removeClass('no_scroll');
  });
});