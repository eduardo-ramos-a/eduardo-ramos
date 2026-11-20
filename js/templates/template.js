// Header
const header = `
<header>
 <nav>
        <a href="index.html" class="logo">
          <strong>ER</strong>
        </a>

        <ul class="nav-links">
          <button
            class="dark-mode-toggle"
            id="darkModeToggle"
            aria-label="Cambiar modo oscuro"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="fire-icon"
            >
              <path
                d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"
              />
              <path d="m5 22 14-4" />
              <path d="m5 18 14 4" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="extinguisher-icon"
            >
              <path d="M11 3a6 6 0 0 0-6 6v11" />
              <path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" />
              <path
                d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"
              />
              <path d="M18 3h-3" />
              <path d="M5 13h4" />
              <path d="M9 18h8" />
            </svg>
          </button>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#cheatsheets">Cheatsheets</a>
          </li>
          <li>
            <a href="#recursos">Recursos</a>
          </li>
          <li>
            <a href="contacto.html">Contacto</a>
          </li>
        </ul>

        <button
          id="btn-hamburger"
          class="hamburger"
          aria-label="Menú de navegación"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
</header>
`;

// Footer
const footer = `
<footer class="footer">
  <p>&copy; 2026 Eduardo Ramos - Fullstack Developer student &amp; QA Tester</p>
</footer>
`;

export { header, footer };
