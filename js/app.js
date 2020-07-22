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

// Page transition
const transitionElement = document.querySelector('.main');

const setTransitioninInitState = () => {
	transitionElement.classList.remove('main__in-view');
	transitionElement.style.display = 'none';
	console.log('initial state set, loading...');
};

const linkClasses = [
	'nav-link',
	'arrow-link',
	'site__logo',
	'footer__link'
];

const delay = (URL) => {
	transitionElement.classList.remove('main__in-view');
	setTimeout(function() {
		window.location = URL;
	}, 500);
};

const checkClasses = (el) => {
	for (let i = 0; i < linkClasses.length; i++) {
		if (el.classList.contains(linkClasses[i])) {
			return true;
		}
	}
};

document.addEventListener('click', function(event) {
	if (checkClasses(event.target)) {
		event.preventDefault();
		delay(event.target.href);
		console.log('target');
	} else if (checkClasses(event.target.parentNode)) {
		event.preventDefault();
		delay(event.target.parentNode.href);
		console.log('parent');
	} else {
		return;
	}
});

/*








*/
// Mobile menu sizing
let intViewportWidth = window.innerWidth;
let intViewportHeight = window.innerHeight;
// const mobileNav = document.querySelector('.mobile-nav');

const editorStyles = document.getElementById('editor-styles');
let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/*








*/
// Initialise page
pageSetup = () => {
	transitionElement.style.display = 'block';
	//editorStyles.parentNode.removeChild(editorStyles);
	//mobileNav.style.height = `${intViewportHeight}px`;
	//mobileNav.style.width = `${intViewportWidth}px`;
	//quicklink.listen();
	if (!isMobile && intViewportWidth >= 992) {
		luxy.init({
			wrapper      : '#luxy',
			wrapperSpeed : 1
		});
	}
	console.log('App loaded.');
	transitionElement.classList.add('main__in-view');
};

async function init() {
	setTransitioninInitState();
	await setTimeout(pageSetup, 1);
}

window.onloadstart = init();
