'use-strict';

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



// Refrigerator curve carousel
const wrapper = document.querySelector('.wrapper')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return
  }

  this.scrollLeft += startX - e.clientX
})