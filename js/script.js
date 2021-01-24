$(document).ready(function () {
   $('.header__burger').click(function () {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('_lock');
   });
});

const histSwiper = new Swiper('.history-slider', {
   navigation: {
      nextEl: '.his_swiper-button-next',
      prevEl: '.his_swiper-button-prev'
   },
   loop: true,
   // centeredSlides: true,
   spaceBetween: 17,
   breakpoints: {
      1350: {
         slidesPerView: 3,
      },
      1024: {
         slidesPerView: 2,
      },
      319: {
         centeredSlides: true,
         slidesPerView: 1,
      }
   }
});
const swiperPrev = document.getElementById('hist-button-prev'),
   swiperNext = document.getElementById('hist-button-next');



if (swiperPrev) {
   swiperPrev.addEventListener('click', () => {
      histSwiper.slidePrev();
   });
   swiperNext.addEventListener('click', () => {
      histSwiper.slideNext();
   });
}


const revSwiper = new Swiper('.review-slider', {
   navigation: {
      nextEl: '.rev_swiper-button-next',
      prevEl: '.rev_swiper-button-prev'
   },
   loop: true,
});
const swiperPrev2 = document.getElementById('rev-button-prev'),
   swiperNext2 = document.getElementById('rev-button-next');


if (swiperPrev2) {
   swiperPrev2.addEventListener('click', () => {
      revSwiper.slidePrev();
   });
   swiperNext2.addEventListener('click', () => {
      revSwiper.slideNext();
   });
}











function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});;