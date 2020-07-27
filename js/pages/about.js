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

// var Webflow = Webflow || [];
// Webflow.push(function() {
// 	var tabTimeout;
// 	clearTimeout(tabTimeout);
// 	tabLoop();

// 	function tabLoop() {
// 		tabTimeout = setTimeout(function() {
// 			var $next = $('.tabs-menu').children('.w--current:first').next();

// 			if ($next.length) {
// 				$next.click(); // user click resets timeout
// 			} else {
// 				$('.standard-tab:first').click();
// 			}
// 		}, 10000);
// 	}

// 	// Reset loop if a tab is clicked
// 	$('.standard-tab').click(function() {
// 		clearTimeout(tabTimeout);
// 		tabLoop();
// 	});
// });
//

const processPseudoNav = document.getElementById('process__pseudo-nav').children;
const processTabs = document.getElementById('process__tabs').children;

for (let i = 0; i < processTabs.length; i++) {
	processTabs[i].addEventListener('click', () => {
		processPseudoNav[i].click();
		for (let j = 0; j < processTabs.length; j++) {
			processTabs[j].classList.remove('active-tab');
		}
		processTabs[i].classList.toggle('active-tab');
	});
}
