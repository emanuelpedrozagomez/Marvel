const carousel = document.querySelector(".carousel");
const slides = document.querySelector(".slides");
const previousButton = document.querySelector(".carousel-button_previous");
const nextButton = document.querySelector(".carousel-button_next");

let currentSlide = 0;

previousButton.addEventListener("click", () => {
  currentSlide--;
  slides.style.transform = `translateX(calc(-100% * ${currentSlide}))`;
});

nextButton.addEventListener("click", () => {
  currentSlide++;
  slides.style.transform = `translateX(calc(-100% * ${currentSlide}))`;
});
