import { Swiper } from './vendor/swiper';

export const swiper = new Swiper('.coaches__swiper', {

  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },


  navigation: {
    nextEl: '.coaches__swiper-button--next',
    prevEl: '.coaches__swiper-button--prev',
  },
});


export const swiperFeedback = new Swiper('.feedback__swiper', {

  slidesPerView: 1,


  navigation: {
    nextEl: '.feedback__swiper-button--next',
    prevEl: '.feedback__swiper-button--prev',
    disabledClass: 'feedback__button-disabled',
  },
});

