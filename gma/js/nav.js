$(document).ready(function(){

  $('.main_menu').mouseenter(
    function(){
      $('ul.sub_menu, .main_menu_bg').slideDown(200);
  }).mouseleave(
    function(){
      $('ul.sub_menu, .main_menu_bg').slideUp(200);
  });


  $('.btn-menu').click(function(){
		$(this).toggleClass('open');
	});

});
