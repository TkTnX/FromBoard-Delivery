/* BURGER MENU */

const burger = document.querySelector(".burger-icon");
const menu = document.querySelector(".menu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("_active");
    menu.classList.toggle("_active");
  });
}

/* SWIPER */

const swiper = new Swiper(".feedback-slider", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 200,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1536: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});


