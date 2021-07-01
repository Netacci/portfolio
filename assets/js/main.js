//preloader
$(window).on('load', function () {
	$('.status').fadeOut();
	$('#preloader').delay(500).fadeOut();
});

var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	typeSpeed: 100,
	loop: true,
	loopCount: Infinity,
});

$('.slider').slick({
	speed: 800,
	arrows: false,
	dots: false,
	autoplay: true,
	fade: true,
	cssEase: 'linear',
});
