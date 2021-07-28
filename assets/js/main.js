const loader = document.querySelectorAll('#loader path');
for (let i = 0; i < loader.length; i++) {
	console.log(`Letter ${i} is ${loader[i].getTotalLength()}`);
}
//preloader
$(window).on('load', function () {
	$('#loader').fadeOut(5000);
	$('#preloader').delay(2500).slideUp(1000);
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
