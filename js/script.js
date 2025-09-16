document.addEventListener("DOMContentLoaded", () => {
  // Update footer year
  const yearElement = document.getElementById("year");
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  const toggleBtn = document.getElementById("dark-toggle");

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (toggleBtn) toggleBtn.textContent = "⚪";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "⚪";
        localStorage.setItem("theme", "dark");
      } else {
        toggleBtn.textContent = "⚫";
        localStorage.setItem("theme", "light");
      }
    });
  }

  // Hamburger menu
  const ham = document.querySelector('.ham');

  const mobMenu = document.querySelector('.mob-menu');

  ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    mobMenu.classList.toggle('active');
  })
});