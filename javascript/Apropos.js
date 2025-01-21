let slideIndex = 0; // Current slide index
showSlides(slideIndex); // Initialize the first slide

// Show a specific slide
function showSlides(index) {
  const slides = document.querySelectorAll(".myslides");
  if (index >= slides.length) slideIndex = 0; // Wrap around to the first slide
  if (index < 0) slideIndex = slides.length - 1; // Wrap around to the last slide

  // Hide all slides and reset their display
  slides.forEach((slide) => (slide.style.display = "none"));

  // Show the current slide
  slides[slideIndex].style.display = "block";
}

//slide index
function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}
