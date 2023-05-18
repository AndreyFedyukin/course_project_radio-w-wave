// Header form
let btnOpen = document.querySelector('.header-form-search__btn-open');
let form = document.querySelector('.header-form-search__form');

btnOpen.addEventListener('click', function () {
	form.classList.toggle('header-form-search__form__active');
	this.classList.toggle('active');
});

document.addEventListener('click', function (a) {
	let target = a.target;
	if (!target.closest('.header__form-search')) {
		form.classList.remove('header-form-search__form__active');
		btnOpen.classList.remove('active');
		form.querySelector('input').value = "";
	};
});

// Burger
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__nav');
let nav__link = document.querySelectorAll('.nav__link');
let menu = document.querySelector('.header__menu');
let menu__link = document.querySelectorAll('.menu__link');

burger.addEventListener('click', function () {
	menu.classList.toggle('header__menu--active');
	nav.classList.toggle('header__nav--active');
	burger.classList.toggle('burger--active');
	document.body.classList.toggle('stop-scroll');
});

nav__link.forEach(function (el) {
	el.addEventListener('click', function () {
		menu.classList.remove('header__menu--active');
		nav.classList.remove('header__nav--active');
		burger.classList.remove('burger--active');
		document.body.classList.remove('stop-scroll');
	});
});

menu__link.forEach(function (el) {
	el.addEventListener('click', function () {
		menu.classList.remove('header__menu--active');
		nav.classList.remove('header__nav--active');
		burger.classList.remove('burger--active');
		document.body.classList.remove('stop-scroll');
	});
});

// pluse
let pluse = document.querySelector('.header__bottom-btn');
let list__live = document.querySelector('.header__live');
let header__right = document.querySelector('.header__bottom-right');
let header__bottom = document.querySelector('.header__bottom');

pluse.addEventListener('click', function () {
	list__live.classList.toggle('header__live--active');
	pluse.classList.toggle('header__bottom-btn--active');
	header__right.classList.toggle('header__bottom-right--active');
	header__bottom.classList.toggle('header__bottom--active');
});

// Скрытие блоков и показ по кнопке
let podcastsMore = document.querySelector('.podcasts__more');
let btnMore = document.querySelector('.podcasts__btn-more');
let podcasts = document.querySelectorAll('.podcasts__item');

btnMore.addEventListener('click',
	function () {
		podcasts.forEach(function (el) {
			el.classList.toggle('podcasts__item-visible');
		});
		podcastsMore.classList.add('podcasts__more-hidden');
	});

// Селект
let element = document.querySelector('.broadcast__select');
let choices = new Choices(element, {
	classNames: {
		containerOuter: 'choices broadcast__choices',
	},
	itemSelectText: '',
	searchEnabled: false,
});

// Аккордион
new Accordion('.guests-category', {
	elementClass: 'guests-category__item',
	triggerClass: 'guests-category__top',
	panelClass: 'guests-category__bottom',
	activeClass: 'guests--active',
	duration: 200,
});
