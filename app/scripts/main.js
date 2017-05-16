$(document).ready(function() {
  $('.panel-collapse').on('show.bs.collapse', function () {
    console.log('open');
    $(this).parents('.card_accordion').addClass('active dropup');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    console.log('hide');
    $(this).parents('.card_accordion').removeClass('active dropup');
  });
});
