// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });
}

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Show/hide scroll to top button
  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
});

// Scroll to top functionality
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Carousel functionality
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dot");
const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");
let currentSlide = 0;
let slideInterval;

// Function to show a specific slide
function showSlide(n) {
  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Remove active class from all dots
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  // Show the selected slide
  slides[n].classList.add("active");
  dots[n].classList.add("active");
  currentSlide = n;
}

// Next slide function
function nextSlide() {
  let next = currentSlide + 1;
  if (next >= slides.length) {
    next = 0;
  }
  showSlide(next);
}

// Previous slide function
function prevSlide() {
  let prev = currentSlide - 1;
  if (prev < 0) {
    prev = slides.length - 1;
  }
  showSlide(prev);
}

// Event listeners for buttons
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Event listeners for dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    resetInterval();
  });
});

// Auto slide function
function startInterval() {
  slideInterval = setInterval(nextSlide, 5000);
}

// Reset interval when user interacts with carousel
function resetInterval() {
  clearInterval(slideInterval);
  startInterval();
}

// Start the auto slide
startInterval();

// Simple animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(".value-card, .timeline-item, .team-member")
  .forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
