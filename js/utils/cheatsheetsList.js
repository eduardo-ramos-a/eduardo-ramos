import cheatsheets from "../data/cheatsheets.js";

const getCheatsheets = () => {
  const cheatsheetsContainer = document.getElementById("cheatsheets-container");

  if (!cheatsheetsContainer) return;

  const cheatsheetsHTML = cheatsheets
    .map(
      (cheatsheet) =>
        `<a href=".${cheatsheet.link}" class="cheatsheet-card">
      <div class="cheatsheet-icon">
        <img src="${cheatsheet.icon}" alt="${cheatsheet.name}" width="48" height="48">
      </div>
      <h3>${cheatsheet.name}</h3>
      <p class="cheatsheet-description">${cheatsheet.description}</p>
    </a>`,
    )
    .join("");

  cheatsheetsContainer.innerHTML = cheatsheetsHTML;
};

export default getCheatsheets;
