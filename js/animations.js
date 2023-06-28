const about = document.querySelector(".about");
const services = document.querySelector(".services");
const features = document.querySelector(".features");
const aboutHeading = about.querySelector(".about__heading");
const aboutText = about.querySelector(".about__text");
const aboutPhoto = about.querySelector(".about__photo");
const servicesHeading = services.querySelector(".services__heading");
const servicesText = services.querySelector(".services__describtion");
const featuresHeadings = features.querySelectorAll(".features__title");
const featuresTexts = features.querySelectorAll(".features__text");

function isAnyPartOfElementInViewport(el) {
  const { top, height, left, width } = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const vertInView = top <= windowHeight && top + height >= 0;
  const horInView = left <= windowWidth && left + width >= 0;

  return vertInView && horInView;
}

window.addEventListener("scroll", () => {
  if (isAnyPartOfElementInViewport(about)) {
    aboutHeading.classList.add("about__heading--slide");
    aboutText.classList.add("about__text--slide");
    aboutPhoto.classList.add("about__photo--active");
  }
  if (isAnyPartOfElementInViewport(services)) {
    servicesHeading.classList.add("services__heading--appear");
    servicesText.classList.add("services__describtion--appear");
  }
  featuresHeadings.forEach(heading => {
    if (isAnyPartOfElementInViewport(heading)) {
      heading.classList.add("features__title--slide-in-from-right");
    }
  });
  featuresTexts.forEach(text => {
    if (isAnyPartOfElementInViewport(text)) {
      text.classList.add("features__text--slide-in-from-right");
    }
  });
});
