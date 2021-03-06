const nav = document.querySelector('#nav');
const loader = document.querySelectorAll('#loader path');
const ham = document.getElementById('hamburger');
const hamClose = document.getElementById('hamburger-close');
const mobile = document.querySelector('.mobile-nav');
const links = document.querySelectorAll('.nav-li');
// const intro = document.querySelector('#intro');
const skill = document.querySelector('#skill');
const work = document.querySelector('#work');
// const blog = document.querySelector('#blog');
const contact = document.querySelector('.contact');
const footer = document.querySelector('.foot');

// window.addEventListener('scroll', () => {
// 	let wind = window.pageYOffset;

// 	if (skill.offsetTop <= wind && work.offsetTop <= wind) {
// 		console.log('Skill');
// 	} else if (work.offsetTop <= wind && blog.offsetTop <= wind) {
// 		console.log('work');
// 	} else if (blog.offsetTop <= wind) {
// 		console.log('blog');
// 	} else {
// 		console.log('intro');
// 	}
// });

// Toggle hamburger nav open and close
const onClickHam = () => {
  ham.style.display = 'none';
  hamClose.style.display = 'flex';

  mobile.classList.toggle('open');
};
const onClickClose = () => {
  ham.style.display = 'flex';
  hamClose.style.display = 'none';

  mobile.classList.toggle('open');
};

ham.addEventListener('click', onClickHam);
hamClose.addEventListener('click', onClickClose);

// removing navbar after clicking on link
const onClickLink = () => {
  mobile.classList.toggle('open');
  hamClose.style.display = 'none';
  ham.style.display = 'flex';
};
links.forEach((link) => {
  link.addEventListener('click', onClickLink);
});
// removing navbar when you click anywhere else, couldn't figure out how to do it on the whole body without affecting the nav, only option would be to wrap the whole rest of the body asides header in a container but I don't want to touch my html
const onClickBody = () => {
  if (mobile.classList.contains('open')) {
    hamClose.style.display = 'none';
    ham.style.display = 'flex';
    mobile.classList.toggle('open');
  }
};
skill.addEventListener('click', onClickBody);
work.addEventListener('click', onClickBody);
contact.addEventListener('click', onClickBody);
footer.addEventListener('click', onClickBody);

// for (let i = 0; i < loader.length; i++) {
// 	console.log(`Letter ${i} is ${loader[i].getTotalLength()}`);
// }

//preloader
$(window).on('load', function () {
  $('#loader').delay(500).fadeOut(5000);
  $('#preloader').delay(1000).slideUp(700);
});

// Nav scroll

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    nav.classList.add('navscroll');
    nav.classList.remove('nave');
  } else {
    nav.classList.remove('navscroll');
    nav.classList.add('nave');
  }
});

// var typed = new Typed('#typed', {
// 	stringsElement: '#typed-strings',
// 	typeSpeed: 100,
// 	loop: true,
// 	loopCount: Infinity,
// });

$('.slider').slick({
  speed: 800,
  arrows: false,
  dots: false,
  autoplay: true,

  cssEase: 'linear',
});
