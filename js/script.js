// !-------- Header form --------
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

// !-------- Burger --------
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

// -------- -------- --------
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

// !-------- Podcasts show --------
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

// -------- Choices --------
let element = document.querySelector('.broadcast__select');
let choices = new Choices(element, {
  classNames: {
    containerOuter: 'choices broadcast__choices',
  },
  itemSelectText: '',
  searchEnabled: false,
  allowHTML: true,
});

// !-------- Accordion --------
new Accordion('.guests-category', {
  elementClass: 'guests-category__item',
  triggerClass: 'guests-category__top',
  panelClass: 'guests-category__bottom',
  activeClass: 'guests--active',
  duration: 200,
});

// -------- -------- --------
let guestsLink = document.querySelectorAll('.guests-category__link');
let guestsCards = document.querySelectorAll('.guests__cards');

guestsLink.forEach(function (element) {
  element.addEventListener('click', function (el) {
    const path = el.currentTarget.dataset.path;
    guestsLink.forEach(function (e) {
      e.classList.remove('guests-category__link--active')
    });
    el.currentTarget.classList.add('guests-category__link--active');
    guestsCards.forEach(function (w) {
      w.classList.remove('guests__cards--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__cards--active');
  });
});

// !-------- Modal -------- according to the method of A.Dudukalo
// Открыть модальное окно
document.getElementById("open-modal-btn").addEventListener("click", function () {
  document.getElementById("my-modal").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function () {
  document.getElementById("my-modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal").classList.remove("open")
  }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

// !-------- Modal form --------
const validates = new window.JustValidate('.modal__form', {
  colorWrong: '#D52B1E',
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 15,
    },
    password: {
      required: true,
      minLength: 4,
      maxLength: 8,
    },
  },
  messages: {
    name: {
      required: 'Ошибка'
    },
    password: {
      required: 'Ошибка'
    },
  },
});

// !-------- Playlists scroll --------
dropdown = document.querySelector('.playlists-genres__list')
new SimpleBar(dropdown, {
  autoHide: false,
  scrollbarMaxSize: 50,
});

// !-------- About slider --------
let swiper = new Swiper('.about__swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  speed: 500,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    320: {
      slidesPerView: 2.32,
      spaceBetween: 20
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    2160: {
      slidesPerView: 5,
      spaceBetween: 40
    },
    3000: {
      slidesPerView: 5,
      spaceBetween: 50
    },
  },
});

let swiperPrev = document.getElementById('swiperPrev');
let swiperNext = document.getElementById('swiperNext');

swiperPrev.addEventListener('click', function () {
  swiper.slidePrev();
});
swiperNext.addEventListener('click', function () {
  swiper.slideNext();
});

// !-------- About forms --------
const validate = new window.JustValidate('.about__form', {
  colorWrong: '#D52B1E',
  rules: {
    checkbox: {
      required: true
    },
    checkbox2: {
      required: true
    },
    email: {
      required: true,
      email: true,
    },
    name: {
      required: true,
      minLength: 3,
      maxLength: 15,
    },
    text: {
      required: true,
      minLength: 3,
      maxLength: 50,
    },
  },
  messages: {
    name: {
      required: 'Ошибка'
    },
    text: {
      required: 'Ошибка'
    },
    email: {
      required: 'Ошибка'
    },
    checkbox2: {
      required: 'Ошибка'
    },
  },
});
