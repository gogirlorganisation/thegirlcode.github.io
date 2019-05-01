const hamburger = document.querySelector('.hamburger'),
	closeButton = document.querySelector('.close-button'),
	nav = document.querySelector('nav');

hamburger.addEventListener('click', () => nav.classList.add('menu-open'));

closeButton.addEventListener('click', () => nav.classList.remove('menu-open'));