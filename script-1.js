var radius = 300;
var autoRotate = true;
var rotateSpeed = -60;
var imgWidth = 100;
var imgHeight = 150;

// **************** Start ******************

setTimeout(init, 1000);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid];

ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime){
    for(var i = 0; i < aEle.length; i++){
        aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
}

function applyTransform (obj){
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;

    obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes){
    ospin.style.animationPlayState = (yes? 'running' : 'paused');
}

var sX, sY, nX, nY, desX = 0,
desY = 0,
tX = 0,
tY = 10;

if(autoRotate){
    var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
    ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

