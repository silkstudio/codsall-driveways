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
transitionElement.style.display = 'hidden';

const linkClasses = [
	'nav-link',
	'arrow-link',
	'site__logo'
];

const delay = (URL) => {
	transitionElement.classList.remove('main__in-view');
	setTimeout(function() {
		window.location = URL;
	}, 250);
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
init = () => {
	//editorStyles.parentNode.removeChild(editorStyles);
	//mobileNav.style.height = `${intViewportHeight}px`;
	//mobileNav.style.width = `${intViewportWidth}px`;
	//quicklink.listen();
	if (!isMobile && intViewportWidth >= 992) {
		luxy.init({
			wrapper      : '#luxy',
			wrapperSpeed : 0.065
		});
	}
	transitionElement.style.display = 'block';
	transitionElement.classList.add('main__in-view');
};

window.onload = init();
