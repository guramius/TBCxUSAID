// document.addEventListener("DOMContentLoaded", function () {
//   function handleScroll() {
//     const header = document.querySelector(".header-container");
//     const scrollPosition = window.scrollY;

//     if (scrollPosition > 10) {
//       header.classList.add("headerColor");
//     } else {
//       header.classList.remove("headerColor");
//     }
//   }

//   handleScroll();

//   window.addEventListener("scroll", handleScroll);
// });
// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("add");
  navMenu.classList.toggle("add");
});
// slider
const images = [
  "img/usaid.webp",
  "img/space.webp",
  "img/tineti.webp",
  "img/Tegeta.webp",
  "img/spectre.webp",
  "img/tblizingi.webp",
  "img/ufc.webp",
];
const imagesPerSlide = 3;
let currentSlide = 0;

const dots = [];

function initSlider() {
  const slidesContainer = document.getElementById("slides");
  const dotsContainer = document.getElementById("dots-container");

  for (let i = 0; i < images.length; i += imagesPerSlide) {
    const slide = document.createElement("div");
    slide.className = "slide";

    for (let j = 0; j < imagesPerSlide; j++) {
      const imgIndex = i + j;

      if (imgIndex < images.length) {
        const img = document.createElement("img");
        img.src = images[imgIndex];
        img.alt = `Image ${imgIndex + 1}`;
        slide.appendChild(img);
      }
    }

    slidesContainer.appendChild(slide);

    // Create a dot for each slide
    const dot = document.createElement("div");
    dot.className = "dot";
    dots.push(dot);
    dotsContainer.appendChild(dot);

    // Add click event listener to each dot
    dot.addEventListener("click", () => {
      showSlide(i / imagesPerSlide);
    });
  }

  showSlide(currentSlide);
  updateDots();
}

function showSlide(index) {
  const slides = document.getElementById("slides");
  currentSlide =
    (index + Math.ceil(images.length / imagesPerSlide)) %
    Math.ceil(images.length / imagesPerSlide);  
  const translateValue = -currentSlide * 100 + "%";
  slides.style.transform = `translateX(${translateValue})`;

  updateDots();
}

function updateDots() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[currentSlide].classList.add("active");
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

document.addEventListener("DOMContentLoaded", initSlider);

//acordeon
function toggleAccordion(header) {
  const item = header.parentNode;

  // Close all other accordion items
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((accordionItem) => {
    if (accordionItem !== item) {
      accordionItem.classList.remove("active");
      const content = accordionItem.querySelector(".accordion-content");
    }
  });

  // Toggle the clicked accordion item
  item.classList.toggle("active");
  const content = item.querySelector(".accordion-content");
  if (item.classList.contains("active")) {
    content.style.display = "block";
  }

  // Toggle the arrow rotation
  const arrow = header.querySelector(".accordion-arrow");
  arrow.classList.toggle("rotate");
}
document.addEventListener("DOMContentLoaded", function () {
  collapseAll();
});

let burgerButton = document.getElementById("toggleButton");
let navBar = document.getElementById("navigation-ul");

burgerButton.addEventListener("click", function () {
  navBar.classList.toggle("toggle");
  burgerButton.classList.toggle("active");
});
