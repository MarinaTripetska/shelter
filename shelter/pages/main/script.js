const header = document.getElementById("header");
const mobileMenu = document.querySelector(".mobile-menu");
const burger = document.getElementById("burger");
const nav = document.getElementById("navigation");
const logo = document.querySelectorAll(".logo");

burger.addEventListener("click", openMenu);
function openMenu() {
  header.classList.toggle("menu-open");
  logo.forEach((el) => el.classList.toggle("menu-open"));
  mobileMenu.classList.toggle("menu-open");
  burger.classList.toggle("open");
  nav.classList.toggle("open");
}
