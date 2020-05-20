/* $(document).ready(function () {
	$('.carousel__content').slick({
		autoplay: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		adaptiveHeight: false,
		autoplaySpeed: 2000,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	});
}); */

const slider = tns({
	container: '.carousel__content',
	items: 1,
	slideBy: 'page',
	controls: false,
	autoplayButtonOutput: false,
	nav: false
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});