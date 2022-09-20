// Burger

const burgerBtn = document.querySelector('.header__hamburger');
const nav = document.querySelector('.navigation');

burgerBtn.addEventListener('click', function () {
  nav.classList.toggle('is-active');
  this.classList.toggle('is-active');
});
