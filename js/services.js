const seeMoreBtn = document.querySelectorAll('.services__btn');

const btnDown = (e) => {
    e.target.classList.toggle('services__btn--down');
    if (e.target.classList.contains('services__btn--down')) {
        e.target.textContent = 'Inhoud verbergen'
    } else {
        e.target.textContent = 'Bekijk meer'
    }
}

const showText = (e) => {
    btnDown(e);
    e.target.parentNode.firstChild.nextSibling.classList.toggle('services__title--up');
    e.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.classList.toggle('services__text--appear');
}

seeMoreBtn.forEach(btn => {
    btn.addEventListener('click', showText);
})