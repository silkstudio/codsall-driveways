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

$(document).ready(function() {
	$('.collection-list').slick({
		adaptiveHeight : false,
		slidesToShow   : 1,
		centerMode     : true,
		centerPadding  : '50px',
		variableWidth  : true,
		infinite       : true,
		focusOnSelect  : false,
		focusOnChange  : false
	});
});
