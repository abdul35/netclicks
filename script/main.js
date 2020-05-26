'use strict';
const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');
const img = document.querySelector('.tv-card__img');

hamburger.addEventListener('click', () => {
	leftMenu.classList.toggle('openMenu');
	hamburger.classList.toggle('open');
});


document.body.addEventListener('click', event => {
	const target = event.target;
	if (!target.closest('.left-menu')) {
		leftMenu.classList.remove('openMenu');
		hamburger.classList.remove('open');
	}	
});


leftMenu.addEventListener('click', event => {
	const target = event.target;
	const dropdown = target.closest('.dropdown');
	if (dropdown) {
		dropdown.classList.toggle('active');
		leftMenu.classList.add('openMenu');
		hamburger.classList.add('open');
	}
});

// tv-card__img

this.addEventListener('mouseover', event => {
	const target = event.target; 
	const newImg = target.dataset.backdrop;  
	const oldImg = target.src; 
	if (target.classList.contains('tv-card__img')) target.src = newImg;
	this.addEventListener('mouseout', event => target.src = oldImg);
});


// this.addEventListener('mouseover', event => {
// 	const target = event.target;
// 	const atr = target.getAttribute('data-backdrop');
// 	const atrSrc = target.getAttribute('src');
// 	target.src = atr;
// });
// this.romoveEventListener('mouseleave', over)
// this.addEventListener('mouseout', event => {
// 	const target = event.target;
// 	const atr = target.getAttribute('data-backdrop');
// 	const atrSrc = target.getAttribute('src');
// 	target.src = atrSrc;
// });