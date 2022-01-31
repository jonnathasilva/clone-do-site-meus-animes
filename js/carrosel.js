const sswiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  freeMode: true,
  speed: 500,
  spaceBetween: 5,
  loopAdditionalSlides: 5,
  slidesPerView: 2,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
        // when window width is >= 640px
        540: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          freeMode: false,
        },

         781: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          freeMode: false,
        },

        1250: {
          slidesPerView: 6,
          slidesPerGroup: 1,
          freeMode: false,
        },

      }

});

const swiper = new Swiper('.swiper-02', {
    // Optional parameters
  loop: false,
  freeMode: true,
  speed: 500,
  spaceBetween: 5,
  loopAdditionalSlides: 5,
  slidesPerView: 2,
  

  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 640px
    540: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      freeMode: false,
    },

    781: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      freeMode: false,
    },

    1250: {
      slidesPerView: 5.7,
      slidesPerGroup: 1,
      freeMode: false,
    },

  }
  

});
