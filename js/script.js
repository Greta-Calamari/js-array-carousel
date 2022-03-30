




let currentIndex = 0;
const listaImmagini = document.getElementsByClassName("item");
const listaSlide = document.getElementsByClassName("mySlides1");

const next = document.querySelector(".next");
next.addEventListener("click", function () {
  listaSlide[currentIndex].classList.remove("visible");
  currentIndex += 1;
  if (currentIndex > 4) {currentIndex = 0}
  listaSlide[currentIndex].classList.add("visible");
});

const prev = document.querySelector(".prev");
prev.addEventListener("click", function () {
    
    listaSlide[currentIndex].classList.remove("visible");
    currentIndex -= 1;
    if (currentIndex < 0) {currentIndex = 4}
    listaSlide[currentIndex].classList.add("visible");
    
    
  })








