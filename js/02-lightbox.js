import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);
let galleryEl = "";

galleryItems.forEach(({preview, original, description}) => {
   galleryEl += 
   `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
});

galleryContainer.insertAdjacentHTML("beforeend", galleryEl);
var lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt", coptionsDelay:250});

console.log(galleryItems);