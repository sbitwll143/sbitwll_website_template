'use-strict';

/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback){
    if(elem.length > 1){
        for(let i = 0; i < elem.length; i++){
            
            elem[i].addEventListener(type, callback)
        }
    }
    else{
        elem.addEventListener(type, callback)
        
    }
}


/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggle = document.querySelector("[data-nav-toggle]");


const toggleNav = function(){
    navbar.classList.toggle("active");
    navbarToggle.classList.toggle("active")
}

addEventOnElem(navbarToggle, "click", toggleNav)

const closeNav = function(){
    navbar.classList.remove("active");
    navbarToggle.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav)


/**
 * header active
 */


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]")

window.addEventListener("scroll", function(){
    if(window.scrollY >= 100){
        header.classList.add("active");
        backTopBtn.classList.add("active")
    }
    else{
        header.classList.remove("active");
        backTopBtn.classList.remove("active")
    }
})