import { cards } from "./cards.js";

const cardSection = document.querySelector(".card-section-alls");

cards.forEach((card) => {
  const cardElementsingle = document.createElement("article");
  cardElementsingle.classList.add("card-slider__card");
  cardElementsingle.innerHTML = `
        <div class="card__image">
            <img src="${card.imageURL}" alt="${card.title}" class="card__img">
        </div>

        <div class="card__data">
            <h3 class="card__name">${card.title}</h3>
            <p class="card__description">
                ${card.description}
            </p>
            <a href="${card.linkToCard}" class="card__button" ${!card.linkToCard ? "disabled" : ""}>Crear Tarjeta</a>
        </div>
    `;
  cardSection.appendChild(cardElementsingle);
});
