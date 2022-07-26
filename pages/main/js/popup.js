import {
  body,
  petCards,
  modalOverlay,
  modalBody,
  closeModalBtn,
} from "./refs.js";
import pets from "../../../data/pets.json" assert { type: "json" };

//Add EVENTS
petCards.forEach((card) => card.addEventListener("click", openModal));

//FOO
function openModal(e) {
  const petName = e.currentTarget.childNodes[3].textContent;
  const petInfo = pets.find((pet) => pet.name === petName);

  modalBody.insertAdjacentHTML("beforeend", createModalContent(petInfo));

  modalOverlay.classList.add("_open");
  body.classList.add("menu-open");

  closeModalBtn.addEventListener("click", closeModalOnBtn);
  modalOverlay.addEventListener("click", closeModalOnOverlay);
}

function closeModal() {
  modalBody.innerHTML = "";
  modalOverlay.classList.remove("_open");
  body.classList.remove("menu-open");
}

function closeModalOnOverlay(e) {
  if (e.target === e.currentTarget) {
    closeModal();
    modalOverlay.removeEventListener("click", closeModalOnOverlay);
  }
}

function closeModalOnBtn() {
  closeModal();
  closeModalBtn.removeEventListener("click", closeModalOnBtn);
}

function createModalContent(data) {
  return `
 
  <img class="modal__img" src="${data.img}" alt="${data.name} photo" />
        
       <div class="modal__text-thumb">
          <h3 class="modal__title">${data.name}</h3>
          <p class="modal__title-descr">${data.type} - ${data.breed}</p>
          <p class="modal__description">
            ${data.description}
          </p>

          <ul class="modal__parameters-list">
            <li class="modal__parameters-item">
              <span class="modal__span-name">Age: </span>
              <span class="modal__span-value"> ${data.age}</span>
            </li>
            <li class="modal__parameters-item">
              <span class="modal__span-name">Inoculations: </span
              ><span class="modal__span-value"> ${data.inoculations.join(
                ", "
              )}</span>
            </li>
            <li class="modal__parameters-item">
              <span class="modal__span-name">Diseases: </span
              ><span class="modal__span-value"> ${data.diseases.join(
                ", "
              )}</span>
            </li>
            <li class="modal__parameters-item">
              <span class="modal__span-name">Parasites: </span
              ><span class="modal__span-value"> ${data.parasites.join(
                ", "
              )}</span>
            </li>
          </ul>`;
}
