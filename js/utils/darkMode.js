const darkMode = () => {
  const btnDarkMode = document.querySelector("#darkModeToggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") body.classList.add("dark-mode");

  //Activar modo oscuro
  btnDarkMode.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
};

export default darkMode;
