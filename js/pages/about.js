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

var Webflow = Webflow || [];
Webflow.push(function() {
	var tabTimeout;
	clearTimeout(tabTimeout);
	tabLoop();

	function tabLoop() {
		tabTimeout = setTimeout(function() {
			var $next = $('.tabs-menu').children('.w--current:first').next();

			if ($next.length) {
				$next.click(); // user click resets timeout
			} else {
				$('.standard-tab:first').click();
			}
		}, 10000);
	}

	// Reset loop if a tab is clicked
	$('.standard-tab').click(function() {
		clearTimeout(tabTimeout);
		tabLoop();
	});
});
