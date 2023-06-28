const seeMoreBtns = document.querySelectorAll(".services__btn");

const btnDown = btn => {
  btn.classList.toggle("services__btn--down");
  btn.textContent = btn.classList.contains("services__btn--down")
    ? "Inhoud verbergen"
    : "Bekijk meer";
};

const showText = btn => {
  btnDown(btn);
  const title = btn.parentNode.querySelector(".services__title");
  const text = btn.parentNode.querySelector(".services__text");
  title.classList.toggle("services__title--up");
  text.classList.toggle("services__text--appear");
};

seeMoreBtns.forEach(btn => {
  btn.addEventListener("click", () => showText(btn));
});
