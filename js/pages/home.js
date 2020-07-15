// Click and drag container

const scrollContainer = document.querySelector('.featured-cases');
const scrollContent = document.getElementById('cs__scroll');

const featuredCases = () => {
	new ScrollBooster({
		viewport   : scrollContainer,
		content    : scrollContent,
		direction  : 'horizontal',
		scrollMode : 'transform',
		friction   : 0.1
	});
};

scrollContent.onmouseover = () => {
	scrollContent.style.cursor = 'grab';
};
scrollContent.onmousedown = () => {
	scrollContent.style.cursor = 'grabbing';
};
scrollContent.onmouseup = () => {
	scrollContent.style.cursor = 'grab';
};

featuredCases();
