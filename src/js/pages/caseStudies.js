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

// Define variables
const heroSliderContent = document.querySelectorAll('.hero-slider__content');
const heroNavNext = document.getElementById('cs-hero-nav__next');
const heroNavPrev = document.getElementById('cs-hero-nav__prev');

//
// Slick slider
const sliderInit = () => {
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
		arrows         : true,
		nextArrow      : heroNavNext,
		prevArrow      : heroNavPrev
	});

	for (let i = 0; i < heroSliderContent.length; i++) {
		if (i !== 0) {
			heroSliderContent[i].style.opacity = '0';
		}
	}
};

$('.case-studies__hero-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	heroSliderContent[currentSlide].style.opacity = '0';
});

$('.case-studies__hero-slider').on('afterChange', function(slick, currentSlide) {
	setTimeout(() => {
		heroSliderContent[currentSlide.currentSlide].style.opacity = '1';
	}, 450);
});

//
//
//
//
//
//
// Init function
(window.onload = setTimeout(sliderInit, 500)), setTimeout(checkPageNumber, 1000);

/*


















*/
