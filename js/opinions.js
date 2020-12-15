const opinion = document.querySelector('.opinions__opinion');
const author = document.querySelector('.opinions__author-name');
const companyName = document.querySelector('.opinions__author-company');
const arrows = document.querySelectorAll('.opinions__arrow');
const currentOpinion = document.getElementById('current-opinion');
const opinionsLength = document.getElementById('opinions-length');

let opinions = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel quia explicabo.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum in suscipit voluptatibus autem. Facere, dignissimos corporis. Temporibus.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'];
let authors = ['Adrie Lans', 'Andre van Laarhoven', 'Beata Bronkchorst']
let companies = ['Palletbedrijf Lans', 'Laarhoven Pallets', 'Restaurant Hilton']

let index = 0;
let opinionNumber = 1;

function showOpinion() {
    opinion.textContent = opinions[index];
    author.textContent = authors[index];
    companyName.textContent = companies[index];
    opinionsLength.textContent = opinions.length;
    currentOpinion.textContent = opinionNumber;
}

showOpinion();

const changeOpinion = (e) => {
    let changeDirection = e.target.dataset.direction;
    if (changeDirection == 'right') {
        index++;
        opinionNumber++
        if (index === opinions.length) {
            index = 0;
            opinionNumber = 1;
        }
    }
    if (changeDirection == 'left') {
        console.log('działa');
        index--;
        opinionNumber--;
        if (index < 0) {
            index = opinions.length - 1;
            opinionNumber = opinions.length;
        }
    }
    showOpinion();
}

arrows.forEach(arrow => arrow.addEventListener('click', changeOpinion));