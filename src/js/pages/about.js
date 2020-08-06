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
// About.js
// ==========================================================================

// PROCESS SLIDER (jQuery) //

// when the DOM is ready
$(document).ready(function() {
	// get a reference to the custom dots and store in a variable
	const customDots = $('.standard-tab');
	// for each custom dot
	$.each(customDots, (index, dot) => {
		// when the dot is clicked
		$(dot).click(() => {
			// remove 'active' class from the previous active dot
			$('.active').removeClass('active');
			// add 'active' class to current dot
			$(dot).addClass('active');
			// tap the equivalent native webflow dot
			// each custom dot taps its equivalent webflow dot of the same index
			// for instance custom dot one taps webflow dot one
			$('.w-slider-dot:nth-child(' + (index + 1) + ')').trigger('tap');
		});
	});

	/*
	* set up mutation observer to listen for class changes on .w-slider-dot
	* on an autoplay slider
	* every time a .w-slider-dot has the class .w-active
	* add .active class to the equivalent .standard-tab
	*/

	// set up options for the observer (which mutations to observe)
	// we are observing the 'class' attribute in this case
	const config = {
		attributes      : true,
		childList       : false,
		subtree         : false,
		attributeFilter : [
			'class'
		]
	};

	// set up setObserver function
	function setObserver(target, index) {
		// create a new instance of the MutationObserver
		const observer = new MutationObserver(function(mutations) {
			// for each mutation object being observed
			mutations.forEach(function(mutation) {
				// check for its 'class' attribute
				if (mutation.attributeName === 'class') {
					// get the list of all classes
					const classList = mutation.target.className;
					// if the class 'w-active' exists
					if (/w-active/.exec(classList)) {
						// remove 'active' class from the previous active custom dot
						$('.active').removeClass('active');
						// add 'active' class to current custom dot of same index as the .w-slider-dot
						$('.standard-tab:nth-child(' + (index + 1) + ')').addClass('active');
					}
				}
			});
		});
		// call the MutationObserver on the target element
		observer.observe(target, config);
	}

	// for each .w-slider-dot
	$('.w-slider-dot').each(function(index, dot) {
		// call the setObserver function to run the MutationObserver
		setObserver(dot, index);
	});
});
