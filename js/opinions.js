const container = document.querySelector(".opinions");
const [opinion, author, companyName] = container.querySelectorAll(
  ".opinions__opinion, .opinions__author-name, .opinions__author-company"
);
const arrows = container.querySelectorAll(".opinions__arrow");
const currentOpinion = document.getElementById("current-opinion");
const opinionsLength = document.getElementById("opinions-length");

const opinions = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel quia explicabo.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum in suscipit voluptatibus autem. Facere, dignissimos corporis. Temporibus.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
];
const authors = ["Adrie Lans", "Andre van Laarhoven", "Beata Bronkchorst"];
const companies = [
  "Palletbedrijf Lans",
  "Laarhoven Pallets",
  "Restaurant Hilton",
];

let index = 0;

function showOpinion() {
  opinion.textContent = opinions[index];
  author.textContent = authors[index];
  companyName.textContent = companies[index];
  opinionsLength.textContent = opinions.length;
  currentOpinion.textContent = index + 1;
}

showOpinion();

const changeOpinion = e => {
  let changeDirection = e.target.dataset.direction;
  if (changeDirection == "right") {
    index++;
    if (index === opinions.length) {
      index = 0;
    }
  }
  if (changeDirection == "left") {
    index--;
    if (index < 0) {
      index = opinions.length - 1;
    }
  }
  showOpinion();
};

arrows.forEach(arrow => arrow.addEventListener("click", changeOpinion));
