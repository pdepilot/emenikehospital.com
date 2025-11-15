// Toggle sidebar on mobile
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebarClose");
const sidebarOverlay = document.getElementById("sidebarOverlay");

function openSidebar() {
  sidebar.classList.add("active");
  sidebarOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  sidebar.classList.remove("active");
  sidebarOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

menuToggle.addEventListener("click", openSidebar);
sidebarClose.addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

// Close sidebar when clicking on a nav item (on mobile)
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      closeSidebar();
    }
  });
});

// Close sidebar when window is resized to desktop size
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeSidebar();
  }
});

// Contact Modal Functionality
const newContactBtn = document.getElementById("newContactBtn");
const contactModal = document.getElementById("contactModal");
const modalClose = document.getElementById("modalClose");
const cancelBtn = document.getElementById("cancelBtn");
const saveContactBtn = document.getElementById("saveContactBtn");

function openContactModal() {
  contactModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeContactModal() {
  contactModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

newContactBtn.addEventListener("click", openContactModal);
modalClose.addEventListener("click", closeContactModal);
cancelBtn.addEventListener("click", closeContactModal);

saveContactBtn.addEventListener("click", function () {
  // In a real application, this would save the contact data
  alert("Contact added successfully!");
  closeContactModal();
});

// Close modal when clicking outside the modal content
contactModal.addEventListener("click", function (e) {
  if (e.target === contactModal) {
    closeContactModal();
  }
});

// Contact Detail View Functionality
const contactDetailView = document.getElementById("contactDetailView");
const closeDetailView = document.getElementById("closeDetailView");
const viewContactButtons = document.querySelectorAll(".view-contact");

function openContactDetail() {
  contactDetailView.classList.add("active");
  // Scroll to the detail view
  contactDetailView.scrollIntoView({ behavior: "smooth" });
}

function closeContactDetail() {
  contactDetailView.classList.remove("active");
}

viewContactButtons.forEach((button) => {
  button.addEventListener("click", openContactDetail);
});

closeDetailView.addEventListener("click", closeContactDetail);
