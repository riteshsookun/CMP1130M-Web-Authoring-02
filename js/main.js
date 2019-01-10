// JavaScript Document

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



