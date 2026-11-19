// Inicialización: Importar header y footer de
// template.js y todas las funcionalidades de
// utils/. Cargar los templates en los
// elementos correspondientes del DOM e
// inicializar todas las funcionalidades
// (darkMode(), menu(), skillsList()).

import { header, footer } from "./templates/template.js";
import darkMode from "./utils/darkMode.js";
import menu from "./utils/menu.js";

const siteHeader = document.querySelector("header");
const siteFooter = document.querySelector("footer");

if (siteHeader) {
  siteHeader.innerHTML = header;
}

if (siteFooter) {
  siteFooter.innerHTML = footer;
}

darkMode();
menu();
