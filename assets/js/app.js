import { showMenu, hideMenu } from "./header.js";
import { cards } from "./cards.js";

// Función para hacer visible el contenido con animación
window.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.getElementById("hero-content");
  setTimeout(() => {
    heroContent.classList.add("visible");
  }, 200);
});

showMenu();
hideMenu();


const cardsContainer = document.querySelector(".swiper-wrapper");

// Limitar a 6 tarjetas
const limitedCards = cards.slice(0, 6);

limitedCards.forEach((card) => {
  const cardElement = document.createElement("article");
  cardElement.classList.add("card-slider__card", "swiper-slide");
  cardElement.innerHTML = `
        <div class="card__image">
            <img src="${card.imageURL}" alt="${card.title}" class="card__img">
        </div>

        <div class="card__data">
            <h3 class="card__name">${card.title}</h3>
            <p class="card__description">
                ${card.description}
            </p>
            <a href="${card.linkToCard}" class="card__button" ${
    !card.linkToCard ? "disabled" : ""
  }>Crear Tarjeta</a>
        </div>
    `;
  cardsContainer.appendChild(cardElement);
});

const button = document.querySelector(".card__button");

if (button.hasAttribute("disabled")) {
  button.addEventListener("click", (e) => e.preventDefault()); // Prevenir el clic
}

// Selecciona todos los botones con el atributo "disabled"
const disabledButtons = document.querySelectorAll(".card__button[disabled]");

// Itera sobre cada botón deshabilitado y cambia su texto
disabledButtons.forEach((button) => {
  button.textContent = "Próximamente";
});

/*=============== SWIPER JS ===============*/
const swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});
