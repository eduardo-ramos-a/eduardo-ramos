import { header, footer } from "./templates/template.js";
import darkMode from "./utils/darkMode.js";
import menu from "./utils/menu.js";
import getSkills from "./utils/skillsList.js";

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
getSkills();
