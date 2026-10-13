/* ==================================
   PROJECT READ MORE / READ LESS
================================== */

function toggleDetails(projectId, button) {
  const details = document.getElementById(projectId);

  if (!details || !button) {
    return;
  }

  details.classList.toggle("show");

  const isOpen = details.classList.contains("show");

  button.textContent = isOpen ? "Read Less −" : "Read More +";
}

/* ==================================
   NAVIGATION ACTIVE LINK
================================== */

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach(function (item) {
        item.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});

/* ==================================
   HEADER SCROLL EFFECT
================================== */

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
