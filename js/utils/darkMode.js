// Modo Oscuro: Exportar la función
// darkMode (por defecto). Debe implementar
// la lógica de toggle para cambiar entre modo
// claro/oscuro, añadir/quitar la clase
// 'dark-mode' al elemento que contenga toda
// la página.
// Siguiente Sprint: Guardar la preferencia en
// localStorage y cargar esta preferencia al
// iniciar la aplicación.
const darkMode = () => {
  const btnDarkMode = document.querySelector("#darkModeToggle");
  const body = document.body;

  //Activar modo oscuro
  btnDarkMode.addEventListener("click", () =>
    body.classList.toggle("dark-mode"),
  );
};

export default darkMode;
