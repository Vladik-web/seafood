let buttons = [
  "Треска",
  "Лосось",
  "Скумбрия",
  "Голубая мидия",
  "Коричневый краб",
  "Осьминог",
];

var swiper = new Swiper(".mySwiper", {
	loop:true,
	autoplay: {
		delay: 1500,
	},
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
	allowTouchMove: true,
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
	breakpoints: {
		0:{
			allowTouchMove: false,
		},
		600:{
			allowTouchMove: true
		},

	}
});

@@include('a.js');

