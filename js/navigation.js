const menuButton = document.querySelector(".nav__menu");
const nav = document.querySelector(".nav");
const navigationList = document.querySelector(".nav__list");
const navLogo = document.querySelector(".nav__logo");
const navLink = document.querySelectorAll(".nav__link");
const viewportWidth = window.innerWidth;

const toggleNavigation = () => {
  menuButton.classList.toggle("nav__menu--is-open");
  navigationList.classList.toggle("nav__list--is-open");
  toggleBodyOverflow();
};

const toggleBodyOverflow = () => {
  if (
    navigationList.classList.contains("nav__list--is-open") &&
    viewportWidth < 1024
  ) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
};

const modifyNav = () => {
  if (viewportWidth > 1024) {
    const isScrolled = window.scrollY > 100;
    nav.classList.toggle("nav--after-scroll", isScrolled);
    navLogo.classList.toggle("nav__logo--small", isScrolled);
  }
};

window.addEventListener("scroll", modifyNav);
menuButton.addEventListener("click", toggleNavigation);
navLink.forEach(link => {
  link.addEventListener("click", toggleNavigation);
});
