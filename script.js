const slides = document.querySelectorAll(".customer-item");
const sliderLine = document.querySelector(".customer-list");
const prevSlide = document.getElementById("prev");
const nextSlide = document.getElementById("next");

let currentSlideIndex = 0;

let sliderWidth = slides[0].offsetWidth;
const widthMarg = 400;

function updateSliderWidth() {
  sliderWidth = slides[0].offsetWidth;
  sliderLine.style.width = `${slides.length * sliderWidth + widthMarg}px`;
}

function removeClassSlide() {
  slides.forEach((slide) => slide.classList.remove("active-slide"));
}

function rollSlide() {
  const maxOffset = sliderLine.scrollWidth - sliderWidth; 
  const offset = Math.min(currentSlideIndex * sliderWidth, maxOffset);
  sliderLine.style.transform = `translateX(-${offset}px)`;
  slides[currentSlideIndex].classList.add("active-slide");
}

function nextShowSlide() {
  removeClassSlide();
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  rollSlide();
}

function prevShowSlide() {
  removeClassSlide();
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  rollSlide();
}

// Ініціалізація ширини та початкової позиції слайдера
updateSliderWidth();
rollSlide();

// Оновлюємо ширину слайдера при зміні розміру вікна
window.addEventListener("resize", () => {
  updateSliderWidth();
  rollSlide(); // Перераховуємо позицію слайдера після зміни розміру вікна
});

nextSlide.addEventListener("click", nextShowSlide);
prevSlide.addEventListener("click", prevShowSlide);
