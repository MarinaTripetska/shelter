// const header = document.getElementById("header");
// const mobileMenu = document.querySelector(".mobile-menu");
// const burger = document.getElementById("burger");
// const nav = document.getElementById("navigation");
// const logo = document.querySelectorAll(".logo");

// burger.addEventListener("click", openMenu);
// function openMenu() {
//   header.classList.toggle("menu-open");
//   logo.forEach((el) => el.classList.toggle("menu-open"));
//   mobileMenu.classList.toggle("menu-open");
//   burger.classList.toggle("open");
//   nav.classList.toggle("open");
// }
//REFS DOM ELEMENTS
const body = document.querySelector("body");
const mobileMenu = document.querySelector(".mobile-menu");
const burger = document.getElementById("burger");
const nav = document.getElementById("navigation");
const navItemsColection = nav.querySelectorAll("a");
const logo = document.querySelector(".logo");

//================
const mql = window.matchMedia("(max-width: 767px)");

//EVENTS
window.addEventListener("load", () => {
  if (mql.matches) {
    burger.addEventListener("click", toggleBurgerMenu);
    mobileMenu.addEventListener("click", onOverlayClick);
    navItemsColection.forEach((a) =>
      a.addEventListener("click", toggleBurgerMenu)
    );
  }
});

mql.addEventListener("change", () => {
  if (mql.matches) {
    burger.addEventListener("click", toggleBurgerMenu);
    mobileMenu.addEventListener("click", onOverlayClick);
    navItemsColection.forEach((a) =>
      a.addEventListener("click", toggleBurgerMenu)
    );
  } else {
    body.classList.remove("menu-open");
    mobileMenu.classList.remove("menu-open");
    burger.classList.remove("open");
    logo.classList.remove("menu-open");

    burger.removeEventListener("click", toggleBurgerMenu);
    mobileMenu.removeEventListener("click", onOverlayClick);
    navItemsColection.forEach((a) =>
      a.removeEventListener("click", toggleBurgerMenu)
    );
  }
});

//=============================
function toggleBurgerMenu() {
  body.classList.toggle("menu-open");
  logo.classList.toggle("menu-open");
  burger.classList.toggle("open");
  mobileMenu.classList.toggle("menu-open");
}

function onOverlayClick(e) {
  if (e.target === e.currentTarget) {
    toggleBurgerMenu();
  }
}
