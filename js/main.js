const menuButton = document.querySelector('.nav__menu');
const nav = document.querySelector('.nav')
const menuList = document.querySelector('.nav__list');
let scroll = true;


menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('nav__menu--is-open');
    nav.classList.toggle('nav--is-open');
    menuList.classList.toggle('nav__list--is-open');
    scroll = !scroll;
    window.addEventListener("scroll", noscroll);
})

function noscroll() {
    if (scroll == false)
        window.scrollTo(0, 0);
}