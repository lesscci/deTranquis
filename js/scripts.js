


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav__menu');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const tipoBaresMenu = document.querySelector('#tipo-bares');
  const  zonasMenu = document.querySelector('#zonas');
  const aboutMenu = document.querySelector('#sobre-nosotros');
}

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
