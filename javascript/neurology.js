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
let lastScrollTop = 0;
const topbar = document.getElementById("topbar");
const mainHeader = document.getElementById("mainHeader");
const topbarHeight = topbar.offsetHeight;

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Hide topbar when scrolling down
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    topbar.classList.add("hidden");
  } else {
    topbar.classList.remove("hidden");
  }

  // Make main header fixed when topbar is scrolled out of view
  if (scrollTop > topbarHeight) {
    mainHeader.classList.add("fixed");
    mainHeader.classList.add("scrolled");
  } else {
    mainHeader.classList.remove("fixed");
    mainHeader.classList.remove("scrolled");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

  // Show/hide scroll to top button
  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (scrollTop > 300) {
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

// Scroll reveal functionality
function revealOnScroll() {
  const revealElements = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("revealed");
    }
  });
}

// Initial check on page load
window.addEventListener("load", revealOnScroll);

// Check on scroll
window.addEventListener("scroll", revealOnScroll);
