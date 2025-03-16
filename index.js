console.clear();

const bookMarkButton = document.querySelector(".bookmark__icon");

bookMarkButton.addEventListener("click", () => {
  bookMarkButton.classList.toggle("bookmark--active");
});

const showAnswerButton = document.querySelector(".card__button-answer");
const theAnswer = document.querySelector(".card__answer");

showAnswerButton.addEventListener("click", () => {
  theAnswer.classList.toggle("card__answer--active");

  if (theAnswer.classList.contains("card__answer--active")) {
    showAnswerButton.textContent = "Hide Answer";
  } else {
    showAnswerButton.textContent = "Show Answer";
  }
});
