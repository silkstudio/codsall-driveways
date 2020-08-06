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
// ServicesTemp.js
// ==========================================================================

// Filtering suggested cases
// let curCategory, pageUrl;

// const cat1 = document.getElementById('cat_all');
// const cat2 = document.getElementById('cat_driveways');
// const cat3 = document.getElementById('cat_patios');
// const cat4 = document.getElementById('cat_wallcrete');
// const cat5 = document.getElementById('cat_re-seal');

// const categories = [
// 	cat1,
// 	cat2,
// 	cat3,
// 	cat4,
// 	cat5
// ];

// // F'inSweet IIFE to allow filtering of categories
// (function() {
// 	var dynamicSuggestedCases = new FsLibrary('.suggested-cases');
// 	var myFilters = [
// 		{
// 			filterWrapper : '.service-categories',
// 			filterType    : 'exclusive'
// 		}
// 	];
// 	dynamicSuggestedCases.filter({
// 		filterArray : myFilters
// 	});
// })();

// // Function to get elevant categories based on URL
// const filterCategories = () => {
// 	pageUrl = document.baseURI.split(/services\/|#/g);
// 	curCategory = pageUrl[1];
// 	cat1.click();
// 	for (let i = 0; i < categories.length; i++) {
// 		if (curCategory === categories[i].innerText.toLowerCase()) {
// 			categories[i].click();
// 			console.log(`filtered to "${categories[i].innerText.toLowerCase()}"`);
// 		}
// 	}
// };

// filterCategories();

//
//
//
// ACCORDION
const accItems = document.getElementsByClassName('accordion__item');
const accToggles = document.getElementsByClassName('accordion__toggle');
let heights = [];
let closedHeight;
let itemHeight;

function getHeights() {
	for (let i = 0; i < accItems.length; i++) {
		heights.push(accItems[i].clientHeight);
	}
}
function addListeners() {
	for (let i = 0; i < accToggles.length; i++) {
		accToggles[i].addEventListener(
			'click',
			() => {
				toggleItem(accItems[i], i);
			},
			false
		);
	}
}

function toggleItem(el, num) {
	itemHeight = el.style.height;
	for (let i = 0; i < accItems.length; i++) {
		if (window.innerWidth >= 992) {
			accItems[i].style.height = '5rem';
			closedHeight = '5rem';
		} else if (window.innerWidth >= 480) {
			accItems[i].style.height = '10rem';
			closedHeight = '10rem';
		} else {
			accItems[i].style.height = '25rem';
			closedHeight = '25rem';
		}
	}

	if (itemHeight === `${heights[num]}px`) {
		el.style.height = closedHeight;
	} else {
		el.style.height = `${heights[num]}px`;
	}
}

// `element is ${el}, number is ${num}`

function accInit() {
	setTimeout(getHeights, 300);
	setTimeout(addListeners, 400);
	setTimeout(() => {
		accToggles[0].click();
		accToggles[0].click();
	}, 500);
}

// accItems[i].style.height = heights[i];
window.onload = accInit();
