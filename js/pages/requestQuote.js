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
// Request-a-quote.js
// ==========================================================================

// Tab links
const raqLinkOne = document.getElementById('raq-link-1');
const raqLinkTwo = document.getElementById('raq-link-2');
const raqLinkThree = document.getElementById('raq-link-3');
const raqLinkFour = document.getElementById('raq-link-4');
const raqLinkFive = document.getElementById('raq-link-5');

// Forward buttons
const raqFwdOne = document.getElementById('raq-fwd-1');
const raqFwdTwo = document.getElementById('raq-fwd-2');
const raqFwdThree = document.getElementById('raq-fwd-3');
const raqFwdFour = document.getElementById('raq-fwd-4');

// Back buttons
const raqBackOne = document.getElementById('raq-back-1');
const raqBackTwo = document.getElementById('raq-back-2');
const raqBackThree = document.getElementById('raq-back-3');
const raqBackFour = document.getElementById('raq-back-4');

// Close button
const raqClose = document.getElementById('raq-close');
const raqEmail = document.getElementById('raq-email');

// Forward event listeners
raqFwdOne.addEventListener('click', () => {
	raqLinkTwo.click();
});

raqFwdTwo.addEventListener('click', () => {
	raqLinkThree.click();
});

raqFwdThree.addEventListener('click', () => {
	raqLinkFour.click();
});

raqFwdFour.addEventListener('click', () => {
	raqLinkFive.click();
});

// Backward event listeners
raqBackOne.addEventListener('click', () => {
	raqLinkOne.click();
});

raqBackTwo.addEventListener('click', () => {
	raqLinkTwo.click();
});

raqBackThree.addEventListener('click', () => {
	raqLinkThree.click();
});

raqBackFour.addEventListener('click', () => {
	raqLinkFour.click();
});

raqClose.addEventListener('click', () => {
	window.history.back();
});

raqEmail.value = localStorage.getItem('email');
