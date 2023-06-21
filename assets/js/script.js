
 /* Hamburger Menu Start */

//  Variable declare for catching classes
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

//ToggleMenu function declare for toggling hamburger menu
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

//AddEventListener for clickcing toggle menu
hamburger.addEventListener("click", toggleMenu);

//Foreach loop for iterating every menu.
menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)


//Hamburger menu hide after scrolling 200 px


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".hamburger").style.top = "30px";
    document.querySelector(".zindex").style.top = "30px";
  } else {
    document.querySelector(".hamburger").style.top = "-200px";
    document.querySelector(".zindex").style.top  = "-200px";
  }
  prevScrollpos = currentScrollPos;
}
 /* Hamburger Menu End */