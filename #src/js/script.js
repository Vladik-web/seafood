let buttons = [
  "Треска",
  "Лосось",
  "Скумбрия",
  "Голубая мидия",
  "Коричневый краб",
  "Осьминог",
];

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".up",
    prevEl: ".down",
  },
  pagination: {
    el: ".main-slider__list",
    clickable: true,

    renderBullet: function (index, className) {
      return `<li class="${className}">${buttons[index]}</li>`;
    },
  },
});

var header = new Swiper(".header-slider", {
  direction: "vertical",
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  pagination: {
    el: ".slider__list",
    clickable: true,

    renderBullet: function (index, className) {
      return `<li class="${className}">${"0" + (index + 1)}</li>`;
    },
  },
});

@@include('a.js');

