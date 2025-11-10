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

  // Scroll animation for about section background
  const aboutBgAnimation = document.getElementById("aboutBgAnimation");
  if (aboutBgAnimation) {
    const scrollPosition = window.scrollY;
    aboutBgAnimation.style.transform = `translateY(${scrollPosition * 0.2}px)`;
  }

  // Insurance section reveal on scroll
  const insuranceSection = document.getElementById("insuranceSection");
  if (insuranceSection) {
    const sectionPosition = insuranceSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
      insuranceSection.classList.add("revealed");
    }
  }

  // Doctors section scroll reveal
  const doctorCards = document.querySelectorAll(".doctor-card");
  doctorCards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (cardPosition < screenPosition) {
      card.classList.add("revealed");
    }
  });
});

// Scroll to top functionality
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Slide functionality
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  let slideInterval;

  // Function to show a specific slide
  function showSlide(n) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    // Show the selected slide
    if (slides[n]) {
      slides[n].classList.add("active");
    }
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

  // Auto slide function
  function startInterval() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Start the auto slide
  startInterval();
});

// Animation on scroll for doctors section
const doctorObserverOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const doctorObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
    }
  });
}, doctorObserverOptions);

// Observe doctor cards for animation
document.querySelectorAll(".doctor-card").forEach((el) => {
  doctorObserver.observe(el);
});
