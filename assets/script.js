let flecheGaucheHMTL = document.querySelector(".arrow_left");
let flecheDroiteHTML = document.querySelector(".arrow_right");
let dotsHTML = document.querySelector(".dots");

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentIndex = 0;

for (let index = 0; index < slides.length; index++) {
  let dotSpan = document.createElement("span");
  dotSpan.classList.add("dot");
  dotsHTML.appendChild(dotSpan);
}

let allDotsHTML = document.querySelectorAll(".dot");
allDotsHTML[currentIndex].classList.add("dot_selected");



flecheGaucheHMTL.addEventListener("click", () => {
	console.log("Flèche Gauche Séléctionner")
})


flecheDroiteHTML.addEventListener("click", () => {
	console.log("Flèche Droite Séléctionner")
})