import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const listItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=${original}>
      <img class="gallery__image"
         src=${preview}
         data-source = ${original}
         alt ='${description}'>
       </a>
        </li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", listItems);

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modalImg = basicLightbox.create(`<img
          width="100%"
          height="100%"
          src = ${event.target.dataset.source}
        >`);

  modalImg.show();

  galleryEl.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(event) {
    if (event.key === "Escape") {
      modalImg.close();
    }
  }
});
console.log(galleryItems);
