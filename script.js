const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const languageBtn = document.getElementById("languageBtn");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

const savedLanguage = localStorage.getItem("pcMotorsLanguage");
const browserLanguage = navigator.language || navigator.userLanguage;

let currentLanguage = savedLanguage || (browserLanguage.startsWith("es") ? "es" : "en");

function applyLanguage(language) {
  document.querySelectorAll("[data-es][data-en]").forEach((element) => {
    const translation = element.getAttribute(`data-${language}`);

    if (translation) {
      element.textContent = translation;
    }
  });

  document.documentElement.lang = language;

  if (languageBtn) {
    languageBtn.textContent = language === "es" ? "EN" : "ES";
  }

  localStorage.setItem("pcMotorsLanguage", language);
}

if (languageBtn) {
  languageBtn.addEventListener("click", () => {
    currentLanguage = currentLanguage === "es" ? "en" : "es";
    applyLanguage(currentLanguage);
  });
}

applyLanguage(currentLanguage);