const editorStyles = document.getElementById('editor-styles');

let intViewportWidth = window.innerWidth;
let intViewportHeight = window.innerHeight;
const mobileNav = document.querySelector('.mobile-nav');

let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

function delay(URL) {
	setTimeout(function() {
		window.location = URL;
	}, 1000);
}

function init() {
	editorStyles.parentNode.removeChild(editorStyles);
	mobileNav.style.height = `${intViewportHeight}px`;
	mobileNav.style.width = `${intViewportWidth}px`;
	quicklink.listen();
	if (!isMobile && intViewportWidth >= 992) {
		luxy.init({
			wrapper      : '#luxy',
			wrapperSpeed : 0.065
		});
	}
}

window.onload = init();
