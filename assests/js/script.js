document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleBtn = document.getElementById("themeToggle");

  // Load saved theme
  const savedTheme = localStorage.getItem("genai-theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    if (toggleBtn) toggleBtn.innerHTML = '<i class="bi bi-sun"></i> Light Mode';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isDark = body.classList.contains("dark-mode");
      localStorage.setItem("genai-theme", isDark ? "dark" : "light");
      toggleBtn.innerHTML = isDark
        ? '<i class="bi bi-sun"></i> Light Mode'
        : '<i class="bi bi-moon"></i> Dark Mode';
    });
  }
});
