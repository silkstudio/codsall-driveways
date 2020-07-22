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
let curCategory, pageUrl;

const cat1 = document.getElementById('cat_all');
const cat2 = document.getElementById('cat_driveways');
const cat3 = document.getElementById('cat_patios');
const cat4 = document.getElementById('cat_wallcrete');
const cat5 = document.getElementById('cat_re-seal');

const categories = [
	cat1,
	cat2,
	cat3,
	cat4,
	cat5
];

// F'inSweet IIFE to allow filtering of categories
(function() {
	var dynamicSuggestedCases = new FsLibrary('.suggested-cases');
	var myFilters = [
		{
			filterWrapper : '.service-categories',
			filterType    : 'exclusive'
		}
	];
	dynamicSuggestedCases.filter({
		filterArray : myFilters
	});
})();

// Function to get elevant categories based on URL
const filterCategories = () => {
	pageUrl = document.baseURI.split(/services\/|#/g);
	curCategory = pageUrl[1];
	cat1.click();
	for (let i = 0; i < categories.length; i++) {
		if (curCategory === categories[i].innerText.toLowerCase()) {
			categories[i].click();
			console.log(`filtered to ${categories[i].innerText.toLowerCase()}`);
		}
	}
};

filterCategories();
