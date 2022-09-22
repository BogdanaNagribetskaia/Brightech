// Burger

const burgerBtn = document.querySelector('.header__hamburger');
const nav = document.querySelector('.navigation');

burgerBtn.addEventListener('click', function () {
  nav.classList.toggle('is-active');
  this.classList.toggle('is-active');
});

// Swiper

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '.js-slider-button-next',
    prevEl: '.js-slider-button-prev',
  },

  // mousewheel: {
  //   invert: true,
  // },

  // ! Responsive breakpoints
  // breakpoints: {
  //   480: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   1200: {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //   },

  //   1250: {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //   },
  // },
});
