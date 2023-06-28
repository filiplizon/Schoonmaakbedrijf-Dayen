const menuButton = document.querySelector(".nav__menu");
const nav = document.querySelector(".nav");
const navigationList = document.querySelector(".nav__list");
const navLogo = document.querySelector(".nav__logo");
const navLink = document.querySelectorAll(".nav__link");
let viewportWidth = window.innerWidth;

const changeNavigationVisibility = () => {
  menuButton.classList.toggle("nav__menu--is-open");
  navigationList.classList.toggle("nav__list--is-open");
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
    if (window.scrollY > 100) {
      nav.classList.add("nav--after-scroll");
      navLogo.classList.add("nav__logo--small");
    } else {
      nav.classList.remove("nav--after-scroll");
      navLogo.classList.remove("nav__logo--small");
    }
  }
};

window.addEventListener("scroll", modifyNav);
menuButton.addEventListener("click", changeNavigationVisibility);
navLink.forEach(link => {
  link.addEventListener("click", changeNavigationVisibility);
});
