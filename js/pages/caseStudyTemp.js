/*!
 * Codsall Driveways V 0.1: Additional javascript for increased site functionality
 * (c) 2020 Silk Studio
 */

/**
 * Written by Nathan Hughes on 18/07/20.
 *
 * Silk Studio - development + design
 * https://silkstudio.co
 * https://github.com/silkstudio
 *
 */

// ==========================================================================
// Case-study-temp.js
// ==========================================================================

// jQuery Slick Slider

let captions = document.querySelectorAll('.carousel__caption');
const carouselNext = document.getElementById('carousel_next');
const carouselPrev = document.getElementById('carousel_prev');
let slickTrack;

$(document).ready(function() {
	$('.case-study__carousel').slick({
		infinite       : true,
		adaptiveHeight : false,
		slidesToShow   : 1,
		slidesToScroll : 2,
		centerMode     : true,
		variableWidth  : true,
		speed          : 1500,
		cssEase        : 'cubic-bezier(.19, 1, .22, 1)',
		focusOnSelect  : false,
		focusOnChange  : false,
		nextArrow      : carouselNext,
		prevArrow      : carouselPrev
	});
	captions[0].classList.toggle('in_view');
	setMouse();
});

//
// In/Out animations

$('.case-study__carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	setTimeout(() => {
		captions[currentSlide].classList.toggle('in_view');
	}, 450);
	setTimeout(() => {
		captions[nextSlide].classList.toggle('in_view');
	}, 1500);
});

//
// Functions
const updateCaptions = () => {
	for (let i = 0; i < captions.length; i++) {
		let content = captions[i].previousSibling.alt;
		captions[i].innerHTML = content;
	}
};

const setMouse = () => {
	slickTrack = document.querySelector('.slick-track');
	return (
		(slickTrack.onmousedown = () => {
			slickTrack.classList.toggle('is_dragging');
			console.log('clicking');
		}),
		(slickTrack.onmouseup = () => {
			slickTrack.style.cursor = 'grab';
			setTimeout(() => {
				slickTrack.classList.toggle('is_dragging');
			}, 900);
		})
	);
};

updateCaptions();