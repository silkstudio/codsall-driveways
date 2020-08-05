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
// Home.js
// ==========================================================================

// FEATURED CASE STUDIES, CLICK-AND-DRAG MODULE //

//
// Define variables
const fcScrollContainer = document.querySelector('.featured-cases');
const fcScrollList = document.querySelector('.featured-cases__list');
const fcScrollContent = document.getElementById('fc__scroll');
const fcScrollArrwLeft = document.getElementById('fc-arrow--left');
const fcScrollArrwRight = document.getElementById('fc-arrow--right');
let fcChildren;
let cw;
let translateX_Val;
let stepCount;
let updatedNextVal;
let updatedPrevVal;
let fcScrollMax;
let scrollInstance;
let fcScroll;

//
// Init variables

const clickDragInit = () => {
	fcChildren = fcScrollList.children;
	cw = fcChildren.item(0).clientWidth;
	translateX_Val = 1;
	updatedNextVal = cw;
	updatedPrevVal = 0;
	fcScrollMax = cw * (fcChildren.length - 2);

	// console.log(`variables initiated, as follows:
	// fcChildren: 	${fcChildren}
	// cw: 			${cw}
	// updatedNextVal: ${updatedNextVal}
	// fcScrollMax: 	${fcScrollMax}
	// `);

	return (fcScroll = new ScrollBooster({
		viewport   : fcScrollContainer,
		content    : fcScrollContent,
		direction  : 'horizontal',
		scrollMode : 'transform',
		friction   : 0.1
	}));
};

// Recalculate metrics if the window is resized
const recalcMetrics = () => {
	cw = fcChildren.item(0).clientWidth;
};
window.onresize = setTimeout(recalcMetrics, 1000);

// const fcScroll = new ScrollBooster({
// 	viewport   : fcScrollContainer,
// 	content    : fcScrollContent,
// 	direction  : 'horizontal',
// 	scrollMode : 'transform',
// 	friction   : 0.1
// });

//
// Update the arrow values if module is clicked-and-dragged
const setTranslateValue = () => {
	// Get the transform value
	translateX_Val = fcScrollContent.style.transform;
	// console.log(`1. Get translatedX_val: ${translateX_Val}`);
	// Convert it to a number
	translateX_Val = Math.round(translateX_Val.replace(/[^\d.]/g, ''));
	// console.log(`2. convert it to a number: ${translateX_Val}`);
	// Calculate the stepCount
	stepCount = Math.floor(translateX_Val / cw);
	// console.log(`3. calculate the step count: ${stepCount}`);
	// Set the new next and previous values
	updatedNextVal = stepCount * cw + cw;
	// console.log(`4. Set the new next value: ${updatedNextVal}`);
	updatedPrevVal = stepCount * cw;
	// console.log(`4b. Set the updated prev value: ${updatedPrevVal}`);

	// If user has reached the end, stop them from scrolling any further
	if (updatedNextVal >= fcScrollMax) {
		updatedNextVal = fcScrollMax;
		// console.log(
		// 	`5. If the updated next value is greater than the scroll max (${fcScrollMax}), set the updated value to the same as the scroll max : ${updatedNextVal}`
		// );
	} else if (updatedPrevVal <= 0) {
		updatedPrevVal = 0;
		updatedNextVal = cw;
		// console.log(
		// 	`5b. Else if the updated prev value is less than or equal to 0, let the prev value = 0 and the next value = cw (${cw})`
		// );
	}
};

//
// Right arrow click
const fcScrollRight = () => {
	if (!isMobile || window.innerWidth >= 992) {
		// On click, scroll to the updatedNextVal
		fcScroll.scrollTo({ x: updatedNextVal, y: 0 });
		// Increase the exsisting value by clientWidth
		updatedNextVal += cw;
		// If the user has reached the end, stop them from scrolling further
		if (updatedNextVal > fcScrollMax) {
			updatedNextVal = fcScrollMax;
			updatedPrevVal = updatedNextVal - cw;
		} else {
			updatedPrevVal = updatedNextVal - cw * 2;
		}
	}
};

//
// Left arrow click
const fcScrollLeft = () => {
	if (!isMobile || window.innerWidth >= 992) {
		// On click, scroll to the updatedPrevVal
		fcScroll.scrollTo({ x: updatedPrevVal, y: 0 });
		// Check whether user has come from the end and if not decrease both values by clientWidth
		if (updatedNextVal === fcScrollMax && updatedPrevVal === fcScrollMax - cw) {
			updatedNextVal = fcScrollMax;
			updatedPrevVal = fcScrollMax - cw * 2;
		} else if (updatedPrevVal <= 0 || updatedNextVal <= cw) {
			updatedPrevVal = 0;
			updatedNextVal = cw;
		} else {
			updatedPrevVal -= cw;
			updatedNextVal -= cw;
		}
	}
};

//
// Mouse interactions

if (!isMobile || window.innerWidth >= 992) {
	fcScrollArrwRight.addEventListener('click', fcScrollRight);
	fcScrollArrwLeft.addEventListener('click', fcScrollLeft);

	fcScrollContent.onmouseover = () => {
		fcScrollContent.style.cursor = 'grab';
	};

	fcScrollContent.onmousedown = () => {
		fcScrollContent.style.cursor = 'grabbing';
	};

	fcScrollContent.onmouseup = () => {
		fcScrollContent.style.cursor = 'grab';
		setTranslateValue();
	};
}

window.onload = setTimeout(clickDragInit, 500);

//
//
// FORM FIELDS - LOACL STORAGE //

//
// Hero form field
let emailVal;
const heroSubmit = document.getElementById('hero-submit');

heroSubmit.addEventListener('click', () => {
	emailVal = document.getElementById('hero-email').value;
	window.localStorage.setItem('email', emailVal);
});
