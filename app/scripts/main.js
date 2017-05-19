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
    // height from top page to element
    var section1Height = $('#section-1').offset().top - 150;
    var section2Height = $('#section-2').offset().top - 150;
    var section3Height = $('#section-3').offset().top - 150;
    var section4Height = $('#section-4').offset().top - 150;
    var section5Height = $('#section-5').offset().top - 150;
    var section6Height = $('#section-6').offset().top - 150;

    // fixed menu and header
    if (scroll > 180) {
      $('.nav-menu').addClass('nav-menu-fixed');
      $('.header').addClass('gradient-bg');
    } else {
      $('.nav-menu').removeClass('nav-menu-fixed');
      $('.header').removeClass('gradient-bg');
    }

    // add class to active link
    if (scroll < section2Height) {
      $('.nav-link').removeClass('active');
      $('#nav-link-1').addClass('active');
    } else if (scroll > section2Height && scroll < section3Height) {
      $('.nav-link').removeClass('active');
      $('#nav-link-2').addClass('active');
    } else if (scroll > section3Height && scroll < section4Height) {
      $('.nav-link').removeClass('active');
      $('#nav-link-3').addClass('active');
    } else if (scroll > section4Height && scroll < section5Height) {
      $('.nav-link').removeClass('active');
      $('#nav-link-4').addClass('active');
    } else if (scroll > section5Height && scroll < section6Height) {
      $('.nav-link').removeClass('active');
      $('#nav-link-5').addClass('active');
    }

    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('.nav-link').removeClass('active');
      $('#nav-link-6').addClass('active');
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
