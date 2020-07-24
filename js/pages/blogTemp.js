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
// BlogTemp.js
// ==========================================================================

const blogImages = document.getElementsByTagName('figure');

const styleImages = () => {
	for (let i = 0; i < blogImages.length; i++) {
		let curImg = blogImages[i].firstChild.firstChild;
		curImg.classList.add('styled-blog-img');
	}
};

window.onload = styleImages();
