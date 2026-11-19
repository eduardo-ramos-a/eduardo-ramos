// Menú Hamburguesa: Exportar la función
// menu (por defecto). Implementar el toggle
// para la hamburguesa, añadir/quitar la clase
// 'active' a la hamburguesa y al menú
// (nav-links), y cerrar automáticamente el
// menú al hacer clic en un enlace
const menu = () => {
  const hamburger = document.querySelector("#btn-hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");

      navLinks.classList.toggle("active");
    });
  }
};

export default menu;
