const Navbar = document.querySelector(".navbar"); 

console.log(Navbar);

const crearNav = () => {
    Navbar.innerHTML = ` <nav class="navbar">
    <div class="navbar__container">
      <a href="/index.html" class="nav__logo" id="navbar__logo">
        <img
          src="../images/detranquis_logo.png"
          class="nav__logo-img"
          alt=""
        />
      </a>
      <div class="navbar__toggle" id="mobile-menu">
        <span class="bar"></span> <span class="bar"></span>
        <span class="bar"></span>
      </div>

      <ul class="nav__menu" id="menu">
        <li class="nav__link">
          <a class="atop" href="/pages/tipoBares.html" id="tipo-bares"
            >Tipo Bares</a
          >
        </li>
        <li class="nav__link">
          <a class="atop" href="/pages/zonas.html" id="zonas">Zonas</a>
        </li>
        <li class="nav__link">
          <a class="atop" href="/pages/sobreNosotros.html" id="sobre-nosotros"
            >Sobre De Tranquis</a
          >
        </li>
      </ul>

      <div class="nav__buttons">
        <a href="" class="nav__button">Regístrate</a>
        <a href="/pages/login.html" class="nav__button nav__button--bold"
          >Inicia Sesión</a
        >
      </div>
      <div class="menu-bar">
        <i class="fas fa-bars" id="menu-bar"></i>
      </div>
    </div>
  </nav>`;
}

crearNav();

