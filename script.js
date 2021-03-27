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

//JUMP
$(function(){
  $('a[href^="#jump"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// スクロールボタン
jQuery(function() {
  var pagetop = $('#scroll');
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
$('a[href^="#"]').click(function(){
  var time = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" ? 'html' : href);
  var distance = target.offset().top;
  $("html, body").animate({scrollTop:distance}, time, "swing");
  return false;
});
});


