const Navbar = document.querySelector(".navbar"); 

console.log(Navbar);

const crearNav = () => {
    Navbar.innerHTML = `<div class="nav__logo">
    <a href="/index.html" id="navbar__logo">
    <img src="../images/detranquis_logo.png" class="nav__logo-img" alt="" />
</a>
</div>
    <ul class="nav__menu" id="menu">
        <li class="nav__link"><a class="atop" href="/pages/tipoBares.html">Tipo Bares</a></li>
        <li class="nav__link"><a class="atop" href="/pages/zonas.html">Zonas</a></li>
        <li class="nav__link"><a class="atop" href="/pages/sobreNosotros.html">Sobre De Tranquis</a></li>
    </ul>

<div class="nav__buttons">
    <a href="" class="nav__button">Regístrate</a>
    <a href="/pages/login.html" class="nav__button nav__button--bold">Inicia Sesión</a>
</div>
<div class="menu-bar">
    <i class="fas fa-bars" id="menu-bar"></i>
</div>`;
}

crearNav();

