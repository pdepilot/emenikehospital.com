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