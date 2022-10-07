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
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Animation AOS

AOS.init({
  disable: 'mobile',
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 500,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});
