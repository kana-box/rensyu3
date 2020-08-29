// home_menu
$(function(){
  var button_flg = 0;
  $("#navi a").click(function(){
      if(button_flg==0){
          button_flg = 1;
          $("#main img").before("<img src='"+$(this).attr("href")+"' alt=''>");
          $("#main img:last").fadeOut("slow",function(){
              $(this).remove();
              button_flg = 0;
          });
      }
      return false;
  });
});

// ナビゲーションレスポンシブ　表示
$(function(){
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
}());
$(function(){
  $('.btn-trigger').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
}());

// ナビゲーションレスポンシブ　ボタン変化
$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});

// トップページ写真切替
jQuery(function($) {
  $('.bg-slider').bgSwitcher({
      images: ['images/kv.jpg','images/image1.jpg','images/image4.jpg'],
       // 切り替える背景画像を指定
  });
});
