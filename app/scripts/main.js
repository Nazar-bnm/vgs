$(document).ready(function() {
  $('.panel-collapse').on('show.bs.collapse', function () {
    console.log('open');
    $(this).parents('.card_accordion').addClass('active dropup');
    $(this).parents('.card_accordion').find('.fa').removeClass('fa-angle-down');
    $(this).parents('.card_accordion').find('.fa').addClass('fa-angle-up');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    console.log('hide');
    $(this).parents('.card_accordion').removeClass('active dropup');
    $(this).parents('.card_accordion').find('.fa').removeClass('fa-angle-up');
    $(this).parents('.card_accordion').find('.fa').addClass('fa-angle-down');
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 180) {
      $('.nav-menu').addClass('nav-menu-fixed');
      $('.header').addClass('gradient-bg');
    } else {
      $('.nav-menu').removeClass('nav-menu-fixed');
      $('.header').removeClass('gradient-bg');
    }
  });

  $('.nav-link').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 70
    }, 500);
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  })
});
