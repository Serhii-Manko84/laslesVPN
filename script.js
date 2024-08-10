const slides = document.querySelectorAll(".customer-item");
const controlls = document.querySelectorAll(".controlls");

console.log("Controls:", controlls);

console.log("Slides:", slides);

let currentIndex = 0;

function showSlide(index) {
    const slideWidth = slides[0].offsetWidth; // Ширина одного слайда
    const offset = -index * slideWidth;
    document.querySelector('.customer-list').style.transform = `translateX(${offset}px)`;
    currentIndex = index;
  }

// function showSlide(index) {
//   console.log(`Showing slide ${index}`);
//   if (slides[currentIndex]) {
//     slides[currentIndex].classList.remove("active-slide");
//   }
//   if (slides[index]) {
//     slides[index].classList.add("active-slide");
//   }
//   currentIndex = index;
// }

controlls.forEach((control) => {
  control.addEventListener("click", (event) => {
    const target = event.currentTarget;
    console.log("Clicked button:", target);

    if (target.classList.contains("prev")) {
      let index = currentIndex - 1;
      if (index < 0) {
        index = slides.length - 1;
      }
      showSlide(index);
    } else if (target.classList.contains("next")) {
      let index = currentIndex + 1;
      if (index >= slides.length) {
        index = 0;
      }
      showSlide(index);
    }
  });
});

showSlide(currentIndex);
