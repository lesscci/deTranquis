const Navbar = document.querySelector(".navbar");
const Footer = document.querySelector(".footer");

const crearNav = () => {
  Navbar.innerHTML = `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />      
      <div class="nav__logo">
    <a href="/index.html" id="navbar__logo">
    <img src="../images/detranquis_logo.png" class="nav__logo-img" alt="" />
</a>
</div>

<div>
<div class="nav__menu--dos">
<ul class="nav__ul-menu" id="menu">

<li class="nav__link"><a class="atop" href="/pages/tipoBares.html"> Tipo de Bares</a></li>
<li class="nav__link"><a class="atop" href="/pages/zonas.html">Zonas</a></li>
<li class="nav__link"><a class="atop" href="/pages/sobreNosotros.html">Sobre Nosotros </i></a></li>
</ul>
</div>
</div>
   <div class="nav__menu">
   <ul class="nav__ul-menu" id="menu">
   <li class="nav__link"><a class="atop" href="/index.html"><i class="fa-solid fa-house-chimney"></i></a></li>
   <li class="nav__link"><a class="atop" href="/pages/tipoBares.html">  <i class="fa-solid fa-martini-glass"></i></a></li>
   <li class="nav__link"><a class="atop" href="/pages/zonas.html"><i class="fa-solid fa-location-crosshairs"></i></a></li>
   <li class="nav__link"><a class="atop" href="/pages/sobreNosotros.html"><i class="fa-solid fa-people-group"></i></a></li>
</ul>
   </div>

<div class="nav__buttons">
    <a href="" class="nav__button">Regístrate</a>
    <a href="/pages/login.html" class="nav__button nav__button--bold">Inicia Sesión</a>
</div>`;
};

{
  /* <i class="fas fa-bars" id="menu-bar"></i> */
}

const crearFooter = () => {
  Footer.innerHTML = ` 
   <div class="footer__container container">                 
    <div class="footer__links"> 
        <p class="footer">Sobre Nosotros</p>
        <a href="/pages/contacus.html" class="footer__link">Contáctanos</a>
        <a href="" class="footer__link">Cómo funciona</a>
        <a href="" class="footer__link">Añade tu bar</a>
        <a href="" class="footer__link">Únete</a>
    </div>
<section class="social__media">
    <div class="social__media--wrap">
      <div class="footer__logo">
        <a href="/" id="footer__logo">DE TRANQUIS</a>
      </div>
      <p class="website__rights">© DE TRANQUIS 2022. All rights reserved</p>
      <div class="social__icons">
        <a href="/" class="social__icon--link" target="_blank"
          ><i class="fab fa-facebook"></i
        ></a>
        <a href="/" class="social__icon--link"
          ><i class="fab fa-instagram"></i
        ></a>
        <a href="/" class="social__icon--link"
          ><i class="fab fa-youtube"></i
        ></a>
        <a href="/" class="social__icon--link"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a href="/" class="social__icon--link"
          ><i class="fab fa-twitter"></i
        ></a>
      </div>
    </div>
  </section>
</div>`;
};

crearNav();
crearFooter();
