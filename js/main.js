// JavaScript Document


//slider
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

//Merch Page - hide certain categories
 
function showClothing() {
  var x = document.getElementById("clothing");
	var y = document.getElementById("accessories");
	var z = document.getElementById("music");
  if (x.style.display === "none") {
    x.style.display = "block";
	 y.style.display = "none";
	  z.style.display = "none"; 
  } else {
    y.style.display = "none";
	  z.style.display = "none";
  }
}

function showAccessories() {
  var x = document.getElementById("clothing");
	var y = document.getElementById("accessories");
	var z = document.getElementById("music");
  if (y.style.display === "none") {
    y.style.display = "block";
	   x.style.display = "none";
	  z.style.display = "none";
  } else {
    x.style.display = "none";
	  z.style.display = "none";
  }
}

function showMusic() {
  var x = document.getElementById("clothing");
	var y = document.getElementById("accessories");
	var z = document.getElementById("music");
  if (z.style.display === "none") {
    z.style.display = "block";
	  x.style.display = "none";
	  y.style.display = "none";
  } else {
    x.style.display = "none";
	  y.style.display = "none";
  }
}

function showAll() {
  var x = document.getElementById("clothing");
	var y = document.getElementById("accessories");
	var z = document.getElementById("music");
  if (x.style.display === "none" || y.style.display === "none" || z.style.display === "none" ) {
    z.style.display = "block";
	  x.style.display = "block";
	  y.style.display = "block";
  } 
  }



