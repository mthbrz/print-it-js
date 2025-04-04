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

let currentSlide = 0; 
const img = document.querySelector(".banner-img"); 
const text = document.querySelector(".arrow p"); 

	//étape 2

let arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", () => {
	console.log("test eventListener au clic droit");})

let arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click", () =>{
	console.log("test eventListener au clic gauche");})

	//étape 3

const dotsContainer = document.querySelector(".dots"); 

function createDots() {
	dotsContainer.innerHTML = ""; // Vider le conteneur avant de le remplir
}
	for (let i = 0; i < slides.length; i++) {
	  const dot = document.createElement("div");
	  dot.classList.add("dot");
	  if (i === currentSlide) {
		dot.classList.add("dot_selected");
	  }
	  dotsContainer.appendChild(dot);
	}
  
	//étape 4 
	//étape 5 avec ajout condition

arrowRight.addEventListener("click", nextSlide); 
function nextSlide() {
	currentSlide++; 
	if (currentSlide >= slides.length) {
		currentSlide = 0; 
	}
	updateSlide(); 
	
}
arrowRight.addEventListener("click", updateDots);
function updateDots() {
	dotsContainer.innerHTML = ""; 
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		if (i === currentSlide) {
			dot.classList.add("dot_selected"); 
		}
		dotsContainer.appendChild(dot);
	}
}

arrowLeft.addEventListener("click", previousSlide); 
function previousSlide() {
	currentSlide--; 
	if (currentSlide < 0) {
		currentSlide = slides.length - 1; 
	}
	updateSlide(); 
	
}
arrowLeft.addEventListener("click", updateDots);
function updateDots() {
	dotsContainer.innerHTML = ""; 
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		if (i === currentSlide) {
			dot.classList.add("dot_selected"); 
		}
		dotsContainer.appendChild(dot);
	}
}

function updateSlide() {
	img.src = `assets/images/slideshow/${slides[currentSlide].image}`; 
	text.innerHTML = slides[currentSlide].tagLine; 
}

