document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const header = document.querySelector(".header-container");

  function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 10) {
      header.classList.add("headerColor");
    } else {
      header.classList.remove("headerColor");
    }

    // Mobile responsiveness logic
    if (window.innerWidth <= 768) {
      if (scrollPosition > lastScrollTop) {
        header.style.top = "-100px";
      } else {
        header.style.top = "0";
      }
    } else {
      header.style.top = "0";
    }

    lastScrollTop = scrollPosition;
  }

  handleScroll();

  window.addEventListener("scroll", handleScroll);
});

const header = document.querySelector(".header-container");
header.style.transition = "top 0.3s ease-in-out";

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

    const dot = document.createElement("div");
    dot.className = "dot";
    dots.push(dot);
    dotsContainer.appendChild(dot);

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

  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((accordionItem) => {
    if (accordionItem !== item) {
      accordionItem.classList.remove("active");
      const content = accordionItem.querySelector(".accordion-content");
    }
  });

  item.classList.toggle("active");
  const content = item.querySelector(".accordion-content");
  if (item.classList.contains("active")) {
    content.style.display = "block";
  }

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
