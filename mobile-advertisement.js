// Swiper Slider Javascript code from Swiper js

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      340: {
        slidesPerView: 1,
        
      },
      480: {
        slidesPerView: 2,
        
      },
      768: {
        slidesPerView: 3,
       
      },
      1024: {
        slidesPerView: 4,
        
      },
      1200: {
        slidesPerView: 5,
        
      },
    },
  });