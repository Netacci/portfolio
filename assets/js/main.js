const loader = document.querySelectorAll('#loader path');
for (let i = 0; i < loader.length; i++) {
	console.log(`Letter ${i} is ${loader[i].getTotalLength()}`);
}
//preloader
$(window).on('load', function () {
	$('#loader').delay(1000).fadeOut(6000);
	$('#preloader').delay(2000).slideUp(1000);
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

	cssEase: 'linear',
});
