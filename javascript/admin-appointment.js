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

// Appointment Modal Functionality
const newAppointmentBtn = document.getElementById("newAppointmentBtn");
const appointmentModal = document.getElementById("appointmentModal");
const modalClose = document.getElementById("modalClose");
const cancelBtn = document.getElementById("cancelBtn");
const saveAppointmentBtn = document.getElementById("saveAppointmentBtn");

function openAppointmentModal() {
  appointmentModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeAppointmentModal() {
  appointmentModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

newAppointmentBtn.addEventListener("click", openAppointmentModal);
modalClose.addEventListener("click", closeAppointmentModal);
cancelBtn.addEventListener("click", closeAppointmentModal);

saveAppointmentBtn.addEventListener("click", function () {
  // In a real application, this would save the appointment data
  alert("Appointment scheduled successfully!");
  closeAppointmentModal();
});

// Close modal when clicking outside the modal content
appointmentModal.addEventListener("click", function (e) {
  if (e.target === appointmentModal) {
    closeAppointmentModal();
  }
});

// Filter functionality
const statusFilter = document.getElementById("statusFilter");
const doctorFilter = document.getElementById("doctorFilter");
const dateFrom = document.getElementById("dateFrom");
const dateTo = document.getElementById("dateTo");

// Set today's date as default for date filters
const today = new Date().toISOString().split("T")[0];
dateFrom.value = today;

// Set dateTo to one week from today
const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);
dateTo.value = nextWeek.toISOString().split("T")[0];
