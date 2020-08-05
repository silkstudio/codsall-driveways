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
// Utils.js - Utility functions used accross the app
// ==========================================================================

let splitURL;
let pageNumber;
let curScroll;

//
//Check page number to see if the page needs to be scrolled
function checkPageNumber() {
	splitURL = document.URL.split(/(page=)/);
	pageNumber = parseInt(splitURL[2]);
	curScroll = window.scrollY;
	if (pageNumber > 1 && curScroll <= 100) {
		window.scroll({ top: window.innerHeight, left: 0, behavior: 'smooth' });
		// console.log(`checked numbers, current page number is: ${parseInt(pageNumber)}`);
	}
}
