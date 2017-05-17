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
});
