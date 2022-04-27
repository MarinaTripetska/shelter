import { body, mobileMenu, burger, navItemsColection, logo } from "./refs.js";

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
