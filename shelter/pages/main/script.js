//REFS DOM ELEMENTS
const body = document.querySelector("body");
const header = document.getElementById("header");
const mobileMenu = document.querySelector(".mobile-menu");
const burger = document.getElementById("burger");
const nav = document.getElementById("navigation");
const navItemsColection = nav.querySelectorAll("a");
const logo = document.querySelectorAll(".logo");
//================
const mql = window.matchMedia("(max-width: 767px)");
//EVENTS
window.addEventListener("load", () => {
  if (mql.matches) {
    burger.addEventListener("click", toggleBurgerMenu);
    mobileMenu.addEventListener("click", toggleBurgerMenu);
  }
});
console.log("Проверте пожалуйста в четверг");
mql.addEventListener("change", () => {
  if (mql.matches) {
    burger.addEventListener("click", toggleBurgerMenu);
    mobileMenu.addEventListener("click", toggleBurgerMenu);
  } else {
    burger.removeEventListener("click", toggleBurgerMenu);
    mobileMenu.removeEventListener("click", toggleBurgerMenu);
  }
});

//=============================
function toggleBurgerMenu() {
  body.classList.toggle("menu-open");
  header.classList.toggle("menu-open");
  logo.forEach((el) => el.classList.toggle("menu-open"));
  mobileMenu.classList.toggle("menu-open");
  burger.classList.toggle("open");
  nav.classList.toggle("open");
}
