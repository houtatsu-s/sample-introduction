$(function () {
  $('.o-menu').on('click', function() {
    $(this).toggleClass('is-active');
    $('.menu-link').toggleClass('is-active');
  });


  $('.c-menu').on('click', function() {
    $(this).toggleClass('is-active');
    $('.menu-link').toggleClass('is-active');
  });
});