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
// CaseStudies.js
// ==========================================================================
const heroSliderContent = document.querySelectorAll('.hero-slider__content');
const heroNavNext = document.getElementById('cs-hero-nav__next');
const heroNavPrev = document.getElementById('cs-hero-nav__prev');

//
//Check page number to see if the page needs to be scrolled
let pageNumber = document.URL.split(/(page=)/);
const checkPageNumber = () => {
	if (parseInt(pageNumber[2]) > 1) {
		window.scroll(0, window.innerHeight);
	}
};
checkPageNumber();

//
// Slick slider
$(document).ready(function() {
	$('.case-studies__hero-slider').slick({
		infinite       : true,
		autoplay       : true,
		autoplaySpeed  : 8000,
		slidesToShow   : 1,
		slidesToScroll : 1,
		speed          : 900,
		fade           : true,
		cssEase        : 'linear',
		focusOnSelect  : false,
		focusOnChange  : false,
		pauseOnFocus   : false,
		pauseOnHover   : false,
		swipe          : false,
		swipeToSlide   : false,
		nextArrow      : heroNavNext,
		prevArrow      : heroNavPrev
	});
	setTimeout(() => {
		heroSliderContent[0].style.opacity = '1';
	}, 450);
	setTimeout(() => {
		heroSliderContent[0].style.opacity = '0';
	}, 7000);
});

$('.case-studies__hero-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	// heroSliderContent[currentSlide].style.opacity = '0';
	setTimeout(() => {
		heroSliderContent[nextSlide].style.opacity = '1';
	}, 900);
	setTimeout(() => {
		heroSliderContent[nextSlide].style.opacity = '0';
	}, 8000);
});
