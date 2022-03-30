const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]











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















