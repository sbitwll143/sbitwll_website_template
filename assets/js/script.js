// 'use-strict';

/*-----------------------------------*\
  #Special CSS code for product slider
\*-----------------------------------*/

var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

// iPhone selecting function by color button
const COLOR_BTNS = document.querySelectorAll('.color');
COLOR_BTNS.forEach(dolor => {
    dolor.addEventListener('click', () => {
        let colorNameClass = dolor.className;
        if(!dolor.classList.contains('active-color')){
            let colorName = colorNameClass.slice(colorNameClass.indexOf('-') +1);
            resetActiveBtns();
            dolor.classList.add('active-color');
            setNewColor(colorName)
        }
    });
})

// resetting all color btns
function resetActiveBtns(){
    COLOR_BTNS.forEach(color => {
        color.classList.remove('active-color');
    });
}

// set new color on the banner right 
function setNewColor(color){
    document.querySelector('.banner-right img').src = `assets/images/iphone-selection-by-color/iphone_${color}.png`;
}


// Today's Deal product cart sliding
const imgs = document.querySelectorAll('.img-select a');
const imgs2 = document.querySelectorAll('.img-select-2 a');
const imgs3 = document.querySelectorAll('.img-select-3 a');
const imgs4 = document.querySelectorAll('.img-select-4 a');
const imgs5 = document.querySelectorAll('.img-select-5 a');
const imgBtns = [...imgs];
const imgBtns2 = [...imgs2];
const imgBtns3 = [...imgs3];
const imgBtns4 = [...imgs4];
const imgBtns5 = [...imgs5];
let imgId = 1;
let imgId2 = 1;
let imgId3 = 1;
let imgId4 = 1;
let imgId5 = 1;



imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        
        slideImage();
       
    });
});

imgBtns2.forEach((imgItem2) => {
    imgItem2.addEventListener('click', (event) => {
        event.preventDefault();
        imgId2 = imgItem2.dataset.id;
        slideImage2();
    })
})

imgBtns3.forEach((imgItem3) => {
    imgItem3.addEventListener('click', (event) => {
        event.preventDefault();
        imgId2 = imgItem3.dataset.id;
        slideImage3();
    })
})

imgBtns4.forEach((imgItem4) => {
    imgItem4.addEventListener('click', (event) => {
        event.preventDefault();
        imgId2 = imgItem4.dataset.id;
        slideImage4();
    })
})

imgBtns5.forEach((imgItem5) => {
    imgItem5.addEventListener('click', (event) => {
        event.preventDefault();
        imgId5 = imgItem5.dataset.id;
        slideImage5();
    })
})

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

function slideImage2(){
    const displayWidth2 = document.querySelector('.img-showcase-2 img:first-child').clientWidth;

    document.querySelector('.img-showcase-2').style.transform = `translateX(${- (imgId2 - 1) * displayWidth2}px)`;
}

function slideImage3(){
    const displayWidth3 = document.querySelector('.img-showcase-3 img:first-child').clientWidth;

    document.querySelector('.img-showcase-3').style.transform = `translateX(${- (imgId2 - 1) * displayWidth3}px)`;
}
function slideImage4(){
    const displayWidth4 = document.querySelector('.img-showcase-4 img:first-child').clientWidth;

    document.querySelector('.img-showcase-4').style.transform = `translateX(${- (imgId2 - 1) * displayWidth4}px)`;
}
function slideImage5(){
    const displayWidth5 = document.querySelector('.img-showcase-5 img:first-child').clientWidth;

    document.querySelector('.img-showcase-5').style.transform = `translateX(${- (imgId5 - 1) * displayWidth5}px)`;
}

window.addEventListener('resize', slideImage);
window.addEventListener('resize', slideImage2);
window.addEventListener('resize', slideImage3);
window.addEventListener('resize', slideImage4);
window.addEventListener('resize', slideImage5);

