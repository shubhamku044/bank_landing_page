const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const navBar = document.querySelector('.header__menu');
const fadeElement = document.querySelector('.has-fade');

btnHamburger.addEventListener('click', function () {
	if (header.classList.contains('open')) {
		// closing the hamburger ===
		header.classList.remove('open');
		overlay.classList.add('fade-out');
		overlay.classList.remove('fade-in');
		overlay.classList.add('has-fade');
		navBar.classList.add('hide');
		body.classList.remove('noscroll');
	} else {
		// opening the hamburger X
		header.classList.add('open');
		overlay.classList.add('fade-in');
		overlay.classList.remove('fade-out');
		overlay.classList.remove('has-fade');
		navBar.classList.remove('hide');
		body.classList.add('noscroll');
	}
});
