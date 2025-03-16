const darkModeToggle = document.querySelector('[data-js="darkmode-input"]');
const body = document.body;

// تحميل الحالة المحفوظة مسبقًا من localStorage
body.classList.toggle(
  "dark-mode",
  localStorage.getItem("darkMode") === "enabled"
);
darkModeToggle.checked = body.classList.contains("dark-mode");

// عند تغيير الزر، بدّل الوضع واحفظه
darkModeToggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    body.classList.contains("dark-mode") ? "enabled" : "disabled"
  );
});
