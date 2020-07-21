// Import function
const importModule = (URL) => {
	const doc = document;
	const body = doc.getElementsByTagName('body')[0];
	const importScript = doc.createElement('script');
	importScript.type = 'text/javascript';
	importScript.async = false;
	importScript.src = `https://cdn.jsdelivr.net/gh/silkstudio/codsall-driveways/${URL}`;
	body.appendChild(importScript);
};

// Define dependencies
const smoothScroll = 'js/modules/smooth-scroll/smooth-scroll.min.js';
const disableScroll = 'js/modules/disable-scroll/disableScroll.js';
const scrollBooster = 'js/modules/scroll-booster/scrollbooster.min.js';
const cycle2 = 'js/modules/cycle2/cycle2.js';
const instantPage = 'js/modules/instant-page/instant-page-min.js';
const quickLink = 'js/modules/quicklink/quicklink-min.js';

// Imports
const loadDependencies = () => {
	importModule(smoothScroll);
	importModule(disableScroll);
	importModule(scrollBooster);
	importModule(cycle2);
	importModule(instantPage);
	importModule(quickLink);
};
