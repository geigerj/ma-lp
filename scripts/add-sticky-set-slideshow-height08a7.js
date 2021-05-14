window.onscroll = function() {
  addSticky()
};

window.onload = function(){
  setTimeout(addSticky(), 1000);
};

var menu = document.querySelector(".menu");
var menuOffset = menu.offsetTop;
var menuHeight = menu.offsetHeight;
var textItems = document.querySelectorAll(".text-item");
var textContainer = document.querySelector(".text-container");

function addSticky() {
  console.log(window.pageYOffset, menuOffset);
  for (var i = 0; i < textItems.length; ++i) {
    textItems[i].style.paddingTop = menuHeight + "px";
  }
  if (window.pageYOffset >= menuOffset) {
    menu.classList.add("sticky");
    textContainer.style.paddingTop = menuHeight + "px";
  } else {
    menu.classList.remove("sticky");
    textContainer.style.paddingTop = "";
  }
};

window.onload = function() {
  setSlideshowHeight()
};

window.onresize = function() {
  setSlideshowHeight()
};

function setSlideshowHeight() {
  var menu = document.querySelector(".menu");
  var slideshowContainer = document.querySelector(".slideshow-container");
  var x = window.innerHeight;
  slideshowContainer.style.height = "calc(" + x + "px - " + menu.offsetHeight + "px)";
}
