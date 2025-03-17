const form = document.querySelector('[data-js="form-data"]');
const body = document.querySelector('[data-js = "body-data"]');

const questionInput = document.querySelector('[data-js="form-question"]');
const questionCounter = document.createElement("p");
questionCounter.classList.add("counter");
questionCounter.textContent = 150; // تعيين القيمة الأولية للعداد
questionInput.after(questionCounter);

const answerInput = document.querySelector('[data-js="form-answer"]');
const answerCounter = document.createElement("p");
answerCounter.textContent = 150; // تعيين القيمة الأولية للعداد
answerCounter.classList.add("counter");
answerInput.after(answerCounter);

const tagInput = document.querySelector('[data-js = "form-tag"]');

// دالة لتحديث العداد عند الكتابة
function updateCounter(input, counterElement) {
  const maxLength = 150;
  const currentLength = input.value.length;
  const remaining = maxLength - currentLength;
  counterElement.textContent = remaining;
}

// إضافة الحدث عند الكتابة في الحقل
questionInput.addEventListener("input", () =>
  updateCounter(questionInput, questionCounter)
);
answerInput.addEventListener("input", () =>
  updateCounter(answerInput, answerCounter)
);
updateCounter(questionInput, questionCounter);
updateCounter(answerInput, answerCounter);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // منع إعادة تحميل الصفحة

  // جلب القيم من الحقول
  const questionText = questionInput.value;
  const answerText = answerInput.value;
  const tagText = tagInput.value;

  // إنشاء كارت جديد
  const ulElement = document.createElement("ul");
  ulElement.classList.add("card-list");

  const listElement = document.createElement("li");
  listElement.classList.add("card-list__item");

  const card = document.createElement("article");
  card.classList.add("card");

  const questionElement = document.createElement("h2");
  questionElement.classList.add("card__question");
  questionElement.textContent = questionText;

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("card__button-answer");
  buttonElement.textContent = "Show Answer";

  const answerElement = document.createElement("p");
  answerElement.classList.add("card__answer");
  answerElement.textContent = answerText;

  const tagList = document.createElement("ul");
  tagList.classList.add("card__tag-list");

  const tagItem = document.createElement("li");
  tagItem.classList.add("card__tag-list-item");
  tagItem.textContent = `#${tagText}`;

  // إضافة العنصر إلى القائمة
  tagList.append(tagItem);

  // تجميع العناصر داخل البطاقة
  card.append(questionElement);
  card.append(buttonElement);
  card.append(answerElement);
  card.append(tagList);
  listElement.append(card);
  ulElement.append(listElement);

  // إظهار وإخفاء الجواب عند الضغط على الزر
  const answerParagraph = card.querySelector(".card__answer");
  const answerButton = card.querySelector(".card__button-answer");

  answerButton.addEventListener("click", () => {
    answerParagraph.classList.toggle("card__answer--active");
    if (answerButton.classList.contains("card__answer--active")) {
      answerButton.textContent = "Hide Answer";
    } else {
      answerButton.textContent = "Show Answer";
    }
  });

  // إضافة الكارت إلى الصفحة
  body.append(ulElement);

  // إعادة تعيين النموذج
  form.reset();
  questionCounter.textContent = "150 characters left";
  answerCounter.textContent = "150 characters left";
});
