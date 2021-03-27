//ROADANIMATION
window.onload = function() {
  setTimeout(function() {
    $('.load').fadeOut(1000);
  }, 1000);
}

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



