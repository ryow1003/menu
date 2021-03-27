// ハンバーガーメニュー
$(function() {
  $('.menu').click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
    $('.menu-after').addClass('active');
    } else {
    $('.menu-after').removeClass('active');
    }
  });
});