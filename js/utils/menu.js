// Menú Hamburguesa: Exportar la función
// menu (por defecto). Implementar el toggle
// para la hamburguesa, añadir/quitar la clase
// 'active' a la hamburguesa y al menú
// (nav-links), y cerrar automáticamente el
// menú al hacer clic en un enlace
const menu = () => {
  const btnHamburger = document.querySelector("#btn-hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (btnHamburger) {
    btnHamburger.addEventListener("click", (event) => {
      //   event.stopPropagation;
      btnHamburger.classList.toggle("active");

      navLinks.classList.toggle("active");
    });
  }

  btnHamburger.addEventListener("click", (event) => {
    // event.stopPropagation;
  });

  document.addEventListener("click", () => {
    btnHamburger.classList.remove("active");
  });
};

export default menu;
