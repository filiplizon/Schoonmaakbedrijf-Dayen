const menuButton = document.querySelector('.nav__menu');
const nav = document.querySelector('.nav')
const menuList = document.querySelector('.nav__list');

let scroll = true;

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('nav__menu--is-open');
    nav.classList.toggle('nav--is-open');
    menuList.classList.toggle('nav__list--is-open');
    scroll = !scroll;
    window.addEventListener("scroll", noScroll);
})

function noScroll() {
    if (scroll == false)
        window.scrollTo(0, 0);
}


const navIconButton = document.querySelector('.nav__link-mobile');
const navIcon = document.querySelector('.nav__icon-mobile');
navIconButton.addEventListener('click', () => {
    navIconButton.classList.toggle('nav__link-mobile--clicked');
    navIcon.classList.toggle('nav__icon-mobile--is-selected');
})