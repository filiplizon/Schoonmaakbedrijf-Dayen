const aboutHeading = document.querySelector('.about__heading');
const aboutText = document.querySelector('.about__text');
const aboutPhoto = document.querySelector('.about__photo')
const servicesHeading = document.querySelector('.services__heading');
const servicesText = document.querySelector('.services__describtion');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const features = document.querySelector('.features');
const featuresHeadings = document.querySelectorAll('.features__title');
const featuresTexts = document.querySelectorAll('.features__text');

function isAnyPartOfElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

const addClassAfterScroll = () => {
    if (isAnyPartOfElementInViewport(about)) {
        aboutHeading.classList.add('about__heading--slide');
        aboutText.classList.add('about__text--slide');
        aboutPhoto.classList.add('about__photo--active');
    }
    if (isAnyPartOfElementInViewport(services)) {
        servicesHeading.classList.add('services__heading--appear');
        servicesText.classList.add('services__describtion--appear');
    }
    featuresHeadings.forEach((heading) => {
        if (isAnyPartOfElementInViewport(heading)) {
            heading.classList.add('features__title--slide-in-from-right');
        }
    })
    featuresTexts.forEach((text) => {
        if (isAnyPartOfElementInViewport(text)) {
            text.classList.add('features__text--slide-in-from-right');
        }
    })
}

window.addEventListener('scroll', addClassAfterScroll);