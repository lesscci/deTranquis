const Footer = document.querySelector(".footer");

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

crearFooter();
