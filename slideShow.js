"use strict";
var imgSlide = new Array(3);
var index = 0;
function back() {
  if ( index > 0){
    index--;
    document.slideshow.src = imgSlide[index].src;
  }
  
  return;
}
function next() {
  if ( index < 3){
    index++;
    document.slideshow.src = imgSlide[index].src;
  }
  return;
}
function loop() {
  document.slideshow.src = imgSlide[index].src;
  index++;
  if (index > 2){
    index = 0;
  }
  setTimeout("loop()", 2000);
  return;
}
function start(){
  imgSlide[0] = new Image;
  imgSlide[0].src = "slide1.jpg";
  imgSlide[1] = new Image;
  imgSlide[1].src = "slide2.jpg";
  imgSlide[2] = new Image;
  imgSlide[2].src = "slide3.jpg";
  loop();
  return;
}