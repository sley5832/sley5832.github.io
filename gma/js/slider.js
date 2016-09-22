$(document).ready(function(){

	$('.right_banner').bxSlider({ //탑배너
		//mode: 'fade',
	  auto: true,
		pager: false
	});


	$('.main_slider').bxSlider({ //메인비주얼
		auto: true,
		autoControls: true,
		pagerCustom: '#bx-pager'
	});

	$('.story_bxslider').bxSlider({ //스토리 in GMA
		auto: true,
		controls: false
	});

	$('.movie_slider').bxSlider({ //추천강좌
		auto: true,
		pager: false,
		minSlides: 5,
		maxSlides: 5,
		moveSlides: 1,
		slideWidth: 180,
		slideMargin: 12
	});

	$('.cpr_logo').bxSlider({ //파트너사
	  auto: true,
		pager: false,
		minSlides: 5,
		maxSlides: 5,
		moveSlides: 1,
		slideWidth: 200,
		slideMargin: 0
	});



});
