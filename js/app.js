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
// App.js
// ==========================================================================

// --- ELEMENTS --- //
const transitionElement = document.querySelector('.main');
const footerSubmit = document.getElementById('footer-submit');
const editorStyles = document.getElementById('editor-styles');
const linkClasses = [
	'nav-link',
	'arrow-link',
	'site__logo',
	'footer__link',
	'btn',
	'return-link'
];
const lightPages = [
	'/',
	'/about',
	'/case-studies',
	'/blog'
];
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavInner = document.querySelector('.mobile-nav__inner');
const mobileNavIcon = document.querySelector('.header__mobile-menu');
let intViewportWidth = window.innerWidth;
let intViewportHeight = window.innerHeight;

//
//
//
//
// --- FUNCTIONS --- //

// Set initial state of transition element
const setTransitionInitState = () => {
	transitionElement.classList.remove('main__in-view');
	transitionElement.style.display = 'none';
	console.log('Initial state complete, loading...');
};

// Delay function to allow page transition to run beofr exit
const delay = (URL) => {
	transitionElement.classList.remove('main__in-view');
	setTimeout(function() {
		window.location = URL;
	}, 500);
};

// Check to see if link clicked was one of the defined classes
const checkClasses = (el) => {
	for (let i = 0; i < linkClasses.length; i++) {
		if (el.classList.contains(linkClasses[i])) {
			return true;
		}
	}
};

const checkNavColor = () => {
	for (let i = 0; i < lightPages.length; i++) {
		if (window.location.pathname === lightPages[i]) {
			mobileNavIcon.classList.add('u-invert');
			mobileNavIcon.classList.add('hamburger-light');
			console.log('nav colour checked.');
		}
	}
};

// Open/close the state of mobile nav
const changeMobileNavState = () => {
	mobileNav.classList.toggle('mn-open');
};

// Initialise page
pageSetup = () => {
	transitionElement.style.display = 'block';
	editorStyles.parentNode.removeChild(editorStyles);
	mobileNavInner.style.minHeight = `${intViewportHeight}px`;
	mobileNavInner.style.width = `${intViewportWidth}px`;
	mobileNavIcon.addEventListener('click', () => {
		changeMobileNavState();
	});
	checkNavColor();
	quicklink.listen();
	if (!isMobile && intViewportWidth >= 992) {
		luxy.init({
			wrapper      : '#luxy',
			wrapperSpeed : 0.85
		});
	}
	transitionElement.classList.add('main__in-view');
	console.log('App.loaded');
};

//
//
//
//
// --- EVENT LISTENERS & CONDITIONALS --- //

//Listen for link clicks
document.addEventListener('click', function(event) {
	if (checkClasses(event.target)) {
		event.preventDefault();
		delay(event.target.href);
		// console.log('target');
	} else if (checkClasses(event.target.parentNode)) {
		event.preventDefault();
		delay(event.target.parentNode.href);
		// console.log('parent');
	} else {
		return;
	}
});

// Footer form field
if (footerSubmit !== null) {
	footerSubmit.addEventListener('click', () => {
		emailVal = document.getElementById('footer-email').value;
		window.localStorage.setItem('email', emailVal);
	});
}

//
//
//
//
// --- ONCE PAGE IS READY --- //
window.onloadstart = setTransitionInitState();
window.onload = setTimeout(pageSetup, 500);

/*

























*/

// MOBILE NAV //
