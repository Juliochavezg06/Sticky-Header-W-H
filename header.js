$(document).ready(function () {

  //   header_color_static = $('.header').data('color-static');
  //   header_color_fixed = $('.header').data('color-fixed');
  header_color_static = '#fff0';
  header_color_fixed = '#312C74';

  updateColorHeader();
  $(window).bind('scroll', function () {
    updateColorHeader();
  });
});

function updateColorHeader() {
  if ($(window).scrollTop() > 40) {
    $('.header').css("background-color", header_color_fixed);
    //     $('.header').css("height", "80px");
    $('.header').css("box-shadow", "0 2px 4px 0 rgba(0,0,0,.13)");
    $('.header').css("top", "0px");
  }
  else {
    $('.header').css("background-color", header_color_static);
    //     $('.header').css("height", "85px");
    $('.header').css("box-shadow", "none");
    $('.header').css("top", "60px");
  }
}
