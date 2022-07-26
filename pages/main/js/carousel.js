import {
  slider,
  wraper,
  carouselList,
  carouselItems,
  petCards,
  btnLeft,
  btnRight,
} from "./refs.js";

let direction = 1;

btnLeft.addEventListener("click", prev);
btnRight.addEventListener("click", next);

carouselList.addEventListener("transitionend", () => {
  if (direction === -1) {
    carouselList.appendChild(carouselList.firstElementChild);
    carouselList.appendChild(carouselList.firstElementChild);
    carouselList.appendChild(carouselList.firstElementChild);
  } else {
    carouselList.prepend(carouselList.lastElementChild);
    carouselList.prepend(carouselList.lastElementChild);
    carouselList.prepend(carouselList.lastElementChild);
  }

  carouselList.style.transition = "none";
  carouselList.style.transform = "translate(0)";
  setTimeout(() => {
    carouselList.style.transition = "transform 2s";
  });

  btnRight.addEventListener("click", next);
  btnLeft.addEventListener("click", prev);
});

function next() {
  direction = -1;
  carouselList.style.justifyContent = "flex-start";
  carouselList.style.transform = "translate(-109%)";
  btnRight.removeEventListener("click", next);
}

function prev() {
  carouselList.style.justifyContent = "flex-end";

  if (direction === -1) {
    direction = 1;
    carouselList.appendChild(carouselList.firstElementChild);
    carouselList.appendChild(carouselList.firstElementChild);
    carouselList.appendChild(carouselList.firstElementChild);
  }

  carouselList.style.transform = "translate(109%)";
  btnRight.removeEventListener("click", prev);
}
