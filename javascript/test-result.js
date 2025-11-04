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
});

// Scroll to top functionality
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});







// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Track Results Functionality
document.getElementById("track-results").addEventListener("click", function () {
  const trackingNumber = document
    .getElementById("tracking-number")
    .value.trim();
  const loading = document.getElementById("loading");
  const resultsSection = document.getElementById("results-section");

  if (!trackingNumber) {
    alert("Please enter a tracking number");
    return;
  }

  // Show loading animation
  loading.style.display = "block";
  resultsSection.style.display = "none";

  // Simulate API call with timeout
  setTimeout(function () {
    loading.style.display = "none";

    // For demo purposes, we'll simulate different results based on tracking number
    if (trackingNumber.toLowerCase().includes("ready")) {
      showResults("ready", trackingNumber);
    } else if (trackingNumber.toLowerCase().includes("process")) {
      showResults("processing", trackingNumber);
    } else {
      showResults("not-ready", trackingNumber);
    }
  }, 2000);
});

function showResults(status, trackingNumber) {
  const resultsSection = document.getElementById("results-section");
  const statusBadge = document.getElementById("status-badge");
  const resultMessage = document.getElementById("result-message");
  const resultTrackingNumber = document.getElementById(
    "result-tracking-number"
  );
  const downloadBtn = document.getElementById("download-btn");

  // Update tracking number
  resultTrackingNumber.textContent = trackingNumber;

  // Update based on status
  if (status === "ready") {
    statusBadge.className = "status-badge status-ready";
    statusBadge.textContent = "Ready";
    resultMessage.textContent = "Your test results are ready for review";
    downloadBtn.style.display = "block";
  } else if (status === "processing") {
    statusBadge.className = "status-badge status-processing";
    statusBadge.textContent = "Processing";
    resultMessage.textContent = "Your test is currently being processed";
    downloadBtn.style.display = "none";
  } else {
    statusBadge.className = "status-badge status-not-ready";
    statusBadge.textContent = "Not Ready";
    resultMessage.textContent = "Your test results are not yet available";
    downloadBtn.style.display = "none";
  }

  // Show results section with animation
  resultsSection.style.display = "block";
}

// Download button functionality
document.getElementById("download-btn").addEventListener("click", function (e) {
  e.preventDefault();
  alert(
    "Your results have been downloaded. For security reasons, please save them in a secure location."
  );
});
