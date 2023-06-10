import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const listItems = galleryItems
  .map(
    (galleryItems) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=${galleryItems.original}>
      <img class="gallery__image"
         src=${galleryItems.preview}
         data-source = ${galleryItems.original}
         alt ='${galleryItems.description}'>
       </a>
        </li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", listItems);
galleryEl.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();

  const modalImg = basicLightbox.create(
    `<img
        width=100%"
        height="100%"
        src = ${e.target.dataset.source}
      >`,
    { onShow: () => galleryEl.addEventListener("keydown", onEscKeyPress) }
  );

  const onEscKeyPress = (e) => {
    if (e.key === "Escape") modalImg.close();
  };
  modalImg.show();
}

console.log(galleryItems);
