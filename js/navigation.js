const menuButton = document.querySelector('.nav__menu');
const nav = document.querySelector('.nav')
const menuList = document.querySelector('.nav__list');
const navMobileButton = document.querySelector('.nav__link-mobile');
const navMobileIcon = document.querySelector('.nav__icon-number');
const navLinks = document.querySelectorAll('.nav__link');
const navLogo = document.querySelector('.nav__logo');
const headerButton = document.querySelector('.btn');

let viewportWidth = window.innerWidth;

const openMenu = () => {
    menuButton.classList.toggle('nav__menu--is-open');
    nav.classList.toggle('nav--is-open');
    menuList.classList.toggle('nav__list--is-open');
    navLogo.classList.toggle('nav__logo--is-open');
}

const showNumber = (e) => {
    e.preventDefault();
    navMobileButton.classList.toggle('nav__link-mobile--clicked');
    navMobileIcon.classList.toggle('nav__icon-number--is-selected');
}

function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        if (viewportWidth < 360) {
            window.scroll({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            })
        } else if (viewportWidth < 768) {
            window.scroll({
                top: element.offsetTop - 95,
                behavior: 'smooth'
            })
        } else if (viewportWidth < 1024) {
            window.scroll({
                top: element.offsetTop - 150,
                behavior: 'smooth'
            })
        } else if (viewportWidth < 1400) {
            window.scroll({
                top: element.offsetTop - 200,
                behavior: 'smooth'
            })
        } else {
            window.scroll({
                top: element.offsetTop - 65,
                behavior: 'smooth'
            })
        }
    }
}

const scrollToTarget = (e) => {
    let option = e.target.dataset.option;
    if (option == undefined) {
        return true;
    }
    e.preventDefault();
    openMenu();
    scrollToElement(`.${option}`);
}

const modifyNav = () => {
    if (window.scrollY > 100) {
        nav.style.backgroundColor = '#ffffff'
        navLogo.classList.add('nav__logo--small');
    } else {
        nav.style.backgroundColor = '';
        navLogo.classList.remove('nav__logo--small');
    }
}

navLogo.addEventListener('click', () => {
    scrollToElement('.header');
});

headerButton.addEventListener('click', () => {
    scrollToElement('.about');
});

navLinks.forEach((Link) => {
    Link.addEventListener('click', scrollToTarget)
});

menuButton.addEventListener('click', openMenu);

if (viewportWidth > 1400) {
    navMobileButton.addEventListener('click', showNumber);
    window.addEventListener('scroll', modifyNav);
}