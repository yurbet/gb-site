const menu = document.querySelector('.header__right__menu');
const menuHide = document.querySelector('.preview__menu__hide');

menu.addEventListener('click', function() {
	menuHide.classList.toggle('preview__menu__hide');
});